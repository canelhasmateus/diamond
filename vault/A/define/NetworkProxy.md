# NetworkProxy

A proxy is a piece of #software that makes an #request on behalf of a client.

Proxies have a variety of use cases:

* Block #Websites
  enterprises and #ISP use proxies to block #malicious or unwanted websites.

* [[Caching]]

* [[Anonymity]]
  The final destination does not know the originating #client. Mind that proxying just #transfers anonymity - the proxy is now the one who knows the identity of the real client.

> This can be seen as [[PatternZeroSum]].

* [[Log]]:  Being a funneling channel, the proxy can log #requests. This can be useful in the context of [[SoftwareMicroservices]], to provide [[SoftwareObservability]], [[CircuitBreakers]] and [[ProtocolHTTP]] upgrading. This can be seen as a form of #segregation and #modularity.

___

Layer 7

Naively, to forward the requests, the proxy needs to take a look at the #data.

Also known as #application-level proxies. They're usually very flexible.

___

Layer 4

Also known as #stream or #byte proxies. They're usually less #flexible but #faster than their Layer 7 counterparts.

Being restricted to use only [[ModelOSI]] Layer 4 #information, the proxy has only two pieces of data to work with:

* [[IpAddress]]
* [[Port]] Number

This can happen by #design, or because the application layer content is #encrypted due to mechanisms such as [[ProtocolTLS]].

A Layer 4 proxy will look at TLS requests and transparently forward them. Of course, this is only one of the #implementations. It is also possible to do [[TLSTermination]]

There exist several software tools that implement proxying functionality.

* [[HAProxy]]
* [[Envoy]]
* [[Nginx]]
* [[Istio]]
* [[Linkerd]]
* [[Caddy]]

___

* Can a proxy and a [[ReverseProxy]] be used at the same time?

    Yes, this is called a [[ServiceMesh]].
    It is very common in [[SoftwareMicroservices]] architectures to build the #network features of the application in the proxy, instead of making the application worry about [[timeouts]] and [[CircuitsBreaking]].

* Can I use a proxy instead of [[VirtualPrivateNetwork]]s for anonymity?
  
  Yes, but usually VPNs are more secure since they operate at a Lower Level ([[IPSec]])and can see only your #domain. Some proxies can see more than the domain if they do [[TLSTermination]]
  
  > To verify, go to the #browser padlock and see that the content is being served by the final destination, not the proxy.
  
* Can I proxy traffic other than [[ProtocolHTTP]]?
  
  Yes, there are multiple types of proxy, like [[SocksProxy]], used for [[Tunneling]].

___

> #todo

* How does a reverse proxy react to an SYN?

  * Does it merely forwards the request?
  * Does the RP itself reply while establishing a TCP between itself and the backend in the background?

___

References

1. <https://www.youtube.com/watch?v=iLHhL-vAPqo>
2. <https://www.youtube.com/watch?v=SqqrOspasag>
3. <https://www.youtube.com/watch?v=ylkAc9wmKhc>
https://www.youtube.com/watch?v=dOa_XfOvp9Q