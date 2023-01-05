---
tags:
    - network
    - security
    - fact
---

# HSTS

The HTTP Strict Transport security is a policy mechanism that helps protect against [[SoftwareSecurity]] attacks, such as

* [[AttackMitM]]
* [[AttackProtocolDowngrade]]
* [[AttackCookieHijacking]].

It allows web servers, browsers and other complying user agents to automatically interact with some domains in a secure-only manner.

A server implements HSTS policy by supplying headers over an [[ProtocolHTTP]]s connection, which specifies that future requests to that domain must be made via HTTPS for the agreed period.

> Strict-Transport-Security: max-age=31536000.

when receiving such a header, a user agent must do the following:

1. Turn Insecure links that reference that domain into secure ones *before* accessing the server.
2. If the secure connection can't be established for whatever reason, the connection must be terminated, without any user recourse.

___

There are limitations and problems to this policy.

* Since it is time related, it is sensitive to attacks involving time shifting the victim computer, such as using false [[ProtocolNTP]] Packets.
* Since the header must be supplied during the first visit, the victim is still vulnerable before then.

___

## References

* [Why you shouldn’t use google.com to search Google](https://www.youtube.com/watch?v=U_RKc2UoMTY)
