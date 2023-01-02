---
tags:
    - software
    - network
    - concept
---
# HeadOfLineBlocking

Head of line blocking is a phenomena that happens whenever the first element of a queue blocks progress of other elements.

It is commonly associated with internet transmission protocols.
___

## Http 1.1

For [[HTTP1]], HOL happens because of the [[OneOutstandingRequest]] rule. For the second request to go, the first one has to be answered first.

This is somewhat mitigated by [[HttpPipelining]], but not fully. Since compliant user-agents are required to send pipelined responses in the same order of requests, it is very possible for slow first-requests to block later requests done.

## Http 2

For [[HTTP2]], HOL happens because of fundamental mechanisms of the [[ProtocolTCP]]:

Requests are translated as a stream of bytes ( few packets ) in the client server TCP connection.

The server will then assemble the packets into a request, but only after every packet is acknowledged.

> This happens so the client can resend it in case of lost packets

When using Http2 [[Multiplexing]], the underlying TCP connection cannot differentiate the bytes from different streams when assembling the requests.

This can make unrelated requests wait for each other.

```example
Suppose we send 2 requests, while Http-multiplexing.

Suppose also, that all of the second request packet's get acknowledgeded, but a single packet from the first requests doesnt.

Since the underlying tcp connection can't differentiate between these two packets, the second request gets stalled until the lost packet from the first (unrelated) request gets acknowledged. 
```

## TLS

[[ProtocolTLS]] can introduce HOL blocking if used to encrypt larger amounts of data:

* TLS can encrypt up to 16KB of data. This is enough to fill about 11 typical TCP packets.
* If the first 10 packets get through, but the last one gets lost, browsers still need to wait for the last one to arrive before starting processing.

There is also an interaction between TCP [[CongestionControl]] and HTTP implementation.

___

## References

* [Web Performance Calendar  Head-of-Line Blocking in QUIC and HTTP/3: The Details](https://calendar.perfplanet.com/2020/head-of-line-blocking-in-quic-and-http-3-the-details/)
