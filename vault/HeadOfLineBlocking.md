---
tags:
    - software
    - network
    - concept
---

# HeadOfLineBlocking

Head-of-line blocking is a phenomenon that happens whenever the first element of a [[Queue]] blocks the progress of other elements. It is commonly associated with transmission protocols.

For [[HTTP1]], HOL happens because of the [[OneOutstandingRequest]] rule: For a second request to be sent, the previous one has to be answered first.

This is somewhat mitigated by [[HTTPPipelining]], but not fully. Since compliant `user-agents` are required to send pipelined responses in the same order of requests, it is very possible for slow first-requests to block later requests done. [[LatencyAmplification]]

___

## References

- [Web Performance Calendar  Head-of-Line Blocking in QUIC and HTTP/3: The Details](https://calendar.perfplanet.com/2020/head-of-line-blocking-in-quic-and-http-3-the-details/)
