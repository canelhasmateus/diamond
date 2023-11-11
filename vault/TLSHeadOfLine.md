---
kind:
tags:
---

# TLSHeadOfLine

\[\[TLS]] can introduce \[\[HeadOfLineBlocking]] blocking if used to encrypt larger amounts of data:

- TLS can encrypt up to 16KB of data. This is enough to fill about 11 typical TCP packets.
- If the first 10 packets get through, but the last one gets lost, browsers still need to wait for the last one to arrive before starting processing.

There is also an interaction between TCP  and HTTP implementation.

## References

- [Web Performance Calendar  Head-of-Line Blocking in QUIC and HTTP/3: The Details](https://calendar.perfplanet.com/2020/head-of-line-blocking-in-quic-and-http-3-the-details/)
