HIve

    Query Interface to hadoop ( HDFS)
        . Query ENgine
        . Metastore


    With time, other technologies dismantled there

    HDFS -> Object Storage ( AWS S3)
    Map Reduce -> Spark 
    Yarn -> Kubernetes
    Query Engine -> Presto / Trino

When saving new data, we register it into hive metastore
    . Maps a set of objects in the objsect store to a table exposed by hive
        .. Schema of the table held in the file, with metadata
    . Leads to
        .. Virtualization
        When using sql, not interested in the detail of object stora.

        .. Discoverability
        Becomes a catalog of all the collections held in object storage 
        Can also add supplemental: Update frequency, owners
        .. Schema Evolution
        Mutability is a challenge of managing data sets ; 
            Records may change over time with respect to the existing columns describing their attributes 
            The set attributes itself changes, resulting in a change to the schema
        


        .. Performance
            . Parition prunning? 

POssible replacements
    . Difficult to install and maintain
    . Not architected cloud-native, complicating managed service implementations
    . Scalability 5restrictions from relational db relianceow
    . No direct, but  . .. | specially because the metastore is a general interface supported by all applications.

Open Table Formats
    . Iceberg
        efficiency in large tables
    . Hudi
        mutability
    . delta lkae
        mutability
        schema enforcement and evolution

Data Catalogs
    Many open source discovery tools
        acryl
        data portal
        amundsen
        apache atlas
        atlan
        azure purview
        castordoc
        collibra
        data galaxy
        data world
        databricks unity catalog
        datahub
        facebook nemo
        google data catalog
        metaphor
        netflix metacat
        secode
        select start
        shopify artifact
        spotryify lexicon
        stemma
        uber databook
        zeenea
