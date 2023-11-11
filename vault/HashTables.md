---
tags:
    - software
    - fact
---

# HashTables

Hash Tables, also known as  HashMaps, dictionaries and Associative Arrays, are a kind of \[\[DataStructure]].

It works by creating an \[\[Hash]] of a key, which is transformed into an array index. Then, an array lookup is used to look up the associated value.

> This second transformation usually happen by the means of \[\[ModularArithmetic]] against the array size.

The cost of this lookup can be largely considered constant. \[\[NUMA]]

___

There are many limitations when using hash tables:

- \[\[HashCollisions]].
- Size:
  - Since it uses an underlying array, the hash tables rely heavily on the use of \[\[ByteAddressability]]. This makes it hard to work in settings where it doesn't fit cleanly into memory, such as serialization and hard disks.

> \#todo About the seriazibility: WHy? How?

- \[\[Mutability]]:
  - When adding or removing values, we may need to increase the underlying storage size. This triggers an expensive \[\[ReHashing]] process that remaps the indexes.
  - In settings such as \[\[SystemsDistributed]] applications, rehashes can be difficult to work with. This challenge can be alleviated by \[\[ConsistentHashing]] schemes such as \[\[HashRings]], as implemented by \[\[ToolRingPop]].

## References

# todo
