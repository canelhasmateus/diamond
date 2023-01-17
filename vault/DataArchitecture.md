# DataArchitecture


## Lambda

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

## Kappa


 Kappa
  Modified architecture where everything is seen as a stream
  Most popular among these engine are all open-source apache projects:

   Apex
   Beam
   Flink
   Storm
   Spark

____

he Kappa Architecture is a software architecture used for processing streaming data. The main premise behind the Kappa Architecture is that you can perform both real-time and batch processing, especially for analytics, with a single technology stack. It is based on a streaming architecture in which an incoming series of data is first stored in a messaging engine like Apache Kafka. From there, a stream processing engine will read the data and transform it into an analyzable format, and then store it into an analytics database for end users to query.

The Kappa Architecture supports (near) real-time analytics when the data is read and transformed immediately after it is inserted into the messaging engine. This makes recent data quickly available for end user queries. It also supports historical analytics by reading the stored streaming data from the messaging engine at a later time in a batch manner, to create additional analyzable outputs for more types of analysis.

The Kappa Architecture is considered a simpler alternative to the Lambda Architecture as it uses the same technology stack to handle both real-time stream processing and historical batch processing. Both architectures entail the storage of historical data to enable large-scale analytics. Both architectures are also useful for addressing “human fault tolerance,” in which problems with the processing code (either bugs or just known limitations) can be overcome by updating the code and running it again on the historical data. The main difference with the Kappa Architecture is that all data is treated as if it were a stream, so the stream processing engine acts as the sole data transformation engine.

What Is a Streaming Architecture?
A streaming architecture is a defined set of technologies that work together to handle stream processing, which is the practice of taking action on a series of data at the time the data is created. In many modern deployments, Apache Kafka acts as the store for the streaming data, and then multiple stream processors can act on the data stored in Kafka to produce multiple outputs. Some streaming architectures include workflows for both stream processing and batch processing, which either entails other technologies to handle large-scale batch processing, or using Kafka as the central store as specified in the Kappa Architecture.


How Do the Kappa and Lambda Architectures Compare?
Both architectures handle real-time and historical analytics in a single environment. However, one major benefit of the Kappa Architecture over the Lambda Architecture is that it enables you to build your streaming and batch processing system on a single technology. This means you can build a stream processing application to handle real-time data, and if you need to modify your output, you update your code and then run it again over the data in the messaging engine in a batch manner. There is no separate technology to handle the batch processing, as is suggested by the Lambda Architecture.

With a sufficiently fast stream processing engine (like Hazelcast Jet), you may not need a separate technology that is optimized for batch processing. You simply read the stored streaming data in parallel (assuming the data in Kafka is appropriately split into separate channels, or “partitions”) and transform the data as if it were from a streaming source. For some environments, you can potentially create the analyzable output on demand, so when a new query is submitted from an end user, the data can be transformed ad hoc to optimally answer that query. Again, this requires a high-speed stream processing engine to enable low latency in the processing.

While the Lambda Architecture does not specify the technologies that must be used, the batch processing component is often done on a large-scale data platform like Apache Hadoop. The Hadoop Distributed File System (HDFS) can economically store the raw data that can then be transformed via Hadoop tools into an analyzable format. While Hadoop is used for the batch processing component of the system, a separate engine designed for stream processing is used for the real-time analytics component. One advantage of the Lambda Architecture, however, is that much larger data sets (in the petabyte range) can be stored and processed more efficiently in Hadoop for large-scale historical analysis.



___

n excellent real-time data processing architecture needs to be fault-tolerant and scalable; it needs to support batch and incremental updates and be extensible.

Here we explore two essential data processing architectures known as Lambda and Kappa that serve as the backbone of various enterprise application.

Lambda Architecture
Lambda architecture comprises Batch Layer, Speed Layer (also known as Stream layer), and Serving Layer.

The batch layer operates on the complete data and thus allows the system to produce the most accurate results. However, the results come at the cost of high latency due to high computation time. The batch layer stores the raw data as it arrives and computes the batch views for consumption. Naturally, batch processes will occur at some interval and will be long-lived. The scope of data is anywhere from hours to years.

