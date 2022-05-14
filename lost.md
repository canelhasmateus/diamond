
 Https migration

    Why take so long to migrate everything?

    Unknwons : 
        . The numbers of request would increase; 
            .. https redirections
            .. increased crawl rates by engines 
        . Since they didn't know how much, they done it slowly, while setting up monitoring. 
            .. More 301's 
     Blocking issues: 
        . There were No tests for the transition;~
        . Needed the change to be made at the same time  ; why ?[[expand ]]
        
        . Affected the display of advertisements, which would mean a meaningful impact on revenenue. 

Strategies:

    . Started rolling to logged in users first, since it would not affect engine crawling. 
    . Wrote tests to catch mixed content warning or http links on the page. 
    . Migration page by page, behind a toggle that served https pages only to logged in users. 
        .. several users still had stale pages , from cachee, so needed to support http urls for a period after the flip. 

Around 150% increased requests only;
Some distruptionb because of the way the cache headers were setup:
    . http was being cached, and https was not.

___

<https://www.youtube.com/watch?v=6cncmSaRqzQ>

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
    ___

    Intercepting and decrypting https traffic with wireshar

SSLKEYLOGFILE environment variable is a path of textfile we can acces.
Software that implements tls with typically write keys and others tls secrets to this file. This applies to curl chrome firefox and other desktop apps that use opensll libs.

We can configure wireshark to read this file and decrypt the intercepted tls packets.

<https://www.trickster.dev/post/decrypting-your-own-https-traffic-with-wireshark/>

___

<https://www.youtube.com/watch?v=qpC1YH0FhuY>
