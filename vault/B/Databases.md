# Databases

Databases are mission critical and are different from traditional applications, because they are stateful.

## Kinds

* [[DatabaseRelational]]
* [[DatabaseNoSql]]
* [[DatabaseWarehouse]]
* [[DatabaseLake]]

## Scalability

When working with no-sql databases, its easier to scale out, since its possible to partition the data.

There are Different process for [[DatabaseRelational]].

* They are scaled out in a unique manner.
* Its easy to scale up, however its not always possible.

### Read Load

Read Replica

* Read-Only identical copy.
* Any read operation is redirected to this read replica.

Caching Systems

* Lowers the read load, both on master and replica
* [[AwsElastiCache]]
* [[ToolRedis]]

### Write Load

Smooth out writes with queues

* [[AwsSqs]]
* [[ToolRabbitMq]]
