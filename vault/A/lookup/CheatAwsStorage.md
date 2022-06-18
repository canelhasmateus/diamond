# CheatAwsStorage

[[AWS]] Offers different volume types for [[ElasticBlockStorage]].

Be aware of necessary latency and throughput requirements when choosing them.

* Latency: defines how long ( ns ) to pull or store data from the hard drives. It is determined by the number of operations you can do per second. Higher Ops == Lower Latency.
* Throughput: Measures how much stuff you can move in a time interval.

|            | HDD    | On-Prem SSD | SC1 | GP2                          | ST1                                           | Provisioned |
|------------|--------|-------------|-----|------------------------------|-----------------------------------------------|-------------|
| #Hardware   | HDD    | [[SSD]]         |     | SSD                          | Hdd [[Raid]]                                      | [[NVME]]        |
| Latency    |        | 1M IOPS     |     | 16k                          |                                               | 64k         |
| Throughput | 180 MB | 560 MB      |     | 200 MB                       |                                               | 1000        |
| Uses       |        |             |     | Boot #Volumes, Dev/Test Envs. | [[Log]] Files, Sequential Reads Sequential Writes | [[Databases]]   |

> Storage #latency and #throughput are some of the #downsides of the #cloud. [[AWS]] fastest volume offers 64K IOPS, while a $100 Drive from best-buy can offer up to 1M IOPS.
