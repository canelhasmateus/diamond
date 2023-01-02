
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


___


Direct Connect is ideal for clients who want to establish private connectivity between their om-prem network and aws for some locatoion -> Not the right solution for moving files from multiple locations.

AWS Direct Connect is useless when there is no on-premise datacenter involved.



___


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
