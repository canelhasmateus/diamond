# VPN

To connect to a site:

    DNS lookup -> IP domain. 

    (ClientIp,ClientPort) + (ServerIp,ServerPort) ->  Tcp Connection
    
    Request = Collection<Packet<Byte>> 

There is no security. Anyone in the route to your destination, such as your ISP, can know where you're going to.

[[IPSEC]] is used to add security. It does a negotiation protocol between hosts. [[DiffieHelman]]? Once they exchange keys, they encrypt the whole [[IP]] packet, which means that every other protocol that goes above it gets encrypted for free.

This makes it non addressable, however -> middleware does not know ip and port information.
To get around addressability, we put this encrypted packet inside another ip packet, addressed to the host ( VPN )

IPSec is easily identifiable.

> #todo does this means isp's could block vpns?


## References

[Technical Discussion on VPNs - How VPNs Work, their benefits, and What happens when VPNs are Hacked - YouTube](https://www.youtube.com/watch?v=JIA4ca0afnY)
