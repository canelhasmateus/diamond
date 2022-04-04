
Hash Tables , also known as  HashMaps, dictionaries and Associative Arrays, are a kind of [[ Data Structure ]].


# Basics

It works by doing a [[Hashing|Hash]] of a key. 
It transform such hash into a array index, usually my the means of [[Mod operation|modular arithmetic]] against the array size. 

Then, an [[array]] lookup is used to lookup the associated value. 
The cost of this lookup depends of the [[architecture ]] of the system -  [[NUMA]] vs [[UMA]], for example - but can be largely considered constant. 

Limitations:

[[Collisions]].


Size:

Since it uses an underlying array, the hash tables rely heavily on the use of [[Byte Addressability]]. This makes it hard to work in settings where it doesn't fit cleanly into memory, such as serialization and hard disks.
    . WHy? How? [[ expand ]] 

    
[[Mutability]]:
    
When adding or removing values, we may need to increase to increase the underlying storage size. This prompts a process - So called [[ReHashing]] - that remaps the indexes. 
This can be expensive, and very hard to work with in some applications. In settings such as [[distributed applications]], these can be alleviated by [[Hashing|Consistent Hashing]] , schemes such as [[HashRings]], as implemented by [[RingPop]]. 


[[Collisions]]


Since the undelying array has an finite number of entries, collisions are bound to happen, that is: Two different values can point to the same array index. 

There exists various kind of procedures to edeal with hash collisions, but they mostly fall in two different kinds


[[Open Hashing]]

Also known as [[separate chaining]]. Instead of embedding the value directly in the array, we embed a collection - such as a [[linked list]] or a [[binary tree]] - in the array instead, and put the value inside this collection. 

When fetching, we search exhaustively  inside of the associated collection. Of course , this has O( n ) worst case [[retrieval]]. 

[[Open Addressing ]]
                    
Also known as [[closed hashing]]. 

in the case of collision, we simply look for another entry to place the value. All that is needed is a policy to deterministically generate the same candidates given a seed hash. 

Various such policies can be devised, such as 

[[Linear Probing]]
[[Quadratic Probing]]
[[Double Hashing]]



References:

    https://www.youtube.com/watch?v=hxdT_QgHUSg
