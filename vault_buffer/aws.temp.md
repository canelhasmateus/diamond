> \#todo
> Using only 1 Availability Zone , its possible to achieve 99.9% Availability. With 2 Availability Zones, 99.99% is achievable, and for more availability, even more are necessary.
> Always use at least 2 Availability Zones

___

Ami uses Packer to create the images

___

S3 data can be copied into root volume at boot time.

___

<https://www.burnison.ca/notes/fun-mysql-fact-of-the-day-ignore-at-your-own-peril>

In mysql, insert ignore means "Treat errors as warnings;"

___

___

<https://www.youtube.com/watch?v=wMbTHFXImzI>

postgres 13

duplicate data in b-tree indexes\
incremental sorting?

___

<https://www.youtube.com/watch?v=edB-_JnhoRY>

Content Persistence

___

VPC Gateway endpoints are only accessible form ec2 instances inside a vpc. In csae you are running it from your local on0promise, you will have to run it via a proxy that redirects to vpc based resource and then toward the endpoint.

...

gateway endpoint vs interface endpoint ????

...

NAT gateway is IPv4 only. For iPv6, egress-only internet gateway shhould be used.

___

IpSec is not E2E security:
It requires that both source and destination be IPSecAware
Also it operates at network layer, thus it does not provide identity authentication

<https://techgenix.com/securing_data_in_transit_with_ipsec/>
<https://www.firewall.cx/networking-topics/protocols/870-ipsec-modes.html>

___

On DDos

<https://d0.awsstatic.com/whitepapers/Security/DDoS_White_Paper.pdf>

...

VPC Peering connections allow access to part of the CIDR block, a specific CIDR block or a specific instance within the peer vpc.

___

Client side certificates

<https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/https-tcp-passthrough.html>

...
