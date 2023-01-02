# ProtocolHTTP

HTTP is a stateless protocol - that is - it does not store anything anywhere.

## Http1

Http 1 started with a simple premise: a new TCP connection must be established for each request-reponse cycle.

This proved to be an mistake, and the 1.1 version came right after.

> This is inefficient: the usual transport used - [[ProtocolTCP]] - offers big amounts of bandwidth, which ends up underutilized.

> The [[HeadOfLineBlocking]], alongside the 6 maximum per-host connections, resulted in a form of [[PhenomenaCooperativeThrottling]]

## Http1.1

In this version, we keep persistent TCP connections, but implement the [[OneOutstandingRequest]] rule: It establishes that only one request must be in flight for each underlying transport connection.

> This was necessary for abstraction: the underlying transport protocol doesn't necessarily support multiple requests at the same time.

>> #todo
     This Was  also done to save [[memory]], since long running [[ProtocolTCP]] connections take up memory.
     Is this true? only long running? why? [[MetaExpand]]

[[Browsers]] try to work around this OneOutstandingRequest rule, by creating an [[ResourcePooling]] of usually 6 to 10 TCP connections.

This allows some degree of concurrency, speeding up the loading of pages. However, any more additional requests must be queued at the client-side, leading to the classical waterfall look at [[DevTools]] network tab.

___

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

## Http3

[[HeadOfLineBlocking]] is a fundamental limitation of the TCP Protocol.

Http3, also known as [[ProtocolQuic]], uses [[ProtocolUDP]] as an underlying transport mechanism.

Of course, it also presents some problems:

Since most of its features happen in userspace, it requires switching between user and kernel contexts

This means that it has serious performance issues when compared with in-kernel protocols, and high jitter under load.

It does not implement any form of [[NetworkFairness]] and [[CongestionControl]]. As such, it can easily throttle down competing TCP sessions.

___
## ServerPush

[[ServerPush]] is also a feature of http2.

It enables the server to send yet-unrequested information, that is usually fetched together.

* Server push can be abused when configured incorrectly, as it needs a server-push-aware client.

```example
The server can send both index.html, main.js and global.css when requested for index.html.
```

## Server-Sent Events

Offers a uni-directional stream of data, from the server to the client. To create:

1. client sends : HTTP Get { Content-Type = text/event-stream }
2. server returns : { Content-Type = event-stream ; Transfer-encoding = chunked }

Use Cases:

* Live feeds
* Showing client progress
* Logging

## Websockets

Offer full duplex channels. To create one:

1. client sends an HTTP Get 1.1 --upgrade
2. Server return returns with 101 such as switching protocol.

___

References

1. <https://www.youtube.com/shorts/Fbmru6iSee8>
2. <https://www.youtube.com/watch?v=6cncmSaRqzQ>
3. <https://www.youtube.com/watch?v=FUL_Buud7jY>
4. <https://www.youtube.com/watch?v=4HlNv1qpZFY>
