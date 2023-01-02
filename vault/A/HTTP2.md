---
created_on: 2023/01/02 17:28
kind:
tags:
---

# HTTP2

## Http2

It is secure by default, and enables protocol negotiation during the [[ProtocolTLS]], utilizing [[ALPN]].

> This means that the upgrade to http2 happens during the [[TLSNegotiation]], which saves a round trip.

It also supports Binary [[compression]] for headers, decreasing the necessary bandwidth.

Another big improvement comes in the form of [[Multiplexing]] TCP Connections.

This allows multiple requests to be done using the same TCP connection, bypassing the [[OneOutstandingRequest]] rule.

This decreases latency since the usual overheads of establishing TCP connections, such as [[ThreeWayHandshake]] and [[TLSNegotiation]] are not necessary to be done multiple times.

This is achieved by adding headers to each Ethernet frame, which contains a  [[StreamNumber]], alongside additional data. By interleaving different stream frames, this number enables the sending of data in either direction, better utilizing the TCP bandwidth.

>> #todo
    why compression was not possible before?
    Does this mean that http2 is not stateless anymore?
    Where is this data added? How? At which [[ModelOSI]] layer level? does it hurt or change compatiblity in any way? [[MetaExpand]]

One of the pieces of data that are added is a so-called [[StreamWeight]], and [[ParentStream]].

> These provide mechanisms to indicate the preferred order of data ingestion, which makes [[CriticalPath]] requests faster.
> It is also necessary to prevent responses from competing for bandwidth.

Of course, this requires more cpu, since we need to sort these packets into their corresponding streams before assembling the request.

Http2 doesn't solve everything. For example, it still suffers from [[HeadOfLineBlocking]], this time at the TCP level.

___
> #todo
    Google http 2 cpu and http 1 slow start?  [[MetaExpand]]
    What is [[ProtocolHpack]]? [[MetaExpand]]
