---
kind:
tags:
---

# HttpStreams

[[HTTP2]] Introduces a new concept - Streams.

This is achieved by adding headers to each [[EthernetFrame]], which contains a stream Number alongside additional data.

By interleaving different stream frames, this number enables the sending of data in either direction, better utilizing the [[TCP]] bandwidth.

It also decreases latency since the usual overheads of establishing TCP connections, such as [[ThreeWayHandshake]] and [[TLS]] negotiations can be done a single time.

One of the pieces of data that are added is a so-called `Weight` and a `Parent`.

These provide mechanisms to indicate the preferred order of data ingestion, which makes [[CriticalPath]] requests faster. It is also necessary to prevent responses from competing for bandwidth.

Of course, this requires more CPU, since we need to sort these packets into their corresponding streams before assembling the request.

>> #todo
    why compression was not possible before?
    Does this mean that http2 is not stateless anymore?
    Where is this data added? How? At which [[ModelOSI]] layer level? does it hurt or change compatiblity in any way?
