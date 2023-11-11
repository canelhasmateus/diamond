---
created_on: 2023/01/02 17:27
kind:
tags:
---

# HTTP1

## Http1

The first version of the \[\[HTTP]] protocol established a `stateless` communication protocol.
The first implementation over \[\[TCP]] *created a new connection for each request*.

This was necessary for abstraction: the underlying transport protocol doesn't necessarily support multiple requests at the same time.

> \#todo
> This Was  also done to save memory, since long running TCP connections take up memory.
> Is this true? only long running? why?

This proved to be an mistake, and the 1.1 version came right after.

___

In this version of \[\[HTTP]], we keep persistent TCP connections, but implement the \[\[OneOutstandingRequest]]rule: It establishes that only one request must be in flight for each underlying transport connection.

1. This is inefficient: the usual transport used - \[\[TCP]] - offers big amounts of bandwidth, which ends up underutilized.
2. Is slow due to \[\[HeadOfLineBlocking]].

> \#todo The \[\[HeadOfLineBlocking]], alongside the 6 maximum per-host connections, resulted in a form of \[\[PhenomenaCooperativeThrottling]]??

\[\[Browser]]s try to work around this rule by creating an \[\[ResourcePooling]] of usually 6 to 10 TCP connections.

This allows some degree of concurrency, speeding up the loading of pages. However, any more additional requests must be queued at the client-side, leading to the classical waterfall look at \[\[DevTools]] network tab.

## References

- [HTTP in 60 Seconds - Hypertext Transfer Protocol #shorts\_hussein](https://www.youtube.com/shorts/Fbmru6iSee8)
- [The Biggest Flaw of HTTP 1.0 in 60 Seconds #shorts\_hussein](https://www.youtube.com/watch?v=6cncmSaRqzQ)
