## DataLake

```
        .. A repository that enables  
```

## NoSql

```
    . NoSql Databases
        .. Scale
        .. Schema on read
        .. DynamoDB ( is compatible with cassandra ) , CloudBigTable , Cassandra, MongoDB
            ... DynamoDB auto-scale doesn't scale down ( can do it manually).
            ... Need to provision your read and write capacity
```

## Relational

```
        .. Help a organization find the relationship between variables
        .. What do prices do to sales
        .. Most common form of databases 
        .. Schema on write 
        .. Acid
        .. Aurora, Mysql, Postgres, MariaDB, OracleDB, SQL Server
        .. Can use  the included license or the Bring Your Own License
```

## DataWarehouse

___

## Page Splits

<https://www.youtube.com/watch?v=fnR215jy-X8>

database page splits

hd and ssd are built around blocks.
\-> When doing a read, you don't get to choose the amount you get. At minimum, you get 'BLOCK\_SIZE'
\-> The same goes for writes.  Need to write in multiples of 'BLOCK\_SIZE'

A page is a database abstraction.
\-> They not necessarily map 1 to 1 to blocks in the disk
\-> They are cached in buffer pools.
\-> When writing to that page, the database writes to the cache, buffering the disk flush.
. It does so because any write to a page must be flushed to the disk in 'BLOCK\_SIZE'. -> Multiple IO == Garbage collection on ssd

```
    . What about durability? -> Write Ahead Log
```

In a normal workload, we write to a page , until this page is "full". What happens if , after some time, we need to write to the middle of that page ( due to ordering / indexes )?
. If there is no space, we have to split a page.
. To deal with these splits, we usually let the pages only partially full ( say, 80%, depending on the database fillfactor ).
. UUID primary keys are very likely to do this, since they're basically random.

When a page split occurs, what happens is index fragmentation: instead of occupying 1 page, it nows occupies 2 - which is bad because we must issue more logical reads / hard disk IO

when issuing writes to the o.s , it itself also caches / buffers the writes.
This doesn't fly for WAL in databases, because of durability - this means we must use fsync for WAL flushes.
