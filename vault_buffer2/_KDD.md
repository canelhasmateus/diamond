KDDs

Organizing Principles:
None -> Relations -> Taxonomies -> Ontologies ( Relations of Relations )

> Cant help but notice the similarity to `Functors` and `Natural Transformations`

- Graphs -> Property Graphs -> Labeled Property Graphs ->

For example, algorithms could use the taxonomy
to compute semantic similarity between products by applying standard taxonomy
metrics like `path similarity`, `Leacock-Chodorow`, or `Wu and Palmer`.

___

Layered Ontologies:

"Custom ontologies" : "Recomendation", "Compatibility"
\-> Ontologies / Taxonomies :  "Product Classification" , "Promotions"\
\-> Instance Data : "Product Catalog"

`Ontologies make knowledge actionable`.

___

Adopt existing ontologies

<https://www.loc.gov/catdir/cpso/lcc.html>
<https://spec.edmcouncil.org/fibo/ontology>
<https://schema.org/>
<https://www.dublincore.org/>

If creating one, denote ontologies in existing languages

RDF Schema
Web Ontology Language
Simple Knowledge Organization System

___

Three broad categories of algos to operate on knowledge graphs

1. Statistical
   Metrics about ther graph, such as the number of nodes and relationships,
   degree distribution of relationsips, types of node labels. Provide context
   for interpretation of results
2. Analytical
   Surfaces significant patterns or latent knowledge over the entire graph or
   significant subcomponents
3. ML
   Use the result from graph algorithms as features to train machine learning
   models or uses machine learning to evolve the graph itself.

Within ( Statistical, Analytical ) algos, there are five common graph use-cases:

1. Network Propagation
   Understanding how signals propagate through a graph queries graph path
   computations. The resulting pathways can identity the spread of disease in
   a community or supply-chain weaknesses. The results can be used to optimize
   for containment or adding redundancy to critical paths.
2. Influence
   Influential nodes act as bridges and bottlenecks between subgraphs and are
   ideally positioned to spread information or disruption around the network
   quickly since they are on average, close to all the other nodes. A measure
   of a node influence is known as its centrality.
3. Community Detection
   Partition groups by looking for weak links to remove. Being able to detect
   communities in a knowledge graph tells you about related workd that you
   might want to read, fraudsters cooperating to commit financial crimes, or
   communitions where pathogens ( including disinformation ) will spread
   quickly.
4. Similarity
   In small graphs, similar patterns can be spootted being repeated in teh
   graph In larger graph, manual inspection falls short. Similarity algorithms
   search for known realtionships / hierarchies between nodes or common
   properties on them.
5. Link Prediction
   Using the topology of the graph with some heuristics (e.g : creating
   triangles ) link predictions can enrigh the graph by computing missing
   relationships. This is a common use case in social networks, where possible
   ( friends,  followers , contacts ) can be computed.

There exists multiple algos for each of these use cases, and they give different answers.
e.g : `Weakly connected components` and `Louvain` for community detection.

___

Run NER on text
Produce graphs from the basic `Noun` -> `Verb` relationship,
where `Noun` turn into `Node` and `Verb` turns into edges.
Some nouns and relationships can be extracted from ontological databases such as OWL , W3C , RDF

Using Lexical databases, such as WordNet and its cognitive synonyms ( called synsets )
Hypernymy -> Being more general than
Hyponymy -> Being more specific than
Meronymy -> Being part of

SImilarity can be computed in many ways, such as
Louvain
Path Similarity
Leacock-Chodorow is similar to Path Similarity but takes into consideration depth of Hierarchy
Wu and Palmer is based on the Least Common Subsumer . It is the most Specific ancestor node of the two elements that are being compared.

___

<https://www.youtube.com/watch?v=NfCIn1M4bOk>

Uses data from the library of congress to categorize notes.
Kinda like pre-made tags.

> Ontologies
> <https://id.loc.gov/>
