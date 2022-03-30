The capability of gathering information about the inner workings of a system, usually in the form of metrics and logs.

Metrics are numbers, that describe the functionality of a system in regards to some common axes, such as performance and health.

Logs are textual descriptions, written by the application, to indicate notable events such as start , updates and completion of current operations, as well as the parameters and current state of the program.


By the continuous and constant monitoring of such artifactgs, we can gather knowledge about the state and health of the system, which allows for [[ Problem Solving#Incremental Improvement ]] and [[ Causal Inference#Intervening Actions]]

Common observed metrics in systems are :
    
    Latency
    
    Cpu Usage

    Network Usage

    Network THroughput

    Memory Usage

    Disk Usage

    Disk Throughput

how? when? why? [[expand]]
    


# Technical Problems

Some common problems regarding observability are the challenges of instrumenting applications, and ensuring the correct measurement  values of interest, while avoiding pitfalls such as [[Software Phenomena#Coordinated Omission]].


The storage and update of these metrics can also poise a problem. They usually are very volumous in size, which incurs high storage and network costs. 

As with any high-data system, we can also expect troubles in regards to efficient querying and [[Information Retrieval]], required to build efficient [[ Causal Inference#Intervening Actions]]. 


# 

Even Harder is the visualization of such metrics. Due to its very high cardinality, dashboarding the raw data is often inviable, and [[ Reductions#Aggregation ]] is often used. Coupled with the fact that [[ Human Phenomena| We like to look at pretty charts]], 
pervasive problems can become masked. 
    
___

    Consider the usual practice of looking at the 95% for response latencies. 

. Why would the 95 percentile be important? [[Problem Solving#Question the Premises| They aren't , inherently.]]

. Looking at it hides the fact that, for a given threshold to be reached, there are other 5% of responses that had to be worse. 

. Worse still is the monitoring and reporting of averages, [[Human Phenomena#Implicit Assumption|which are non-sensical in the context of highly skewed distributions that latencies follow.]] 
    .. its common to have your 99.999% be 1000x greater than your 99%
            
    

# Functional Problems
    

Metrics are an [[Human Phenomena#Map is not the territory|proxy]] of the software health.

               Service time vs resonse time
                    . Think of a queue
                    . nobody experiences service time 
 

There is a disconnection between "Service time" and "Response Time". Thinking of a [[Queueing Theory|queue]], we can think of response time as the time taken by the clerk to  serve each customer, and the service time as the time taken by the customer to be served by the clerk.

The real system is the one experienced by users, which interacts with it in a compound way, by the means of pages and its related requests. Looking at this holistic lens, makes some problems more apparent:


<details
class=blue>
<summary>If a typicial user session involves 5 page loads, averaging 40 resources per page, How many of our users will *NOT* experience something worse than the 95% of http requests?
</summary>
0.0035%.
<br>
<br>
There will be 40*5 = 200 total resources loaded.
Each of these have a 0.95 chance of being 'ok'.
The chance of none of this being bad is 0.95^200 = 0.00035</details>

In this light, it makes more sense to [[Problem Solving#Swap the constraints|set the necessary metric levels accordingly to the wanted customer experience]]:

<details
class=blue>
<summary>If a typicial user session involves 5 page loads, averaging 40 resources per page, 

what http response percentile will be experienced by  95% of users?
and the 99%?
</summary>
99.97.
<br>
99.995
<br>
[[todo]]
details>


The usual way of setting thresholds is just [[Human Phenomena#Wishful Thinking]].


___




# Tips


Latency does not lives in isolation, we need to look at it in the context of load.

When comparing systems by the means of tools such as load charts, looking at how systems behave when pushed past the saturation point is useless: you already crashed your car. 
    . This can be seen as an [[Human Phenomena#Implicit Assumption]] that your normal operation load is past the point of saturation ( 100% load ).


# References
    
(1)[https://www.youtube.com/watch?v=lJ8ydIuPFeU]
(2)[https://www.youtube.com/watch?v=nS0QgxgUYSA]
