Amazon Aurora
	
	. Fully managed database engine
	. Compatible with MySQL and PostgreSQL	
	. With some times of workloads can deliver five times the throughtput of mysql / 3x postgres
	. Highly available
	. Storage grows on demand

	Primary Database writes into the cluster volume
		-> HA of data, since redundant
	Replicas can read from the volume

	. Can change underlying instance class
	. Can enable Auto Scaling



___



NoSQL database
	
	Dynamo DB

	What is Dynamo DB
		. Fully managed NoSql database service
		. Fast Access , no burden of infra, HA, scalability
		. SSD, automatically replicated across AZ ( redundant, HA )

		. SchemaLess tables
		. Json-Like 

	Best Practices
		. If simple queries, use DynamoDB
			.. Queries are flexibles in RDDMS, but can become expensive.
		. Try not to create too many tables.

		. Understand the size of the data that is going to be store. ( This inpacts read and write capacity, and in turns defines costs incurred )

		. Ensure attributes used in queries form the partition key.

		. Make use of global secondary indexes for performing queries on other attributes

		. Make sure that attributes used as the partition key has a good range of values -> evenly distributed data across partition


....

DocumentDB exists 


...




Is it possible to trigger the dynamodb export as csv from an api endpoint? it should , right?


...

dynamodb time series : https://aws.amazon.com/blogs/database/design-patterns-for-high-volume-time-series-data-in-amazon-dynamodb/


...

Higher Availability with DynamoDB
	
	Global Tables

		This feature allows tables to be available accross multiple regions
		If you want data to be accesses from other regions with the least altency, you can make the data available in the edestionation region with the help of the global talbesDynamo automatically propagate the data to the destination regions
		Helps both with latency and HA, single you using multi AZ / multi region

	Backup and Restore
		Backups can be created on demand
		Backups do not consume provisioned throughput
		Backups contain Global Secodary indexes, local secondary indexes and provisioned read and write capacity
		Tables can be restored from the backup


...


    EBS
        . Type of storage , takes your data and breaks it down into blocks
        . Acts , look and feel like a virtual hard drive.
        . Doesn't go away with a reboot. 
        . EBS volumes scales to whatever size needed. 
        . 5 minutes of downtime per year. 
        . EBS is designed for high transactional workload


                                     Snapshot 1
        Amazon EC2 ->   EBS     -< 
                                     Snapshot 2
        . Snapshots are 100% copies of the harddrive. This means that , compared to traditional tape backups, which would require a OS before being able to recover, snapshots can just go.
        . Picking a volume type
            .. Latency
                ... how long ( ns ) to pull or store data from the hard drives.  It is determined by the number of operations you can do per second. Higher Ops == Lower Latency. 
                ... Fastest volume is 64k IOPS from aws. A $100 dollar HD  from best buy has 1M IOPS
            .. Throughput
                ... How much stuff you can move. 
            
            .. Best You can get is EBS provisioned IOPS
                ... Good for databases
                ... Throughput is around 1000 mbit ( network bottlenecked )
                ... Highest Trouput, lowest latencies
            .. GP2
                ... Great for Boot Volumes ( Persistent )
                ... good balance of price and performance
                ... use Generic SSD ( Not NVME )
                ... High IOPS ( low latency ) , albeit worse than the provisioned IOPS.
                ... Very mediocre throughput ( around 200 mbit ) // a $100 SDD has 560 mbit ; HDD has 180 ; 
                ... Good boot volumes, Dev / Test Environments, Price performance volume. 
            .. Throughput Optimized drives ( ST1 )
                ... Lots of data, don't     worry about latency
                ... Magnetic storage, in a raid array. 
                ... 500 mbit / s ( standard ssd speeds )
                ... Good fort throughput intensive, frequently accessesd workloads 
                ... Huge Log Files, Huge sequential read / writes. 
            .. EBS ( SC1 )
                ... Lowest Cost, Lowest performance

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



...
Ebs:
	
	Persistent Block Stores for EC2
	Provides Redundancy in its availability region
	Persistent between stops and terminations
	Can be re-attached to other instances

	Volumes:
		Magnetic HDD
			Optimized for large streaming frameworks, when Trhoughput is better indicaton that OPS

		General Purpose SSD
			Dominant Property Atribute is IOPS
			Balances Prices and Perfomrance for most variety of workloads
			max at 16k IOPS / volume
		Provisioned IOPS
			Dominant Property Atribute is IOPS
			> 16k IOPS
			Max at 64k IOPS

	SnapShots
		Point in Time backup of the data
		Incremental 
			Only the Blocks that changed get saved
		Can be used to create backups of critical workloads 


___




By default, ebs deletes the volume on instance termination.

...


EBS Volumes can only be shared between ( up to 16 ) aws nitro system based ec2 within the SAME availability zone

...


Ebs volumes are NOT encrypted by default.

There exists nativa data encryption drivers at the file system level

...


