
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



____


A topological ordering of a Directed Acyclic Graph ( G = (V, E) ) is a list of each vertex v such that for every edge ( i, v ) u precedes v in the list.

* It is always possible to produce such a topological ordering if we have no cycles.
* In every dag, there is at least ONE vertex with out-degree = 0
* In every dag, there is at least ONE vertex with in-degree = 0
* We can find the vertex with minimum in-degree, putting it at the beginning of the list. Then, remove this vertex and its edges from the graph. Repeating this operation produces a topological sort.
