VPC
	Virtual Private CLoud
	Private Netwrok

	Specify address range , add subnet associate security groups provide route tables etc

	The associate degree has more infos,

		Customer Gateway
		ELastic Netwrodk adapter
		endpoints
		internet gateway
		router
		virtual private gateway
		elastic network interface
		nat gateway
		flow logs
		network access control lilst
		vpn connection
		peering



	typical vpc setup

		Region


			VPC ( CIDR / IPV4 range )

				Public subnet
					NACL

					Subgroup 
						EC2 

				Private subnet
					NACL

					Subgroup 
						EC2

			 Internet Gateway encopasses both subnets
			 Create a public route table to enable internet to access the internet


	NAT INstance vs Nat GAteway
		. Instances are customizable, But users need to manage
		. Instances can become a single point of failure
		. INstances can be used as a bastion server ( ssh bridge )
		. Instances support port forward
		. Suports reassembly of ip fragmented packets for the udp, tcp, icmp


	VPC Peering

		. Network connection between two vpcs, enabling access between them using private addresses
		. Must manually add a route to the route tables
		. Does not support Transitive Peering.

	VPC Endpoints

		. Endpoints are virtual devices to enable private connection from the vpc to the supported services , without requiring Open-Internet connection
		. The instancers in the vpc does not require public ip addresses to communicate with amazon services
		. The traffic never leaves amazon network
		. Horizontally scalable, redundant, HA.

	VPN
		. Virtual Private Network
		. Secure and private tunnel from our device to the aws cloud
		. Can extend the on-pmreise vpn
		. Site 2 Site VPn Conmnection
		. Contains a Virtual Virtual and A Customer Gateway



___


Aws Networking
	
	VPN 
		

	MidSize workloads 
		-> VPN with dedicated tunnel
			. 10s MB to 1s GB / s
	Large workloads require DirectConnect

	AWS Site-to-Site VPN
		. IPSec VPN Connection between your vpc and your remote network
			.. Suite of crypto secure communication
		. Virtual Private Gateway
			. On the aws side
		. Customer Gateway
			.  On the remote side of the site to site

	AWS Client VPN
		. Another option to connect securely from organization
		. Managed service.

	CloudHub
		. Multiple site-to-site


	Direct Connect
		. Link Internal to aws direct connect location.
		. Then, create virtual interfaces to access aws servicees.
		. When using this virtual interface, this uses the aws backbone network and bypasses the internet.

Environment Setup
	. Setting up a test environment
	. Create a VPC With a public subnet
	. Create some windows servers
	. Add some html files to the windows servers
	. Create an ubuntu server.


VPC Peering
	
	. connection between two vpc
	. Traffic can be routed across them
	. Vpc's can be from different accounts, and even regions.

	. One must request, and them the other must Accept.
	. Routes must be added to the route tables to ensure traffic can be routed
	. Allow Security Groups to allow incoming traffics.

	. Does not support transitive relationship.

	. Cannot have overlapping CIDR blocks.
	. If one of the vpc has one of the below connections, you cannot extend the peering relationship to that connection:
		. VPN connection, or AWS Direct Connect
		. Internet connection via an Internet Gateway
		. Internet Connection in a private subnet via a nat device
		. A gateway vpc waypoint.

	What if some there are two vpcs peering a third one , and these two have overlapping cirds blocks. 
		How would we add routes to the route tables?
			. Add more specific routes, such as 10.0.0.0/16 vs 10.0.0.0/24


