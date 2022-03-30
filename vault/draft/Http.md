


Http 1



Http 2


# ... 

        https://www.youtube.com/shorts/Fbmru6iSee8

https://www.youtube.com/watch?v=6cncmSaRqzQ

HTTP
    Request - Response Protocol
    Does not store anything anywhere == stateless
        This is where the Http 1.0 makes a mistake:
            Design so that you can statellessly send a request, but requires a re-stablishing the TCP protocol everytime 
                . To be truly stateless.
                . Save memory ( Long running TCP connectoins use resources )
                    .. Only long running?



https://www.youtube.com/watch?v=6cncmSaRqzQ

Turning HTTP 2 was a mistake

    Binary compression for headers
    decreases latency by multiplexing requests
    allows client to specify priorities for requests 
    

    In this case, they switched the protocol only at the client side of the load balancer , while the load balancer to cdn and cdn to backend was stilll on http 1
    
    usually, when on http1, the broswer opens 6-10 connections , which stablishes a upper limit of parallelism for request. Any further requests must tbe queueed at the client side. 

    When the load balancer switched to http 2 ( at the front side ) , a sudden load appeared at the backend 
        This means an single tcp connection can handle around 100 requests

        Since the load balancer receives 100 requests, 
            and the backend works with http1 , which requires a tcp connection for every request, 
                the load balancer opens 100 tcp connections 
    
    logically speaking, sure , http2 will consume more resources ( cpu )
        At the Application  level , it is reading packets and waiting for them to be assembled into streams 
            -> Sorting and working with these streams can consume more resources
            -> Google http 2 cpu and http 1 slow start? 
            




### 

http2
    
    multiplexing, stram priorities, hpack
        Every frame has its own number plus the stream number
            Can be sent in either direction interleaved with frames of other streams
                utilize as much of the tcp bandwidth as possible
        Stream Priorites and dependencies
            A stream can be assigned a weigth and a parent stream
                provides a means of telling the preferred order of data ingestion, optimized for rendering
                    necessary because otherwise, responses compete for bandwidth

    riginal sin of http:>
        Head of line Blocking
            Only one outstading http request per tcp connectin
                wasters time
        good idea to run a reverse proxy or cache like varnish behind your h2 layer in order to protect your application servers
            In http1, the HOL and the six connections per host resulted in a cooperative throttling
                No moroe than six simultaneous requests from any one colient
        
    possible problems
        using HAproxy is easy, but it silently introduces a new tcp buffer
            the cache spits out payload as quickly as possible, and the server sends data frames with the highest stream priority first
                The Load Balancer foils this, since, as long as its tcp buffer ius not completely filled, the lb will accept more data from the server : This quickly drains the server buffer, but from there on out, the priorization does not work anymore.

        HOL blocking
            Http2 solves the http head of line problem, it still suffers from tcp hol blocking : 
                tcp buffers are serialized fifos. this means that , once something is in that queue , you need to download it before going to the next one
                    .. Shouldn't multiplex solve this? 
    


    https://calendar.perfplanet.com/2018/http2-hol-waterfall/

# ... 


Http 2 limitation

    
    TCP limitation:
        Head Of Line Blocking
    
    How does a get requests get translated in the network stack?
        . It will be translated as a stream of bytes ( few packets ) in the Client - Server Bidrectional TCP connection 
        . The Server has to acknowledge all the packets, and only then assemble then into a request , IF AND ONLY IF all packets get through.

        . However, if one of the packets doesn't get acknowledged in a certain time, the client retries sending it.

        . When using HTTP2's multiplexing, what happens is that the server cannot differentiate the bytes from different streams when assembling the requests.
            .. If we send 2 requests, and all of the packets for the second one gets acknowledge, but a single packet from the first request doesn't, we cannot proceed with any of the two requests, until the lost packet gets acknowledged.

        . Quic 
            . Userspace design, requires switching between user and kernel contexts
            . serious performance issues when comparing with in kernel protocols, and high jitter under load.
            . network fairness is a problem, and quick can easily throttle down competing tcp sessions. 



http2 pros
    Multiplex
    Compression of both headers and data
    server push
    secure by defauly
    protocol negotiation during tls ( ALPN )
        . Upgrade to http2 happens during tls
http2 cons
    Server push can be abused when configured incorrectly
    can be slower when in mixed mode ( backed is h2 but lb is h1 and vice versa => Can use a L4 lb to circunvent)



we tried to solve the streams with "pipeling", but what the hell is that

