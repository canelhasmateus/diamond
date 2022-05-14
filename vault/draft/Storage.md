
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

<https://www.youtube.com/watch?v=wMbTHFXImzI>

postgres 13

duplicate data in b-tree indexes  
incremental sorting?

___

<https://www.youtube.com/watch?v=edB-_JnhoRY>

Content Persistence

___

<https://www.youtube.com/watch?v=CjUdp1UY3uM>

SSD is a block device. You can only read and write in blocks - Usually 4k bytes sizes.

Blocks are a storage of pages.

How do we know the address of those blocks?
    . The application could just send a "update block 10" -> The ssd moves stuff around all the time
    . So, we use the Logical Block Addressing - The ssd internally creates and maintain a mapping from logical to physical block.
        .. the Flash Translation Layer is what does this mapping.
        .. Where does it store the mapping? DRAM
        .. This mapping can be smaller if we use a coarser block size, and vice-versa
            ... If we do a page-level addressing, it requires large amounts of ram.
    .. WHy does it needs it anyway??

Erase Unit
    .. To write to a block, we must first erase its previous contents.
    .. We could send a a Erase and then a Write - But then things egt slow, since we're doing 2 operations.
    .. Erasing is expensive at ssd - so we do it in large units
    .. To erase, a physical larger current is applied to the cell - Over time , this wears the cell down

Namespaces
    Helps with multi-tenancy

SSDs do Garbage Collection
    . There is no guarantees about the contiguity of data from each file
    . When writing and updating files, the blocks aren't immediately erased, just marked as invalid.
    . At some point, every block is in use or invalid, so we must clean the space somehow.
    . We must them, clean an erase unit - but it isn't completely invalid, it contain good blocks.
    . So, we must pick the good data and place it temporally to some place - but the ssd is full, so -
    . we place it in an area called over-provisioning -> It is dedicated for the system.  -> Paid , but not used
    . The process of writing to a buffer, erasing the unit, then writing it back generates write amplification ( 4x )
    . During this garbage collection time, reads to file which contains blocks at the erase unit are blocked ;

Wear Leveling
    . Data access is not uniform - There are places that are cold and others that are hot.
    . Therefore, the hot cells wear out first.
    . The ssd then moves cold and hot data around to level the wear out.

# Cloud

Storage on the cloud.
    What is storage
        Where a organization keep its data
            . Volatile
                Something that goes away when you reboot. Storage that is attached to your instance:
                When your instance is terminated, you lose all of this data.

            . Non-Volatile
                Survives a reboot. Hard disk.

    Block Storage
        .  Network attached. So your network becomes a bottleneck.
        . Breaks data into blocks
        . Can be placed wherever it makes more sense, such as attached directly to an instance. 
        . Can save whatever, such as operating systems, frequently changed files.

    Object storage
        . Another type of storage. 
        . Breaks data into objects
        . An object has an unique id, and metadata. 
        . Metadata enables interesting things, such Can create a data lake, run sql queries, integrate into environemnts
        . Not too fast, compared to other 
        . Absolutely Terrible for files that change quickly
            .. Everytime you modify a file, we create a new version, which means more space, which means more costs.

    File storage
        . In your computer, we have a hard drive. Into it we put files. 
        . Think 'Drives' 

___

    Raid
        . Redundant Array of Inexpensive Disks
        . Improve disk size and performance in the most cost-effective way
        . Take 10-20 drive, but the PC looks at it as only one
        . Improves size , performance and redundancy of storage

        . Raid- 0 
            .. Best for disk performance ( striped writes)
            .. VERY fast
            .. Low fault tolerance 
            .. If you're using RAID-0, your disks WILL go down, just a matter of when. you need BACKUP.
            .. BACKUP BACKUP BACKUP
            .. Some flavor of RAID-0 is the only way to get acceptable performance on the cloud
                ... 64k IOPS is the maximum you can get in a ebs volume, vs 1M of a off-the-shelf disk
                ... If you need 1M IOPS from EBS, you need to pack 15 of these dirves together
            .. Too risky. Hard drive for video game computers ; Video Editing ; 
        . Raid-1
            .. Best for redundancy ( Mirroring )
            .. Real time backup 
            .. very slow. expensive ,   doesn't increase capacity, performance isn't great
        . Raid-5
            .. Balance of speed and redundancy
            .. Each One of the drives reserves some capacity to parity
            .. Not very common on the cloud,  because it adds latency ( and 64k IOPS is already low enough. )
            .. Very good on-prem
        . Raid-10
            .. Basically only opiton in the cloud to get the necessary IOPS. 
            .. Very expensive, since you need double the number of drives



    Raid
        . Redundant Array of Inexpensive Disks
        . Improve disk size and performance in the most cost-effective way
        . Take 10-20 drive, but the PC looks at it as only one
        . Improves size , performance and redundancy of storage



        . Raid- 0 
            .. Best for disk performance ( striped writes)
            .. VERY fast
            .. Low fault tolerance 
            .. If you're using RAID-0, your disks WILL go down, just a matter of when. you need BACKUP.
            .. BACKUP BACKUP BACKUP
            .. Some flavor of RAID-0 is the only way to get acceptable performance on the cloud
                ... 64k IOPS is the maximum you can get in a ebs volume, vs 1M of a off-the-shelf disk
                ... If you need 1M IOPS from EBS, you need to pack 15 of these dirves together
            .. Too risky. Hard drive for video game computers ; Video Editing ; 
        . Raid-1
            .. Best for redundancy ( Mirroring )
            .. Real time backup 
            .. very slow. expensive ,   doesn't increase capacity, performance isn't great
        . Raid-5
            .. Balance of speed and redundancy
            .. Each One of the drives reserves some capacity to parity
            .. Not very common on the cloud,  because it adds latency ( and 64k IOPS is already low enough. )
            .. Very good on-prem
        . Raid-10
            .. Basically only opiton in the cloud to get the necessary IOPS. 
            .. Very expensive, since you need double the number of drives

___

        . Relational Databases
            .. Help a organization find the relationship between variables
            .. What do prices do to sales
            .. Most common form of databases 
            .. Schema on write 
            .. Acid
            .. Aurora, Mysql, Postgres, MariaDB, OracleDB, SQL Server
            .. Can use  the included license or the Bring Your Own License

        . NoSql Databases
            .. Scale
            .. Schema on read
            .. DynamoDB ( is compatible with cassandra ) , CloudBigTable , Cassandra, MongoDB
                ... DynamoDB auto-scale doesn't scale down ( can do it manually).
                ... Need to provision your read and write capacity


        . DataWarehouses 
            .. Large amounts of historical data
            .. Incredible Amounts of information -> Mine it -> Better decisions
            .. RedShift
            .. Can buy storage nodes or dense compute node
        
        . DataLake
            .. A repository that enables  
                ...

___

Databases are mission critical and are different from traditional applications, because they are stateful.

When working with no-sql databases, its easier to scale out, since its possible to partition the data.

Different process for relation databases. They are scaled out in a unique manner. Its easy to scale up. However, its not always possible. Then you need to scale out.

.. Reducing Read Load
    ... Read Replica: Read-Only identical copy. Any read operation is redirected to this read replica.
    ... We can also implement a caching system to lower the read load, both on master and replica ( ElastiCache )
    ... Redis
.. Reducing Write Load
    ... Introduce Queues to smooth it out ( SQS , via FIFO | Standard )
