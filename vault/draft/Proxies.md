TLS  passthrough at Layer 4 Proxy

L4 Proxying:
    The ability for the proxy to only look at L4 content:
        . Ip Address
        . Port

    When  doing that, not allowed to look at the content. Specially because most of the time, the L7 content, such as body and headers are going to be encrypted.

Suppose you're a client, and there is a server. 
You conncet to the server through a Reverse Proxy. 
~> You do a SYN . What happens then?
    Does the RP iotself replies and at the background it stablishes a tcp between itself and the backend?
    Does it merely forwards the request?
    
    There are pros and cons for each approach.

After stablishing tcp connectiion, we need to stablish a tls connection. Who is gonna respond to your tls request?
As a reverse proxy, we can either
    . Respond to the client with your own certificate and tls parameters ( TLS Termination , need to put the private key and certificate in the reverse proxy, but you do not always own it. )
        .. This gives the RP the ability to crack the encryption and 
        .. technically not termination 
    . TSL Passthrough is when , through the (SNI? eSNI?) , the Reverse Proxy just forwards the tls request, but can't decrypt the  content; This makes it operate just like L4 proxy. 

https://www.youtube.com/watch?v=iLHhL-vAPqo



# 




Proxies

A proxy is a software that makes a request on behalf of a client. 


Use cases:

    Block Websites
        Some enterprises and ISP use proxies to block unwanted  websites. 
    
    Caching
    
    Anonymity: The final destination does not known the originating client ( Just transfers anonimity, since the proxy is now the only who  knows ). 

    Logging: 
        Can log everybody requests, 

    Microservices
        Especially side car proxies. Make it take care of networking stuff, such as upgrading http protocols, circuit breaking, 

Take your requests, passes it. 
Thus, the proxy needs to look at the data. 





Reverse Proxies
    
    The reverse of a proxy: In a normal proxy, the server does not know the client. In a reverse proxy, the client does not known the final destination server. 

    
    Use Cases

        Caching

        Load Balancing
            

        Ingress:
            Hey, you talk to me sir,  and if you wanna access the pictures api, it can route requests. 

        Canary
            Try out new versions by sending small amounts of traffic to them. 

        Microservices
            
    

    HAProxy
    Envoy
    Ngins
    Istio
    Linkerd
    Caddy

Your final destination as a user, but you do no tknow which server  you're hitting. 

Can a proxy and a reverse proxy be used at the same time?
    . yes, this is called a service mesh
    . Used in microservices architectures to build the networking features of the application in the proxy, instead of making the application worrry about 
    timeouts and circuits breaking

Can i use a proxy instead of bpn for annonimity?
    . Yes, but usually vpns are more secure since they operate at a lower level, and can see only your domain
    . Some proxies can see not only the domain, if they're  TLS-terminating . 
        .. Go to the padlock and see that the content is being served by the final destination, not the proxy. 
    . VPNS just transfer your anonimity from the isp to the vpn. 


Can i use proxxy for traffic other than http?
    yes,. there are multiple types of proxy, like socks proxy, used for tunnelings, there are http proxy, that only tunnels for https;.

https://www.youtube.com/watch?v=SqqrOspasag
#





# L4 vs L7 reverse proxies
    

L4 ( TCP / Stream ): Packet or Stream Proxying 
L7 ( HTTP ): Application Layer Proxying 

For a L7 proxy, it needs to understand the request, 
    Each re3quest has its own connection
    which means that it can only proxy the request after acking all underlying packets. The same goes for the request. 

    Further requests in the same connection can potentially stablish new connections, with different servers, since http is a stateless protocol. 

For a L4 Proxy
    it doesn't need to wait for the assembly 
    of the whole request: Since it doesn't need to know details, it can immediatelly send the packets to the downstream server.

    Additionally, further requests re-utilize the same previous stablished tcp connection: TCP is NOT a stateless protocol. 


We can't do intelligent things while proxying blindly. 

Can we do a time diagram of these? [[expand]]



How about TLS?
    
    A Layer 4 proxy will look at tls requests  and just transparently pass it .
        . Only one implementation. We can also terminate TLS 
    

https://www.youtube.com/watch?v=ylkAc9wmKhc



