# ElasticBlockStorage

EBS is an implementation of [[StorageBlock]], that is - it takes your data and breaks it down into blocks.

When considering [[Storage]] systems there are important aspects to consider

- Ephemerality: EBS Volumes don't go away with a reboot.
- Availability: 5 minutes of downtime per year.
- Scalability: EBS volumes scale to whatever size is needed.
- Throughput: EBS is designed for high transactional workload
- Durability: Provides Redundancy in its [[AvailabilityRegion]] ( Replicated Intra-Zone).
- Throughput:
- Latency:

Properties

- It is designed to act, look and feel like a virtual [[StorageHardDrive]].

- These can be attached and re-attached to different [[AwsEc2]] Instances.

- Volumes **ARE** deleted on instance termination by default.

- volumes **ARE NOT** encrypted by default,
  This can be done by using its encryption properties, as well as using native data encryption drivers at the file system level.

- Volumes **ARE NOT** physically attached
  Their latency and throughput are bottlenecked by the network.

- **CAN** be shared between up to 16 [[IndexAws]] nitro system based EC2 within the SAME availability zone.

___

On SnapShots

These are Point in Time backup of the data inside the volume: 100% copies of the Hard-Drive.

Snapshots are very useful in cases of [[DisasterRecovery]], since they contain all of the necessary information to boot. Comparing with traditional tape backups, which require an OS installation before being able to recover, Snapshots can recover way more quickly.

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

Basic [[RAID]] Configurations can be set up for EBS.

- RAID0: For when performance is more desirable than fault tolerance. Ideal for the ec2 instances are hosting databases
- RAID1: When Fault tolerance is a more desirable property. Since data is written to multiple volumes at a time, more bandwidth is required between Ec2 and ebs.
