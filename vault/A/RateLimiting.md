# RateLimiting

A simple premise: avoid #competition between #clients, by predefining usage #quotas. The usual implementation is simple: Limit the number of #requests a client can do in a specified #period.

However, the naive #implementation leads to some interesting ramifications.

* If the origin services are overloaded, even following the allowed quotas can be too much to handle.
* If the [[RateLimiting]] is aggressive, we end up wasting #resources: We could have handled the request, but pre-emptively refused to.

This comes from the #static nature of this implementation. Better implementations can be devised by application of [[QueueTheory]] and [[CapacityPlanning]].
