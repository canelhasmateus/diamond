import pathlib
here = pathlib.Path( __file__ )
listRoot = here.parent.parent 
streams = listRoot / "stream"
articles = [ i for i in streams.glob("articles.tsv")][0]
urls = [ i for i in streams.glob("urls.tsv")][0]
aggregates = listRoot / "aggregate"