Security Groups and Network ACL
	
	Security Groups are basically firewalls for resources.

	By default, 
		. no inbound rules are configured for the security groups.
		. all outbound traffic is allowed.

	Always open the least possible avenues:
		.Specific types, specific protocols,  specific  inbound 

	Security Groups are stateful!
		. Request / Response pairs occur over the same channel.

	NACL
		. These do not act on the compute layer. They act at the subnet layer ( one level higher )
		. Whatever rules are applied here, are applied to all the resources in the subnet.

		Every VPC comes with a default NACL, that allows all inbound and outbound traffic.
		Includes a rules with a * rule number: This means that this rules is followed if the request does not match any other numbered  ( a fallback )
		Every rule is tested in the order of the rule number, returning early on any match.
		Best practices say to leave the default nacl alone, and create another nacl , and apply these to the subnets

		. NACL are STATELESS
			# requests and responses do not follow the same channel

		Suppose you do a SSH request to port 22 to a compute instance inside a NACL.

			If the inbound traffic is allowed on port 22, then the request goes through.
			However, the response wont!
				. Requests and responses do ont follow the same channel
			In this case, for the response to flow through, we would need a outbound traffic allowed, 
			specifying the originating port of the request
				. Ephemeral Port Range
				. Linux uses 32768 - 61000
				. Elastic Load Balancing use ports 1024 - 65535
				. Windows server 2003~  uses 1025-5000
				. Windows server 2008 and later uses 49152~65535
				. NAT gateway uses 1024 - 65535

	Some differences between groups and nacl:

		Secuity groups are statefull, NACL are not.
		Security groups are applied at the resource level, NACL are applied at the subnet level.
		A resource can have multiple security groups, but a subnet can only have one nacl.
		Security groups rules are allow only, while nacl hgave allow / deny
		Security groups are mandatory for any copmute resources - withotu security groups, no traffic is allowed by default ; Meanwhile subnets come wiht default network acl which allows both inbound and outbound traffic by default.


	Considerations:
		Users in the internet would want to acess ec2 instances. The flow would be:

			.	User > Internet gateway > VPC > Subnet > Ec2 Instance
			. Here we would use both NACL and security groups.

		Data center would want to access ec2 instances. The flow would be:
			. Data Center > VPN > VPC > Subnet > ec2 instance.
			. Here we would use both NACL and security groups.

		Within the same subnet, an ec2 and a lambda function would want to access an rds.
			. Here security groups alone are good enough.

VPC Endpoint

	Take a usecase scenario: A Vpc with a public and a private subnet.

	Suppose that the private subnet needs to reach de S3.
	Being a public service, this request must be routed through the internet.

	The way to do this would to be use a VPC Endpoint. This way the traffic would be routed through the amazon backbone network.

		Endpoints are virtual devices, horizontally scaled, and redundant and HA>
		THere are 2 types of endpoints: Interface and Gatway.
		The gateway endoint is used to connect to s3 and DunamoDB;
		The interface is used for the rest.

	# To create a vpc with a public and a private subnet, we need a elastic ip , something something NAT GAteway.

	# WHat is a subnet, really?

Transit Gateway
	
	What is a transit gateway
		. Suppose we have lots of vpc.
		. We need ec2 instances to access other instances in other vpc.
		. We could create lots of peering connections. 
		. A better alternative is to use a transit gateway ( HUB and Spoke )

		. Connects vpcs;
		. Can also connect to the on-pmreise networks
		. THere is also a route table defined within the transit gateway.
			.. It allows for both ipv4 and ipv6 cidr and tragers
		. support static and dynamic routing between vpc and vpn connections.


	how do we work with transit Gateway

		. Create the gateway
		. Then define attachments ( VPCS )
		. Modify route tables to allow traffic.


___



VPC Gateway endpoints are only accessible form ec2 instances inside a vpc. In csae you are running it from your local on0promise, you will have to run it via a proxy that redirects to vpc based resource and then toward the endpoint.

...


gateway endpoint vs interface endpoint ????



...

NAT gateway is IPv4 only. For iPv6, egress-only internet gateway shhould be used.

https://docs.aws.amazon.com/vpc/latest/userguide/egress-only-internet-gateway.html

___


IpSec is not E2E security:
	It requires that both source and destination be IPSecAware
Also it operates at network layer, thus it does not provide identity authentication

https://techgenix.com/securing_data_in_transit_with_ipsec/
https://www.firewall.cx/networking-topics/protocols/870-ipsec-modes.html

...



a securtity group cannot filter requests based on url and you cannot specify deny ruls. Security groups are used only for IP's and Not for static DNS names.

Routing Tables inside a subnet can provide filtering logic.

https://aws.amazon.com/articles/using-squid-proxy-instances-for-web-service-access-in-amazon-vpc-another-example-with-aws-codedeploy-and-amazon-cloudwatch/
https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/java-dg-roles.html

...

...



What is a NAT gateway , even?



...


