---
created_on: 2023/01/02 17:27
kind:
tags:
---

# HTTP1

## Http1

Http 1 started with a simple premise: a new TCP connection must be established for each request-reponse cycle.

This proved to be an mistake, and the 1.1 version came right after.

> This is inefficient: the usual transport used - [[ProtocolTCP]] - offers big amounts of bandwidth, which ends up underutilized.

> The [[HeadOfLineBlocking]], alongside the 6 maximum per-host connections, resulted in a form of [[PhenomenaCooperativeThrottling]]

## Http1.1

In this version, we keep persistent TCP connections, but implement the [[OneOutstandingRequest]] rule: It establishes that only one request must be in flight for each underlying transport connection.

> This was necessary for abstraction: the underlying transport protocol doesn't necessarily support multiple requests at the same time.

>> #todo
     This Was  also done to save [[memory]], since long running [[ProtocolTCP]] connections take up memory.
     Is this true? only long running? why? [[MetaExpand]]

[[Browsers]] try to work around this OneOutstandingRequest rule, by creating an [[ResourcePooling]] of usually 6 to 10 TCP connections.

This allows some degree of concurrency, speeding up the loading of pages. However, any more additional requests must be queued at the client-side, leading to the classical waterfall look at [[DevTools]] network tab.

## References

* [HTTP in 60 Seconds - Hypertext Transfer Protocol #shorts_hussein](https://www.youtube.com/shorts/Fbmru6iSee8)
* [The Biggest Flaw of HTTP 1.0 in 60 Seconds #shorts_hussein](https://www.youtube.com/watch?v=6cncmSaRqzQ)
