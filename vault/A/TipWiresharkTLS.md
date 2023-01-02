---
kind: ramble
---

# TipWiresharkTLS

The `SSLKEYLOGFILE` EnvironmentVariable is commonly used by software that implements [[ProtocolTLS]]. They typically write keys and other TLS secrets to this file.

This applies to [[Curl]], [[Chrome]], [[Firefox]] and other desktop apps that use [[ToolOpenSSL]] libs.

We can configure [[ToolWireshark]] to read this file and decrypt the intercepted TLS packets.

___

References

1. <https://www.trickster.dev/post/decrypting-your-own-https-traffic-with-wireshark/>
