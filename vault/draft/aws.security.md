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




Embedding keys in the application create security concerns.



Redshift uses HSM certificate to connect to the clien't HSM store and retrieve the keys used to encrypt the cluster databases.



    . IAM
        .. Identity Access Management.
        .. Authentication, Authorization, and Accountability

        .. Users
            ... Is a person, who will receive access to specific resources.
        .. Principal
            ... An IAM entity who has access
        .. Root
            ... The main user created with the account
        .. Group
            ... Means to create a policy for a certain set of people.
        .. Roles
            ... Almost always, is a system ( service account ).
            ... Can be assumed by others systems and persons
            ... Short term credentials
            ... Can be Cross-Account / Federated.
                :> Be the most granular possible.

        .. Tokens
            ... Temporary. from 6 minutes to 36 hours
            ... Longer duration means better performance, but lower security.
            ...  

        .. Single Sign On
            ... Auth to multiple places using a single set of credentials

        .. Cognito
            ... Synchronize Identity management
            ... Can use Facebook or google, etc
            ... Can use with guest accounts as well
            ... Use Logs into Identity provider, which returns a Session Key. Application sends a getId, and cognitio validates it. If irs valid, cognito returns a unique identifier. Sending it , it will be validated against the ;

        .. AWS Directory Service ( Managed AD. )

        .. Authentication
            ... User name and Password
            ... Access Key ( usually via API )
            ... Access Key + Session Token
        .. Authorization
            ... Policies ( User, Groups , Roles )
                :> THey have an implicit deny. 
                :> What is the best way to do it? 
                :> AWS has some good managed policies
                    ::> Provides some 'pre-set' common use cases.
                :> Can create your own policies
                    ::> Copy and tune a pre-existing
                    ::> Policy Generator
                    ::>  




    . Fiewall -> IDS Ips -> DDOS -> NaCL -> Security Groups, HBF , Malware Protection, Hardening  -> Iam  , Route Hiding -> Encryption ->  



__)_



GuardDuty
    .. Analyzes cloudtrail, dns logs, vpc flow logs,
    .. Sends cloudwatch events , when sees something it doesn't like

Amazon Inspector
    .. Automated Security Service
    .. Automatically inspects applications 



___

Cognito : Identity Pools vs User pools

...



...

AWS Inspector is used for EC2 and cannot be used to inspect API Gateway


...




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



IDS 
	is an appliance that is installed on the ec2 instance that continuously monitors the vpc environment to see if any malicious activity is happening and alerts the system administrator if such activity is detected
IPS 
	appliance installed on the ec2 instances that monitors and analyzes the incoming and outgoing network traffic for any malicious activities and prevents the malicious requests from reaching the instances in the VPC.


...

https://aws.amazon.com/identity/federation/
Identity Federation is a system of trust between two parties for the purpose of authenticating users and conveying information needed to authorize their access to resources. In this system, an identity provider is responsible for user authentication, and a service provider controls access to resources. By agreement and configutarion the SP trusts the IdP to authenticate users . After authenticating a user, the idp sends the sp a message ( called an ssertion ) containing the uyser's sign-in name and other attributes that the SP needs to stablish a session with the user and to determine the scope of resource access that the SP should grant. 



...



There exists several ids / ips solutions offered in the aws market place.
...

