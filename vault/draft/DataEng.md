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
			can convert to different database systems using the aws schema conversion tool ( AWS SCT ) 			then use  DMS to migrate your data


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
https://www.youtube.com/watch?v=VYLWyS8UNm8


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
    

