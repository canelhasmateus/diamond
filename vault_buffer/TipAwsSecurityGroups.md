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

   . User > Internet gateway > VPC > Subnet > Ec2 Instance
   . Here we would use both NACL and security groups.

  Data center would want to access ec2 instances. The flow would be:
   . Data Center > VPN > VPC > Subnet > ec2 instance.
   . Here we would use both NACL and security groups.

  Within the same subnet, an ec2 and a lambda function would want to access an rds.
   . Here security groups alone are good enough.
