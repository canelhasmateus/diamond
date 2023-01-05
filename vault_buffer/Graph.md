
Data Structures

|E| ~ |V|^2 ( At most )

Adjacency Matrix:

* n*n array with a 1 whenever there's an edge connecting ( r, c ), and a 0 otherwise.
* O( n^2 )

Edge List:

* For each vertex, store a list of all other vertices that this vertex points to.
* O( n * m )

These representations are good at different things. If we're doing a lot of operations such as lookups at the neighbors of a vertex, we just need to scan through the list of the edge list.

The presence or absence of a particular edge is O( 1 ) from the adjacency Matrix

A Path is a sequence of vertices ( v1, v2, ..., Vk)

* It is simple if it has no repeated vertex
* If v1 == Vk, it is a cycle.

Vertices are connected if a there is a path between them
THe connected component of a vertex V is { u | u connected to V}

function traverse( G, s ):

    initialize frontier = { s }
    initialize visited = { }

    while frontier is not empty:
        v = remove from frontier [1]
        add v to visited [ 2 ]
        for each neighbor n of v:
            if n not in visited:
                add n to frontier

[ 1 ]

* If it is a queue, it is equivalent to BFS
* If it is a stack, it is equivalent to DFS
* If it is a priority queue, it is equivalent to Dijkstra's

[ 2 ]

* We might mark a node as visited when we take it out from the frontier or when we put it into the frontier
* This can make it more or less efficient in certain circumstances

For each of these modifications, we might need to reconsider the correctness proofs.

we can more quickly find the strongly connected components of a directed graph by creating a rev graph. Then we can intersect the weakly connected components of the rev and original graph.

DFS will only traverse one component ( not all ) of a graph.
DFS may not traverse the entire component.
How to identify cycles in a graph:



___

___

Spanning trees
    pick a subset of the edges such that the graph remains connected, but we have no cycles

An undirected graph is connected if all vertices are in the same connected component
In a connected graph G( V, E ), a spanning tree is a subgraph ( V, T) where T <= E, |T| = n - 1 and ( V, T ) is connected

If G is also a weighted graph, the minimum spanning tree is the spanning tree with the smallest total weight.

MST comes up in many different contexts, E.G: Constructing a grid of internet/power within a country. If we have a graph where the vertexes represent different cities, and the edges are potential connections we could build, if we find a spanning tree then we've found the minimum amount of edges/distance we could use.
  
Three Algos:

* Prim's Algorithm: Pick the cheapest that has a leg inside and a leg outside our boundaries.
* Kruskal Algorithm: Pick the cheapest anywhere, as long as it does not create a cycle.
* Reverse-Delete Algorithm: Remove the costliest, as long as it does not disconnect the components.

___

<https://www.youtube.com/watch?v=z3QEtxYPYb4>

Disjoint Path

* max size = N inNode to the destination

Solve this problem by translating it into an instance of maxflow.

1. Remove Edges into the origin or out of the destination
