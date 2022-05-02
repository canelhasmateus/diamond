



SNS
    . Simple Notification Service
    . Sends messages between systems
    . HA Pub-Sub
    . Can be used to fan-out messages ( deliver to multiple locations )
    . Can create filter policies
    . Use Cases
        .. CPU hits a load
        .. Predefined event occurs
        .. Mobile notifications ( push )


SWF
    . Simple Workflow
    . Multi Step Process
    . Example:
        .. Video is uploaded
        .. Video is process to an optimized format
        .. Then Transcribed
        .. then subtitiles are added
        .. Then stored
        .. Then video is ready for download and the user gets a notification.




		Aws Glue

			Fully managed ETL
			Move data reliably between vairous data sources
			categorize, clean and enrich it
			Totally serverless

			Consists of a central metadata repo known as glue data catalog
			Also with a etl engine that produces python / scala




# 


Amazon Kinesis Data Streams
	
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



	>>> KINESIS vs Kafka

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


# 


Data Pipelines canno support hydbrid approaches, with human intervention. For those, prefer using SWF.


...
The most straightforward way to view or live playback the bideo in kensis video streams is by using HLS. HttpLiveStreaming ( HLS ) Is an industry standart HTTP-Bsaed Media streaming communicatoin sprotoocl. 




___


AWS Lambda and SQWS

	Add reliability

	The benefits of using SQS with Lambda

	When Messages are sent to an SQS queue, they can be automatically processes by the Lambda Function
	Lambda can connect to both standard and FIFO queus
	AWS will continuosly  poll the queue and invoke the function synchronously that would process new messages
	AWS LAMBDA can read messages in a batch and multiple batches at a time
	Once processes, they are removed from the queue

	The visibility timeout for the queue, ensure the timeout is at least 6 times the timeout configured for the function
	At error, send to a dead letter queue
	Notify when errors occur.



...


SQS Has the ability to configure dealy of up to 15 minutes for individual messages
	Deletion of acked messages and redelivery of failed messages after a configured visibility timeout



...


SQS
    . Simple Queueing Service
    . Decouple Application Architectures
    . Transient Place to Put Messages
        .. Can be placed there from 4 to 14 days
    . Helps Right-Sizing
        .. Smooths out peak loads
    . At least once delivery
    . StandardQueue
        .. No ordering guaranteed
    . FifoQueue
        .. Ordering Garantees
    . Can trigger auto-scaling, via queue depth.
        .. CPU load is just a proxy.
        .. Reduces write load




___

        . ETL
            .. Needed to exchange data between the various storages 
            .. AWS Glue
