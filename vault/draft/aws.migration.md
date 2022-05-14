
To share resources and other organizational units inside the aws organization, utse the AWS resource Access Manager.
 . Add the shared components, images or recipes in the resoucre shares and coigure the pirincipals which are allowed to access the shared resources.

VM Import / Export

 Server Migration Connector is a component of aws server migratoin server and is not used by the bm import exxport tool
 AWS Discovery tools are used by aws migration hub to plan the migration from data centers to aws.
 During the export, an ova file is crated in an s3 bucket.
 You can export a vm directly from an ami, using aws ec2 export-image

___

Ami uses Packer to create the images

...

<https://aws.amazon.com/blogs/aws/ec2-vm-import-connector/>

...

On Database Migration

<https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html>

It supports s3 as a source for database migration.
...

...

When moving Applications to cloud. Its necessary to configure toute 53 resolver to forward queries via VPN / Direct Connect to the On-Prem DNS Server.

...

Transfer Data

 How to transfer data

  AWS Snowball

   Physical storage device that can be used to transfer large amounts of data between amazon S3 and your on-premise data center
   Up to 80 TB data. good if you have limited internet bandwidth.
   If less than 10tb. Snowball Probably is not the most economical choice.
   The data is encrypted on the device
  AWS Snowball Edge

   Symilar to snowball, but also has on-board storage and compute power
   Can perform edge-computing workloads in addition to transferring data between your on-premise data center and the aws cloud
   around 100 TB local storage
   Netwrok adapter with transfer speeds of up to 100 GB/ SECONDS
  AWS Snowmobile
   Trnsfer or move 100 Petabytes
  AWS S3 Transfer Acceleration

   Transfer files to s3 in a remote region
   If long distance between client and s3, it could take a long time to tyranfer the data

Migrating Databases

 DMS
  Helps in migrating relational databases, data warehouses, nosql databases and other data stores as well
  you can use aws cloud or on-premise data stores as your source or destination
  if you need to change database engines, you can use the aws schema conversion tool to convert the schema to the target database platform
   .. Source : Oracle SQLServer, Mysql, MariaDB, Postgres, Mongdb, SAP ASE Aurora
   .. Sink: Oracle SQLServer, Mysql , Postgre, Redshift, S3, DynamoDB.

 How to use

  Possibly:
   One step migration
    .. Just replicate
   Two Step Migration
    .. IOnitial Chunk using Snowball
    .. Then , migrate just the delta data.

Migrating Workloads

 Net Application and Cassandra
  Supposed a companny has a .net application. This application use Cassandra as the data layer
  They want to migrate this architecture to aws
  They want to miniize the administrative overhead in managing these solutions when they are moved to aws.
  They don't mind making code changes if required to meet the migration requirements.

  Possibilities

   Ec2 instances?
    No , administrative overhead.
   Moving the .net application to Elastic Beanstalk
    Sure.
   Moving Cassandra data to dynamoDB
    Sure,
    Also, use DMS to migrate to any other database.

 Migrating documents
  A company has a large set of documents that need to be migrated to aws.
  They need the data store unit to be highly available and sacalable
  Data must be encrypted at rest and in transit.
  The company wants to ensure that they manage the encryption keys.

  Possibilities

   EC2 Instances with EBS Volumes
    Not cost effective. Mannually increasing the storage and manage high availability
   DynamoDB
    Not a data store documents

   S3
    Yes, use KMS to manage keys

...

Storage Gateway

 What is  the storage gateway
  This is a service that you can use to connect on-premise software applicae with cloud-based storage devices
  cost-effect for companies that need to extend their on-premise storage
  Inbstead of buying extra on-premise storage, they can use the storage gateway.

 File Gateway

  This gateway supports a file interface to the S3
  Can store and retrieve objects into amazon s3 using the standard file protocols such as Network File System ans Server Message Block
  An appliance needs to be deployed into your on-premise environment, either on a vmware environment or a hyperv
  then, mount the file system onto the S3

 Volume Gateway
  This gateway support the creation and usage of volumes that can be mounted as internet small computer system interface devices

  Cached volumes
   Data is stored in s3. A copy of frequently accessed is stored locally.

  Stored volumes
   All Data is stored locally. Effective when need to access locally. A copy of the data is then stored as a point in time snapshot to s3.

 Tape gateway
  Supports the ability to store data effectively in glacier or deep archive
  Make use of a virtual tape infrastructe
  
 Example with VOlume

 How to work with the aws storage gateway

    Storage Gateway 
        . A virtual machine, which you put in the data center.
        . Transfers data to AWS
        . Mount the rest of the data center drives via NFS / SMB.
        . Copies to S3 ( EBS Snapshot).
        . Volume Stored Mode
            .. Assumes 90% of your data is in your data center 
            .. ISCSI
        . Volume Cached Mode
            .. When most of your data is in the cloud
            .. makes s3 look and feel like local storage
            .. Basically a caching environment and Content Delivery System
            .. Does bidirectional 
        . Tape Gateway 
            .. Connects to the tape via iscsi

    Snowball
        . When a lot of data is needed to be  migrated , or when you have low amounts of time.
        . Highly ruggatized container filled with lots of hard drives. ( Comes in 40 or 80 tb )
    Snowmobile
        . Basically a shipping container full of hard drives

    AWS Import / Export service
        . Mini-Snowball
        . Copy to the harddrive, and ship it to aws.
