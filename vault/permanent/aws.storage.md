# Elastic Block Storage

EBS is a implementation of [[Block Storage]] , that is - it takes your data and breaks it down into blocks.
It is designed to act, look and feel like a virtual hard drive.
These can be attached and re-attached to different EC2 Instances.

When considering storage systems there are important aspects to consider

* Ephemerality: EBS Volumes don't go away with a reboot.
* Availability: 5 minutes of downtime per year.
* Scalability: EBS volumes scales to whatever size needed.
* Throughput: EBS is designed for high transactional workload
* Durability: Provides Redundancy in its availability region ( Replicated Intra-Zone).

* ( ? ... ) Throughput , Latency

By default, volumes are deleted on instance termination.
Although Volumes are NOT encrypted by default, this can be mitigated by using its encryption properties, as well as using native data encryption drivers at the file system level.

EBS Volumes can only be shared between ( up to 16 ) aws nitro system based ec2 within the SAME availability zone.

___

On SnapShots

These are Point in Time backup of the data inside the volume: 100% copies of the Hard-Drive.

Snapshots are very useful in cases of [[ Disaster Recovery ]], since they contain all of the necessary information to boot. Comparing with traditional tape backups, which require an OS installation before being able to recover, Snapshots can recover way more quickly.

An optimization to snapshots is that they are incremental , that is: Only the blocks that changed get saved - like git patches.

___

On Backup

It usually Happens in a predefined schedule every time. This process consume resources, and degrades performance while its being done, so it is done in certain downtime windows.

Amazon Data Lifecycle Manager can help with these backup schedules. Mind that there is a limit of 100 lifecycle policies per region. Policies are free and can reduce storage costs by deleting outdated backups.

By default , the entire database is automatically backed up in a EBS volume, and can be restored by launching a new instance out of your AMI snapshot image.

Encryption of these resources is a necessity and can be done at rest by using KMS to manage the keys, as well as Cloud HSM.
Encryption in transit is done by applying TLS during the traffic connection.

___

On Performance

Basic [[RAID]] Configurations can be setup for EBS.

* RAID 0: For when performance is more desirable than fault tolerance. Ideal for the ec2 instances are hosting databases
* RAID 1 : When Fault tolerance is a more desirable property. Since data is written to multiple volumes at a time, more bandwidth is required between Ec2 and ebs.

___

On Volume Types

AWS Offers different volume types for EBS. Be aware of necessary latency and throughput requirements when choosing them.

* Latency: defines how long ( ns ) to pull or store data from the hard drives.  It is determined by the number of operations you can do per second. Higher Ops == Lower Latency.
* Throughput: Measures how much stuff you can move in an time interval.
  
|            | HDD    | On-Prem SSD | SC1 | GP2                          | ST1                                           | Provisioned |
|------------|--------|-------------|-----|------------------------------|-----------------------------------------------|-------------|
| Hardware   | HDD    | SSD         |     | SSD                          | Hdd Raid                                      | NVME        |
| Latency    |        | 1M IOPS     |     | 16k                          |                                               | 64k         |
| Throughput | 180 MB | 560 MB      |     | 200 MB                       |                                               | 1000        |
| Uses       |        |             |     | Boot Volumes, Dev/Test Envs. | Log Files, Sequential Reads Sequential Writes | Databases   |

Obs: One downside of the cloud comes in regard to latency and throughput of storage. Consider that AWS fastest volume offers 64K IOPS, while a $100 Drive from best-buy can offer up to 1M IOPS.

This happens because EBS Volumes are not physically attached, which means that they get bottleneck-ed by the network.

___

Elastic File System

A network file system implementation of POSIX compatible storage. Scales on demand, and provides  Standard and Infrequent storage.

Only for Linux, but EFX can be used for Windows Based. This happens because Linux and WIndows uses different file sharing protocols ( NFS vs SMB).
For windows, use Linux with Samba Share

Block Storages are local to each instance, but can be shared.
If high performance is a requirement, use LustreFx.

(?...)Can work with S3.
. Set up a storage gateway ( a virtual machine ) , put in the data center. It copies stuff to the cloud.
EFS Encryption does not need the rule from the security group.

# References

<https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.html>

...
