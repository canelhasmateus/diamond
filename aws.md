https://candost.blog/supplying-books-to-my-father/
https://svelte.dev/
https://www.hackerrank.com/dashboard


whizlabs
cloudgurus


aws whitepapers




# Video 1

1 - Core Services
Domain 1 - Organizational Complexity
Domain 2 - Designing for new Solutions
Domain 3 - Migration Planning
Domain 4 - Cost Control
Domain 5 - Continuous Improvement for existing solutions




Core Services

	Security
		IAM
	Storage
		S3
		EBS
	Compute
		EC2
		EC2 AutoScaling
		Elastic Load Balancing
	Networking
		Route 53
		Amazon VPC
	Governance
		Cloudwatch
	Database
		RDS
		DynamoDB
		Redshift


Organizational Complexity
	
	Carefully orgaanize cross-account authentication and design of multi-account environment

	Complex Design networks


Design New Solutions
	
	Security Requirements
		( Directory, Incognito, Encyrption, Certificate Manager, Inspector, GuardDuty, DDOS attacks, IDS, IPS)
	Reliability
		Highly available, independent of the load
		In compute, storage, netwrok, databases.
	Performance
		Cloudfront, Cross Region Replication, EMR, Rekognition, Xray, Athena
	Deployment Strategies to meet businewes requiremebntns
		CI CD, Bluegreen, Rolling Deployments,

Migration Planning
	
	Business Drivers, Cloud nstages of adotption, migration procvess, aplication migration strategies

	Tools:
		S3 Transfer Acceleteration,
		Snowball, DMS, Storage Gateway


Cost Control
	
	Select Cost effective pricing model

	Reserved Instance, Spot Instances, Spot Fleet, spot Blocks,

	AWS Lambda, AWS GLue, AWS Batch,

	Cost Monitoring
		Cost Explorer
		Cost and usage Report
		Cost forecasting 
		Bugdget
		COnsolitated billing

Continuous improvement for existing Solutions

	Troubleshooting
	Improving Security
	Improving Performance
	Operational excelllece
	reliability
	Deployment

Whitepapers
	
	Architecting for the cloud
	Well Architected Framework
	Secuity best practices
	CICD Strategies
	Disaster Recovery











# Video 2

Recap of the IAM:

Identifity and acces management

Manage the acces to the different resources and services in a secure manager
describe who is authorized to access well
Integrates to all services

Pricipals and Entities
	Principals: Person / application who can call for an action or operation in a resource
		. It is authenticated as a root user or an IAM Entity

	IAM Entity
		 . User / Roles

	Do not use Root Credentials for daily works

	IAM Policies:
		Whether to allow or deny request to an resource

	Provides MFA Authentication

	Policy Simulator
		: Test the resource policies before applying
		Also troubleshooots after being applied


Best Practices:
	
	Don't use the root account. 
		Lock away account root / access keys

		Create Individuals USers
		Configure strong passwords,
		Rotate Credentials Regularly
		Remove unnecessary credentials,
		enable MFA
		Use groups to assign permissions to iam users

		Use Define Policiies to Assign Permissions wheenever pssobile 
			Least Privileges
		Use policy condigtions for extra security

		Use acces levels to review iam permissions
		Monitor activity in the accounts.

Practice by creating complex settings.



# Video 3  S3

Simple storage service
	
	Durable reliable, highly available and cost effective object storage.

	Store as objects
		Treated as blackboxes
		Only accesses the metadata, such as 
			Size, Creation Time

		Block Level storage vs Object storage

	Main Features:

		Durability -> SLA 99.99999999%
		Availability -> SLA 99.99%
		Scalable
		Reliability
		Fast data acces
		Inexpensive	
		Secure
		Flexible ( Different Tiers of Storage. )
			. Standard
			. Infrequent Access
			. Glacier

		Easy Interface
		Easy Integration


	Use Cases>

		Backup
		ARchiving ( Glacier )
		Disaster Recovery

	Object vs Block Storage ( associate course)

	Data Consistency Model:
		Read after write consistent ( New PUT )
		Eventually Consistent ( Overwrite PUT)
		Eventually Consistent (for DELETE)

	Versioning:
		Very Important

		After turning the versioning:
			Tracks changes to the object
			Delete Marking

		Cross Region Replication

	Storage Classies

		Which is the best

	Bucket Policy and Access Control List ( Secutity Aspects ) --- Associate Course

	S3 Events, Logging




# Video 4
EC2, EBS

EC2:
	Services that provides secure reizable compute capacity in the cloud

	Instances
	
		. On Demand ( Costliest )
		. Spot Instance ( Request Unused Instances - )
		. Reserved ( Purchase at discount by paying upfront - 2 to 3 years )
		. Scheduled


	General Purpose
	COmpute Optimized
	Memory Optmize
	Storage Optmimized
	Acceleerated computing

	Dedicated Host:
		Pay for the physical host that is fully dedicated to your workflow
		Bring the per socket /host / core licenses
	Dedicated Instance:
		Pay by the hour for the instances that run in a single tenant
	
	Key Pair:
		Amazon uses Public and Private ekys to securely access instances ( SSH, Logs )

	Instance Store 
		Temporary BLock Level Storage that are saved on disk 
		Only available only at the lifetime of the instance.
			Saved between restarts
			Lost between stops and termiantnions

	Elastic IP Address


	AMI
		Information Required to launch a instance
		How to unse?
		How to share it
		How to copy to diff regions
		How to register / encrypt

Ebs:
	
	Persistent Block Stores for EC2
	Provides Redundancy in its availability region
	Persistent between stops and terminations
	Can be re-attached to other instances

	Volumes:
		Magnetic HDD
			Optimized for large streaming frameworks, when Trhoughput is better indicaton that OPS

		General Purpose SSD
			Dominant Property Atribute is IOPS
			Balances Prices and Perfomrance for most variety of workloads
			max at 16k IOPS / volume
		Provisioned IOPS
			Dominant Property Atribute is IOPS
			> 16k IOPS
			Max at 64k IOPS

	SnapShots
		Point in Time backup of the data
		Incremental 
			Only the Blocks that changed get saved
		Can be used to create backups of critical workloads 



