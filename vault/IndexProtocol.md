# IndexProtocol


# Communication Protocol

![[HTTP]]
![[ProtocolUDP]]
![[TCP]]
![[IP]]
![[ProtocolICMP]]
![[ProtocolFTP]]


___

ICMP and IGMP are both used for multicast management
IGMP for ipv4, and ICMP for ipv6

IGMP Messages:

General Memeberip queries
Group specific queries
groupo and source specific queires
membership reports

leave group messages

This was sent to 224.0.0.252. Why?
    . 224.0.0.22, and 224.0.0.241 are in my arp table.
    d. 239.244.255.250 is also.
    . 224.0.0.22 does not go away when flushing my arp tables.
    . It is also the one i semd my first IGMPv3 too.
    what is an inet_address?


___


SSDP is a zero-configuration networking protocol designed to allow nodes to be added and removed from a network without any involvement from a central service such as DNS or by assigning static IP addresses to specific nodes. This decentralised, dynamic approach is possible because SSDP uses UDP as it's underlying transportation protocol which allows for multicast communication.


___

Protocols

Application ( FTP, SMTP, SNMP )
Transport ( TCP , UDP )
Internetwork ( IP, ICMP , IGMP )
Link ( Ethernet, X.25, ARP, OSPF, NDP )

what is a arp probe?
What is LLMNR?
