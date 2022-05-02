Amazon RDS

Offers Multi-Availability Zones and failover support for database instances, which automatically provision a standby replica in a different availability zone. 
Can be enabled by modifying the database inside RDS.

In this process,  Data is transferred between instances synchronous, using Amazon Failover (or SqlServer Database Mirroring if SQLServer).


This StandBy replica is usually inaccessible: 
You can't read data from the standby replica, and only when a failure happens on the primary database instance then a switchover is made from the primary to the secondary instance. Failure includes:

* Outage in a AZ
* Primary Database fail
* Server type for the instance is changed
* OS is being patched
* Manual Failover ( reboot with failover )

Obs: For amazon RDS on VmWare, you can only create a read replica in the same region as the source database instance.

___

On Availability

The usual rules of database availability apply to cloud resources, that is: [[Read Replicas]], [[Caching]] and [[Queue Buffering]]. 

In AWS, each database can have up to 4 Read Replicas. If more are necessary, its possible to use nested read replicas.

___

Amazon Aurora

Offers a Fully managed database engine, compatible with [[MySQL]] and [[PostgreSQL]]. Its Highly available, and grows storage on demand. 

( ?... )

	Primary Database writes into the cluster volume
		-> HA of data, since redundant
	Replicas can read from the volume

	. Can change underlying instance class
	. Can enable Auto Scaling

___

Dynamo DB

Fully managed NoSql database service
Fast Access , SSD, automatically replicated across AZ ( redundant, HA )

[[NoSQL]] database


Uses:
* Try not to create too many tables.
* Useful when using simple queries ( Less flexible, but inexpensive )
* Understand the size of the data that is going to be store. ( This impacts read and write capacity, and in turns defines costs incurred )
* Ensure attributes used in queries form the partition key.
* Make use of global secondary indexes for performing queries on other attributes
* Make sure that attributes used as the partition key has a good range of values -> evenly distributed data across partition


	
Global Tables

* This feature allows tables to be available accross multiple regions
* If you want data to be accesses from other regions with the least altency, you can make the data available in the edestionation region with the help of the global talbes
* Dynamo automatically propagate the data to the destination regions
* Helps both with latency and HA, single you using multi AZ / multi region

Backup and Restore
* Backups can be created on demand
* Backups do not consume provisioned throughput
* Backups contain Global Secodary indexes, local secondary indexes and provisioned read and write capacity
* Tables can be restored from the backup



(?... )
	Is it possible to trigger the dynamodb export as csv from an api endpoint? it should , right?

	dynamodb time series : https://aws.amazon.com/blogs/database/design-patterns-for-high-volume-time-series-data-in-amazon-dynamodb/



___

Redshift

Fully managed data warehousing service.
Is Creates a cluster: a Leader Node and one or more compute Nodes. 
* Use SQL Tools to connect to the Leader Node.
* Compute Node execute queries
* Capable of using reserved instances.

Backups
* Point in time snapshots
* Automated snapshots are stored in S3.
* Retained till the retained period. Manual ones are allowed to be older.
* Snapshots incur additional storage costs.
* uses HSM certificate to connect to the client HSM store and retrieve the keys used to encrypt the cluster databases.



VPC
* Enhanced VPC Routing
* Ensure all COPY and UNLOAD traffic between the cluster and data repositories via VPC.
* VPC Security groups, NACL, VPC Endpoints




___

DocumentDB exists 
* Managed MongoDB
  
Cloudsearch
	Search solution for an application or website
	Web pages, document, files, event web posts
	index and search both structed and plain text
	boolean search, range search or full text search
___
