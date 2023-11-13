---
created_on: 2023/01/02 17:28
kind:
tags:
---

# HTTP3

## Http3

[[HTTP]] is implemented over the [[TCP]] protocol.

However, Http3 - also known as [[QUIC]] - uses [[UDP]] as an underlying transport mechanism to work around da fundamental limitation of TCP: [[HeadOfLineBlocking]].

Of course, it also presents some problems:

- Requires switching between [[UserSpace]] and [[KernelSpace]]. This means that it has serious performance issues when compared with in-kernel protocols, and high jitter under load.

It does not implement any form of [[Fairness]] and [[CongestionControl]]. As such, it can easily throttle down competing TCP sessions.

## References
