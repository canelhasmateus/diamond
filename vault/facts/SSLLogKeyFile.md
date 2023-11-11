---
tags:
    - network
    - security
    - fact
---

# SSLLogKeyFile

The `SSLKEYLOGFILE` EnvironmentVariable is commonly used by software that implements \[\[TLS]]. They typically write keys and other TLS secrets to this file.

This applies to \[\[Curl]], \[\[Chrome]], \[\[Firefox]] and other desktop apps that use \[\[OpenSSL]] libs.

We can configure \[\[Wireshark]] to read this file and decrypt the intercepted TLS packets.

___

## References

- [Decrypting your own HTTPS traffic with Wireshark – Trickster Dev](https://www.trickster.dev/post/decrypting-your-own-https-traffic-with-wireshark/)
