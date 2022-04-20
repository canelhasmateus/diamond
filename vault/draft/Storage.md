
Durability is the guarantee that data can be accesses after a failure. It is not a vinary property, but should be defined as the "kinds" of failures you want your data to survive. 
    . Usually, there is some performance penalty for durability;
    . Rarely testing - involves cutting power, which is distruptiver and hard to automate. 


nvme
    writes of a single logicval block *must* be atomic. 
    block? sector? journal? raid | write cache?s

    . Commands rare submitted to devices using a set of queues. 
    At some tmie, the device acknowledges that the command have complete. There is no ordering guaranteed between commands. 
        . Host or application is required to enfornce that ordering.
            -> Software needs to wait for commands to complete before issuing the next commands. 
        . Guaranteed to return the most ocmpleted write, although they may also return data from uncompleted writes that have been queued. 

    In the case of concurrent writes to overlapping ranges, what are the permitted results? 
        . Not specified ;  weak ordering, sematics similar to memory in multithreading. 


___



https://www.youtube.com/watch?v=wMbTHFXImzI

postgres 13

duplicate data in b-tree indexes  
incremental sorting?


___


https://www.youtube.com/watch?v=edB-_JnhoRY

Content Persistence

