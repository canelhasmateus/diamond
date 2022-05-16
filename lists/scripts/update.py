import json
import pandas as pd
import pathlib
import subprocess
import sys

sys.path.append( "." )

from previews import getPreviewFromUrl


def iterate_stream_kind( path ):
	df = pd.read_csv( path, sep="\t", engine="python" )
	df = df.sort_values( [ "date", "time" ] )
	df = df.drop_duplicates( "url", keep="last" )

	df[ "url" ] = df[ "url" ].apply( normalize_url )
	df[ "kind" ] = df[ "kind" ].apply( lambda x: x.lower().capitalize() )
	for kind in df[ "kind" ].unique():
		subsection = df[ df[ "kind" ] == kind ]
		subsection = subsection[ [ "date", "url" ] ]
		yield kind, subsection


def iterate_row( df ):
	for _, row in df.iterrows():
		yield row


def normalize_url( url ):
	return url.strip()


def download_preview( row, previews ):
	url = row[ "url" ]
	if url in previews:
		return False
	try:
		previews[ url ] = getPreviewFromUrl( url )
		return True
	except:
		return True


def split_stream( articles, aggregates, previews ):
	print( f"Generating aggregation." )
	downloaded = 0
	for kind, df in iterate_stream_kind( articles ):
		df.to_csv( aggregates / f"articles{kind}.tsv", sep="\t", index=False )

		for row in iterate_row( df ):
			downloaded += download_preview( row, previews )

	print( f"Downloaded {downloaded} missing previews." )


def save_as_js( array, destination ):
	print( f"Generating ts file." )
	list_repr = json.dumps( array, indent=4, sort_keys=True )
	js_contents = """
	import type { Preview } from "./interface";
	export const list : Array< Preview > = """ + list_repr
	with open( str( destination ), "w" ) as f:
		f.write( js_contents )


def generate_html( project_root ):
	process = subprocess.run( f"npm run --prefix {project_root} deploy",
	                          universal_newlines=True, shell=True )

	print( f"Generated HTML." )


def load_queued( aggregates ):
	queued_articles = [ i for i in aggregates.glob( "*Queue.tsv" ) ][ 0 ]
	return pd.read_csv( queued_articles, sep="\t" )


def choose_articles( df, previews ):
	results = [ ]
	for _, row in df.sample( n=300 ).iterrows():
		try:
			article = row[ "url" ]
			preview = previews[ article ]
			results.append( preview )
		except KeyError:
			continue

	return results


class JsonFrame:
	def __init__( self, path ) -> None:
		self.path = path

		try:
			res = json.load( open( self.path, "r" ) )
		except:
			res = {}

		self.res = res

	def __enter__( self ):
		return self.res

	def __exit__( self, exc_type, exc_val, exc_tb ):
		with open( self.path, "w" ) as f:
			json.dump( self.res, f )


if __name__ == '__main__':

	here = pathlib.Path( __file__ )
	listRoot = here.parent.parent
	articles = [ i for i in (listRoot / "stream").glob( "articles.tsv" ) ][ 0 ]
	JS_ROOT = "C:/Users/Mateus/Desktop/workspace/leet/canHome"
	JS_DESTINATION = pathlib.Path( JS_ROOT ) / "src/lists/readlistA.ts"

	PREVIEW_PATH = r"C:/Users/Mateus/OneDrive/Assets/previews.json"
	AGG_DESTINATION = listRoot / "aggregate"

	with JsonFrame( PREVIEW_PATH ) as previews:

		try:
			split_stream( articles, AGG_DESTINATION, previews )
			queued = load_queued( AGG_DESTINATION )
			chosen = choose_articles( queued, previews )
			save_as_js( chosen, JS_DESTINATION )
			generate_html( JS_ROOT )

		except Exception as e:
			import traceback

			traceback.print_exc()

	input( "Waiting to exit." )
