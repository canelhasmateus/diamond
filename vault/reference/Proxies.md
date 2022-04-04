A proxy is a piece of [[software]] that makes a [[request]] on behalf of a client. 

Proxies have a variety of use cases:

* Block Websites: Some enterprises and [[ISP]] use proxies to block malicious or unwanted  websites. 

* [[Caching]]

* [[Anonymity]]: The final destination does not known the originating client. Mind that proxying just transfer anonimity - the proxy is now the one who knows the identity of the real client. 

* [[Logging]]:  Being a funneling channel , the proxy can log  requests. This can be useful in the context of [[Microservices]], to provide [[Observability]], [[Circuit Breakers]] and [[http]] upgrading.
    .. This can be seen as a form of [[ segregation]] and [[modularity]]. A [[separation of concerns]]

___ 

Layer 7


Naively, to forward the requests, the proxy needs to take a look at the [[data]]. 


Also knwon as application level proxies. They're usually very flexible. [[expand]]

Layer 4 

Also known as Stream or Byte Proxies. They're usually less flexible - but [[faster]] - than their Layer 7 counterparts. 

Being restricted to use only [[OSI Model|Layer 4]] information, the proxy has only two pieces of data to work with:

. [[Ip Address]]
. [[Port]]

This can happen by design, or because the application layer content is [[encryption|encrypted]], thanks to use of techniques such as [[TLS]].


___ 

Can a proxy and a [[reverse proxy]] be used at the same time?

Yes, this is called a [[Service Mesh]]

* Very common in  [[microservices]] architectures to build the [[networking]] features of the application in the proxy, instead of making the application worrry about 
timeouts and circuits breaking.


    
Can i use a proxy instead of [[VPN]]s for anonimity?

Yes, but usually vpns are more secure since they operate at a [[IPSEC|lower level]], and can see only your domain
* Some proxies can see not only the domain, if they're  [[TLS-terminating]]. To verify, go to the padlock and see that the content is being served by the final destination, not the proxy. 
    * VPNS just transfer your anonimity from the isp to the vpn. 


Can i proxy traffic other than [[HTTP]]?
    * Yes , There are multiple types of proxy, like socks proxy, used for tunnelings, there are http proxy, that only tunnels for https;.
    * [[expand]]

    
[[HAProxy]]
[[Envoy]]
[[Nginx]]
[[Istio]]
Linkerd
Caddy





# References

https://www.youtube.com/watch?v=iLHhL-vAPqo
https://www.youtube.com/watch?v=SqqrOspasag
https://www.youtube.com/watch?v=ylkAc9wmKhc





# ... 



How about TLS?
    
    A Layer 4 proxy will look at tls requests  and just transparently pass it .
        . Only one implementation. We can also terminate TLS 
    

Suppose you're a client, and there is a server. 
You conncet to the server through a Reverse Proxy. 
~> You do a SYN . What happens then?
    Does the RP iotself replies and at the background it stablishes a tcp between itself and the backend?
    Does it merely forwards the request?    
    There are pros and cons for each approach.

After stablishing tcp connectiion, we need to stablish a tls connection. Who is gonna respond to your tls request?