The speed layer generates results in a low-latency, near real-time fashion. The speed layer is used to compute the real-time views to complement the batch views. The speed layer receives the arriving data and performs incremental updates to the batch layer results. Thanks to the incremental algorithms implemented at the speed layer, the computation cost is significantly reduced.

The batch views may be processed with more complex or expensive rules and may have better data quality and less skew, while the real-time views give you up-to-the-moment access to the latest possible data.

Finally, the serving layer enables various queries of the results sent from the batch and speed layers. The outputs from the batch layer in the form of batch views and the speed layer in the form of near-real-time views are forwarded to the serving layer, which uses this data to cater to the pending queries on an ad-hoc basis.

Pros

It is a good balance of speed, reliability, and scalability. The batch layer of Lambda architecture manages historical data with the fault-tolerant, distributed storage, ensuring a low possibility of errors even if the system crashes.
Access to both real-time and offline results in covering many data analysis scenarios very well.
Having access to a complete data set in a batch window may yield specific optimizations that make Lambda better performing and perhaps even simpler to implement.
Cons

Although the offline layer and the real-time stream face different scenarios, their internal processing logic is the same, so there are many duplicate modules and coding overhead.
Reprocesses every batch cycle, which is not beneficial in specific scenarios.
A data set modeled with Lambda architecture is difficult to migrate or reorganize.
Use Cases

User queries are required to be served on an ad-hoc basis using immutable data storage.
Quick responses are required, and the system should handle various updates in new data streams.
None of the stored records shall be erased, and it should allow the addition of updates and new data to the database.


Kappa Architecture
The Kappa architecture solves the redundant part of the Lambda architecture. It is designed with the idea of replaying data. Kappa architecture avoids maintaining two different code bases for the batch and speed layers. The key idea is to handle real-time data processing, and continuous data reprocessing using a single stream processing engine and avoid a multi-layered Lambda architecture while meeting the standard quality of service.

Architecture Overview:


Pros

Applications can read and write directly to Kafka (or other message queue) as developed. For existing event sources, listeners are used to stream writes directly from database logs (or datastore equivalents), eliminating the need for batch processing during ingress, resulting in fewer resources.
Treating every data point in your organization as a streaming event also provides you the ability to 'time travel' to any point and see the state of all data in your organization.
Queries only need to look in a single serving location instead of going against batch and speed views.
Cons

The complication of this architecture mainly revolves around having to process this data in a stream, such as handling duplicate events, cross-referencing events, or maintaining order - operations that are generally easier to do in batch processing.
Although the Kappa architecture looks concise, it isn't easy to implement, especially for the data replay.
For Lambda, catalog services can auto-discover and document file and database systems. Kafka doesn't align with this tooling, so supporting scaling to enterprise-sized environments strongly infers implementing confluent enterprise with a schema registry that attempts to play the role of a catalog service.
Use Cases

When the algorithms applied to the real-time data and the historical data are identical, it is very beneficial to use the same code base to process historical and real-time data and, therefore, implement the use-case using the Kappa architecture.
Kappa architecture can be used to develop data systems that are online learners and therefore don't need the batch layer.
The order of the events and queries is not predetermined. Stream processing platforms can interact with the database at any time.
Conclusion
Kappa is not a replacement for Lambda as some use-cases deployed using the Lambda architecture cannot be migrated.

When you seek an architecture that is more reliable in updating the data lake as well as efficient in training the machine learning models to predict upcoming events robustly, then use the Lambda architecture as it reaps the benefits of both the batch layer and speed layer to ensure few errors and speed.

On the other hand, when you want to deploy big data architecture using less expensive hardware and require it to deal effectively with unique events occurring continuously, then select the Kappa architecture for your real-time data processing needs.
___

