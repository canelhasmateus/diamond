# ProtocolHTTP

HTTP is a #stateless #protocol - that is - it does not store anything anywhere.

## Http1

To implement the stateless protocol, the original creators of the HTTP protocol implemented the [[OneOutstandingRequest]] rule. It establishes that only one #request must be in flight for each underlying transport #connection.

> This was necessary for #abstraction: the underlying transport protocol doesn't necessarily support multiple requests at the same time.

___
> #todo
This Was  also done to save [[memory]], since long running [[ProtocolTCP]] connections take up memory
     Is this true?
    .. only long running? why? [[expand]]
___

> This is #inefficient: the usual transport used - [[ProtocolTCP]] - offers big amounts of #bandwidth, which ends up #underutilized.

[[Browsers]] try to work around this OneOutstandingRequest rule, by creating an [[ResourcePooling]] of usually 6 to 10 TCP connections.

This allows some degree of #concurrency, speeding up the loading of pages. However, any more additional requests must be #queued at the client-side, leading to the classical waterfall look at [[DevTools]] network tab.

> The [[HeadOfLineBlocking]], alongside the 6 maximum per-host connections, resulted in a form of [[PatternCooperativeThrottling]]

[[Http 1.1]]

Http 1.1 came soon after the first implementation. This was necessary to maintain #persistent TCP connections: otherwise, a new connection is needed for each request-response cycle

___

[[Http 2]] offers various improvements over the previous generations.

First, it is #secure by default, and enables protocol negotiation during the [[ProtocolTLS]], utilizing [[ALPN]].

> This means that the upgrade to http2 happens during the [[TLSNegotiation]], which saves a round trip.
___
> #todo
How, why? [[expand]]
What is [[Hpack]]? [[ expand]]
we tried to solve the streams with "[[pipeling]]", but what the hell is that?[[expand]]
___

It also supports Binary [[compression]] for #headers, decreasing the necessary bandwidth.

Another big improvement comes in the form of [[Multiplexing]] TCP Connections.

This allows multiple requests to be done using the same TCP connection, bypassing the [[OneOutstandingRequest]] rule.

This decreases #latency since the usual #overheads of establishing TCP connections, such as [[ThreeWayHandshake]] and [[TLSNegotiation]] are not necessary to be done multiple times.

This is achieved by adding #headers to each #Ethernet frame, which contains a  [[StreamNumber]], alongside additional data. By interleaving different stream frames, this number enables the sending of #data in either direction, better utilizing the TCP bandwidth.
___
> #todo
why compression was not possible before? [[expand]]

Does this mean that http2 is not stateless anymore? [[expand]]

Where is this data added? How? At which [[OSI Model]] layer level? does it hurt or change compatiblity in any way? [[expand]]
___

One of the pieces of data that are added is a so-called [[StreamWeight]], and [[ParentStream]].

> These provide mechanisms to indicate the preferred order of data ingestion, which makes [[CriticalPath]] requests faster.
> It is also necessary to prevent responses from competing for bandwidth.

Of course, this requires more #cpu, since we need to #sort these packets into their corresponding streams before assembling the request.

Http2 doesn't solve everything. For example, it still suffers from [[HeadOfLineBlocking]], this time at the TCP level.

___
> #todo
Google http 2 cpu and http 1 slow start?  [[expand]]
___

[[ServerPush]] is also a #feature of http2.

It enables the server to send yet-unrequested information, that is usually fetched together.

* Server push can be abused when configured incorrectly, as it needs a server-push-aware client.

```example
The server can send both index.html, main.js and global.css when requested for index.html.
```

___

## [[Http 3]]

[[HeadOfLineBlocking]] is a fundamental #limitation of the TCP Protocol.

Http3, also known as [[ProtocolQuic]], uses [[ProtocolUDP]] as an underlying transport mechanism.

Of course, it also presents some problems:

Since most of its features happen in userspace, it requires switching between user and #kernel #contexts

This means that it has serious #performance issues when compared with in-kernel protocols, and high #jitter under #load.

It does not implement any form of [[NetworkFairness]] and [[CongestionControl]]. As such, it can easily throttle down competing TCP sessions.

___

References

1. <https://www.youtube.com/shorts/Fbmru6iSee8>
2. <https://www.youtube.com/watch?v=6cncmSaRqzQ>
3. <https://www.youtube.com/watch?v=6cncmSaRqzQ>
