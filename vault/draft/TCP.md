

# Handshake

TCP Handshake 
    


Every packet sent has to be followed by a acknowledgement. 
Each packet has a unique identifier, called a sequence number.  They're also used to handle out of order packets. 
How do we know which is the first sequence number, though? THese need to be coordinated, which happens through the tcp handshake. 
    . We don't start from the same sequence every time to prevent attacks such as replay attacks and syn attacks. 
    . Less hints are better. 

The first step happens at the client. It sends a SYN request to the server, containing its own sequence number. 
The server then responds with a requests: An SYNACK  containing a syn of its own sequence number, and a ack of the client sequence number. 
To finish, the client sends an ACK containing the server sequence number. 

Each ACK contains one value: The ack of the packet seuqence number summed with the packet length. 






https://www.youtube.com/watch?v=bW_BILl7n0Y