Big Data, Internet of things (IoT), Machine learning models and various other modern systems are becoming an inevitable reality today. People from all walks of life have started to interact with data storages and servers as a part of their daily routine. Therefore we can say that dealing with big data in the best possible manner is becoming the main area of interest for businesses, scientists and individuals. For instance an application launched for achieving certain business goals will be more successful if it can efficiently handle the queries made by customers and serve their purpose well. Such applications need to interact with data storage and in this article we’ll try to explore two important data processing architectures that serve as the backbone of various enterprise applications known as Lambda and Kappa.

The rapid growth of social media applications, cloud based systems, Internet of things and an unending spree of innovations has made it important for a developer or a data scientist to take well calculated decisions while launching, upgrading or troubleshooting an enterprise application. Although it has been widely accepted and understood that using a modular approach to build an application has multiple advantages and long term benefits, the pursuit for selecting the right data processing architecture still keeps putting question marks in front of many proposals related to existing and upcoming enterprise software. Although there are various data processing architectures being followed around the globe these days let’s investigate the Lambda and Kappa architectures in detail and find out what makes each of them special and in what circumstances one should be preferred over another.

Lambda Architecture
Lambda architecture is a data processing technique that is capable of dealing with huge amount of data in an efficient manner. The efficiency of this architecture becomes evident in the form of increased throughput, reduced latency and negligible errors. While we mention data processing we basically use this term to represent high throughput, low latency and aiming for near-real-time applications. Which also would allow the developers to define delta rules in the form of code logic or natural language processing (NLP) in event-based data processing models to achieve robustness, automation and efficiency and improve the data quality. Moreover, any change in the state of data is an event to the system and as a matter of fact it is possible to give a command, queried or expected to carry out delta procedures as a response to the events on the fly.

Event sourcing is a concept of using the events to make prediction as well as storing the changes in a system on the real time basis a change of state of a system, an update in the databases or an event can be understood as a change. For instance if someone interact with a web page or a social network profile, the events like page view, likes or Add as a Friend request etc… are triggering events that can be processed or enriched and the data stored in a database.

Data processing deals with the event streams and most of the enterprise software that follow the Domain Driven Design use the stream processing method to predict updates for the basic model and store the distinct events that serve as a source for predictions in a live data system. To handle numerous events occurring in a system or delta processing, Lambda architecture enabling data processing by introducing three distinct layers. Lambda architecture comprises of Batch Layer, Speed Layer (also known as Stream layer) and Serving Layer.

1. Batch layer
New data keeps coming as a feed to the data system. At every instance it is fed to the batch layer and speed layer simultaneously. Any new data stream that comes to batch layer of the data system is computed and processed on top of a Data Lake. When data gets stored in the data lake using databases such as in memory databases or long term persistent one like NoSQL based storages batch layer uses it to process the data using MapReduce or utilizing machine-learning (ML) to make predictions for the upcoming batch views.

2. Speed Layer (Stream Layer)
The speed layer uses the fruit of event sourcing done at the batch layer. The data streams processed in the batch layer result in updating delta process or MapReduce or machine learning model which is further used by the stream layer to process the new data fed to it. Speed layer provides the outputs on the basis enrichment process and supports the serving layer to reduce the latency in responding the queries. As obvious from its name the speed layer has low latency because it deals with the real time data only and has less computational load.

3. Serving Layer
The outputs from batch layer in the form of batch views and from speed layer in the form of near-real time views are forwarded to the serving layer which uses this data to cater the pending queries on ad-hoc basis.

Here is a basic diagram of what Lambda Architecture model would look like:

Let’s translate that to a functional equation which defines any query in big data domain. The symbols used in this equation are known as Lambda and the name for the Lambda architecture is also coined from the same equation. This function is widely known to those who are familiar with tidbits of big data analysis.

Query = λ (Complete data) = λ (live streaming data) * λ (Stored data)
The equation means that all the data related queries can be catered in the Lambda architecture by combining the results from historical storage in the form of batches and live streaming with the help of speed layer.

Applications of Lambda Architecture

Lambda architecture can be deployed for those data processing enterprise models where:

