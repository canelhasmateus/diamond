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
