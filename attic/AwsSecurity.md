Encryption

> Always choose options that provide encryption

In Transit:

- VPN with IPSec.
- Using TLS for network level traffic
- SSL Certificates for webapplications and cloudfront
- HTTPS listener for your application load balancers -> Offload the work of the encryption / decryption to load balancer
- Using SSL to encrypt a connection to a DBInstance
- Using VPC endpoints to keep data transit flow private to aws network. ( No public traffic )

In Rest

- AWS Default encryuption for some services, such as S3.  ( For now it uses AES256)
- As a client, you encrypt the data with your own keys, and store it already encrypted.
- KMS

___

KMS

This service does not encrypt the data itself. It only manages the keys used to do so.

Customer Master Keys ( CMK )

- Encrypt and decrypt up to 4KB of data.
- Generate and encrypt and decrypt the data keys that you use outside of aws kms to encrypt your data
- Customer managed
- Aws managed
- AWS owned

Envelope Encryption

- data <- encrypted by a key. <- generate OR  encrypt this key using the CMK.

___

Certificate Manager

Creates and manages public SSL / TLS based certificates
Can be used for AWS based websites or applications

- Can use ACM or import own Certificates.
- each certificate is valid for 13 month and must have at least 1 fully qualified domain name.

___

AWS Inspector

This tool can be used to test the network accessibility of amazon ec2 instances , as well as check the state of security of the underlying applications running on those instances

Scan applications to check for any vulnerabilities and deviations from best practices, automating security vulnerability access throughout dev.

How

- Install agent on the instance, either manually or using the wizard

> AWS Inspector is used for EC2 and cannot be used to inspect API Gateway

___

Guard Duty

Identify unexpected and potentially unauthorized and malicious activity from within the aws account, by using existing threat intelligence feeds and lists that contains malicious IP's and domains. Analyzes the following data sources:

- VPC Flow Logs
- CloudTrail events
- DNS Logs

Can detect

- Escalation of privileges
- Uses of exposed credentials
- Communication with malicious ip, url or domain
- Compromised ec2 instances having malware,
- detect unauthorized infrastructure deployments on the account

How

- Enable ( Region Specific )
- Its possible to invite other accounts. This makes your account master
- Sends cloudwatch events , when sees something it doesn't like

___

AWS Shield

Helps protect against DDoS attacks.

Automatically available at no additional charge, helping against network and transport layer ddos attacks.

Offers an advanced tier: which is a higher level of protection against attacks that target applications hosted using services such as ec2

___

Intrusion Detection and Prevention

Security Groups restrict traffic onto EC2 instances.However, if any port traffic is allowed, malicious users can still send TCP packets on these ports which could be used to infiltrate the EC2 instances.

Its an appliance that is installed on the ec2 instance, continuously monitoring network and system for any sort of malicious activity.

It adds an extra layer of security by looking at the tcp packets entering the ec2 instance and interpreting whether the request is a proper request or not.

- Alert administration of any sort of possible incidents or even report any sort of malicious attempts
- Prevent or block attacks from detected intrusions and malicious IP's

> There exists several [[IDS]] and IPS solutions offered in the aws MarketPlace.

___

An example Configuration

. Fiewall -> IDS Ips -> DDOS -> NaCL -> Security Groups, HBF , Malware Protection, Hardening  -> Iam  , Route Hiding -> Encryption ->

___

On Security

EC2 offers different mechanisms to secure instances. [[Firewall]]s can be used, either using [[AwsWaf]]  or the marketplace. The same can be said about [[IDS]] and [[IPS]] systems (?? What is ids service offered by amazon?).  [[AttackDDoS]] protection is also a common concern, which can be mitigated by [[AWSShield]] and marketplace offerings.

As far as traffic goes, these can be configured by means of [[AccessControlLists]] in the routers. EC2 also support host based "firewalls", named [[AwsSecurityGroup]]s.
Security Groups are stateful, which means that they somehow keep tabs about the traffic on their boundaries. A consequence of this is that they automatically allow traffic of responses from outgoing requests - there is no need to apply the security rule in both outgoing and incoming directions.

There are many ways of provisioning and managing these machines. These include [[AWSCloudFormation]] , the EC2 [[Console]], host-based [[ProtocolSSH]] and [[ProtocolRDP]], and the SDK API.

___

a securtity group cannot filter requests based on url and you cannot specify deny ruls. Security groups are used only for IP's and Not for static DNS names.

- [[AwsParameterStore]]
  - When we have lots of passwords
  - Completely Managed
  - Use it alongside [[AwsKms]]
