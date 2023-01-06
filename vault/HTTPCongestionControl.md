---
kind:
tags:
---

# HttpCongestionControl

 The most common way of doing congestion control is [[ExponentialBackoff]]

HTTP starts by sending a small amount of data ( 14kb )

In [[HTTP1]], each of the 6 connections established by the browser will follow this process independently.

That means that packet loss in one connection will NOT make another connection have a smaller packet size.

In [[HTTP2]], since all these connections are now multiplexed into a single one, their congestion control becomes coupled, that is: The cost of warming is only paid once.

This difference can become even more noticeable in networks with limited available bandwidth:

Each connection grows its send rate individually - and also its backoff rate.

With large amounts of connections, such as 6 used by browsers, the network gets overloaded quickly.

At this moment, each connection has to back down and ramp up again, until their co-existent bandwidth limit is found by trial and error.

> #todo can this be linked to some idea of equilibrium of [[GameTheory]]?
