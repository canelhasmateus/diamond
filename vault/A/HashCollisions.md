# HashCollisions

Since the underlying array has a finite number of entries, collisions are bound to happen. There exists various kind of procedures to deal with hash collisions, but they mostly fall into two different buckets:

[[OpenHashing]], Also known and [[SeparateChaining]].

* Instead of embedding the value directly in the array, we embed a collection - such as a [[LinkedList]] or a [[BinaryTree]] -  and put the value inside this collection.
* When fetching, we search exhaustively inside the associated collection. Of course, this has O(n) worst-case complexity.

[[OpenAddressing]], Also known as [[ClosedHashing]] or [[Probing]].

* in the case of collision, we simply look for another entry to place the value. All that is needed is a policy to deterministically generate the same candidates given a seed hash.

Various implementations of such policies can be devised, such as

* [[LinearProbing]]
* [[QuadraticProbing]]
* [[DoubleHashing]]

___

References:

1. <https://www.youtube.com/watch?v=hxdT_QgHUSg>