Elastic Block Storage
	
	Created in a particular AZ
	The data is replicated intra-zone

	Do not check delete on terminated
	Backup data by creating snapshots
	copy snapshot for disaster recovery purposes

	Standard RAID configuration can be used for ebs

	RAID 0 
		IO performance >> fault tolerance 
		Ideal for the ec2 instances are hosting databases
	RAID 1 
		Fault tolerance >> io performance
		Data is written to multiple volumes at a time, and more ec2 to ebs bandwith is required.



    EBS
        . Type of storage , takes your data and breaks it down into blocks
        . Acts , look and feel like a virtual hard drive.
        . Doesn't go away with a reboot. 
        . EBS volumes scales to whatever size needed. 
        . 5 minutes of downtime per year. 
        . EBS is designed for high transactional workload


                                     Snapshot 1
        Amazon EC2 ->   EBS     -< 
                                     Snapshot 2
        . Snapshots are 100% copies of the harddrive. This means that , compared to traditional tape backups, which would require a OS before being able to recover, snapshots can just go.
        . Picking a volume type
            .. Latency
                ... how long ( ns ) to pull or store data from the hard drives.  It is determined by the number of operations you can do per second. Higher Ops == Lower Latency. 
                ... Fastest volume is 64k IOPS from aws. A $100 dollar HD  from best buy has 1M IOPS
            .. Throughput
                ... How much stuff you can move. 
            
            .. Best You can get is EBS provisioned IOPS
                ... Good for databases
                ... Throughput is around 1000 mbit ( network bottlenecked )
                ... Highest Trouput, lowest latencies
            .. GP2
                ... Great for Boot Volumes ( Persistent )
                ... good balance of price and performance
                ... use Generic SSD ( Not NVME )
                ... High IOPS ( low latency ) , albeit worse than the provisioned IOPS.
                ... Very mediocre throughput ( around 200 mbit ) // a $100 SDD has 560 mbit ; HDD has 180 ; 
                ... Good boot volumes, Dev / Test Environments, Price performance volume. 
            .. Throughput Optimized drives ( ST1 )
                ... Lots of data, don't     worry about latency
                ... Magnetic storage, in a raid array. 
                ... 500 mbit / s ( standard ssd speeds )
                ... Good fort throughput intensive, frequently accessesd workloads 
                ... Huge Log Files, Huge sequential read / writes. 
            .. EBS ( SC1 )
                ... Lowest Cost, Lowest performance

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


...

EFS Encryption does not need the rule from the security group.


Elastic File System
	
	Only for Linux
	Windows based : Sfx

	Block Storages are local to each instance, but 
		Elastic File System Can be shared between services

	Can work with S3.




    EFS
        . Linux and WIndows uses different file sharing protocols
        . Linux uses Network File Systems
        . EFS is NFS managed by AWS
        . POSIX compatible storage
        . Has Standard and infrequent storage
        . Scales on demand
        . For windows, use Linux with Samba Share
        . AWS has maanged SMB servers. the name is EFX
    
        . Set up a storage gateway ( a virtual machine ) , put in the data center. It copies stuff to the cloud.


___


The snapshot lifecycle policy can reduce storage costs by deleting outdated backups, however, the snapshots themselves still have costs.

There is a limit of 100 lifecycle policies per region.


Amazon DLM ( data lifecycle manager ) exists.

___




Amazon RDS HA
	
	What is multi-az
		. Provides High availablity and failover support for database instances
		. Automatically provision a standby replica in a different availability zone
		. Data is transferrent between instances synchronous, using Amazon Failover ( or SqlServer Database MIrroing if SQLSErver)

		. You can't read data from the standby replica
			. Only when a fasilure happens on the primary database instance then a switchover is made from the primatry to the seconday instance, which means
				. Outage in a AZ
				. Primary Database fail
				. Server type for the instance is changed
				. OS is being patched
				. Manual Failover ( reboot with failover )

		Region
			Availability Zone

		to enable multi-az
			Modify database inside RDS.

___

...

To benefit from reserved rds instances, all of the attributes of the rds instances in another account shouldmatch the attributes of the reserved db instances.

( DBEngine, DB Instane class, Deployment Type, License Model )

...


...

for amazon rds on vmware, you can only create a read replica in the same region as the source db instance



About raid configurations

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.html

...



    Databases
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
            
        . Backing up
            .. By default , the entire database is automatically backed up in a EBS volume.
            .. Happens in a predefined schedule every time
            .. Consume resources, and degrades performance while its being done
            .. How to restore it? 
                ... Launch a new instance out of your AMI snapshot image.
            .. Encrypting the backup is a necessity. 
                ... Can Use KMS to manage the keys
                ... Can also use Cloud HSM
            .. Encryption in transit
                ... Encrypt the transit in its way to the destination. 
                ... TLS during the database connection.
        . High-Availability
            .. Databases are different from traditional applications, because they are stateful. 
            .. Its also mission critical. 
            .. Its easy to scale up. However, its not always possible. Then you need to scale out. 
            .. When working with no-sql databases, its easier to scale out, since its possible to partition the data. 
            .. Different process for relation databases. They are scaled out in a unique manner. 
            .. Reducing Read Load
                ... Read Replica: Read-Only identical copy. Any read operation is redirected to this read replica. 
                ... Usually, can add up to 4 ( aws ). Can use nested read replica in these cases.
                ... We can also implement a caching system to lower the read load, both on master and replica ( ElastiCache )
                ... Redis
            .. Reducing Write Load
                ... Introduce Queues to smooth it out ( SQS , via FIFO | Standard )
            .. In the cloud , 99.9% with 1 AZ, 99.99% with 2 AZ
            .. Always, 2 AZ at minimum. For more availability, need more Az and more regions
            .. 
        . ETL
            .. Needed to exchange data between the various storages 
            .. AWS Glue
                ...


___




		Cloudsearch
			Search solution for an application or website
			Web pages, document, files, event web posts
			index and search both structed and plain text
			boolean search, range search or full text search



