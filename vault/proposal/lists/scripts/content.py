from __future__ import annotations
from tkinter.tix import Select
from typing import Generic, TypeVar, TypedDict, Optional
from tqdm import tqdm
import json
import pathlib
import sys
from urllib.parse import urlparse

import pandas as pd
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import sqlite3
import zlib

sys.path.append( "." )

class Paths:
	HERE = pathlib.Path( __file__ )
	LIST_DIR = HERE.parent.parent
	CONTENT = "C:/Users/Mateus/OneDrive/state/assets/contents.db"
	ARTICLE = [ i for i in (LIST_DIR / "stream").glob( "articles.tsv" ) ][ 0 ]
	JS_ROOT = "C:/Users/Mateus/Desktop/workspace/leet/canHome"

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
String = str
T = TypeVar( "T")
class Compressed( Generic[ T ]):
	...

class SourceInfo( TypedDict ):
	url : String
	headers : String
	source : String
	
class PreviewInfo( TypedDict ):
	url : String
	preview : String

class ContentRow( TypedDict):
	url : String
	headers : Optional[ Compressed[ bytes ] ]
	preview : Optional[ Compressed[ bytes ] ]
	source : Optional[ Compressed[ bytes ] ]

class Compresser:

	@staticmethod
	def compress( data : String) -> Compressed[ bytes ]:
		if not data:
			return None

		return zlib.compress( data.encode( "utf-8" ) )
	
	@staticmethod
	def decompress_string( data : Compressed[ bytes ]) -> String:
		if not data:
			return None
		return zlib.decompress( data ).decode( "utf-8" )


class PersistenceHandler:
	def __init__( self, path : String):
		self.connection = sqlite3.connect( path )	
		self.connection.row_factory = sqlite3.Row
		cursor = self.connection.cursor()
		cursor.execute( Queries.CREATE_CONTENTS)
		cursor.execute( Queries.CREATE_INDEX)

	def __enter__( self ) -> PersistenceHandler:
		return self

	def __exit__( self, exc_type, exc_val, exc_tb ):
		self.connection.close()
		
		
	
	def put_preview( self, info : PreviewInfo ):
		with self.connection.cursor() as cursor:
			# todo
			...
	
	def get_preview( self, key : String ) -> Optional[PreviewInfo]:
		# todo
		...
	
	def has_preview( self, key : String ) -> bool:
		# todo
		...
	
	def put_date( self, params):
		cursor = self.connection.cursor()
		cursor.execute( Queries.SET_DATE , params )

	def put_source( self, info : SourceInfo ):		
		
		params = { 
			"url" : info["url"], 
			"headers" : Compresser.compress( info["headers"] ),
			"source" : Compresser.compress( info["source"] ),
		}
		
		cursor = self.connection.cursor()
		cursor.execute( Queries.INSERT_URL , params )
		cursor.execute( Queries.SET_HEADERS_AND_SOURCE, params )
		self.connection.commit()
		
	def get_source( self, key : String ) -> Optional[SourceInfo]:
		# todo
		...

	def has_source( self, key : String ) -> bool:
		params = { "url" : key } 
		cursor =  self.connection.cursor()
		
		cursor.execute( Queries.ALREADY_SEEN , params)
		result = cursor.fetchone()

		return result and result["has_contents"] > 0

class PageLoader:
	def __init__(self) -> None:
			
		options = webdriver.ChromeOptions()
		options.add_argument("--headless")

		caps = DesiredCapabilities.CHROME
		caps["goog:loggingPrefs"] = { "performance" : "ALL"}

		self.driver = webdriver.Chrome( 
			ChromeDriverManager().install() ,
			 options=options , desired_capabilities=caps)

		
	def __enter__( self ) -> PageLoader:
		return self
	
	def __exit__( self, exc_type, exc_val, exc_tb ):
		self.driver.quit()
	
	def get( self, url ) -> Optional[ SourceInfo ] :

		
		try: 
			self.driver.delete_all_cookies()
			self.driver.get( url )
			response = self.get_response( self.driver)
			source = self.driver.page_source
			return { 
				"url" : url , 
				"headers" : json.dumps(response) , 
				"source" : source 
				}
		except Exception as e:
			print( e )

		
		return None
		
	def get_response(self, driver):

		get_message = lambda entry :  json.loads(entry['message'])['message']
		is_response = lambda item : 'Network.responseReceived' == item['method']
		get_header = lambda item: item['params']['response']['headers']
		browser_log = driver.get_log('performance') 
		
		response = map( get_header, 
						filter(is_response , 
							map( get_message , browser_log) ) )
		
		return [i for i in response]
class PandasHandler:
	
	@staticmethod
	def url_clean( x ):
		parsed = urlparse( x )
		parsed = parsed._replace( fragment = "" , scheme = "http")
		return parsed.geturl()
	
	@staticmethod
	def url_host( x ):
		parsed = urlparse( x )
		return parsed.hostname
	
	@staticmethod
	def url_param( x ):
		parsed = urlparse( x )
		return parsed.query
	
	@staticmethod
	def url_path( x ):
		parsed = urlparse( x )
		return parsed.path

	@staticmethod
	def load_articles( path : String ) -> pd.DataFrame:
		df : pd.DataFrame = pd.read_csv( path, sep="\t" )
		
		df[ "hostname" ] = df[ "url" ].apply( PandasHandler.url_host )
		df[ "param" ] = df[ "url" ].apply( PandasHandler.url_param )
		df[ "path" ] = df[ "url" ].apply( PandasHandler.url_path )
		df[ "url" ] = df[ "url" ].apply( PandasHandler.url_clean )
		

		return df.sort_values( [ "date", "time" ] )


if __name__ == '__main__':
		
	article_df = PandasHandler.load_articles( Paths.ARTICLE )

	with PageLoader() as browser , PersistenceHandler( Paths.CONTENT ) as content:
		for _ , article in tqdm( article_df.iterrows() ) :

			url = article["url"]
			seen_content = content.has_source( url )
			if not seen_content:
				info = browser.get( url )
				if info:
					content.put_source( info )
				else:
					content.put_date( { "url" : url } )
					

		




