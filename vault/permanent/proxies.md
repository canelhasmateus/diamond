# Proxies

A proxy is a piece of [[software]] that makes an [[request]] on behalf of a client.

Proxies have a variety of use cases:

* Block [[Websites]]: enterprises and [[ISP]] use proxies to block malicious or unwanted websites.

* [[Caching]]

* [[Anonymity]]: The final destination does not know the originating client. Mind that proxying just transfers anonymity - the proxy is now the one who knows the identity of the real client.

> :bulb: This is an realization of [[ Zero-Sum ]].

* [[Logging]]:  Being a funneling channel, the proxy can log requests. This can be useful in the context of [[Microservices]], to provide [[observability]], [[Circuit Breakers]] and [[Http]] upgrading. This can be seen as a form of [[ segregation]] and [[modularity]]. A [[separation of concerns]]

___

Layer 7

Naively, to forward the requests, the proxy needs to take a look at the [[data]].

Also known as [[application-level proxies]]. They're usually very flexible.

[[expand]]

___

Layer 4

Also known as Stream or [[Byte Proxies]]. They're usually less [[flexible]] - but [[faster]] - than their Layer 7 counterparts.

Being restricted to use only [[OSI Model|Layer 4]] information, the proxy has only two pieces of data to work with:

* [[Ip]] Address
* [[Port]]

This can happen by design, or because the application layer content is [[encryption|encrypted]], thanks to the use of techniques such as [[TLS]].

A Layer 4 proxy will look at [[TLS]] requests and transparently forward them. Of course, this is only one of the implementations. It is also possible to terminate the TLS.

___

* Can a proxy and a [[reverse proxy]] be used at the same time?

  * Yes, this is called a [[Service Mesh]]

    It is very common in  [[microservices]] architectures to build the [[networking]] features of the application in the proxy, instead of making the application worry about [[timeouts]] and [[circuits breaking]].

* Can I use a proxy instead of [[VPN]]s for anonymity?
  * Yes, but usually VPNs are more secure since they operate at a Lower Level and can see only your domain

    Some proxies can see not only the [[domain]] if they're  [[TLS-terminating]] * To verify, go to the padlock and see that the content is being served by the final destination, not the proxy.

    > VPNS just transfer your anonimity from the isp to the vpn.

* Can I proxy traffic other than [[HTTP]]?
  * Yes, there are multiple types of proxy, like [[socks proxy]], used for [[tunnelings]]

    [[HAProxy]]

    [[Envoy]]

    [[Nginx]]

    [[Istio]]

    [[Linkerd]]

    [[Caddy]]

___

> [[:research:]]

* How does a reverse proxy react to an SYN?

  * Does it merely forwards the request?
  * Does the RP itself reply while establishing a TCP between itself and the backend in the background?

___

References

* <https://www.youtube.com/watch?v=iLHhL-vAPqo>
* <https://www.youtube.com/watch?v=SqqrOspasag>
* <https://www.youtube.com/watch?v=ylkAc9wmKhc>
