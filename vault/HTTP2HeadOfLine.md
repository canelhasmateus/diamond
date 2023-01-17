---
kind:
tags:
---

# HOLBlockHttp2

For [[HTTP2]], [[HeadOfLineBlocking]] happens because of fundamental mechanisms of the [[TCP]]:

Requests are translated as a stream of bytes ( few packets ) in the client-server TCP connection.

The server will then assemble the packets into a request, *but only after every packet is acknowledged.*

This is done in order to allow the client to resend it in case of lost packets

When using Http2 [[Multiplexing]], the underlying TCP connection cannot differentiate the bytes from different streams when assembling the requests.

## Example

Suppose we send 2 requests, while Http-multiplexing.

Suppose also, that all of the second request packet's get acknowledgeded, but a single packet from the first requests doesnt.

Since the underlying tcp connection can't differentiate between these two packets, the second request gets stalled until the lost packet from the first (unrelated) request gets acknowledged.

> #todo create mermaid
