What Are Datastreams

Service used to collect and process large streams of data records in real time
use this to build systems that can send and consume data in real time.
You can have a continuous stream of data inflow into Amazon Kinesis Data Streams. Data could include application logs, social media, web clickstream data
You can then have consumers that can take this data and process them in real time

Can not persist data. Maximum retention period is 7 days.

Data Streams

Delivery Streams ( Firehose )
Analytics Application
Video Streams

How to use Datastreams

> > > KINESIS vs Kafka

aMAZON kINESIS dATA fIREHOSE

This is a fully managed ervice that can be used to deliver real time streaming data to destinations suchg as amaozn s3, amazon redshit, elastic search service and splunk

Use to persist Data Ingested from the DataStreams into persistence providers.

Can create Transformation / Converting steps to transform during the streaming.

...

Amazon Kinesis can route related records to the same record processor;
Also has ordering of records.
Ability for multiple aplications to consume the same stream concurrently
7 day durability

...

...

Kinesis agent continuously monitors a set of files and sends new data yo your stream; Also emits Amazon CloudWatch metrics.

...

Kinesis
. Real Time Analysis
. Video, Audio, Internet log, ClickStream, IoT
. Pay for the amount of throughput.
. Video Stream
.. Collect video from multiple sources
.. Ingest and store and send to media process ( converting , captchioning , ML analysis)
. Data Streams
.. Higly Scalable platform to analyze huge amounts of data
.. 70 ms
.. Can capture Gb of data from various sources
.. Location Tracking, Financial Transactions
.. Data Consumer
... Receives data from the shards

```
    .. Data Producer
        ... Sends Data to the stream
        ... Weather Sensors
        ... Assigned a key, which determines the destination shard
    .. Logical Grouping of shards
        ... A shard is a basic throughput unit
. Data FireHose
    .. Managed service, Similar to streams
    .. Streams your data into storage ( S3, redshift , )
     

. Data Analytics
    .. Real Time  Analytics
    .. Apache Flink   
```

#
