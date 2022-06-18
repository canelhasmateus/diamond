# ThreeWayHandshake

To Provide its features, [[ProtocolTCP]] needs some amount of #coordination. Both #client and #server must agree to an initial [[SequenceNumber]].

This is one of the main goals of the three-way handshake.

> We could initiate every connection with the same initial sequence number, such as 0, but this opens the door to potential #malicious activity, such as [[ReplayAttack]] and [[SynAttack]]

1. In the first step of the handshake, the client sends a [[SYN]] #request to the server, containing its sequence number.

2. The server then responds with a [[SYNACK]] request. It contains both the value of the server sequence number and the acknowledgment that it received the client sequence number.

3. Finally, the client sends a [[ACK]] request, acknowledging the receipt of the server sequence number.

___

Ack

Each packet contains a sequence number.
It also has a length.

An Ack response contains the sum of the sequence number and the length of the acknowledged packet.

```todo
create sequence diagram
```
