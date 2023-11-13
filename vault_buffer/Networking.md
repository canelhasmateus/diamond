## GRPC

<https://www.youtube.com/watch?v=6dDtN1wk5Qc>

gRPC is a protocol built on top of http2 to support bmultiplexing, to  become language neutral
. If i wanna communicate in a certain protocol, you need to understand that protocol, such as http, http2, postgres protocol

why not use one connection , instead of the connection pool in the database?
head of line blocking
how to know what packet is for who?

## Ip

Ip defines Five Addresses Classes:

```
A, B, C Consist of unicast IP Addressesd
    

D are multicast addresses
E are experimental or for future use

Their ranges are:
    A 1-126
    B 128-191
    C 192-223
    D 224-239
    E 240-255


Only 126 class A network exists, and 161777214 possible hosts in each of them.
16384 class B network exists and 65534 hosts in each of them
More than 2 million class C network exist, with a maximum of 254 hosts in each of them
```

Regional INternet Registries are the organizations responsible for the allocation of address spaec within specific geographical areas
( LACNIC ) for Latin America

```
Local Internet Registries ( LIR ) or Internet Service Providers ( ISP ) are allocated blocks of IPv4 Addresses
They assign space to their customer for exclusive use in their networks
Businesses use these blocks to create subnetworks and assign IP addresses to devices.
```

Scenarios of Multi-Homing
Single Link - Multiple Ip Addresses
Multiple Interfaces - An Ip Address per interface
Multiple Links - An Ip Andress
Multiple Links - Multiple Ip Addresses

```
allows Multi-Homing:

    BGP 
    SCTP 

Local networks that never connect to the internet can assign any IP address to a device
    An organized method of doing this is to use private reserved addresses
    Defined in RFC 1918
    This TFC defines a set of networks that will never be assigned to any organization as a registered network number

    Class A ; 10.0.0.0 ; 1 network
    Class B; 172.16.0.0 to 172.31.0.0 ; 16 networks
    Class C; 192.168.0.0 to 192.168.255.0; 256 networks

    We can combine these with CIDR block to split each network into subnetworks

Hosts within enterprises that use IP can be categorized into:

    Do not require access to hosts in other enterprises or the internet
    Hosts that need access to a limited set of outside services ( email, ftp, remote login )
    Hosts that need network layer access outside the enterprise

Moving a host from private to public or vice versa involves a change of IP address, DNS, Hosts, etc
    May reduce an enterprise flexibility to access the Internet
    May require renumbering when merging several private internets

Private network within enterprises for security reasons

Rules:
    Private addresses have no global meaning
    Routing information about private networks shall not be propagated on inter-enterprise links
    Indirect references to such addresses should be contained within the enterprise


Route Aggregation

    Routers need to know the destiantion of every packet they encounter
    If no info in the routing table, they use a default route
    The mega hubs / routers for the internet can't have default routes
        A typical no-default router have around 750k routes / entries in the table

    Using Prefix/suffix mask allows for a hierarchical design
    aggregation helps reduce size and complexity of routing tables
    a router can pass on the aggregated routes
```

___

<https://www.youtube.com/watch?v=PT_qEhesKW8>

ip addresses can be presented in octal format

- that can cause problems.

___

<https://www.youtube.com/watch?v=o5S0-_vniiM>

ip has a protocol header, added after the fact as metadata  for better performance / blocking ;

there are multiple path from a source to another destination
. its possible a packet takes one route, and another takes a second path

the ip

___

Private Addressing
CIDR - is a global address assignment convention that defines how ip addresses should be assigned relevant agencies
These include the IANA, its member agencies and ISP
Defines a way to assign public ip addresses, worldwide, to allow route aggregation or route summarization
Allows RIR's and ISP's to reduce waste by assigning  a subset of a classful network to a single customer, eg.

