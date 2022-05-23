from __future__ import annotations
from typing import Generic, TypeVar, TypedDict

import json
import pathlib
import sys
from urllib.parse import urlparse

import pandas as pd
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

sys.path.append( "." )

class Paths:
	HERE = pathlib.Path( __file__ )
	LIST_DIR = HERE.parent.parent
	CONTENT = "C:/Users/Mateus/OneDrive/Assets/contents.json"
	ARTICLE = [ i for i in (LIST_DIR / "stream").glob( "articles.tsv" ) ][ 0 ]
	JS_ROOT = "C:/Users/Mateus/Desktop/workspace/leet/canHome"


String = str
T = TypeVar( "T")
class PageInfo( TypedDict ):
	...

class JsonHandler( Generic[ T ]):
	def __init__( self, path : String):
		self.path = path

		try:
			res = json.load( open( self.path, "r" ) )
		except:
			res = {}

		self.res : T = res

	def __enter__( self ) -> T:
		return self.res

	def __exit__( self, exc_type, exc_val, exc_tb ):
		with open( self.path, "w" ) as f:
			json.dump( self.res, f )

class PageLoader:
	def __init__(self) -> None:
			
		options = webdriver.ChromeOptions()
		options.add_argument("--headless")
		self.driver = webdriver.Chrome( ChromeDriverManager().install() , options=options)
		
	def __enter__( self ) -> PageLoader:
		return self
	
	def __exit__( self, exc_type, exc_val, exc_tb ):
		self.driver.quit()

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
		
	content : PageInfo
	article_df = PandasHandler.load_articles( Paths.ARTICLE )

	with PageLoader() as browser , JsonHandler( Paths.CONTENT ) as content:
		for article in article_df.itertuples():
			print( article )
			

		




