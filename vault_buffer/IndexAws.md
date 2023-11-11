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

```
. Use for edge computing
```

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

```
When using Multiple Links:
    You must always have at least 2. And 3 is better than 2.
    You can Load Share.
        What if we decide to do it?
            use BGP tunning.
                Set a most specific route in one, and a most specific and other, send a summary route to both.

Not good enough.
```

VPN in cloud
Determine the aws virtugla Gateway
Take your method   ( Static / BGP )
Choose your tunnels ( default or custom )
VPN Concentrator via market place

Remote Access VPN
Market Placefssqq

What if We use a Multi-Site  vpn connection?
AWS assumes you do not have the knowledge to control transitive networks
You can link everyone with everyone else ( Very Inelegant, O\[ N \* ( N - 1 ) ] )
Need to use another solution: Cloud Hub.

Internet is not a given
. Use Direct Connection ( Garanteed bandwitdh )
. Options ( 1gbps , 10gpbs, 100gbps )

```
. Can Also do Link Aggregation
    . Take Multiple Links in a bundle, so they feel like a single link.
    . Take 4 10gbps and have a 40gbps.
```

Direct Connect
Point of presence
Cross Connect: Cable from your router to the aws switch ( Layer 2 ) .
]
Above 100m:
Cant use copper. Need fiber.

```
Multi Mode Fiber ( Long )
```

Bidirectional Link Location
If either side gets termination, the connection gets down ; so you have a direct connection or vpn backup.

```
On Prem                                                                 AWS Account
        Wan     -> Direct COnnection Location  ->  aws backbone     ->
        Wan    -> Direct Connect Localtion ->       aws backbone    ->
```

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
Public Virtual Interface\
.  To connect here, you need ipv4 on both sides.