```
        ISPs customer A needs only 10 ip addresses and Customer B needs 25 ip addresses
            . Assign Customer A CIDR block 198.8.3.16/28 - This has 14 assignable addresses , 198.8.3.17 to 198.3.30
            . Assign customer B CIDR block 198.3.32/27 - This has 30 assignable addresses, 198.8.33 to 198.8.3.62


Ip Address:
    Needed for every device that wants to communicate in an network.

    IPV4 / IPV6 : Mostly PCs vs Mostly Mobiles
        . IPV4  have very few addresses. Which is why private ip addresses were created. 
        They occur at the 10.0.0/8 ;  140~172.0.0.0/16; 192.168.0.0/16 
            > Not Routable. Can use internally but not externally
    We used to have a idea of these Class address.
        A: Each subnet would handle 16M.
        B: 65k hosts
        C: 253 hosts
        D: Multicast reserved
```

IPV4: 32bit.
IPV6: 128bit  ->

Subnetting:
Breaking down networks into smaller ones or group smaller network
CIDR
What if we wanted  to create greater subnets (aggregating small ones) ?
This is called supernetting
Can be used to do network summarization
Good to create smaller routes

___

## TLS

during tls, we stablish a ecrypted connection
also, we need to dfo authentication ( certificate ) to check the authenticity of the server.
however, that certificate is large, and rfc 8879 tries to compress it.
<https://www.youtube.com/watch?v=LygWKgvexRs>

___

## Network Address Translation

```
Maps a ip address to another ip address
    ( or a ip_address:port pair to another one )

Originally designed to solve the only 4bi ipv4 devices

not only application
    . 



devices inside the same network can communicate directly by finding each other mac addresses using arp
```

check if its in the same subnet, does an arp request
else, it calls its default gateway
when rounting a request, the router will:
check if its an unroutable ip addresses.

if
router vs switches?

can use to do more things
. Instead of having root access to listen on port 80.

```
. load balancing: takes the packets coming, and create a virtual ip addresses ( VIP ). the vip gets an entry in the nat table  
```

___

## Loopback Interface

Similarly one may ask, what is loopback used for?

1 Answer. The loopback device is a special, virtual network interface that your computer uses to communicate with itself. It is used mainly for diagnostics and troubleshooting, and to connect to servers running on the local machine.

is not sent through a real network interface , even if sent to an address on one of the machine network adapters;

windows does not implement a network loopback interface ;

___

## TCP Buffer

4

What your describing is called TCP Windowing.

There's a nice explanation here

Excerpt:

When discussing TCP Windows, we are most often referring to the TCP Receive Window. Simply put, a TCP Receive Window is a buffer on each side of the TCP connection that temporarily holds incoming data. The data in this buffer is sent to the application, clearing more room for incoming data. If this buffer fills up, the receiver of the data will alert the sender that no more data can be received until the buffer is cleared. There are several more details involved, that that is the basic function. A device advertises the current size of its TCP Window in the TCP Header information.

It is possible to throttle the stream by closing the window, although you can just as easily stop reading from the buffer and let the protocol do its job.

Some of the messaging products manage this by using a secondary buffer's to minimize the impact of getting overrun by data. Most of these products are mainly UDP broadcast/multicast though. At some level though, if your client can't keep up, your going to have issues.

___

References

1. <https://stackoverflow.com/questions/42857662/understanding-buffering-in-tcp>
2. <https://www.haproxy.org/oldstuff.html>
3.

___

## TCP Tunneling

TCP Tunneling is the proccess of encapsulating content from a protocol A to a protocol B , usually because A is unnavailably.

```
.. Isn't this just IPSEC?
.. Or proxying 
```

Applications

```
Local port forwarding tunnel
Reverse Port Forwarding tunnel
SOCKS proxy ( dynamic port )
```

This can cause TCP meltdown ( tcp over tcp )
tcp isn't a lightweight protocol
congestion control, retransmission, garantee delivered, checksumming,
doing a tcd inside a tcp inside a tcp ... can slowdown everything

