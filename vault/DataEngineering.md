# DataEngineering

Add Data Checks Early and Often

* When processing data, it is useful to write data into a staging table, check the data quality, and only then exchange the staging table with the final production table.
* At Airbnb, we call this the stage-check-exchange paradigm. Checks in this 3-step paradigm are important defensive mechanisms — they can be simple checks such as counting if the total number of records is greater than 0 or something as complex as an anomaly detection system that checks for unseen categories or outliers.

___

## Tools

[[ToolAirflow]]
[[ToolArgo]]
[[ToolJinja]]
[[ToolKubeflow]]
[[ToolLogstash]]
[[ToolMlflow]]
[[ToolVetur]]

Workflow management/orchestration:

* [[ToolAirflow]]
* [[ToolLuigi]]
* [[ToolNiFi]]

Spark/[[AwsEMR]]/Synapse/BigQuery

: Amazon SQS, Azure Service Bus, GCP Pub/Sub

Stream processing
[[AwsKinesis]]
[[ApacheBeam]]
[[ToolDataflow]]
[[ToolFlink]]
[[ToolKafka]]

Service/message;bus
[[AwsSqs]]
[[AzureServiceBus]]
[[GCPPubSub]]

[[ToolApacheDruid]]
[[ToolArgo]]
[[ToolDask]]
[[ToolDatabricks]]
[[ToolHadoop]]
[[ToolMesos]]
[[ToolminIo]] -> Bootleg s3
[[ToolPrefect]]
[[ToolRay]]
[[ToolSpark]]
[[ToolSpinnaker]]

___

References

<https://medium.com/@rchang/a-beginners-guide-to-data-engineering-part-i-4227c5c457d7>
<https://bytepawn.com/luigi-airflow-pinball.html>