User queries are required to be served on ad-hoc basis using the immutable data storage.
Quick responses are required and system should be capable of handling various updates in the form of new data streams.
None of the stored records shall be erased and it should allow addition of updates and new data to the database.
Lambda architecture can be considered as near real-time data processing architecture. As mentioned above, it can withstand the faults as well as allows scalability. It uses the functions of batch layer and stream layer and keeps adding new data to the main storage while ensuring that the existing data will remain intact. Companies like Twitter, Netflix, and Yahoo are using this architecture to meet the quality of service standards.

Pros and Cons of Lambda Architecture
Pros
Batch layer of Lambda architecture manages historical data with the fault tolerant distributed storage which ensures low possibility of errors even if the system crashes.
It is a good balance of speed and reliability.
Fault tolerant and scalable architecture for data processing.
Cons
It can result in coding overhead due to involvement of comprehensive processing.
Re-processes every batch cycle which is not beneficial in certain scenarios.
A data modeled with Lambda architecture is difficult to migrate or reorganize.
Kappa Architecture
In 2014 Jay Kreps started a discussion where he pointed out some discrepancies of Lambda architecture that further led the big data world to another alternate architecture that used less code resource and was capable of performing well in certain enterprise scenarios where using multi layered Lambda architecture seemed like extravagance.

Kappa Architecture cannot be taken as a substitute of Lambda architecture on the contrary it should be seen as an alternative to be used in those circumstances where active performance of batch layer is not necessary for meeting the standard quality of service. This architecture finds its applications in real-time processing of distinct events. Here is a basic diagram for the Kappa architecture that shows two layers system of operation for this data processing architecture.


Let’s translate the operational sequencing of the kappa architecture to a functional equation which defines any query in big data domain.

Query = K (New Data) = K (Live streaming data)
The equation means that all the queries can be catered by applying kappa function to the live streams of data at the speed layer. It also signifies that that the stream processing occurs on the speed layer in kappa architecture.

Applications of Kappa architecture
Some variants of social network applications, devices connected to a cloud based monitoring system, Internet of things (IoT) use an optimized version of Lambda architecture which mainly uses the services of speed layer combined with streaming layer to process the data over the data lake.

Kappa architecture can be deployed for those data processing enterprise models where:

Multiple data events or queries are logged in a queue to be catered against a distributed file system storage or history.
The order of the events and queries is not predetermined. Stream processing platforms can interact with database at any time.
It is resilient and highly available as handling Terabytes of storage is required for each node of the system to support replication.
The above mentioned data scenarios are handled by exhausting Apache Kafka which is extremely fast, fault tolerant and horizontally scalable. It allows a better mechanism for governing the data-streams. A balanced control on the stream processors and databases makes it possible for the applications to perform as per expectations. Kafka retains the ordered data for longer durations and caters the analogous queries by linking them to the appropriate position of the retained log. LinkedIn and some other applications use this flavor of big data processing and reap the benefit of retaining large amount of data to cater those queries that are mere replica of each other.

Pros and Cons of Kappa architecture
Pros
* Kappa architecture can be used to develop data systems that are online learners and therefore don’t need the batch layer.
Re-processing is required only when the code changes.
* It can be deployed with fixed memory.
* It can be used for horizontally scalable systems.
* Fewer resources are required as the machine learning is being done on the real time basis.
Cons
* Absence of batch layer might result in errors during data processing or while updating the database that requires having an exception manager to reprocess the data or reconciliation.

Conclusion
In short the choice between Lambda and Kappa architectures seems like a tradeoff. If you seek you’re an architecture that is more reliable in updating the data lake as well as efficient in devising the machine learning models to predict upcoming events in a robust manner you should use the Lambda architecture as it reaps the benefits of batch layer and speed layer to ensure less errors and speed. On the other hand if you want to deploy big data architecture by using less expensive hardware and require it to deal effectively on the basis of unique events occurring on the runtime then select the Kappa architecture for your real-time data processing needs.
___

## References

1. <https://hazelcast.com/glossary/kappa-architecture>
2. <https://www.qlik.com/blog/lambda-or-kappa-the-need-for-a-new-data-processing-architecture>
3. 