Network Redundancy
	

	AWS VPN


		Customer Gateway ----VPN Connection>> VPN Gateway  > VPC > Private Subnets

		By default, each VPN connection has 2 tunnels ( redundant.)
		To add more redundancy, we can create more customer gateways.


	AWS Directy Connect

		Customer Gateway ----Direct Connect Location>> VPN Gateway  > VPC > Private Subnets

		Add more redundancy by:
			Adding customer gateways
			Connect the customer gateway to multiple direct connect locations

	We can have the VPN as a backup connection for the direct connect

	We can have multiple direct connect connections in a redundant fashion along with AWS VPN in a redundant fashion as well.




Network Devices
	
	Elastic IP
		For an instance, need a Elastic IP to do a connection to the outside world.
		We can assign a secondary instance: 
			If the primary instance goes down, the elastic IP starts to point to the secondary instance.
			Make sure to do this to different Availability Zones


	Nat Instances
		We can do the same for Nat Instances

	Nat gateways
		Nat gateway is a Managed Nat Instance.



Network Devices
	
	Elastic IP
		For an instance, need a Elastic IP to do a connection to the outside world.
		We can assign a secondary instance: 
			If the primary instance goes down, the elastic IP starts to point to the secondary instance.
			Make sure to do this to different Availability Zones


	Nat Instances
		We can do the same for Nat Instances

	Nat gateways
		Nat gateway is a Managed Nat Instance.




Improving Network performance
	
	Enhanced Networking
		Feature that can be used for ec2 instances to provide higher bandwidgth and higher packet per second
		Also used to provide lower inter - instance latencies
		Up to 100 GBS via enhanced network

	Placement Groups
		Place instaces close together
		Might have a requirements that an aplication that is making use of multiple ec2 instances and a lot of communication between them
		Lower network latency, higher network throuput






Direct Connect is ideal for clients who want to establish private connectivity between their om-prem network and aws for some locatoion -> Not the right solution for moving files from multiple locations. 





AWS Direct Connect is useless when there is no on-premise datacenter involved.


VPCs with overlapping CIDR cannot peer.
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-peering.html


AWS Support IpUnicast ; 



You cannot modify DHCP options of a VPC.

We can have multiple vpc serving various departments, and use tags to define them and have one billing accounts. The tags associated with the bpc will distinguid each deparment or environment.
VPCs help segregate and organize your resources as per the functionality or domain, thus enabling the account owner to get insight into the resources costing within the logical grouping of the resources. 

...


what is ip multicast ( https://aws.amazon.com/articles/overlay-multicast-in-amazon-virtual-private-cloud/ )


...



Aws Cloud
    REgions
        . Very Large Geographical Area
        . Many Datacenters, called an Availability Zone
        AZ
        Local Zones:
            Not all applications can tolerate latency. Thats what Local Zones are for.
            Inside a region, they extend the region to your geographic metro-area network 
            ( Opt-in to a local zone. Inside it you can create your vpc and resources )
        Edge Locations



Local Zone
    . Enable Local Zone
    . Extend your VPC to the local zone
    . Build and Run Low-Latency applications

    . Use for edge computing

Edge Locations
    . Access cloudfront


"
A local zone is where you place your computers ( designed for computing ).
A Edge Locations is where you access your CDN.
"




VPC
    . A Virtualized Datacenter.







AWS only have 100 routes. in the table
All interfaces in AWS are automatically assigned an ipv6 global address.
AWS takes 5 addresses for each subnet ( instead of 2 that every else would do.)
    . You might run out of ip addresses when designing small networks when using autoscaling

    


AWS says their vpns are Highly Available.
    They're using a virtual router with somewhat redundancy.
        . If the router in YOUR end fails, everything fails.
        . Still a single point of failure
        Recommended by AWS:
            Set up one active and one passive.
    
    When using Multiple Links:
        You must always have at least 2. And 3 is better than 2.
        You can Load Share.
            What if we decide to do it?
                use BGP tunning.
                    Set a most specific route in one, and a most specific and other, send a summary route to both.

    Not good enough.
    

VPN in cloud 
    Determine the aws virtugla Gateway
    Take your method   ( Static / BGP )
    Choose your tunnels ( default or custom )
    VPN Concentrator via market place

Remote Access VPN
    Market Placefssqq
    

What if We use a Multi-Site  vpn connection?
    AWS assumes you do not have the knowledge to control transitive networks
    You can link everyone with everyone else ( Very Inelegant, O[ N * ( N - 1 ) ] )
    Need to use another solution: Cloud Hub.



Internet is not a given
    . Use Direct Connection ( Garanteed bandwitdh )
    . Options ( 1gbps , 10gpbs, 100gbps )

    . Can Also do Link Aggregation
        . Take Multiple Links in a bundle, so they feel like a single link.
        . Take 4 10gbps and have a 40gbps.



Direct Connect 
    Point of presence
        Cross Connect: Cable from your router to the aws switch ( Layer 2 ) . 
]
Above 100m:
    Cant use copper. Need fiber. 
    
    Multi Mode Fiber ( Long )

