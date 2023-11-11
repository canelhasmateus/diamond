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

```
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
```

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
\-> VPN with dedicated tunnel
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

VPC Endpoint

Take a usecase scenario: A Vpc with a public and a private subnet.

Suppose that the private subnet needs to reach de S3.
Being a public service, this request must be routed through the internet.

The way to do this would to be use a VPC Endpoint. This way the traffic would be routed through the amazon backbone network.

Endpoints are virtual devices, horizontally scaled, and redundant and HA>
THere are 2 types of endpoints: Interface and Gatway.
The gateway endoint is used to connect to s3 and DunamoDB;
The interface is used for the rest.

# WHat is a subnet, really?

Routing Tables inside a subnet can provide filtering logic.

<https://aws.amazon.com/articles/using-squid-proxy-instances-for-web-service-access-in-amazon-vpc-another-example-with-aws-codedeploy-and-amazon-cloudwatch/>
<https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/java-dg-roles.html>

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

VPCs with overlapping CIDR cannot peer.
<https://docs.aws.amazon.com/vpc/latest/userguide/vpc-peering.html>

AWS Support IpUnicast ;

You cannot modify DHCP options of a VPC.

We can have multiple vpc serving various departments, and use tags to define them and have one billing accounts. The tags associated with the bpc will distinguid each deparment or environment.
VPCs help segregate and organize your resources as per the functionality or domain, thus enabling the account owner to get insight into the resources costing within the logical grouping of the resources.

...

what is ip multicast ( <https://aws.amazon.com/articles/overlay-multicast-in-amazon-virtual-private-cloud/> )

...

```
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
```

Elastic Network Interface allows for fixed MAC addresses , as well as re-attachment to a failover instance.

Elastic Network Interfaces does not help in increasing the network bandwidth

Remember that Security Groups and NACL:
groups operate at the individual instance level,
NACL operates at the submet level

NACL by default allow traffic.
Groups by default deny traffic.

Groups cannot deny port access. You can open access for a particular IP address or range.

You cannoy deny access to particular IP Addresses using security groups.

___

___

Network
. Traffic Monitoring is a thing.
. VPC Flow logs only contain layer 4 information.

___
