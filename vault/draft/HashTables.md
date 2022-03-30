#...

    https://www.youtube.com/watch?v=hxdT_QgHUSg

    HashTables are useful.
        caching
        db joins ( many types of hash join? )
        partitioning
        distributed databases ( How??)
        sharding
        sets
        load balancing
    
    think of hashsets as glorified arrays 
        ( btw, they are, consider its other name: "Associative array" )
        
        . given a key, do a hash, with the hash, calculate a array index and go there.

        . going to the array index is almost constant
            . we take the address of the head of the list, and add the element size ( addition is very cheap)
            . then, we fetch the element at that location
                ( the cost of this depends of the architecture of your cpu , numa vs uma, for example , but can be considered constant)
        
        limitations
            . memory size. the has tble must fit in memory ( byte addressability ?? )
            . mutation
                .. When adding / removing values, we may need to increase the underlying array size. This prompts a re-mapping of index, that can be hard to work around, specially in distributed partition settings. 
                    .. Consistent Hashing
                    
            . collisions

    