#Vidoe 4 
Autoscaling
	Autoscaling is mainly about capacity management
	Montior applications and provision capacity to maintain a steady, predictable performance at the lowerst cost.

	There are some resources at the associate level

	How does the autoscaling workd?

		Launch COnfiguration
			A tempalte for the instance configurtation that is used by the autoscaling group to launch the instance
			Specify the AMI, Instnace type, key pair . . .

		Autoscaling group
			Collection of ec2 instances that are groupoed together to do the job

		Scalingoptions
			Several ways to scale the groups
			Scheduled scaling, 
			Dynamic scaling

			Minimum, Mximum, Desired
			Starting by launching Desired Capacity instances
			Continues to maintain the same number -> If any becomes unhelatly, kills and replaces it
			An autoscaling can launch on demand instance, spot instances or both]

			There is a logic to terminate instances:
		

		Pending -> Inservice, TZerminating, Terminated
		Detach

		Lifecycle Hooks

Elastic Load Balancing
	
	Automatically distribute traffic between multiple targets, such as ec2 instanes, containers, ip addresses and lambda funcitons

	Supports health check to forwards traffic to only healtyh
	Supports hybrid load balancing ( cloud, on prem)

	Cross-zone load balancing:
		Distributes loadgs between different availability zones

	Two main types:
		Application Load Balancer ( layer 7 )
		Networj Load Balancer ( layer 4 )
		Classic Load Balancer ( Deprecated)

		OSI LAyers:
			...

	Application Load Balancer:
		There are resources ath the other courses

		Listener, Rules, Target Groups, Healthy checks

		Monitor Healthy checks
			-> Selects healthy 

		Follows rules to forwad traffic
		if path contains /Picutres, do A
		else, do B


	Networkd Load balancer

		Configure the logic based on the port

		If the request comes for port 80, do A
		Else do B


#Video 5


Cloudwatch

How to create metrics on logs

Repository of all aws metrics
	lambda, rds
No only metrics, also logs
create alarms based on metrics and logs
can also wait for  events sent from various resources

Cloudwartch - ec2
	CPu, NetworkIn and Out
	Rds:
		Database connection
		Read IOPS

Create alarms based on metrics
	Email Notification
	AutoScaling

Can also direct metrics and logs from on-prem

create lambda function
	esnure logs are nr ty cloudwatch
	create a metric fitler to reach for word 'error' in logs
	create an alarm based on that


#Vdeio 6

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


# Video 7

Amazon RDS HA
	
	What is multi-az
		. Provides High availablity and failover support for database instances
		. Automatically provision a standby replica in a different availability zone
		. Data is transferrent between instances synchronous, using Amazon Failover ( or SqlServer Database MIrroing if SQLSErver)

		. You can't read data from the standby replica
			. Only when a fasilure happens on the primary database instance then a switchover is made from the primatry to the seconday instance, which means
				. Outage in a AZ
				. Primary Database fail
				. Server type for the instance is changed
				. OS is being patched
				. Manual Failover ( reboot with failover )

		Region
			Availability Zone

		to enable multi-az
			Modify database inside RDS.


# Video 8

NoSQL database
	
	Dynamo DB

	What is Dynamo DB
		. Fully managed NoSql database service
		. Fast Access , no burden of infra, HA, scalability
		. SSD, automatically replicated across AZ ( redundant, HA )

		. SchemaLess tables
		. Json-Like 

	Best Practices
		. If simple queries, use DynamoDB
			.. Queries are flexibles in RDDMS, but can become expensive.
		. Try not to create too many tables.

		. Understand the size of the data that is going to be store. ( This inpacts read and write capacity, and in turns defines costs incurred )

		. Ensure attributes used in queries form the partition key.

		. Make use of global secondary indexes for performing queries on other attributes

		. Make sure that attributes used as the partition key has a good range of values -> evenly distributed data across partition

# Video 9

Amazon Aurora
	
	. Fully managed database engine
	. Compatible with MySQL and PostgreSQL	
	. With some times of workloads can deliver five times the throughtput of mysql / 3x postgres
	. Highly available
	. Storage grows on demand

	Primary Database writes into the cluster volume
		-> HA of data, since redundant
	Replicas can read from the volume

	. Can change underlying instance class
	. Can enable Auto Scaling

# Video 10

Redshift

	. What is Amazon Redshift
		. Fully managed petabyte-scale data warehousing service
		. Create a cluster ( consists of node , one of which is a leader, and one or more compute )
			. Use SQL Tools to connect to the Leader Node.
			. Compute Node execute queries

	. What are the features
		. Enhanced VPC Routing
			.. Ensure all COPY and UNLOAD traffic between the cluster and data repositories via VPC.

		. VPC Security groups, NACL, VPC Endpoints
		. Make use of Reserved Node offerings for redshift -> Like reserved instances.
		. Point in time snapshots
		. Automated snapshots are stored in S3.
		. Retained till the retained period. Manual ones are allowed to be older.
		. Snapshots incur additional storage costs.


# Video 11 - LAB
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



#Domain 1 - Design for Organizational Complexity

# Video 1 - LAB
AWS Organizations
	
	What is the purpose of Organizations?

		An organization is a collection of accounts.
		One of them must be the Master accounts.
			It goes ahead and creates the organizations.

		Consolidated Billiig under the AWS Organization
		Can group accounts into Organizational Units.
			-> Logical grouping of accounts
		
		Use Service Control Policies to impose maximum permissions allowed in each AWS account.


		Create a Service Control Policy to acess control to S3, DynamoDB.
			. Not only applies to the user,  Also applies to the root account of the affected account.
	
		inside Each accounts, one can use IAM Policies to further restrict access

Cross Account Access

	Providing acess across accounts.


	Create IAM Role
		-> Allows cross account number
		-> Would use the account number of the 'guest'.

	Inside the Guest account:
		-> Create an inline policy that would allow the user to assume the role.

		-> User in an Another account can Assume that role.

