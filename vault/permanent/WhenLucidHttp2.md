
# Lucid Charts and Http2

<https://www.youtube.com/watch?v=6cncmSaRqzQ>

[[Lucid charts]] #switched to [[ProtocolHTTP]]2. They noticed an increased #load in the backend servers, which slowed it to a crawl.

This is a possibility: Since http2 will use a single [[ProtocolTCP]] connection to send multiple requests, it will no longer be limited by the usual 6 connections by the #browser, increasing concurrent load.

Consider the fact that the servers must also #buffer the #packets, and #sort and rearrange the incoming packet #streams, so it takes increased #CPU and #memory load to even assemble the requests.

A further point to be made is the interaction between HTTP and [[LoadBalancing]]. Lucid Charts upgraded the HTTP only on the __public side__ of the load balancer, keeping HTTP 1 in the path from load-balancer to backend.

This leads to a #problem: Since the load balancer can only send a single #request inside each TCP connection, the browser sends its many ( unbounded ) #concurrent requests, and the load balancer is forced to open a new TCP connection to the backend for each of them.

Lucid charts opted to do [[RateLimiting]], which solves the problem, although not robustly.  It would be better to do [[RootCauseAnalysis]], discover why the browser was sending that many requests in the first place and coalesce the redundant requests - or remove them entirely.
