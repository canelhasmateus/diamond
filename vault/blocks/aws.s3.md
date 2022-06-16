Simple storage service

 Durable reliable, highly available and cost effective object storage.

 Store as objects
  Treated as blackboxes
  Only accesses the metadata, such as
   Size, Creation Time

  Block Level storage vs Object storage

 Main Features:

  Durability -> SLA 99.99999999%
  Availability -> SLA 99.99%
  Scalable
  Reliability
  Fast data acces
  Inexpensive
  Secure
  Flexible ( Different Tiers of Storage. )
   . Standard
   . Infrequent Access
   . Glacier

  Easy Interface
  Easy Integration

 Use Cases>

  Backup
  ARchiving ( Glacier )
  Disaster Recovery

 Object vs Block Storage ( associate course)

 Data Consistency Model:
  Read after write consistent ( New PUT )
  Eventually Consistent ( Overwrite PUT)
  Eventually Consistent (for DELETE)

 Versioning:
  Very Important

  After turning the versioning:
   Tracks changes to the object
   Delete Marking

  Cross Region Replication

 Storage Classies

  Which is the best

 Bucket Policy and Access Control List ( Secutity Aspects ) --- Associate Course

 S3 Events, Logging

...

Route 53 Health Checks

 What Are

  Health checks can be used to monitor an endpoint either via an IP address or a domain name
  The health checks will then check the health of the endpoint at regular intervals
   Define the Interval,
   Define the Endpoint
   Define the protocol ( HTTP vs TCP )

 Examples

  Use health checks along with the failover routing policy

...

S3 Replication

 Replication of data in S3

  Replication allows the copying of objects accross s3 buckets
  Either cross or within region

 Why?
  Compliance
  Latency - Replicate objects to bring the objects closer to the user.

 How to implement

  Source and Destination bucket must both have versioning enabled.
  Create rule in the source bucket to enable replication
  When creating the rule, you must also specify a role that would be used to allow the replication to take place.
  While being replicated, we can also change the storage tier.

...

AWS Athena

 Query data in S3

  What is the purpose

   Interactive query services that allows to analyze data directly from the amazon s3.
   Complete Serverless

   Query and analyse unstructured, semi-structured and structured

   formats such as CSV, JSON, Parquet, ORC.

  Demo
   ...

...

S3 Storage Classes

 The costs associated on the s3 requests:
  Based on
   the request type
   the volume of data.

 Storage Classes gives different Tiers

  Configured at the object level

 Standard
  General purpose storage of frequently access data
  Default storage class.
  Data is replication across 3 different availability zones
  Durability of 99.9999999999 and availability of 99.99 ( Highest of all storage clases )
  Low latency and high throughput
  Costliest
  S3 Lifecycle management is sused to configure the lifecycle policies to automaticaly migrate objects from this class to the other appropriate storage classes

 Standard-IA
  long lived, but frequently access data

  Also replicated across 3 AZ.
  Same durability of Standard.
  Availability is 99.9% ( Lessger )
  Cost Lests than s3-standard - Charges you for retrieving the data per GB
  Also supports Lifecycle management.

 S3 One Zone
  Only storage at a single availability zone
  Same surability, but with availability of 99.5%

  Costs are 20% than standard-IA
  Also charges by retrieving the data per GB

  Good choice for storing secondary backup or easily re-creatable data, or for storage used as an S3 cross-region replication target from another aws region
  Also Supports lifecycle policies.

 Intelligent-Tiering
  Cost optimization without performance impact
  Monitors objects. If access >= 30 days, it moves then to infrequent access tier.
  When acessed, these items are moved back again to the frequent access tier.
  No retrieval fees, nor additional moving-between-tiers fee, but charges a monthly monitoring and automation fee per object.
  Ideal for long-lived data with access patterns that are unknown or unpredictable
  Suitable for objects larger than 128KB that you plan to store for at least 30 days.
   If you delete an object before the end of the 30-day minimum storage, you are charged for 30 days.
  Also Supports lifecycle policies

 Glacier
  Secure, durable, extremely low-cost
  Three options for retrieving:

   Standard
   Expedited
   Bulk
  Archived data can be retrieved in a few minutes to hhours and the user will be charged according to the option used.
  Costs Significantly less than all other S3 storage classes, charges you for retrieving the data per GB.

 and Glacier Deep Archive
  Lowest cost storage class, designed for long-term retetion for data that will be retained for 7-10 years
  Data can be restoresd within 12 hours.

