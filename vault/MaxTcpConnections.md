
# MaxTcpConnections

What is the maximum number of [[TCP]] connections that a server can receive?

To establish a connection all the following is necessary:

* ClientIp
* ClientPort
* ServerIp
* ServerPort

However, the [[PacketTCP]] header assigns only 16 bits to port information.
That means a client can only have 65k connections to a server.

This also applies to [[NetworkProxy]] and [[NetworkReverseProxy]], since they are clients in regards to the backend serevr.

> #todo can layer 4 proxies use the http2 multi-channelling?

## References

[Is there a Limit to Number of Connections a Backend can handle?](https://www.youtube.com/watch?v=o-EkdZW4zbA)