Tagging
	
	Tags are metadata
	Key-Value pair which makes it easier to manage, searching, and filtering. Also useful to billing.

	Why?
		. Organize Resources
		. Allows Cost-Explorer and billing reports to break down AWS Costs
		. Automation
		. Better Access Control

	Most effective ways: Use grouping

		.Technical Tags
			.Name, Application Id, Application Role, Cluster, Environment, Version

		.Tags for Automation
			Date/Time, Opt in/Opt out, Security

		.Business Tags
			Owner, Cost Center / Bussiness Unit, Customer, Project
		
		.Security Tags
			Confidentiality, Compliance

	How to Use:

		Tags for AWS Console Organization
		Tags for Cost Allocation
		Tags for automation
		Tags for acess control
			-> IAM Policies support tag-based conditions.

	Best Practices

		standardize, case sensitive, and consistent
		consider tag dimensions that supoport the ability to manage resource access control, cost tracking, automation, and organization
		leverage tools such as resource groups to manage the tags.
		Better to have too many than too few tags.
		Watchout for tamification of future-changes when editing tags.

Security Across Multiple Accounts
	
	Single account
		. IAM
			. Users 
			. Permissions
		. Management and Governance
			. Amazon CloudWatch
			. AWS Config
			. AWS Organization
			. AWS CloudTrail

	Centrailized secuity accounts 	

		. Send Logs to security accounts
		. Limited set of users
		. No hability to delete the logs 


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


Network Load Balancer
	
	What is the network load balancer
		. Works at the layer 4 of the OSI Model.
		. If we want to have a simple TCP load balancer, we can use these.
		. Able to handle millions of request per second
		. Can be enabled to work from different availability zones for added HA
		. Can be asswigned static addresses
		. Each instance on the target group can listen on a different port number.
		. Since it works at the tcp layer, it is faster the the apllication load balancer.

	Implement network load balancer


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


Integrating with other identity providers

	Integrating wiht Microsoft Active Directory

	SAML Federation
		.. Security SAssertion Markul Language

	
	Steps
		. Need a Active Directorive Federion Service in the On-Premise networks
		. Then create a saml provider in aws
		. Then need to add AWS as the trusted erlying party in the ADFS 
		. Then configure clamins on your on-premise ADFS to accept incoming requests from aws and map it in the active directory groups

		. AWS ROLES ARE MAPPED TO ACTIVE DIRECTORY GROUPS !

Using a Directory Service

 ....


AWS COGNITO

	Provides authentication and authorization for web and moible app

	Identity Provider , define users, allow users to perform actions
	Users can sign in with a user name and paswword or via third party such as google and facebook,
	Create user pools or identity pools.

	User Pools:
		. Service automatically provides signup and signin services
		. Users buildtin UI for sign in
		. User other signin providers
		. Directory management and user profile management
		. Enable MFA



IAM ROLES
	
	. IAM roles plays part in designing and securing any application.

	. For interactions between services.

	. Whenever any entities , such as a lambda function, or a user, or a ec2 instances tries to assume a role:
		.. sts::assumeRole
		. Every role has a trusted relationship policy
			.. If the entity isn't there, the entity can't assume that role.

		. Once this action is perform, it will generate temporary credentials
			.. AccessKey
			.. SecretAccessKey
			.. SessionToken
			-> Having these 3, its the same as having a user.
			-> By default, it expires 1h
				( configured between 15m to 12h)
				.. The request fails if outside the allowed range.

		. Ec2 instance using ec2 role to upload a doc to s3:
			this happens under the hood.
			Important to know how these credentials are generated:

		. When using federated access, need to use the dsks.

		IAM Have a trust relationship -> defines which service can assume the role
		Roles can have am policy attached, to define which services can be accessed by the roles temporary credentials

	. Types of role:
		AWS Service role.
			Role tahat services assume to perform actions in your account on your behalf.
			Access only within your account, cannot grant to someone outside the account
		AWS Cross Account Role
			This allows other accounts to work
		AWS Service-linked Role
			Predefined by the servvices and includes all the permissions that the service requesers to call other aws services on your behalf
		Web Identity Roles
			. A role that allows users federated by the specified external web identity or OPENID Connect provider to assume this rle to perform actions in your account.
		SAML 2.0 Federation Role
			. Same, but for SAML.

	. Best Practices

		Root Accounts
			.. When creating a account, the email used to create becomes the root user. This becomes super user.
			.. Don't use the root account day-to-day: Create Individual IAM Users, or User IAM Groups, and assign the right policies.

			Avoid Root User access keys. Ensure to use the console password if need to login
			Use a Strong password.
			Don't relay the root user account
			Enable MFA for the root account.
		IAM Users and groups
			.. Create separate users
			.. groups users into groups and assign permissions
			.. create stron passwords 
			.. enable MFA
			.. Rotate credentials
			.. Apply password policies
			.. Remove unnecessary credentials
			.. Grant least privilege
			.. You can use the cloudtrail or the user advisor to see what are the actions being performed by users. Use that to grant the required privileges.
			.. Use IAM Roles for apps that use in ec2 instances
			.. Use monitoring Tools
				.. AWS CloudTrail, AWS Config.


Encryption
	
	Types of encryption

		.. Mandated requirement for many organizations
		Aplicable to the data inbound and outbound of the aws.
		Also, stored.

		For transit:

			VPN with IPSec.
			Using TLS for network level traffic
			SSL Certificates for webapplications and cloudfront
			HTTPS listener for your application load balancers -> Offload the work of the encryption / decryption to load balancer
			Using SSL to encrypt a connection to a DBInstance
			Using VPC endpoints to keep data transit flow private to aws network. ( No public traffic )

			>> Always choose options that provide encryption

		For rest:

			AWS Default encryuption for some services, such as S3. 
				.. For now it uses AES256
			Client Side encryption:
				.. As a client, you encrypt the data with your own keys, and store it already encrypted.
			AWS KMS

	KMS:
		This service does not encrypt the data itself!!

		Customer Master Keys ( CMK )
			.. Encrypt and decrypt up to 4KB of data.
			.. Generate and encrypt and decrypt the data keys that you use outside of aws kms to encrypt your data


			data <- encrypted by a key.
										<- generate OR  encrypt this key using the CMK.

			This is called Envelope Encryption

		CMK:
			Customer managed
			Aws managed
			AWS owned


Certificate Manager
	
	Create and managed public SSL / TLS based certificates
	Can be used for AWS based websites or applications

	You can use the public certificates provided by acm or import your own
	each certificate is valid for 13 month
	each certificate must have at least 1 fully qualified domain name.

