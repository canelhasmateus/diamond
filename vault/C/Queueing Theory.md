# Little's Law

    N = XR 

    Average # of concurrent requests = Average Transaction Rate * Average response time

    ![# of people on the ride = throughput  * how long the ride last](../../others/assets/2022-03-26-18-59-09.png)

# Capacity Planning

___
References

    ( 1. )[https://www.youtube.com/watch?v=m64SWl9bfvk]
        .. Implements Rate limits by means of Little's Law. It shows that Limiting concurrent requests acts the same as limiting requests per period when the load is reasonable, but introduces backpressure when the service is overwhelming. 
        .. Since this limit is  dynamically calculated based on load, we can provide better utilization of services.
        .. Uses the same principles of [[TCP]], of [[Patterns#Additive Increase, Multiplicative Decrease]]

___

Response time and service time

. the gap between the two grows with load.
. if we go past the 'limit' ( saturation ), the service time stay the same, and response time goes through the roof.
. Response time grows linearly past the saturation limit.

throughput != capacity

            TCP congestion avoidance control 
                . Additive Increase
                . Multiplicative decrease
