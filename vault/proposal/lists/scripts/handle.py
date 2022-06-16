from __future__ import annotations

import json
import pathlib
import re
import sqlite3
import sys
import zlib
from collections import Counter
from sqlite3 import Row
from typing import Optional, Generic, TypeVar, TypedDict, Mapping, List

from tqdm import tqdm
from trafilatura.core import bare_extraction, extract

sys.path.append( "." )
import previews


class TrafilaturaExtraction( TypedDict ):
	title: Optional[ String ]
	author: Optional[ String ]
	url: Optional[ String ]
	hostname: Optional[ String ]
	description: Optional[ String ]
	sitename: Optional[ String ]
	date: Optional[ String ]
	categories: Optional[ List[ String ] ]
	tags: Optional[ List[ String ] ]
	fingerprint: Optional[ String ]
	comments: Optional[ String ]
	raw_text: Optional[ String ]
	text: Optional[ String ]
	source: Optional[ String ]
	# source-hostname: Optional[ String ]
	excerpt: Optional[ String ]


class Paths:
	HERE = pathlib.Path( __file__ )
	LIST_DIR = HERE.parent.parent
	CONTENT = "C:/Users/Mateus/OneDrive/state/assets/contents.db"
	ARTICLE = [ i for i in (LIST_DIR / "stream").glob( "articles.tsv" ) ][ 0 ]
	JS_ROOT = "C:/Users/Mateus/Desktop/workspace/leet/canHome"


String = str
Html = str
T = TypeVar( "T" )


class Compressed( Generic[ T ] ):
	...


class SourceInfo( TypedDict ):
	url: String
	headers: String
	source: String


class PreviewContent( TypedDict ):
	url: String
	title: String
	description: String
	image: String
	domain: String


class PreviewInfo( TypedDict ):
	url: String
	preview: PreviewContent


#

class Queries:
	CREATE_CONTENTS = """
create table if not exists url_contents
(
	url     Text not null,
	headers Blob,
	preview Blob,
	source  Blob,
	last_seen Int

);
"""

	CREATE_INDEX = """
	create unique index if not exists url_contents_url_uindex
	on url_contents ( url );
	"""

	INSERT_URL = """
	insert into  url_contents values ( :url , null , null , null , null ) on conflict do nothing;
"""

	SET_PREVIEW = """
update url_contents
set
	preview  = :preview,
	source = null,
	headers = null,
	last_seen = current_timestamp
where
	url = :url
"""

	SET_HEADERS_AND_SOURCE = """
update url_contents
set
	source  = :source,
	headers = :headers,
	last_seen = current_timestamp
where
	url = :url
"""

	ALREADY_SEEN = """
	select ( 
			((source is not null) 
			and 
			(headers is not null) )
			or 
			last_seen is not null
			)
			  as has_contents
	from url_contents
	where url = :url
"""

	SET_DATE = """
	update url_contents
set
	last_seen = current_timestamp
where
	url = :url
	"""


class PersistenceHandler:
	def __init__( self, path: String ):
		self.connection = sqlite3.connect( path )
		self.connection.row_factory = sqlite3.Row
		cursor = self.connection.cursor()
		cursor.execute( Queries.CREATE_CONTENTS )
		cursor.execute( Queries.CREATE_INDEX )

	def __enter__( self ) -> PersistenceHandler:
		return self

	def __exit__( self, exc_type, exc_val, exc_tb ):
		self.connection.close()

	def put_preview( self, info: PreviewInfo ):
		params = {
			"url": info[ "url" ],
			"preview": json.dumps(info)
		}
		cursor = self.connection.cursor()
		cursor.execute( Queries.SET_PREVIEW, params)
		self.connection.commit()

	def get_preview( self, key: String ) -> Optional[ PreviewInfo ]:
		# todo
		...

	def has_preview( self, key: String ) -> bool:
		# todo
		...

	def put_date( self, params ):
		cursor = self.connection.cursor()
		cursor.execute( Queries.SET_DATE, params )

	def put_source( self, info: SourceInfo ):
		params = {
			"url": info[ "url" ],
			"headers": Compresser.compress( info[ "headers" ] ),
			"source": Compresser.compress( info[ "source" ] ),
		}

		cursor = self.connection.cursor()
		cursor.execute( Queries.INSERT_URL, params )
		cursor.execute( Queries.SET_HEADERS_AND_SOURCE, params )

		self.connection.commit()

	def get_source( self, key: String ) -> Optional[ SourceInfo ]:
		# todo
		...

	def has_source( self, key: String ) -> bool:
		params = {"url": key}
		cursor = self.connection.cursor()

		cursor.execute( Queries.ALREADY_SEEN, params )
		result = cursor.fetchone()

		return result and result[ "has_contents" ] > 0

	def get_all( self ):
		cursor = self.connection.cursor()
		cursor.execute( "Select * from main.url_contents where source is not null" )
		result = cursor.fetchall()
		return result


def maybe_chain( *args ):
	def wrapped( x, fallback=None ):
		for action in args:
			if x is None:
				return fallback
			x = action( x )

		return x or fallback

	return wrapped


class ContentRow:
	def __init__( self, row: Row ):
		parse_headers = maybe_chain(
			Compresser.decompress_string,
			json.loads,
			lambda x: x[ 0 ]
		)
		parse_source = maybe_chain(
			Compresser.decompress_string,
		)

		self.url: String = row[ "url" ]
		self.headers: Mapping[ String, String ] = parse_headers( row[ "headers" ], {} )
		self.source: Optional[ Html ] = parse_source( row[ "source" ] )

	@property
	def content_type( self ) -> Optional[ String ]:
		return self.headers.get( "Content-Type" )

	def compressed( self ) -> bool:
		return self.headers.get( "Content-Enconding", None ) == "gzip"

	@property
	def encoding( self ) -> String:
		match = re.search( "(?<=charset=).+", self.content_type )
		if not match:
			return "utf-8"
		return match.group()


#

class Compresser:

	@staticmethod
	def compress( data: String ) -> Compressed[ bytes ]:
		if not data:
			return None

		return zlib.compress( data.encode( "utf-8" ) )

	@staticmethod
	def decompress_string( data: Compressed[ bytes ] ) -> String:
		if not data:
			return None
		return zlib.decompress( data ).decode( "utf-8" )


def getInfoPreview( a: ContentRow ) -> previews.PageDigest:
	print( "parsing " + a.url)

	return bare_extraction(
		filecontent=a.source,
		url=a.url,
		favor_precision=True,
		include_comments=True,
		include_images=True,
		include_formatting=True,
		include_links=True
	)




contents = {}
def parse( row: ContentRow ):
	content_type = row.content_type

	tmp = contents.get( content_type, [ ] )
	tmp.append( row.url )
	contents[ content_type ] = tmp

	if content_type == "application/pdf":
		return
	if row.source:
		result =  getInfoPreview( row )
		result["url"] = row.url
		return result


if __name__ == "__main__":
	with PersistenceHandler( Paths.CONTENT ) as content:

		seen = set()
		counter = Counter()
		for item in tqdm(content.get_all()):
			try:
				row = ContentRow( item )
				preview = parse( row )
				if preview:
					content.put_preview( preview )
			except Exception as e:
				print( e )
