---
kind: lookup
---
# DataComponents 

| Component | Responsibility | Examples |
| :-- | --- | --- |
| **`Scheduler`** | Starting data pipelines at their scheduled frequency. | [[ToolAirflow]] scheduler, cron, [[ToolDbt]] cloud, etc |
| **`Executor`** | Running the data processing code. The executor can also call out other services to process the data. | [[LanguagePython]], data warehouse, [[ToolSpark]], k8s, dbt, etc |
| **`Orchestrator`** | Ensuring that the data pipeline tasks are executed in the right order, retrying on failures, storing metadata, and displaying progress via UI. | Airflow, [[ToolPrefect]], [[ToolDagster]], dbt |
| **`Source`** | System where data is to be read from. | OLTP [[Databases]], cloud storage, SFTP/FTP servers, REST [[API]]s, etc |
| **`Destination`** | Making data available for the end-user. | data warehouses, Elastic search, NoSQL, CSV files, etc |
| **`Visualization/BI tool`** | Enabling business users to look at data patterns and build shareable dashboards. | [[ToolLooker]], [[ToolTableau]], [[ToolApacheSuperset]], Metabase, etc |
| **`Queue`** | Accepting continuously incoming data (aka streaming) and making it available for the consuming system to read from. | [[ToolKafka]], [[ToolPulsar]], [[AWSKinesis]], Nats, [[ToolRabbitMQ]], etc |
| **`Event triggers`** | Triggering an action in response to a defined event occurring. | AWS lambda triggers, Watchdog, etc |
| **`Monitoring & Alerting`** | Continuously monitoring data pipelines and alerting in case of breakage or delay. | [[ToolDatadog]], [[ToolNewrelic]], [[ToolGrafana]], |
| **`Data quality check`** | Checking if data confines to your expectations. | custom scripts checking for data constraints & business rules, Great expectations, dbt tests, etc |
