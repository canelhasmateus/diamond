---
created_on: 2023/01/02 17:28
kind:
tags:
---

# HTTP2

The second version of [[HTTP]] protocol is secure by default and enables protocol negotiation during the [[TLS]], utilizing [[ALPN]]. This means that the upgrade to http2 happens during the negotiation which saves a round trip.

It supports [[BinaryCompression]] for `headers` thus decreasing the necessary bandwidth.

Another big improvement comes in the form of [[Multiplexing]] TCP Connections. This allows multiple requests to be done using the same TCP connection, bypassing the [[OneOutstandingRequest]] rule.

___

> #todo
    Google http 2 cpu and http 1 slow start?
    What is [[ProtocolHpack]]?
