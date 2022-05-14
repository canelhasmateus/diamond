# Elastic Compute Cloud

Primary compute engine on the AWS Platform. It is a Virtual Machine, running on top of a Hypervisor. It runs an AMI - that is - a file that contains the necessary data to launch a virtual machine.

* These can be created, or prebuilt - either from AWS or from the marketplaces.
* Examples of use of marketplaces image are in the security stack: [[Firewalls]] and [[ VPN ]] concentrators.
* Can be copied Cross-Region, and are very useful in [[ Disaster Recover ]] scenarios.
* (?... )AMI
  Information Required to launch a instance
  How to unse?
  How to share it
  How to copy to diff regions
  How to register / encrypt

___

On Connectivity

Connectivity is provided to the instances in the form of [[ENI|Elastic Network Interfaces]]. These are virtual network cards, which are attached to instances. An instance can have multiple network interfaces, as long as each one is in a different subnet.

When going up , an instance gets an EC2-DNS name, a private CNAME that is attached to a certain network interface. To be available in the internet, it needs a public address. This can be achieved by means of [[Elastic IP Addresses]], which can be attached to the network interfaces.

___

On Storage

By itself, EC2 offers only the so called Instance Storage. THese are Temporary [[Block Storage]] that are saved on disks, directly attached to the instances. They are the fastest storage offering, but offer very little durability, being available only during the lifetime of instances - Saved between restarts and lost on Stop and Terminations.

The most usual solution is to use attached [[EBS]] volumes or [[EFS]] in the case of Block Level Storage, and S3 buckets for object storage.

___

On Security

EC2 offers different mechanisms to secure instances. [[Firewall]]s can be used, either using [[WAF]]  or the marketplace. The same can be said about [[ IDS]] and [[IPS]] systems (?? What is ids service offered by amazon?).  [[DDOS]] protection is also a common concern, which can be mitigated by [[AWS Shield]] and marketplace offerings.

As far as traffic goes, these can be configured by means of [[Access Control Lists]] in the routers. EC2 also support host based "firewalls", named [[Security Groups]].
Security Groups are stateful, which means that they somehow keep tabs about the traffic on their boundaries. A consequence of this is that they automatically allow traffic of responses from outgoing requests - there is no need to apply the security rule in both outgoing and incoming directions.

There are many ways of provisioning and managing these machines. These include [[ CloudFormation]] , the EC2 [[ Console ]], host-based [[SSH]] and [[RDP]], and the [[SDK API]].

___

On Configurations

There are various behaviors and attributes that can be configured on the instances.

* Startup Scripts: Its possible to create a Shell Bootstrap Script , to customize behaviors during boot.

* Tenancy: Can be shared or dedicated. In Shared Tenancy models, different people use the same underlying physical host. This doesn't happen for Dedicated Instances: These offer your own (aws-managed) hypervisor.

* [[Key Pairs]]: Each Ec2 instance can use a Public and Private key pair to secure access to instances logs and SSH connections.

* Placement Groups: In cases that connectivity between machines in very important, such as HPC. Its possible to create a placement group. These allow better control over the physical arrangement of machines.
Placing various instances on the same underlying host or rack allows for better connectivity and performance, at the cost of availability due to [[correlated failures]]. Spread groups are also available.
There are no limits to the number of instances in a placement group.

* Enclaves:  (? ... )

___

On Pricing Models

Various Types of instances are available for choosing. Examples are:

* On Demand : These are great for auto-scaling , since they can be added and removed anytime. They're the costliest of the bunch, so they should be used sparsely , only in the cases of Unknown Capacity or low-commitment.

* Spot : AWS always have lots of unused capacity. These overflowing resources are offered in an auction-like system at lower prices. Since these can be reclaimed by AWS at any moment, they shut down unpredictably, so don't use them for mission-critical workloads. Examples include Data Analysis, Batch Jobs and Background Processing Jobs

* Reserved : When the necessary capacity for the foreseeable future is known, it is very cost effective to use these instances. They allow you to pay an upfront cost and a term commitment for a large amount of discount. Examples of use are [[ Batch Jobs]] and [[Cron Jobs]]

* Dedicated Host: A dedicated physical server. Using these you're able to manage your own hypervisor. This is the barest metal offering: Very expensive, but offers fine grain controls. Examples of use include licensing models which require attachment to certain hosts.

An important realization is that these instance type commercial model is also available for other services. For example, Amazon [[RDS]] and [[Redshift]] is able to make use of Reserved Instances. Meanwhile, [[EMR]] can use both Reserved and Spot Instances.

...

To benefit from reserved rds instances, all of the attributes of the rds instances in another account shouldmatch the attributes of the reserved db instances.

( DBEngine, DB Instane class, Deployment Type, License Model )
___

On Instance Types

Besides deciding between on-demand, spot and reserved, other optimizations can be made in regards to the configuration of EC2 instances.

 Decide on the right instance type

 General Purpose
  .. Balance of compute, memory, network
  .. A1, T3, T2, M4, M5
  .. Some of these also support up to 25 gbps bandwith

 Compute Optmimized
  .. Batch Processing, High Performance, media transcoding, and gaming
  .. C4 and C5

 Memory Optimized
  .. Process large data sets
  .. High Performance databases, in-memory cache, real time big data analystics
  .. R4, R5, X1
 Accelerated Computing
  .. Applications that need hardware accelerators
  >.. Ideal for  ML and Dl, or HPC
  .. P2, P3, G3, G4

 Storage Optmimized
  .. High, sequenctial read, and write access to large data sets on local storages
  .. Good for inmemory and NoSql databases
  .. I3, D2, H1

___

# Abstractions

There exists several abstractions on top of Ec2 Instances.  These include [[ECS]] , [[EKS]], [[EBS]], [[EMR]], [[AWS Batch]].

___

On ECS

* Elastic Container Service
* Deployed inside your vpc
 .. Can be used alongside eSecurity Group and Network ACL
. Shared state, optimistic ocncurrency system
.  When launched with the fargate launch type, has its own isolation boundary and does share kernel and resources.

___

On EKS
    . Elastic Kubernetes Service
    . Managed Service

___

On Fargate

. Servierless compute engine for containers
. Works with both ECS and EKS

___

On Elastic Beanstalk

Quickly Deploy and manage applications
Lower complexity involved in creating and managing the environment
Supports [[Blue Green]] deployments:

* Create two different environments and use the "Swap Environments" Feature, which swaps the [[CNAME]] of the two environments, redirecting traffic.

?? Elastic beanstalk web vs worker environment

...

___

On EMR

Amazon Map Reduce is a important component of the AWS [[ Data Science]] stack.

It is used to process large amounts of data, for analysis and [[decision making]].

    . Managed Cluster, part of your big data framework

Creates a managed cluster to run big data frameworks. Examples are:

* Core [[Hadoop]]
* [[Hbase]]
* [[Presto]]
* [[Spark]]

It is built on top of [[Hive]], [[Hbase]], [[Spark]]
Uses [[ S3 ]] to store Data, Input and Output.
Supports Monitoring of the operation by means of [[ Cloudwatch]].

___

On Batch

AWS Batch is another component of the AWS [[Data Science]] stack.

Runs Batch computing workloads. These can be be Shell scripts, Linux executables or Docker container images.

# References

EMR for dynamo and s3:

<https://aws.amazon.com/articles/using-dynamodb-with-amazon-elastic-mapreduce/?tag=articles%23keywords%23elastic-mapreduce>

<https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html>
