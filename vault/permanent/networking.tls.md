Transport Layer Security is a [[Cryptography]] [[Protocol]]. It is designed to provide secure communications over a network, and  is the successor of the Secure Sockets Layer (SSL). 

It prevents [[Eavesdropping]] and [[Tampering]] by using [[Certificates]] between the communicating computer applications. 



Since a communication can be done without TLS, It is necessary for the client to request that the server set up a secure connection. 

Usually this is achieved by using a different [[port]] number for TLS connections, usually Port 80 for [[networking.http]] and 443 for [[HTTPS]]. 


[[Handshake ]]

Stablishes a stateful [[connection]]. 
Both client and server need to agree to a [[chipher suite]]. 

So the client begins by requesting a secure connection and its supported cipher suites. 

The server then picks one that he also supports and notifies the client of the decision. 

Following, the servecr provides identification in the form of a digital certificate, which constains
    . [[Server Name]]
    . [[Certificate Authority]]
    . [[Public Encryption Key]]

The client then confirms the validity of such information
    . How? [[ expand ]]

The client and server then agree to a session secret. This can be done by: 
    .[[Diffie Hellman]]
    . Encrypting a random generated number with the public key sent by the server, which will be able to be decrypted only with its [[private key]]. 




Considerations 

It does not fit cleanly in the [[OSI Model]] Layers. 

Normally, encryption  would be responsability of the Layer 6

However, application generally use tls as if it were a Transport layer, even though the applications using TLS must actively control its initiation and handling of exchanged authentication certificates.
