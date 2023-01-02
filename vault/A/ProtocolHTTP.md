---
tags:
    - network
    - fact
---
# ProtocolHTTP

HTTP is a stateless protocol - that is - it does not store anything anywhere.

![[HTTP1]]
___

![[HTTP2]]
___

![[HTTP3]]
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

## References

1. [HTTP in 60 Seconds - Hypertext Transfer Protocol #shorts_hussein](https://www.youtube.com/shorts/Fbmru6iSee8)
2. [The Biggest Flaw of HTTP 1.0 in 60 Seconds #shorts_hussein](https://www.youtube.com/watch?v=6cncmSaRqzQ)
3. [Wiresharking Server-Sent Events](https://www.youtube.com/watch?v=FUL_Buud7jY)
4. [Server-Sent Events Crash Course](https://www.youtube.com/watch?v=4HlNv1qpZFY)

