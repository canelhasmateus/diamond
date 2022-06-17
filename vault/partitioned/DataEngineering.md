## 3\. Components


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
___

Add Data Checks Early and Often: When processing data, it is useful to write data into a staging table, check the data quality, and only then exchange the staging table with the final production table. At Airbnb, we call this the stage-check-exchange paradigm. Checks in this 3-step paradigm are important defensive mechanisms — they can be simple checks such as counting if the total number of records is greater than 0 or something as complex as an anomaly detection system that checks for unseen categories or outliers.


___

toools

JInja Templating
airflow
argo
mlflow
kubeflow
logstash / vetur
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
hadoop
spark
kafka

___

References 

<https://medium.com/@rchang/a-beginners-guide-to-data-engineering-part-i-4227c5c457d7>
<https://bytepawn.com/luigi-airflow-pinball.html>
