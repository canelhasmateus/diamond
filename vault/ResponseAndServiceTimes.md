---
tags: 
    - software
    - metrics
    - thought
---

# ResponseAndServiceTimes

There often is a disconnection between `Service time` and `Response Time`.

Think of a conventional store queue:

- Response time is the time taken by the clerk to serve each customer
- Service time is the time taken by the customer to be served by the clerk.

The real system is the one experienced by users, which interacts with it in a **compound** way, by the means of pages and related requests. Looking through this holistic lens some problems become more apparent.

```example
If a typicial user session involves 5 page loads, averaging 40 resources per page, How many of our users will NOT experience something worse than the 95% of http requests? 
     
Only 0.0035%.

There will be 40*5 = 200 total resources loaded. Each of these have a 0.95 chance of being 'ok'.

The chance of none of this being bad is 0.95^200 = 0.00035
```

> The usual way of setting thresholds is just \[\[PatternWishfulThinking]].

In this light, it makes more sense to tackle the \[\[Duality]] problem, and set the necessary metric levels accordingly to the wanted customer experience:

```example
If a typicial user session involves 5 page loads, averaging 40 resources per page, what http response percentile will be experienced by  95% of users? What about 99%? 

The answer is: 99.97 and 99.995
```

Also of note: Latency does not live in isolation, we need to look at it in the context of load.

When comparing systems using tools such as \[\[VizLoadCharts]], looking at how systems behave when pushed past the \[\[SaturationPoint]] is useless: you have already crashed your car.

> This can be seen as the \[\[ImplicitAssumption]] that your normal operation load is past the point of saturation ( 100% load ). This is very often not the case.

___

## References

- ["How NOT to Measure Latency" by Gil Tene](https://www.youtube.com/watch?v=lJ8ydIuPFeU)
- [YOW! 2019 - Gil Tene - How I learned to stop worrying and love Misery](https://www.youtube.com/watch?v=nS0QgxgUYSA)
