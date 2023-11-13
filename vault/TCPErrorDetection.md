---
created_on: 2023/01/05 22:30
kind:
tags:
---

# TCPErrorDetection

To provide retransmission and reordering, every [[TCP]] packet is sent with a unique identifier, called a sequence number.

Each received packet has to be acknowledged by the server. If this doesn't happen, the other party can then re-send the packets.

Since each packet already has a monotonically increasing identifier, we can use it to provide proper re-ordering of packets.

> \#todo

What about other interferences, such as bit flipping? How are these kind of errors handled by the transmission mechanism?
