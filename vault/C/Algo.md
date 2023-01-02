## Array

 -> Two most primitive array operations are writing elemenbts into them, and reading elements from them
 -> All other array operations are built on top of these two primitives.

 -> There is a difference between the array capacity and its length.
  -> Capacity is the number of objects the array COULD hold, it it was full.
  -> Length is the number of objects currently in the array.


## Greedy Algos

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

## Sorting 


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

___

## Stable Matching 

<https://www.youtube.com/watch?v=oSpx2ROVfd0>

stable matching

people about to be medics apply to residency around hospitals .
hospitals compete for the best docs, trying to lock them in years in advance

the stable matching is responsible to satisfy the preferences of both medical and hospitals by receiving a ranked preference from both of them.

input size of ( 2N + 2N**2)
output should be
    . should have the property: "No one should have gone and chose a different match outside of the mechanmism."

A match is perfect if every doctor and every hospital appears exactly once.
    . An instability is a pair of ( H , D ) that were not put together, but both would prefer having being paired with each other than the pair they have been given.

We can solve it with a "Deffered-Acceptance Algo"

"While existis a unmatched doctor D:

    H = top Hospital D hasn't applied to. 

    If H is unmatched: Match ( D , H )

    else, 
        if H prefers the current doctor over the current match,
            . Unmatch ( Dprev , H)
            . Match ( D , H)
___


## Bitwise Operations

# bitwise operations

when working with numbers, we can assign a maximum and

# XOR

    . XOR can be use to implement some cyclical behaviour:
        
        1 ^ 2 ^ 1  ^ 1 ^ 1 ... 
        1 -> 3 -> 2 -> 3 -> 2 ...
    . This happens because
     
        if x = y ^ z then
        z = x ^ y and y = x ^ z

> #Todo WHAT IS THIS PROPERTY CALLED?

    . Note that the maximum possible XOR result is always 2^(maximumBit) - 1.
    to achieve the highest number, we find the bitwise difference between the number and the maximum.

                
        MAX    = 11111111111 ==  2047 ( this is the maximum result with 11 bits )
        NUMBER = 11101010001 ==  1873 ( consider a random number.)
        ______________________________________________________________
    
        NEEDED = 00010101110 == 174 ( this is the bitwise difference )

        Ref: https://leetcode.com/problems/maximum-xor-for-each-query/
        
    Thinking in "Two's complements"
