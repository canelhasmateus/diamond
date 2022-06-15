# HashTables

Hash Tables, also known as  HashMaps, [[dictionaries]] and Associative Arrays, are a kind of [[ Data Structure ]].

It works by creating an [[hash]] of a key, which is transformed into an array index, usually by the means of [[ modular arithmetic ]] against the array size. Then, a [array] lookup is used to look up the associated value.
The cost of this lookup depends on the [[architecture ]] of the system -  [[NUMA]] vs [[UMA]], for example - but can be largely considered constant.

Limitations:

[[Collisions]].

Size:

Since it uses an underlying array, the hash tables rely heavily on the use of [[Byte Addressability]]. This makes it hard to work in settings where it doesn't fit cleanly into memory, such as serialization and hard disks.
    . WHy? How? [[ expand ]]

[[Mutability]]:

When adding or removing values, we may need to increase the underlying storage size. This prompts a process - So-called [[ReHashing]] - that remaps the indexes. This can be expensive, and very hard to work within some applications.

In settings such as [[distributed]] applications, these can be alleviated by [[Consistent Hashing]], schemes such as [[HashRings]], as implemented by [[RingPop]].
