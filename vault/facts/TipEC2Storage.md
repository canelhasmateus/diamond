---
kind: ramble
---

# TipEC2Storage

By itself, \[\[AwsEc2]] offers only the Instance Storage.
These are temporary \[\[BlockStorage]] that are saved on disks, directly attached to the instances. They are the *fastest storage* offering, but offer very *little durability*, being available only during the lifetime of instances - Saved between restarts but lost on Stop and Terminations. \[\[PatternTradeoff]]

The usual solution is to use attached \[\[AwsEbs]] volumes or \[\[AwsEfs]] in the case of Block Level Storage, and \[\[AwsS3]] buckets for object storage.