Bidirectional Link Location 
    If either side gets termination, the connection gets down ; so you have a direct connection or vpn backup.



    On Prem                                                                 AWS Account
            Wan     -> Direct COnnection Location  ->  aws backbone     ->
            Wan    -> Direct Connect Localtion ->       aws backbone    ->



What if we do not need all the bandwitdh?
    . Direct Connection Partner: Rate Limit

While Connecting, you need VLAN 802.1q Tags 


Virtual Lan :
    Take a switch and you chop it up.
    If it has 100 ports, take the first 25 into vlan A , the next 25 into vlan b
    Why?
        Segregate Traffic as much as possible. 
    802.1q Tags makes it so you can connect between switches using 1 cable while  maintaining vlan segregation



Private Virtual Interaface
    . You can connect here when using direct connect.
    . Need to use BGP ( Only 100 routes )
Public Virtual Interface  
    .  To connect here, you need ipv4 on both sides.

direct connect gateway

    What if we need to combine private virtual interfaces with mutual virtual gateways
        . use my direct connection to connect with my vpcs in other regions ; 

        On Prem                             Direct Connect Location
                                        
                AWS Direct Connect =>           Customer Routers
                                                    |   
                                    AWS Direct Connect Routers      =>      Private Virtual Interface           EU-WEST-1
                                                                                | => Direct Connect Gateway =< 
                                                                                                                EU-EAST-1  




