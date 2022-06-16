# DiffieHelman

As an [[KeyExchange]] algorithm, DH enables the exchange of keys without middle parts knowing

Usual [[PublicKey]] #encryption schemes can be [[MITM]]. DiffieHelman deals with it by using [[TLSCertificates]]

___

The process goes as follows

1. The client comes up with a private number X, and a public number G.

2. The client will send the `Client Hello`. It is a packet containing { G,  G^X, Supported Cipher Suites }, as well as ALNP: Stapling, SNI, eSNI

3. The server then creates a number, Y, and replies with G^Y, alongside the agreed encryption scheme.

4. Then , both server and client use ( G^x ) ^ y = ( G ^ y) ^ x = G^( x * y  ) as a secret number.

> #todo
> there is something to do with another variable used to take the modulo that makes it impossible to derive x back from G and G ^ x.
> make sequence diagram
__

References

1. <https://www.youtube.com/watch?v=IE0QLCcOr0I>
2. <https://www.youtube.com/watch?v=rKVCTVAHK7k>
