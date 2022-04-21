Http Strict Transport [[Security]] is a policy mechanism that helps protect against [[Software Attacks]], like [[Man in the Middle]] , [[Protocol Downgrade]] and [[Cookie Hijacking]].

It allows web-servers, browsers and other complying user-agents to automatically interact with some domain in a secure-only manner. 

A server implements HSTS policy by supplying a [[header]] over an [[define.http|Https]]connection, which specifies that future requests to that domain must be made via [[https]], for a period of time. 
    Strict-Transport-Security: max-age=31536000.

An user agent, when receiving such header, does the following:
    . Turn  Insecure links that reference that domain to secure ones ( http -> Https ) *before* accessing the server.
    . If the https connection can't be stablished, for whatever reason, the connection must be terminated , without any user recourse. 

Problems:
    . Since it is [[time-limited]], it is sensitive to attacks involving time shifting the vicitim computer, such as using false [[NTP]] Packets. 
    . Since the header must be supplied during the firsrt visit, the victim is still vulnerable if it hasn't visited that domain before. 

References:
    . https://www.youtube.com/watch?v=U_RKc2UoMTY