AWS Inspector
	
	Security Puposes

		This tool can be used to test the network accessiblity of amazon ec2 instances
		Also can be used to check the state of security of the underlying applications running on those instances
		Scan applications to check for any vulnerabilities and deviations from best practices.
		Automate security vulnerability access throughout dev.

	
	How

		Install agent on the instance
			.. Manually or using the wizard
			.. Not necessary if only network based.



Guard Duty
	
	What is GuardDuty
		Continuous security monitoring
		Analyzes the following data sources:
			VPC Flow Logs, CloudTrail events, DNS Logs
		Identify unexpected and potentially unauthorized and malicious activity from within the aws account.
		Uses existing threat intelligence feeds and lists that cointains malicious IP's and domains.


	What it can detect:
		Escalation of privileges
		Uses of exposed credentials
		Communication with malicious ip, url or domain
		Compromised ec2 instances having malware,
		detect unauthorized infrastructure deployments on the account

	How to Use
		Enable ( Region Specific )
			.. Its possible to invite other accounts. This makes your account master.


AWS Shield
	
	What is
		Helps protect against DDoS attacks.
		Two types of service:
			Standard:
				 Automatically avaible at no additional charge
				Helps against network and transport layer ddos attacks
			Advanced
				Higher level of protection against attacks that target applications hosted using services such as ec2

	How to use


Securing against attacks
	
	MitM

		Route53:
			Configure DNSSec

		Using application load balancer with ssl / tls
			SSL Cerficates 

	DDOS attacks

		AWS Shield Advanced
			. AWS DDoS Response Team
			. Global Threat Environment of the attacks

		Use Larger Ec2 Instances 
			. 25 gb network interfaces and enhanced networking
			. Same idea with Load Balancer

		Using Load Balancer:
			Ensure that only well formed web requests are routed.

		Use CloudFront to distribute content
			. Only accepts well formed connections
			. Edge locations reduce load

		Amazon Route 53
			. This service has measures in place to cope

		Web Application Firewall
			. Work with CloudFront and the Application Load Balancer


Intrusion Detection and Prevention
	
	What is 
		. Use Instruction Detection and prevention system to monitor network and system for any sort of malicious activity
		. Add an extra ley of security
		. Alert admnistration of any sort of possible incidents or even report any sort of mailicous attemps
		. Prevent or block attacks from detected intrusions and malicious IP's 

		. Security Groups restrict taggic onto EC2 instances
			.. However, if any port traffic is allowed, malicious users can still send TCP packets on these ports which could be used to infiltrate the EC2 instances
		
		. They look at the tcp packets entering the ec2 instance and interpret whether the request is a proper request or not
		. Third Party tools from the AWS MarketPlace

Designning for Reliability
	
	Reliability needs to be achieved at every level of your system or application
	You have to ensure your application is Reliable
	You have to ensure your underlying infrastructure hosting is reliable
	Also account for the reliability of external services that you might be using from your application


	Terms

		Fault Tolerance -> How tolerant is the system to faults
			What happens if faulty code is promoted to production?
			What happens if the underlying server hosting your code goes down?
			What happens if your database goes down?
			Does it impact your sla?
			Does it lead to customer dissatisfaction?
		High Availability -> Look at ways to make your system HA
			Make use of Avalability Zones to spread your workload.
			Make use of highly available services such as s3 and dynamoDB

		Disaster Recovery -> Some companies have mission critical application running on aws
			Here we can't afford to have the system donw, and would normally need to match SLA of 99.99%
			So even if the entire region hosting AWS services goes down, there must be a plan in place to recover from that failure.

		Recovery Time Object :  a metric of time.
			How long can a company wait for a system to be brought back online after a fault has occured if the system has gone down.  
			This could be a SLA of just a couple minutes for mission critical applications.
		Recovery Point Objective
			The amount of data loss that a company can live with. Suppose a database has become corrupt. If the company defines an RPO of 30 minutes, that means we should be able to recover the data at least 30 minutes before it became corrupt.

	Strategies

		Backup and restore
			This is the simplest strategy to implement.
			The cost are also the least when you implement this method.
				RDS -> Automated or manual backups. 
			In case of problems, use the backups and restore the data to a new database.
			The issue with this strategy is the time it takes to recover from a loss.
				. The data needs to be recovered from a backup
				. This means that, for an RDS instance, depending on the size, the restore could go from minutes to hours.

		Pilot Light
			In this strategy there is a minimal version of an environment that is always running in the cloud
			Ensure the services that are critical are replicated to another environment.
			If there is an issue with the primary environment, just switch over to the pilot light environment.
			Incurs extra cost with another environment in place. 
			If natively transferring data, need to ensure the strategy for data sync is properly maintained
			RTO is reduced
			the RPO depends on the sync process.

		Warm Standby
			Scaled down version of a fully functional environment.
			When disaster occurs, the secondary environment can be scaled up.
			Most of the points are the same as the pilot light: 
				extra cost,
				native sync,
				RTO is reduced even further than pilot light
				TPO depends on the sync process.

		Multi Site
			Here we have an active-active configuration
			Two replicated environments running all the time.


Amazon EC2 AutoScaling

	What is
		Application Deployed -> Many Users ->  Too much load.

		WorkArounds: 

			Change Instance Type. -> Vertical Scaling -> Limits

		Best is:

			Scale out the number of EC2 instances.



	Working With

		Define the launch configuration:
			define the types of instances
				Define the Group
				For the scaling group, you can perform a manual scaling.
				We can perform scheduled scaling
				Also can perform scaling based on metrics.

	>> apt-get stress


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



Route 53 Health Checks
	
	What Are

		Health checks can be used to monitor an endpoint either via an IP address or a domain name
		The health checks will then check the health of the endpoint at regular intervals
			Define the Interval,
			Define the Endpoint
			Define the protocol ( HTTP vs TCP )


	Examples

		Use health checks along with the failover routing policy



AWS Lambda and SQWS

	Add reliability

	The benefits of using SQS with Lambda

	When Messages are sent to an SQS queue, they can be automatically processes by the Lambda Function
	Lambda can connect to both standard and FIFO queus
	AWS will continuosly  poll the queue and invoke the function synchronously that would process new messages
	AWS LAMBDA can read messages in a batch and multiple batches at a time
	Once processes, they are removed from the queue

	The visibility timeout for the queue, ensure the timeout is at least 6 times the timeout configured for the function
	At error, send to a dead letter queue
	Notify when errors occur.


