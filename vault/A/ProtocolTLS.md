---
tags:
    - network
    - fact
---
# TLSProtocol

The Transport Layer Security is a Cryptography Protocol. It is designed to provide secure communications over a network and is the successor of the Secure Sockets Layer ([[ProtocolSSL]]).

It prevents [[Eavesdropping]] and Tampering by using [[TLSCertificate]]s between the communicating computer applications.

Since communication can be done without TLS, the client must request that the server set up a secure connection.

Usually, separation is achieved by using a different [[IPPort]] number for TLS connections, usually __Port 80__ for [[ProtocolHTTP]] and __Port 443__ for HTTPS.

___

The [[ThreeWayHandshake]] is the mechanism used to establish a stateful connection The goal of this procedure is to establish agreed encryption [[CipherSuite]] to be used alongside the [[ProtocolTCP]] connection

1. The client begins by requesting a secure connection and its supported cipher suites.

2. From this pool, the server picks one that he also supports and notifies the client of the decision.

3. In the sequence, the server provides identification in the form of a digital certificate, which contains
    * [[ServerName]]
    * [[CertificateAuthority]]
    * Public[[EncryptionKey]]

4. The client then confirms the validity of this information.

5. The client and server then agree to a session secret. This can be done using different mechanisms:

* [[DiffieHelman]]
* Encrypting a randomly generated number with the public key sent by the server, which will be able to be decrypted only with its Private[[EncryptionKey]].

> #todo
    How does a client confirm the validity of server-sent information?? [[MetaExpand]]
    create a sequence diagram for tls.

___

## Considerations

[[ModelOSI]] Layers.

Normally, encryption would be the responsibility of Layer 6.

However, applications generally use TLS as if it were a Transport layer - even though the same applications must __actively__ control its initiation and the handling of exchanged authentication certificates.

There are mechanisms for revocation of SSL:

* OCSP

## References

#todo