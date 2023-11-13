Private Hosted Zones

What is
. A container that can be defined within route 53.
. This can allow route 53 to response to dns queries for a domain and its subdomains from within a vpc.
. when you create a private hosted zone, you need to associate that zone with a vpc.
. you can then create resource records in the hosted zone.

How to implement private hosted zones

Route 53 Routing Policies

# What is alias vs A vs AA vs CNAME . .

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

How is it different from the Geolocation ROuting Policy?

Traffic is rouyted based on the location of the resources and optionally shift traffic from resources in one location to resoucres in another.

. Assign a bias for each region

Scenarios:

One region may have more resources than another, or some users in the middle.

. Change bias in small increments to prevent resource exhaustion.

. In order to use it, you must use route 53 traffic flow
. Provides visual editor to create complex configuration of the record set.

Complex Network Configurations

... # Come back here

```
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
```

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

Route 53 Health Checks

What Are

Health checks can be used to monitor an endpoint either via an IP address or a domain name
The health checks will then check the health of the endpoint at regular intervals
Define the Interval,
Define the Endpoint
Define the protocol ( HTTP vs TCP )

Examples

Use health checks along with the failover routing policy

___

In [[IndexAws]]
Create Record in Route53 using Weighted Routing Policy

about canary and blue green deployments

<https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/comparison-of-blue-green-deployment-techniques.html>
<https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/clone-a-stack-in-aws-opsworks-and-update-dns.html>
<https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/when-bluegreen-deployments-are-not-recommended.html>

___

Elastic Beanstalk

Suppose : Load Balancer + several ec2 instances

AWS Lambda

Within lambda, a new version of the function is created
The system then automatically routes traffic slowly to the new application version
The configuration can be done using AWSCodeDeploy and AWS SAM

CloudFormation
You can use AutoScalingRollingUpdate Policy to define how rolling updates are handled when aws cludformation is used to deploy an autoscaling group
Here instruct wheter the updates need to be done in batches or all at once.

___