S3 Replication
	
	Replication of data in S3
	
		Replication allows the copying of objects accross s3 buckets
		Either cross or within region

	Why?
		Compliance
		Latency - Replicate objects to bring the objects closer to the user.
			

	How to implement

		Source and Destination bucket must both have versioning enabled.
		Create rule in the source bucket to enable replication
		When creating the rule, you must also specify a role that would be used to allow the replication to take place.
		While being replicated, we can also change the storage tier.





Higher Availability with DynamoDB
	
	Global Tables

		This feature allows tables to be available accross multiple regions
		If you want data to be accesses from other regions with the least altency, you can make the data available in the edestionation region with the help of the global talbesDynamo automatically propagate the data to the destination regions
		Helps both with latency and HA, single you using multi AZ / multi region

	Backup and Restore
		Backups can be created on demand
		Backups do not consume provisioned throughput
		Backups contain Global Secodary indexes, local secondary indexes and provisioned read and write capacity
		Tables can be restored from the backup


Amazon Cloudfront with S3
	
	The benefits of using cloudfront with s3

		serve static web site
			-> No server-side rendering.
		
		Decrease latency
		Also can make use of Amazon Cognito
			. Login with Facebook or Google
		

	An example

	>> ORIGIN ACCESS IDENTITY

ElastiCache
	
	What is ElastiCache
		.

	Compare different caching engines
		If you are looking for simple object caching, consider memached
		if there is a requirement to run large cache nodes, consider using memcached

		if you need to store complex data types such as lists, hashes, bit arrays, then consider using redis
		If you need to implement sorting and rankings of datasets, consider using redis
		If you need high availability of your cache store with the help of multiple availability zones along with failover, then use redis
		If needs compliance such as pci and encryption, use redis

Data Analytics


	What is Amazon EMR

		Elastic Map Reduce

			Create cluster to run big data fraemworksd such as hadoop or spark

			Data, Input and Output can be stored in amazon s3
			use Cloudwatch to monitor performance

				Core Hadoop
				Hbase
				Presto
				Spark

		Cloudsearch
			Search solution for an application or website
			Web pages, document, files, event web posts
			index and search both structed and plain text
			boolean search, range search or full text search

		Aws Glue

			Fully managed ETL
			Move data reliably between vairous data sources
			categorize, clean and enrich it
			Totally serverless

			Consists of a central metadata repo known as glue data catalog
			Also with a etl engine that produces python / scala

		QuickSight

			Build Visualizations, perform ad hoc analysis and get insight
			works with a variety of data sources
			prepare data before
			create different types of visualizations

Machine Learning tools
	

	Use Case
		Objects store in a S3 bucket.
			User uploads images to the bucket.

		Upload triggers lambda that call Recognition.
			Recognition takes the metadata and stores it in dynamoDB.


	SageMaker

		Fully managed machine learning service
			.. DS and developers
			.. Build and Train ML Models. They can then be deployed to production based environment
			.. Also have access to jupyer notebooks that can be used to explore sources
			.. Common ML Algos that can be used against large data sets

	Rekognition

		Image recognition service.
		Detect Objects within an image.
		Detec Similar faces in a collection of images
		Detec Attributes of a face -> Are eyes Open?
		Detect explicit content.

	Amazon Comprehend

		Extract insight about the contents of documents
		UTF-8 text files
		detect entities, key pgrases, language, sentiments, and other elements
		social feeds or product mentions


	Aamzon Machine Learning service

		Visu tools and wizard in this service to create models without the need to learn complex ML Algos


AWS Athena
	
	Query data in S3

		What is the purpose


			Interactive query services that allows to analyze data directly from the amazon s3.
			Complete Serverless

			Query and analyse unstructured, semi-structured and structured

			formats such as CSV, JSON, Parquet, ORC.

		Demo
			...

Amazon Workspaces
	
	Virtual Microsoft Windows or Amazon Linux Desktops for users

	Eliminates the need of having hardware required for deploying the desktop machines


Amazon AppStream
	

	Fully managed application streaming service.

	Provide users with access to desktop based application from anywhere

	existying desktop applications can be added using this service and then streamed to users
	user AppStream 2.0 client or HTML5 capable browser for application
	No upfront investment or maintaning of the underlying structure.


Amazon Kinesis Data Streams
	
	What Are Datastreams


		Service used to collect and process large streams of data records in real time
		use this to build systems that can send and consume data in real time.
		You can have a continuous stream of data inflow into Amazon Kinesis Data Streams. Data could include application logs, social media, web clickstream data
		You can then have consumers that can take this data and process them in real time


	Can not persist data. Maximum retention period is 7 days.

		Data Streams
				
		Delivery Streams ( Firehose )
		Analytics Application
		Video Streams

	How to use Datastreams



	>>> KINESIS vs Kafka

aMAZON kINESIS dATA fIREHOSE

	This is a fully managed ervice that can be used to deliver real time streaming data to destinations suchg as amaozn s3, amazon redshit, elastic search service and splunk

	Use to persist Data Ingested from the DataStreams into persistence providers.

	Can create Transformation / Converting steps to transform during the streaming.

Instance Types
	
	Decide on the right instance type

	General Purpose 
		.. Balance of compute, memory, network
		.. A1, T3, T2, M4, M5
		.. Some of these also support up to 25 gbps bandwith

	Compute Optmimized
		.. Batch Processing, High Performance, media transcoding, and gaming
		.. C4 and C5

	Memory Optimized
		.. Process large data sets
		.. High Performance databases, in-memory cache, real time big data analystics
		.. R4, R5, X1
	Accelerated Computing
		.. Applications that need hardware accelerators
		>.. Ideal for  ML and Dl, or HPC
		.. P2, P3, G3, G4

	Storage Optmimized
		.. High, sequenctial read, and write access to large data sets on local storages
		.. Good for inmemory and NoSql databases
		.. I3, D2, H1


API Gateway and AWS Lambda
	
	API Gatewauy
		Creating , publishing, maintaining, monitoring and securing rest and websocket api
		Highly Available
		Traffic Management, Autorization, Monitoring, Access control and Version Management.
		Access wqorkloads can run on ec2, lambda or any other web application

	Lambda
		Serverless computing
		Runs in high-availabilty infrastructure
		You can reduce your compute cossts by running your code on aws lambda instead of hosting them on ec2 instnaces
		Maximum execution Time ( 15 minutes ) , with maximum memory assignment of 10GB


