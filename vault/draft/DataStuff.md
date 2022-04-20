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


Question Categories

    . Unknown => Why is chocolate so awesome
    .  Known => What is the popluation of bangladesh
    . Discoverable => How can i sell more widgets to housewives between the ages of 25 and 40. 


"The Central value proposition of big data is inseparably connected to *discoverable* answers. These gems are fundamentally different from facts waiting to be sliced, they're rational guesses based on deduction and supported by rigorous data analysis
    . Thats wyhy its called data science
    . If we're not building big data solutions that hypothesize rather than report, we're underdelivering. 



"Enterprise search struggles, as an industry because its trrying to sell drill bits to customers who want holes, and it's forgotten that it's the hole, not the bit, that makes the customer passionate"
    . I feel like this is deep and i'm not understanding it still. 

