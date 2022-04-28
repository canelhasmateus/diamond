

Beanstalk
	

	Quickly Deploy and manage applications onto aws
	Manage the complexity involved in creating and managing the environment
	deploy various types of environemnts and just upload your application code




	Configure BlueGreen Deployments in EBS
		Has a feature known as Swap Environment URLS
			.. Can be used to perform Blue/Green Deployments
				... Create 2 environemnts
				... When using the swap environemtn feature, the cname of the two environments are swapped, which redirects traffic.




...

Elastic beanstalk web vs worker environment

...


EMR for dynamo and s3:

https://aws.amazon.com/articles/using-dynamodb-with-amazon-elastic-mapreduce/?tag=articles%23keywords%23elastic-mapreduce



	What is Amazon EMR

		Elastic Map Reduce

			Create cluster to run big data fraemworksd such as hadoop or spark

			Data, Input and Output can be stored in amazon s3
			use Cloudwatch to monitor performance

				Core Hadoop
				Hbase
				Presto
				Spark




AWS Batch
	
	Runs Batch computing workloads
	Jobs can be Shell scripts, Linux executables or Docker container images



___


....


EMR
    . Elastic Map Reduce
    . Say you have a lot of information
        .. ( Analyze and make better decisions )
    . Managed Cluster, part of your big data framework
    . Built on top of hive, hbase, spark


...


Ec2
    SPot
        . Discount for unused capacity.
        . Stateuless, fault-tolerant or flexible applications
        . highly integrated with other aws services
    Fargate 
        . Servierless compute engine for containers
        . Works with both ECS and EKS
    ECS
        . Shared state, optimistic ocncurrency system
        .  When launched with the fargate launch type, has its own isolation boundary and does share kernel and resources. 




___


EC2

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

...
....


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

___


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



...

the most likely reason for the capaciuty error is that the underlying hardware may not have the capacity to launch any additional instances on it. If the instsances are stopped and restartted, aws may move the instances to a hardware that has the capacity for al the requested instances
There are no limits to the number of instances in a placement group.

A placement group can span peered vpc in the same region

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html


    EC2
        . Virtual Machine
        . Primary compute engine on the AWS Platform
        . You can create your own or use prebuilt ( AMI's )
            .. An AMI is a file that contains the necessary data to launch a virtual machine.
            .. Can create one, use a prebuilt one, or buy one.
            .. If you need something better than WAF, you can to buy one ( marketplace )
            .. Can copy them cross region
            .. Can use it to do DR
        . You can create a bootstrap script  ( shell )
        . Choosing Instances
            .. On Demand
                ... Unknown Capacity
                ... Auto-Scaling

            .. Reserved Instance
                ... Known Capacity
                ... Foreseeable future
                ... Scheduled Reserved
                    :> Bactch COmpute
                    :> Cron Jobs
            .. Spot Instance
                ... Auction-Like
                ... Shuts down impredictably
                ... Non-Mission critical
        . Dedicated Host
            .. Basically, a dedicated server. Can manage your own hypervisor;
            .. If you have a license that needs to be attached to a certain host;
            .. very expensive, but fine grain control.
            .. Basically bare-metal.

        . Shared Tenancy
            .. Lots of people using the same underlying host.
        . Dedicated Instance
            .. Basically, a dedicated Hypervisor. You don't manage your own hypervisor. You just create / manage your own ec2 instances.

        . Securing EC2 access
            .. Firewall
            .. IDS
            .. IPS
            .. DDOS protection
            .. ACL on routers 
            .. Host based firewalls ( Security Groups )

            .. Security Group
                ... A security group is stateful! ( Pays attention to the connection, allows the response back. This means you only need to apply the security list one way.)
            .. Can Have multiple  multiple network interfaces
                ... Each network interface needs to be in a different subnet
                ... When a ec2 instance goes up, it gets an ec2-dns name ( which is private. ). to go online, it needs a public address.
        . Manage Machines
            .. EC2 console
            .. SSH / RDP
            .. SDK API

        . Speaking to executives, don't use abbreviations.



...



ECS
    . Elastic Container Service
    . Deployed inside your vpc 
        .. Can be used alongside eSecurity Group and Network ACL

    . Fargate

EKS
    . Elastic Kubernetes Service
    . Managed Service
    




___




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



..





Serveless Application Model
	

	A serveless application can consist of a Lambda function and additional resources to support the application

	The main part of the application is the SAM file. It defines the application
	Then, use the CLI to deploy it.


