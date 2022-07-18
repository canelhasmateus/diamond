# CongestionControl
    . The most common way of doing congestion control is : start sending small amount of data ( 14kb ) . If it gets through, double the packet size, until we hit a packet loss. THen, we back down a bit.

> [[PatternExponentialBackoff]]

    . In http 1.1, each of the 6 connections stablished by the browser will follow this process independently. That means that packet loss in one connection will NOT make another connection have a smaller packet size.
    . In http 2, since all these connections are now multiplexed into a single one, their congestion control become coupled.
    . One example where http 11. 1can lose is on enetworks with limited available bandwitdht: the 6 connections each grow their send rate individually, causing them to overload the network quite quickly, after which they all have to back down and find their co-exitent bandwidth limit through trial and error