Observability
    monitoring the quality of the data pipelines oeprationally, or the data itself
        . Databand

        . great expectations
        . monte carlo ( https://www.montecarlodata.com/ )

___

Windowing Model

 Splits dataset into smaller groups for processing
 Unbounded Data:
  Windowind is required for some operations like aggreation , outer joins, and time-bounded operations
 Bounded Data:
  Optional

 Windowing is time based over a logical time domain
  Elements have
 Aligned or unaligned:
  ???

 Kinds:

  Fixed Windows:
   Static window size ( hourly, daily )
   Also called Tumbling Windows
  Sliding Windows
   Defined by a window size and slide period ( hourly windows stating every minute )
  Sessions:
   Windows that capture some period of acitvity over a subset of the data, in this case per key

Triggering Model
Incremental Model
Stateful Model
Scalable
Portable

Event Time vs Processing Time

 Triggers
 Mechanism for stimulating the production of resultsi n respoinse to internal or external signals
 Provide a way to control how multiple panes for the same window relate to each other, bua three modes:
  Discarding
   Window contents are discarded, and later results bear no results to previous results
  Accumulating
   Windows contets are left intact in persistent state, and later results become a refined of previous results
  Accumulating and Rectracting
   In adiction to acumulating, a copy of the emitted value is also stored in persistent state

 Complementary to the windowing model
  Windowing determines where in event time data are grouped together for processing
  Triggering determines when in processing time the ersults of groupings are emitted as panes.

Stateful Model

 Operations like transform are stateful
 THe staete is partitioned by key and per window

PipeLine Questions
 What results are being computed
 Where in event time they are being computed
 When in processing time they are materialized
 How earlier results relate to later refinements

Runners

 The beam pipeline runners translate the data processing pipeline
 Need to specify an appropriate runner for the back-end where you want to execture your pipeline

 Individual capabilities are grouped by their corresponding what / where when how question

 Capability Matrix

Runner Matrix

 What

  ParDo
  GroupBYKey
  Flatten
  Combine
  Composite Transforms
  Side Inputs
  Source API
  Splittable DoFn ( SDF )
  Metrics
  Stateful Processing

 Where ( in event time )

  Global  Windowsw
  Fixed Windows
  Slideing WIndows
  Session WIndows
  Custom WIndows
  Custom mergin windows
  Timestamp control

 When ( in processing time )

  Configurable triggering
  Event-time triggers
  processing time triggers
  count triggers
  [Meta]data drive triggers
  composite triggers
  allowed lateness
  Timers

 How ( do definements fo result relate )

  Discarding
  Accumulating
  Accumulating & Retracting

Competing Architectures

 Lambda
  Good for batch , but poses problems for event data
  Hybrid Layers
   Batch
    Large Scale Analytics or Historical Data
   Speed
    Low Latency Processing of newly arrived data
    Can also be seen as approximate results
   Serving
    Provide Query capabilities that unifies the Batch and Speed layers.

 Kappa
  Modified architecture where everything is seen as a stream
  Most popular among these engine are all open-source apache projects:

   Apex
   Beam
   Flink
   Storm
   Spark

Steps

 Design
  Plan the pipeline strucyture
  choose transform to apply
  Determine input and output methods
 Create
  Use the classes in the Beam SDK
 Test
  Test to minimize debugging a pipeline remote execution
 Deploy
  Use one of the supported Runners

Why beam

 Unified batch and streaming
 Layered Abstraction
 Runner portability
 Stateful Processing
 GCP integration

Programming Model

 PCollections
 Transforms
 Pipeline I/O
 Data Encoding
 Windowing
 Triggers
 Metrics
___

Data Analytics

 Define
 Interpret
 Clean and Transform
 Enhance
 Analyze
 Visualize

  - - Repeat - -

Determnine the operational characteristics of the collection system
 Streaming operational compoenents
  Kinesis Data Streams
   . Ec2
   . Kinesis Data Analytics
   . Lambda

    .. Quick Sight

 Fault tolerance and data persistence
   . Kinesis Producer Library

   . Kinesis Consumer Library

Select a collection system that handles the frequency, volume and source of data
 Batch,  Streaming and transactional

 Compaare data collection sysmtem

Select a collection system that addresses the key properties of data, such as order, format and compression.
 Order,  Duplication

 Transform
 Filtering

 Fault tolerance and data persistence
   . Kinesis Producer Library

    Retries: Can send a group of multiple recrods in each request
     . If a record fails, its put cback into the kpl buffer for a retry
     . One record failure doesn't fail a whole set of recrods
     . Also has rate limit
       Limits per-shard throughput sent from a single producer, helps with excessive retries.

    . Kinesis Data Stream
     . Replicates data synchronously across three az in one region
     . Don't use for protracted data persistence
     . Data is retained by 24 hours ( can extend to 7 days )

    Firehose streams your data directly to a data destination
     . Data flows through it directly to its destinations
     . No persistence
     . S3 Redshift, elastic search, splunk, kinesis data analystics
     . Can transform your data, using a lambda function, prior to delivering the data.

   . Kinesis Consumer Library
    Retrieves Records from the stream
    Uses Checkpoint ( through DynamoDB ) to track which records have been read from a shar
    If a read fails, the consumer uses this checkpoinnt to resume at the failed record
     Need Unique names for your applications in the kcl, since dynamodb tables use name
     Watch out for provisioning throughput exception in dynamodb.
      Many shard, or frequent checkpointing

   Alternatives
    Kinesis API
     . Fastest Processing time
      . KPL use a seeting ( RecordMaxBufferedTime ) to delay processing to accomodate aggregation

    Kinesis Agent
     . Installs on the ec2 instances
     . Monitors files, such as log files, and streams new data to your kinesis stream
     . Emits CloudWatch metrics to help with  motnitoring and error handling

 The characteristics of your data streaming workload guide you in the seelction of your streaming components
 The two key components to remember:
  Fault Tolerance
  Data Persistence
 Kinesis Data Stream vs Kinesis Data Firehose
  . Up to 7 days Persistence vs No Persistence
 Kinesis Producer LIbrary vs Kinesis API
  . Fault tolerance and approapriate tool for your data collection problem

---

For Kinesis Firehose

 When sending to Redshift  , it delivers first for S3, and then redshift does a copy command

 ElasticSearch
  Can backup to S3 concurrently

 Splunk
  Can backup to S3 concurrently

4 Ingestious Services

 Kinesis Data Streams
  Needing custom processing and different stream processing frameweords where sub-second processing latency is needed

 Kinesis Data Firehose
  Managed Service Streaming to S3, RedShift, Elasticsearch, or splunk, where data latency of 60 seconds or higher is acceptable

 AWS Database Migration Service

  One-time migration and / or continuous replication of database records adn dsturctures to aws services

 AWWS GLue

  ETL Batch-oriented jobs where scheduling of ETL jobs is required
  Uses Apache Spark when loading data to destination
  Allocate Data Processing Units to ETL jobs

3 Types of Data

 Batch
  Examples
   Application logs
   Video files
   Audio FIles

  Larger Event payloads ingested an hourly, daily, or weekly basis
  Ingested in interval from aggregated data

  Data is usually colder, and can be processed on less frequent intervals
  Use Aws Batch oriented services like
   Glue
   EMR
  Latency is minutes to hours
  Complex analysis across big datasets

 Streaming
  Example
   Click-Stream
   IOT
   StockTicker
  Large Amounts of small records continuosly and in real-time
  Continuosly ingested from live events
  Often bounded by time or event sets in oreder to produce real-time outcomes

  Usually hot, arriving in high frequency
   Individual Records or aggreagated micro-batches

  Usually using Data Stream, Firehose , Kinesis analytics
  Can load into data lake or data warehouse
  Latency is milliseconds
  Simples analytics
   Rolling Metrics
   Aggregations

 Transactional
  Initially load and receive continous update from data stores used as operational business databases
  Similar to batch data but with a cotinuous update flow

  Data stored at low latency and quickly accessible
  Usually when we want to migrate environment

   Load data from a database on-prem or in aws
   Use DMS
   Can load data from relational databases data wareghouyses and nosql databases
   can convert to different database systems using the aws schema conversion tool ( AWS SCT )    then use  DMS to migrate your data

AWS Glue

 Aws glue
  Crawls a datastore
   S3
   JDBC
   DynamoDB

  builds a data catalog

  create a transformation script that extracts from a datasource, and load it into a different s3

  There are a lot of encryption settings

  You can't use a nosql database as a datasource for the transformation job, but you can use dynamodb as a datastore for the crawler
            DataStore ( Crawl ) vs DataSource ( Transformation )

        DataStores are
            S3
            Dynamo
            JDBC

        S3 contains 
            Exclude Patterns

  Use prefix to add tables to the s3 bucket
  group s3 data
   ( group compatible schemas into a single table definition accross all s3 objects under the provided include path )
  A single

        A crawler Needs an IAM role
            It has permission to access the datastore ( S3, Dynamo )
        
        Frequency
   Many options ( Including custom )
  
  Configuration options
   When the crawler detects schema changes in the data store, how should glue handle table updates in the data catalog?
    Add new columns only
    Update the datable def in the catalog
    Ingore the change
    Update all new and existing partitioin with metadata from the table
  
   How shoul daws glue handle deleted objects in the data store?
    Delete tables and partition from the data catalog
    ignore the change and don't update the table in the data catalog
    mark the  table as deprecated in the data catalog

 Run the crawler
  Populates the data catalog

 Glue Transformation Job
  Name

  IAM Role
   Needs access to  
    . DataSource
    . Targets
    . Temporary directorty
    . Scripts
    . Libraries used during

  Type
   Spark
   Spark Streaming
   Python Shell

  Glue Version
   Pick (Spark | Python) Version
  
  Runs:
   A proposed sript generated byt aws glue
   An existing script that you provide
   A new script to be authrored by you
  
  Script File Name
   S3 Path where the Script is stored
   Temporary directory
  
  Advanced properties
   Bookmarks
    ( Checkpointing for failures)
   Monitoring
    Job Metrics
    Continuous Loggings
    Spark UI
  
  Security Configuration
   Server side Encryption
  
  Worker Type:
   Standard
   G.1X ( Memory Intensive )
   G.2X ( ML Transform )
  
  Maximum Capacity  ( DPU )
  Max Concurrency
  Timeout
  Notification after Delay ( Minutes )
  Retries
  Parameters

  Use Glue data catalog as the Hive Metastore

 Transform Type
  Change schema
  Find Matching Records ( ML Transform )
   Remove Dupes
 Target
  Create tables in your data Target
  Use tables in the data tcatalog and update your data target

  Data store
   JDBC | S3
  Format
   JSON
   CSV
   Avro
   Parquet
   ORC
  Compression
   GZIP
   BZIP

Comparing Data Collection systems
 Understand how each ingestion approach is best used

 Use Cases
  Data Streams:
   Use when you need custom producers and consumers
   that reqiuire sub-second processing
   that require unlimited bandwidth
  FireHose:
   Deliver Directly
    S3, Redshift, openSearch, splunk
   Can tolerate 60 seconds or greater of latency
   Transform or convert the data format
   At Least once delivery semantics

  Database Migration Service
   when you need to migrate data from one database to another
   need to migrate a database to a different database engine
  
  Glue
   Batch Oriented cases where you need to perform an Extract Load Process
  
 Throughput, Bandwidth and Scalability
  
  Data Streams:
   Each shard can handle up to 1000 put records per second
    . Or 1 MB / S for input or 2 MB / S for output
   Can increase the number of shards in a steram without limit
  FireHose
   Automatically Scales to accomodate the throughtput of your Stream
  Database Migreation Service
   EC2 Instances used for the replication Instance
   You need to scale your replication instance to accomodate your throughput
  Glue
   Runs in a scale out apache spark environment to move data to target system
   Scales via DataProcessingUnits ( DPUS )
  
 Availability and fault tolerance
  Data Streams:
   synchronously replicates shard data across 3 az
  Firehose
   synchronously replicates shard data across 3 Az. Different Behaviour for each target
    For S3 target, retries 24H for retries, after that, your data is lost
    For reshift and OpenSearch you can specify a retry duration from 0 to 7200s
    For Splunk use a retry duration. After that, backs data up to S3
   Retries may cause duplication
  DMS
   Can use Multi-AZ for replication that gives fault tolerance
  Glue
   Retries 3 times before marking an error condition
   Create a cloudwatch alert for failures that triggers an SNS message
  
 Delivery Frequency
  
  Data Streams:
   Depends on the Buffer Size and buffer interval configured in the streams
  FireHose:
   Differs for each destination

   S3
    Depends on the Buffer Size and buffer interval configured in the streams
   RedShift
    Depends on how fast the cluster can do the copy command.
   OpenSearch
    Depends on the Buffer Size and buffer interval configured in the streams
   Splunk
    Buffers - 5Mb or 60 seconds.

 Cost
  Data Streams
   Extended data retention and enhanced fanout incur additional costs
   Pay per shard hour and PUT payload unit
     ShardHour ( US WEST )
      $ 0.015
     Payload Unit ( 1 Million , 25KB )
      $ 0.014
     Enhanced FanOUt ( Per GB )
      $ 0.013
     Enhanced FanOUt ( Per Consumer-Shard-Hour )
      $ 0.015
     Extended Data Retention ( per Shard Hour )
      $ 0.02

  FireHose
   Pay for the volume of data ingested
   Pay for data conversion

    Data Ingested First 500 TB / Month 
     $ 0.029
    Data Format Conversion, per GB 
     $ 0.018
    Per GB processed to VPC 
     $ 0.01
    Per Hour, per AZ for VPC delivery
     $ 0.01
  DMS
   Pay for ec2 instances
   Pay for Storage
   Pay for data Transfer
  Glue
   Pay an hourly rate  for dpu
   Monthly for storing and accesing data in your glue data catalog

    DPU Hour:
     $0.44 per DPU hour, billed per second, with a x-minute minimum
    
    Data Catalog
     Free for first 1 million
     $1.00 per 100k objects
    Requests
     Free for first 1 Million
     $1.00 per 1M request
    Crawlers
     $0.44 per DPU-hour, billed per second, with a 10 minute minimum per run

Managing Data Order, Format and Compression

 Problems:
  Data that is out of order
  Data that is duplicated
  Data that we need to change the format
  Data that need to be compressed
  Unwanted Format

 Methods:
  Use ingetion services that has guaranteed ordering
   Kinesis Data Streams
   DynamoDb Streams

  Use ingetion services that has guaranteed no dupes
   DynamoDB Streams
   ! Data Streams can dupe. To cope with that you can
    Embed a primary key in data records and remove duplicates later when processing
   ! Firehose can dupe. To cope with that you can
    Crawl target data with glueML FindMatches Transform

  Use conversion feature of ingestion service
   For Kinesis DataStreams:

    . Can use a Lambda Consumer to format or Compress
    . Can use a KCL application 
   For Knesis Firehose
    . Can use conversion feature if data in json
    . Use Lambda transform to preprocess format conversion feature if data not json

  Use compression feature of ingestion service
   . Use S3 compression
    GZIP
    Snappy
    ZIP
   . Use GZip COPy Redshift compression
  
  Transformation
   Lambda Functions
   Database Migration Service
    Has its owns transformations

Examples:
  
  Producer ( KCL )
   |> Kinesis Data Streams
    |> Firehose
     |> S3 ( GZIP Compression )

___

Big data
<https://www.youtube.com/watch?v=VYLWyS8UNm8>

Logging and metrics tools

    . Difficult to feel the system 
    Best Practices
        Operations room 
        dashboards - aggregate information highlighting
    
                                                Metrics / Monitorings : Dashboards alers
    systems > log aggregation & analytics engine =<
                                                Incident response: log serrch, drilldown 

dimensions in tool space
    Logs vs Metrics
        . Logs are events - metrics are aggregates
        . Logs have high dimensionality - metrics have low dimensionality
        . Logs tend to be unstructured - Metrics are structured
        . Logs support drill-down analysis - Metrics Leans towards dashboards and alerts
        . Logs will vary in volume - metrics have a fixed volume rate
        . Logs tend to be high volume - metrics tend to be low volme

    Historic vs real-time
        . Historic is good for incident response and audits ; real time are good for alerts and dashboards
        . Historic allows to uncover unknown issues; real-time are for known issues ;
        . historic requires disk ; real-time requires cpu 
        
    cloud vs on-prem
        cloud may bhave privacyu and security concerns
        cloud can pay as you go - on prem requires dedicated hardware ( operational vs capital expenses )
        cloud doesn't need to manage. .. .
    
    schema vs ad-hoc
        schema-based systems addresses knwon issues to look ou for ; adhoc enables to dig into new unkown issues
        schema <> index, but they often go hand in hand
            . trade offs between effort on write or effort on read. 

Log analytics sweet spot
    record everything
    generate metrics from the logs in real time
    interactive / ad-hoc search on historic data
    _can_ be installed on-premises
    affordable

product team practtices

    Monitors with graphs 
        . Gives a sense of normality
        
    Be the customer 
        => DogFooding

    Safe Environment
        TAkes all kinds of peoples
        . "I'm not a good finisher"

    Be in doubt
        . Discuss trade offs - not do's and don'ts
        . Leave time to wonder
        . No one knows "what's best"
    High BUS factor
        . We depend on people ;
        . Don't try to make them replaceable
        . Everyone is responsible
    
    Take small steps
        . Running a saas with frequent deployments teaches you to take small steps
        . define design goals and dicuss tradeoffs. 
        . avoid long-running side-projects . feature-flag new work. 
    Manage critical dependencies
        . Own all critical components
        . tempting to pull in 200+ apache libraries
    
    Don't waste hardware
        . The most amazing achievement of the computer software industry is its continuin cancellation of the steady and staggering gains made by the computer hardware industry

careful engineering - data processing engine

    Events pass through either two paths 

    State Machine 
        .  "The query gets compiled into a state machine that is then fed the events"


    Event Store 

Aggregates

| Function | State | Step | Merge | Result  |
count | n | n + 1 | n1 + n2 | n
sum | ( n , s) | ( n+1 , s + value ) | ( n1 + n2 , s1 + s2) | s/n
stddev ( n , s , q ) | ( n  + 1 , s + value , q + value^2 ) | ( n1 + n2 , s1 + s2 , q1 + q2) | ( sqrt( n*q - s^2 ) / n )

> ring buffers

Event store : Fast filters
    . "Build minimal index and compress data"
        .. Can hold it in memory

Fast grep for filtering events

Start-time, end-time, metadata

____

<https://towardsdatascience.com/data-analysts-primer-to-slowly-changing-dimensions-d087c8327e08>

Slowly changing dimensions

Data warehouusing concept
Type 0 : Never Changes
Type 1 : Only the latest snapshot is recorded, without historical records
Type 2 : Entire Change history is recorded, through adding rows
Type 3 : Changes are recorded through adding column ( Rare )
Type 4 : Current record and history are in separated tables ( )


___


<https://www.youtube.com/watch?v=_UiWGP2lj8Y>

data warehouse - Kimball
loss: tight coupling microservices and bi / ml models

DA impact

Data Modeling
    . Less chaos and more 'central' datasets that decouple backend architecture from BA/DS/MLE
Data CLarity
    . Source of Truth
    . Documentation
Tackling the data gap
    . Through DA squads have support to solve their data challenge


___

airflow
argo
mlflow
kubeflow
logstash / vetur


___


Workflow management/orchestration: Airflow, Luigi, NiFi
Spark/EMR/Synapse/BigQuery 
Stream processing: Kafka, Flink (?), Azure Event Hub, Kinesis
Service/message bus: Amazon SQS, Azure Service Bus, GCP Pub/Sub

apache beam 
dataflow
ray
prefect
argo
dask
Mesos
Druid
spinnaker

minIo -> Bootleg s3
databricks


___



<https: //www.startdataengineering.com/post/writing-memory-efficient-dps-in-python/>

One of the most sought-after skills in data engineering is the ability to design and build data warehouses.

- WHat EXACTLY is a data warehouse?
  
hadoop
spark
kafka

<https://medium.com/@rchang/a-beginners-guide-to-data-engineering-part-i-4227c5c457d7>
<https://bytepawn.com/luigi-airflow-pinball.html>

Add Data Checks Early and Often: When processing data, it is useful to write data into a staging table, check the data quality, and only then exchange the staging table with the final production table. At Airbnb, we call this the stage-check-exchange paradigm. Checks in this 3-step paradigm are important defensive mechanisms — they can be simple checks such as counting if the total number of records is greater than 0 or something as complex as an anomaly detection system that checks for unseen categories or outliers.

JInja Templating

the right tool.

| Requirement | Questions to ask | Usual choices |
| :-- | --- | --- |
| **`Real-time or Batch`** | Do you need data processed continuously or on a schedule (usually with frequency > 10m)?. | {Batch, Stream} |
| **`Data size`** | What is the size of data to be processed per run? | {**Batch**: {MB, GB, TB, PB}, **Stream**: {records per second \* size per record}} |
| **`Pipeline frequency`** | How frequently do you want the pipeline to run? This typically applies to batch pipelines. | {minutes, hours, days, months} |
| **`Data processing speed`** | How quickly do you want the data to be processed? This should be lower than the `pipeline frequency` to prevent clogging your compute resources. | {seconds, minutes, hours} |
| **`Latency requirements`** | What is an acceptable wait time for an end-user querying your destination system? Typically measured using mean & 95th percentile values. | {5ms, 1s, 10s, 1min, 10min, 30min} |
| **`Query patterns`** | What types of queries will be run by the end-user? | {analytical, full text search, NoSQL, transactional, graph-based, combination} |

## 3\. Components

With the requirements defined, you can design the data pipeline. Identify the components that make up your data pipeline.

| Component | Responsibility | Examples |
| :-- | --- | --- |
| **`Scheduler`** | Starting data pipelines at their scheduled frequency. | Airflow scheduler, cron, dbt cloud, etc |
| **`Executor`** | Running the data processing code. The executor can also call out other services to process the data. | python, data warehouse, Spark, k8s, dbt, etc |
| **`Orchestrator`** | Ensuring that the data pipeline tasks are executed in the right order, retrying on failures, storing metadata, and displaying progress via UI. | Airflow, Prefect, Dagster, dbt |
| **`Source`** | System where data is to be read from. | OLTP databases, cloud storage, SFTP/FTP servers, REST APIs, etc |
| **`Destination`** | Making data available for the end-user. | data warehouses, Elastic search, NoSQL, CSV files, etc |
| **`Visualization/BI tool`** | Enabling business users to look at data patterns and build shareable dashboards. | Looker, Tableau, Apache Superset, Metabase, etc |
| **`Queue`** | Accepting continuously incoming data (aka streaming) and making it available for the consuming system to read from. | Kafka, Pulsar, AWS Kinesis, Nats, RabbitMQ, etc |
| **`Event triggers`** | Triggering an action in response to a defined event occurring. | AWS lambda triggers, Watchdog, etc |
| **`Monitoring & Alerting`** | Continuously monitoring data pipelines and alerting in case of breakage or delay. | Datadog, Newrelic, Grafana, |
| **`Data quality check`** | Checking if data confines to your expectations. | custom scripts checking for data constraints & business rules, Great expectations, dbt tests, etc |

Dec 12, 2021 · 7 min read

- [1\. Introduction](https://www.startdataengineering.com/post/choose-tools-dp/#1-introduction)
- [2\. Requirements](https://www.startdataengineering.com/post/choose-tools-dp/#2-requirements)
- [3\. Components](https://www.startdataengineering.com/post/choose-tools-dp/#3-components)
- [4\. Choosing tools](https://www.startdataengineering.com/post/choose-tools-dp/#4-choosing-tools)
  - [4.1 Requirement x Component framework](https://www.startdataengineering.com/post/choose-tools-dp/#41-requirement-x-component-framework)
  - [4.2 Filters](https://www.startdataengineering.com/post/choose-tools-dp/#42-filters)
- [5\. Conclusion](https://www.startdataengineering.com/post/choose-tools-dp/#5-conclusion)
- [6\. Further reading](https://www.startdataengineering.com/post/choose-tools-dp/#6-further-reading)

## 1\. Introduction

If you are building data pipelines from the ground up, the number of available data engineering tools to choose from can be overwhelming. If you are thinking

> Most of the tools seem to be doing the same/similar thing, which one should I choose?
>
> How to choose the right tool for my data pipeline?

Then this post is for you. In this post, we go over the core components of data pipelines and how you can use your requirements to select the right tools.

We will go over

1. Gathering **requirements**
2. Identifying **components** of your data pipeline
3. **Shortlisting tools**
4. **Filtering tool choices** based on your use case

**Note:** In this post we use the term `tool` to denote programming language, library, framework, SAAS, cloud resource.

## 2\. Requirements

Understanding the requirements of data pipelines helps in designing your data pipeline and choosing the right tool.

| Requirement | Questions to ask | Usual choices |
| --- | --- | --- |
| **`Real-time or Batch`** | Do you need data processed continuously or on a schedule (usually with frequency > 10m)?. | {Batch, Stream} |
| **`Data size`** | What is the size of data to be processed per run? | {**Batch**: f{MB, GB, TB, PB}, **Stream**: {records per second \* size per record}} |
| **`Pipeline frequency`** | How frequently do you want the pipeline to run? This typically applies to batch pipelines. | {minutes, hours, days, months} |
| **`Data processing speed`** | How quickly do you want the data to be processed? This should be lower than the `pipeline frequency` to prevent clogging your compute resources. | {seconds, minutes, hours} |
| **`Latency requirements`** | What is an acceptable wait time for an end-user querying your destination system? Typically measured using mean & 95th percentile values. | {5ms, 1s, 10s, 1min, 10min, 30min} |
| **`Query patterns`** | What types of queries will be run by the end-user? | {analytical, full text search, NoSQL, transactional, graph-based, combination} |

## 3\. Components

With the requirements defined, you can design the data pipeline. Identify the components that make up your data pipeline.

| Component | Responsibility | Examples |
| --- | --- | --- |
| **`Scheduler`** | Starting data pipelines at their scheduled frequency. | Airflow scheduler, cron, dbt cloud, etc |
| **`Executor`** | Running the data processing code. The executor can also call out other services to process the data. | python, data warehouse, Spark, k8s, dbt, etc |
| **`Orchestrator`** | Ensuring that the data pipeline tasks are executed in the right order, retrying on failures, storing metadata, and displaying progress via UI. | Airflow, Prefect, Dagster, dbt |
| **`Source`** | System where data is to be read from. | OLTP databases, cloud storage, SFTP/FTP servers, REST APIs, etc |
| **`Destination`** | Making data available for the end-user. | data warehouses, Elastic search, NoSQL, CSV files, etc |
| **`Visualization/BI tool`** | Enabling business users to look at data patterns and build shareable dashboards. | Looker, Tableau, Apache Superset, Metabase, etc |
| **`Queue`** | Accepting continuously incoming data (aka streaming) and making it available for the consuming system to read from. | Kafka, Pulsar, AWS Kinesis, Nats, RabbitMQ, etc |
| **`Event triggers`** | Triggering an action in response to a defined event occurring. | AWS lambda triggers, Watchdog, etc |
| **`Monitoring & Alerting`** | Continuously monitoring data pipelines and alerting in case of breakage or delay. | Datadog, Newrelic, Grafana, |
| **`Data quality check`** | Checking if data confines to your expectations. | custom scripts checking for data constraints & business rules, Great expectations, dbt tests, etc |

After collecting requirements and identifying the components of your data pipeline you can use the below framework to identify tools that might be a good fit.

### 4.1 Requirement x Component framework

This involves creating a table with a list of all your components and requirements (as rows and columns) and filling them out with tools that can satisfy the requirement.

**E.g.** Let’s consider a data pipeline, where you pull data from 2 databases, join them and make them available for the end-user. The end-user usually joins this data with a large fact table that is in the data warehouse. The data should be made available every hour.

![Data Pipeline](https://www.startdataengineering.com/images/choose-tools/dp.png)

Let’s note down the components and note down some tools that can potentially meet our requirements.

| Requirement | Source | Orchestrator | Scheduler | Executor | Destination | Monitor & Alert |
| --- | --- | --- | --- | --- | --- | --- |
| Batch w Pipeline Frequency: 1h | \- | Airflow (MWAA, Astronomer, Cloud composer), dbt, Dagster, Prefect, custom python | Airflow, dbt cloud, Databricks scheduler, Dagster, Prefect, cron | \- | \- | custom alerts, Datadog, newrelic, AWS cloudwatch, |
| Data Size: 10GB | \- | \- | \- | Python, Airflow worker, k8s pod, Spark, Snowflake, Redshift, Dask, Databricks, AWS EMR, | \- | papertrail, datadog, newrelic |
| Data processing speed: <=10m | \- | \- | \- | Python, Airflow operator, k8s pod, Spark, Snowflake, Redshift, Databricks, AWS EMR, | \- | papertrail, datadog, newrelic |
| Query pattern: Analytical | \- | \- | \- | \- | Data warehouse, Redshift, Snowflake, Bigquery, Clickhouse, Delta lake, | Alerts on query failures |
| Latency req: 10s | \- | \- | \- | \- | Data warehouse, Redshift, Snowflake, Bigquery, Clickhouse, Delta lake, | Alerts on query timeouts |

We now have a list of tools that we can use to build the data pipeline.

### 4.2 Filters

With so many tools, filtering is essential to eliminate tools that are not a good fit. Shown below are some common constraints that you might have, use these to eliminate tools that do not fit your scenario.

1. **`Existing infrastructure:`** If your existing infrastructure can handle your new data pipeline use it.
2. **`Deadlines:`** Choose the tool that you have the time to set up. If you only have 2 days to build, test & deploy the data pipeline, it might not be a good idea to try to set up Airflow on Kubernetes.
3. **`Cost:`** Most vendor tools/services costs money, make sure that the cost is acceptable. Another cost to think about is developer time.
4. **`Data strategy`** Discuss how the above requirements might evolve in the short, mid, and long term. While choosing a tool for the long term might seem like the best choice, it might not always be possible with deadlines and cost.
5. **`Managed v self-hosted`** Do you have the ability/team to manage a data platform? This will include setting up CI/CD, scaling, reducing downtime, patching, handling system failures, etc. Does your company’s security policy allow the use of managed service?. Self-managing tools can be a lot of work.
6. **`Support`** Does the tool have a good support system? Is it open source and popular? Is its code easy to read? Do they have good documentation? Do they have a great community(slack/Discord/Discourse)? A well-supported or documented service can speed up development velocity.
7. **`Developer ergonomics`** Having good developer ergonomics such as git, local dev environment, ability to test locally, and CI/CD can significantly reduce the number of bugs, increase the speed of development and make the data pipeline a joy to work with. Beware of closed source vendor services, they are very hard to test locally.
8. **`Number of tools`** Choosing tools that satisfy most of the requirements can be beneficial in keeping the pipeline complexity low. This helps with onboarding new engineers, faster development time, and simpler management.

Asking these questions for the tools you had chosen will allow you to narrow down your choices.

## 5\. Conclusion

In summary, when building a data pipeline

1. Start with the requirements
2. Identify components
3. Use the requirement x component framework to choose your tools
4. Use the list of filters to choose the right tool for your use case

Hope this article gives you a good idea of how to choose the right tools for your data pipelines. Whether you are building a practice data pipeline or building out your company’s data infrastructure, start from the requirements and filter out tools that don’t fit your scenario.

If you have any questions or comments or would like me to add more components/requirements/filters please leave them in the comment section below.

## 6\. Further reading

1. [4 ways to load data into a data warehouse](https://www.startdataengineering.com/post/patterns-to-load-data-into-data-warehouse/)
2. [Creating local end-to-end tests](https://www.startdataengineering.com/post/setting-up-e2e-tests/)
3. [Writing efficient data pipelines](https://www.startdataengineering.com/post/writing-memory-efficient-dps-in-python/)
4. [Adding tests to data pipelines](https://www.startdataengineering.com/post/how-to-add-tests-to-your-data-pipeline/)

**Please consider sharing, it helps out a lot!**

[](https://twitter.com/intent/tweet?hashtags=data%2cdataengineering%2cdatapipelinedesign%2csoftwaredesign&url=https%3a%2f%2fwww.startdataengineering.com%2fpost%2fchoose-tools-dp%2f&text=Checkout%20this%20post%20about%20choosing%20the%20right%20tools%20for%20your%20data%20pipelines%21)[](https://reddit.com/submit/?url=https%3a%2f%2fwww.startdataengineering.com%2fpost%2fchoose-tools-dp%2f&resubmit=true&title=How%20to%20choose%20the%20right%20tools%20for%20your%20data%20pipeline)[](https://www.linkedin.com/shareArticle?mini=true&url=https%3a%2f%2fwww.startdataengineering.com%2fpost%2fchoose-tools-dp%2f&title=How%20to%20choose%20the%20right%20tools%20for%20your%20data%20pipeline&summary=Checkout%20this%20post%20about%20choosing%20the%20right%20tools%20for%20your%20data%20pipelines%21&source=https%3a%2f%2fwww.startdataengineering.com%2fpost%2fchoose-tools-dp%2f)[](https://facebook.com/sharer/sharer.php?u=https%3a%2f%2fwww.startdataengineering.com%2fpost%2fchoose-tools-dp%2f)

With so many tools, filtering is essential to eliminate tools that are not a good fit. Shown below are some common constraints that you might have, use these to eliminate tools that do not fit your scenario.

1. **`Existing infrastructure:`** If your existing infrastructure can handle your new data pipeline use it.
2. **`Deadlines:`** Choose the tool that you have the time to set up. If you only have 2 days to build, test & deploy the data pipeline, it might not be a good idea to try to set up Airflow on Kubernetes.
3. **`Cost:`** Most vendor tools/services costs money, make sure that the cost is acceptable. Another cost to think about is developer time.
4. **`Data strategy`** Discuss how the above requirements might evolve in the short, mid, and long term. While choosing a tool for the long term might seem like the best choice, it might not always be possible with deadlines and cost.
5. **`Managed v self-hosted`** Do you have the ability/team to manage a data platform? This will include setting up CI/CD, scaling, reducing downtime, patching, handling system failures, etc. Does your company’s security policy allow the use of managed service?. Self-managing tools can be a lot of work.
6. **`Support`** Does the tool have a good support system? Is it open source and popular? Is its code easy to read? Do they have good documentation? Do they have a great community(slack/Discord/Discourse)? A well-supported or documented service can speed up development velocity.
7. **`Developer ergonomics`** Having good developer ergonomics such as git, local dev environment, ability to test locally, and CI/CD can significantly reduce the number of bugs, increase the speed of development and make the data pipeline a joy to work with. Beware of closed source vendor services, they are very hard to test locally.
8. **`Number of tools`** Choosing tools that satisfy most of the requirements can be beneficial in keeping the pipeline complexity low. This helps with onboarding new engineers, faster development time, and simpler management.

___

| function | Open source | Managed services |
| --- | --- | --- |
| Extract | Debezium or SQL script to pull to data | Stitch or fivetran |
| Transform | Open source SQL/ Apache Spark | fivetran or dbt cloud |
| Load | SQL script | Stitch or fivetran |
| Dashboard | Metabase / graphana | AWS Quicksight or looker or tableau |
| Monitor | Airflow | dbt cloud |
| Alert | Airflow with custom logic | dbt cloud |
| Schedule | Airflow | dbt cloud |

___
idempotency :

- delete-write pattern
