from traceback import format_exc, print_exc
import pandas as pd
import pathlib
import json
import sys
from tqdm.auto import tqdm

sys.path.append( "." )
from previews import getPreviewFromUrl

def iterate_history_kinds( path ):
    
    df = pd.read_csv( path , sep="\t" ,  engine = "python")
    df = df.sort_values( ["date" , "time"] )
    df = df.drop_duplicates("url" , keep="last")
    
    df["url"] = df["url"].apply( normalize_url )
    df["kind"] = df["kind"].apply( lambda x : x.lower().capitalize() )
    for kind in df["kind"].unique():
        subsection = df[df["kind"] == kind]

        subsection = subsection[["date", "url"]]
        yield kind , subsection

def normalize_url( url ):
    return url.strip()

def download_missing_previews( df ) :
    print( "Downloading Missing Previews" )    
    preview_path = r"C:\Users\Mateus\OneDrive\Assets\previews.json"
    try:
        previews = json.load( open( preview_path, "r" ) )		
    except Exception:
        previews = {}

    for index , row in tqdm( df.iterrows() , "Downloading Previews" ,
                            position= 0 , leave = True):
        url = row["url"]
        if url not in previews:
            try:
                previews[ url ] = getPreviewFromUrl( url )
            except Exception as e:
                pass
                # print( e )
                

    json.dump( previews, open( preview_path, "w" ) )
    return previews

def generate_aggregate( articles , urls , aggregates ):
        
    for kind , df in iterate_history_kinds( articles ):
        download_missing_previews( df )
        df.to_csv( aggregates / f"articles{kind}.tsv" , sep="\t" , index=False)
        
    for kind , df in iterate_history_kinds( urls ):
        download_missing_previews( df )
        df.to_csv( aggregates / f"urls{kind}.tsv" , sep="\t" , index=False)

    