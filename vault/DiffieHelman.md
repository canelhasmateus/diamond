---
tags:
    - security
    - software
    - fact
---

# DiffieHelman

As an \[\[KeyExchange]] algorithm, DH enables the exchange of keys without middle parts knowing

Usual Public\[\[EncryptionKey]] encryption schemes can be \[\[AttackMitM]]. DiffieHelman deals with it by using \[\[TLSCertificate]]

___

The process goes as follows

1. The client comes up with a private number X, and a public number G.

2. The client will send the `Client Hello`. It is a packet containing { G,  G^X, Supported Cipher Suites }, as well as ALNP: Stapling, SNI, eSNI

3. The server then creates a number, Y, and replies with G^Y, alongside the agreed encryption scheme.

4. Then , both server and client use ( G^x ) ^ y = ( G ^ y) ^ x = G^( x \* y  ) as a secret number.

> \#todo
> there is something to do with another variable used to take the modulo that makes it impossible to derive x back from G and G ^ x.
> make sequence diagram
> use mathjax
> \_\_

## References

1. [TLS 1.3 Handshake Explained In Details (with Math) - YouTube](https://www.youtube.com/watch?v=IE0QLCcOr0I)
2. [- YouTube](https://www.youtube.com/watch?v=rKVCTVAHK7k)