AWS Batch
	
	Runs Batch computing workloads
	Jobs can be Shell scripts, Linux executables or Docker container images

Transfer Data
	
	How to transfer data

		AWS Snowball	

			Physical storage device that can be used to transfer large amounts of data between amazon S3 and your on-premise data center
			Up to 80 TB data. good if you have limited internet bandwidth.
			If less than 10tb. Snowball Probably is not the most economical choice. 
			The data is encrypted on the device
		AWS Snowball Edge

			Symilar to snowball, but also has on-board storage and compute power
			Can perform edge-computing workloads in addition to transferring data between your on-premise data center and the aws cloud
			around 100 TB local storage
			Netwrok adapter with transfer speeds of up to 100 GB/ SECONDS
		AWS Snowmobile
			Trnsfer or move 100 Petabytes
		AWS S3 Transfer Acceleration

			Transfer files to s3 in a remote region
			If long distance between client and s3, it could take a long time to tyranfer the data

Migrating Databases
	
	DMS
		Helps in migrating relational databases, data warehouses, nosql databases and other data stores as well
		you can use aws cloud or on-premise data stores as your source or destination
		if you need to change database engines, you can use the aws schema conversion tool to convert the schema to the target database platform
			.. Source : Oracle SQLServer, Mysql, MariaDB, Postgres, Mongdb, SAP ASE Aurora
			.. Sink: Oracle SQLServer, Mysql , Postgre, Redshift, S3, DynamoDB.

	How to use

		Possibly:
			One step migration
				.. Just replicate
			Two Step Migration
				.. IOnitial Chunk using Snowball
				.. Then , migrate just the delta data.


Migrating Workloads
	
	Net Application and Cassandra
		Supposed a companny has a .net application. This application use Cassandra as the data layer
		They want to migrate this architecture to aws
		They want to miniize the administrative overhead in managing these solutions when they are moved to aws.
		They don't mind making code changes if required to meet the migration requirements.


		Possibilities

			Ec2 instances? 
				No , administrative overhead.
			Moving the .net application to Elastic Beanstalk	
				Sure.
			Moving Cassandra data to dynamoDB
				Sure,
				Also, use DMS to migrate to any other database.

	Migrating documents
		A company has a large set of documents that need to be migrated to aws.
		They need the data store unit to be highly available and sacalable
		Data must be encrypted at rest and in transit.
		The company wants to ensure that they manage the encryption keys.

		Possibilities

			EC2 Instances with EBS Volumes
				Not cost effective. Mannually increasing the storage and manage high availability
			DynamoDB
				Not a data store documents

			S3 
				Yes, use KMS to manage keys


Cost Explorer


	
	Tool that can be used to view and analyse costs and useg
	View data for up to the last 13 months
	Also, forecast for the next 3 months
	If using EC2 instances, you can algo get recommendations on wheter it would be a cost effective option to use reserved instance.
	Billing Dashboard
	Can create and share reports

Cost Considerations
	
	Architectures to achieve cost effectiveness

		Usiung Lambda
			Trigger when data is ingested
			Remember the limit on the memory and invocation time


		Using CloudFront

			S3 being used to distribute objects. 

				Suppose its in the singapore region
				However, users need to access it from other regions
					Its possible to copy the data to other buckets located in near regions
					It would be better to use the cloudfront to distribute the content to different regions

Spot and Reserved instances
	


	Spot
		Can greatly reduce the price.
		The hourly price for a spot instance is less than that of an on-demand instance
			However, Spot instances are only available if there is spare compute capacity available in AWS
			If you have a spot instance and the spare capacity runs out, then the instance will be taken back from you
		Good for workloads that can be interrupted and resumed easily
			Data Analsysis , Batch Jobs, Background Processing Jobs

	Reserved
		This is a pricing model
		Also can get significant discounts.
		Avail discounts by commiting to a term to buy ec2 capacity for a one or three year term
		If pay upfront costs, we can get better dicounts

	Amazon EMR can also do Spot or Reserved Instances
	Also Use Reserved Instances for RDS.



S3 Storage Classes

		
	The costs associated on the s3 requests:
		Based on 
			the request type
			the volume of data.

	Storage Classes gives different Tiers

		Configured at the object level

	Standard
		General purpose storage of frequently access data
		Default storage class.
		Data is replication across 3 different availability zones
		Durability of 99.9999999999 and availability of 99.99 ( Highest of all storage clases )
		Low latency and high throughput
		Costliest
		S3 Lifecycle management is sused to configure the lifecycle policies to automaticaly migrate objects from this class to the other appropriate storage classes

	Standard-IA 
		long lived, but frequently access data

		Also replicated across 3 AZ.
		Same durability of Standard. 
		Availability is 99.9% ( Lessger )
		Cost Lests than s3-standard - Charges you for retrieving the data per GB
		Also supports Lifecycle management.

	S3 One Zone
		Only storage at a single availability zone
		Same surability, but with availability of 99.5%

		Costs are 20% than standard-IA
		Also charges by retrieving the data per GB

		Good choice for storing secondary backup or easily re-creatable data, or for storage used as an S3 cross-region replication target from another aws region
		Also Supports lifecycle policies.

	
	Intelligent-Tiering	
		Cost optimization without performance impact
		Monitors objects. If access >= 30 days, it moves then to infrequent access tier.
		When acessed, these items are moved back again to the frequent access tier.
		No retrieval fees, nor additional moving-between-tiers fee, but charges a monthly monitoring and automation fee per object.
		Ideal for long-lived data with access patterns that are unknown or unpredictable
		Suitable for objects larger than 128KB that you plan to store for at least 30 days.
			If you delete an object before the end of the 30-day minimum storage, you are charged for 30 days.
		Also Supports lifecycle policies



	Glacier 
		Secure, durable, extremely low-cost
		Three options for retrieving:

			Standard
			Expedited
			Bulk
		Archived data can be retrieved in a few minutes to hhours and the user will be charged according to the option used.
		Costs Significantly less than all other S3 storage classes, charges you for retrieving the data per GB.

	and Glacier Deep Archive
		Lowest cost storage class, designed for long-term retetion for data that will be retained for 7-10 years
		Data can be restoresd within 12 hours.


