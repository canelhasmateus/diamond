
#

TCP Tunneling is the proccess of encapsulating content from a protocol A to a protocol B , usually because A is unnavailably.

    .. Isn't this just IPSEC?
    .. Or proxying 

Applications

    Local port forwarding tunnel
    Reverse Port Forwarding tunnel
    SOCKS proxy ( dynamic port )

This can cause TCP meltdown ( tcp over tcp )
    tcp isn't a lightweight protocol
        congestion control, retransmission, garantee delivered, checksumming,
    doing a tcd inside a tcp inside a tcp ... can slowdown everything
