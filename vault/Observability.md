---
tags:
  - concept
  - software
---

# Observability

The capability of gathering information about the inner workings of a software, usually in the form of logs and metrics.

* [[Log]]s are textual descriptions, written by the application, to indicate notable events such as start, updates and completion of current operations, as well as the parameters and current state of the program.

* [[Metrics]] are numbers that describe the functionality of a system in regards to some common axes, such as performance and health.
  * [[ResponseAndServiceTimes]]
  * Cpu Usage
  * [[Network]] Usage
  * Network Throughput
  * Memory Usage
  * Disk Usage
  * Disk Throughput

> Metrics are an just a proxy of the software health. Don't forget about [[PatternMapsAndTerritories]]

By the continuous and constant monitoring of such artifacts, we can gather knowledge about the State and health of the software, which allows for [[Incrementality]] and interventions.

> #todo on these interventions: how? when? why?

___

Common problems regarding observability are:

* __Instrumentation__ of applications
  * how to ensure the correct measurement of interesting values while avoiding pitfalls such as [[CoordinatedOmission]].

* [[CloudStorage]]
  * The __storage__ and update of these metrics can also be a problem. By their nature, logs and metrics are voluminous in size, incurring high storage and network __costs__.

* As with any high-data system, we can also expect troubles in regards to efficient __querying__ and [[InformationRetrieval]], required to build efficient plans of intervention.

* Even harder is the [[DataViz]] of such metrics. Due to its very high cardinality, dashboarding the raw data is often inviable, and Aggregation is often used.
  
Consider the usual practice of looking at the 95% for response latencies. Why would the 95 percentile be important?
> They aren't inherently. Remember to [[FirstPrinciplesThinking]].

Looking at it hides the fact that, for a given threshold to be reached, there are other 5% of responses that had to be worse.

Worse still is the monitoring and reporting of averages, which are non-sensical in the context of highly skewed distributions

>Using the mean is an [[ImplicitAssumption]] of normality.

## References

# todo