Well Architected Framework
	
	Design principles, guidelines and best practices that enable the solution architects to review and improve the existing cloud-based architecture and understand the business impact of the 	design related decision

	Five Pillars

		Security
		Performance Efficiency
		Operational Exellence
		Reliability
		Cost Optimization

	Strategies to compare the current workload and obtain guidance to produce stable and efficient systems
	costistent approach for customers and partnesrs to evaluate architectures and implement designs that will scale over time
	Helps cloud architects build secure, high-performaning, resilient, and efficient infreastructure for their application
	Build and deploy solutions faster
	Lowers or mitigate the risks
	Make Informed Decisions
	Learn AWS Best Practices

	General Design Principles

		Stop Guessing the capcity needs. 
		Test System at production Scale
		Automate to make architectural experimentation easier
		Allow for evolutionary architectures
		Drive Architectures using data
		Improve through game days




	Security Pillar

		Protecting Information And System
			Confidentiality
			Integrity
			Privilege Management
			Protecting system
			Detect Security Events

		Strong identity Foundation
			Centralized Privilege Management,
			Least Privileged Access
			Short Term Credentials
		Protect Data in transit and at rest
			Ensure the data stays protected. 
			Use Encryption, Tokenization, Access control
		Keep people away from data
			Avoid giving direct access to data
		Apply Security at all layers
		Enable Traceability
			Continuous Monitor
		Prepare for security events
			Security drills

		Best Practices, Key Services and Questions

			Identity and Access Management
				.. IAM
				.. AWS STS

				... How do you manage credentials and authentication?
				... How do you control human access?
				... Hwo do you control programmatic access?

			Detective controls
				.. CloudTrail, S3 event logs, VPC Logs, Cloudwatch, Amazon GuardDuty

				... How do you detect and investigate security events?
				... How do you defend against emerging secutrity threats?

				Processing Logs, Alarming

			Infrastructure protection
				Defensive mech for the resources, and comply with regulatory obligations
				Boundary protections, comprehensive logging, monitoring, alerting
				.. AWS Config Rules
				.. Amazon Cloudwatch Logs
				.. Amazon Inspector

				... How do you protect your networks?
				... How do you protect your compute resources?


			data protection
				AWS KMS
				.. How do you classify your data?
				.. How do you protect your data at rest?
				.. How do you protect your data in transit?

			incident response
				IAM
				CloudTrail
				CloudWatch Logs
				AWS Step Functions

				.. How do you respond to an incident

Continous Integration and Delivery
	
	What are the tools

		AWS Code Commit
			- VCS Control service
			Primarily used by developers to store and version their code
			Secure, scalable managed service for hosting private git repositoies
			devs can review and comment on other code changes before they ar emerged
			no limit on the size of the repository
			integration with other aws aand other thrid party services

		AWS Code Pipeline

			Continous delivery service
			Model and automate the different steps required for the release of a software
			Control every stage of the relase lifecycle of your application
			Also add manual steps in the relase pipeline in case approaves are required at any stage



		AWS Code Build
			Fully managed build service
			Automate build procces for your software code
			Choose where the source code comes from
			decide which build environment to suse
			define the diffrent build steps

		AWS Code Deploy
			This is a deplyment service that can be used to automate application deployments
			The applications can be deployed asutomatically onto amazon ec2 instances, 		 on-premise , lambda functions or ecs
		

		CodePipeline

			Source ( CodeCommit )
			Build ( CodeBuild )
			Deploy ( CodeDeploy )

Blue Green Deployments
		
	Deployment approach that is used to provide near zero-downtime when new versions are relased
	allows to quickly roollback changes
	Two identicals environments that are running different verions
	The blue environemtn is used to depict the current application version.
	Green environment has the new version


	Benefts

		Ensure application is running as it should before the cutover
		Can have a set of users approve the environemnt before the switch over
		Here there is less risk when you want to deploy a newer version of your application
		Can always roll back

	How to Implement:
		Route 53
			Create Record in Route53 using Weighted Routing Policy





Rolling Deploymnets
	
	Elastic Beanstalk

		Suppose : Load Balancer + several ec2 instances
		Instead of doing a full deployments at once, do it in batches.




	AWS Lambda

		Within lambda, a new version of the function is created
		The system then automatically routes traffic slowly to the new application version
		The configuration can be done using AWSCodeDeploy and AWS SAM
	
	CloudFormation
		You can use AutoScalingRollingUpdate Policy to define how rolling updates are handled when aws cludformation is used to deploy an autoscaling group
		Here instruct wheter the updates need to be done in batches or all at once.

	



Beanstalk
	

	Quickly Deploy and manage applications onto aws
	Manage the complexity involved in creating and managing the environment
	deploy various types of environemnts and just upload your application code




	Configure BlueGreen Deployments in EBS
		Has a feature known as Swap Environment URLS
			.. Can be used to perform Blue/Green Deployments
				... Create 2 environemnts
				... When using the swap environemtn feature, the cname of the two environments are swapped, which redirects traffic.

OpsWork
	
	
	Configuration Management Service

	Configure and operate applications by using configuration management tools such as chef and puuppet 
	Using the service, you define a stack
	In a stack you can have multiple layers

Improving Network performance
	
	Enhanced Networking
		Feature that can be used for ec2 instances to provide higher bandwidgth and higher packet per second
		Also used to provide lower inter - instance latencies
		Up to 100 GBS via enhanced network

	Placement Groups
		Place instaces close together
		Might have a requirements that an aplication that is making use of multiple ec2 instances and a lot of communication between them
		Lower network latency, higher network throuput

Availability
	
		Using Multi AZ
			. Deploy multiple subnets as part of the VPC.
			. Make sure that both subnets are not at the same availability instances

		Using Load Balancer
			. 
		Using Elastic Autoscaling
			. Scale based on demand


Elastic Block Storage
	
	Created in a particular AZ
	The data is replicated intra-zone

	Do not check delete on terminated
	Backup data by creating snapshots
	copy snapshot for disaster recovery purposes

	Standard RAID configuration can be used for ebs

	RAID 0 
		IO performance >> fault tolerance 
		Ideal for the ec2 instances are hosting databases
	RAID 1 
		Fault tolerance >> io performance
		Data is written to multiple volumes at a time, and more ec2 to ebs bandwith is required.


