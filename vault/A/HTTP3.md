---
created_on: 2023/01/02 17:28
kind:
tags:
---

# HTTP3

## Http3

[[HeadOfLineBlocking]] is a fundamental limitation of the TCP Protocol.

Http3, also known as [[ProtocolQuic]], uses [[ProtocolUDP]] as an underlying transport mechanism.

Of course, it also presents some problems:

Since most of its features happen in userspace, it requires switching between user and kernel contexts

This means that it has serious performance issues when compared with in-kernel protocols, and high jitter under load.

It does not implement any form of [[NetworkFairness]] and [[CongestionControl]]. As such, it can easily throttle down competing TCP sessions.

