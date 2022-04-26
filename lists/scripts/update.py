import json
import pathlib
import random
import subprocess
import sys
from typing import Mapping

import pandas as pd



sys.path.append( "." )
from lists import aggregates
from aggregate import generate_aggregate

def save_as_js( articles ):
	
	destination = pathlib.Path( r"C:\Users\Mateus\Desktop\workspace\canHome\src\lists\readlistA.ts" )
	list_repr = json.dumps( articles, indent = 4, sort_keys = True )
	js_contents = """
	import type { Preview } from "./interface";
	
	export const list : Array< Preview > = """ + list_repr

	with open( str( destination ), "w" ) as f:
		f.write( js_contents )

def generate_html():
	project_root = r"C:\Users\Mateus\Desktop\workspace\canHome"
	process = subprocess.run( f"npm run --prefix {project_root} deploy" ,
	                          universal_newlines = True , shell = True)

	print( f"Generated HTML." )

def load_queued( ):
	queued_articles = [ i for i in aggregates.glob("articlesQueue.tsv")][0]
	return  pd.read_csv( queued_articles , sep="\t")

def choose_articles( df ):
	
	
	previews = json.load(
		open( r"C:\Users\Mateus\OneDrive\Assets\previews.json" , "r"))
	
	results = [ ]
	for _, row in df.sample( n = 300).iterrows():
		try:
			article = row["url"]
			results.append( previews[ article ] )
		except KeyError:
			continue
	
	return results
	

	
	
if __name__ == '__main__':
	
	print( f"Generating aggregation." )	
	generate_aggregate()
	print( f"Generating ts file." )
	df = load_queued()
	chosen = choose_articles( df )	
	save_as_js( chosen)
	generate_html()
	input("Waiting to exit.")
