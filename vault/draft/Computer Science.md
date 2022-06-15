# ...

Array
 -> Two most primitive array operations are writing elemenbts into them, and reading elements from them
 -> All other array operations are built on top of these two primitives.
 
 -> There is a difference between the array capacity and its length.
  -> Capacity is the number of objects the array COULD hold, it it was full.
  -> Length is the number of objects currently in the array.
  
___

<https://www.youtube.com/watch?v=D7JBJ72R_I4>

Intro to theory of computation

What is Computation? What are things that computers can do?
    .
why we care
    .

____

<http://raganwald.com/2016/11/30/anamorphisms-in-javascript.html>

Anamorphisms are functions that map from some object to a more complex structure containing the type of the object. For example, mapping from an integer to a list of integers.

Linear recursion is a special case of divide-and-conquer
    .. Recursion Types

Writing traversals separates the concern of how to iterate over a data structure from the concern of what to do with the elements of the data structure.

____

<https://www.youtube.com/watch?v=BxnaZscU6zk>

Coroutines

Separate from  generators

Generators abstract iteration of values
Coroutine abstract consumption of values

Generators pull data through the pipe with iteration
Coroutines push data into the pipeline with send

Coroutines and state machines

Multitasking is implemented by the Operational System.
    Usually by means of Either Interrupts or Traps
    yield is a trap

___

___

How exactly does the whole 'core, process, variable, registers , slots and stacks' work?

    Process Control Block
        Process State 
        Process Number
        Process Counter
        Registers
        Memory Limits
        List of open files
        Signal Mask 
        CPU Scheduling info
    
    Since a process is entirely described by a pcb, whenever we wanna fork a process, essentially al we have to do is copy a parent control lblock to a child process control blcok. 

___

# Memory Management

# ...

<https://blog.heroku.com/tidying-ruby-object-allocations>

    We can gain speed by focusing on object allocatins
        
        . Take all allocations and put them in a pile where you can see them
            .. Memory Profiling
            .. ( Derailed benchmarks)
        . COnsider each one: Does it spark joy? Keep only those.
            .. Useful
            .. Keeps your code clean
            .. does not cause performance problems
        
        . Why?
            "Malloc is slow"
        

    Can we replace allocation while maintaning correctness?


    Important to talk abou tstatistics and their impacts when talking about benchmarks. 
        . every time we measure a value, it could be because of randomness. 
        . check for statistical significance
            .. t 0test vs kolmogorov?

    

    https://www.schneems.com/2019/11/07/why-does-my-apps-memory-usage-grow-asymptotically-over-time/
        
    

    There is a range of topics you need for the full picture: object slots, slot versus heap allocation, generational GC, incremental GC, compacting memory, fragmentation due to malloc implementation, etc. But for now, this simplification is good enough.

<https://www.sitepoint.com/ruby-uses-memory/>
    Minimize object allocation.


___


<https://www.youtube.com/watch?v=UCK-0fCchmY>
<https://www.youtube.com/watch?v=tde8lhFdczI>

set associative caches

current arch caches are set-associative
    . Broken into sets, and each set contains a specified number of elemnets , the so called associativity
    . Each element is called a cache line or a cache block
    . the cpu always communicates with ram and its caches in cache lines.
    . currently, 64bytes
    . Start of cache lines: 0x00 0x40 0x80 0xc0

The CPU uses a "Tagged Pointer" approach to find the cache and the offset.
    . For example, in a 64 bits address, use the first 8 to encode the set, the next 8 to encode the tag.

When evicting, each cpu executes its Policy Eviction, which varies but is usually LRU.

 s



___


<https://www.youtube.com/watch?v=70DAP_E-Xd0>

to be a valid dfa we need a valiad transition from each node, with regards to an certain input.


___


<https://www.youtube.com/watch?v=DmtSivtE3qY>

heapsort

```python
function heap_sort( array ):

head = heapify( array )
for i in range(len(array)):
    array[i] = remove_min( heap )


def heapify( array ):
    heap = copy( array )
    for i in range( len( array )):
        idx = len( array) - i + 1
        bubble_down( heap , idx )
    return heap

def remove_min( heap ):
    m = heap[ 1 ]
    swap( heap , 1 , length )
    length = length - 1 
    bubble_down( heap , 1 )
    return m

def bubble_down( heap , i ):
    while 2 * i <= length :
        c = smallest_child( heap , i)
        if heap[ i ] > heap[ c ]:
            swap( heap , i , c )
            i = c
        else:
            break

def smallest_child( heap , i):
    l = 2 * i
    r = 2 * i + 1
    
    if l == length:
        return l
    elif heap[l ] < heap [ r ]:
        return l 
    else :
        return r

```

