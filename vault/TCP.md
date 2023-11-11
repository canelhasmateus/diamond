---
tags:
    - network
    - fact
---

# TCP

The Transmission Control Protocol provides reliable, ordered and error-checked delivery of a stream of bytes ( octets ) on hosts communicating through an IP network. \[\[FaultTolerance]]

Its main features, the \[\[ThreeWayHandshake]],  `PacketRetransmission` and \[\[ErrorDetection]] provides reliability, but increases latency.

A connection must be established between the client and the server before data can be sent contrary to connectionless protocols such as \[\[UDP]].

This means that a server must be actively listening for connection requests from clients.

It suffers from some vulnerabilities, such as \[\[AttackDDoS]], \[\[AttackConnectionHijacking]] , \[\[AttackTCPVeto ]] and \[\[AttackReset]]

\[\[TCPFlags]]

___

## References

- [What is the TCP 3-Way Handshake and Why Backend Engineers should understand it](https://www.youtube.com/watch?v=bW_BILl7n0Y)
