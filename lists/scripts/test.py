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

sys.path.append( "." )



class Paths:
	HERE = pathlib.Path( __file__ )
	LIST_DIR = HERE.parent.parent
	CONTENT = "C:/Users/Mateus/OneDrive/Assets/contents.db"
	ARTICLE = [ i for i in (LIST_DIR / "stream").glob( "articles.tsv" ) ][ 0 ]
	JS_ROOT = "C:/Users/Mateus/Desktop/workspace/leet/canHome"

class Queries:
	CREATE_CONTENTS = """
create table if not exists url_contents
(
	url     Text not null,
	headers Text,
	preview Text,
	source  Blob
);

create unique index url_contents_url_uindex
	on url_contents ( url );
"""

	INSERT_URL = """
	insert into  url_contents values ( ? , null , null , null ) on conflict do nothing;
"""
	
	SET_PREVIEW = """
update url_contents
set
	preview  = :preview
where
	url = :url
"""

	SET_HEADERS_AND_SOURCE = """
update url_contents
set
	source  = :source
  , headers = :headers
where
	url = :url
"""
	
	HAS_HEADERS_AND_SOURCE = """
	select ( 
			(source is not null) 
			and 
			(headers is not null) 
			) as exists
	from url_contents
	where url = :url
"""
	
String = str
T = TypeVar( "T")

class PersistenceHandler:
	def __init__( self, path : String):
		self.connection = sqlite3.connect( path )


	def __enter__( self ) -> PersistenceHandler:
		return self

	def __exit__( self, exc_type, exc_val, exc_tb ):
		self.connection.close()
		
	def has_source( self, key ) -> bool:
		with self.connection.cursor() as cursor:
			row = cursor.execute( Queries.HAS_HEADERS_AND_SOURCE)
			return row["exists"]

	
	def put_preview( self, key, value ):
		with self.connection.cursor() as cursor:
			...

	def put_source( self, params ):
		
		with self.connection.cursor() as cursor:
			cursor.execute( Queries.SET_HEADERS_AND_SOURCE, params )
			self.connection.commit()			
		


if __name__ == "__main__":

    with PersistenceHandler(Paths.CONTENT) as persistence:

        persistence.has_source("ex")

        
