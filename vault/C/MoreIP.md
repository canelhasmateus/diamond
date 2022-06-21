Ip defines Five Addresses Classes:

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

Regional INternet Registries are the organizations responsible for the allocation of address spaec within specific geographical areas
    ( LACNIC ) for Latin America

    Local Internet Registries ( LIR ) or Internet Service Providers ( ISP ) are allocated blocks of IPv4 Addresses
    They assign space to their customer for exclusive use in their networks
    Businesses use these blocks to create subnetworks and assign IP addresses to devices.

Scenarios of Multi-Homing
    Single Link - Multiple Ip Addresses
    Multiple Interfaces - An Ip Address per interface
    Multiple Links - An Ip Andress
    Multiple Links - Multiple Ip Addresses

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
IPV4: 32bit.
IPV6: 128bit  ->

Subnetting:
    Breaking down networks into smaller ones or group smaller network
    CIDR
What if we wanted  to create greater subnets (aggregating small ones) ?
    This is called supernetting
    Can be used to do network summarization
        Good to create smaller routes

