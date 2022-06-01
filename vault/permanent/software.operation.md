# Software Techniques

[[Canary]] Deployments

* Try out new versions by sending small amounts of traffic to them.
* Can be seen as an instance of [[incremental improvement]]

___

## Circuit Breakers

An idea brought from electrical engineering, where [[circuit breakers]] are used to completely shut down currents when the characteristics such as voltage reach outside of the operating thresholds.

It prevents meltdown by simply stopping everything just before hitting [[critical conditions]].

Implemented by tools such as [[Hystrix]], [[istio]], [[conduit]], [[linkerd]] , [[consul]].

___

## Backpressure

[[ Backpressure ]]

___

## Rate Limiting

A simple premise: avoid [[competition]] between clients, by predefining usage quotas. The usual implementation is simple: Limit the number of requests a client can do in a specified period.

However, the naive implementation leads to some interesting [[consequences]].

* If the origin services are overloaded, even following the allowed quotas can be too much to handle.
* If the [[rate limit]] is aggressive, we end up wasting [[resources]]: We could have handled the request, but pre-emptively refused to.

This comes from the [[static]] nature of this implementation. Better implementations can be devised by application of [[Queueing Theory]] and [[capacity planning]].