Storage Gateway
	
	What is  the storage gateway
		This is a service that you can use to connect on-premise software applicae with cloud-based storage devices
		cost-effect for companies that need to extend their on-premise storage
		Inbstead of buying extra on-premise storage, they can use the storage gateway.




	File Gateway

		This gateway supports a file interface to the S3
		Can store and retrieve objects into amazon s3 using the standard file protocols such as Network File System ans Server Message Block
		An appliance needs to be deployed into your on-premise environment, either on a vmware environment or a hyperv
		then, mount the file system onto the S3


	Volume Gateway
		This gateway support the creation and usage of volumes that can be mounted as internet small computer system interface devices

		Cached volumes
			Data is stored in s3. A copy of frequently accessed is stored locally.

		Stored volumes
			All Data is stored locally. Effective when need to access locally. A copy of the data is then stored as a point in time snapshot to s3.


	Tape gateway
		Supports the ability to store data effectively in glacier or deep archive
		Make use of a virtual tape infrastructe
		

	Example with VOlume

	How to work with the aws storage gateway




Elastic File System
	
	Only for Linux
	Windows based : Sfx

	Block Storages are local to each instance, but 
		Elastic File System Can be shared between services

	Can work with S3.
	


Serveless Application Model
	

	A serveless application can consist of a Lambda function and additional resources to support the application

	The main part of the application is the SAM file. It defines the application
	Then, use the CLI to deploy it.

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

AWS Tools
	
	Other tools:

		Amazon Connect
			
			Cloud Based Contact Center Solution
			Metrics and Real Time report to optime contact routing
			Pay as you go
			Create Flows that allow to define the entire customer experience


		Amazon Chime
			Communications Services
			Online Meetings, video Conferinc, Calls and Chat
			Fully managed

		Amazon WorkDocs
			Managed Storage Sharing
			Other Memebers will not have access to your files
			Users can share files for collaboration

		Amazon WorkMail
			Service that provides business email, with calnder support
			Support for existing dektop and mobile email clients

Improvig Application Performance

	Xray
		Detailed Performance Trace for your application Requests
		You can use the XRAY SDK Along with the applicat
		Can instrument the application code.
		Integratable with Lambda

	Chossing Right Instance Type and Volume Type
		Consider Using 
			Compute Optmized Instance type
			Providisoned IOPS SDDS
		Use Cloudwatch metrics to monitor compute and volume usage

	RDS Insights
		Analyzes the database load
		Troubshoot database performance
		Performance metrics for SQL Statements





-----------------------------------------------------------------------------


CloudFormation does support OpsWork as a template.
CodePipeline does support OpsWork as a deployment Target ( https://docs.aws.amazon.com/opsworks/latest/userguide/other-services-cp-chef11.html )
	OpsWork should be put into the Deploy Stage of the pipeline.
	The Stacks / Layers should already exist.

...

Direct Connect is ideal for clients who want to establish private connectivity between their om-prem network and aws for some locatoion -> Not the right solution for moving files from multiple locations. 

S3 Transfer Acceleration gives the ability to write into the single s3 bucket from variavous location, using edge locations to move the data. It does not work with Amazon Glacier.
( https://aws.amazon.com/about-aws/whats-new/2016/04/transfer-files-into-amazon-s3-up-to-300-percent-faster/ )

...

Deploying containers using ec2 require management taskss.

...

Embedding keys in the application create security concerns.

Redshift uses HSM certificate to connect to the clien't HSM store and retrieve the keys used to encrypt the cluster databases.

IAM Roles allow least priviledged access , giving temporary credentials.

...

AWS Direct Connect is useless when there is no on-premise datacenter involved.

... 

Elastic Network Interface allows for fixed MAC addresses , as well as re-attachment to a failover instance.

...

VPCs with overlapping CIDR cannot peer.
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-peering.html

...

AppStream supports federated sign-in using SAML 2.0

...

AWS Support IpUnicast ; S3 data can be copied into root volume at boot time.

...

You cannot modify DHCP options of a VPC.

...

Kinesis agent continuously monitors a set of files and sends new data yo your stream; Also emits Amazon CloudWatch metrics.

...


We can have multiple vpc serving various departments, and use tags to define them and have one billing accounts. The tags associated with the bpc will distinguid each deparment or environment.
VPCs help segregate and organize your resources as per the functionality or domain, thus enabling the account owner to get insight into the resources costing within the logical grouping of the resources. 

...

You can use the amazon s3 transfer acceleration speed comparison tool for comparing general upload speed accross different aws regions, but not edge locations.

...

what is ip multicast ( https://aws.amazon.com/articles/overlay-multicast-in-amazon-virtual-private-cloud/ )

...

about canary and blue green deployments

	https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/comparison-of-blue-green-deployment-techniques.html
	https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/clone-a-stack-in-aws-opsworks-and-update-dns.html
	https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/when-bluegreen-deployments-are-not-recommended.html

...

About raid configurations

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/raid-config.html

...

About S3 encryption 
'
	https://aws.amazon.com/blogs/security/how-to-prevent-uploads-of-unencrypted-objects-to-amazon-s3/#more-1038
	https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html
'
About Cloudfront Signed URL

	https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-choosing-signed-urls-cookies.html

...

the most likely reason for the capaciuty error is that the underlying hardware may not have the capacity to launch any additional instances on it. If the instsances are stopped and restartted, aws may move the instances to a hardware that has the capacity for al the requested instances
There are no limits to the number of instances in a placement group.

A placement group can span peered vpc in the same region

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html



...


Amazon Kinesis can route related records to the same record processor; 
	Also has ordering of records.
	Ability for multiple aplications to consume the same stream concurrently
	7 day durability

SQS Has the ability to configure dealy of up to 15 minutes for individual messages
	Deletion of acked messages and redelivery of failed messages after a configured visibility timeout

...

https://www.whizlabs.com/learn/course/aws-solutions-architect-professional/168/quiz/13603/report/5715966
question 53 is ?????


...

AWS Inspector is used for EC2 and cannot be used to inspect API Gateway