___

## Port Forwarding

Port forward

Can be done in the router.
. Ugly,

iptables

nat

transparent proxying

why don't we just run the app in port 80?
. ports 0 to 1024, these are system ports,
. cant listen on then unless root
\-> Security concerns.

insert rows in the nat table.
. "please forward to me , on this other port"
. uses iptables -> System call , need sudo
\-> sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j DNAT --to-destination 192.168.254.47:8080

```
|> needs to be a ip, cant be dns
```

when routing to another machine, we need to use maskarade
. sudo iptables -t nat -A postrouting -p tcp --dport 80 -j MASQUERADE --to-destination ....

these are session only. to persist,  need to use apt-get install iptables-persistent

clearing
sudo iptables -t nat -F

your router is the one who has the public ip address
. How does it knows to forward the requests?

```
. There are many, for example
    .. Port Forwarding
```

Port Forward is a table configured inside the router, which allows it to forward the requests
. However, your ip must be static , because the ip in the table is static.

___

## virtual ip

<https://www.youtube.com/watch?v=Zgy1miPsTNs>

Virtual Router redundancy protocol
. VIP
. Implemented by KeepAlived

failover is a tech to switch to a redundant backup machine when one goes down.

<https://www.youtube.com/watch?v=d-Bfi5qywFo>

active active and active passive are two configurations that can be used to achieve high-availability and proper load balancing

## Turning HTTP 2 was a mistake

```
Binary compression for headers
decreases latency by multiplexing requests
allows client to specify priorities for requests 


In this case, they switched the protocol only at the client side of the load balancer , while the load balancer to cdn and cdn to backend was stilll on http 1

usually, when on http1, the broswer opens 6-10 connections , which stablishes a upper limit of parallelism for request. Any further requests must tbe queueed at the client side. 

When the load balancer switched to http 2 ( at the front side ) , a sudden load appeared at the backend 
    This means an single tcp connection can handle around 100 requests

    Since the load balancer receives 100 requests, 
        and the backend works with http1 , which requires a tcp connection for every request, 
            the load balancer opens 100 tcp connections 

logically speaking, sure , http2 will consume more resources ( cpu )
    At the Application  level , it is reading packets and waiting for them to be assembled into streams 
        -> Sorting and working with these streams can consume more resources
        -> Google http 2 cpu and http 1 slow start? 
___
```

Https migration

```
Why take so long to migrate everything?

Unknwons : 
    . The numbers of request would increase; 
        .. https redirections
        .. increased crawl rates by engines 
    . Since they didn't know how much, they done it slowly, while setting up monitoring. 
        .. More 301's 
 Blocking issues: 
    . There were No tests for the transition;~
    . Needed the change to be made at the same time  ; why ?[[expand ]]
    
    . Affected the display of advertisements, which would mean a meaningful impact on revenenue. 
```

Strategies:

```
. Started rolling to logged in users first, since it would not affect engine crawling. 
. Wrote tests to catch mixed content warning or http links on the page. 
. Migration page by page, behind a toggle that served https pages only to logged in users. 
    .. several users still had stale pages , from cachee, so needed to support http urls for a period after the flip. 
```

Around 150% increased requests only;
Some distruptionb because of the way the cache headers were setup:
. http was being cached, and https was not.

___

## Not sure

Avoid Locking the main thread - this is something that csr does;
SSR however, creates an uncanny valley of pixels that aren't really interactive
progressive boot would be the best approach, but its not the easiest to use inside frameworks

___

References

1. [[Performance]]

## IPSEC

```
        * IPSEc
            . Encrypts the data
            . Provides authentication of users on both sides.
                .. Ok to give critical information to authorized people.
            . Ensure messages have not been modified ( Message Integrity ).
            . Non-Repitiation ( Senders can't say they didn't send the message )
            . So valuable that you can use them in public connections.
```

## DNS

___

## Protocols

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
what is an inet\_address?

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