High Availability Connections
    Redudancy
        . One is None
        . Two is One
        . Three is greater than two

    The average customer would be better of with a direct connection primary and a vpn backup ( Cost efficiency )

    If performance is of the matter
        . On Prem would have multiple routers, 
            each one would connect to a different direct connect location, on a different ISP
        . Can load share between these connections ( using BGP ) . 
            Make one network preferred on one router, and another on another router.
        . Link Aggregation Group 
            Bundle up to 4 links:



    VPC
        . Virtual Private Data Center
        . Routing Tables
            .. Router determine the path to get through your networks
            .. How? They build a map. 
            .. Router move packets at Layer 3
            .. Summary Route vs Specific Routes vs Default Route
                ... Routers always take the most specific route.
            .. Normal for big corps to have 20 to 30k subnets
            .. Routing Protocols
                ... IGP ( Interior Gateway Protocol )
                    :> Used inside your  organization to get the shortest route.
                    :>  OSPF | Intermediate System to Intermediate System | IGRP  ( Cisco )
                ... EGP ( Exterior Gateway Protocol )
                    :> Connect to others organizations
                    :> eBGP . Why? Its the most scalable and customizable. BGP needs Autonomous System Number
                    :> Works through port 179 via TCP
                    :> apply for an ASN to work with.
                    :> Dynamic Routing Protocol
                    :> Required for Direct Connect, optional for VPN.
                ... For routing there is 2 ways, static and Dynamic.
                    :> Static Routing does not heals itself
                    :> BGP can be very dangerous especially when considering its interactions with no-exports and out-filters
                    :> BGP has a decision process
                    :> AWS's BGP is pretty weak.
                ... 
            .. 
            .







        . Internet Gateway
            .. Internet Access
                ... Out in the internet and letting the response go back
                ... Fully reachable. 
            .. Enables 'True' Internet Access.
            .. Gateway is Interchangeable with 'Router'
            .. *FULLY* exposed to the internet , which means, Hackable
            .. Create and attach an gateway to the VPC. Create a default route, which routes all unknown traffic to the internet gateway

        . Egress only Internet gateway
            .. Ingress : Comes in; Egress : Comes out.
            .. Designed for ipv6,  ( the version for ipv4 is called NAT gateway  )
            .. Means only responses can come back
            .. 

        . Nat INstance and Nat gateway
            .. Translates an address to another address.
            .. Use cases are internet gateways or overlapping IP addresses for two companies 
            .. A nat instance is just a ec2 instance running NAT software
            .. Usually, its recommended to use NAT gateway instead of running a nat instance ( managed solution )
            .. Usually, you would need redundant devices, and nat gateways are HA in a single AZ.
            .. Still, need a NAT gateway at each AZ.
        . Network Interfaces and IP addresses
            .. Every network interface in a device needs to be in a different subnet
            
            .. Dual Homing or Multi - Home ( put a server in multiple subnets )
            .. Bastion Hosts ( Not recommended )
            .. An elastic IP address is a borrowed address from aws. 


        . VPC Endpoints
            .. An endpoint is a way to connect from a service to another service within
            .. Improves performance, Improves security, Improves Costs.
            .. Going out of aws is bad: You pay fees, and internet performance is low performance and low availability.
            .. Its a highly available virtual device.
            .. There is a gateway endpoint and interface endpoints
            .. Gateway Endpoints
                ... High speed access to a AWS service ( S3). 
                ... Adds a route to the routing table.
                ... prefix list ( pl-xxxxxx )
                ... since its a route, it can be pushed to the data center
                ... Limit the Endpoint using Endpoint Policy
            .. Interface Endpoints
                ... Enables connection to other aws services ( ec2 system manager, kinesis, load balancer apis )
                ... Can also be used by external services hosted by aws partners or customers on their own vpc
                ... Great to connect to other organizations in a secure manner. 
                ... Look and feels like local VPC
                ... It creates a Elastic Network Interface  , along with a route, and a dns specific name, and a Private link
                ... 
                ... Private Link is similar, but different to VPC peering. 
                    :> Usually more elegant, and more secure
                    :> uni-directional traffic
                    :> VPC peering does FULL CONNECTIVITY, private link is 'picky'.
                    :> Scales way better in regards to the service.
                    :> Private link uses NAT, since organizations very often have overlapping IP addresses. 
                ... Shared Services VPC
                    :> A shared service uses a Network Load Balancer and AWS PrivateLink to Provide endpoint services into spoke VPCS
                    :> 


        . VPC Peering
            .. A way to connect your system to another organizations
            .. Run BGP between them to propagate routes
            .. Non-Transitive Connections
                ... Lot of work to make everyone talk to each other.
                ... Fully-Meshed ( instead of hub and spoke ) -> Best performance, but a disaster in the scalability space ( n ( n - 1 ) / 2 ).
                ... AWS stablishes a limitation of 125 peering connections.
            .. Communication uses the private IP space
                ... 
            .. Traffic is Encrypted
        . Cloud Hub
            .. Enables to break non-transitivity rules of vpc peering
            .. routing information is passed to every connect vpc, configuring a hub and spoke model
            .. Transit Gateway looks like cloud hub
        . Security
            .. Keep traffic out with a firewall
            .. DDOS protection
            .. 
        . ACL
            .. How to protect your subnets after your firewall, ids, ddos protection? Access lists
            .. Network ACL keeps traffic out of a subnet. A security group keeps a traffic out of a host.
            .. ACL always have a implicit deny all -> only need to configure the allows
            .. Stateless -> needs to configure both traffic directions ( request and response )
            .. ACLS are Tricky because the order matters 
                ... Give youself a lot of room ( rule numbers )
        . Security Groups 
            .. Stateful firewalls
            .. Only allows 'Allow' rules.
            .. 
        . When having data coming in and out, we might want to have a look at what your traffic looks like
            .. VPC FlowLog ( same as CISCO netFlow)
        . Example system:
            .. WAF > IDS / IPS > DDOS > Network ACL > Security Group
            .. security providers: Cisco, Checkpoint, PaloAlto, Fortnet
        Performance and Optimizations:
        . Placement Group    
            .. Put instances physically closer together
            .. Logical groups of computers  in a single AZ -> Reduced Latency , Higher Throughput
            .. Reduces Availability! 
            .. Cluster
                ... Lowest Latency offer in the cloud.
                ... Same rack, often same server.
                ... 
            .. Partitioned
                ... Multiple racks , but in the same data center
                ... Better redundancy
            .. Spread 
                ... Instances are spread across AZ 
        . SR-IOV 
            .. Virtualization can cost upwards of 30% performance
            .. Passes a physical card to your Virtual Machine
            .. PCI-Passthrough 
        . Virtual Fabric Adaptor
            .. Better network performance



