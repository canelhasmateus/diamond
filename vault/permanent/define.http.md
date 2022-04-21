

Http is a [[Software Protocols]]. 
It is [[stateless]] , that is, it does not store anything anywhere.

[[Http 1]]


To implement the stateless protocol, the original creators of the http protocol implemented a rule, so called the "One outstanding request". Only one http [[request]] must be in flight for each underlying transport connection.



This was necessary to abstract away the underlying transport protocol, since it doesn't necessarily supports  multiple requests at the  same time.

[[theory]] This Was  also done to save [[memory]], since long running [[tcp]] connections take up memory
    . . Is this true?
    .. only long runningw? why? [[expand]]


This is inneficient, since the usual transport protocol , [[TCP]], offers big amounts of [[bandwidth]] , but ends up underutilized. 


Browsers try to work around  the "One Outstanding Request" rule, by creating a [[pool]] of usually 6 to 10 tcp connections. This allows some degree of [[concurrency]], speeding up the loading of pages. However, any more additional requests must be [[queued]] at the client side, leading to the classical waterfall look at dev tools network. 

The [[Head of line Blocking]], alongside the 6 maximum per-host connections, resulted in a form of [[Cooperative Throttling]]

[[Http 1.1]]



[[Http 2]] offers various improvements over the previous generations. 

First, its safe by default, thanks to the use of [[TLS]]. 


Another big improvement comes in the form of Multiplexing [[TCP]] Connections. This allows multiple requests to be done using the same tcp connection, bypassing the "[[One Outstanding request]]" rule. 

This decreases [[latency]], since the usual overheads of stablishing tcp connections, such as [[handshakes]] and [[tls negotiation]] are not necessary to be done multiple times. 
    .. Does this mean that http2 is not stateless anymore? [[expand]]


This is achieved by adding headers to each ethernet frame, which contains a so called "Stream Number", alongside additional data. 

This enables the sending of [[data]] in either direction, while interleaving different streams frames. This makes it possible to better utilize the tcp bandwidth. 
    . Where is this data added? How? At which [[OSI Model]] layer level? does it hurt or change compatiblity in any way? [[expand]]

One of the pieces of data that are added is a so called "Stream Weight", and "Parent Stream". 

These provide mechanisms to indicate preffered order of data ingestions, which makes [[critical path]] requests faster. 

It is also necessary to prevent responses competing for bandwidth.


Of course, this requires a bit more [[cpu]] , since we need to sort these [[packets]] into their corresponding streams before assembling the request. 
    . Google http 2 cpu and http 1 slow start?  [[expand]]



Of course, Http2 doesn't solve everything. For example, it still suffers from [[Head of line blocking]].

It also supports Binary [[compression]] for headers , decreasing the necessary bandwidth
    . How? Why was this not possible before? [[expand]]

[[Server push]] is also a feature of http2. It enables the server to send yet-unrequested information , that is usually fetched together, for example : The server can send both index.html, main.js and global.css when requested for index.html
    . Server push can be abused when configured incorrectly, as it needs a server-push aware client. 

    
It is also secure by default, and enables protocol negotiation during the TLS, by means of [[ALPN]]. This means that the upgrade to http2 happens during the tls negotiation, which saves a round trip. 
    . How, why? [[expand]]



What is [[Hpack]]? [[ expand]]

we tried to solve the streams with "[[pipeling]]", but what the hell is that?[[expand]]



. Problems

    Http2 interactions with comomn [[Software Architecture]] patterns can be problematic:
        
    can be slower when in mixed mode ( backed is h2 but lb is h1 and vice versa => Can use a L4 lb to circunvent)


[[Http 3]]


[[Software Phenomena#Head of line blocking]] is a fundamental limitation of the TCP Protocol. 

Thus, Http 3 , also known as [[quic]], uses [[UDP]] as an uderlying transport mechanism.

Of course, it also presents some problems:


Since most of quic's features happen in userspace, it requires switching between user and [[kernel]] contexts

This means that it has serious [[performance]] issues when comparing with in kernel protocols, and high [[jitter]] under load.

It does not implement any form of network fairness and network control. As such, it can easily throttle down competing tcp sessions. 


___ 
References

https://www.youtube.com/shorts/Fbmru6iSee8
https://www.youtube.com/watch?v=6cncmSaRqzQ
https://www.youtube.com/watch?v=6cncmSaRqzQ




