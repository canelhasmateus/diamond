# SoftwareObservability

The capability of gathering [[Information]] about the inner workings of a [[system]], usually in the form of metrics and logs.

* [[Metrics]] are numbers that describe the functionality of a system in regards to some common axes, such as [[performance]] and health.
  * [[Latency]]
  * [[Cpu]] Usage
  * [[Network]] Usage
  * Network [[Throughput]]
  * [[Memory]] Usage
  * [[Disk]] Usage
  * Disk [[Throughput]]
* [[Logs]] are textual descriptions, written by the application, to indicate notable events such as start, updates and completion of current operations, as well as the parameters and current state of the program.

> Metrics are an just a proxy  of the software health. Don't forget about [[PatternMapsAndTerritories]]

By the continuous and constant monitoring of such artifacts, we can gather knowledge about the [[State]] and health of the [[Software]], which allows for [[Incremental Improvement ]] and Intervention.

```todo
how? when? why?
```

___

Common problems regarding observability are:

* __Instrumentation__ of applications
  * how to ensure the correct measurement of interesting values while avoiding pitfalls such as [[Coordinated Omission]].

* [[Storage]]
  * The __storage__ and update of these metrics can also be a problem. By their nature, logs and metrics are voluminous in size, incurring high storage and network__costs__.

* As with any high-data system, we can also expect troubles in regards to efficient __querying__ and [[Information Retrieval]], required to build efficient plans of [[ Intervention]].

* Even harder is the [[DataViz]] of such metrics. Due to its very high cardinality, [[dashboarding]] the raw data is often inviable, and [[ Aggregation ]] is often used.
  
Consider the usual practice of looking at the 95% for [[response]] latencies. Why would the 95 percentile be important?
> They aren't inherently. Remember to  [[Question the Premises]].

Looking at it hides the fact that, for a given threshold to be reached, there are other 5% of responses that had to be worse.

Worse still is the monitoring and reporting of averages, which are non-sensical in the context of highly [[skewed distributions]].

>Using the mean is an [[implicit assumption ]] of normality.

___

There often is a disconnection between "Service time" and "Response Time".

Think of a conventional store[[queue]]:

* Response time is the time taken by the clerk to serve each customer
* Service time is the time taken by the customer to be served by the clerk.

The real system is the one experienced by users, which interacts with it in a compound way, by the means of pages and related requests. Looking through this [[holistic]] lens some problems become more apparent.

```example
If a typicial user session involves 5 page loads, averaging 40 resources per page, How many of our users will NOT experience something worse than the 95% of http requests? 
     
Only 0.0035%.

There will be 40*5 = 200 total resources loaded. Each of these have a 0.95 chance of being 'ok'.

The chance of none of this being bad is 0.95^200 = 0.00035
```

> The usual way of setting thresholds is just [[Wishful Thinking]].

In this light, it makes more sense to [[Swap the constraints]] and set the necessary metric levels accordingly to the wanted customer experience:

```example
If a typicial user session involves 5 page loads, averaging 40 resources per page, what http response percentile will be experienced by  95% of users? What about 99%? 

The answer is: 99.97 and 99.995
```

Also of note: Latency does not live in [[isolation]], we need to look at it in the context of load.

When comparing systems using tools such as [[load charts]], looking at how systems behave when pushed past the [[saturation point]] is useless: you already crashed your car.

> This can be seen as the [[PatternImplicitAssumptions]] that your normal operation load is past the point of saturation ( 100% load ). This is very often not the case.

___

References

1. <https://www.youtube.com/watch?v=lJ8ydIuPFeU>
2. <https://www.youtube.com/watch?v=nS0QgxgUYSA>
