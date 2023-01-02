---
tags:
    - template
    - data
---
# DataAttributes

When building a data pipeline:

1. Start with the requirements
2. Identify components
3. Use the `requirement x component` framework to choose your tools
4. Use the list of filters to choose the right tool for your use case

___

## On Requirements

| Requirement | Questions to ask | Usual choices |
| :-- | --- | --- |
| **`Real-time or Batch`** | Do you need data processed continuously or on a schedule (usually with frequency > 10m)?. | {Batch, Stream} |
| **`Data size`** | What is the size of data to be processed per run? | {**Batch**: {MB, GB, TB, PB}, **Stream**: {records per second \* size per record}} |
| **`Pipeline frequency`** | How frequently do you want the pipeline to run? This typically applies to batch pipelines. | {minutes, hours, days, months} |
| **`Data processing speed`** | How quickly do you want the data to be processed? This should be lower than the `pipeline frequency` to prevent clogging your compute resources. | {seconds, minutes, hours} |
| **`Latency requirements`** | What is an acceptable wait time for an end-user querying your destination system? Typically measured using mean & 95th percentile values. | {5ms, 1s, 10s, 1min, 10min, 30min} |
| **`Query patterns`** | What types of queries will be run by the end-user? | {analytical, full text search, NoSQL, transactional, graph-based, combination} |

___

## On Components

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

## On Constraints

Some common constraints that you might have, use these to eliminate tools that do not fit your scenario.

1. **`Existing infrastructure:`** If your existing infrastructure can handle your new data pipeline use it.
2. **`Deadlines:`** Choose the tool that you have the time to set up. If you only have 2 days to build, test & deploy the data pipeline, it might not be a good idea to try to set up Airflow on Kubernetes.
3. **`Cost:`** Most vendor tools/services costs money, make sure that the cost is acceptable. Another cost to think about is developer time.
4. **`Data strategy`** Discuss how the above requirements might evolve in the short, mid, and long term. While choosing a tool for the long term might seem like the best choice, it might not always be possible with deadlines and cost.
5. **`Managed v self-hosted`** Do you have the ability/team to manage a data platform? This will include setting up CI/CD, scaling, reducing downtime, patching, handling system failures, etc. Does your company’s security policy allow the use of managed service?. Self-managing tools can be a lot of work.
6. **`Support`** Does the tool have a good support system? Is it open source and popular? Is its code easy to read? Do they have good documentation? Do they have a great community(slack/Discord/Discourse)? A well-supported or documented service can speed up development velocity.
7. **`Developer ergonomics`** Having good developer ergonomics such as git, local dev environment, ability to test locally, and CI/CD can significantly reduce the number of bugs, increase the speed of development and make the data pipeline a joy to work with. Beware of closed source vendor services, they are very hard to test locally.
8. **`Number of tools`** Choosing tools that satisfy most of the requirements can be beneficial in keeping the pipeline complexity low. This helps with onboarding new engineers, faster development time, and simpler management.

___

## Examples

| Requirement | Source | Orchestrator | Scheduler | Executor | Destination | Monitor & Alert |
| --- | --- | --- | --- | --- | --- | --- |
| Batch w Pipeline Frequency: 1h | \- | Airflow (MWAA, Astronomer, Cloud composer), dbt, Dagster, Prefect, custom python | Airflow, dbt cloud, Databricks scheduler, Dagster, Prefect, cron | \- | \- | custom alerts, Datadog, newrelic, AWS cloudwatch, |
| Data Size: 10GB | \- | \- | \- | Python, Airflow worker, k8s pod, Spark, Snowflake, Redshift, Dask, Databricks, AWS EMR, | \- | papertrail, datadog, newrelic |
| Data processing speed: <=10m | \- | \- | \- | Python, Airflow operator, k8s pod, Spark, Snowflake, Redshift, Databricks, AWS EMR, | \- | papertrail, datadog, newrelic |
| Query pattern: Analytical | \- | \- | \- | \- | Data warehouse, Redshift, Snowflake, Bigquery, Clickhouse, Delta lake, | Alerts on query failures |
| Latency req: 10s | \- | \- | \- | \- | Data warehouse, Redshift, Snowflake, Bigquery, Clickhouse, Delta lake, | Alerts on query timeouts |

___

## References

1. [[DataEngineering]]

