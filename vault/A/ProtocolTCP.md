---
tags:
    - network
    - fact
---
# ProtocolTCP

The Transmission Control Protocol is a communication protocol.

It provides reliable, ordered and error-checked delivery of a stream of bytes ( octets ) on hosts communicating through an IP network.

Its main features, the [[ThreeWayHandshake]],  [[PacketRetransmission]] and [[ErrorDetection]] provides reliability, but increases latency.

A connection must be established between the client and the server before data can be sent contrary to connectionless protocols such as [[ProtocolUDP]].

This means that a server must be listening for connection requests from clients.

TCP also provides [[Pattern]].

It suffers from some vulnerabilities, such as [[AttackDDoS]], [[AttackConnectionHijacking]] , [[AttackTCPVeto ]] and [[AttackReset]]

![[ThreeWayHandshake]]

___

[[ErrorDetection]]

To provide [[PacketRetransmission]] and reordering, every packet is sent with a unique identifier, called a sequence number.  

Each received packet has to be acknowledged by the server. If this doesn't happen, the other party can then re-send the packets.

Since each packet already has a monotonically increasing identifier, we can use it to provide proper re-ordering of packets.

> #todo

What about other interferences, such as bit flipping? How are these kind of errors handled by the transmission mechanism?

___

## `PSH` Flag

The Push flag usually means that data has been sent whilst overriding an in-built TCP efficiency delay, such as [[NagleAlgorithm]] or Delayed Acknowledgements.

These delays make TCP networking more efficient at the cost of some latency (usually around a few tens of milliseconds).

> [[PatternTradeoff]]

A latency-sensitive application does not want to wait around for TCP’s efficiency delays so the application will usually disable them, causing data to be sent as quickly as possible with a Push flag set.

___

## References

* [What is the TCP 3-Way Handshake and Why Backend Engineers should understand it](https://www.youtube.com/watch?v=bW_BILl7n0Y)