Elastic Network Interface allows for fixed MAC addresses , as well as re-attachment to a failover instance.


Elastic Network Interfaces does not help in increasing the network bandwidth





Remember that Security Groups and NACL:
	groups operate at the individual instance level,
	NACL operates at the submet level

	NACL by default allow traffic.
	Groups by default deny traffic.

	Groups cannot deny port access. You can open access for a particular IP address or range.

	You cannoy deny access to particular IP Addresses using security groups.








On DDos

https://d0.awsstatic.com/whitepapers/Security/DDoS_White_Paper.pdf

...



VPC Peering connections allow access to part of the CIDR block, a specific CIDR block or a specific instance within the peer vpc. 



___


Client side certificates

https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/https-tcp-passthrough.html

...


___

Private Hosted Zones
	
	What is
		. A container that can be defined within route 53.
		. This can allow route 53 to response to dns queries for a domain and its subdomains from within a vpc.
		. when you create a private hosted zone, you need to associate that zone with a vpc.
		. you can then create resource records in the hosted zone.

	How to implement private hosted zones

		# How to they deal with DNS Conflicting Names?


Route 53 Routing Policies
	
	# What is alias vs A vs AA vs CNAME . . . . 

	What are the routings policies?
		. Simple:
			.. Just ensures a request is directed to a particular resource.
		. Failover Routing Policy.
			.. Confiure an active failover scenario.
			.. Configure the Primary / Secondary resource 
			.. Based on the failover it will be directed
			.. # How to define a failover?
		. Latency Routing Policy
			.. Here traffic will be routed based on least latency.
			.. Users will be directed to either instance based on the least latency.
		. Weighted Routing Policy
			.. Users will be directed to either instances based on the weights. 
		. Geolocation Routing Policy
			.. Here traffic is routed based on the location of the user.
		. Multivaslue answer routing Policy
			.. Multiple records are sent back to the user.
			.. The browser will then make a connection to any of the addresses.

	Example:

GeoProximity Routing Policy
	
	How is it different from the	Geolocation ROuting Policy?

	Traffic is rouyted based on the location of the resources and optionally shift traffic from resources in one location to resoucres in another.

	. Assign a bias for each region

	Scenarios: 

		One region may have more resources than another, or some users in the middle.

	. Change bias in small increments to prevent resource exhaustion.

	. In order to use it, you must use route 53 traffic flow
	. Provides visual editor to create complex configuration of the record set.

Complex Network Configurations
	
	... # Come back here



        . Route 53
            .. Uses AnyCast
                ... Every Device in the internet needs to have a unique IP address.
                ... AnyCast violates de rules. Multiple hosts answers the same IP address.
            .. Records
                ... A ( IPV4 ) ,  AAAA ( IPV6 ) maps an domain to a IP Address.
                ... CNAME maps an domain to another domain.
                ... NS identify the DNS server that is gonna be responsible for your domain.
                ... MX necessary to send / receive e-mail.
                ... SOA primary name server for the domain. 
            .. Enables HealthCheck
            .. Also Acts as a registrar.
            .. Uses privacy protection
            .. Up to 150 top level domains
            .. Hosted zone is just a DNS zone file.
                ... Just a collection of records that can be managed together, belonging to a single top level domain
            .. Policies
                ... Simple Routing
                ... Weighted 
                    :> A percentage of the traffic to a location, and another percentage to another location.
                ... Latency-Based
                    :> Determines the client latency to each server, and routes to the lowest one.

                ... FailOver
                ... GeoLocation
                ... MultiValueAnswer
                    ... Basically, simple routing, but uses health checks.
                ... GeoProximity
            .. Resolver
                ... Route53 for on-prem




Routing Strategies
	
	Elastic Loading Balancer
		- Distribute incoming traffic across EC2 INstances
		- Increase availability of the entire application
		- Listeners listen to incoming request and route those to the ec2 targets
		- Network works at Layer4, and Application works at Later 7.

	Route 53
		- Daomin Name system Web Service
		- Domain Registration, DNS Routing , health checking


	What are we going to do?

		Route 53 routes to load balancer.
		Load Balancer routes the requests across multiple ec2 instances.


	### What are all the routing policies inside the route53?

___
