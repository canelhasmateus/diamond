The Transmission Control Protocol is a communication [[protocol]]. 

It provides [[reliable]], [[ordered]] and [[error-checked]] delivery of a stream of bytes ( octets ) on hosts communicating through a IP [[network]]. 


Its main features, the three way [[handshake]], packet [[retransmission]] and [[error detection]] provides reliability, but lenghtens latency. 


A [[Connection]] must be stablished between the [[client]] and the [[server]] before [[data]] can be sent contrary to connectionless protocols such as [[UDP]].

This means that a server must be listening for connection requests from clients. 


Tcp also provides [[Congestion Control]]. 

It suffers from some vulnerabilities, such as [[DDOS]], [[Connection Hijacking]] , [[TCP Veto ]] and [[Reset Attack]]


[[Handshake]]


To Provide its features, both client and server [coordination|must agree ]to a initial [[sequence number]]. 

This, is one of the main goals of the three-way handshake. 
    . We could initiate every connection with the same initial sequence number, such as 0, but this opens the door to potential malicious activity, such as [[Replay Attack]] and [[Syn Attack]]


In the first step of the handshake, the client sends a [[SYN]] request to the server, containing its own sequence number. 

The server then responds with a [[SYNACK]] request. it contains both the value of the server sequence number, and the acknowledgement that if received the client sequence number. 

Finally, the client sends an [[ACK]] request, acknowledging the receival of the server sequence number. 


[[Error Detection]]

Retransmission and Reodering

To provide [[retransmission]], every packet is sent with a unique identifier, called a sequence number.  

Each received packet has to be acknowledged by the server. If this doesn't happen, the other party can then re-send the packets. 

Since each packet already has an monotonically increasing identifier, we can use it to provide proper re-ordering of packets. 



# Ack

Each packet contains a sequence number. 
It also has a length. 

An Ack response contains the sum of the sequence number and the length of the acknowledge packet. 

# References

    https://www.youtube.com/watch?v=bW_BILl7n0Y



