In DHCP, i was the one requesting the address. Why? Is this always the case? How do i know that i correctly received that ip address?
    Where is the parameter request response?
        . Now that i flushed my caches, the responses came in a following ack request.
            .. Later i'll try again without flushing.
    Is the destination always 255.255.255.255?
    It seems that the client is the one that initiates a ip proposal. Is it the case? Can the server reject it?

    It seems that dhcpv6 does things similarly. However, it sends to ff02::1:2
    
    It seems that following the dhcp request, our pc asks over the broadcast "Who is 192.168.1.1 - the router / domain name server / dhcp server"

After this is complete, it seems we start to contact via IGMP and ICMP.
    . It sends IGMP to 224.0.0.22 , which is the entry that wasn't flushed with arp -d.
        .. It starts with a report / join group for any sources ( 224.0.0.252 and 224.0.0.251)
    then a leave group
    . It also Sends ICMP to ff02::16

    In ICMP, the first request was sent to ff02::16 - A multicast listener report message. Why?
        . Now that i flushed my caches, it seems that a message is sent before: A Neighbor soliciation for fe80:9a7e. This is leaving my pc with destination ff02::1:ff3b:b7d0. 
            .. Why? How we know the destination?

    The wikipedia article seems to imply that these protocols do not operate atop a transport layer. Why and how?

After these are done we do dhcpv6 , and NBNS as well as mdns and llmnr
    .. 224.0.0.251 seems to handle mdns, while 252 handles llmnr, with 22 handling igmp

then, its connecting to microsoft stuff

among these mdns, why are we asking for ourselves?

    many many times, actually. 


___


DHCP

    Ip address assignment can be static or dynamic for devices
    Static involves manually specifying the IP addresses
    Dynamic involves specifying a pool of addresses on the router so a new computer get one allocated automatically


    Four-way Handshake:
        1 . A client automatically sends out a special DHCP discover message using the broadcast address
        2 . Server sends the DHCP client a DHCP Offer message
        3 . Client sends out a DHCP Request ( Accepting the offer )
        4 . Server then sends a DHCP Ack

Unicast
BroadCast
    Receivers validate if they're intended receivers

MultiCast
    Ip class D

Ipv6

    Ipv4 only has 32vit -> 4 billion addresses ( not enough )
    Extends 32bit ip address to 128 bits, allowing up to 2^128
