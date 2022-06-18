# ProtocolTCP

The Transmission Control Protocol is a communication #protocol.

It provides reliable, ordered and error-checked delivery of a stream of bytes ( octets ) on hosts communicating through an IP #network.

Its main features, the [[ThreeWayHandshake]],  [[PacketRetransmission]] and [[ErrorDetection]] provides reliability, but increases latency.

A #connection must be established between the #client and the #server before #data can be sent contrary to connectionless protocols such as [[ProtocolUDP]].

This means that a server must be listening for connection #requests from clients.

TCP also provides [[CongestionControl]].

It suffers from some vulnerabilities, such as [[DDOS]], [[ConnectionHijacking]] , [[TCPVeto ]] and [[ResetAttack]]

![[ThreeWayHandshake]]

___

[[ErrorDetection]]

To provide [[PacketRetransmission]] and reordering, every packet is sent with a unique identifier, called a sequence number.  

Each received packet has to be acknowledged by the server. If this doesn't happen, the other party can then re-send the packets.

Since each packet already has a monotonically increasing identifier, we can use it to provide proper re-ordering of packets.

> #todo

What about other interferences, such as bit flipping? How are these kind of errors handled by the transmission mechanism?

___

References

1. <https://www.youtube.com/watch?v=bW_BILl7n0Y>
