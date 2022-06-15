# HSTS

[[HTTP]] Strict Transport [[Security]] is a policy mechanism that helps protect against [[Software Attacks]]:

* [[MITM]]
* [[Protocol Downgrade]]
* [[Cookie Hijacking]].

It allows web servers, browsers and other complying user agents to automatically interact with some [[domains]] in a secure-only manner.

A server implements HSTS policy by supplying [[headerd]] over a [[Https]] connection, which specifies that future requests to that domain must be made via [[https]] for the agreed period.

```example
Strict-Transport-Security: max-age=31536000.
```

when receiving such a header, a user agent  must do the following:

1. Turn Insecure links that reference that domain into secure ones *before* accessing the server.
2. If the secure connection can't be established for whatever reason, the connection must be terminated, without any user recourse.

Problems:

* Since it is [[time-limited]], it is sensitive to attacks involving time shifting the vicitim computer, such as using false [[NTP]] Packets.
* Since the header must be supplied during the first visit, the victim is still vulnerable before then.

___

References:

1. <https://www.youtube.com/watch?v=U_RKc2UoMTY>
