---
created_on: 2023/01/05 23:19
kind:
tags:
---

# TLSTermination

As a \[\[ReverseProxy]], when receiving a \[\[TLS]] handshake request, we can choose to act in several ways.

The first one is to respond to the client with the proxy's own certificate and TLS Parameters. This is called TLSTermination.

This necessitates, however, that the Private\[\[EncryptionKey]] and certificate be in the reverse proxy, which raises major concerns:

- The proxy has the ability to decode the underlying contents
- The proxy can act as a representative of the certificate holder.

We can circumvent such concerns by making the reverse proxy transparently forward the TLS request without decrypting its content.

This makes it operate just like a \[\[ModelOSI]] Layer4 proxy. This is called \[\[TLSPassthrough]].

It can continue routing encrypted requests by means of \[\[ServerNameIndication]]
