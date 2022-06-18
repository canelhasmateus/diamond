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