S3 Transfer Acceleration gives the ability to write into the single s3 bucket from variavous location, using edge locations to move the data. It does not work with Amazon Glacier.
( <https://aws.amazon.com/about-aws/whats-new/2016/04/transfer-files-into-amazon-s3-up-to-300-percent-faster/> )

About S3 encryption
'
 <https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/#more-1038>
 <https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html>
'
S3 data can be copied into root volume at boot time.

...

You can use the amazon s3 transfer acceleration speed comparison tool for comparing general upload speed accross different aws regions, but not edge locations.

...

    S3
        . Object Storage in S3
        . Reasonably High-Availability ( 99.9%, which means 53 minutes downtime a year)
        . Very High Durability ( 11 nines. )
        . Use cases
            . Archival
            . Static Website Hosting
            . Content Distribution , Large videos, software midia
            . Disaster Recovery Content
            . Big data analytics
        . Organized into buckets
            . Each bucket has a full dns namespace.
            . bucket names can up to 63 characters
            . using delimiters ( '/' ) , makes it feel like a directory. Still very flat.
        . Need to secure your data.
            . In each bucket, we can put bucket policies, which is an extremely granular way of doing control.
            . Encryption
            . Storage Tiers 
                . Standard
                . Infrequent Access - Standard
                    .. Cheaper than standard. You pay for access.
                . Infrequent Access - 1 zone
                    .. Same as above, but with reduced availability. 
                . Intelligent Tiering
                    .. Automated Service. Aws monitors the data, and migrate to the appropriate type of storage. 
                    .. Cost optimization is managed by aws.
                . Glacier
                    .. Really low costs
                    .. Get access by paying for it when you needed
                    .. Not immediately available,  generally 5 hours of waiting
                    .. Can by to expedite retrieval
        . Lifecycle Management
            . Enables Cost Optimizationm
            . Configured by user defined policy
            . Amazon S3             Amazon S3-IA            Amazon Glacier
                        - 30 days ->            - 30 days -> 
        . Versioning
            . Modifying the document creates a new version
        . Authentication Delete
            . MFA authentication delete.

        . Not Traditional Storage ( Very Flat )
        . Encryption
            . SSE-KMS
            . SSE-S3 ( AWS Managed )
            . SSE-C ( Customer Provided - Complete Autonomy )
        . Tuning S3
            . Presign URL
                .. Everything in S3 is private. 
                .. Temporary and secure access.
                .. Duration is based on the way you set it.
                    ... IAM Instance Profile gets up to 6 hours.
                    ... AWS Security Token Service gets up to 36 hours
                    ... IAM Users lasts for up to 7
                    ... Temporary token lasts up to the expiration of the token
            . Multi Part Upload
                .. Things can go wrong when uploading a file ( Internet has no guarantee )
                .. File is split into smaller files, and reconstituted later , in S3 side.
                .. 
            . Range GET
            . Cross Regional Replication
                .. Supose we need more availability and durability.
                .. We can replicate data into other regions.
                .. Reduced inter-regional transfer costs.

    Instance Storage
        . When you set up your systems, the compute instances are nothing more than virtual machines
        . Underlying-ly, these machines are like 128 cpus, couple terabytes, attached with some nvme drives in a raid config, capable of around 10M IOPS. 
        . Instance storage is around 100 to a 1000 times faster than the fasts EBS file, however, the EBS storage survives a reboot. 
        . Super high performance.                  

___

S3
    Accelerate

    ![](2022-04-17-18-16-46.png)

S3
    . Tied to S# BLock Public Access -> In conflicts, applies the most restrictive one.
