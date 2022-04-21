
# Lucid Charts and Http2


https://www.youtube.com/watch?v=6cncmSaRqzQ

Lucid charts switched to using [[define.http#Http 2|Http2]]. They noticed an increased load in the backend servers, which slowed it to a crawl. 

This is a possibility: Since http2 will use a single tcp connection to send multiple requests, it will not longer be limited by the usual 6 connections by the browser, increasing concurrent load. 

Consider the fact that the servers must also buffer the packets, order and rearrange the incoming packet streams, so it takes increase cpu and memory load to even assemble the requests.

A further point to be made, is the interaction between http and [[Load Balancing]]. They upgraded the http only in the public side of the load balancing, while keeping http 1 in the load-balancer -> backend path.
This leads to a problem: Since the  load balancer can only send a single request inside each tcp connection, when the browser sends its many ( unbounded ) concurrent requests , the load balancer is forced to open a new tcp connection to the backend for each of them. 

Lucid charts opted to do [[Software Techniques#Rate Limiting]] , which solves the problem, but is an arguable solution. It would be better to do [[Troubleshooting#Root Cause Analysis]] , and discover why the browser was sending that many requests in the first place, and coalesce the redundant requests, or remove them entirely. 



