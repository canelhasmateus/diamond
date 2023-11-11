# HttpPipelining

HTTP pipelining is a feature of HTTP/1.1 which allows multiple HTTP requests to be sent over a single TCP (transmission control protocol) connection without waiting for the corresponding responses.\[1] HTTP/1.1 specification requires servers to respond to pipelined requ'ests correctly, sending back non-pipelined but valid responses even if server does not support HTTP pipelining. Despite this requirement, many legacy HTTP/1.1 servers do not support pipelining correctly, forcing most HTTP clients to not use HTTP pipelining in practice.

The technique was superseded by multiplexing via HTTP/2,\[2] which is supported by most modern browsers.\[3]

In HTTP/3, the multiplexing is accomplished through the new underlying QUIC transport protocol, which replaces TCP. This further reduces loading time, as there is no head-of-line blocking anymore.

___

Pipelining was introduced in HTTP/1.1 and was not present in HTTP/1.0.\[11]

It looks like that since the beginning, implementing HTTP pipelining properly and / or deploying it has never been an easy task for anybody (excepted for developers of web servers). There have always been complaints about browsers, proxy servers, etc. not working well when using pipelined requests / responses, up to the point that for many years (at least till 2011) software developers, engineers, web experts, etc. tried to summarize the various kind of problems they noted, to fix things and to give advices about how to deal with pipelining on the Open Web.\[8]

Implementation in web servers
Implementing pipelining in web servers is a relatively simple matter of making sure that network buffers are not discarded between requests. For that reason, most modern web servers (that fully implement HTTP/1.1) handle pipelining without any problem.

___

he pipelining of requests results in a dramatic improvement\[4] in the loading times of HTML pages, especially over high latency connections such as satellite Internet connections. The speedup is less apparent on broadband connections, as the limitation of HTTP 1.1 still applies: the server must send its responses in the same order that the requests were received—so the entire connection remains first-in-first-out\[1] and HOL blocking can occur.

The asynchronous operation of HTTP/2 and SPDY are solutions for this.\[5] Browsers ultimately did not enable pipelining by default, and by 2017 most browsers supported HTTP/2 by default which used multiplexing instead.\[2]

Non-idempotent requests, like those using POST, should not be pipelined.\[6] Sequences of GET and HEAD requests can always be pipelined. A sequence of other idempotent requests like PUT and DELETE can be pipelined or not depending on whether requests in the sequence depend on the effect of others.\[1]

HTTP pipelining requires both the client and the server to support it. HTTP/1.1 conforming servers are required to support pipelining. This does not mean that servers are required to pipeline responses, but that they are required not to fail if a client chooses to pipeline requests.\[7]

Most pipelining problems may happen in HTTP intermediate nodes (hop-by-hop), i.e. mainly in proxy servers (proxies), specially in transparent proxy servers (because they are used anyway without requiring user client configuration, so if only one of them, along the HTTP chain, does not handle pipelined requests properly then nothing works as it should).\[8]

Using pipelining with HTTP proxy servers is usually not recommended also because the HOL blocking problem may really slow down a lot proxy server responses (as the server responses must be in the same order of the received requests).\[1] \[9]

Example: if a client sends 4 pipelined GET requests to a proxy through a single connection and the first one is not in its cache then the proxy has to forward that request to the destination web server; if the following three requests are instead found in its cache, the proxy has to wait for the web server response, then it has to send it to the client and only then it can send the three cached responses too.

If instead a client opens 4 connections to a proxy and sends 1 GET request per connection (without using pipelining) then the proxy can send the three cached responses to client in parallel before the response from server is received, decreasing a lot the overall completion time (because requests are served in parallel with no head-of-line blocking problem).\[10] The same advantage, but with more speed, happens in HTTP/2 multiplexed streams.

___

References

1. <https://en.wikipedia.org/wiki/HTTP_pipelining>