a heap is a complete binaryh tree with the heap property
    ( Every level is full , except the last , which is filled from the left.)
    . Because everything is full, we can store it as an array, where the position corresponding to the order of a level - by - level traversal
    . That means if we know where a value is, we can calculate where its children are.

*conceptual heap* , *actual heap*

a binary tree has the heap property if everynode has key no larger than its childrens

Big O Analysis:
Swap is O(1)
    Really, O( 3*C1 + C2 ) , Where C1 is index time, and C2 is call overhead.
Smallest_child is O( 1 )
    C2 is call overhead
    C1 + C3 , where C3 is arithmetic and C1 is assignment.
    There is Also C4 for equality / branching / comparison .
Bubble_down is O( Log( n ))
    the body is O( 1 ), but it does it many times.
    Since each time it doubles, this is Log

Correctiveness
    * recursive writing can help easier the inductive proof of the algorithmn .
If tree H is an almost-a-help with the only violation of the heap property occurring at node i, then bubble-down( h , i ) makes h a heap.



___


<https://robotlolita.me/articles/2011/understanding-javascript-oop/>

"The prototypical OO model brings in some new ways of solivng old problems, in an more dynamic and expressive way. It also presents new and more powerful mode3ls for extensibility and code-reuse - it does not however, give you contracts. There are no static guarantees that an object will alqways have a given set of properties ... "

___


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

* todo

A topological ordering of a Directed Acyclic Graph ( G = (V, E) ) is a list of each vertex v such that for every edge ( i, v ) u precedes v in the list.

* It is always possible to produce such a topological ordering if we have no cycles.
* In every dag, there is at least ONE vertex with out-degree = 0
* In every dag, there is at least ONE vertex with in-degree = 0
* We can find the vertex with minimum in-degree, putting it at the beginning of the list. Then, remove this vertex and its edges from the graph. Repeating this operation produces a topological sort.

___

greedy

Sort by Some criterion
Process in sorted order

ex

G = [ ]
sort requests by [ criterion ]
for req in sorted order:
    if req compatible with G:
        add req to G

Proof techniques:

* Stays Ahead
* Exchange Argument
* Matching bounds

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

Bottom-Up Approach

* Solve sub-problems in increasing order
* Fill in a table of sub-problem solutions
* Compare several smaller solutions to determine the best solutions for the current problem

Dynamic Programming

* Divide into sub-problems
* Solve sub-problem recursively
* On each recursive call, Start by checking if it is already solved, finishing by caching into the table.


___

<https://engineering.fb.com/2019/04/25/developer-tools/f14/>

Faceboko has their own implementation of hashtables, called F14 , embbedded inside Folly , their open source C++ library.

It tries to be a good default usage, when considering questions such as

* "How long are the references kept"
* "Do you care more about cpu or memory"
* How big are the ekys
* How big are your tables
* How much do your insert / search / iterate
  
It improves the practice of hashing by using vector instructs, and providing multiple memory layouts.

The problem with hash tables comes from collisions. The possibility of collisions creates unpredictable control flow, requring extra memory accesses, and being hard to branch-predict and cpu-pipeline.

F14 works around this by pointing the kep to a block of slots, instead of to a single slots, then searching withing the chunk in parallel using vector instructions.

Other problem with probing is that they keep looking until they fiund a empty slot: that makes erasing keys tricky: since the same keys must be produced, the algo must leave a tombnstone ( a empty slot that doesn't terminate the probe search ) or slide down the later keys in the problem sequence.

___

Binary trees can have multiple types:

* A __root__ binary tree has a root node, and every node has at most two children.
* A __full__ ( or proper ) is a tree in which every node has either 0 or 2 children.
* A __perfect__ - all interior nodes have two children and all leaves have the same depth
* a __complete__ , in which all levels ( except the last ) is completely filled, and all nodes in the last level are as far left as possible: A perfect tree is always complete, but a complete tree is not necessarily perfect. A complete binary tree can be efficiently represented using an array.
  * A heap is a specialized complete tree, that satisfies the HEAP PROPERTY. Its one maximilalyl efficient implementation of an abstract data type called a priority queue.
* A __balanced__ binary tree is a binary tree structure in which the left anr right substrees of every node differ in height by no more than 1.
* A __degenerate__ tree is where each paretn node has only one associated child node, which means the tree will behave like a linked list.
