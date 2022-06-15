# Hash Collisions

Since the underlying array has a finite number of entries, [[collisions]] are bound to happen.
There exists various kind of procedures to deal with hash collisions, but they mostly fall into two different buckets:

[[Open Hashing]]

Also known as [[separate chaining]]. Instead of embedding the value directly in the array, we embed a collection - such as a [[linked list]] or a [[binary tree]] - in the array instead, and put the value inside this collection.

When fetching, we search exhaustively inside the associated collection. Of course, this has [[O( n )]] worst-case complexity.

[[Open Addressing ]]

Also known as [[closed hashing]].

in the case of collision, we simply look for another entry to place the value. All that is needed is a policy to deterministically generate the same candidates given a seed hash.

Various such policies can be devised, such as

[[Linear Probing]]
[[Quadratic Probing]]
[[Double Hashing]]

References:

* <https://www.youtube.com/watch?v=hxdT_QgHUSg>
