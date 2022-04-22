## AWS Solutions Architect Professional Practice Test 3 - Results


# Question 50: Incorrect

A company runs a suite of web applications in AWS. The application is hosted in an Auto Scaling group of On-Demand Amazon EC2 instances behind an Application Load Balancer that handles traffic from multiple web domains. The solutions architect is responsible for securing the system by allowing multiple domains to serve SSL traffic without the need to re-authenticate and re-provision a new certificate whenever a new domain name is added. This change of architecture from HTTP to HTTPS will help improve the SEO and Google search ranking of the web application.

Which of the following options are valid solutions to meet the above requirements? (Select TWO.)

-   Create a new CloudFront web distribution and configure it to serve HTTPS requests using dedicated IP addresses in order to associate your alternate domain names with a dedicated IP address in each CloudFront edge location.
    
    (Correct)
    
-   Use a wildcard certificate to handle multiple sub-domains and different domains.
    
    (Incorrect)
    
-   Use a Classic Load Balancer instead of an Application Load Balancer. Upload all SSL certificates of the domains and use Server Name Indication (SNI).
    
-   Add a Subject Alternative Name (SAN) for each additional domain to your certificate.
    
-   Upload all SSL certificates of the domains in the ALB using the console and bind multiple certificates to the same secure listener on your load balancer. ALB will automatically choose the optimal TLS certificate for each client using Server Name Indication (SNI).
    
    (Correct)
    

Explanation

**SNI Custom SSL** relies on the SNI extension of the Transport Layer Security protocol, which allows multiple domains to serve SSL traffic over the same IP address by including the hostname which the viewers are trying to connect to.

You can host multiple TLS secured applications, each with its own TLS certificate, behind a single load balancer. In order to use SNI, all you need to do is bind multiple certificates to the same secure listener on your load balancer. ALB will automatically choose the optimal TLS certificate for each client. These features are provided at no additional charge.

![](https://media.tutorialsdojo.com/sap_alb_sni_custom_ssl.gif)

You can use your own SSL certificates with **Amazon CloudFront** at no additional charge with Server Name Indication (SNI) Custom SSL. SNI is supported by most modern browsers, and provides an efficient way to deliver content over HTTPS using your own domain and SSL certificate. Amazon CloudFront delivers your content from each edge location and offers the same security as the Dedicated IP Custom SSL feature.

The option that says: **Upload all SSL certificates of the domains in the ALB using the console and bind multiple certificates to the same secure listener on your load balancer. ALB will automatically choose the optimal TLS certificate for each client using Server Name Indication (SNI)** is correct. You can upload all SSL certificates of the domains in the ALB using the console and bind multiple certificates to the same secure listener on your load balancer. ALB will automatically choose the optimal TLS certificate for each client using Server Name Indication (SNI).

The option that says: **Create a new CloudFront web distribution and configure it to serve HTTPS requests using dedicated IP addresses in order to associate your alternate domain names with a dedicated IP address in each CloudFront edge location** is correct. You can configure Amazon CloudFront to require viewers to interact with your content over an HTTPS connection using the HTTP to HTTPS Redirect feature. If you configure CloudFront to serve HTTPS requests using SNI, CloudFront associates your alternate domain name with an IP address for each edge location. The IP address to your domain name is determined during the SSL/TLS handshake negotiation and isn’t dedicated to your distribution.

The option that says: **Use a wildcard certificate to handle multiple sub-domains and different domains** is incorrect. A wildcard certificate can only handle multiple sub-domains but not different domain names.

The option that says: **Add a Subject Alternative Name (SAN) for each additional domain to your certificate** is incorrect. Although using Subject Alternative Name (SAN) is correct, you will still have to reauthenticate and reprovision your certificate every time you add a new domain. One of the requirements in the scenario is that you should not have to reauthenticate and reprovision your certificate hence, this solution is incorrect.

The option that says: **Use a Classic Load Balancer instead of an Application Load Balancer. Upload all SSL certificates of the domains and use Server Name Indication (SNI)** is incorrect because a Classic Load Balancer does not support SNI.

  

**References:**

[https://aws.amazon.com/blogs/aws/new-application-load-balancer-sni/](https://aws.amazon.com/blogs/aws/new-application-load-balancer-sni/)

[https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-https-dedicated-ip-or-sni.html#cnames-https-dedicated-ip](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-https-dedicated-ip-or-sni.html#cnames-https-dedicated-ip)

[https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html)

  

**Check out this Amazon CloudFront Cheat Sheet:**

[https://tutorialsdojo.com/amazon-cloudfront/](https://tutorialsdojo.com/amazon-cloudfront/?src=udemy)

  

**SNI Custom SSL vs Dedicated IP Custom SSL:**

[https://tutorialsdojo.com/sni-custom-ssl-vs-dedicated-ip-custom-ssl/](https://tutorialsdojo.com/sni-custom-ssl-vs-dedicated-ip-custom-ssl/?src=udemy)

  

**Comparison of AWS Services Cheat Sheets:**

[https://tutorialsdojo.com/comparison-of-aws-services/](https://tutorialsdojo.com/comparison-of-aws-services/?src=udemy)

# Question 51: Incorrect

A company is hosting its three-tier web application on the us-east-1 region of AWS. The web and application tiers are stateless and both are running on their own fleet of On-Demand Amazon EC2 instances, each with its respective Auto Scaling group. The database tier is running on an Amazon Aurora database with about 40 TB of data. As part of the business continuity strategy of the company, the Solutions Architect must design a disaster recovery plan in case the primary region fails. The application requires an RTO of 30 minutes and the data tier requires an RPO of 5 minutes.

Which of the following options should the Solution Architect implement to achieve the company requirements in a cost-effective manner? (Select TWO.)

-   Use AWS Backup to create a backup job that will copy the EC2 EBS volumes and RDS data to an Amazon S3 bucket in another region. Restore the backups in case of a disaster in the primary region.
    
-   For a quick recovery time, set up a hot-standby of web and application tier on the backup region. Redirect the traffic to the backup region in case of a disaster in the primary region.
    
    (Incorrect)
    
-   Set up a cross-Region read replica of the Amazon Aurora database to the backup region. Promote this read replica as the master database in case of a disaster in the primary region.
    
    (Correct)
    
-   Configure an automated snapshot of the Amazon Aurora database every 5 minutes. Quickly restore the database on the backup region in case of a disaster in the primary region.
    
-   Schedule a daily snapshot of the Amazon EC2 instances for the web and application tier. Copy the snapshot to the backup region. Restore the backups in case of a disaster in the primary region.
    
    (Correct)
    

Explanation

**Amazon EC2 EBS volumes** are the primary persistent storage option for Amazon EC2. You can use this block storage for structured data, such as databases, or unstructured data, such as files in a file system on a volume. With Amazon EBS, you can create point-in-time snapshots of volumes, which we store for you in Amazon S3. After you create a snapshot and it has finished copying to Amazon S3, you can copy it from one AWS Region to another, or within the same Region.

Snapshots are useful if you want to back up your data and logs across different geographical locations at regular intervals. In case of disaster, you can restore your applications using point-in-time backups stored in the secondary Region. This minimizes data loss and recovery time.

You can create **cross-region read replicas for Amazon Aurora**. This allows you to serve read traffic from your users in different geographic regions and increases your application’s responsiveness. This feature also provides you with improved disaster recovery capabilities in case of regional disruptions. You can seamlessly migrate your database from one region to another by creating a cross-region read replica and promoting it to be the new primary database.

![](https://media.tutorialsdojo.com/sap_rds_cross_region_replica.png)

You can create an Amazon Aurora MySQL DB cluster as a read replica in a different AWS Region than the source DB cluster. You can promote an Aurora MySQL read replica to a standalone DB cluster. When you promote an Aurora MySQL read replica, its DB instances are rebooted before they become available. Typically, you promote an Aurora MySQL read replica to a standalone DB cluster as a data recovery scheme if the source DB cluster fails.

When restoring Amazon Aurora snapshots, or point-in-time restore, the restoration may take several minutes to hours. Long restore times are caused by long-running transactions in the source database at the time the backup was taken.

The option that says: **Schedule a daily snapshot of the Amazon EC2 instances for the web and application tier. Copy the snapshot to the backup region. Restore the backups in case of a disaster in the primary region** is correct. The web and application tiers are stateless, meaning they don’t have any important data stored on them. Therefore, copying the daily snapshot of the EC2 instance to the backup region will suffice. The RTO of 30 minutes is ample time to spawn new EC2 instances on the backup region.

The option that says: **Set up a cross-Region read replica of the Amazon Aurora database to the backup region. Promote this read-replica as the master database in case of a disaster in the primary region** is correct. Given that the RPO for the data tier is 5 minutes, it is better to create a cross-Region read-replica on the backup region. The primary DB instance will asynchronously replicate the data to the Read Replica. So in the event that the primary DB failed, the Read Replica contains the updated data. You can also quickly promote this as the master DB instance in case of a disaster in the primary region. You don’t have to wait for a long database snapshot restore time too, which might exceed the 30-minute RTO requirement.

The option that says: **For a quick recovery time, set up a hot-standby of web and application tier on the backup region. Redirect the traffic to the backup region in case of a disaster in the primary region** is incorrect. Although this is possible, this is not the most cost-effective solution as it entails a significant number of resources that are continuously running. With an RTO of 30 minutes, you can quickly restore backups of the EC2 snapshots of the web and application tier instead of running a hot-standby environment. Take note that in Disaster Recovery, a "hot-standby" means that the application runs in the DR region. Because it's always running, you will incur a significant amount of cost.

The option that says: **Configure an automated snapshot of the Amazon Aurora database every 5 minutes. Quickly restore the database on the backup region in case of a disaster in the primary region** is incorrect. Restoring 40 TB of data may not be possible if you have an RTO requirement of 30 minutes. Depending on how busy the database was during the time the snapshot was taken, the restoration process may take longer than 30 minutes to complete. Moreover, automated backups only occur once every day during the defined backup window. You can't configure it to run every 5 minutes.

The option that says: **Use AWS Backup to create a backup job that will copy the EC2 EBS volumes and RDS data to an Amazon S3 bucket in another region. Restore the backups in case of a disaster in the primary region** is incorrect. This may be possible, but the restoration time from the RDS backup may take more time than the required 30 minutes of RTO. The highest backup frequency in AWS Backup is every 12 hours only and not every 5-minutes. Thus, it can only provide a maximum RPO of 12 hours. A better solution is to use a Read Replica with a replication latency of only about a few minutes, providing a higher RPO.

  

**References:**

[https://aws.amazon.com/premiumsupport/knowledge-center/aurora-mysql-slow-snapshot-restore/](https://aws.amazon.com/premiumsupport/knowledge-center/aurora-mysql-slow-snapshot-restore/)

[https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Replication.CrossRegion.html](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Replication.CrossRegion.html)

[https://aws.amazon.com/about-aws/whats-new/2016/06/amazon-aurora-now-supports-cross-region-replication/](https://aws.amazon.com/about-aws/whats-new/2016/06/amazon-aurora-now-supports-cross-region-replication/)

[https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-copy-snapshot.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-copy-snapshot.html)

  

**Check out these Amazon EBS and Amazon RDS Cheat Sheets:**

[https://tutorialsdojo.com/amazon-ebs/](https://tutorialsdojo.com/amazon-ebs/?src=udemy)

[https://tutorialsdojo.com/amazon-relational-database-service-amazon-rds/](https://tutorialsdojo.com/amazon-relational-database-service-amazon-rds/?src=udemy)

# Question 52: Incorrect

A company is running its main web service in a fleet of Amazon EC2 instances in the us-east-1 AWS Region. The EC2 instances are launched by an Auto Scaling group behind an Application Load Balancer (ALB). The EC2 instances are spread across multiple Availability Zones. The MySQL database is hosted on an Amazon EC2 instance in a private subnet. To improve the resiliency of the web service in case of a disaster, the Solutions Architect must design a data recovery strategy in another region using the available AWS services to lessen the operational overhead. The target RPO is less than a minute and the target RTO is less than 5 minutes. The Solutions Architect has started to provision the ALB and the Auto Scaling group on the us-west-2 region.

Which of the following steps should be implemented next to achieve the above requirements?

-   Migrate the database from the Amazon EC2 instance to an Amazon Aurora global database. Set the us-east-1 region as the primary database and the us-west-2 region as the secondary database. Configure Amazon Route 53 DNS entry with health checks and failover routing policy to the us-west-2 region.
    
    (Correct)
    
-   Create a snapshot of the current Amazon EC2 database instance and restore the snapshot to the us-west-2 region. Configure the new EC2 instance as MySQL standby database of the us-east-1 instance. Configure Amazon Route 53 DNS entry with failover routing policy to the us-west-2 region.
    
-   Migrate the database from the Amazon EC2 instance to an Amazon RDS for MySQL instance. Enable Multi-AZ deployment for this database. Configure Amazon Route 53 DNS entry with failover routing policy to the us-west-2 region.
    
-   Migrate the database from the Amazon EC2 instance to an Amazon RDS for MySQL instance. Set the us-east-1 region database as the master and configure a cross-Region read replica to the us-west-2 region. Configure Amazon Route 53 DNS entry with health checks and failover routing policy to the us-west-2 region.
    
    (Incorrect)
    

Explanation

**Amazon Aurora Global Database** is designed for globally distributed applications, allowing a single Amazon Aurora database to span multiple AWS regions. It replicates your data with no impact on database performance, enables fast local reads with low latency in each region, and provides disaster recovery from region-wide outages.

Critical workloads with a global footprint, such as financial, travel, or gaming applications, have strict availability requirements and may need to tolerate a region-wide outage. Traditionally this required difficult tradeoffs between performance, availability, cost, and data integrity. Global Database uses storage-based replication with typical latency of less than 1 second, using dedicated infrastructure that leaves your database fully available to serve application workloads. In the unlikely event of a regional degradation or outage, one of the secondary regions can be promoted to read and write capabilities in less than 1 minute.

![](https://media.tutorialsdojo.com/sap_rds_aurora_global_database.png)

Aurora Global Database lets you easily scale database reads across the world and place your applications close to your users. Your applications enjoy quick data access regardless of the number and location of secondary regions, with typical cross-region replication latencies below 1 second. If your primary region suffers a performance degradation or outage, you can promote one of the secondary regions to take read/write responsibilities. An Aurora cluster can recover in less than 1 minute even in the event of a complete regional outage. This provides your application with an effective Recovery Point Objective (RPO) of 1 second and a Recovery Time Objective (RTO) of less than 1 minute, providing a strong foundation for a global business continuity plan.

**Amazon Route 53 health checks** monitor the health and performance of your web applications, web servers, and other resources. If you have multiple resources that perform the same function, you can configure DNS failover so that Route 53 will route your traffic from an unhealthy resource to a healthy resource. Each health check that you create can monitor one of the following:

\- The health of a specified resource, such as a web server

\- The status of other health checks

\- The status of an Amazon CloudWatch alarm

Therefore, the correct answer is: **Migrate the database from the Amazon EC2 instance to an Amazon Aurora global database. Set the us-east-1 region as the primary database and the us-west-2 region as the secondary database. Configure Amazon Route 53 DNS entry with health checks and failover routing policy to the us-west-2 region.**

The option that says: **Migrate the database from the Amazon EC2 instance to an Amazon RDS for MySQL instance. Set the us-east-1 region database as the master and configure a cross-Region read replica to the us-west-2 region. Configure Amazon Route 53 DNS entry with health checks and failover routing policy to the us-west-2 region** is incorrect. Although this is possible, there is no automatic way to promote the read replica on the backup region as the master database. You need to manually configure this, and when you do, the RDS instance will reboot. In this case, you might exceed the RPO of 1 minute and RTO of 5 minutes.

The option that says: **Migrate the database from the Amazon EC2 instance to an Amazon RDS for MySQL instance. Enable Multi-AZ deployment for this database. Configure Amazon Route 53 DNS entry with failover routing policy to the us-west-2 region** is incorrect. Multi-AZ deployment will protect you from outages on single AZ’s only. It will not protect your database from regional outages.

The option that says: **Create a snapshot of the current Amazon EC2 database instance and restore the snapshot to the us-west-2 region. Configure the new EC2 instance as MySQL standby database of the us-east-1 instance. Configure Amazon Route 53 DNS entry with failover routing policy to the us-west-2 region** is incorrect. Although this is a possible solution, the requirement is to use the available AWS services for lower operational overhead. This requires extra management effort to set up, configure and manage the database on the EC2 instance, instead of using a managed Amazon RDS database. Moreover, it won't be able to satisfy the requirement of providing a 1-minute RPO and 5-minute RTO.

  

**References:**

[https://aws.amazon.com/rds/aurora/global-database/](https://aws.amazon.com/rds/aurora/global-database/)

[https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html)

[https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html)

  

**Check out these Amazon Aurora Cheat Sheets:**

[https://tutorialsdojo.com/amazon-aurora/](https://tutorialsdojo.com/amazon-aurora/?src=udemy)

[https://tutorialsdojo.com/amazon-aurora-vs-amazon-rds/](https://tutorialsdojo.com/amazon-aurora-vs-amazon-rds/?src=udemy)

# Question 60: Incorrect

A company is running hundreds of Linux-based Amazon EC2 instances launched with custom AMIs that are dedicated to specific products and services. As part of the security compliance requirements, vulnerability scanning must be done on all EC2 instances wherein each instance must be scanned and pass a Common Vulnerabilities and Exposures (CVE) assessment. Since the development team relies heavily on the custom AMIs for their deployments, the company wants to have an automated process to run the security assessment on any new AMIs and properly tag them before they can be used by the developers. To ensure continuous compliance, the security-approved AMIs must also be scanned every 30 days to check for new vulnerabilities and apply the necessary patches.

Which of the following steps should the Solutions Architect implement to achieve the security requirements? (Select TWO.)

-   Check AWS CloudTrail logs to determine the Amazon EC2 instance IDs that were launched from the AMIs that need scanning. Use AWS Config managed rule to run CVE assessment and remediation on the instances.
    
-   Write a Lambda function that will create automatic approval rules. Create a parameter on AWS SSM Parameter Store to save the list of all security-approved AMI. Set up a managed rule on AWS Config to continuously scan all running EC2 instances. For any detected vulnerability, run the designated SSM Automation document.
    
-   Create an Assessment template on Amazon Inspector to target the EC2 instances. Run a detailed CVE assessment scan on all running Amazon EC2 instances launched from the AMIs that need scanning.
    
    (Correct)
    
-   Install the AWS Systems Manager (SSM) agent on all EC2 instances. With the agent running, run a detailed CVE assessment scan on the EC2 instances launched from the AMIs that need scanning.
    
    (Incorrect)
    
-   Develop a Lambda function that will create automatic approval rules. Create a parameter on AWS SSM Parameter Store to save the list of all security-approved AMI. Set up a 30-day interval cron rule on Amazon EventBridge to trigger an AWS SSM Automation document run on all EC2 instances.
    
    (Correct)
    

Explanation

**AWS Systems Manager Automation** simplifies common maintenance and deployment tasks of Amazon EC2 instances and other AWS resources. Automation enables you to do the following:

\- Build automations to configure and manage instances and AWS resources.

\- Create custom runbooks or use pre-defined runbooks maintained by AWS.

\- Receive notifications about Automation tasks and runbooks by using Amazon EventBridge.

\- Monitor Automation progress and details by using the AWS Systems Manager console.

SSM Automation offers one-click automation for simplifying complex tasks such as creating golden Amazon Machines Images (AMIs) and recovering unreachable EC2 instances. For example, you can use Use the `AWS-UpdateLinuxAmi` and `AWS-UpdateWindowsAmi` runbooks to create golden AMIs from a source AMI. You can run custom scripts before and after updates are applied. You can also include or exclude specific packages from being installed.

![](https://media.tutorialsdojo.com/sap_ssm_overview.png)

With **AWS EventBridge**, you can create rules that self-trigger on an automated schedule in EventBridge using cron or rate expressions. Rate expressions are simpler to define but don't offer the fine-grained schedule control that cron expressions support. For example, with a cron expression, you can define a rule that triggers at a specified time on a certain day of each week or month. With this, you can schedule running AWS SSM Automation documents to remediate the vulnerable AMIs.

You can use **Amazon Inspector** to conduct a detailed scan for CVE in your fleet of EC2 instances. Amazon Inspector offers predefined software called an agent that you can optionally install in the operating system of the EC2 instances that you want to assess. Amazon Inspector also has rules packages that help verify whether the EC2 instances in your assessment targets are exposed to common vulnerabilities and exposures (CVEs). Attacks can exploit unpatched vulnerabilities to compromise the confidentiality, integrity, or availability of your service or data. The CVE system provides a reference method for publicly known information security vulnerabilities and exposures.

The option that says: **Develop a Lambda function that will create automatic approval rules. Create a parameter on AWS SSM Parameter Store to save the list of all security-approved AMI. Set up a 30-day interval cron rule on Amazon EventBridge to trigger an AWS SSM Automation document run on all EC2 instances** is correct because it satisfies the requirement for updating the security-approved AMI, along with scheduled patches every 30-days using SSM Automation document. AWS SSM Automation can automatically pack AMIs after patches are applied.

The option that says: **Create an Assessment template on Amazon Inspector to target the EC2 instances. Run a detailed CVE assessment scan on all running Amazon EC2 instances launched from the AMIs that need scanning** is correct because Amazon Inspector can run assessments on target EC2 instances to check if they are exposed to common vulnerabilities and exposures (CVEs).

The option that says: **Install the AWS Systems Manager (SSM) agent on all EC2 instances. With the agent running, run a detailed CVE assessment scan on the EC2 instances launched from the AMIs that need scanning** is incorrect because the SSM agent cannot run a detailed CVE assessment scan on EC2 instances. You have to use Amazon Inspector to satisfy the given requirement.

The option that says: **Write a Lambda function that will create automatic approval rules. Create a parameter on AWS SSM Parameter Store to save the list of all security-approved AMI. Set up a managed rule on AWS Config to continuously scan all running EC2 instances. For any detected vulnerability, run the designated SSM Automation document** is incorrect because AWS Config cannot automatically run checks on the operating system of your Amazon EC2 instances. The requirement is to run the assessment every 30-days only and not continuously.

The option that says: **Check AWS CloudTrail logs to determine the Amazon EC2 instance IDs that were launched from the AMIs that need scanning. Use AWS Config managed rule to run CVE assessment and remediation on the instances** is incorrect. Although it is possible to parse the EC2 instance IDs from CloudTrail and determine the vulnerable instances, you still cannot run the CVE assessment in AWS Config for your Amazon EC2 instances. Using Amazon Inspector is the most suitable service to use in running the CVE assessment.

  

**References:**

[https://docs.aws.amazon.com/inspector/latest/userguide/inspector\_walkthrough.html](https://docs.aws.amazon.com/inspector/latest/userguide/inspector_walkthrough.html)

[https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-automation.html)

[https://docs.aws.amazon.com/eventbridge/latest/userguide/scheduled-events.html](https://docs.aws.amazon.com/eventbridge/latest/userguide/scheduled-events.html)

  

**Check out the AWS Systems Manager and AWS Inspector Cheat Sheet:**

[https://tutorialsdojo.com/aws-systems-manager/](https://tutorialsdojo.com/aws-systems-manager/?src=udemy)

[https://tutorialsdojo.com/amazon-inspector/](https://tutorialsdojo.com/amazon-inspector/?src=udemy)

# Question 61: Incorrect

A major telecommunications company is planning to set up a disaster recovery solution for its Amazon Redshift cluster which is being used by its online data analytics application. Database encryption is enabled on their clusters using AWS KMS and it is required that the recovery site should be at least 500 miles from their primary cloud location.

Which of the following is the most suitable solution to meet these requirements and to make its architecture highly available?

-   Develop a scheduled job using AWS Lambda which will regularly take a snapshot of the Redshift cluster and copy it to another region.
    
-   In your Redshift cluster, enable the cross-region snapshot copy feature to copy snapshots to another region.
    
    (Incorrect)
    
-   Create a new AWS CloudFormation stack that will deploy the cluster in another region and will regularly back up the data to an S3 bucket, configured with cross-region replication. In case of an outage in the primary region, just use the snapshot from the S3 bucket and then start the cluster.
    
-   Set up a `snapshot copy grant` for a master key in the destination region and enable cross-region snapshots in your Redshift cluster to copy snapshots of the cluster to another region.
    
    (Correct)
    

Explanation

**Snapshots** are point-in-time backups of a cluster. There are two types of snapshots: automated and manual. Amazon Redshift stores these snapshots internally in Amazon S3 by using an encrypted Secure Sockets Layer (SSL) connection. Amazon Redshift automatically takes incremental snapshots that track changes to the cluster since the previous automated snapshot.

![](https://media.tutorialsdojo.com/sap_redshift_cross_region_snapshot.png)

Automated snapshots retain all of the data required to restore a cluster from a snapshot. You can take a manual snapshot any time. When you restore from a snapshot, Amazon Redshift creates a new cluster and makes the new cluster available before all of the data is loaded, so you can begin querying the new cluster immediately. The cluster streams data on demand from the snapshot in response to active queries, then loads the remaining data in the background.

When you launch an **Amazon Redshift** cluster, you can choose to encrypt it with a master key from the AWS Key Management Service (AWS KMS). AWS KMS keys are specific to a region. If you want to enable cross-region snapshot copy for an AWS KMS-encrypted cluster, you must configure a _snapshot copy grant_ for a master key in the destination region so that Amazon Redshift can perform encryption operations in the destination region.

Therefore, the correct answer is: **Set up a** `**snapshot copy grant**` **for a master key in the destination region and enable cross-region snapshots in your Redshift cluster to copy snapshots of the cluster to another region.**

The option that says: **Create a new AWS CloudFormation stack that will deploy the cluster in another region and will regularly back up the data to an S3 bucket, configured with cross-region replication. In case of an outage in the primary region, just use the snapshot from the S3 bucket and then start the cluster** is incorrect. Using a combination of CloudFormation and a separate S3 bucket entails a lot of configuration and set up compared with just enabling cross-region snapshot copy in your Redshift cluster.

The option that says: **Develop a scheduled job using AWS Lambda which will regularly take a snapshot of the Redshift cluster and copy it to another region** is incorrect. It is not recommended to use AWS Lambda to copy data on your Redshift cluster to another region. You simply have to enable cross-region snapshot copy in your Redshift cluster in order to meet the requirement.

The option that says: **In your Redshift cluster, enable the cross-region snapshot copy feature to copy snapshots to another region** is incorrect. Although it is right to use the cross-region snapshot copy feature, you still have to configure a snapshot copy grant for a master key in the destination region so that Amazon Redshift can perform encryption operations in the destination region.

  

**References:**

[https://docs.aws.amazon.com/redshift/latest/mgmt/managing-snapshots-console.html#snapshot-crossregioncopy-configure](https://docs.aws.amazon.com/redshift/latest/mgmt/managing-snapshots-console.html#snapshot-crossregioncopy-configure)

[https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-snapshots.html)

  

**Check out this Amazon Redshift Cheat Sheet:**

[https://tutorialsdojo.com/amazon-redshift/](https://tutorialsdojo.com/amazon-redshift/?src=udemy)

  

**Tutorials Dojo's AWS Certified Solutions Architect Professional Exam Study Guide:**

[https://tutorialsdojo.com/aws-certified-solutions-architect-professional/](https://tutorialsdojo.com/aws-certified-solutions-architect-professional/?src=udemy)

# Question 63: Incorrect

A retail company has several subsidiaries with offices located in different countries in Southeast Asia. Each subsidiary has an AWS account that is used for hosting the company retail website, which is customized per country. The parent company wants to have better control on all the AWS accounts as well as visibility on the costs incurred for each account. The Solutions Architect has been tasked to implement a solution that will satisfy the following requirements:

\- Provide a cost breakdown report for each subsidiary AWS account.

\- Have a single AWS invoice for all the subsidiary AWS accounts.

\- Provide full administration privileges on each subsidiary AWS account, regardless of the parent company’s policy.

\- Have the ability to restrict the services and features that can be used on each subsidiary AWS account, as defined by the parent company’s policy.

Which of the following actions should the Solutions Architect take in order to fulfill the requirements? (Select TWO.)

-   Define service quotas that will restrict services and features depending on the permissions set by the parent company policy. Apply this service quota to each subsidiary AWS account.
    
-   Create an AWS account for the parent company and create an AWS organization for each of the subsidiaries. Invite each of the subsidiary AWS Accounts to join their respective AWS organization on the parent company.
    
-   Create an AWS Organization on the parent company's AWS account and invite all the subsidiary AWS accounts. On the AWS Billing and Cost Management console of the parent account, ensure that consolidated billing is enabled.
    
    (Correct)
    
-   Create an AWS account for the parent company and create a single AWS Organization with the Consolidated Billing features set. Invite each of the subsidiary AWS accounts to join the AWS Organization of the parent company.
    
    (Incorrect)
    
-   Define Service Control Policy (SCP) documents to only allow services and features defined by the parent company policy. Apply the necessary SCP for each subsidiary AWS account.
    
    (Correct)
    

Explanation

**AWS Organizations** helps you centrally manage and govern your environment as you grow and scale your AWS resources. Using AWS Organizations, you can programmatically create new AWS accounts and allocate resources, group accounts to organize your workflows, apply policies to accounts or groups for governance, and simplify billing by using a single payment method for all of your accounts.

AWS Organizations is integrated with other AWS services so you can define central configurations, security mechanisms, audit requirements, and resource sharing across accounts in your organization.

Once you’ve created the organization and verified your email, you can create or invite other accounts into your organization, categorize the accounts into Organizational Units (OUs), create service control policies (SCPs), and take advantage of the Organizations' features from supported AWS services. **Service control policies (SCPs)** are a type of organization policy that you can use to manage permissions in your organization. SCPs offer central control over the maximum available permissions for all accounts in your organization. SCPs help you ensure that your accounts stay within your organization’s access control guidelines.

![](https://media.tutorialsdojo.com/sap_aws_organization_overview.png)

You can use the **consolidated billing** feature in AWS Organizations to consolidate billing and payment for multiple AWS accounts or multiple Amazon Internet Services Pvt. Ltd (AISPL) accounts. Every organization in AWS Organizations has a management account that pays the charges of all the member accounts.

Consolidated billing has the following benefits:

**One bill** – You get one bill for multiple accounts.

**Easy tracking** – You can track the charges across multiple accounts and download the combined cost and usage data.

**Combined usage** – You can combine the usage across all accounts in the organization to share the volume pricing discounts, Reserved Instance discounts, and Savings Plans. This can result in a lower charge for your project, department, or company than with individual standalone accounts.

**No extra fee** – Consolidated billing is offered at no additional cost.

![](https://tutorialsdojo-media.s3.us-east-2.amazonaws.com/aws_organizations_scp.png)

With consolidated billing, the management account is billed for all charges of the member accounts. However, unless the organization is changed to support all features in the organization (not consolidated billing features only) and member accounts are explicitly restricted by policies, each member account is otherwise independent of the other member accounts. For example, the owner of a member account can sign up for AWS services, access resources, and use AWS Premium Support unless the management account restricts those actions. Each account owner continues to use their own IAM user name and password, with account permissions assigned independently of other accounts in the organization.

![](https://media.tutorialsdojo.com/AWS%20Organizations_Consolidated%20Billing%20Features%20only.png)

The option that says: **Create an AWS Organization on the parent company's AWS account and invite all the subsidiary AWS accounts. On the AWS Billing and Cost Management console of the parent account, ensure that consolidated billing is enabled** is correct. Consolidated billing allows the management account owner to have only one invoice for all accounts in the organization. And by default, each member account is independent of the other member accounts, so each subsidiary has full administration privileges unless controlled by the parent account.

The option that says: **Define Service Control Policy (SCP) documents to only allow services and features defined by the parent company policy. Apply the necessary SCP for each subsidiary AWS account** is correct. This satisfies the requirement for restricting access to the subsidiary AWS accounts as defined by the parent AWS account.

The option that says: **Create an AWS account for the parent company and create an AWS Organization for each of the subsidiaries. Invite each of the subsidiary AWS accounts to join their respective AWS organization on the parent company** is incorrect. You only have to create a single organization and link the member accounts.

The option that says: **Define service quotas that will restrict services and features depending on the permissions set by the parent company policy. Apply this service quota to each subsidiary AWS account** is incorrect. Applying service quota will not restrict the member accounts from using AWS services or features that are not permitted by the parent account. Service quota only restricts how much you can use for a particular service.

The option that says: **Create an AWS account for the parent company and create a single AWS Organization with the Consolidated Billing features set. Invite each of the subsidiary AWS accounts to join the AWS Organization of the parent company** is incorrect. Although creating an AWS organization is necessary, using only the Consolidated Billing features set is not enough to satisfy the requirements. Even though "All Features" is enabled by default, this will be overridden if you enable only the "Consolidated Billing" feature. This means that you cannot use the SCP to your member AWS accounts anymore. You need to enable "All features" on the AWS Organization to be able to create and apply SCP for each subsidiary.

  

**References:**

[https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)

[https://aws.amazon.com/organizations/getting-started/](https://aws.amazon.com/organizations/getting-started/)

[https://aws.amazon.com/organizations/getting-started/best-practices/](https://aws.amazon.com/organizations/getting-started/best-practices/)

[https://docs.aws.amazon.com/organizations/latest/userguide/orgs\_manage\_org\_support-all-features.html](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html)

  

**Check out this AWS Organizations Cheat Sheet:**

[https://tutorialsdojo.com/aws-organizations/](https://tutorialsdojo.com/aws-organizations/?src=udemy)


## AWS Solutions Architect Professional Practice Test 2 - Results

Return to review

Created with Highcharts 9.2.2

Attempt 1

All knowledge areas

-   All knowledge areas
    
-   Domain - Design for New Solutions
    
-   Domain - Continuous Improvement for Existing Solutions
    
-   Domain - Design for Organizational Complexity
    
-   Domain - Cost Control
    
-   Domain - Migration Planning
    

Incorrect

-   All questions
    
-   Correct
    
-   Incorrect
    
-   Skipped
    
-   Marked for review
    




# Question 1: Incorrect

A startup is running its customer support application in the AWS cloud. The application is hosted on a set of Auto Scaling Amazon EC2 on-demand instances placed behind an Elastic Load Balancer. The web application runs on large EC2 instance sizes to properly process the high volume of data that are stored in DynamoDB. New application version deployment is done once a week and requires an automated way of creating and testing a new Amazon Machine Image for the application servers. To meet the growing number of support tickets being sent, it was decided that a new video chat feature should be implemented as part of the customer support app, but should be hosted on a different set of servers to allow users to chat with a representative. The startup decided to streamline the deployment process and use AWS OpsWorks as an application lifecycle tool to simplify the management of the app and reduce time-consuming deployment cycles.

What is the most cost-efficient and flexible way to integrate the new video chat module in AWS?

-   Create two AWS OpsWorks stacks, each with two layers, and two custom recipes.
    
    (Incorrect)
    
-   Create an AWS OpsWorks stack, with two layers, and one custom recipe.
    
    (Correct)
    
-   Create an AWS OpsWorks stack, with one layer, and one custom recipe.
    
-   Create two AWS OpsWorks stacks, each with two layers, and one custom recipe.
    

Explanation

**AWS OpsWorks Stacks** lets you manage applications and servers on AWS and on-premises. With OpsWorks Stacks, you can model your application as a stack containing different layers, such as load balancing, database, and application server. You can deploy and configure Amazon EC2 instances in each layer or connect other resources such as Amazon RDS databases. OpsWorks Stacks lets you set automatic scaling for your servers based on preset schedules or in response to changing traffic levels, and it uses lifecycle hooks to orchestrate changes as your environment scales.

In **OpsWorks**, you will be provisioning a stack and layers. The stack is the top-level AWS OpsWorks Stacks entity. It represents a set of instances that you want to manage collectively, typically because they have a common purpose such as serving PHP applications. In addition to serving as a container, a stack handles tasks that apply to the group of instances as a whole, such as managing applications and cookbooks.

Every stack contains one or more layers, each of which represents a stack component, such as a load balancer or a set of application servers. As you work with AWS OpsWorks Stacks layers, keep the following in mind:

\- Each layer in a stack must have at least one instance and can optionally have multiple instances.

\- Each instance in a stack must be a member of at least one layer, except for [registered instances](https://docs.aws.amazon.com/opsworks/latest/userguide/registered-instances.html). You cannot configure an instance directly, except for some basic settings such as the SSH key and hostname. You must create and configure an appropriate layer, and add the instance to the layer.

In the scenario, it tells us that the video chat feature should be implemented as part of the customer support application, but should be hosted on a different set of servers. This means that the chat feature is part of the stack, but should be in a different layer since it will be using a different set of servers. Hence, we have to use one stack and two layers to meet the requirement.

![](https://media.tutorialsdojo.com/sap_opsworks_layers.png)

Therefore, the correct answer is: **Create an AWS OpsWorks stack with two layers and one custom recipe.** Only one stack would be sufficient and two layers would be required for handling separate requirements. One custom recipe for DynamoDB would be required.

These options are incorrect because two OpsWorks stacks are unnecessary since the new video chat feature is still a part of the customer support website but just deployed on a different set of servers. Hence, this should be deployed on a different layer and not on an entirely different stack.

**\- Create two AWS OpsWorks stacks, each with two layers, and two custom recipes**

**\- Create two AWS OpsWorks stacks, each with two layers, and one custom recipe**

The option that says: **Create an AWS OpsWorks stack with one layer and one custom recipe** is incorrect. It would be a better solution to create two separate layers: one customer support web servers and one for the video chat feature.

  

**References**:

[https://aws.amazon.com/opsworks/stacks/faqs](https://aws.amazon.com/opsworks/stacks/faqs)

[https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers.html](https://docs.aws.amazon.com/opsworks/latest/userguide/workinglayers.html)

  

**Check out this AWS OpsWorks Cheat Sheet:**

[https://tutorialsdojo.com/aws-opsworks/](https://tutorialsdojo.com/aws-opsworks/?src=udemy)

  

**Tutorials Dojo's AWS Certified Solutions Architect Professional Exam Study Guide:**

[https://tutorialsdojo.com/aws-certified-solutions-architect-professional/](https://tutorialsdojo.com/aws-certified-solutions-architect-professional/?src=udemy)

# Question 12: Incorrect

A leading commercial bank has multiple AWS accounts that are consolidated using AWS Organizations. They are building an online portal for foreclosed real estate properties that they own. The online portal is designed to use SSL for better security. The bank would like to implement a separation of responsibilities between the DevOps team and their cybersecurity team. The DevOps team is entitled to manage and log in to the EC2 instances while the cybersecurity team has exclusive access to the application's X.509 certificate, which contains the private key and is stored in AWS Certificate Manager (ACM).

Which of the following options would satisfy the company requirements?

-   Set up a Service Control Policy (SCP) that authorizes access to the certificate store only for the cybersecurity team and then add a configuration to terminate the SSL on the ELB.
    
    (Incorrect)
    
-   Upload the X.509 certificate to an S3 bucket owned by the cybersecurity team and accessible only by the IAM role of the EC2 instances. Use the Systems Manager Session Manager as the HTTPS session manager for the application.
    
-   Configure an IAM policy that authorizes access to the certificate store only for the cybersecurity team and then add a configuration to terminate the SSL on the ELB.
    
    (Correct)
    
-   Use the AWS Config service to configure the EC2 instances to retrieve the X.509 certificate upon boot from a CloudHSM that is managed by the cybersecurity team.
    

Explanation

In this scenario, the best solution is to set the appropriate IAM policy to both the DevOps and cybersecurity teams and then add a configuration to terminate the SSL on the ELB.

Take note that you can either terminate the SSL on the ELB side or on the EC2 instance. If you choose the former, the X.509 certificate will only be present in the ELB and if you choose the latter, the X.509 certificate will be stored inside the EC2 instance.

Since we don't want the DevOps team to have access to the certificate, it is best to terminate the SSL on the ELB level rather than the EC2.

![](https://media.tutorialsdojo.com/sap_alb_ssl_cert.png)

Therefore, the correct answer is: **Configure an IAM policy that authorizes access to the certificate store only for the cybersecurity team and then adding a configuration to terminate the SSL on the ELB.**

The option that says: **Use the AWS Config service to configure the EC2 instances to retrieve the X.509 certificate upon boot from a CloudHSM that is managed by the cybersecurity team** is incorrect. The AWS Config service simply enables you to assess, audit, and evaluate the configurations of your AWS resources. It does not grant any permission or access. In addition, CloudHSM is a managed hardware security module (HSM) in the AWS Cloud that handles encryption keys and not SSL certificates.

The option that says: **Upload the X.509 certificate to an S3 bucket owned by the cybersecurity team and accessible only by the IAM role of the EC2 instances and using the Systems Manager Session Manager as the HTTPS session manager for the application** is incorrect because the Systems Manager Session Manager service simply provides secure and auditable instance management without the need to open inbound ports, maintain bastion hosts, or manage SSH keys. This service does not handle SSL connections. It is also a security risk to store X.509 certificates in an S3 bucket. It should be stored in the AWS Certificate Manager.

The option that says: **Set up a Service Control Policy (SCP) that authorizes access to the certificate store only for the cybersecurity team and then adding a configuration to terminate the SSL on the ELB** is incorrect. A service control policy (SCP) simply determines what services and actions can be delegated by administrators to the users and roles in the accounts that the SCP is applied to. It does not grant any permissions, unlike an IAM Policy.

  

**References:**

[https://docs.aws.amazon.com/IAM/latest/APIReference/API\_UploadServerCertificate.html](https://docs.aws.amazon.com/IAM/latest/APIReference/API_UploadServerCertificate.html)

[https://aws.amazon.com/blogs/aws/elastic-load-balancer-support-for-ssl-termination/](https://aws.amazon.com/blogs/aws/elastic-load-balancer-support-for-ssl-termination/)

  

**Check out these AWS Elastic Load Balancing (ELB) and IAM Cheat Sheets:**

[https://tutorialsdojo.com/aws-elastic-load-balancing-elb/](https://tutorialsdojo.com/aws-elastic-load-balancing-elb/)

[https://tutorialsdojo.com/aws-identity-and-access-management-iam/](https://tutorialsdojo.com/aws-identity-and-access-management-iam/)

  

**Service Control Policies (SCP) vs IAM Policies:**

[https://tutorialsdojo.com/service-control-policies-scp-vs-iam-policies/](https://tutorialsdojo.com/service-control-policies-scp-vs-iam-policies/?src=udemy)

# Question 13: Incorrect

An e-commerce company is having their annual sale event where buyers will be able to purchase goods at a large discount on their e-commerce website. The e-commerce site will receive millions of visitors in a short period of time when the sale begins. The visitors will first login to the site using either their Facebook or Google credentials and add items to their cart. After purchasing, a page will display the cart items along with the discounted prices. The company needs to build a checkout system that can handle the sudden surge of incoming traffic.

Which of the following is the MOST scalable solution that they should use?

-   Combine an Elastic Load balancer in front of an Auto Scaling group of web servers with CloudFront for fast delivery. The web servers will first authenticate the users by logging into their social media accounts which are integrated in Amazon Cognito, then process the user's purchases and store them into an SQS queue using IAM Roles for EC2 Instances to gain permissions to the queue. Finally, the items from the queue are retrieved by a set of application servers and stored into a DynamoDB table.
    
    (Correct)
    
-   Combine an Elastic Load balancer in front of an Auto Scaling group of web servers with CloudFront for fast delivery. The web servers will first authenticate the users by logging into their social media accounts which are integrated in Amazon Lex, then process the user's purchases and store the cart into a Multi-AZ RDS database.
    
-   Combine an Elastic Load balancer in front of multiple web servers with CloudFront for fast delivery. The web servers will first authenticate the users by logging into their social media accounts which are integrated in Amazon Cognito. The web servers will process the user's purchases and store them in a DynamoDB table. Use an IAM Role to gain permissions to the DynamoDB table.
    
    (Incorrect)
    
-   Use the static website hosting feature of Amazon S3 with the Javascript SDK to authenticate the user login with Amazon Cognito. Set up AWS Global Accelerator to deliver the static content stored in the S3 bucket. Store user purchases in a DynamoDB table and use an IAM Role for managing permissions.
    

Explanation

**Amazon Simple Queue Service (SQS)** is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS eliminates the complexity and overhead associated with managing and operating message oriented middleware, and empowers developers to focus on differentiating work. Using SQS, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available.

![](https://media.tutorialsdojo.com/sap_sqs_dynamodb_workflow.PNG)

In this scenario, the best solution is to use a combination of CloudFront, Elastic Load Balancer and SQS to provide a highly scalable architecture.

Hence, the correct answer is: **Combine an Elastic Load balancer in front of an Auto Scaling group of web servers with CloudFront for fast delivery. The web servers will first authenticate the users by logging into their social media accounts which are integrated in Amazon Cognito, then process the user's purchases and store them into an SQS queue using IAM Roles for EC2 Instances to gain permissions to the queue. Finally, the items from the queue are retrieved by a set of application servers and stored into a DynamoDB table.** This is a highly scalable solution and creates an appropriate IAM Role to access the DynamoDB database. In addition, it uses SQS which decouples the application architecture. This will allow the application servers to process the requests.

The option that says: **Combine an Elastic Load balancer in front of an Auto Scaling group of web servers with CloudFront for fast delivery. The web servers will first authenticate the users by logging into their social media accounts which are integrated in Amazon Lex, then process the user's purchases and store the cart into a Multi-AZ RDS database** is incorrect because multi-AZ RDS is a more expensive solution when compared to DynamoDB. In addition, Amazon Lex is just a service for building conversational interfaces into any application using voice and text. This is not utilized for user authentication, unlike Amazon Cognito.

The option that says: **Use the static website hosting feature of Amazon S3 with the Javascript SDK to authenticate the user login with Amazon Cognito. Set up AWS Global Accelerator to deliver the static content. Store user purchases in a DynamoDB table and use an IAM Role for managing permissions** is incorrect. Although this would work, it is not scalable, and storing all the data directly in DynamoDB would consume read and write capacity and increase the cost. Moreover, you cannot use AWS Global Accelerator to deliver the static content stored in the S3 bucket. You have to use Amazon CloudFront instead.

The option that says: **Combine an Elastic Load balancer in front of multiple web servers with CloudFront for fast delivery. The web servers will first authenticate the users by logging into their social media accounts which are integrated in Amazon Cognito. The web servers will process the user's purchases and store them in a DynamoDB table. Use an IAM Role to gain permissions to the DynamoDB table** is incorrect because it is not scalable and storing all the data directly in DynamoDB would consume read and write capacity and increase the cost. Moreover, the web servers are not placed in an Auto Scaling group, which means that this solution is not scalable.

**References**:

[https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/authentication-and-access-control.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/authentication-and-access-control.html)

[https://aws.amazon.com/blogs/database/dynamodb-streams-use-cases-and-design-patterns/](https://aws.amazon.com/blogs/database/dynamodb-streams-use-cases-and-design-patterns/)

  

**Check out this Amazon DynamoDB Cheat Sheet:**

[https://tutorialsdojo.com/amazon-dynamodb/](https://tutorialsdojo.com/amazon-dynamodb/?src=udemy)

# Question 18: Incorrect

A leading call center company has its headquarters in Seattle. Its corporate web portal is deployed to AWS. The AWS cloud resources are linked to its corporate data center via a link aggregation group (LAG), which terminates at the same AWS Direct Connect endpoint and is connected on a private virtual interface (VIF) in your VPC. The portal must authenticate against their on-premises LDAP server. Each Amazon S3 bucket can only be accessed by a logged-in user if it belongs to that user.

Which of the following options should the solutions architect implement in AWS to meet the company requirements? (Select TWO.)

-   Create an identity broker that assumes an IAM role, and retrieve temporary AWS security credentials via IAM Security Token Service (STS). The application gets the AWS temporary security credentials from the identity broker to gain access to the appropriate S3 bucket.
    
    (Incorrect)
    
-   The application first authenticates against LDAP, and then uses the LDAP credentials to log in to IAM service. Finally, it can now use the IAM temporary credentials to access the appropriate S3 bucket.
    
    (Incorrect)
    
-   Use a Direct Connect Gateway instead of a single Direct Connect connection. Set up a Transit VPC which will authenticate against their on-premises LDAP server.
    
-   Authenticate against LDAP using an identity broker you created, and have it call IAM Security Token Service (STS) to retrieve IAM federated user credentials. The application then gets the IAM federated user credentials from the identity broker to access the appropriate S3 bucket.
    
    (Correct)
    
-   The application first authenticates against LDAP to retrieve the name of an IAM role associated with the user. It then assumes that role via a call to IAM Security Token Service (STS). Afterward, the application can now use the temporary credentials from the role to access the appropriate S3 bucket.
    
    (Correct)
    

Explanation

**Lightweight Directory Access Protocol (LDAP)** is a standard communications protocol used to read and write data to and from Active Directory. You can manage your user identities in an external system outside of AWS and grant users who sign in from those systems access to perform AWS tasks and access your AWS resources. The distinction is where the external system resides—in your data center or an external third party on the web.

For enterprise **identity federation**, you can authenticate users in your organization's network, and then provide those users access to AWS without creating new AWS identities for them and requiring them to sign in with a separate user name and password. This is known as the single sign-on (SSO) approach to temporary access. AWS STS supports open standards like Security Assertion Markup Language (SAML) 2.0, with which you can use Microsoft AD FS to leverage your Microsoft Active Directory.

![](https://media.tutorialsdojo.com/sap_sso_ldap_broker.png)

This scenario has the following attributes:

\- The identity broker application has permissions to access IAM's token service (STS) API to create temporary security credentials.

\- The identity broker application is able to verify that employees are authenticated within the existing authentication system.

\- Users are able to get a temporary URL that gives them access to the AWS Management Console (which is referred to as single sign-on).

The option that says: **Authenticate against LDAP using an identity broker you created, and have it call IAM Security Token Service (STS) to retrieve IAM federated user credentials. The application then gets the IAM federated user credentials from the identity broker to access the appropriate S3 bucket** is correct because it follows the correct sequence. It develops an identity broker that authenticates users against LDAP, gets the security token from STS, and then accesses the S3 bucket using the IAM federated user credentials.

Likewise, the option that says: **The application first authenticates against LDAP to retrieve the name of an IAM role associated with the user. It then assumes that role via call to IAM Security Token Service (STS). Afterwards, the application can now use the temporary credentials from the role to access the appropriate S3 bucket** is correct because it follows the correct sequence. It authenticates users using LDAP, gets the security token from STS, and then accesses the S3 bucket using the temporary credentials.

The option that says: **Create an identity broker that assumes an IAM role, and retrieve temporary AWS security credentials via IAM Security Token Service (STS). The application gets the AWS temporary security credentials from the identity broker to gain access to the appropriate S3 bucket** is incorrect because the users need to be authenticated using LDAP first, not STS. Also, the temporary credentials to log into AWS are provided by STS, not identity broker.

The option that says: **The application first authenticates against LDAP, and then uses the LDAP credentials to log in to IAM service. Finally, it can now use the IAM temporary credentials to access the appropriate S3 bucket** is incorrect because you cannot use the LDAP credentials to log into IAM.

The option that says: **Use a Direct Connect Gateway instead of a single Direct Connect connection. Set up a Transit VPC which will authenticate against their on-premises LDAP server** is incorrect because using a Direct Connect Gateway will only improve the availability of your on-premises network connection and using a transit VPC is just a common strategy for connecting multiple, geographically disperse VPCs and remote networks in order to create a global network transit center. These two things will not meet the requirement.

  

**References**:

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id\_roles\_common-scenarios\_federated-users.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_federated-users.html)

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id\_roles\_providers.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers.html)

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id\_roles\_common-scenarios\_federated-users.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_federated-users.html)

  

**Check out this AWS IAM Cheat Sheet:**

[https://tutorialsdojo.com/aws-identity-and-access-management-iam/](https://tutorialsdojo.com/aws-identity-and-access-management-iam/?src=udemy)

# Question 20: Incorrect

A shipping firm runs its web applications on its on-premises data center. The servers have a dependency on non-x86 hardware and the management plans to use AWS to scale its on-premises data storage. However, the backup application is only able to write to POSIX-compatible block-based storage. There is a total of 1,000 TB of data files that need to be mounted to a single folder on the file server. Existing users must also be able to access portions of this data while the backups are taking place.

Which of the following backup solutions would be most appropriate to meet the above requirements?

-   Use Amazon Glacier as the target for your data backups.
    
-   Provision Gateway Cached Volumes from AWS Storage Gateway.
    
    (Correct)
    
-   Use Amazon S3 as the target for your data backups.
    
-   Provision Gateway Stored Volumes from AWS Storage Gateway.
    
    (Incorrect)
    

Explanation

**AWS Storage Gateway** connects an on-premises software appliance with cloud-based storage to provide seamless integration with data security features between your on-premises IT environment and the AWS storage infrastructure. You can use the service to store data in the AWS Cloud for scalable and cost-effective storage that helps maintain data security. Gateway-Cached volumes can support volumes of 1,024TB in size, whereas Gateway-stored volume supports volumes of 512 TB size.

![](https://media.tutorialsdojo.com/sap_storage_gateway_stored.png)

Therefore, the correct answer is: **Provision Gateway Cached Volumes from AWS Storage Gateway** is correct because it supports volumes of up to 1,024 TB in size, and the frequently accessed data is stored on the on-premises server while the entire data is backed up over AWS.

The option that says: **Use Amazon Glacier as the target for your data backups** is incorrect. The data stored in Amazon Glacier is not available immediately. Retrieval jobs typically require 3-5 hours to complete.

The option that says: **Provision Gateway Stored Volumes from AWS Storage Gateway** is incorrect. Gateway stored volumes can only store up to 512 TB worth of data.

The option that says: **Use Amazon S3 as the target for your data backups** is incorrect. Amazon S3 is designed for object storage and not ideal for POSIX compliant data.

**References**:

[https://docs.aws.amazon.com/storagegateway/latest/userguide/resource-gateway-limits.html#resource-volume-limits](https://docs.aws.amazon.com/storagegateway/latest/userguide/resource-gateway-limits.html#resource-volume-limits)

[https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html](https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html)

  

**Check out this AWS Storage Gateway Cheat Sheet:**

[https://tutorialsdojo.com/aws-storage-gateway/](https://tutorialsdojo.com/aws-storage-gateway/?src=udemy)

  

**Tutorials Dojo's AWS Certified Solutions Architect Professional Exam Study Guide:**

[https://tutorialsdojo.com/aws-certified-solutions-architect-professional/](https://tutorialsdojo.com/aws-certified-solutions-architect-professional/?src=udemy)

# Question 23: Incorrect

A hospital chain in London uses an online central hub for its doctors and nurses. The application interacts with millions of requests per day to fetch various medical data of their patients. The system is composed of a web tier, an application tier, and a database tier that receives large and unpredictable traffic demands. The Solutions Architect must ensure that this infrastructure is highly-available and scalable enough to handle web traffic fluctuations automatically.

Which of the following options should the solutions architect implement to meet the above requirements?

-   Run the web and application tiers in stateful instances in an autoscaling group, using CloudWatch for monitoring. Run the database tier using RDS with Multi-AZ enabled.
    
-   Run the web and application tiers in stateless instances in an autoscaling group, using Elasticache Memcached for tier synchronization and CloudWatch for monitoring. Run the database tier using RDS with Multi-AZ enabled.
    
    (Incorrect)
    
-   Run the web and application tiers in stateless instances in an autoscaling group, using Elasticache Memcached for tier synchronization and CloudWatch for monitoring. Run the database tier using RDS with read replicas.
    
    (Correct)
    
-   Run the web and application tiers in stateful instances in an autoscaling group, using CloudWatch for monitoring. Run the database tier using RDS with read replicas.
    

Explanation

When users or services interact with an application, they will often perform a series of interactions that form a session. A session is unique data for users that persists between requests while they use the application. A stateless application is an application that does not need knowledge of previous interactions and does not store session information.

![](https://media.tutorialsdojo.com/sap_spot_stateless_session.png)

For example, an application that, given the same input, provides the same response to any end user, is a stateless application. Stateless applications can scale horizontally because any of the available compute resources (such as EC2 instances and AWS Lambda functions) can service any request. Without stored session data, you can simply add more compute resources as needed. When that capacity is no longer required, you can safely terminate those individual resources, after running tasks have been drained. Those resources do not need to be aware of the presence of their peers—all that is required is a way to distribute the workload to them.

In this scenario, the best option is to use a combination of **Elasticache**, **Cloudwatch**, and **RDS Read Replica**.

Therefore, the correct answer is: **Run the web and application tiers in stateless instances in an autoscaling group, using Elasticache Memcached for tier synchronization and CloudWatch for monitoring. Run the database tier using RDS with read replicas.** It uses stateless instances. The web server uses ElastiCache for read operations and CloudWatch which monitors fluctuations in the traffic and notifies the autoscaling group to scale in/scale out accordingly. In addition, it uses read replicas for RDS to handle the read-heavy workload.

The option that says: **Run the web and application tiers in stateful instances in an autoscaling group, using CloudWatch for monitoring. Run the database tier using RDS with Multi-AZ enabled** is incorrect because it uses stateful instances. It also does not use any caching mechanism for web and application tiers, and multi-AZ RDS does not improve read performance.

The option that says: **Run the web and application tiers in stateful instances in an autoscaling group, using CloudWatch for monitoring. Run the database tier using RDS with read replicas** is incorrect because it uses stateful instances and it does not use any caching mechanism for web and application tiers.

The option that says: **Run the web and application tiers in stateless instances in an autoscaling group, using Elasticache Memcached for tier synchronization and CloudWatch for monitoring. Run the database tier using RDS with Multi-AZ enabled** is incorrect because multi-AZ RDS only improves Availability, not read performance.

  

**References**:

[https://aws.amazon.com/elasticache/](https://aws.amazon.com/elasticache/)

[https://aws.amazon.com/rds/details/read-replicas/](https://aws.amazon.com/rds/details/read-replicas/)

[https://d1.awsstatic.com/whitepapers/AWS\_Cloud\_Best\_Practices.pdf](https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf)

  

**Check out these AWS Cheat Sheets:**

[https://tutorialsdojo.com/amazon-elasticache/](https://tutorialsdojo.com/amazon-elasticache/?src=udemy)

[https://tutorialsdojo.com/amazon-relational-database-service-amazon-rds/](https://tutorialsdojo.com/amazon-relational-database-service-amazon-rds/?src=udemy)

# Question 24: Incorrect

A company has several NFS shares in its on-premises data center that contains millions of small log files totaling around 50TB in size. The files in these NFS shares need to be migrated to an Amazon S3 bucket. To start the migration process, the solutions architect requested an AWS Snowball Edge device that will be used to transfer the files to Amazon S3. A file interface was configured on the Snowball Edge device and is connected to the corporate network. The Solutions Architect initiated the `snowball cp` command to start the copying process, however, the copying of data is significantly slower than expected.

Which of the following options are the likely cause of the slow transfer speed and the recommended solution?

-   The file interface of the Snowball Edge is limited by the network interface speed. Connect the device directly using a high-speed USB 3.0 interface instead to maximize the copying throughput.
    
    (Incorrect)
    
-   This is due to encryption overhead when copying files to the Snowball Edge device. Open multiple sessions to the Snowball Edge device and initiate parallel copy jobs to improve the overall copying throughput.
    
    (Correct)
    
-   Ingesting millions of files has saturated the processing power of the Snowball Edge. Request for another Snowball Edge device and cluster them together to increase the ingest throughput.
    
-   The file interface of the Snowball Edge has reached its throughput limit. Change the interface to an S3 Adapter instead for a significantly faster transfer speed.
    

Explanation

One of the major ways that you can improve the performance of an **AWS Snowball Edge** device is to speed up the transfer of data going to and from a device. In general, you can improve the transfer speed from your data source to the device in the following ways. The following list is ordered **from largest to smallest positive impact on performance**:

**Perform multiple write operations at one time** – To do this, run each command from multiple terminal windows on a computer with a network connection to a single AWS Snowball Edge device.

**Transfer small files in batches** – Each copy operation has some overhead because of encryption. To speed up the process, batch files together in a single archive. When you batch files together, they can be auto-extracted when they are imported into Amazon S3.

**Write from multiple computers** – A single AWS Snowball Edge device can be connected to many computers on a network. Each computer can connect to any of the three network interfaces at once.

**Don't perform other operations on files during transfer** – Renaming files during transfer, changing their metadata, or writing data to the files during a copy operation has a negative impact on transfer performance. AWS recommends that your files remain in a static state while you transfer them.

**Reduce local network use** – Your AWS Snowball Edge device communicates across your local network. So you can improve data transfer speeds by reducing other local network traffic between the AWS Snowball Edge device, the switch it's connected to, and the computer that hosts your data source.

**Eliminate unnecessary hops** – AWS recommends that you set up your AWS Snowball Edge device, your data source, and the computer running the terminal connection between them so that they're the only machines communicating across a single switch. Doing so can improve data transfer speeds.

For transferring small files, AWS also recommends transferring in batches. Each copy operation has some overhead because of encryption. To speed up the process of transferring small files to your AWS Snowball Edge device, you can batch them together in a single archive. When you batch files together, they can be auto-extracted when they are imported into Amazon S3, if they were batched in one of the supported archive formats.

Typically, files that are 1 MB or smaller should be included in batches. There's no hard limit on the number of files you can have in a batch, though AWS recommends that you limit your batches to about 10,000 files. Having more than 100,000 files in a batch can affect how quickly those files import into Amazon S3 after you return the device. AWS recommends that the total size of each batch be no larger than 100 GB. Batching files is a manual process, which you have to manage.

Therefore, the correct answer is: **This is due to encryption overhead when copying files to the Snowball Edge device. Open multiple sessions to the Snowball Edge device and initiate parallel copy jobs to improve the overall copying throughput.** Performing multiple copy operations to the Snowball Edge device has the biggest impact to improve your transfer speed.

The option that says: **Ingesting millions of files has saturated the processing power of the Snowball Edge. Request for another Snowball Edge device and cluster them together to increase the ingest throughput** is incorrect. A Snowball Edge cluster has the benefits of increased durability and storage capacity. It does not improve the copy transfer speed.

The option that says: **The file interface of the Snowball Edge has reached its throughput limit. Change the interface to an S3 Adapter instead for a significantly faster transfer speed** is incorrect. An S3 Adapter is used to transfer data programmatically to and from the AWS Snowball Edge device using Amazon S3 REST API actions. It may be faster to use an S3 interface if you reached the file interface limit. However, the question already states that the copying of data is very slow compared to what is expected.  

The option that says: **The file interface of the Snowball Edge is limited by the network interface speed. Connect the device directly using a high-speed USB 3.0 interface instead to maximize the copying throughput** is incorrect. Although some revisions of USB 3.0 or USB 3.1 can support up to 5 Gbps to 10 Gbps speeds, the network interface on the Snowball Edge supports up to 100 Gbps. You can maximize throughput by issuing multiple copy commands to the Snowball device.

  

**References:**

[https://docs.aws.amazon.com/snowball/latest/developer-guide/batching-small-files.html](https://docs.aws.amazon.com/snowball/latest/developer-guide/batching-small-files.html)

[https://docs.aws.amazon.com/snowball/latest/developer-guide/BestPractices.html](https://docs.aws.amazon.com/snowball/latest/developer-guide/BestPractices.html)

[https://docs.aws.amazon.com/snowball/latest/ug/performance.html](https://docs.aws.amazon.com/snowball/latest/ug/performance.html)

[https://docs.aws.amazon.com/snowball/latest/developer-guide/using-adapter.html](https://docs.aws.amazon.com/snowball/latest/developer-guide/using-adapter.html)

  

**Check out this AWS Snowball Edge Cheat Sheet:**

[https://tutorialsdojo.com/aws-snowball-edge/](https://tutorialsdojo.com/aws-snowball-edge/?src=udemy)

  

**AWS Snow Family Overview:**

[https://www.youtube.com/watch?v=9Ar-51Ip53Q](https://www.youtube.com/watch?v=9Ar-51Ip53Q)

# Question 27: Incorrect

A company has built an application that allows painters to upload photos of their creations. The app allows users from North America and European regions to browse the galleries and order their chosen artworks. The application is hosted on a fixed set of Amazon EC2 instances in the us-east-1 region. Using mobile phones, the artists can scan and upload large, high-resolution images of their artworks which are stored in a centralized Amazon S3 bucket also in the same region. After the initial week of operation, the European artists are reporting slow performance on their image uploads.

Which of the following is the best solution to improve the image upload process?

-   Enable multipart upload on Amazon S3 and redeploy the application to support it. This allows the transmitting of separate parts of the image in parallel.
    
    (Incorrect)
    
-   Increase the upload capacity by converting the Amazon EC2 instances to an Auto Scaling Group that can scale automatically based on the users' traffic.
    
-   Enable Amazon S3 Transfer Acceleration on the central S3 bucket. Use the s3-accelerate endpoint to upload the images.
    
    (Correct)
    
-   Set the centralized Amazon S3 bucket as the custom origin on an Amazon CloudFront distribution. This will use CloudFront’s global edge network to improve the upload speed.
    

Explanation

**Amazon S3 Transfer Acceleration** enables fast, easy, and secure transfers of files over long distances between your client and an S3 bucket. Transfer Acceleration takes advantage of Amazon CloudFront’s globally distributed edge locations. As the data arrives at an edge location, data is routed to Amazon S3 over an optimized network path.

**_![](https://media.tutorialsdojo.com/s3-transfer-acceleration.png)_**

You might want to use Transfer Acceleration on a bucket for various reasons, including the following:

\- You have customers that upload to a centralized bucket from all over the world.

\- You transfer gigabytes to terabytes of data on a regular basis across continents.

\- You are unable to utilize all of your available bandwidth over the Internet when uploading to Amazon S3.

You can enable Transfer Acceleration on a bucket in any of the following ways:

\- Use the Amazon S3 console.

\- Use the REST API PUT Bucket accelerate operation.

\- Use the AWS CLI and AWS SDKs.

You can transfer data to and from the acceleration-enabled bucket by using one of the following s3-accelerate endpoint domain names:

`- s3-accelerate.amazonaws.com` – to access an acceleration-enabled bucket.

`- s3-accelerate.dualstack.amazonaws.com` – to access an acceleration-enabled bucket over IPv6. Amazon S3 dual-stack endpoints support requests to S3 buckets over IPv6 and IPv4.

You can point your Amazon S3 PUT object and GET object requests to the s3-accelerate endpoint domain name after you enable Transfer Acceleration. After Transfer Acceleration is enabled, it can take up to 20 minutes for you to realize the performance benefit. However, the accelerate endpoint will be available as soon as you enable Transfer Acceleration.

Therefore, the correct answer is: **Enable Amazon S3 Transfer Acceleration on the central S3 bucket. Use the s3-accelerate endpoint to upload the images.**

The option that says: **Enable multipart upload on Amazon S3 and redeploy the application to support it. This allows the transmitting of separate parts of the image simultaneously** is incorrect. Although multipart upload can improve the upload throughput to an S3 bucket, the European users are still limited on their Internet connection to the S3 bucket in the US region. S3 Transfer acceleration uses AWS backbone network which can optimize the transfer from far away regions.

The option that says: **Set the centralized Amazon S3 bucket as the custom origin on an Amazon CloudFront distribution. This will use CloudFront’s global edge network to improve the upload speed** is incorrect. CloudFront distribution is designed for optimizing content delivery and content caching. Although CloudFront supports content uploads via POST, PUT, other HTTP Methods, there is a limited connection timeout to the origin (60 seconds). If uploads will take several minutes, the connection might get terminated. If you want to optimize performance when uploading large files to Amazon S3, it is recommended to use Amazon S3 Transfer Acceleration which can provide fast and secure transfers over long distances. Transfer Acceleration uses Amazon CloudFront's globally distributed edge locations.

The option that says: **Increase the upload capacity by converting the Amazon EC2 instances to an Auto Scaling Group that can scale automatically based on the users' traffic** is incorrect because the images are directly being uploaded to the S3 bucket so increasing the number of EC2 instances does not necessarily improve the S3 upload speeds. Even if the application is configured to use the EC2 instance as a temporary storage for the images, the upload experience of the users will not improve because they are uploading from a different continent.

  

**References:**

[https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html)

[https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration-examples.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration-examples.html)

[https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/uploadobjusingmpu.html)

[https://aws.amazon.com/premiumsupport/knowledge-center/s3-upload-large-files/](https://aws.amazon.com/premiumsupport/knowledge-center/s3-upload-large-files/)

  

**Check out this AWS Transfer Acceleration Comparison Cheat Sheet:**

[https://tutorialsdojo.com/s3-transfer-acceleration-vs-direct-connect-vs-vpn-vs-snowball-vs-snowmobile/](https://tutorialsdojo.com/s3-transfer-acceleration-vs-direct-connect-vs-vpn-vs-snowball-vs-snowmobile/?src=udemy)

# Question 44: Incorrect

A company is running thousands of virtualized Linux and Microsoft Windows servers on its on-premises data center. The virtual servers host a range of Java and PHP applications that are using MySQL and Oracle databases. There are also several department services hosted on an external data center. The company uses SAN storage to provide iSCSI disks to its physical servers. The company wants to migrate its data center into the AWS Cloud but the technical documentation of the systems is incomplete and outdated. The Solutions Architect was tasked to analyze the current environment and estimate the cost of migrating the resources to the cloud.

Which of the following should the Solutions Architect do to effectively plan the cloud migration? (Select THREE.)

-   Use AWS X-Ray to analyze the applications running in the servers and identify possible errors that may be encountered during the migration.
    
-   Use the AWS Cloud Adoption Readiness Tool (CART) to generate a migration assessment report to identify gaps in organizational skills and processes.
    
    (Correct)
    
-   Use AWS Migration Hub to discover and track the status of the application migration across AWS and partner solutions.
    
    (Correct)
    
-   Use Amazon Inspector to scan and assess the applications deployed on the on-premises virtual machines and save the generated report to an Amazon S3 bucket.
    
-   Use AWS Application Discovery Service to gather information about the running virtual machines and running applications inside the servers.
    
    (Correct)
    
-   Use AWS Server Migration Service (SMS) to automate the migration of the on-premises virtual machines to the AWS Cloud.
    
    (Incorrect)
    

Explanation

The scenario requires tools of services that will help to effectively plan the cloud migration so the answers should be focused on planning.

**AWS Application Discovery Service** helps you plan your migration to the AWS cloud by collecting usage and configuration data about your on-premises servers. Application Discovery Service is integrated with AWS Migration Hub, which simplifies your migration tracking as it aggregates your migration status information into a single console. You can view the discovered servers, group them into applications, and then track the migration status of each application from the Migration Hub console in your home region.

![](https://media.tutorialsdojo.com/sap_migration_hub.png)

Application Discovery Service offers two ways of performing discovery and collecting data about your on-premises servers:

**\- Agentless discovery** can be performed by deploying the AWS Agentless Discovery Connector (OVA file) through your VMware Center.

**\- Agent-based discovery** can be performed by deploying the AWS Application Discovery Agent on each of your VMs and physical servers.

The **AWS Cloud Adoption Readiness Tool (CART)** helps organizations of all sizes develop efficient and effective plans for cloud adoption and enterprise cloud migrations. This 16-question online survey and assessment report details your cloud migration readiness across six perspectives including business, people, process, platform, operations, and security. Once you complete a CART survey, you can provide your contact details to download a customized cloud migration assessment that charts your readiness and what you can do to improve it. This tool is designed to help organizations assess their progress with cloud adoption and identify gaps in organizational skills and processes.

**AWS Migration Hub (Migration Hub)** provides a single place to discover your existing servers, plan migrations, and track the status of each application migration. The Migration Hub provides visibility into your application portfolio and streamlines planning and tracking. You can visualize the connections and the status of the servers and databases that make up each of the applications you are migrating, regardless of which migration tool you are using. Migration Hub gives you the choice to start migrating right away and group servers while migration is underway, or to first discover servers and then group them into applications.

Therefore, the correct answers are:

**\- Use AWS Application Discovery Service to gather information about the running virtual machines and running applications inside the servers.**

**\- Use the AWS Cloud Adoption Readiness Tool (CART) to generate a migration assessment report to identify gaps in organizational skills and processes.**

**\- Use AWS Migration Hub to discover and track the status of the application migration across AWS and partner solutions.**

The option that says: **Use AWS Server Migration Service (SMS) to automate the migration of the on-premises virtual machines to the AWS Cloud** is incorrect because SMS is primarily used for the actual migration of your on-premises virtual machines to the AWS cloud and not for planning. Take note that in the scenario, the Solutions Architect was tasked to analyze the existing on-premises architecture first before doing the actual migration to AWS.

The option that says: **Use AWS X-Ray to analyze the applications running in the servers and identify possible errors that may be encountered during the migration** is incorrect because AWS X-Ray is used to debug production and distributed applications such as those built using a microservices architecture. This is not helpful for planning the migration.

The option that says: **Use Amazon Inspector to scan and assess the applications deployed on the on-premises virtual machines and save the generated report to an Amazon S3 bucket** is incorrect because Amazon Inspector is simply an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. This is not helpful for assessing the applications on the on-premises data center.

  

**References:**

[https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html](https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html)

[https://cloudreadiness.amazonaws.com/#/cart](https://cloudreadiness.amazonaws.com/#/cart)

[https://docs.aws.amazon.com/migrationhub/latest/ug/getting-started.html](https://docs.aws.amazon.com/migrationhub/latest/ug/getting-started.html)

  

**AWS Migration Services Overview:**

[https://youtu.be/yqNBkFMnsL8](https://youtu.be/yqNBkFMnsL8)  

**Check out the AWS Migration Services Cheat Sheet:**

[https://tutorialsdojo.com/aws-cheat-sheets-migration-services/](https://tutorialsdojo.com/aws-cheat-sheets-migration-services/?src=udemy)

# Question 48: Incorrect

A multinational healthcare company plans to launch a new MedTech information website. The solutions architect decided to use Amazon CloudFormation to deploy a three-tier web application that consists of a web tier, an application tier, and a database tier that will utilize Amazon DynamoDB for storage. The solutions architect must secure any credentials that are used to access the database tier.

Which of the following options will allow the application instances access to the DynamoDB tables without exposing API credentials?

-   Create an IAM Role and assign the required permissions to read and write from the DynamoDB table. Have the instance profile property of the application instance reference the role.
    
    (Correct)
    
-   Have the user enter the access and secret keys of an existing IAM User that has permissions to read and write from the DynamoDB table instead of using the Parameter section in the CloudFormation template.
    
-   Create an IAM Role that grants access to the DynamoDB table. Use the `AWS::SSM::Parameter` resource that creates an SSM parameter in AWS Systems Manager Parameter Store containing the Amazon Resource Name of the IAM role. Have the instance profile property of the application instance reference the role.
    
    (Incorrect)
    
-   Create an IAM User in the CloudFormation template and assign permissions to read and write from the DynamoDB table. Then retrieve the values of the access and secret keys using CloudFormation's GetAtt function, and pass them to the application instance through user-data.
    

Explanation

Applications that run on an EC2 instance must include AWS credentials in their AWS API requests. You could have your developers store AWS credentials directly within the EC2 instance and allow applications in that instance to use those credentials. But developers would then have to manage the credentials and ensure that they securely pass the credentials to each instance and update each EC2 instance when it's time to rotate the credentials. That's a lot of additional work.

Instead, you can and should use an **IAM role** to manage _temporary_ credentials for applications that run on an EC2 instance. When you use a role, you don't have to distribute long-term credentials (such as a user name and password or access keys) to an EC2 instance. Instead, the role supplies temporary permissions that applications can use when they make calls to other AWS resources. When you launch an EC2 instance, you specify an IAM role to associate with the instance. Applications that run on the instance can then use the role-supplied temporary credentials to sign API requests.

An **IAM role** is similar to a user, in that it is an AWS identity with permission policies that determine what the identity can and cannot do in AWS. However, instead of being uniquely associated with one person, a role is intended to be assumable by anyone who needs it. Also, a role does not have standard long-term credentials (password or access keys) associated with it. Instead, if a user assumes a role, temporary security credentials are created dynamically and provided to the user. The scenario requires the instance to have access to DynamoDB tables without having to use the API credentials. In such scenarios, always think of creating IAM Roles rather than IAM Users.

![](https://media.tutorialsdojo.com/sap_ec2_iam_role.png)

Therefore, the correct answer is: **Create an IAM Role and assign the required permissions to read and write from the DynamoDB table. Have the instance profile property of the application instance reference the role.** It uses IAM Role with the appropriate permissions to access the resource, and it references that Role in the instance profile property of the application instance.

The option that says: **Create an IAM User in the CloudFormation template and assign permissions to read and write from the DynamoDB table. Then retrieve the values of the access and secret keys using CloudFormation's GetAtt function, and pass them to the application instance through user-data** is incorrect because you should never expose the Access and Secret Keys while accessing AWS resources, and using IAM Role is a more secure way of accessing the resources than using IAM Users with security credentials.

The option that says: **Create an IAM Role that grants access to the DynamoDB table. Use the** `**AWS::SSM::Parameter**` **resource that creates an SSM parameter in AWS Systems Manager Parameter Store containing the Amazon Resource Name of the IAM role. Have the instance profile property of the application instance reference the role** is incorrect because storing the ARN of the IAM Role in the AWS Systems Manager Parameter Store is not the proper way to attach the role to the application instance. You have to use the instance profile property (`AWS::IAM::InstanceProfile`) instead.

The option that says: **Have the user enter the access and secret keys of an existing IAM User that has permissions to read and write from the DynamoDB table instead of using the Parameter section in the CloudFormation template** is incorrect because you should never expose the Access and Secret Keys while accessing the AWS resources, and using IAM Role is a more secure way of accessing the resources than using IAM Users with security credentials.  

**References**:

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id\_roles\_use\_switch-role-ec2\_instance-profiles.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html)

[https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html)

  

**Check out this AWS IAM Cheat Sheet:**

[https://tutorialsdojo.com/aws-identity-and-access-management-iam/](https://tutorialsdojo.com/aws-identity-and-access-management-iam/?src=udemy)

# Question 53: Incorrect

An international insurance company has clients all across the globe. The company has financial files that are stored in an Amazon S3 bucket which is behind CloudFront. At present, their clients can access their data by directly using an S3 URL or using their CloudFront distribution. The company wants to deliver their content to a specific client in California and they need to make sure that only that client can access the data.

Which of the following options is a valid solution that meets the above requirements? (Select TWO.)

-   Use CloudFront Signed Cookies to ensure that only their client can access the files. Enable HTTPS in your CloudFront distribution.
    
    (Incorrect)
    
-   Create a new S3 bucket in US West (N. California) region and upload the files. Use S3 pre-signed URLs to ensure that only their client can access the files. Remove permission to use Amazon S3 URLs to read the files for anyone else.
    
    (Correct)
    
-   Use CloudFront signed URLs to ensure that only their client can access the files. Enable field-level encryption in your CloudFront distribution.
    
-   Use CloudFront signed URLs to ensure that only their client can access the files. Create an origin access identity (OAI) and give it permission to read the files in the bucket. Remove permission to use Amazon S3 URLs to read the files for anyone else.
    
    (Correct)
    
-   Create a new S3 bucket in US West (N. California) region and upload the files. Set up an origin access identity (OAI) and give it permission to read the files in the bucket. Enable HTTPS in your CloudFront distribution.
    

Explanation

Many companies that distribute content over the internet want to restrict access to documents, business data, media streams, or content that is intended for selected users, for example, users who have paid a fee. To securely serve this private content by using CloudFront, you can do the following:

\- Require that your users access your private content by using special CloudFront signed URLs or signed cookies.

\- Require that your users access your Amazon S3 content by using CloudFront URLs, not Amazon S3 URLs. Requiring CloudFront URLs isn't necessary, but it is recommended to prevent users from bypassing the restrictions that you specify in signed URLs or signed cookies.

![](https://media.tutorialsdojo.com/sap_cloudfront_oia.png)

All objects and buckets by default are private. The presigned URLs are useful if you want your user/customer to be able to upload a specific object to your bucket, but you don't require them to have AWS security credentials or permissions. You can generate a presigned URL programmatically using the AWS SDK for Java or the AWS SDK for .NET. If you are using Microsoft Visual Studio, you can also use AWS Explorer to generate a presigned object URL without writing any code. Anyone who receives a valid presigned URL can then programmatically upload an object.

Therefore, the correct answer is: **Create a new S3 bucket in US West (N. California) region and upload the files. Use S3 pre-signed URLs to ensure that only their client can access the files. Remove permission to use Amazon S3 URLs to read the files for anyone else** and **Use CloudFront signed URLs to ensure that only their client can access the files. Create an origin access identity (OAI) and give it permission to read the files in the bucket. Remove permission to use Amazon S3 URLs to read the files for anyone else.** Using a presigned URL to your S3 bucket will prevent other users from getting your private data which is intended to a certain client. A combination of Signed URL and OAI is also a valid solution that meets the requirement.

The option that says: **Use CloudFront Signed Cookies to ensure that only their client can access the files. Enable HTTPS in your CloudFront distribution** is incorrect. The signed cookies feature is primarily used if you want to provide access to multiple restricted files, for example, all of the files for a video in HLS format or all of the files in the subscribers' area of website. In addition, this solution is not complete since the users can bypass the restrictions by simply using the direct S3 URLs.

The option that says: **Use CloudFront signed URLs to ensure that only their client can access the files. Enable field-level encryption in your CloudFront distribution** is incorrect. Although this solution is valid, the users can still bypass the restrictions in CloudFront by simply connecting to the direct S3 URLs.

The option that says: **Create a new S3 bucket in US West (N. California) region and upload the files. Set up an origin access identity (OAI) and give it permission to read the files in the bucket. Enable HTTPS in your CloudFront distribution** is incorrect. An Origin Access Identity (OAI) will only require your client to only access the files by using the CloudFront URL and not through a direct S3 URL. This can be a possible solution if it mentions the use of Signed URL or Signed Cookies.

  

**References**:

[https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html)

[https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/PresignedUrlUploadObject.html)

  

**Check out this Amazon CloudFront Cheat Sheet:**

[https://tutorialsdojo.com/amazon-cloudfront/](https://tutorialsdojo.com/amazon-cloudfront/?src=udemy)

  

**S3 Pre-signed URLs vs CloudFront Signed URLs vs Origin Access Identity (OAI)**

[https://tutorialsdojo.com/s3-pre-signed-urls-vs-cloudfront-signed-urls-vs-origin-access-identity-oai/](https://tutorialsdojo.com/s3-pre-signed-urls-vs-cloudfront-signed-urls-vs-origin-access-identity-oai/?src=udemy)

  

**Comparison of AWS Services Cheat Sheets:**

[https://tutorialsdojo.com/comparison-of-aws-services/](https://tutorialsdojo.com/comparison-of-aws-services/?src=udemy)

# Question 54: Incorrect

An analytics company plans to create a self-service solution that will provide a safe and cost-effective way for the data scientists to access Amazon SageMaker on the company AWS accounts. The data scientists have limited knowledge of AWS cloud so the complex setup requirements for their ML models should not be exposed to them. The company wants the data scientists to be able to launch a Jupyter notebook instance as they need it. The data at rest on the storage volume of the notebook instance must be encrypted with a preconfigured AWS KMS key.

Which of the following solutions will meet the company requirements with the LEAST amount of operational overhead?

-   Write an AWS CloudFormation template that contains the `AWS::SageMaker::NotebookInstance` resource type to launch a Jupyter notebook instance with a preconfigured AWS KMS key. Create Mappings on the CloudFormation to map simpler parameter names for instance sizes such as Small, Medium, Large. Reference the URL of the notebook instance on the Outputs section of the template. Create a portfolio in AWS Service Catalog and upload the template to be shared with the IAM role of the data scientists.
    
    (Correct)
    
-   Write a custom AWS CLI script that will take step-by-step instructions of the input parameters from the data scientist for the requested Jupyter notebook instance with the pre-configured AWS KMS key. Upload this script to a shared Amazon S3 bucket for distribution with the data scientists. Have the data scientists execute the script locally on their computers.
    
-   Write an AWS CloudFormation template that contains the `AWS::SageMaker::NotebookInstance` resource type to launch a Jupyter notebook instance with a preconfigured AWS KMS key. On the Outputs section of the CloudFormation template, reference the URL of the notebook instance. Rename this template to be more user-friendly and upload it to a shared Amazon S3 bucket for distribution to the data scientists.
    
-   Create an Amazon S3 bucket with website hosting enabled. Create a simple form as a front-end website hosted on the S3 bucket that allows the data scientist to input their request for Jupyter notebook creation. Send the request to an Amazon API Gateway that will invoke an AWS Lambda function with an IAM role permission to create the Jupyter notebook instance with a preconfigured AWS KMS key. Have the Lambda function reply the URL of the notebook instance for display on the front-end website.
    
    (Incorrect)
    

Explanation

**AWS Service Catalog** allows organizations to create and manage catalogs of IT services that are approved for use on AWS. These IT services can include everything from virtual machine images, servers, software, and databases to complete multi-tier application architectures. AWS Service Catalog allows you to centrally manage deployed IT services and your applications, resources, and metadata.

With AWS Service Catalog, you define your own catalog of AWS services and AWS Marketplace software and make them available for your organization. Then, end users can quickly discover and deploy IT services using a self-service portal.

**Amazon SageMaker** is a fully managed machine learning service. With SageMaker, data scientists and developers can quickly and easily build and train machine learning models, and then directly deploy them into a production-ready hosted environment. It provides an integrated Jupyter authoring notebook instance for easy access to your data sources for exploration and analysis, so you don't have to manage servers. It also provides common machine learning algorithms that are optimized to run efficiently against extremely large data in a distributed environment. With native support for bring-your-own-algorithms and frameworks, SageMaker offers flexible distributed training options that adjust to your specific workflows.

You can easily create a self-service, secured data science using Amazon SageMaker, AWS Service Catalog, and AWS Key Management Service (KMS). Using AWS Service Catalog you can use a pre-configured AWS KMS key to encrypt data at rest on the machine learning (ML) storage volume that is attached to your notebook instance without ever exposing the complex, unnecessary details to data scientists. ML storage volume encryption is enforced by an AWS Service Catalog product that is pre-configured by centralized security and/or infrastructure teams.

![](https://media.tutorialsdojo.com/sap_service_catalog.png)

Therefore, the correct answer is: **Write an AWS CloudFormation template that contains the** `**AWS::SageMaker::NotebookInstance**` **resource type to launch a Jupyter notebook instance with a preconfigured AWS KMS key. Create Mappings on the CloudFormation to map simpler parameter names for instance sizes such as Small, Medium, Large. Reference the URL of the notebook instance on the Outputs section of the template. Create a portfolio in AWS Service Catalog and upload the template to be shared with the IAM role of the data scientists.** This solution has less operational overhead because you just need to maintain a single template. Additionally, AWS Service Catalog allows end-users to quickly discover and deploy IT services using a self-service portal.

The option that says: **Create an Amazon S3 bucket with website hosting enabled. Create a simple form as a front-end website hosted on the S3 bucket that allows the data scientist to input their request for Jupyter notebook creation. Send the request to an Amazon API Gateway that will invoke an AWS Lambda function with an IAM role permission to create the Jupyter notebook instance with a preconfigured AWS KMS key. Have the Lambda function reply the URL of the notebook instance for display on the front-end website** is incorrect. Although this is possible, this requires a lot of operational overhead as you need to write a custom website and write a proper Lambda function that has the appropriate code to create the needed resources. Additionally, as the company has several accounts, you will need to create the Lambda function for each AWS account.

The option that says: **Write an AWS CloudFormation template that contains the** `**AWS::SageMaker::NotebookInstance**` **resource type to launch a Jupyter notebook instance with a preconfigured AWS KMS key. On the Outputs section of the CloudFormation template, reference the URL of the notebook instance. Rename this template to be more user-friendly and upload it to a shared Amazon S3 bucket for distribution to the data scientists** is incorrect. This is possible, however, it is not very user-friendly as the users need to download the appropriate CloudFormation template from Amazon S3 and then upload it to CloudFormation. They will then need to input the needed parameters for the creation of their Jupyter notebook instance.

The option that says: **Write a custom AWS CLI script that will take step-by-step instructions of the input parameters from the data scientist for the requested Jupyter notebook instance with the pre-configured AWS KMS key. Upload this script to a shared Amazon S3 bucket for distribution with the data scientists. Have the data scientists execute the script locally on their computers** is incorrect. This is also possible, however, this is not very user-friendly and does not meet the company requirement of a self-service portal solution.

  

**References:**

[https://aws.amazon.com/blogs/mt/enable-self-service-secured-data-science-using-amazon-sagemaker-notebooks-and-aws-service-catalog/](https://aws.amazon.com/blogs/mt/enable-self-service-secured-data-science-using-amazon-sagemaker-notebooks-and-aws-service-catalog/)

[https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html](https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html)

[https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html](https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html)

  

**Check out these Amazon SageMaker and AWS Service Catalog Cheat Sheets:**

[https://tutorialsdojo.com/amazon-sagemaker/](https://tutorialsdojo.com/amazon-sagemaker/?src=udemy)

[https://tutorialsdojo.com/aws-service-catalog/](https://tutorialsdojo.com/aws-service-catalog/?src=udemy)

# Question 55: Incorrect

An electric utility company deploys smart meters for its customers to easily track their electricity usage. Each smart meter sends data every five minutes to an Amazon API Gateway which is then processed by several AWS Lambda functions before storing to an Amazon DynamoDB table. The Lambda functions take about 5 to 10 seconds to process the data based on the initial deployment testing. As the company’s customer base grew, the solutions architect noticed that the Lambda functions are now taking 60 to 90 seconds to complete the processing. New metrics are also collected from the smart meters which further increased the processing time. Errors began showing when running the Lambda function such as `TooManyRequestsException` and `ProvisionedThroughputExceededException` error when performing PUT operation on the DynamoDB table.

Which combination of the following actions will resolve these issues? (Select TWO.)

-   The new metrics being collected requires more processing power from the Lambda functions. Adjust the memory allocation for the Lambda function to accommodate the surge.
    
-   Process the data in batches to avoid reaching the write limits to the DynamoDB table. Group the requests from API Gateway by streaming the data into an Amazon Kinesis data stream.
    
    (Correct)
    
-   Set up an Amazon SQS FIFO queue to handle the burst of the data stream from the smart metrics. Trigger the Lambda function to run whenever a message is received on the queue.
    
    (Incorrect)
    
-   As more customers are sending data, adjust the Write Capacity Unit (WCU) of the DynamoDB table to be able to accommodate all the write requests being processed by the Lambda functions.
    
    (Correct)
    
-   Since the Lambda functions are being overwhelmed with too many requests, increase the payload size from the meters but send the data less frequently to avoid reaching the concurrency limit.
    

Explanation

In **Amazon DynamoDB**, the ProvisionedThroughputExceededException error means that you exceeded your maximum allowed provisioned throughput for a table or for one or more global secondary indexes. This means that your request rate is too high. The AWS SDKs for DynamoDB automatically retries requests that receive this exception. Your request is eventually successful unless your retry queue is too large to finish.

To solve this, you can increase the write capacity unit (WCU) of your DynamoDB table. Every PutItem request consumes a write capacity unit. A write capacity unit represents one write per second, for an item up to 1 KB in size. For example, suppose that you create a table with 10 write capacity units. This allows you to perform 10 writes per second, for items up to 1 KB in size per second.

![](https://media.tutorialsdojo.com/sap_dynamoDB_auto_scaling.png)

In **AWS Lambda,** the first time you invoke your function, AWS Lambda creates an instance of the function and runs its handler method to process the event. When the function returns a response, it stays active and waits to process additional events. If you invoke the function again while the first event is being processed, Lambda initializes another instance, and the function processes the two events concurrently. Your functions' concurrency is the number of instances that serve requests at a given time. For an initial burst of traffic, your functions' cumulative concurrency in a Region can reach an initial level of between 500 and 3000, which varies per Region.

When seeing the TooManyRequestsException in AWS Lambda, it is possible that the throttles that you're seeing aren't on your Lambda function. Throttles can also occur on API calls during your function's invocation or on concurrency limits.

With **API Gateway**, you can send the stream to an Amazon Kinesis data stream on which you can group requests in batches so there will be a decrease in requests in Lambda.

Therefore, the correct answers are:

**\- As more customers are sending data, adjust the Write Capacity Unit (WCU) of the DynamoDB table to be able to accommodate all the write requests being processed by the Lambda functions.**

**\- Process the data in batches to avoid reaching the write limits to the DynamoDB table. Group the requests from API Gateway by streaming the data into an Amazon Kinesis data stream.**

The option that says: **The new metrics being collected requires more processing power from the Lambda functions. Adjust the memory allocation for the Lambda function to accommodate the surge** is incorrect. Although this can improve the processing power of the Lambda functions, this will not solve the TooManyRequestsException error which is due to reaching the AWS Lambda concurrency execution limits.

The option that says: **Since the Lambda functions are being overwhelmed with too many requests, increase the payload size from the meters but send the data less frequently to avoid reaching the concurrency limit** is incorrect. Although this will solve the TooManyRequestsException for the Lambda function, you may reach the 10MB payload limit on the API gateway if you aggregate too much data before sending it to API Gateway.

The option that says: **Set up an Amazon SQS FIFO queue to handle the burst of the data stream from the smart metrics. Trigger the Lambda function to run whenever a message is received on the queue** is incorrect. This action is not recommended because an SQS FIFO queue can only handle 3000 messages per second. The customer base is constantly growing so it is recommended to use Amazon Kinesis to scale beyond this.

  

**References:**

[https://aws.amazon.com/premiumsupport/knowledge-center/lambda-troubleshoot-throttling/](https://aws.amazon.com/premiumsupport/knowledge-center/lambda-troubleshoot-throttling/)

[https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html#concurrent-execution-safety-limit](https://docs.aws.amazon.com/lambda/latest/dg/invocation-scaling.html#concurrent-execution-safety-limit)

[https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Programming.Errors.html)

[https://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-kinesis.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-kinesis.html)

  

**Check out these AWS Lambda and Amazon DynamoDB Cheat Sheet:**

[https://tutorialsdojo.com/aws-lambda/](https://tutorialsdojo.com/aws-lambda/?src=udemy)

[https://tutorialsdojo.com/amazon-dynamodb/](https://tutorialsdojo.com/amazon-dynamodb/?src=udemy)

# Question 57: Incorrect

A company wants to improve data protection for the sensitive information stored on its AWS account - both in transit and at rest. Data protection in transit simply means that the data should be secured while it travels to and from Amazon S3. Data protection at rest means that the stored data on disk must be secured in Amazon S3 data centers. You can protect data in transit by using SSL or by using client-side encryption. To secure data at rest, you can choose from a variety of available Server-Side Encryption in S3.

Which of the following best describes how Amazon S3-Managed Keys (SSE-S3) encryption method works?

-   In SSE-S3, you will be able to manage the customer master keys (CMKs) and Amazon S3 manages the encryption for reading and writing objects in your S3 bucket.
    
-   SSE-S3 provides separate permissions to use an API key that provides added protection against unauthorized access of your objects in S3.
    
-   SSE-S3 provides strong multi-factor encryption in which each object is encrypted with a unique key. It also encrypts the key itself with a master key that it rotates regularly.
    
    (Correct)
    
-   In SSE-S3, a randomly generated data encryption key is returned which is used by the client to encrypt the object data.
    
    (Incorrect)
    

Explanation

With **Amazon S3** default encryption, you can set the default encryption behavior for an S3 bucket so that all new objects are encrypted when they are stored in the bucket. The objects are encrypted using server-side encryption with either Amazon S3-managed keys (SSE-S3) or AWS KMS keys stored in AWS Key Management Service (SSE-KMS).

When you configure your bucket to use default encryption with SSE-KMS, you can also enable S3 Bucket Keys to decrease request traffic from Amazon S3 to AWS Key Management Service (AWS KMS) and reduce the cost of encryption. When you use server-side encryption, Amazon S3 encrypts an object before saving it to disk and decrypts it when you download the objects.

**Server-side encryption** with Amazon S3-managed encryption keys (SSE-S3) uses strong multi-factor encryption. Amazon S3 encrypts each object with a unique key. As an additional safeguard, it encrypts the key itself with a master key that it rotates regularly. Amazon S3 server-side encryption uses one of the strongest block ciphers available, 256-bit Advanced Encryption Standard (AES-256), to encrypt your data.

![](https://media.tutorialsdojo.com/sap_s3_sse_encryption.png)

Therefore the correct answer is: **SSE-S3 provides strong multi-factor encryption in which each object is encrypted with a unique key. It also encrypts the key itself with a master key that it rotates regularly.**

The option that says: **SSE-S3 provides separate permissions to use an API key that provides added protection against unauthorized access of your objects in S3** is incorrect. SSE-S3 does not use API keys but rather encryption keys.

The option that says: **In SSE-S3, you will be able to manage the customer master keys (CMKs) and Amazon S3 manages the encryption for reading and writing objects in your S3 bucket** is incorrect. Customer master keys (CMKs) are being used in SSE-KMS and not in SSE-S3.

The option that says: **In SSE-S3, a randomly generated data encryption key is returned which is used by the client to encrypt the object data** is incorrect. SSE-S3 does not use a randomly generated data encryption key.

  

**References:**

[https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html)

[https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)

[https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html)

  

**Check out this Amazon S3 Cheat Sheet:**

[https://tutorialsdojo.com/amazon-s3/](https://tutorialsdojo.com/amazon-s3/?src=udemy)

# Question 59: Incorrect

A company is using Microsoft Active Directory to manage all employee accounts and devices. The IT department instructed the solutions architect to implement a single sign-on feature to allow the employees to use their existing Windows account password to connect and use the various AWS resources.

Which of the following options is the recommended way to extend the current Active Directory domain to AWS?

-   Use Amazon Cognito to authorize users to your applications using direct sign-in or through third-party apps, and access your apps' backend resources in AWS.
    
-   Use IAM Roles to set up cross-account access and delegate access to resources that are in your AWS account.
    
-   Use AWS Directory Service to integrate your AWS resources with the existing Active Directory using trust relationship. Enable single sign-on using Managed Microsoft AD.
    
    (Correct)
    
-   Create users and groups with AWS Single Sign-On along with AWS Organizations to help you manage SSO access and user permissions across all the AWS accounts.
    
    (Incorrect)
    

Explanation

Because the company is using Microsoft Active Directory already, you can use **AWS Directory Service for Microsoft AD** to create secure Windows trusts between your on-premises Microsoft Active Directory domains and your AWS Microsoft AD domain in the AWS Cloud. By setting up a trust relationship, you can integrate SSO to the AWS Management Console and the AWS Command Line Interface (CLI), as well as your Windows-based workloads.

![](https://media.tutorialsdojo.com/sap_aws_directory_service.png)

**AWS Directory Service** helps you to set up and run a standalone AWS Managed Microsoft AD directory hosted in the AWS Cloud. You can also use AWS Directory Service to connect your AWS resources with an existing on-premises Microsoft Active Directory. To configure AWS Directory Service to work with your on-premises Active Directory, you must first set up trust relationships to extend authentication from on-premises to the cloud.

Therefore, the correct answer is: **Use AWS Directory Service to integrate your AWS resources with the existing Active Directory using trust relationship. Enable single sign-on using Managed Microsoft AD.**

The option that says: **Use Amazon Cognito to authorize users to your applications using direct sign-in or through** **third-party apps, and accessing your apps' backend resources in AWS** is incorrect because Cognito is primarily used for federation to your web and mobile apps running on AWS. It allows you to authenticate users through social identity providers. But since the company is already using Microsoft AD, AWS Directory Service is the better choice here.

The option that says: **Creating users and groups with AWS Single Sign-On along with AWS Organizations to help you manage SSO access and user permissions across all the AWS accounts** is incorrect because using the AWS Single Sign-On service alone is not enough to meet the requirement. Although it can help you manage SSO access and user permissions across all your AWS accounts in AWS Organizations, you still have to use the AWS Directory Service to integrate your on-premises Microsoft AD. AWS SSO integrates with Microsoft AD using AWS Directory Service so there is no need to create users and groups.

The option that says: **Use IAM Roles to set up cross-account access and delegate access to resources that are in your AWS account** is incorrect because setting up cross-account access allows you to share resources in one AWS account with users in a different AWS account. Since the company is already using Microsoft AD then the better choice to use here is the AWS Directory Service.

  

**References:**

[https://aws.amazon.com/directoryservice/](https://aws.amazon.com/directoryservice/)

[https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-directory-connected.html](https://docs.aws.amazon.com/singlesignon/latest/userguide/manage-your-directory-connected.html)

  

**AWS Identity Services Overview:**

[https://youtu.be/AIdUw0i8rr0](https://youtu.be/AIdUw0i8rr0)

  

**Check out this AWS Directory Service Cheat Sheet:**

[https://tutorialsdojo.com/aws-directory-service/](https://tutorialsdojo.com/aws-directory-service/?src=udemy)

# Question 62: Incorrect

A company implements best practices and mandates that all of the cloud-related deployments should not be done manually but through the use of CloudFormation. All of the CloudFormation templates should be treated as code and hence, all of them are committed in a private GIT repository. A senior solutions architect has recently left the team. One of the tasks of the junior solutions architect is to handle a distributed system in AWS, in which the architecture is declared in a CloudFormation template. The distributed system needs to be migrated to another VPC and the junior solutions architect tried to read the template to understand the AWS resources that the template will generate. While analyzing the CloudFormation template, he stumbled upon the code below.

What does this code snippet do in CloudFormation?

`    "SNSTopic" : {   "Type" : "AWS::SNS::Topic",   "Properties" : {   "Subscription" : [{   "Protocol" : "sqs",   "Endpoint" : { "Fn::GetAtt" : [ "TutorialsDojoQueue", "Arn" ] }   }]   }    `

-   Creates an SNS topic which allows SQS subscription endpoints.
    
    (Incorrect)
    
-   Creates an SNS topic and then invokes the call to create an SQS queue with a logical resource name of TutorialsDojoQueue.
    
-   Creates an SNS topic and then adds a subscription using the ARN attribute name for the SQS resource, which is created under the logical name TutorialsDojoQueue.
    
    (Correct)
    
-   Creates an SNS topic which allows SQS subscription endpoints to be added as a parameter on the template.
    

Explanation

**AWS CloudFormation** provides several built-in functions that help you manage your stacks which are called "intrinsic functions". Use intrinsic functions in your templates to assign values to properties that are not available until runtime.

You can use intrinsic functions only in specific parts of a template. Currently, you can use intrinsic functions in resource properties, outputs, metadata attributes, and update policy attributes. You can also use intrinsic functions to conditionally create stack resources.

The `**Fn::GetAtt**` intrinsic function returns the value of an attribute from a resource in the template. It has 2 parameters: the `**logicalNameOfResource**` and the `**attributeName**`. The logical name (also called logical ID) of the resource contains the attribute that you want to use. The `**attributeName**` is the name of the resource-specific attribute whose value you want to utilize.

![](https://media.tutorialsdojo.com/sap_cloudformation_steps.png)

Therefore, the correct answer is: **Create an SNS topic and then add a subscription using the ARN attribute name for the SQS resource, which is created under the logical name TutorialsDojoQueue.** The code snippet creates an SNS topic and then adds a subscription using the ARN attribute name for the SQS resource, which is created under the logical name "TutorialsDojoQueue" using the GetAtt intrinsic function.

The following options are all incorrect because these options incorrectly described what the code snippet does:

**\- Creates an SNS topic which allows SQS subscription endpoints to be added as a parameter on the template.  
**

**\- Creates an SNS topic which allows SQS subscription endpoints.**

**\- Creates an SNS topic and then invokes the call to create an SQS queue with a logical resource name of TutorialsDojoQueue.**

  

**References:**

[https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html)

[https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html)

  

**Check out this AWS CloudFormation Cheat Sheet:**

[https://tutorialsdojo.com/aws-cloudformation/](https://tutorialsdojo.com/aws-cloudformation/?src=udemy)

# Question 66: Incorrect

A company is planning to migrate its workload to the AWS cloud. The solutions architect is looking to reduce the amount of time spent managing database instances from the on-premises data center by migrating to a managed relational database service in AWS such as Amazon Relational Database Service (RDS). In addition, the solutions architect plans to move the application hosted in the on-premises data center to a fully managed platform such as AWS Elastic Beanstalk.

Which of the following is the most cost-effective migration strategy that should be implemented to meet the above requirement?

-   Refactor / Re-architect
    
    (Incorrect)
    
-   Repurchase
    
-   Rehost
    
-   Replatform
    
    (Correct)
    

Explanation

**Organizations** usually begin to think about how they will migrate an application during Phase 2 (_Portfolio Discovery and Planning_) of the migration process. This is when you determine what is in your environment and the migration strategy for each application. The six approaches detailed below are common migration strategies employed and build upon “The 5 R’s” that Gartner Inc, a global research and advisory firm, outlined in 2011.

You should gain a thorough understanding of which migration strategy will be best suited for certain portions of your portfolio. It is also important to consider that while one of the six strategies may be best for migrating certain applications in a given portfolio, another strategy might work better for moving different applications in the same portfolio.

![](https://media.tutorialsdojo.com/sap_migration_paths.png)

**1\. Rehost (“lift and shift”)** - In a large legacy migration scenario where the organization is looking to quickly implement its migration and scale to meet a business case, we find that the majority of applications are rehosted.

**2\. Replatform (“lift, tinker and shift”)** \- This entails making a few cloud optimizations in order to achieve some tangible benefit without changing the core architecture of the application.

**3\. Repurchase (“drop and shop”)** \- This is a decision to move to a different product and likely means your organization is willing to change the existing licensing model you have been using. For workloads that can easily be upgraded to newer versions, this strategy might allow a feature set upgrade and smoother implementation.

**4\. Refactor / Re-architect** \- Typically, this is driven by a strong business need to add features, scale, or performance that would otherwise be difficult to achieve in the application’s existing environment.

**5\. Retire** \- Identifying IT assets that are no longer useful and can be turned off will help boost your business case and direct your attention towards maintaining the resources that are widely used.

**6\. Retain** - You may want to retain portions of your IT portfolio because there are some applications that you are not ready to migrate and feel more comfortable keeping them on-premises, or you are not ready to prioritize an application that was recently upgraded and then make changes to it again.

Therefore, the correct answer is: **Replatform.** This strategy is done by making a few cloud optimizations on your existing systems before migrating them to AWS, which is what will happen if you move your existing database and web applications to AWS. This strategy is more suitable when you want to reduce the amount of time you spend managing database instances by migrating to a managed relational database service such as Amazon Relational Database Service (RDS), or migrating your application to a fully managed platform like AWS Elastic Beanstalk.

**Rehost** is incorrect. Rehost (“lift and shift”) strategy is more suitable for quickly migrating the systems to AWS to meet a certain business case without no additional configuration involved. Take note that if you migrate your systems to either Elastic Beanstalk or RDS, you will still need to set up, configure, and test your systems, which takes additional time and effort.

**Repurchase** is incorrect. This strategy entails a decision to move to a different product and likely means your organization is willing to change the existing licensing model you have been using. Hence, this is not a suitable migration strategy for this scenario.

**Refactor / Re-architect** is incorrect. This strategy is suitable if there is a strong business need to add features, scale, or performance that would otherwise be difficult to achieve in the application’s existing environment. This type of migration strategy also entails additional cost, compared with the Replatform strategy, since you are allocating time, effort, and budget to optimize your systems.

**References:**

[https://aws.amazon.com/cloud-migration/](https://aws.amazon.com/cloud-migration/)

[https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/](https://aws.amazon.com/blogs/enterprise-strategy/6-strategies-for-migrating-applications-to-the-cloud/)

[https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-database-migration/planning-phase.html](https://docs.aws.amazon.com/prescriptive-guidance/latest/strategy-database-migration/planning-phase.html)

  

**Tutorials Dojo's AWS Certified Solutions Architect Professional Exam Study Guide:**

[https://tutorialsdojo.com/aws-certified-solutions-architect-professional/](https://tutorialsdojo.com/aws-certified-solutions-architect-professional/?src=udemy)

# Question 67: Incorrect

A company that manages hundreds of AWS client accounts has created a central logging service running on an Auto Scaling group of Amazon EC2 instances. The logging service receives logs from the client AWS accounts through the connectivity provided by AWS PrivateLink. The interface endpoint for this is available on each of the client AWS accounts. The EC2 instances hosting the logging service are spread on multiple subnets with a Network Load Balancer in front to spread the incoming load. Upon testing, the clients are unable to submit logs through the VPC endpoint.

Which of the following solutions will most likely resolve the issue? (Select TWO.)

-   Ensure that the security group attached to the EC2 instances hosting the logging service allows inbound traffic from the NLB subnet IPs.
    
    (Correct)
    
-   Ensure that the NACL associated with the logging service subnet allows communication to and from the NLB subnets. Ensure that the NACL associated with the NLB subnets allows communication to and from the EC2 instances subnets running the logging service.
    
    (Correct)
    
-   Ensure that the security group attached to the EC2 instances hosting the logging service allows inbound traffic from the IP address block of the clients.
    
-   Ensure that the NACL associated with the logging service subnets allows communication to and from the interface endpoint. Ensure that the NACL associated with the interface endpoint subnet allows communication to and from the EC2 instances running the logging service.
    
-   Ensure that the security group attached to the NLB allows inbound traffic from the interface endpoint subnet.
    
    (Incorrect)
    

Explanation

When you create an Amazon VPC endpoint interface with **AWS PrivateLink**, an Elastic Network Interface is created inside of the subnet that you specify. This interface VPC endpoint (interface endpoint) inherits the network ACL of the associated subnet. You must associate a security group with the interface endpoint to protect incoming and outgoing requests.

![](https://media.tutorialsdojo.com/sap_privatelink_vpc_endpoint.png)

When you associate a Network Load Balancer with an endpoint service, the Network Load Balancer forwards requests to the registered target as if the target was registered by IP address. In this case, the source IP addresses are the private IP addresses of the load balancer nodes. If you have access to the Amazon VPC endpoint service, you must verify that the security group rules and the rules within the network ACL associated with the Network Load Balancer’s targets:

\- Allow communication from the private IP address of the Network Load Balancer.

\- Don't allow communication from the IP address of the client or the interface endpoint.

To allow communication between clients and the Amazon VPC endpoint, you must create rules within the network ACL associated with the client’s subnet and the subnet associated with the interface endpoint. Be aware of the following limits:

\- Network Load Balancers do not have associated security groups. Therefore, the security groups for your targets must use IP addresses to allow traffic from the load balancer.

\- You cannot use the security groups for clients as a source in the security groups for the targets. Instead, use the client CIDR blocks as sources in the target security groups.

If you register targets by IP address and do not want to grant access to the entire VPC CIDR, you can grant access to the private IP addresses used by the load balancer nodes. There is one IP address per load balancer subnet.

Therefore, the correct answer are:

**\- Ensure that the NACL associated with the logging service subnet allows communication to and from the NLB subnets. Ensure that the NACL associated with the NLB subnets allows communication to and from the EC2 instances subnets running the logging service.**

**\- Ensure that the security group attached to the EC2 instances hosting the logging service allows inbound traffic from the NLB subnet IPs.**

The option that says: **Ensure that the NACL associated with the logging service subnets allows communication to and from the interface endpoint. Ensure that the NACL associated with the interface endpoint subnet allows communication to and from the EC2 instances running the logging service** is incorrect because the rules within the network ACL associated with the Network Load Balancer’s targets should not allow direct communication from the IP address of the client or the interface endpoint. A better approach is to ensure that the NACL associated with the NLB subnets allows communication to and from the EC2 instances subnets running the logging service.

The option that says: **Ensure that the security group attached to the EC2 instances hosting the logging service allows inbound traffic from the IP address block of the clients** is incorrect because the security group attached to the EC2 instances must permit the inbound traffic from the NLB subnet IPs and not the IP address block of the clients. The security group rules associated with the Network Load Balancer’s targets should not allow direct access from the IP address of the client or the interface endpoint.

The option that says: **Ensure that the security group attached to the NLB allows inbound traffic from the interface endpoint subnet** is incorrect because Network Load Balancers do not have associated security groups. The security groups for your targets must use IP addresses to allow traffic from the load balancer.

  

**References:**

[https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-troubleshooting.html](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-troubleshooting.html)

[https://aws.amazon.com/premiumsupport/knowledge-center/security-network-acl-vpc-endpoint/](https://aws.amazon.com/premiumsupport/knowledge-center/security-network-acl-vpc-endpoint/)

[https://aws.amazon.com/premiumsupport/knowledge-center/security-group-load-balancer/](https://aws.amazon.com/premiumsupport/knowledge-center/security-group-load-balancer/)

[https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-register-targets.html#target-security-groups](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/target-group-register-targets.html#target-security-groups)

  

**Application Load Balancer vs Network Load Balancer vs Classic Load Balancer:**

[https://tutorialsdojo.com/application-load-balancer-vs-network-load-balancer-vs-classic-load-balancer/](https://tutorialsdojo.com/application-load-balancer-vs-network-load-balancer-vs-classic-load-balancer/?src=udemy)

# Question 71: Incorrect

A company has an on-premises identity provider (IdP) used for authenticating employees. The Solutions Architect has created a SAML 2.0 based federated identity solution that integrates with the company IdP. This solution is used to authenticate users’ access to the AWS environment. Upon initial testing, the Solutions Architect has been successfully granted access to the AWS environment through the federated identity web portal. However, other test users who tried to authenticate through the federated identity web portal are not given access to the AWS environment.

Which of the following options must be checked to ensure the proper configuration of identity federation? (Select THREE.)

-   Ensure that the ARN of the SAML provider, the ARN of the created IAM role, and SAML assertion from the IdP are all included when the federated identity web portal calls the AWS STS `AssumeRoleWithSAML` API.
    
    (Correct)
    
-   Check the company’s IdP to ensure that the users are all part of the default `AWSFederatedUser` IAM group which is readily available in AWS.
    
-   Ensure that the IAM policy for that user has “Allow” permissions to use SAML federation.
    
    (Incorrect)
    
-   Ensure that the trust policy of the IAM roles created for the federated users or groups has set the SAML provider as principal.
    
    (Correct)
    
-   Ensure that the resources on the AWS environment VPC can reach the on-premises IdP using its DNS hostname.
    
-   Ensure that the appropriate IAM roles are mapped to company users and groups in the IdP’s SAML assertions.
    
    (Correct)
    

Explanation

AWS supports identity federation with SAML 2.0 (Security Assertion Markup Language 2.0), an open standard that many identity providers (IdPs) use. This feature enables federated single sign-on (SSO), so users can log into the AWS Management Console or call the AWS API operations without having to create an IAM user for everyone in your organization. By using SAML, you can simplify the process of configuring federation with AWS, because you can use the IdP's service instead of writing custom identity proxy code.

IAM federation supports these use cases:

\- Federated access to allow a user or application in your organization to call AWS API operations. You use a SAML assertion (as part of the authentication response) that is generated in your organization to get temporary security credentials.

\- Web-based single sign-on (SSO) to the AWS Management Console from your organization. Users can sign in to a portal in your organization hosted by a SAML 2.0–compatible IdP, select an option to go to AWS, and be redirected to the console without having to provide additional sign-in information. You can use a third-party SAML IdP to establish SSO access to the console or you can create a custom IdP to enable console access for your external users.

![](https://media.tutorialsdojo.com/sap_sso_ldap.png)

The diagram illustrates the following steps:

The user browses to your organization's portal and selects the option to go to the AWS Management Console. In your organization, the portal is typically a function of your IdP that handles the exchange of trust between your organization and AWS.

The portal verifies the user's identity in your organization.

The portal generates a SAML authentication response that includes assertions that identify the user and include attributes about the user. The portal sends this response to the client browser.

The client browser is redirected to the AWS single sign-on endpoint and posts the SAML assertion.

The endpoint requests temporary security credentials on behalf of the user and creates a console sign-in URL that uses those credentials.

AWS sends the sign-in URL back to the client as a redirect.

The client browser is redirected to the AWS Management Console. If the SAML authentication response includes attributes that map to multiple IAM roles, the user is first prompted to select the role for accessing the console.

Before you can use SAML 2.0-based federation, you must configure your organization's IdP and your AWS account to trust each other. Inside your organization, you must have an IdP that supports SAML 2.0, like Microsoft Active Directory Federation Service (AD FS, part of Windows Server), Shibboleth, or another compatible SAML 2.0 provider. In your organization's IdP, you define assertions that map users or groups in your organization to the IAM roles. Note that different users and groups in your organization might map to different IAM roles. The exact steps for performing the mapping depend on what IdP you're using.

The role or roles that you create in IAM define what federated users from your organization are allowed to do in AWS. When you create the trust policy for the role, you specify the SAML provider that you created earlier as the `Principal`. You can additionally scope the trust policy with a `Condition` element to allow only users that match certain SAML attributes to access the role.

The option that says: **Ensure that the trust policy of the IAM roles created for the federated users or groups has set the SAML provider as principal** is correct. In IAM, you create one or more IAM roles for the federated users. In the role's trust policy, you need to set the SAML provider as the principal, which establishes a trust relationship between your organization and AWS.

The option that says: **Ensure that the ARN of the SAML provider, the ARN of the created IAM role, and SAMS assertion from the IdP are all included when the federated identity web portal calls the AWS STS** `**AssumeRoleWithSAML**` **API** is correct. These items should all be passed by the client calling the AWS STS `AssumeRoleWithSAML` API.

The option that says: **Ensure that the appropriate IAM roles are mapped to company users and groups in the IdP’s SAML assertions** is correct. In your organization's IdP, you should define assertions that map users or groups in your organization to the IAM roles.

The option that says: **Ensure that the IAM policy for that user has “Allow” permissions to use SAML federation** is incorrect because test user's permissions are mapped to IAM roles, so we need to take a look at the IAM role policies and not the individual user IAM permission policies.

The option that says: **Check the company’s IdP to ensure that the users are all part of the default** `**AWSFederatedUser**` **IAM group which is readily available in AWS** is incorrect because there is no such thing as a default `AWSFederatedUser` IAM group. You only need to define assertions in your organization's IdP that map users or groups in your organization to the IAM roles.

The option that says: **Ensure that the resources on the AWS environment VPC can reach the on-premises IdP using its DNS hostname** is incorrect as this is not a requirement for the identity federation to work.

  

**References:**

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id\_roles\_providers\_saml.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html)

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id\_roles\_providers\_enable-console-saml.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html)

  

**Check out these AWS Security and Identity Services Cheat Sheet:**

[https://tutorialsdojo.com/aws-cheat-sheets-security-identity-services/](https://tutorialsdojo.com/aws-cheat-sheets-security-identity-services/?src=udemy)

# Question 72: Incorrect

The AWS resources in your production account are shared among various business units of the company. A single business unit may have one or more AWS accounts that have resources in the production account. There were a lot of incidents in which the developers from a specific business unit accidentally terminated the EC2 instances owned by another business unit. You are tasked to come up with a solution to only allow a specific business unit that owns the EC2 instances, and other AWS resources, to terminate their own resources.

Which of the following is the most suitable multi-account strategy that you should implement?

-   Use AWS Organizations to centrally manage all of your accounts. Group your accounts, which belong to a specific business unit, to an individual Organization Unit (OU). Create a Service Control Policy in the production account for each business unit which has a policy that allows access to the EC2 instances including resource-level permission to terminate the instances that it owns. Provide the cross-account access and the SCP to the individual member accounts to tightly control who can terminate the EC2 instances.
    
-   Use AWS Organizations to centrally manage all of your accounts. Group your accounts, which belong to a specific business unit, to individual Organization Units (OU). Create an IAM Role in the production account which has a policy that allows access to the EC2 instances including resource-level permission to terminate the instances owned by a particular business unit. Provide the cross-account access and the IAM policy to every member accounts of the OU.
    
    (Correct)
    
-   Use AWS Organizations to centrally manage all of your accounts. Group your accounts, which belong to a specific business unit, to an individual Organization Unit (OU). Create an IAM Role in the production account for each business unit which has a policy that allows access to the EC2 instances including resource-level permission to terminate the instances that it owns. Create an `AWSServiceRoleForOrganizations` service-linked role for the individual member accounts of the OU to enable trusted access.
    
    (Incorrect)
    
-   Use AWS Organizations to centrally manage all of your accounts. Group your accounts, which belong to a specific business unit, to an individual Organization Unit (OU). Create a Service Control Policy in the production account which has a policy that allows access to the EC2 instances including resource-level permission to terminate the instances owned by a particular business unit. Provide the cross-account access and the SCP to the OUs, which will then be automatically inherited by its member accounts.
    

Explanation

**AWS Organizations** is an account management service that enables you to consolidate multiple AWS accounts into an _organization_ that you create and centrally manage. AWS Organizations includes account management and consolidated billing capabilities that enable you to better meet the budgetary, security, and compliance needs of your business. As an administrator of an organization, you can create accounts in your organization and invite existing accounts to join the organization.

![](https://d2908q01vomqb2.cloudfront.net/c5b76da3e608d34edb07244cd9b875ee86906328/2020/06/16/telecom-mulit-account-1-1024x585.jpg)

You can use organizational units (OUs) to group accounts together to administer as a single unit. This greatly simplifies the management of your accounts. For example, you can attach a policy-based control to an OU, and all accounts within the OU automatically inherit the policy. You can create multiple OUs within a single organization, and you can create OUs within other OUs. Each OU can contain multiple accounts, and you can move accounts from one OU to another. However, OU names must be unique within a parent OU or root.

Resource-level permissions refer to the ability to specify which resources users are allowed to perform actions on. Amazon EC2 has partial support for resource-level permissions. This means that for certain Amazon EC2 actions, you can control when users are allowed to use those actions based on conditions that have to be fulfilled, or specific resources that users are allowed to use. For example, you can grant users permissions to launch instances, but only of a specific type, and only using a specific AMI.

The scenario on this question has a lot of AWS Accounts that need to be managed. AWS Organization solves this problem and provides you with control by assigning the different business units as individual Organization Units (OU). Service control policies (SCPs) are a type of organization policy that you can use to manage permissions in your organization. SCPs offer central control over the maximum available permissions for all accounts in your organization. However, SCPs alone are not sufficient for allowing access to the accounts in your organization. Attaching an SCP to an AWS Organizations entity just defines a guardrail for what actions the principals can perform. You still need to attach identity-based or resource-based policies to principals or resources in your organization's accounts to actually grant permission to them.

Since SCPs only allow or deny the use of an AWS service, you don't want to block OUs from completely using the EC2 service. Thus, you will need to provide cross-account access and the IAM policy to every member accounts of the OU.

Hence, the correct answer is: **Use AWS Organizations to centrally manage all of your accounts. Group your accounts, which belong to a specific business unit, to individual Organization Units (OU). Create an IAM Role in the production account which has a policy that allows access to the EC2 instances including resource-level permission to terminate the instances owned by a particular business unit. Provide the cross-account access and the IAM policy to every member accounts of the OU.**

The option that says: **Use AWS Organizations to centrally manage all of your accounts. Group your accounts, which belong to a specific business unit, to an individual Organization Unit (OU). Create an IAM Role in the production account for each business unit which has a policy that allows access to the EC2 instances including resource-level permission to terminate the instances that it owns. Create an** `**AWSServiceRoleForOrganizations**` **service-linked role for the individual member accounts of the OU to enable trusted access** is incorrect because **AWSServiceRoleForOrganizations** service-linked role is primarily used to only allow AWS Organizations to create service-linked roles for other AWS services. This service-linked role is present in all organizations and not just in a specific OU.

The following options are incorrect because an SCP policy simply specifies the services and actions that users and roles can use in the accounts:

**1\. Use AWS Organizations to centrally manage all of your accounts. Group your accounts, which belong to a specific business unit, to an individual Organization Unit (OU). Create a Service Control Policy in the production account for each business unit which has a policy that allows access to the EC2 instances including resource-level permission to terminate the instances that it owns. Provide the cross-account access and the SCP to the individual member accounts to tightly control who can terminate the EC2 instances.**

**2\. Use AWS Organizations to centrally manage all of your accounts. Group your accounts, which belong to a specific business unit, to an individual Organization Unit (OU). Create a Service Control Policy in the production account which has a policy that allows access to the EC2 instances including resource-level permission to terminate the instances owned by a particular business unit. Provide the cross-account access and the SCP to the OUs, which will then be automatically inherited by its member accounts.**

SCPs are similar to IAM permission policies except that they don't grant any permissions.

  

**References:**

[https://docs.aws.amazon.com/organizations/latest/userguide/orgs\_manage\_ous.html](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html)

[https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-iam-actions-resources.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-supported-iam-actions-resources.html)

[https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial\_cross-account-with-roles.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html)

  

**Check out this AWS Organizations Cheat Sheet:**

[https://tutorialsdojo.com/aws-organizations/](https://tutorialsdojo.com/aws-organizations/?src=udemy)

  

**Service Control Policies (SCP) vs IAM Policies:**

[https://tutorialsdojo.com/service-control-policies-scp-vs-iam-policies/](https://tutorialsdojo.com/service-control-policies-scp-vs-iam-policies/?src=udemy)

  

**Comparison of AWS Services Cheat Sheets:**

[https://tutorialsdojo.com/comparison-of-aws-services/](https://tutorialsdojo.com/comparison-of-aws-services/?src=udemy)



# Question 4: Incorrect

A company is planning to build its new customer relationship management (CRM) portal in AWS. The application architecture will be using a containerized microservices hosted on an Amazon ECS cluster. A Solutions Architect has been tasked to set up the architecture and comply with the AWS security best practice of granting the least privilege. The architecture should also support the use of security groups and standard network monitoring tools at the container level to comply with the company’s strict IT security policies.

Which of the following provides the MOST secure configuration for the CRM portal?

-   Use the `awsvpc` network mode in the task definition in your Amazon ECS Cluster. Attach security groups to the ECS tasks then use IAM roles for tasks to access other resources.
    
    (Correct)
    
-   Use the `bridge` network mode in the task definition in your Amazon ECS Cluster. Attach security groups to the ECS tasks then use IAM roles for tasks to access other resources.
    
    (Incorrect)
    
-   Use the `bridge` network mode in the task definition in your Amazon ECS Cluster. Attach security groups to Amazon EC2 instances then use IAM roles for EC2 instances to access other resources.
    
-   Use the `awsvpc` network mode in the task definition in your Amazon ECS Cluster. Attach security groups to the ECS tasks then pass IAM credentials into the container at launch time to access other AWS resources.
    

Explanation

**Task definitions** are split into separate parts: the task family, the IAM task role, the network mode, container definitions, volumes, task placement constraints, and launch types. The family and container definitions are required in a task definition, while task role, network mode, volumes, task placement constraints, and launch type are optional.

You can configure various Docker networking modes that will be used by containers in your ECS task. The valid values are `none`, `bridge`, `awsvpc`, and `host`. The default Docker network mode is `bridge`.

With IAM roles for Amazon ECS tasks, you can specify an IAM role that can be used by the containers in a task. Applications must sign their AWS API requests with AWS credentials, and this feature provides a strategy for managing credentials for your applications to use, similar to the way that Amazon EC2 instance profiles provide credentials to EC2 instances. Instead of creating and distributing your AWS credentials to the containers or using the EC2 instance’s role, you can associate an IAM role with an ECS task definition or `RunTask` API operation. The applications in the task’s containers can then use the AWS SDK or CLI to make API requests to authorized AWS services.

![](https://media.tutorialsdojo.com/sap_ecs_task_definition.png)

If the network mode is set to `**none**`, the task's containers do not have external connectivity and port mappings can't be specified in the container definition.

If the network mode is `**bridge**`, the task utilizes Docker's built-in virtual network which runs inside each container instance.

If the network mode is `**host**`, the task bypasses Docker's built-in virtual network and maps container ports directly to the EC2 instance's network interface directly. In this mode, you can't run multiple instantiations of the same task on a single container instance when port mappings are used.

If the network mode is `**awsvpc**`, the task is allocated an elastic network interface, and you must specify a `NetworkConfiguration` when you create a service or run a task with the task definition. When you use this network mode in your task definitions, every task that is launched from that task definition gets its own elastic network interface (ENI) and a primary private IP address. The task networking feature simplifies container networking and gives you more control over how containerized applications communicate with each other and other services within your VPCs.

Task networking also provides greater security for your containers by allowing you to use security groups and network monitoring tools at a more granular level within your tasks. Because each task gets its own ENI, you can also take advantage of other Amazon EC2 networking features like VPC Flow Logs so that you can monitor traffic to and from your tasks. Additionally, containers that belong to the same task can communicate over the `localhost` interface. A task can only have one ENI associated with it at a given time.

Hence, the correct answer is: **Use the** `**awsvpc**` **network mode in the task definition in your Amazon ECS Cluster. Attach security groups to the ECS tasks then use IAM roles for tasks to access other resources.**

The option that says: **Use the** `**bridge**` **network mode in the task definition in your Amazon ECS Cluster. Attach security groups to Amazon EC2 instances then use IAM roles for EC2 instances to access other resources** is incorrect because you won't be able to attach security groups to your ECS tasks using this network mode type. This will only use the Docker's built-in virtual network which runs inside each container instance. You have to use the `awsvpc` network mode instead to allow you to use security groups and network monitoring tools at a more granular level within your tasks. Moreover, if you are using the `awsvpc` network mode, you should attach the security group to the ECS task and not to the EC2 instance.

The option that says: **Use the** `**bridge**` **network mode in the task definition in your Amazon ECS Cluster. Attach security groups to the ECS tasks then use IAM roles for tasks to access other resources** is incorrect. In order for you to use security groups and network monitoring tools at a more granular level within your ECS tasks, you have to use the `awsvpc` network mode instead.

The option that says: **Use the** `**awsvpc**` **network mode in the task definition in your Amazon ECS Cluster. Attach security groups to the ECS tasks then pass IAM credentials into the container at launch time to access other AWS resources** is incorrect. Although it uses the correct network mode, you have to use an IAM Role instead. It is a security risk to pass the IAM credentials into the container as it could be potentially exposed.

  

**References:**

[https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html)

[https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task\_definition\_parameters.html#network\_mode](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#network_mode)

  

**Check out this Amazon ECS Cheat Sheet:**

[https://tutorialsdojo.com/amazon-elastic-container-service-amazon-ecs/](https://tutorialsdojo.com/amazon-elastic-container-service-amazon-ecs/?src=udemy)

  

**AWS Container Services Overview:**

[https://youtu.be/5QBgDX7O7pw](https://youtu.be/5QBgDX7O7pw)

# Question 8: Incorrect

A company has created multiple accounts in AWS to support the rapid growth of its cloud services. The multiple accounts are used to separate their various departments such as finance, human resources, engineering, and many others. Each account is managed by a Systems Administrator which has root access for that specific account only. There is a requirement to centrally manage policies across multiple AWS accounts by allowing or denying particular AWS services for individual accounts, or for groups of accounts.

Which is the most suitable solution that you should implement with the LEAST amount of complexity?

-   Provide access to externally authenticated users via Identity Federation. Set up an IAM role to specify permissions for users from each department whose identity is federated from your organization or a third-party identity provider.
    
-   Connect all departments by setting up cross-account access to each of the AWS accounts of the company. Create and attach IAM policies to your resources based on their respective departments to control access.
    
-   Set up AWS Organizations and Organizational Units (OU) to connect all AWS accounts of each department. Create a custom IAM Policy to allow or deny the use of certain AWS services for each account.
    
    (Incorrect)
    
-   Use AWS Organizations and Service Control Policies to control the list of AWS services that can be used by each member account.
    
    (Correct)
    

Explanation

**AWS Organizations** offers policy-based management for multiple AWS accounts. With Organizations, you can create groups of accounts, automate account creation, and apply and manage policies for those groups. Organizations enables you to centrally manage policies across multiple accounts, without requiring custom scripts and manual processes. It allows you to create **Service Control Policies (SCPs)** that centrally control AWS service use across multiple AWS accounts.

Remember that AWS Organizations **does not** replace associating IAM policies with users, groups, and roles within an AWS account. Hence, you still need to set up appropriate IAM policies for your root and member accounts.

![](https://media.tutorialsdojo.com/sap_aws_orgganization_nested.JPG)

IAM policies let you allow or deny access to AWS services (such as Amazon S3), individual AWS resources (such as a specific S3 bucket), or individual API actions (such as `s3:CreateBucket`). An IAM policy can be applied only to IAM users, groups, or roles, and it can never restrict the root identity of the AWS account.

By contrast, AWS Organizations lets you use service control policies (SCPs) to allow or deny access to particular AWS services for individual AWS accounts, or for groups of accounts within an organizational unit (OU). The specified actions from an attached SCP affect all IAM users, groups, and roles for an account, including the root account identity.

When you apply an SCP to an OU or an individual AWS account, you choose to either **enable** (whitelist), or **disable** (blacklist) the specified AWS service. Access to any service that isn’t explicitly allowed by the SCPs associated with an account, its parent OUs, or the master account is **denied** to the AWS accounts or OUs associated with the SCP. When an SCP is applied to an OU, it is inherited by all of the AWS accounts in that OU.

Therefore, the correct answer is: **Use AWS Organizations and Service Control Policies to control the list of AWS services that can be used by each member account.**

The option that says: **Setting up AWS Organizations and Organizational Units (OU) to connect all AWS accounts of each department and creating a custom IAM Policy to allow or deny the use of certain AWS services for each account** is incorrect. Although it is correct to use AWS Organizations, this option is incorrect about IAM Policy. It is the Service Control Policy (SCP) which enables you to allow or deny the use of certain AWS services for each account, and not the IAM Policy.

The option that says: **Connecting all departments by setting up cross-account access to each of the AWS accounts of the company, then creating and attaching IAM policies to your resources based on their respective departments to control access** is incorrect. Although you can set up cross-account access to each department, this entails a lot of configuration compared with using AWS Organizations and Service Control Policies (SCPs). Cross-account access would be a more suitable choice if you only have two accounts to manage, but not for multiple accounts.

The option that says: **Providing access to externally authenticated users via Identity Federation and setting up an IAM role to specify permissions for users from each department whose identity is federated from your organization or a third-party identity provider** is incorrect. This option is focused on the Identity Federation authentication set up for your AWS accounts but not the IAM policy management for multiple AWS accounts. A combination of AWS Organizations and Service Control Policies (SCPs) is a better choice compared to this option.

  

**References:**

[https://aws.amazon.com/organizations/](https://aws.amazon.com/organizations/)

[https://aws.amazon.com/premiumsupport/knowledge-center/iam-policy-service-control-policy/](https://aws.amazon.com/premiumsupport/knowledge-center/iam-policy-service-control-policy/)

[https://docs.aws.amazon.com/organizations/latest/userguide/orgs\_introduction.html](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)

  

**Check out this AWS Organizations Cheat Sheet:**

[https://tutorialsdojo.com/aws-organizations/](https://tutorialsdojo.com/aws-organizations/?src=udemy)

# Question 13: Incorrect

An electronics company has an on-premises network as well as a cloud infrastructure in AWS. The on-site data storage which is used by their enterprise document management system is heavily being used, and **they are looking at utilizing the storage services in AWS for cost-effective backup and rapid disaster recovery**. You are tasked to set up a storage solution that will provide a low-latency access to the enterprise document management system. Most of the documents uploaded in their system are printed circuit board (PCB) designs and schematic diagrams which are frequently used and accessed by their engineers, QA analysts, and their Research and Design department. Hence, you also have to ensure that these employees can access the entire dataset quickly, without sacrificing durability.

How can you satisfy the requirement for this scenario?

-   Use a Cached volume gateway to retain low-latency access to your entire data set as well as your frequently accessed data.
    
    (Incorrect)
    
-   Create an S3 bucket and use the `sync` command to synchronize the data to and from your on-premises file server.
    
-   In AWS Storage Gateway, create a File gateway that enables you to store and retrieve objects in Amazon S3 using industry-standard file protocols such as Network File System (NFS) and Server Message Block (SMB).
    
-   Use a Stored Volume Gateway to provide cloud-backed storage volumes that you can mount as Internet Small Computer System Interface (iSCSI) devices from your on-premises application servers.
    
    (Correct)
    

Explanation

In this scenario, the electronics company is looking for a storage service which can locally store the entire dataset and provide easier and faster access without sacrificing durability. This requirement can be fulfilled by setting up a Stored Volume gateway in AWS Storage Gateway.

By using stored volumes, you can store your primary data locally, while asynchronously back up that data to AWS. Stored volumes provide your on-premises applications with low-latency access to the entire datasets. At the same time, they provide durable, offsite backups. You can create storage volumes and mount them as iSCSI devices from your on-premises application servers. Data written to your stored volumes are stored on your on-premises storage hardware. These data are asynchronously backed up to Amazon S3 as Amazon Elastic Block Store (Amazon EBS) snapshots.

Hence, the correct answer is the option that says: **Use a Stored Volume Gateway to provide cloud-backed storage volumes that you can mount as Internet Small Computer System Interface (iSCSI) devices from your on-premises application servers.**

![](https://media.tutorialsdojo.com/sap_storage_gateway_stored.png)

**Creating an S3 bucket and using the** `**sync**` **command to synchronize the data to and from your on-premises file server** is incorrect because S3 is not a preferred AWS storage service for supporting hybrid networks for this scenario. Although S3 is highly scalable, it would not be able to handle the integration needed for the on-premises document management system. It is still better to use Stored Volumes in AWS Storage Gateway instead.

**Using a Cached volume gateway to retain low-latency access to your entire data set as well as your frequently accessed data** is incorrect because Cached volume gateway provides you low-latency access to your frequently accessed data but not to the entire data.

The option that says: **In AWS Storage Gateway, create a File gateway that enables you to store and retrieve objects in Amazon S3 using industry-standard file protocols such as Network File System (NFS) and Server Message Block (SMB)** is incorrect because a File gateway does not provide you the required low-latency access to the entire dataset that the application needs.

  

**References:**

[https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html#volume-gateway-concepts](https://docs.aws.amazon.com/storagegateway/latest/userguide/StorageGatewayConcepts.html#volume-gateway-concepts)

[https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html](https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html)

  

**Check out this AWS Storage Gateway Cheat Sheet:**

[https://tutorialsdojo.com/aws-storage-gateway/](https://tutorialsdojo.com/aws-storage-gateway/?src=udemy)

# # Question 17: Incorrect

A company is using AWS Organizations to manage their multi-account and multi-region AWS infrastructure. They are currently doing large-scale automation for their key daily processes to save costs. One of these key processes is sharing specified AWS resources, which an organizational account owns, with other AWS accounts of the company using AWS RAM. There is already an existing service which was previously managed by a separate organization account moderator, who also maintained the specific configuration details.

In this scenario, what could be a simple and effective solution that would allow the service to perform its tasks on the organization accounts on the moderator's behalf?

-   Use trusted access by running the `enable-sharing-with-aws-organization` command in the AWS RAM CLI. Mirror the configuration changes that was performed by the account that previously managed this service.
    
    (Correct)
    
-   Configure a service-linked role for AWS RAM and modify the permissions policy to specify what the role can and cannot do. Lastly, modify the trust policy of the role so that other processes can utilize AWS RAM.
    
-   Attach an IAM role on the service detailing all the allowed actions that it will be able to perform. Install an SSM agent in each of the worker VMs. Use AWS Systems Manager to build automation workflows that involve the daily key processes.
    
    (Incorrect)
    
-   Enable cross-account access with AWS Organizations in the Resource Access Manager Console. Mirror the configuration changes that was performed by the account that previously managed this service.
    

Explanation

**AWS Resource Access Manager** (AWS RAM) enables you to share specified AWS resources that you own with other AWS accounts. To enable trusted access with AWS Organizations:

From the AWS RAM CLI, use the `enable-sharing-with-aws-organizations` command.

Name of the IAM service-linked role that can be created in accounts when trusted access is enabled: _AWSResourceAccessManagerServiceRolePolicy_.

You can use **_trusted access_** to enable an AWS service that you specify, called the _trusted service_, to perform tasks in your organization and its accounts on your behalf. This involves granting permissions to the trusted service but does not otherwise affect the permissions for IAM users or roles. When you enable access, the trusted service can create an IAM role called a service-linked role in every account in your organization. That role has a permissions policy that allows the trusted service to do the tasks that are described in that service's documentation. This enables you to specify settings and configuration details that you would like the trusted service to maintain in your organization's accounts on your behalf.

![](https://media.tutorialsdojo.com/sap_resources_access_manager.jpg)

Therefore the correct answer is: **Use trusted access by running the** `**enable-sharing-with-aws-organization**` **command in the AWS RAM CLI. Mirror the configuration changes that was performed by the account that previously managed this service.**

The option that says: **Attach an IAM role on the service detailing all the allowed actions that it will be able to perform. Install an SSM agent in each of the worker VMs. Use AWS Systems Manager to build automation workflows that involve the daily key processes** is incorrect because this is not the simplest way to automate the interaction of AWS RAM with AWS Organizations. AWS Systems Manager is a tool that helps with the automation of EC2 instances, on-premises servers, and other virtual machines. It might not support all the services being used by the key processes.

The option that says: **Configure a service-linked role for AWS RAM and modify the permissions policy to specify what the role can and cannot do. Lastly, modify the trust policy of the role so that other processes can utilize AWS RAM** is incorrect. This is not the simplest solution for integrating AWS RAM and AWS Organizations since using AWS Organization's trusted access will create the service-linked role for you. Also, the trust policy of a service-linked role cannot be modified. Only the linked AWS service can assume a service-linked role, which is why you cannot modify the trust policy of a service-linked role.

The option that says: **Enable cross-account access with AWS Organizations in the Resources Access Manager Console. Mirror the configuration changes that was performed by the account that previously managed this service** is incorrect because you should enable trusted access to AWS RAM, not cross-account access.

  

**References:**

[https://docs.aws.amazon.com/organizations/latest/userguide/orgs\_integrate\_services.html](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html)

[https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-ram.html](https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-ram.html)

[https://aws.amazon.com/blogs/security/introducing-an-easier-way-to-delegate-permissions-to-aws-services-service-linked-roles/](https://aws.amazon.com/blogs/security/introducing-an-easier-way-to-delegate-permissions-to-aws-services-service-linked-roles/)

  

**Check out this AWS Resource Access Manager Cheat Sheet:**

[https://tutorialsdojo.com/aws-resource-access-manager/](https://tutorialsdojo.com/aws-resource-access-manager/?src=udemy)

# # Question 22: Incorrect

A company has several virtual machines on its on-premises data center hosting its three-tier web application. The company wants to migrate the application to AWS to take advantage of the benefits of cloud computing. The following are the company requirements for the migration process:

\- The virtual machine images from the on-premises data center must be imported to AWS.

\- The changes on the on-premises servers must be synchronized to the AWS servers until the production cutover is completed.

\- Have minimal downtime during the production cutover.

\- The root volumes and data volumes (containing Terabytes of data) of the VMs must be migrated to AWS.

\- The migration solution must have minimal operational overhead.

Which of the following options is the recommended solution to meet the company requirements?

-   Leverage both AWS Application Discovery Service and AWS Migration Hub to group the on-premises VMs as an application. Write an AWS CLI script that uses VM Import/Export to import the VMs as AMIs. Schedule the script to run at regular intervals to synchronize the changes from the on-premises environment to AWS. Launch Amazon EC2 instances based on the images created from VM Import/Export. After successful testing, perform a final virtual machine import before the cutover. Launch new instances based on the updated AMIs.
    
-   Create a job on AWS Server Migration Service (SMS) to migrate the virtual machines to AWS. Create a replication job for each application tier to sync the changes from the on-premises environment to AWS. Launch Amazon EC2 instances based on the images created from AWS SMS. After successful testing, perform a final replication before the cutover and launch new instances based on the updated AMIs.
    
    (Correct)
    
-   Create a job on AWS Server Migration Service (SMS) to migrate the root volumes of the virtual machines to AWS. Import the data volumes using the AWS CLI import-snapshot command. Launch Amazon EC2 instances based on the images created from AWS SMS and attach the imported data volumes. After successful testing, perform a final replication before the cutover. Launch new instances based on the updated AMIs and attach the corresponding data volumes.
    
    (Incorrect)
    
-   Write an AWS CLI script that uses VM Import/Export to migrate the virtual machines. Schedule the script to run at regular intervals to synchronize the changes from the on-premises environment to AWS. Launch Amazon EC2 instances based on the images created from VM Import/Export. After successful testing, re-run the script to perform a final replication before the cutover. Launch new instances based on the updated AMIs.
    

Explanation

**AWS Server Migration Service** automates the migration of your on-premises VMware vSphere, Microsoft Hyper-V/SCVMM, and Azure virtual machines to the AWS Cloud. AWS SMS incrementally replicates your server VMs as cloud-hosted Amazon Machine Images (AMIs) ready for deployment on Amazon EC2. Working with AMIs, you can easily test and update your cloud-based images before deploying them in production.

By using AWS SMS to manage your server migrations, you can:

**\- Simplify the cloud migration process.** You can begin migrating a group of servers with just a few clicks in the AWS Management Console. After the migration has initiated, AWS SMS manages all the complexities of the migration process, including automatically replicating volumes of live servers to AWS and creating new AMIs periodically. You can quickly launch EC2 instances from AMIs in the console.

**\- Orchestrate multi-server migrations.** AWS SMS orchestrates server migrations by allowing you to schedule replications and track the progress of a group of servers that constitutes an application. You can schedule initial replications, configure replication intervals, and track progress for each server using the console. When you launch a migrated application, you can apply customized configuration scripts that run during startup.

**\- Test server migrations incrementally.** With support for incremental replication, AWS SMS allows fast, scalable testing of migrated servers. Because AWS SMS replicates incremental changes to your on-premises servers and transfers only the delta to the cloud, you can test small changes iteratively and save on network bandwidth.

**\- Support the most widely used operating systems.** AWS SMS supports the replication of operating system images containing Windows, as well as several major Linux distributions.

**\- Minimize downtime.** Incremental AWS SMS replication minimizes the business impact associated with application downtime during the final cutover.

AWS Server Migration Service is designed to simplify the end-to-end server migration process. AWS SMS currently supports the migration of on-premises virtual machines (VMs) as an agentless service using a virtual appliance. AWS SMS is an ideal solution to use when you are planning a scaled migration from VMware environments to AWS where the downtime, agentless tools, incremental replication, and testing the application before the cutover are critical considerations.

![](https://media.tutorialsdojo.com/sap_aws_sms.png)

Therefore, the correct answer is: **Create a job on AWS Server Migration Service (SMS) to migrate the virtual machines to AWS. Create a replication job for each application tier to sync the changes from the on-premises environment to AWS. Launch Amazon EC2 instances based on the images created from AWS SMS. After successful testing, perform a final replication before the cutover and launch new instances based on the updated AMIs.**

The option that says: **Write an AWS CLI script that uses VM Import/Export to migrate the virtual machines. Schedule the script to run at regular intervals to synchronize the changes from the on-premises environment to AWS. Launch Amazon EC2 instances based on the images created from VM Import/Export. After successful testing, re-run the script to perform a final replication before the cutover. Launch new instances based on the updated AMIs** is incorrect. AWS VM Import/Export does not support synching incremental changes from the on-premises environment to AWS. You will need to import the VM again as a whole after you make changes to the on-premises environment. This requires a lot of time and adds more operational overhead.

The option that says: **Create a job on AWS Server Migration Service (SMS) to migrate the root volumes of the virtual machines to AWS. Import the data volumes using the AWS CLI import-snapshot command. Launch Amazon EC2 instances based on the images created from AWS SMS and attach the imported data volumes. After successful testing, perform a final replication before the cutover. Launch new instances based on the updated AMIs and attach the corresponding data volumes** is incorrect. This may be possible but creating manual snapshots of the data volumes requires more operational overhead. AWS SMS supports up to 16TB volumes so you can use it to migrate the data volumes as well.

The option that says: **Leverage both AWS Application Discovery Service and AWS Migration Hub to group the on-premises VMs as an application. Write an AWS CLI script that uses VM Import/Export to import the VMs as AMIs. Schedule the script to run at regular intervals to synchronize the changes from the on-premises environment to AWS. Launch Amazon EC2 instances based on the images created from VM Import/Export. After successful testing, perform a final virtual machine import before the cutover. Launch new instances based on the updated AMIs** is incorrect. The AWS Application Discovery Service plans migration projects by gathering information about the on-premises data center and all discovered data are stored in your AWS Migration Hub. This is similar to the other option for VM Import/Export as you will need to import the VM again as a whole after you make changes on the on-premises environment.

  

**References:**

[https://docs.aws.amazon.com/server-migration-service/latest/userguide/server-migration.html](https://docs.aws.amazon.com/server-migration-service/latest/userguide/server-migration.html)

[https://aws.amazon.com/blogs/apn/aws-server-migration-service-server-migration-to-the-cloud-made-easy/](https://aws.amazon.com/blogs/apn/aws-server-migration-service-server-migration-to-the-cloud-made-easy/)

[https://docs.aws.amazon.com/server-migration-service/latest/userguide/application-migration.html](https://docs.aws.amazon.com/server-migration-service/latest/userguide/application-migration.html)

  

**Check out this AWS Server Migration Service Cheat Sheet:**

[https://tutorialsdojo.com/aws-server-migration-service-sms/](https://tutorialsdojo.com/aws-server-migration-service-sms/?src=udemy)

  

**AWS Migration Services Overview:**

[https://youtu.be/yqNBkFMnsL8](https://youtu.be/yqNBkFMnsL8)

# Question 25: Incorrect

A company regularly processes large product catalogs for its online retail platform, which is needed to index and extract metadata of its items. These are done in batches and are sent out to a small team to process them using the Amazon Mechanical Turk service. The Solutions Architect has been tasked to design a workflow orchestration process to allow multiple concurrent Mechanical Turk operations while dealing with the result assessment process and the ability to reprocess the failed jobs.

Which of the following solutions will allow the company to visualize and control the state of every workflow with the LEAST amount of effort?

-   Create a queue per workflow stage on Amazon SQS and trigger an Amazon CloudWatch Alarm based on the message visibility on each queue. Send messages using Amazon SNS to trigger the AWS Lambda functions that process the next step. Visualize the Lambda processing logs for each workflow state using Amazon Elasticsearch and Kibana.
    
-   Run a Lambda function to regularly poll for status changes in an Amazon RDS database that stores the workflow information. Create worker Lambda functions that will then process the next workflow steps. Visualize the workflow states using Amazon QuickSight on the Amazon RDS database.
    
-   Create a workflow on Amazon SWF that will handle a single batch of catalog records. Create multiple worker tasks that will extract and transform the data before sending it through Amazon Mechanical Turk. To visualize the workflow states, process the logs using AWS Lambda functions and use Amazon Elasticsearch and Kibana.
    
    (Correct)
    
-   With AWS Step Functions, create a workflow that will orchestrate multiple concurrent workflows. Visualize each workflow status on the AWS Management Console and write the historical data on an Amazon S3 bucket. Use Amazon QuickSight to visualize the data on the S3 bucket.
    
    (Incorrect)
    

Explanation

While validating data in large catalogs, the products in the catalog are processed in batches. Different batches can be processed concurrently. For each batch, the product data is extracted from servers in the datacenter and transformed into CSV (Comma Separated Values) files required by Amazon Mechanical Turk’s Requester User Interface (RUI). The CSV is uploaded to populate and run the HITs (Human Intelligence Tasks). When HITs complete, the resulting CSV file is reverse transformed to get the data back into the original format. The results are then assessed and Amazon Mechanical Turk workers are paid for acceptable results. Failures are weeded out and reprocessed, while the acceptable HIT results are used to update the catalog. As batches are processed, the system needs to track the quality of the Amazon Mechanical Turk workers and adjust the payments accordingly. Failed HITs are re-batched and sent through the pipeline again.

![](http://media.tutorialsdojo.com/aws_swf_mechanical_turk.png)

With Amazon SWF: The use case above is implemented as a set of workflows. A **BatchProcess** workflow handles the processing for a single batch. It has workers that extract the data, transform it, and send it through Amazon Mechanical Turk. The **BatchProcess** workflow outputs the acceptable HITs and the failed ones. This is used as the input for three other workflows: **MTurkManager**, **UpdateCatalogWorkflow**, and **RerunProducts**.

The **MTurkManager** workflow makes payments for acceptable HITs, responds to the human workers who produced failed HITs, and updates its own database for tracking results quality. The **UpdateCatalogWorkflow** updates the master catalog based on acceptable HITs. The **RerunProducts** workflow waits until there is a large enough batch of products with failed HITs. It then creates a batch and sends it back to the **BatchProcess** workflow. The entire end-to-end catalog processing is performed by a **CleanupCatalog** workflow that initiates child executions of the above workflows. Having a system of well-defined workflows enables this use case to be architected, audited, and run systematically for catalogs with several million products.

The scenario for this question is similar to the Amazon Simple Workflow Service FAQs. See the FAQs Use Case #2: [_Processing large product catalogs using Amazon Mechanical Turk._](https://aws.amazon.com/swf/faqs/#:~:text=Processing%20large%20product%20catalogs%20using%20Amazon%20Mechanical%20Turk)

Therefore, the correct answer is: **Create a workflow on Amazon SWF that will handle a single batch of catalog records. Create multiple worker tasks that will extract and transform the data before sending it through Amazon Mechanical Turk. To visualize the workflow states, process the logs using AWS Lambda functions and use Amazon Elasticsearch and Kibana.**

The option that says: **Create a queue per workflow stage on Amazon SQS and trigger an Amazon CloudWatch Alarm based on the message visibility on each queue. Send messages using Amazon SNS to trigger the AWS Lambda functions that process the next step. Visualize the Lambda processing logs for each workflow state using Amazon Elasticsearch and Kibana** is incorrect because it requires a lot of effort to configure each component on various stages. The reliance on multiple AWS services adds complexity and a chance for the workflow to encounter an error when running.

The option that says: **Run a Lambda function to regularly poll for status changes in an Amazon RDS database that stores the workflow information. Create worker Lambda functions that will then process the next workflow steps. Visualize the workflow states using Amazon QuickSight on the Amazon RDS database** is incorrect. This is inefficient as the Lambda function constantly polls the RDS database for changes. Additionally, this incurs unnecessary costs as you keep the RDS instance running even if there are no batch jobs to be processed.

The option that says: **With AWS Step Functions, create a workflow that will orchestrate multiple concurrent workflows. Visualize each workflow status on the AWS Management Console, and write the historical data on an Amazon S3 bucket. Use Amazon QuickSight to visualize the data on the S3 bucket** is incorrect because Step Functions do not directly support Mechanical Turk. You will need to use Amazon SWF for this scenario.

  

**References:**

[https://aws.amazon.com/swf/faqs/](https://aws.amazon.com/swf/faqs/)

[https://aws.amazon.com/swf/](https://aws.amazon.com/swf/)

[https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMechanicalTurkGettingStartedGuide/SvcIntro.html](https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMechanicalTurkGettingStartedGuide/SvcIntro.html)

[https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMechanicalTurkGettingStartedGuide/NextSteps.html](https://docs.aws.amazon.com/AWSMechTurk/latest/AWSMechanicalTurkGettingStartedGuide/NextSteps.html)

  

**Check out these Cheat Sheets:**

[https://tutorialsdojo.com/amazon-simple-workflow-amazon-swf/](https://tutorialsdojo.com/amazon-simple-workflow-amazon-swf/ ?src=udemy)

[https://tutorialsdojo.com/amazon-mechanical-turk/](https://tutorialsdojo.com/amazon-mechanical-turk/?src=udemy)

# Question 27: Incorrect

A multinational financial company has a suite of web applications hosted in multiple VPCs in various AWS regions. As part of their security compliance, the company’s Solutions Architect has been tasked to set up a logging solution to track all of the changes made to their AWS resources in all regions, which host their enterprise accounting systems. The company is using different AWS services such as Amazon EC2 instances, Amazon S3 buckets, CloudFront web distributions, and AWS IAM. The logging solution must ensure the security, integrity, and durability of your log data in order to pass the compliance requirements. In addition, it should provide an event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command-line tools, and API calls.

In this scenario, which of the following options is the best solution to use?

-   Create a new AWS CloudTrail trail in a new S3 bucket using the AWS CLI and also pass the --no-include-global-service-events and --is-multi-region-trail parameter then encrypt log files using KMS encryption. Enable Multi-Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies.
    
-   Create a new Amazon CloudWatch trail in a new S3 bucket using the AWS CLI and also pass both the --is-multi-region-trail and --include-global-service-events parameters then encrypt log files using KMS encryption. Enable Multi-Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies.
    
    (Incorrect)
    
-   Create a new Amazon CloudWatch trail in a new S3 bucket using the AWS CLI and also pass the --include-global-service-events parameter then encrypt log files using KMS encryption. Enable Multi-Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies.
    
-   Create a new AWS CloudTrail trail in a new S3 bucket using the AWS CLI and also pass both the --is-multi-region-trail and --include-global-service-events parameters then encrypt log files using KMS encryption. Enable Multi-Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies.
    
    (Correct)
    

Explanation

The accounting firm requires a secure and durable logging solution that will track all of the activities of all AWS resources (such as EC2, S3, CloudFront, and IAM) on all regions. CloudTrail can be used for this case with multi-region trail enabled. However, CloudTrail will only cover the activities of the regional services (EC2, S3, RDS etc.) and not for global services such as IAM, CloudFront, AWS WAF, and Route 53.

![](https://media.tutorialsdojo.com/sap_cloudtrail_all_regions.png)

The option that says: **Create a new AWS CloudTrail trail in a new S3 bucket using the AWS CLI and also pass both the --is-multi-region-trail and --include-global-service-events parameters then encrypt log files using KMS encryption. Enable Multi-Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies** is correct because it provides security, integrity, and durability to your log data. In addition, it has the -include-global-service-events parameter enabled which will also include activity from global services such as IAM, Route 53, AWS WAF, and CloudFront.

The option that says: **Create a new Amazon CloudWatch trail in a new S3 bucket using the AWS CLI and also pass both the --is-multi-region-trail and --include-global-service-events parameters then encrypt log files using KMS encryption. Enable Multi-Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies** is incorrect because you need to use CloudTrail instead of CloudWatch.

The option that says: **Create a new Amazon CloudWatch trail in a new S3 bucket using the AWS CLI and also pass the --include-global-service-events parameter then encrypt log files using KMS encryption. Enable Multi-Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies** is incorrect because you need to use CloudTrail instead of CloudWatch. In addition, the --is-multi-region-trail parameter is also missing in this setup.

The option that says: **Create a new AWS CloudTrail trail in a new S3 bucket using the AWS CLI and also pass the --no-include-global-service-events and --is-multi-region-trail parameter then encrypt log files using KMS encryption. Enable Multi-Factor Authentication (MFA) Delete on the S3 bucket and ensure that only authorized users can access the logs by configuring the bucket policies** is incorrect. The --is-multi-region-trail is not enough as you also need to add the --include-global-service-events parameter to track the global service events. The --no-include-global-service-events parameter actually prevents CloudTrail from publishing events from global services such as IAM to the log files.

  

**References:**

[https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-global-service-events](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-global-service-events)

[http://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html](http://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-integration.html)

[https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-create-and-update-a-trail-by-using-the-aws-cli.html](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-create-and-update-a-trail-by-using-the-aws-cli.html)

  

**Check out this AWS CloudTrail Cheat Sheet:**

[https://tutorialsdojo.com/aws-cloudtrail/](https://tutorialsdojo.com/aws-cloudtrail/?src=udemy)

# Question 29: Incorrect

A media company has a suite of internet-facing web applications hosted in US West (N. California) region in AWS. The architecture is composed of several On-Demand Amazon EC2 instances behind an Application Load Balancer, which is configured to use public SSL/TLS certificates. The Application Load Balancer also enables incoming HTTPS traffic through the fully qualified domain names (FQDNs) of the applications for SSL termination. A Solutions Architect has been instructed to upgrade the corporate web applications to a multi-region architecture that uses various AWS Regions such as ap-southeast-2, ca-central-1, eu-west-3, and so forth.

Which of the following approach should the Architect implement to ensure that all HTTPS services will continue to work without interruption?

-   In each new AWS Region, request for SSL/TLS certificates using the AWS Certificate Manager for each FQDN. Associate the new certificates to the corresponding Application Load Balancer of the same AWS Region.
    
    (Correct)
    
-   Use the AWS Certificate Manager service in the US West (N. California) region to request for SSL/TLS certificates for each FQDN which will be used to all regions. Associate the new certificates to the new Application Load Balancer on each new AWS Region that the Architect will add.
    
    (Incorrect)
    
-   In each new AWS Region, request for SSL/TLS certificates using AWS KMS for each FQDN. Associate the new certificates to the corresponding Application Load Balancer of the same AWS Region.
    
-   Use the AWS KMS in the US West (N. California) region to request for SSL/TLS certificates for each FQDN which will be used to all regions. Associate the new certificates to the new Application Load Balancer on each new AWS Region that the Architect will add.
    

Explanation

**AWS Certificate Manager** is a service that lets you easily provision, manage, and deploy public and private Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with AWS services and your internal connected resources. SSL/TLS certificates are used to secure network communications and establish the identity of websites over the Internet as well as resources on private networks. AWS Certificate Manager removes the time-consuming manual process of purchasing, uploading, and renewing SSL/TLS certificates.

With AWS Certificate Manager, you can quickly request a certificate, deploy it on ACM-integrated AWS resources, such as Elastic Load Balancers, Amazon CloudFront distributions, and APIs on API Gateway, and let AWS Certificate Manager handle certificate renewals. It also enables you to create private certificates for your internal resources and manage the certificate lifecycle centrally. Public and private certificates provisioned through AWS Certificate Manager for use with ACM-integrated services are free. You pay only for the AWS resources you create to run your application. With AWS Certificate Manager Private Certificate Authority, you pay monthly for the operation of the private CA and for the private certificates you issue.

![](https://media.tutorialsdojo.com/sap_alb_https_acm.png)

You can use the same SSL certificate from ACM in more than one AWS Region but it depends on whether you’re using Elastic Load Balancing or Amazon CloudFront. To use a certificate with Elastic Load Balancing for the same site (the same fully qualified domain name, or FQDN, or set of FQDNs) in a different Region, you must request a new certificate for each Region in which you plan to use it. To use an ACM certificate with Amazon CloudFront, you must request the certificate in the US East (N. Virginia) region. ACM certificates in this region that are associated with a CloudFront distribution are distributed to all the geographic locations configured for that distribution.

Hence, the correct answer is the option that says: **In each new AWS Region, request for SSL/TLS certificates using the AWS Certificate Manager for each FQDN. Associate the new certificates to the corresponding Application Load Balancer of the same AWS Region.**

The option that says: **In each new AWS Region, request for SSL/TLS certificates using AWS KMS for each FQDN. Associate the new certificates to the corresponding Application Load Balancer of the same AWS Region** is incorrect because AWS KMS is not the right service to use to generate the SSL/TLS certificates. You have to utilize ACM instead.

The option that says: **Use the AWS KMS in the US West (N. California) region to request for SSL/TLS certificates for each FQDN which will be used to all regions. Associate the new certificates to the new Application Load Balancer on each new AWS Region that the Architect will add** is incorrect. You have to use the AWS Certificate Manager (ACM) service to generate the certificates and not AWS KMS as this service is primarily used for data encryption. Moreover, you have to associate the certificates that were generated from the same AWS Region where the load balancer is launched.

The option that says: **Use the AWS Certificate Manager service in the US West (N. California) region to request for SSL/TLS certificates for each FQDN which will be used to all regions. Associate the new certificates to the new Application Load Balancer on each new AWS Region that the Architect will add** is incorrect. You can only use the same SSL certificate from ACM in more than one AWS Region if you are attaching it to your CloudFront distribution only, and not to your Application Load Balancer. To use a certificate with Elastic Load Balancing for the same site (the same fully qualified domain name, or FQDN, or set of FQDNs) in a different Region, you must request a new certificate for each Region in which you plan to use it.

  

**References:**

[https://aws.amazon.com/certificate-manager/faqs/](https://aws.amazon.com/certificate-manager/faqs/)

[https://aws.amazon.com/premiumsupport/knowledge-center/associate-acm-certificate-alb-nlb/](https://aws.amazon.com/premiumsupport/knowledge-center/associate-acm-certificate-alb-nlb/)

[https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-add-or-delete-listeners.html#add-listener-console](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-add-or-delete-listeners.html#add-listener-console)

  

**Check out these AWS Certificate Manager and Elastic Load Balancer Cheat Sheets:**

[https://tutorialsdojo.com/aws-certificate-manager/](https://tutorialsdojo.com/aws-certificate-manager/?src=udemy)

[https://tutorialsdojo.com/aws-elastic-load-balancing-elb/](https://tutorialsdojo.com/aws-elastic-load-balancing-elb/?src=udemy)

# Question 37: Incorrect

A media company hosts its entire infrastructure on the AWS cloud. There is a requirement to copy information to or from the shared resources from another AWS account. The solutions architect has to provide the other account access to several AWS resources such as Amazon S3, AWS KMS, and Amazon ES in the form of a list of AWS account ID numbers. In addition, the user in the other account should still work in the trusted account and there is no need to give up his or her user permissions in place of the role permissions. The solutions architect must also set up a solution that continuously assesses, audits, and monitors the policy configurations.

Which of the following is the MOST suitable type of policy that you should use in this scenario?

-   Set up cross-account access with a resource-based Policy. Use AWS Config rules to periodically audit changes to the IAM policy and monitor the compliance of the configuration.
    
    (Correct)
    
-   Set up a service-linked role with a service control policy. Use AWS Systems Manager rules to periodically audit changes to the IAM policy and monitor the compliance of the configuration.
    
-   Set up a service-linked role with an identity-based policy. Use AWS Systems Manager rules to periodically audit changes to the IAM policy and monitor the compliance of the configuration.
    
-   Set up cross-account access with a user-based policy configuration. Use AWS Config rules to periodically audit changes to the IAM policy and monitor the compliance of the configuration.
    
    (Incorrect)
    

Explanation

For some AWS services, you can grant cross-account access to your resources. To do this, you attach a policy directly to the resource that you want to share, instead of using a role as a proxy. The resource that you want to share must support resource-based policies. Unlike a user-based policy, a resource-based policy specifies who (in the form of a list of AWS account ID numbers) can access that resource.

Cross-account access with a resource-based policy has some advantages over a role. With a resource that is accessed through a resource-based policy, the user still works in the trusted account and does not have to give up his or her user permissions in place of the role permissions. In other words, the user continues to have access to resources in the trusted account at the same time as he or she has access to the resource in the trusting account. This is useful for tasks such as copying information to or from the shared resource in the other account.

![](https://media.tutorialsdojo.com/sap_aws_config_timeline.png)

AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.

Hence, the option that says: **Set up cross-account access with a resource-based Policy. Use AWS Config rules to periodically audit changes to the IAM policy and monitor the compliance of the configuration** is correct.

The option that says: **Set up cross-account access with a user-based policy. configuration. Use AWS Config rules to periodically audit changes to the IAM policy and monitor the compliance of the configuration** is incorrect because a user-based policy maps the access to a certain IAM user and not to a certain AWS resource.

The option that says: **Set up a service-linked role with an identity-based policy. Use AWS Systems Manager rules to periodically audit changes to the IAM policy and monitor the compliance of the configuration** is incorrect because a service-linked role is just a unique type of IAM role that is linked directly to an AWS service. In addition, it is the AWS Config service, and not the AWS Systems Manager, that enables you to assess, audit, and evaluate the configurations of your AWS resources.

The option that says: **Set up a service-linked role with a service control policy. Use AWS Systems Manager rules to periodically audit changes to the IAM policy and monitor the compliance of the configuration** is incorrect because a service control policy is primarily used in AWS Organizations and not for cross-account access. Service-linked roles are predefined by the service and include all the permissions that the service requires to call other AWS services on your behalf. This is not suitable for providing access to your resources to other AWS accounts, unlike cross-account access. You should also use AWS Config, and not AWS Systems Manager, to periodically audit changes to the IAM policy.

  

**References:**

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id\_roles\_compare-resource-policies.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_compare-resource-policies.html)

[https://aws.amazon.com/config/](https://aws.amazon.com/config/)

  

**Check out this AWS Config Cheat Sheet:**

[https://tutorialsdojo.com/aws-config/](https://tutorialsdojo.com/aws-config/?src=udemy)

# Question 39: Incorrect

A company provides big data services to enterprise clients around the globe. One of the clients has 60 TB of raw data from their on-premises Oracle data warehouse. The data is to be migrated to Amazon Redshift. However, the database receives minor updates on a daily basis while major updates are scheduled every end of the month. The migration process must be completed within approximately 30 days before the next major update on the Redshift database. The company can only allocate 50 Mbps of Internet connection for this activity to avoid impacting business operations.

Which of the following actions will satisfy the migration requirements of the company while keeping the costs low?

-   Create an AWS Snowball import job to request for a Snowball Edge device. Use the AWS Schema Conversion Tool (SCT) to process the on-premises data warehouse and load it to the Snowball Edge device. Install the extraction agent on a separate on-premises server and register it with AWS SCT. Once the Snowball Edge imports data to the S3 bucket, use AWS SCT to migrate the data to Amazon Redshift. Configure a local task and AWS DMS task to replicate the ongoing updates to the data warehouse. Monitor and verify that the data migration is complete.
    
    (Correct)
    
-   Create an AWS Snowball Edge job using the AWS Snowball console. Export all data from the Oracle data warehouse to the Snowball Edge device. Once the Snowball device is returned to Amazon and data is imported to an S3 bucket, create an Oracle RDS instance to import the data. Create an AWS Schema Conversion Tool (SCT) project with AWS DMS task to migrate the Oracle database to Amazon Redshift. Copy the missing daily updates from Oracle in the data center to the RDS for Oracle database over the Internet. Monitor and verify if the data migration is complete before the cut-over.
    
    (Incorrect)
    
-   Create a new Oracle Database on Amazon RDS. Configure Site-to-Site VPN connection from the on-premises data center to the Amazon VPC. Configure replication from the on-premises database to Amazon RDS. Once replication is complete, create an AWS Schema Conversion Tool (SCT) project with AWS DMS task to migrate the Oracle database to Amazon Redshift. Monitor and verify if the data migration is complete before the cut-over.
    
-   Since you have a 30-day window for migration, configure VPN connectivity between AWS and the company's data center by provisioning a 1 Gbps AWS Direct Connect connection. Launch an Oracle Real Application Clusters (RAC) database on an EC2 instance and set it up to fetch and synchronize the data from the on-premises Oracle database. Once replication is complete, create an AWS DMS task on an AWS SCT project to migrate the Oracle database to Amazon Redshift. Monitor and verify if the data migration is complete before the cut-over.
    

Explanation

You can use an **AWS SCT** agent to extract data from your on-premises data warehouse and migrate it to Amazon Redshift. The agent extracts your data and uploads the data to either Amazon S3 or, for large-scale migrations, an AWS Snowball Edge device. You can then use AWS SCT to copy the data to Amazon Redshift.

Large-scale data migrations can include many terabytes of information and can be slowed by network performance and by the sheer amount of data that has to be moved. AWS Snowball Edge is an AWS service you can use to transfer data to the cloud at faster-than-network speeds using an AWS-owned appliance. An AWS Snowball Edge device can hold up to 100 TB of data. It uses 256-bit encryption and an industry-standard Trusted Platform Module (TPM) to ensure both security and full chain-of-custody for your data. AWS SCT works with AWS Snowball Edge devices.

When you use AWS SCT and an AWS Snowball Edge device, you migrate your data in two stages. First, you use the AWS SCT to process the data locally and then move that data to the AWS Snowball Edge device. You then send the device to AWS using the AWS Snowball Edge process, and then AWS automatically loads the data into an Amazon S3 bucket. Next, when the data is available on Amazon S3, you use AWS SCT to migrate the data to Amazon Redshift. Data extraction agents can work in the background while AWS SCT is closed. You manage your extraction agents by using AWS SCT. The extraction agents act as listeners. When they receive instructions from AWS SCT, they extract data from your data warehouse.

![](https://media.tutorialsdojo.com/sap_aws_sct.jpg)

Therefore, the correct answer is: **Create an AWS Snowball import job to request for a Snowball Edge device. Use the AWS Schema Conversion Tool (SCT) to process the on-premises data warehouse and load it to the Snowball Edge device. Install the extraction agent on a separate on-premises server and register it with AWS SCT. Once the Snowball Edge imports data to the S3 bucket, use AWS SCT to migrate the data to Amazon Redshift. Configure a local task and AWS DMS task to replicate the ongoing updates to the data warehouse. Monitor and verify that the data migration is complete.**

The option that says: **Create a new Oracle Database on Amazon RDS. Configure Site-to-Site VPN connection from the on-premises data center to the Amazon VPC. Configure replication from the on-premises database to Amazon RDS. Once replication is complete, create an AWS Schema Conversion Tool (SCT) project with AWS DMS task to migrate the Oracle database to Amazon Redshift. Monitor and verify if the data migration is complete before the cut-over** is incorrect. Replicating 60 TB worth of data over the public Internet will take several days over the 30-day migration window. It is also stated in the scenario that the company can only allocate 50 Mbps of Internet connection for the migration activity. Sending the data over the Internet could potentially affect business operations.

The option that says: **Create an AWS Snowball Edge job using the AWS Snowball console. Export all data from the Oracle data warehouse to the Snowball Edge device. Once the Snowball device is returned to Amazon and data is imported to an S3 bucket, create an Oracle RDS instance to import the data. Create an AWS Schema Conversion Tool (SCT) project with AWS DMS task to migrate the Oracle database to Amazon Redshift. Copy the missing daily updates from Oracle in the data center to the RDS for Oracle database over the internet. Monitor and verify if the data migration is complete before the cut-over** is incorrect. You need to configure the data extraction agent first on your on-premises server. In addition, you don't need the data to be imported and exported via Amazon RDS. AWS DMS can directly migrate the data to Amazon Redshift.

The option that says: **Since you have a 30-day window for migration, configure VPN connectivity between AWS and the company's data center by provisioning a 1 Gbps AWS Direct Connect connection. Install Oracle database on an EC2 instance that is configured to synchronize with the on-premises Oracle database. Once replication is complete, create an AWS DMS task on an AWS SCT project to migrate the Oracle database to Amazon Redshift. Monitor and verify if the data migration is complete before the cut-over Since you have a 30-day window for migration, configure VPN connectivity between AWS and the company's data center by provisioning a 1 Gbps AWS Direct Connect connection. Launch an Oracle Real Application Clusters (RAC) database on an EC2 instance and set it up to fetch and synchronize the data from the on-premises Oracle database. Once replication is complete, create an AWS DMS task on an AWS SCT project to migrate the Oracle database to Amazon Redshift. Monitor and verify if the data migration is complete before the cut-over** is incorrect. Although this is possible, the company wants to keep the cost low. Using a Direct Connect connection for a one-time migration is not a cost-effective solution.

  

**References:**

[https://aws.amazon.com/getting-started/hands-on/migrate-oracle-to-amazon-redshift/](https://aws.amazon.com/getting-started/hands-on/migrate-oracle-to-amazon-redshift/)

[https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/agents.dw.html](https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/agents.dw.html)

[https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/agents.html](https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/agents.html)

  

**Tutorials Dojo's AWS Certified Solutions Architect Professional Exam Study Guide:**

[https://tutorialsdojo.com/aws-certified-solutions-architect-professional/](https://tutorialsdojo.com/aws-certified-solutions-architect-professional/?src=udemy)

# Question 40: Incorrect

A small company has several AWS accounts that are used by multiple teams. To centralize DNS record keeping, the company has created a private hosted zone in Amazon Route 53 on the main Account A. The new application and database servers are hosted on a VPC in Account B. The CNAME record set `db.turotialsdojo.com` has been created for the Amazon RDS endpoint on the private hosted zone in Amazon Route 53. Upon deployment, the application on the Amazon EC2 instances failed to start. The application logs indicate that the database endpoint `db.turotialsdojo.com` is not resolvable. However, the solutions architect can confirm that the Route 53 entry is configured correctly.

Which of the following options is the recommended solution for this issue? (Select TWO.)

-   On Account A, create an authorization to associate its private hosted zone to the new VPC in Account B.
    
    (Correct)
    
-   On Account B, create a new private hosted zone in Amazon Route 53. Associate this zone to the private hosted zone in Account A to allow replication between the AWS accounts.
    
    (Incorrect)
    
-   On Account B, associate the VPC to the private hosted zone in Account A. Delete the association authorization after the association is created.
    
    (Correct)
    
-   Create a VPC peering between the Account A VPC and Account B VPC. Configure the Amazon EC2 instances on Account B to use the DNS resolver IPs in Account A to resolve the Amazon RDS endpoint.
    
-   Create custom AMI for the Amazon EC2 instances that have an updated /etc/resolv.conf file containing the Amazon RDS endpoint to private IP address mapping.
    

Explanation

You can use the **Amazon Route 53** console to associate more VPCs with a private hosted zone if you created the hosted zone and the VPCs by using the same AWS account. Additionally, you can associate a VPC from one account with a private hosted zone in a different account.

If you want to associate VPCs that you created by using one account with a private hosted zone that you created by using a different account, you first must authorize the association. In addition, you can't use the AWS console either to authorize the association or associate the VPCs with the hosted zone.

To associate an Amazon VPC and a private hosted zone that you created with different AWS accounts, perform the following procedure:

Using the account that created the hosted zone, authorize the association of the VPC with the private hosted zone by using one of the following methods:AWS CLI – using the `create-vpc-association-authorization` in the AWS CLIAWS SDK or AWS Tools for Windows PowerShellAmazon Route 53 API – Using the `CreateVPCAssociationAuthorization` API

Note the following:

\- If you want to associate multiple VPCs that you created with one account with a hosted zone that you created with a different account, you must submit one authorization request for each VPC.

\- When you authorize the association, you must specify the hosted zone ID, so the private hosted zone must already exist.

\- You can't use the Route 53 console either to authorize the association of a VPC with a private hosted zone or to make the association.

Using the account that created the VPC, associate the VPC with the hosted zone. As with authorizing the association, you can use the AWS SDK, Tools for Windows PowerShell, the AWS CLI, or the Route 53 API.

_Optional but recommended_ – Delete the authorization to associate the VPC with the hosted zone. Deleting the authorization does not affect the association, it just prevents you from reassociating the VPC with the hosted zone in the future. If you want to reassociate the VPC with the hosted zone, you'll need to repeat steps 1 and 2 of this procedure.

Therefore, the correct answers are:

**On Account A, create an authorization to associate its private hosted zone to the new VPC in Account B.**

**On Account B, associate the VPC to the private hosted zone in Account A. Delete the association authorization after the association is created.**

The option that says: **Create a VPC peering between the Account A VPC and Account B VPC. Configure the Amazon EC2 instances on Account B to use the DNS resolver IPs in Account A to resolve the Amazon RDS endpoint** is incorrect. This may be possible to configure, however, Route 53 in Account A has no knowledge of any RDS instance which are hosted on Account B. Therefore the EC2 instances still won't be able to resolve the DB endpoint.

The option that says: **Create custom AMI for the Amazon EC2 instances that have an updated /etc/resolv.conf file containing the Amazon RDS endpoint to private IP address mapping** is incorrect. Creating a static mapping of the RDS endpoint to a private IP address is not recommended. The internal private IPs of RDS instances may change over time.

The option that says: **On Account B, create a new private hosted zone in Amazon Route 53. Associate this zone to the private hosted zone in Account A to allow replication between the AWS accounts** is incorrect. This is not possible as you can't have replication between Route 53 in separate accounts.

  

**References:**

[https://aws.amazon.com/premiumsupport/knowledge-center/private-hosted-zone-different-account/](https://aws.amazon.com/premiumsupport/knowledge-center/private-hosted-zone-different-account/)

[https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zone-private-associate-vpcs.html](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zone-private-associate-vpcs.html)

[https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zone-private-associate-vpcs-different-accounts.html](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/hosted-zone-private-associate-vpcs-different-accounts.html)

  

**Check out the Amazon Route 53 Cheat Sheet:**

[https://tutorialsdojo.com/amazon-route-53/](https://tutorialsdojo.com/amazon-route-53/?src=udemy)

# Question 44: Incorrect

A company has production, development, and test environments in its software development department, and each environment contains tens to hundreds of EC2 instances, along with other AWS services. Recently, Ubuntu released a series of security patches for a critical flaw that was detected in their OS. Although this is an urgent matter, there is no guarantee yet that these patches will be bug-free and production-ready hence, the company must immediately patch all of its affected Amazon EC2 instances in all the environments, except for the production environment. The EC2 instances in the production environment will only be patched after it has been verified that the patches work effectively. Each environment also has different baseline patch requirements that needed to be satisfied.

Using the AWS Systems Manager service, how should you perform this task with the least amount of effort?

-   Tag each instance based on its OS. Create a patch baseline in AWS Systems Manager Patch Manager for each environment. Categorize EC2 instances based on their tags using Patch Groups and then apply the patches specified in the corresponding patch baseline to each Patch Group. Afterward, verify that the patches have been installed correctly using Patch Compliance. Record the changes to patch and association compliance statuses using AWS Config.
    
    (Incorrect)
    
-   Schedule a maintenance period in AWS Systems Manager Maintenance Windows for each environment, where the period is after business hours so as not to affect daily operations. During the maintenance period, Systems Manager will execute a cron job that will install the required patches for each EC2 instance in each environment. After that, verify in Systems Manager Managed Instances that your environments are fully patched and compliant.
    
-   Tag each instance based on its environment and OS. Create various shell scripts for each environment that specifies which patch will serve as its baseline. Using AWS Systems Manager Run Command, place the EC2 instances into Target Groups and execute the script corresponding to each Target Group.
    
-   Tag each instance based on its environment and OS. Create a patch baseline in AWS Systems Manager Patch Manager for each environment. Categorize EC2 instances based on their tags using Patch Groups and apply the patches specified in the corresponding patch baseline to each Patch Group.
    
    (Correct)
    

Explanation

**AWS Systems Manager Patch Manager** automates the process of patching managed instances with security-related updates. For Linux-based instances, you can also install patches for non-security updates. You can patch fleets of Amazon EC2 instances or your on-premises servers and virtual machines (VMs) by operating system type.

Patch Manager uses **patch baselines**, which include rules for auto-approving patches within days of their release, as well as a list of approved and rejected patches. You can install patches on a regular basis by scheduling patching to run as a Systems Manager Maintenance Window task. You can also install patches individually or to large groups of instances by using Amazon EC2 tags. For each auto-approval rule that you create, you can specify an auto-approval delay. This delay is the number of days of wait after the patch was released, before the patch is automatically approved for patching.

![](https://media.tutorialsdojo.com/sap_ssm_maintenance_window.png)

A **patch group** is an optional means of organizing instances for patching. For example, you can create patch groups for different operating systems (Linux or Windows), different environments (Development, Test, and Production), or different server functions (web servers, file servers, databases). Patch groups can help you avoid deploying patches to the wrong set of instances. They can also help you avoid deploying patches before they have been adequately tested. You create a patch group by using Amazon EC2 tags. Unlike other tagging scenarios across Systems Manager, a patch group must be defined with the tag key: `**Patch Group**`. After you create a patch group and tag instances, you can register the patch group with a patch baseline. By registering the patch group with a patch baseline, you ensure that the correct patches are installed during the patching execution.

Hence, the correct answer is: **Tag each instance based on its environment and OS. Create a patch baseline in AWS Systems Manager Patch Manager for each environment. Categorize EC2 instances based on their tags using Patch Groups and apply the patches specified in the corresponding patch baseline to each Patch Group.**

The option that says: **Tag each instance based on its environment and OS. Create various shell scripts for each environment that specifies which patch will serve as its baseline. Using AWS Systems Manager Run Command, place the EC2 instances into Target Groups and execute the script corresponding to each Target Group** is incorrect as this option takes more effort to perform because you are using Systems Manager Run Command instead of Patch Manager. The Run Command service enables you to automate common administrative tasks and perform ad hoc configuration changes at scale, however, it takes a lot of effort to implement this solution. You can use Patch Manager instead to perform the task required by the scenario since you need to perform this task with the least amount of effort.

The option that says: **Tag each instance based on its OS. Create a patch baseline in AWS Systems Manager Patch Manager for each environment. Categorize EC2 instances based on their tags using Patch Groups and then apply the patches specified in the corresponding patch baseline to each Patch Group. Afterward, verify that the patches have been installed correctly using Patch Compliance. Record the changes to patch and association compliance statuses using AWS Config** is incorrect. You should be tagging instances based on the environment and its OS type in which they belong and not just its OS type. This is because the type of patches that will be applied varies between the different environments. With this option, the Ubuntu EC2 instances in all of your environments, including in production, will automatically be patched.

The option that says: **Schedule a maintenance period in AWS Systems Manager Maintenance Windows for each environment, where the period is after business hours so as not to affect daily operations. During the maintenance period, Systems Manager will execute a cron job that will install the required patches for each EC2 instance in each environment. After that, verify in Systems Manager Managed Instances that your environments are fully patched and compliant** is incorrect because this is not the simplest way to address the issue using AWS Systems Manager. The AWS Systems Manager Maintenance Windows feature lets you define a schedule for when to perform potentially disruptive actions on your instances such as patching an operating system, updating drivers, or installing software or patches. Each Maintenance Window has a schedule, a maximum duration, a set of registered targets (the instances that are acted upon), and a set of registered tasks. Although this solution may work, it entails a lot of configuration and effort to implement.

  

**References:**

[https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html)

[https://aws.amazon.com/blogs/mt/patching-your-windows-ec2-instances-using-aws-systems-manager-patch-manager/](https://aws.amazon.com/blogs/mt/patching-your-windows-ec2-instances-using-aws-systems-manager-patch-manager/)

  

**Check out this AWS Systems Manager Cheat Sheet:**

[https://tutorialsdojo.com/aws-systems-manager/](https://tutorialsdojo.com/aws-systems-manager/?src=udemy)

# Question 45: Incorrect

A company has a hybrid set up for its mobile application. The on-premises data center hosts a 3TB MySQL database server that handles the write-intensive requests from the application. The on-premises network is connected to the AWS VPC with a VPN. On AWS, the serverless application runs on AWS Lambda and API Gateway with an Amazon DynamoDB table used for saving user preferences. The application scales well as more users are using the mobile app. The user traffic is unpredictable but there is an average increase of about 20% each month. A few months into operation, the company noticed the exponential increase of costs for AWS Lambda. The Solutions Architect noticed that the Lambda execution time averages 4.5 minutes and most of that is wait time due to latency when calling the on-premises data MySQL server.

Which of the following solutions should the Solutions Architect implement to reduce the overall cost?

-   1\. Provision an AWS Direct Connect connection from the on-premises data  
        center to Amazon VPC instead of a VPN to significantly reduce the  
        network latency to the MySQL server.
    
    2\. Configure caching on the mobile application to reduce the overall AWS  
        Lambda function calls.
    
    3\. Gradually lower the timeout and memory properties of the Lamdba  
        functions without increasing the execution time.
    
    4\. Add an Amazon Elasticache cluster in front of DynamoDB to cache the  
        frequently accessed records.
    
-   1\. Provision an AWS Direct Connect connection from the on-premises data  
        center to Amazon VPC instead of a VPN to significantly reduce the  
        network latency to the MySQL server.
    
    2\. Create a CloudFront distribution with the API Gateway as the origin to  
        cache the API responses and reduce the Lambda invocations.
    
    3\. Convert the Lambda functions to run them on Amazon EC2 Reserved  
        Instances. Use Auto Scaling on peak time with a combination of Spot  
        instances to further reduce costs.
    
    4\. Configure Auto Scaling on Amazon DynamoDB to automatically adjust  
        the capacity with user traffic.
    
-   1\. Migrate the on-premises MySQL database server to Amazon RDS for MySQL. Enable Multi-AZ to ensure high availability.
    
    2\. Configure API caching on Amazon API Gateway to reduce the overall number of invocations to the Lambda functions.
    
    3\. Gradually lower the timeout and memory properties of the Lamdba functions without increasing the execution time.
    
    4\. Configure Auto Scaling on Amazon DynamoDB to automatically adjust the capacity based on user traffic.
    
    (Correct)
    
-   1\. Migrate the on-premises MySQL database server to Amazon RDS for  
        MySQL. Enable Multi-AZ to ensure high availability.
    
    2\. Create a CloudFront distribution with the API Gateway as the origin to  
        cache the API responses and reduce the Lambda invocations.
    
    3\. Gradually lower the timeout and memory properties of the Lamdba  
        functions without increasing the execution time.
    
    4\. Configure Auto Scaling on Amazon DynamoDB to automatically adjust  
        the capacity with user traffic and enable DynamoDB Accelerator to cache  
        frequently accessed records.
    
    (Incorrect)
    

Explanation

**Amazon API Gateway** is an AWS service for creating, publishing, maintaining, monitoring, and securing REST, HTTP, and WebSocket APIs at any scale. API developers can create APIs that access AWS or other web services, as well as data stored in the AWS Cloud. As an API Gateway API developer, you can create APIs for use in your own client applications.

You can enable API caching in Amazon API Gateway to cache your endpoint's responses. With caching, you can reduce the number of calls made to your endpoint and also improve the latency of requests to your API.

When you enable caching for a stage, API Gateway caches responses from your endpoint for a specified time-to-live (TTL) period, in seconds. API Gateway then responds to the request by looking up the endpoint response from the cache instead of making a request to your endpoint. The default TTL value for API caching is 300 seconds. The maximum TTL value is 3600 seconds. TTL=0 means caching is disabled.

With **AWS Lambda**, you pay only for what you use. You are charged based on the number of requests for your functions and the duration, the time it takes for your code to execute. Lambda counts a request each time it starts executing in response to an event notification or invoke call, including test invokes from the console.

Duration is calculated from the time your code begins executing until it returns or otherwise terminates, rounded up to the nearest 1ms\*. The price depends on the amount of memory you allocate to your function. In the AWS Lambda resource model, you choose the amount of memory you want for your function and are allocated proportional CPU power and other resources. An increase in memory size triggers an equivalent increase in CPU available to your function.

**Auto Scaling for DynamoDB** helps automate capacity management for your tables and global secondary indexes. You simply specify the desired target utilization and provide upper and lower bounds for read and write capacity. DynamoDB will then monitor throughput consumption using Amazon CloudWatch alarms and then will adjust provisioned capacity up or down as needed.

Amazon DynamoDB auto scaling uses the AWS Application Auto Scaling service to dynamically adjust provisioned throughput capacity on your behalf, in response to actual traffic patterns. This enables a table or a global secondary index to increase its provisioned read and write capacity to handle sudden increases in traffic, without throttling. When the workload decreases, Application Auto Scaling decreases the throughput so that you don't pay for unused provisioned capacity.

Therefore, the following option is correct:

**\- Migrate the on-premises MySQL database server to Amazon RDS for MySQL. Enable Multi-AZ to ensure high availability.**

**\- Configure API caching on Amazon API Gateway to reduce the overall number of invocations to the Lambda functions.**

**\- Gradually lower the timeout and memory properties of the Lamdba functions without increasing the execution time.**

**\- Configure Auto Scaling on Amazon DynamoDB to automatically adjust the capacity based on user traffic.**

Migrating the on-premises MySQL server to Amazon RDS provides the best latency for the Lambda functions which will significantly reduce the cost for execution time. API Gateway can cache the API request to reduce the Lambda invocation which can reduce the cost further. Auto Scaling for DynamoDB also reduces the cost by provisioning capacity depending on the current user traffic.

The following option is incorrect:

**\- Provision an AWS Direct Connect connection from the on-premises data center to Amazon VPC instead of a VPN to significantly reduce the network latency to the MySQL server.**

**\- Configure caching on the mobile application to reduce the overall AWS Lambda function calls.**

**\- Gradually lower the timeout and memory properties of the Lamdba functions without increasing the execution time.**

**\- Add an Amazon Elasticache cluster in front of DynamoDB to cache the frequently accessed records.**

Although the Direct Connect connection can reduce the network latency compared to a VPN connection, provisioning a Direct Connection just for a single application is not economical. Having the MySQL server hosted in AWS offers even far better network latency. Provisioning an Elasticache cluster also increases the cost. Caching the API requests should be done on the API Gateway, not on the mobile app itself.

The following option is incorrect:

**\- Provision an AWS Direct Connect connection from the on-premises data center to Amazon VPC instead of a VPN to significantly reduce the network latency to the MySQL server.**

**\- Create a CloudFront distribution with the API Gateway as the origin to cache the API responses and reduce the Lambda invocations.**

**\- Convert the Lambda functions to run them on Amazon EC2 Reserved Instances. Use Auto Scaling on peak time with a combination of Spot instances to further reduce costs.**

**\- Configure Auto Scaling on Amazon DynamoDB to automatically adjust the capacity with user traffic.**

Provisioning a Direct Connection just for the application is not economical even if it offers better latency than a VPN connection. Caching the API requests should be done on the API Gateway, and not on CloudFront. EC2 Reserve instances could be more expensive than Lambda functions when application traffic is low.

The following option is incorrect:

**\- Migrate the on-premises MySQL database server to Amazon RDS for MySQL. Enable Multi-AZ to ensure high availability.**

**\- Create a CloudFront distribution with the API Gateway as the origin to cache the API responses and reduce the Lambda invocations.**

**\- Gradually lower the timeout and memory properties of the Lamdba functions without increasing the execution time.**

**\- Configure Auto Scaling on Amazon DynamoDB to automatically adjust the capacity with user traffic and enable DynamoDB Accelerator to cache frequently accessed records.**

Caching the API requests should be done on the API Gateway, and not on CloudFront. DynamoDB Accelerator is used for caching requests if you need response times in microseconds. This is very expensive.

  

**References:**

[https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html)

[https://aws.amazon.com/api-gateway/faqs/](https://aws.amazon.com/api-gateway/faqs/)

[https://aws.amazon.com/blogs/aws/new-auto-scaling-for-amazon-dynamodb/](https://aws.amazon.com/blogs/aws/new-auto-scaling-for-amazon-dynamodb/)

[https://aws.amazon.com/lambda/pricing/](https://aws.amazon.com/lambda/pricing/)

  

**Check out these Amazon API Gateway, Amazon DynamoDB, and AWS Lambda Cheat Sheets:**

[https://tutorialsdojo.com/amazon-api-gateway/](https://tutorialsdojo.com/amazon-api-gateway/?src=udemy)

[https://tutorialsdojo.com/amazon-dynamodb/](https://tutorialsdojo.com/amazon-dynamodb/?src=udemy)

[https://tutorialsdojo.com/aws-lambda/](https://tutorialsdojo.com/aws-lambda/?src=udemy)

# Question 48: Incorrect

A multinational consumer goods corporation structured their AWS accounts to use AWS Organizations, which consolidates payment of their multiple AWS accounts for their various Business Units (BU’s) namely Beauty products, Baby products, Health products, and Home Care products unit. One of their Solutions Architects for the Baby products business unit has purchased 10 Reserved Instances for their new Supply Chain application which will go live 3 months from now. However, they do not want their Reserved Instance (RI) discounts to be shared by the other business units.

Which of the following options is the most suitable solution for this scenario?

-   Set the Reserved Instance (RI) sharing to private on the AWS account of the Baby products business unit.
    
    (Incorrect)
    
-   Remove the AWS account of the Baby products business unit out of the AWS Organization.
    
-   Turn off the Reserved Instance (RI) sharing on the master account for all of the member accounts in the Baby products business unit.
    
    (Correct)
    
-   Since the Baby product business unit is part of an AWS Organization, the Reserved Instances will always be shared across other member accounts. There is no way to disable this setting.
    

Explanation

For billing purposes, the consolidated billing feature of **AWS Organizations** treats all the accounts in the organization as one account. This means that all accounts in the organization can receive the hourly cost-benefit of Reserved Instances that are purchased by any other account. In the payer account, you can turn off Reserved Instance discount sharing on the Preferences page on the Billing and Cost Management console.

The master account of an organization can turn off Reserved Instance (RI) sharing for member accounts in that organization. This means that Reserved Instances are not shared between that member account and other member accounts. You can change this preference multiple times. Each estimated bill is computed using the last set of preferences. However, take note that turning off Reserved Instance sharing can result in a higher monthly bill.

![](https://media.tutorialsdojo.com/sap_consolidated_billing_ri.png)

Hence, the correct answer is: **Turn off the Reserved Instance (RI) sharing on the master account for all of the member accounts in the Baby products business unit.**

The option that says: **Set the Reserved Instance (RI) sharing to private on the AWS account of the Baby products business unit** is incorrect because there is no "private" option in the RI and Savings Plan discount sharing settings in the Billing Management Console. By default, the member account doesn't have the capability to turn off RI sharing on their account.

The option that says: **Remove the AWS account of the Baby products business unit out of the AWS Organization** is incorrect because removing the Baby products business unit account from the AWS Organization is not the optimal solution to prevent the other account from sharing its RI discounts. You can simply turn off the Reserved Instance discount sharing in the payer account.

The option that says: **Since the Baby product business unit is part of an AWS Organization, the Reserved Instances will always be shared across other member accounts. There is no way to disable this setting is** incorrect because this statement is false. There is certainly a way to disable the current setting by simply turning off RI sharing.

  

**References:**

[https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html)

[https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off-process.html](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off-process.html)

  

**Check out this AWS Billing and Cost Management Cheat Sheet:**

[https://tutorialsdojo.com/aws-billing-and-cost-management/](https://tutorialsdojo.com/aws-billing-and-cost-management/?src=udemy)

# Question 49: Incorrect

A company has several development teams using AWS CodeCommit to store their source code. With the number of code updates every day, the management is having difficulty tracking if the developers are adhering to company security policies. On a recent audit, the security team found several IAM access keys and secret keys in the CodeCommit repository. This is a big security risk so the company wants to have an automated solution that will scan the CodeCommit repositories for committed IAM credentials and delete/disable the IAM keys for those users.

Which of the following options will meet the company requirements?

-   Write a custom AWS Lambda function to search for credentials on new code submissions. Set the function trigger as AWS CodeCommit push events. If credentials are found, notify the user of the violation, and disable the IAM keys.
    
    (Correct)
    
-   Download and scan the source code from AWS CodeCommit using a custom AWS Lambda function. Schedule this Lambda function to run daily. If credentials are found, notify the user of the violation, generate new IAM credentials and store them in AWS KMS for encryption.
    
-   Scan the CodeCommit repositories for IAM credentials using Amazon Macie. Using machine learning, Amazon Macie can scan your repository for security violations. If violations are found, invoke an AWS Lambda function to notify the user and delete the IAM keys.
    
    (Incorrect)
    
-   Using a development instance, use the AWS Systems Manager Run Command to scan the AWS CodeCommit repository for IAM credentials on a daily basis. If credentials are found, rotate them using AWS Secrets Manager. Notify the user of the violation.
    

Explanation

**AWS CodeCommit** is a version control service hosted by Amazon Web Services that you can use to privately store and manage assets (such as documents, source code, and binary files) in the cloud.

You can configure a CodeCommit repository so that code pushes or other events trigger actions, such as sending a notification from Amazon Simple Notification Service (Amazon SNS) or invoking a function in AWS Lambda. You can create up to 10 triggers for each CodeCommit repository.

Triggers are commonly configured to:

\- Send emails to subscribed users every time someone pushes to the repository.

\- Notify an external build system to start a build after someone pushes to the main branch of the repository.

Scenarios like notifying an external build system require writing a Lambda function to interact with other applications. The email scenario simply requires creating an Amazon SNS topic. You can create a trigger for a CodeCommit repository so that events in that repository trigger notifications from an Amazon Simple Notification Service (Amazon SNS) topic.

You can also create an AWS Lambda trigger for a CodeCommit repository so that events in the repository invoke a Lambda function. For example, you can create a Lambda function that will scan the CodeCommit code submissions for IAM credentials, and then send out notifications or perform corrective actions.

When you use the Lambda console to create the function, you can create a CodeCommit trigger for the Lambda function. Here is an example of the trigger for all push events:

![](https://docs.aws.amazon.com/codecommit/latest/userguide/images/codecommit-lambda-trigger.png)

Therefore, the correct answer is: **Write a custom AWS Lambda function to search for credentials on new code submissions. Set the function trigger as AWS CodeCommit push events. If credentials are found, notify the user of the violation, and disable the IAM keys.**

The option that says: **Using a development instance, use the AWS Systems Manager Run Command to scan the AWS CodeCommit repository for IAM credentials on a daily basis. If credentials are found, rotate them using AWS Secrets Manager. Notify the user of the violation** is incorrect. You cannot rotate IAM keys on AWS Secrets Manager. Using the Run Command on a development instance just for scanning the repository is costly. It is cheaper to just write your own Lambda function to do the scanning.

The option that says: **Download and scan the source code from AWS CodeCommit using a custom AWS Lambda function. Schedule this Lambda function to run daily. If credentials are found, notify the user of the violation, generate new IAM credentials and store them in AWS KMS for encryption** is incorrect. You store encryption keys on AWS KMS, not IAM keys.

The option that says: **Scan the CodeCommit repositories for IAM credentials using Amazon Macie. Using machine learning, Amazon Macie can scan your repository for security violations. If violations are found, invoke an AWS Lambda function to notify the user and delete the IAM keys** is incorrect. Amazon Macie is designed to use machine learning and pattern matching to discover and protect your sensitive data in AWS. Macie primarily scans Amazon S3 buckets for data security and data privacy.

  

**References:**

[https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-notify-lambda.html](https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-notify-lambda.html)

[https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-notify-sns.html](https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-notify-sns.html)

[https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-notify.html](https://docs.aws.amazon.com/codecommit/latest/userguide/how-to-notify.html)

  

**Check out the AWS CodeCommit Cheat Sheet:**

[https://tutorialsdojo.com/aws-codecommit/](https://tutorialsdojo.com/aws-codecommit/?src=udemy)

# Question 51: Incorrect

A company uses Lightweight Directory Access Protocol (LDAP) for its employee authentication and authorization. The company plans to release a mobile app that can be installed on employee’s smartphones. The mobile application will allow users to have federated access to AWS resources. Due to strict security and compliance requirements, the mobile application must use a custom-built solution for user authentication. It must also use IAM roles for granting user permissions to AWS resources. The Solutions Architect was tasked to create a solution that meets these requirements.

Which of the following options should the Solutions Architect implement to enable authentication and authorization for the application? (Select TWO.)

-   Build a custom OpenID Connect-compatible solution in combination with AWS Single Sign-On (SSO) to create authentication and authorization functionality for the application.
    
-   Build a custom OpenID Connect-compatible solution for the user authentication functionality. Use Amazon Cognito Identity Pools for authorizing access to AWS resources.
    
    (Correct)
    
-   Build a custom SAML-compatible solution for user authentication. Leverage AWS Single Sign-On (SSO) for authorizing access to AWS resources.
    
    (Incorrect)
    
-   Build a custom LDAP connector using Amazon API Gateway with AWS Lambda function for user authentication. Use Amazon DynamoDB to store user authorization tokens. Write another Lambda function that will validate user authorization requests based on the token stored on DynamoDB.
    
-   Build a custom SAML-compatible solution to handle authentication and authorization. Configure the solution to use LDAP for user authentication and use SAML assertion to perform authorization to the IAM identity provider.
    
    (Correct)
    

Explanation

AWS supports **identity federation with SAML 2.0** (Security Assertion Markup Language 2.0), an open standard that many identity providers (IdPs) use. This feature enables federated single sign-on (SSO), so users can log in to the AWS Management Console or call the AWS API operations without you having to create an IAM user for everyone in your organization. By using SAML, you can simplify the process of configuring federation with AWS, because you can use the IdP's service instead of writing custom identity proxy code.

You can use a role to configure your SAML 2.0-compliant identity provider (IdP) and AWS to permit your federated users to access the AWS Management Console. The role grants the user permissions to carry out tasks in the console. The following diagram illustrates the flow for SAML-enabled single sign-on.

![](https://media.tutorialsdojo.com/sap_sso_ldap.png)

The diagram illustrates the following steps:

The user browses your organization's portal and selects the option to go to the AWS Management Console. In your organization, the portal is typically a function of your IdP that handles the exchange of trust between your organization and AWS.

The portal verifies the user's identity in your organization.

The portal generates a SAML authentication response that includes assertions that identify the user and include attributes about the user. The portal sends this response to the client browser.

The client browser is redirected to the AWS single sign-on endpoint and posts the SAML assertion.

The endpoint requests temporary security credentials on behalf of the user and creates a console sign-in URL that uses those credentials.

AWS sends the sign-in URL back to the client as a redirect.

The client browser is redirected to the AWS Management Console. If the SAML authentication response includes attributes that map to multiple IAM roles, the user is first prompted to select the role for accessing the console.

**Amazon Cognito** provides authentication, authorization, and user management for your web and mobile apps. Your users can sign in directly with a user name and password, or through a third party such as Facebook, Amazon, Google, or Apple. The two main components of Amazon Cognito are user pools and identity pools. User pools are user directories that provide sign-up and sign-in options for your app users. Identity pools enable you to grant your users access to other AWS services. You can use identity pools and user pools separately or together.

**Amazon Cognito identity pools** provide temporary AWS credentials for users who are guests (unauthenticated) and for users who have been authenticated and have received a token.

**OpenID Connect** is an open standard for authentication that is supported by a number of login providers. Amazon Cognito supports the linking of identities with OpenID Connect providers that are configured through AWS Identity and Access Management. Once you've created an OpenID Connect provider in the IAM Console, you can associate it with an identity pool.

The option that says: **Build a custom SAML-compatible solution to handle authentication and authorization. Configure the solution to use LDAP for user authentication and use SAML assertion to perform authorization to the IAM identity provider** is correct. The requirement is to use a custom-built solution for user authentication and this can use the company LDAP system for authentication. The SAML assertion is also needed to get authorization tokens from the IAM identity provider that will grant IAM roles to users that wish to access AWS resources.

The option that says: **Build a custom OpenID Connect-compatible solution for the user authentication functionality. Use Amazon Cognito Identity Pools for authorizing access to AWS resources** is correct. The custom OpenID Connect-compatible solution will allow users to log in from their mobile application much like a single sign-on functionality. Amazon Cognito Identity Pool will provide temporary tokens to federated users for accessing AWS resources.

The option that says: **Build a custom SAML-compatible solution for user authentication. Leverage AWS Single Sign-On (SSO) for authorizing access to AWS resources** is incorrect. The requirement is to grant federated access from the mobile application. AWS SSO supports single sign-on to business applications through web browsers only.

The option that says: **Build a custom LDAP connector using Amazon API Gateway with AWS Lambda function to user authentication. Use Amazon DynamoDB to store user authorization tokens. Write another Lambda function that will validate user authorization requests based on the token stored on DynamoDB** is incorrect. It is not recommended to store authorization tokens permanently on DynamoDB tables. These tokens should be generated upon user authentication and then temporarily saved on a DynamoDB for a fixed session length.

The option that says: **Build a custom OpenID Connect-compatible solution in combination with AWS Single Sign-On (SSO) to create authentication and authorization functionality for the application** is incorrect. AWS SSO supports only SAML 2.0–based applications so an OpenID Connect-compatible solution will not work for this scenario.

  

**References:**

[https://docs.aws.amazon.com/IAM/latest/UserGuide/id\_roles\_providers\_enable-console-saml.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html)

[https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html)

[https://docs.aws.amazon.com/cognito/latest/developerguide/open-id.html](https://docs.aws.amazon.com/cognito/latest/developerguide/open-id.html)

[https://aws.amazon.com/single-sign-on/faqs/](https://aws.amazon.com/single-sign-on/faqs/)

  

**AWS Identity Services Overview:**

  

**Check out these Amazon Cognito Cheat Sheets:**

[https://tutorialsdojo.com/amazon-cognito/](https://tutorialsdojo.com/amazon-cognito/?src=udemy)

[https://tutorialsdojo.com/amazon-cognito-user-pools-and-identity-pools-explained/](https://tutorialsdojo.com/amazon-cognito-user-pools-and-identity-pools-explained/?src=udemy)

# Question 52: Incorrect

A clinic runs its medical record system using a fleet of Windows-based Amazon EC2 instances with several EBS volumes attached to it. Since the records that they are storing are confidential health files of their patients, it is a requirement that the latest security patches are installed on the EC2 instances. In addition, there should be a system in the cloud architecture that checks all of the EC2 instances if they are using an approved Amazon Machine Image (AMI). The system that will be implemented should not impede developers from launching instances using an unapproved AMI, but you still have to be notified if there are non-compliant EC2 instances in your VPC.

Which of the following should the solutions architect implement to protect and monitor all of your instances as required above? (Select TWO.)

-   Create an IAM policy that will restrict the developers from launching EC2 instances with an unapproved AMI.
    
-   Set up Amazon GuardDuty that continuously monitors your instances if the latest security patches are installed and if there is an instance that is using an unapproved AMI. Use CloudWatch Alarms to notify you if there are any non-compliant instances running in your VPC.
    
    (Incorrect)
    
-   Use AWS Shield Advanced to automatically patch all of your EC2 instances and detect uncompliant EC2 instances which do not use approved AMIs.
    
-   Set up a patch baseline that defines which patches are approved for installation on your instances using AWS Systems Manager Patch Manager.
    
    (Correct)
    
-   Use the AWS Config Managed Rule which automatically checks whether your running EC2 instances are using approved AMIs. Set up CloudWatch Alarms to notify you if there are any non-compliant instances running in your VPC.
    
    (Correct)
    

Explanation

**AWS Systems Manager Patch Manager** automates the process of patching managed instances with security-related updates. For Linux-based instances, you can also install patches for non-security updates. You can patch fleets of Amazon EC2 instances or your on-premises servers and virtual machines (VMs) by operating system type. This includes supported versions of Windows Server, Ubuntu Server, Red Hat Enterprise Linux (RHEL), SUSE Linux Enterprise Server (SLES), CentOS, Amazon Linux, and Amazon Linux 2. You can scan instances to see only a report of missing patches, or you can scan and automatically install all missing patches.

![](https://media.tutorialsdojo.com/sap_ssm_maintenance_window.png)

Patch Manager uses **patch baselines**, which include rules for auto-approving patches within days of their release, as well as a list of approved and rejected patches. You can install patches on a regular basis by scheduling patching to run as a Systems Manager Maintenance Window task. You can also install patches individually or to large groups of instances by using Amazon EC2 tags. You can add tags to your patch baselines themselves when you create or update them.

AWS Config provides **AWS managed rules**, which are predefined, customizable rules that AWS Config uses to evaluate whether your AWS resources comply with common best practices. For example, you could use a managed rule to quickly start assessing whether your Amazon Elastic Block Store (Amazon EBS) volumes are encrypted or whether specific tags are applied to your resources. You can set up and activate these rules without writing the code to create an AWS Lambda function, which is required if you want to create custom rules. The AWS Config console guides you through the process of configuring and activating a managed rule. You can also use the AWS Command Line Interface or AWS Config API to pass the JSON code that defines your configuration of a managed rule.

In this scenario, you can use a combination of AWS Config Managed Rules and AWS Systems Manager Patch Manager to meet the requirements.

Therefore, the correct answers are:

**\- Set up a patch baseline that defines which patches are approved for installation on your instances using AWS Systems Manager Patch Manager.**

**\- Use the AWS Config Managed Rule which automatically checks whether your running EC2 instances are using approved AMIs. Set up CloudWatch Alarms to notify you if there are any non-compliant instances running in your VPC**.

The option that says: **Creating an IAM policy that will restrict the developers from launching EC2 instances with an unapproved AMI** is incorrect. Although you can use an IAM policy to prohibit your developers from launching unapproved AMIs, this will impede their work which violates what the scenario requires. Remember, as per the scenario, the system that you will implement should not impede developers from launching instances using an unapproved AMI.

The option that says: **Set up Amazon GuardDuty that continuously monitors your instances if the latest security patches are installed and if there is an instance that is using an unapproved AMI. Use CloudWatch Alarms to notify you if there are any non-compliant instances running in your VPC** is incorrect. Amazon GuardDuty is primarily used as a threat detection service that continuously monitors for malicious or unauthorized behavior to help you protect your AWS accounts and workloads. It monitors for activity such as unusual API calls or potentially unauthorized deployments that indicate a possible account compromise however, it does not check if your EC2 instances are using an approved AMI or not.

**Using AWS Shield Advanced to automatically patch all of your EC2 instances and detecting uncompliant EC2 instances which do not use approved AMIs** is incorrect. The AWS Shield Advanced service is most suitable to prevent DDoS attacks in your AWS resources. It cannot check the specific AMIs that your EC2 instances are using.

  

**References:**

[https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html)

[https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config\_use-managed-rules.html](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html)

[https://docs.aws.amazon.com/config/latest/developerguide/approved-amis-by-id.html](https://docs.aws.amazon.com/config/latest/developerguide/approved-amis-by-id.html)

  

**Check out these cheat sheets on AWS Config and AWS Systems Manager:**

[https://tutorialsdojo.com/aws-config/](https://tutorialsdojo.com/aws-config/?src=udemy)

[https://tutorialsdojo.com/aws-systems-manager/](https://tutorialsdojo.com/aws-systems-manager/?src=udemy)

# Question 53: Incorrect

A leading media company has a hybrid architecture where its on-premises data center is connected to AWS via a Direct Connect connection. They also have a repository of over 50-TB digital videos and media files. These files are stored on their on-premises tape library and are used by their Media Asset Management (MAM) system. Due to the sheer size of their data, they want to implement an automated catalog system that will enable them to search their files using facial recognition. A catalog will store the faces of the people who are present in these videos including a still image of each person. Eventually, the media company would like to migrate these media files to AWS including the MAM video contents.

Which of the following options provides a solution which uses the LEAST amount of ongoing management overhead and will cause MINIMAL disruption to the existing system?

-   Migrate all of the media files from the on-premises library into an EBS volume mounted on a large EC2 instance. Install an open-source facial recognition tool in the instance like OpenFace or OpenCV. Process the media files to retrieve the metadata and push this information into the MAM solution. Lastly, copy the media files to an S3 bucket.
    
-   Use Amazon Kinesis Video Streams to set up a video ingestion stream and with Amazon Rekognition, build a collection of faces. Stream the media files from the MAM solution into Kinesis Video Streams and configure the Amazon Rekognition to process the streamed files. Launch a stream consumer to retrieve the required metadata, and push the metadata into the MAM solution. Finally, configure the stream to store the files in an S3 bucket.
    
-   Integrate the file system of your local data center to AWS Storage Gateway by setting up a file gateway appliance on-premises. Utilize the MAM solution to extract the media files from the current data store and send them into the file gateway. Build a collection using Amazon Rekognition by populating a catalog of faces from the processed media files. Use an AWS Lambda function to invoke Amazon Rekognition Javascript SDK to have it fetch the media file from the S3 bucket which is backing the file gateway, retrieve the needed metadata, and finally, persist the information into the MAM solution.
    
    (Correct)
    
-   Set up a tape gateway appliance on-premises and connect it to your AWS Storage Gateway. Configure the MAM solution to fetch the media files from the current archive and push them into the tape gateway in the AWS Cloud. Using Amazon Rekognition, build a collection from the catalog of faces. Utilize a Lambda function which invokes the Rekognition Javascript SDK to have Amazon Rekognition process the video directly from the tape gateway in real-time, retrieve the required metadata, and push the metadata into the MAM solution.
    
    (Incorrect)
    

Explanation

**Amazon Rekognition** can store information about detected faces in server-side containers known as collections. You can use the facial information that's stored in a collection to search for known faces in images, stored videos, and streaming videos. Amazon Rekognition supports the [IndexFaces](https://docs.aws.amazon.com/rekognition/latest/dg/API_IndexFaces.html) operation. You can use this operation to detect faces in an image and persist information about facial features that are detected into a collection. This is an example of a _storage-based_ API operation because the service persists information on the server.

To store facial information, you must first create ([CreateCollection](https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateCollection.html)) a face collection in one of the AWS Regions in your account. You specify this face collection when you call the `IndexFaces` operation. After you create a face collection and store facial feature information for all faces, you can search the collection for face matches. To search for faces in an image, call [SearchFacesByImage](https://docs.aws.amazon.com/rekognition/latest/dg/API_SearchFacesByImage.html). To search for faces in a stored video, call [StartFaceSearch](https://docs.aws.amazon.com/rekognition/latest/dg/API_StartFaceSearch.html). To search for faces in a streaming video, call [CreateStreamProcessor](https://docs.aws.amazon.com/rekognition/latest/dg/API_CreateStreamProcessor.html).

![](https://media.tutorialsdojo.com/sap_rekognition_screen.jpg)

AWS Storage Gateway offers file-based, volume-based, and tape-based storage solutions. With a tape gateway, you can cost-effectively and durably archive backup data in GLACIER or DEEP\_ARCHIVE. A tape gateway provides a virtual tape infrastructure that scales seamlessly with your business needs and eliminates the operational burden of provisioning, scaling, and maintaining a physical tape infrastructure.

You can run AWS Storage Gateway either on-premises as a VM appliance, as a hardware appliance, or in AWS as an Amazon Elastic Compute Cloud (Amazon EC2) instance. You deploy your gateway on an EC2 instance to provision iSCSI storage volumes in AWS. You can use gateways hosted on EC2 instances for disaster recovery, data mirroring, and providing storage for applications hosted on Amazon EC2.

Hence, the correct answer is: **Integrate the file system of your local data center to AWS Storage Gateway by setting up a file gateway appliance on-premises. Utilize the MAM solution to extract the media files from the current data store and send them into the file gateway. Build a collection using Amazon Rekognition by populating a catalog of faces from the processed media files. Use an AWS Lambda function to invoke Amazon Rekognition Javascript SDK to have it fetch the media file from the S3 bucket which is backing the file gateway, retrieve the needed metadata, and finally, persist the information into the MAM solution.**

The option that says: **Migrate all of the media files from the on-premises library into an EBS volume mounted on a large EC2 instance. Install an open-source facial recognition tool in the instance like OpenFace or OpenCV. Process the media files to retrieve the metadata and push this information into the MAM solution. Lastly, copy the media files to an S3 bucket** is incorrect. This entails a lot of ongoing management overhead instead of just using Amazon Rekognition. Moreover, it is more suitable to use the AWS Storage Gateway service rather than an EBS Volume.

The option that says: **Set up a tape gateway appliance on-premises and connect it to your AWS Storage Gateway. Configure the MAM solution to fetch the media files from the current archive and push them into the tape gateway in the AWS Cloud. Using Amazon Rekognition, build a collection from the catalog of faces. Utilize a Lambda function which invokes the Rekognition Javascript SDK to have Amazon Rekognition process the video directly from the tape gateway in real-time, retrieve the required metadata, and push the metadata into the MAM solution** is incorrect. Although this solution uses the right combination of AWS Storage Gateway and Amazon Rekognition, take note that you can't directly fetch the media files from your tape gateway in real-time since this is backed up using Glacier. Although the on-premises data center is using a tape gateway, you can still set up a solution to use a file gateway in order to properly process the videos using Amazon Rekognition. Keep in mind that the tape gateway in AWS Storage Gateway service is primarily used as an archive solution.

The option that says: **Use Amazon Kinesis Video Streams to set up a video ingestion stream and with Amazon Rekognition, build a collection of faces. Stream the media files from the MAM solution into Kinesis Video Streams and configure the Amazon Rekognition to process the streamed files. Launch a stream consumer to retrieve the required metadata, and push the metadata into the MAM solution. Finally, configure the stream to store the files in an S3 bucket** is incorrect. You won't be able to connect your tape gateway directly to your Kinesis Video Streams service. You need to use AWS Storage Gateway first.

  

**References:**

[https://docs.aws.amazon.com/rekognition/latest/dg/collections.html](https://docs.aws.amazon.com/rekognition/latest/dg/collections.html)

[https://aws.amazon.com/storagegateway/file/](https://aws.amazon.com/storagegateway/file/)

  

**Check out this Amazon Rekognition Cheat Sheet:**

[**https://tutorialsdojo.com/amazon-rekognition/**](https://tutorialsdojo.com/amazon-rekognition/?src=udemy)

  

**Tutorials Dojo's AWS Certified Solutions Architect Professional Exam Study Guide:**

[https://tutorialsdojo.com/aws-certified-solutions-architect-professional/](https://tutorialsdojo.com/aws-certified-solutions-architect-professional/?src=udemy)

# Question 54: Incorrect

A company wants to implement a multi-account strategy that will be distributed across its several research facilities. There will be approximately 50 teams in total that will need their own AWS accounts. A solution is needed to simplify the DNS management as there is only one team that manages all the domains and subdomains for the whole organization. This means that the solution should allow private DNS to be shared among virtual private clouds (VPCs) in different AWS accounts.

Which of the following solutions has the LEAST complex DNS architecture and allows all VPCs to resolve the needed domain names?

-   On AWS Resource Access Manager (RAM), set up a shared services VPC on your central account. Create a peering from this VPC to each VPC on the other accounts. On Amazon Route 53, create a private hosted zone associated with the shared services VPC. Manage all domains and subdomains on this hosted zone. On each of the other AWS Accounts, create a Route 53 private hosted zone and configure the Name Server entry to use the DNS of the central account.
    
-   On AWS Resource Access Manager (RAM), set up a shared services VPC on your central account. Set up VPC peering from this VPC to each VPC on the other accounts. On Amazon Route 53, create a private hosted zone associated with the shared services VPC. Manage all domains and subdomains on this zone. Programmatically associate the VPCs from other accounts with this hosted zone.
    
    (Correct)
    
-   Set up a VPC peering connection among the VPC of each account. Ensure that the each VPC has the attributes `enableDnsHostnames` and `enableDnsSupport` set to “TRUE”. On Amazon Route 53, create a private hosted zone associated with the central account’s VPC. Manage all domains and subdomains on this hosted zone. On each of the other AWS Accounts, create a Route 53 private hosted zone and configure the Name Server entry to use the DNS of the central account.
    
    (Incorrect)
    
-   Set up Direct Connect connections among the VPCs of each account using private virtual interfaces. Ensure that each VPC has the attributes `enableDnsHostnames` and `enableDnsSupport` set to “FALSE”. On Amazon Route 53, create a private hosted zone associated with the central account’s VPC. Manage all domains and subdomains on this hosted zone. Programmatically associate the VPCs from other accounts with this hosted zone.
    

Explanation

When you create a VPC using Amazon VPC, Route 53 Resolver automatically answers DNS queries for local VPC domain names for EC2 instances (ec2-192-0-2-44.compute-1.amazonaws.com) and records in private hosted zones (acme.example.com). For all other domain names, Resolver performs recursive lookups against public name servers.

You also can integrate DNS resolution between Resolver and DNS resolvers on your network by configuring forwarding rules. Your network can include any network that is reachable from your VPC, such as the following:

\- The VPC itself

\- Another peered VPC

\- An on-premises network that is connected to AWS with AWS Direct Connect, a VPN, or a network address translation (NAT) gateway

![](https://media.tutorialsdojo.com/sap_route53_resolver_multi_account.jpg)

VPC sharing allows customers to share subnets with other AWS accounts within the same AWS Organization. This is a very powerful concept that allows for a number of benefits:

\- Separation of duties: centrally controlled VPC structure, routing, IP address allocation.

\- Application owners continue to own resources, accounts, and security groups.

\- VPC sharing participants can reference security group IDs of each other.

\- Efficiencies: higher density in subnets, efficient use of VPNs and AWS Direct Connect.

\- Hard limits can be avoided, for example, 50 VIFs per AWS Direct Connect connection through simplified network architecture.

\- Costs can be optimized through reuse of NAT gateways, VPC interface endpoints, and intra-Availability Zone traffic.

Essentially, we can decouple accounts and networks. In this model, the account that owns the VPC (owner) shares one or more subnets with other accounts (participants) that belong to the same organization from AWS Organizations. After a subnet is shared, the participants can view, create, modify, and delete their application resources in the subnets shared with them. Participants cannot view, modify, or delete resources that belong to other participants or the VPC owner. You can simplify network topologies by interconnecting shared Amazon VPCs using connectivity features, such as AWS PrivateLink, AWS Transit Gateway, and Amazon VPC peering.

Therefore, the correct answer is: **On AWS Resource Access Manager (RAM), set up a shared services VPC on your central account. Set up VPC peering from this VPC to each VPC on the other accounts. On Amazon Route 53, create a private hosted zone associated with the shared services VPC. Manage all domains and subdomains on this zone. Programmatically associate the VPCs from other accounts with this hosted zone.**

The option that says: **Set up Direct Connect connections among the VPCs of each account using private virtual interfaces. Ensure that each VPC has the attributes** `**enableDnsHostnames**` **and** `**enableDnsSupport**` **set to “FALSE”. On Amazon Route 53, create a private hosted zone associated with the central account’s VPC. Manage all domains and subdomains on this hosted zone. Programmatically associate the VPCs from other accounts with this hosted zone** is incorrect. Using AWS Direct Connect is not a suitable service to connect the various VPCs. In addition, attributes `enableDnsHostnames` and `enableDnsSupport` are set to “TRUE” by default and are needed for VPC resources to query Route 53 zone entries.

The option that says: **Set up a VPC peering connection among the VPC of each account. Ensure that each VPC has the attributes** `**enableDnsHostnames**` **and** `**enableDnsSupport**` **set to “TRUE”. On Amazon Route 53, create a private hosted zone associated with the central account’s VPC. Manage all domains and subdomains on this hosted zone. On each of the other AWS Accounts, create a Route 53 private hosted zone and configure the Name Server entry to use the DNS of the central account** is incorrect. You won't be able to resolve the hosted private zone entries even if you configure your Route 53 zone NS entry to use the central accounts' DNS servers.

The option that says: **On AWS Resource Access Manager (RAM), set up a shared services VPC on your central account. Create a peering from this VPC to each VPC on the other accounts. On Amazon Route 53, create a private hosted zone associated with the shared services VPC. Manage all domains and subdomains on this hosted zone. On each of the other AWS Accounts, create a Route 53 private hosted zone and configure the Name Server entry to use the DNS of the central account** is incorrect. Although creating the shared services VPC is a good solution, configuring Route 53 Name Server (NS) records to point to the shared services VPC’s Route 53 is not enough. You need to associate the VPCs from other accounts to the hosted zone on the central account.

  

**References:**

[https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html)

[https://aws.amazon.com/blogs/networking-and-content-delivery/vpc-sharing-a-new-approach-to-multiple-accounts-and-vpc-management/](https://aws.amazon.com/blogs/networking-and-content-delivery/vpc-sharing-a-new-approach-to-multiple-accounts-and-vpc-management/)

[https://aws.amazon.com/blogs/security/simplify-dns-management-in-a-multiaccount-environment-with-route-53-resolver/](https://aws.amazon.com/blogs/security/simplify-dns-management-in-a-multiaccount-environment-with-route-53-resolver/)

  

**Check out these Amazon VPC and Route 53 Cheat Sheets:**

[https://tutorialsdojo.com/amazon-vpc/](https://tutorialsdojo.com/amazon-vpc/?src=udemy)

[https://tutorialsdojo.com/amazon-route-53/](https://tutorialsdojo.com/amazon-route-53/?src=udemy)

# Question 55: Incorrect

A company runs hundreds of Windows-based Amazon EC2 instances on AWS. The Solutions Architect has been assigned to develop a workflow to ensure that the required patches of all Windows EC2 instances are properly identified and applied automatically. To maintain their system uptime requirements, it is of utmost importance to ensure that the EC2 instance reboots do not occur at the same time on all of their Windows instances. This is to avoid any loss of revenue that could be caused by any unavailability issues of their systems.

Which of the following will meet the above requirements?

-   Create a Patch Group with unique tags that you will assign to all of your EC2 Windows Instances. Associate the predefined `AWS-DefaultPatchBaseline` baseline on both patch groups. Create a CloudWatch Events rule configured to use a cron expression to automate the execution of patching in a given schedule using the AWS Systems Manager Run command. Set up an AWS Systems Manager State Manager document to define custom commands which will be executed during patch execution.
    
-   Create two Patch Groups with unique tags that you will assign to all of your EC2 Windows Instances. Associate the predefined `AWS-DefaultPatchBaseline` baseline on both patch groups. Create two CloudWatch Events rules which are configured to use a cron expression to automate the execution of patching for the two Patch Groups using the AWS Systems Manager Run command. Set up an AWS Systems Manager State Manager document to define custom commands which will be executed during patch execution.
    
-   Create a Patch Group with unique tags that you will assign to all of your EC2 Windows Instances. Associate the predefined `AWS-DefaultPatchBaseline` baseline on your patch group. Set up a maintenance window and associate it with your patch group. Assign the `AWS-RunPatchBaseline` document as a task within your maintenance window.
    
    (Incorrect)
    
-   Create two Patch Groups with unique tags that you will assign to all of your EC2 Windows Instances. Associate the predefined `AWS-DefaultPatchBaseline` baseline on both patch groups. Set up two non-overlapping maintenance windows and associate each with a different patch group. Using Patch Group tags, register targets with specific maintenance windows and lastly, assign the `AWS-RunPatchBaseline` document as a task within each maintenance window which has a different processing start time.
    
    (Correct)
    

Explanation

**AWS Systems Manager Patch Manager** automates the process of patching managed instances with both security-related and other types of updates. You can use Patch Manager to apply patches for both operating systems and applications.

You can patch fleets of Amazon EC2 instances or your on-premises servers and virtual machines (VMs) by operating system type. This includes supported versions of Windows Server, Ubuntu Server, Red Hat Enterprise Linux (RHEL), SUSE Linux Enterprise Server (SLES), CentOS, Amazon Linux, and Amazon Linux 2. You can scan instances to see only a report of missing patches, or you can scan and automatically install all missing patches.

![](https://media.tutorialsdojo.com/sap_ssm_maintenance_window.png)

Patch Manager uses _patch baselines_, which include rules for auto-approving patches within days of their release, as well as a list of approved and rejected patches. You can install patches on a regular basis by scheduling patching to run as a Systems Manager maintenance window task. You can also install patches individually or to large groups of instances by using Amazon EC2 tags. You can add tags to your patch baselines themselves when you create or update them.

You can use a _patch group_ to associate instances with a specific patch baseline. Patch groups help ensure that you are deploying the appropriate patches, based on the associated patch baseline rules, to the correct set of instances. Patch groups can also help you avoid deploying patches before they have been adequately tested. For example, you can create patch groups for different environments (such as Development, Test, and Production) and register each patch group to an appropriate patch baseline.

![](https://media.tutorialsdojo.com/sap_ssm_patch_group.png)

When you run `AWS-RunPatchBaseline`, you can target managed instances using their instance ID or tags. SSM Agent and Patch Manager will then evaluate which patch baseline to use based on the patch group value that you added to the instance.

You create a patch group by using Amazon EC2 tags. Unlike other tagging scenarios across Systems Manager, a patch group _must_ be defined with the tag key: **Patch Group**. Note that the key is case-sensitive. You can specify any value, for example, "web servers," but the key must be **Patch Group**.

The `AWS-DefaultPatchBaseline` baseline is primarily used to approve all Windows Server operating system patches that are classified as "CriticalUpdates" or "SecurityUpdates" and that have an MSRC severity of "Critical" or "Important". Patches are auto-approved seven days after release.

Hence, the option that says: **Create two Patch Groups with unique tags that you will assign to all of your EC2 Windows Instances. Associate the predefined** `**AWS-DefaultPatchBaseline**` **baseline on both patch groups. Set up two non-overlapping maintenance windows and associate each with a different patch group. Using Patch Group tags, register targets with specific maintenance windows and lastly, assign the** `**AWS-RunPatchBaseline**` **document as a task within each maintenance window which has a different processing start time** is the correct answer as it properly uses two Patch Groups, non-overlapping maintenance windows and the `AWS-DefaultPatchBaseline` baseline to ensure that the EC2 instance reboots do not occur at the same time.

The option that says: **Create a Patch Group with unique tags that you will assign to all of your EC2 Windows Instances. Associate the predefined** `**AWS-DefaultPatchBaseline**` **baseline on your patch group. Set up a maintenance window and associate it with your patch group. Assign the** `**AWS-RunPatchBaseline**` **document as a task within your maintenance window** is incorrect. Although it is correct to use a Patch Group, you must create another Patch Group to avoid any unavailability issues. Having two non-overlapping maintenance windows will ensure that there will be another set of running Windows EC2 instances while the other set is being patched.

The option that says: **Create two Patch Groups with unique tags that you will assign to all of your EC2 Windows Instances. Associate the predefined** `**AWS-DefaultPatchBaseline**` **baseline on both patch groups. Create two CloudWatch Events rules which are configured to use a cron expression to automate the execution of patching for the two Patch Groups using the AWS Systems Manager Run command. Set up an AWS Systems Manager State Manager document to define custom commands which will be executed during patch execution** is incorrect. The AWS Systems Manager Run Command is primarily used to remotely manage the configuration of your managed instances while AWS Systems Manager State Manager is just a configuration management service that automates the process of keeping your Amazon EC2 and hybrid infrastructure in a state that you define. These two services, including CloudWatch Events, are not suitable to be used in this scenario. The better solution would be to use AWS Systems Manager Maintenance Windows which lets you define a schedule for when to perform potentially disruptive actions on your instances such as patching an operating system, updating drivers, or installing software or patches.

The option that says: **Create a Patch Group with unique tags that you will assign to all of your EC2 Windows Instances. Associate the predefined** `**AWS-DefaultPatchBaseline**` **baseline on both patch groups. Create a CloudWatch Events rule configured to use a cron expression to automate the execution of patching in a given schedule using the AWS Systems Manager Run command. Set up an AWS Systems Manager State Manager document to define custom commands which will be executed during patch execution** is incorrect. Just as what is mentioned in the above, you have to use Maintenance Windows for scheduling the patches and you also need to set up two Patch Groups in this scenario instead of one.

  

**References:**

[https://aws.amazon.com/blogs/mt/patching-your-windows-ec2-instances-using-aws-systems-manager-patch-manager/](https://aws.amazon.com/blogs/mt/patching-your-windows-ec2-instances-using-aws-systems-manager-patch-manager/)

[https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-ssm-documents.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/patch-manager-ssm-documents.html)

[https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-patch-scheduletasks.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-patch-scheduletasks.html)

  

**Check out this AWS Systems Manager Cheat Sheet:**

[https://tutorialsdojo.com/aws-systems-manager/](https://tutorialsdojo.com/aws-systems-manager/?src=udemy)

# Question 69: Incorrect

A top university has launched its serverless online portal using Lambda and API Gateway in AWS that enables its students to enroll, manage their class schedules, and see their grades online. After a few weeks, the portal abruptly stopped working and lost all of its data. The university hired an external cybersecurity consultant and based on the investigation, the outage was due to an SQL injection vulnerability on the portal's login page in which the attacker simply injected the malicious SQL code. You also need to track historical changes to the rules and metrics associated with your firewall.

Which of the following is the most suitable and cost-effective solution to avoid another SQL Injection attack against their infrastructure in AWS?

-   Use AWS WAF to add a web access control list (web ACL) in front of the Lambda functions to block requests that contain malicious SQL code. Use AWS Firewall Manager, to track changes to your web access control lists (web ACLs) such as the creation and deletion of rules including the updates to the WAF rule configurations.
    
-   Block the IP address of the attacker in the Network Access Control List of your VPC and then set up a CloudFront distribution. Set up AWS WAF to add a web access control list (web ACL) in front of the CloudFront distribution to block requests that contain malicious SQL code. Use AWS Config to track changes to your web access control lists (web ACLs) such as the creation and deletion of rules including the updates to the WAF rule configurations.
    
-   Create a new Application Load Balancer (ALB) and set up AWS WAF in the load balancer. Place the API Gateway behind the ALB and configure a web access control list (web ACL) in front of the ALB to block requests that contain malicious SQL code. Use AWS Firewall Manager to track changes to your web access control lists (web ACLs) such as the creation and deletion of rules including the updates to the WAF rule configurations.
    
    (Incorrect)
    
-   Use AWS WAF to add a web access control list (web ACL) in front of the API Gateway to block requests that contain malicious SQL code. Use AWS Config to track changes to your web access control lists (web ACLs) such as the creation and deletion of rules including the updates to the WAF rule configurations.
    
    (Correct)
    

Explanation

**AWS WAF** is a web application firewall that helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources. With AWS Config, you can track changes to WAF web access control lists (web ACLs). For example, you can record the creation and deletion of rules and rule actions, as well as updates to WAF rule configurations.

![](https://media.tutorialsdojo.com/sap_aws_waf.png)

**AWS WAF** gives you control over which traffic to allow or block to your web applications by defining customizable web security rules. You can use AWS WAF to create custom rules that block common attack patterns, such as SQL injection or cross-site scripting, and rules that are designed for your specific application. New rules can be deployed within minutes, letting you respond quickly to changing traffic patterns. Also, AWS WAF includes a full-featured API that you can use to automate the creation, deployment, and maintenance of web security rules.

In this scenario, the best option is to deploy WAF in front of the API Gateway. Hence the correct answer is the option that says: **Use AWS WAF to add a web access control list (web ACL) in front of the API Gateway to block requests that contain malicious SQL code. Use AWS Config to track changes to your web access control lists (web ACLs) such as the creation and deletion of rules including the updates to the WAF rule configurations**.

The option that says: **Use AWS WAF to add a web access control list (web ACL) in front of the Lambda functions to block requests that contain malicious SQL code. Use AWS Firewall Manager, to track changes to your web access control lists (web ACLs) such as the creation and deletion of rules including the updates to the WAF rule configurations** is incorrect because you have to use AWS WAF in front of the API Gateway and not directly to the Lambda functions. AWS Firewall Manager is primarily used to manage your Firewall across multiple AWS accounts under your AWS Organizations and hence, it is not suitable for tracking changes to WAF web access control lists. You should use AWS Config instead.

The option that says: **Block the IP address of the attacker in the Network Access Control List of your VPC and then set up a CloudFront distribution. Set up AWS WAF to add a web access control list (web ACL) in front of the CloudFront distribution to block requests that contain malicious SQL code. Use AWS Config to track changes to your web access control lists (web ACLs) such as the creation and deletion of rules including the updates to the WAF rule configurations** is incorrect. Even though it is valid to use AWS WAF with CloudFront, it entails an additional and unnecessary cost to launch a CloudFront distribution for this scenario. There is no requirement that the serverless online portal should be scalable and be accessible around the globe hence, a CloudFront distribution is not necessary.

The option that says: **Create a new Application Load Balancer (ALB) and set up AWS WAF in the load balancer. Place the API Gateway behind the ALB and configure a web access control list (web ACL) in front of the ALB to block requests that contain malicious SQL code. Use AWS Firewall Manager to track changes to your web access control lists (web ACLs) such as the creation and deletion of rules including the updates to the WAF rule configurations** is incorrect. Launching a new Application Load Balancer entails additional cost and is not cost-effective. In addition, AWS Firewall manager is primarily used to manage your Firewall across multiple AWS accounts under your AWS Organizations. Using AWS Config is much more suitable for tracking changes to WAF web access control lists.

  

**References:**

[https://aws.amazon.com/waf/](https://aws.amazon.com/waf/)

[https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html)

  

**Check out this AWS WAF Cheat Sheet:**

[https://tutorialsdojo.com/aws-waf/](https://tutorialsdojo.com/aws-waf/?src=udemy)

  

**AWS Security Services Overview - WAF, Shield, CloudHSM, KMS:**

[https://youtu.be/-1S-RdeAmMo](https://youtu.be/-1S-RdeAmMo)

# Question 74: Incorrect

A leading financial company is planning to launch its MERN (MongoDB, Express, React, Node.js) application with an Amazon RDS MariaDB database to serve its clients worldwide. The application will run on both on-premises servers as well as Reserved EC2 instances. To comply with the company's strict security policy, the database credentials must be encrypted both at rest and in transit. These credentials will be used by the application servers to connect to the database. The Solutions Architect is tasked to manage all of the aspects of the application architecture and production deployment.

How should the Architect automate the deployment process of the application in the MOST secure manner?

-   Upload the database credentials with a Secure String data type in AWS Systems Manager Parameter Store. Install the AWS SSM agent on all servers. Set up a new IAM role that enables access and decryption of the database credentials from SSM Parameter Store. Attach this IAM policy to the instance profile for CodeDeploy-managed EC2 instances. Associate the same policy as well to the on-premises instances. Using AWS CodeDeploy, launch the application packages to the Amazon EC2 instances and on-premises servers.
    
    (Incorrect)
    
-   Upload the database credentials with a Secure String data type in AWS Systems Manager Parameter Store. Install the AWS SSM agent on all servers. Set up a new IAM role that enables access and decryption of the database credentials from SSM Parameter Store. Associate this role to the EC2 instances. Create an IAM Service Role that will be associated with the on-premises servers. Deploy the application packages to the EC2 instances and on-premises servers using AWS CodeDeploy.
    
    (Correct)
    
-   Upload the database credentials with key rotation in AWS Secrets Manager. Install the AWS SSM agent on all servers. Set up a new IAM role that enables access and decryption of the database credentials from SSM Parameter Store. Associate this role to all on-premises servers and EC2 instances. Use Elastic Beanstalk to host and manage the application on both on-premises servers and EC2 instances. Deploy the succeeding application revisions to AWS and on-premises servers using Elastic Beanstalk.
    
-   Upload the database credentials with a Secure String data type in AWS Systems Manager Parameter Store. Install the AWS SSM agent on all servers. Set up a new IAM role that enables access and decryption of the database credentials from SSM Parameter Store. Associate this role to all on-premises servers and EC2 instances. Use Elastic Beanstalk to host and manage the application on both on-premises servers and EC2 instances. Deploy the succeeding application revisions to AWS and on-premises servers using Elastic Beanstalk.
    

Explanation

**AWS Systems Manager Parameter Store** provides secure, hierarchical storage for configuration data management and secrets management. You can store data such as passwords, database strings, and license codes as parameter values. You can store values as plain text or encrypted data. You can then reference values by using the unique name that you specified when you created the parameter. Highly scalable, available, and durable, Parameter Store is backed by the AWS Cloud.

Servers and virtual machines (VMs) in a hybrid environment require an IAM role to communicate with the Systems Manager service. The role grants `AssumeRole` trust to the Systems Manager service. You only need to create the service role for a hybrid environment once for each AWS account.

Users in your company or organization who will use Systems Manager on your hybrid machines must be granted permission in IAM to call the SSM API.

![](https://media.tutorialsdojo.com/sap_ssm_parameter_store.png)

**Service role**: A service role is an AWS Identity and Access Management (IAM) that grants permissions to an AWS service so that the service can access AWS resources. Only a few Systems Manager scenarios require a service role. When you create a service role for Systems Manager, you choose the permissions to grant in order for it to access or interact with other AWS resources.

**Service-linked role**: A service-linked role is predefined by Systems Manager and includes all the permissions that the service requires to call other AWS services on your behalf.

If you plan to use Systems Manager to manage on-premises servers and virtual machines (VMs) in what is called a **hybrid environment**, you must create an IAM role for those resources to communicate with the Systems Manager service.

Hence, the correct answer is: **Upload the database credentials with a Secure String data type in AWS Systems Manager Parameter Store. Install the AWS SSM agent on all servers. Set up a new IAM role that enables access and decryption of the database credentials from SSM Parameter Store. Associate this role to the EC2 instances. Create an IAM Service Role that will be associated with the on-premises servers. Deploy the application packages to the EC2 instances and on-premises servers using AWS CodeDeploy.**

The option that says: **Upload the database credentials with a Secure String data type in AWS Systems Manager Parameter Store. Install the AWS SSM agent on all servers. Set up a new IAM role that enables access and decryption of the database credentials from SSM Parameter Store. Associate this role to all on-premises servers and EC2 instances. Use Elastic Beanstalk to host and manage the application on both on-premises servers and EC2 instances. Deploy the succeeding application revisions to AWS and on-premises servers using Elastic Beanstalk** is incorrect. You can't deploy an application to your on-premises servers using Elastic Beanstalk. This is only applicable to your Amazon EC2 instances.

The option that says: **Upload the database credentials with a Secure String data type in AWS Systems Manager Parameter Store. Install the AWS SSM agent on all servers. Set up a new IAM role that enables access and decryption of the database credentials from SSM Parameter Store. Attach this IAM policy to the instance profile for CodeDeploy-managed EC2 instances. Associate the same policy as well to the on-premises instances. Using AWS CodeDeploy, launch the application packages to the Amazon EC2 instances and on-premises servers** is incorrect. You have to use an IAM Role and not an IAM Policy to grant access to AWS Systems Manager Parameter Store.

The option that says: **Upload the database credentials with key rotation in AWS Secrets Manager. Install the AWS SSM agent on all servers. Set up a new IAM role that enables access and decryption of the database credentials from SSM Parameter Store. Associate this role to all on-premises servers and EC2 instances. Use Elastic Beanstalk to host and manage the application on both on-premises servers and EC2 instances. Deploy the succeeding application revisions to AWS and on-premises servers using Elastic Beanstalk** is incorrect. Although you can store the database credentials to AWS Secrets Manager, you still can't deploy an application to your on-premises servers using Elastic Beanstalk.

  

**References:**

[https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html)

[https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-service-role.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-service-role.html)

[https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html)

[https://docs.aws.amazon.com/systems-manager/latest/userguide/setup-service-role.html](https://docs.aws.amazon.com/systems-manager/latest/userguide/setup-service-role.html)

  

**Check out this AWS Systems Manager Cheat Sheet:**

[https://tutorialsdojo.com/aws-systems-manager/](https://tutorialsdojo.com/aws-systems-manager/?src=udemy)

# Question 75: Incorrect

A retail company hosts its web application on an Auto Scaling group of Amazon EC2 instances deployed across multiple Availability Zones. The Auto Scaling group is configured to maintain a minimum EC2 cluster size and automatically replace unhealthy instances. The EC2 instances are behind an Application Load Balancer so that the load can be spread evenly on all instances. The application target group health check is configured with a fixed HTTP page that queries a dummy item on the database. The web application connects to a Multi-AZ Amazon RDS MySQL instance. A recent outage caused a major loss to the company's revenue. Upon investigation, it was found that the web server metrics are within the normal range but the database CPU usage is very high, causing the EC2 health checks to timeout. Failing the health checks, the Auto Scaling group continuously replaced the unhealthy instances thus causing the downtime.

Which of the following options should the Solution Architect implement to prevent this from happening again and allow the application to handle more traffic in the future? (Select TWO.)

-   Create an Amazon CloudWatch alarm to monitor the Amazon RDS MySQL instance if it has a high-load or in impaired status. Set the alarm action to recover the RDS instance. This will automatically reboot the database to reset the queries.
    
-   Reduce the load on the database tier by creating an Amazon ElastiCache cluster to cache frequently requested database queries. Configure the application to use this cache when querying the RDS MySQL instance.
    
    (Correct)
    
-   Reduce the load on the database tier by creating multiple read replicas for the Amazon RDS MySQL Multi-AZ cluster. Configure the web application to use the single reader endpoint of RDS for all read operations.
    
    (Incorrect)
    
-   Change the target group health check to a simple HTML page instead of a page that queries the database. Create an Amazon Route 53 health check for the database dummy item web page to ensure that the application works as expected. Set up an Amazon CloudWatch alarm to send a notification to Admins when the health check fails.
    
    (Correct)
    
-   Change the target group health check to use a TCP check on the EC2 instances instead of a page that queries the database. Create an Amazon Route 53 health check for the database dummy item web page to ensure that the application works as expected. Set up an Amazon CloudWatch alarm to send a notification to Admins when the health check fails.
    

Explanation

**Amazon Route 53 health checks** monitor the health and performance of your web applications, web servers, and other resources. Each health check that you create can monitor one of the following:

**The health of a specified resource, such as a web server** - You can configure a health check that monitors an endpoint that you specify either by IP address or by the domain name. At regular intervals that you specify, Route 53 submits automated requests over the Internet to your application. You can configure the health check to make requests similar to those that your users make, such as requesting a web page from a specific URL.

**The status of other health checks** - You can create a health check that monitors whether Route 53 considers other health checks healthy or unhealthy. One situation where this might be useful is when you have multiple resources that perform the same function, such as multiple web servers, and your chief concern is whether some minimum number of your resources are healthy.

**The status of an Amazon CloudWatch alarm** - You can create CloudWatch alarms that monitor the status of CloudWatch metrics, such as the number of throttled read events for an Amazon DynamoDB database or the number of Elastic Load Balancing hosts that are considered healthy.

After you create a health check, you can get the status of the health check, get notifications when the status changes, and configure DNS failover. To improve resiliency and availability, Route 53 doesn't wait for the CloudWatch alarm to go into the ALARM state. The status of a health check changes from healthy to unhealthy based on the data stream and on the criteria in the CloudWatch alarm.

![](https://media.tutorialsdojo.com/sap_route53_failover_sns.png)

Your **Application Load Balancer** periodically sends requests to its registered targets to test their status. These tests are called health checks. Each load balancer node routes requests only to the healthy targets in the enabled Availability Zones for the load balancer. Each load balancer node checks the health of each target, using the health check settings for the target groups with which the target is registered. After your target is registered, it must pass one health check to be considered healthy. After each health check is completed, the load balancer node closes the connection that was established for the health check. If a target group contains only unhealthy registered targets, the load balancer nodes route requests across its unhealthy targets.

Each health check will be executed at configured intervals to all the EC2 instances so if the health check query page involves a database query, there will be several simultaneous queries to the database. This can increase the load of your database tier if there are many EC2 instances and the health check interval period is very quick.

**Amazon ElastiCache** is a web service that makes it easy to set up, manage, and scale a distributed in-memory data store or cache environment in the cloud. It provides a high-performance, scalable, and cost-effective caching solution. At the same time, it helps remove the complexity associated with deploying and managing a distributed cache environment.

ElastiCache for Memcached has multiple features to enhance reliability for critical production deployments:

\- Automatic detection and recovery from cache node failures.

\- Automatic discovery of nodes within a cluster enabled for automatic discovery, so that no changes need to be made to your application when you add or remove nodes.

\- Flexible Availability Zone placement of nodes and clusters.

\- Integration with other AWS services such as Amazon EC2, Amazon CloudWatch, AWS CloudTrail, and Amazon SNS to provide a secure, high-performance, managed in-memory caching solution.

The option that says: **Change the target group health check to a simple HTML page instead of a page that queries the database. Create an Amazon Route 53 health check for the database dummy item web page to ensure that the application works as expected. Set up an Amazon CloudWatch alarm to send a notification to Admins when the health check fails** is correct. Changing the target group health check to a simple HTML page will reduce the queries to the database tier. The Route 53 health check can act as the “external” check on a specific page that queries the database to ensure that the application is working as expected. The Route 53 health check has an overall lower request count compared to using the target group health check.

The option that says: **Reduce the load on the database tier by creating an Amazon ElastiCache cluster to cache frequently requested database queries. Configure the application to use this cache when querying the RDS MySQL instance** is correct. Since this is a retail web application, most of the queries will be read-intensive as customers are searching for products. ElastiCache is effective at caching frequent requests which overall improves the application response time and reduces database queries.

The option that says: **Reduce the load on the database tier by creating multiple read replicas for the Amazon RDS MySQL Multi-AZ cluster. Configure the web application to use the single reader endpoint of RDS for all read operations** is incorrect. Creating read replicas is recommended to increase the read performance of an RDS cluster. However, the Amazon RDS MySQL does not have a single reader endpoint for read replicas. You must use Amazon Aurora for MySQL to support this.

The option that says: **Change the target group health check to use a TCP check on the EC2 instances instead of a page that queries the database. Create an Amazon Route 53 health check for the database dummy item web page to ensure that the application works as expected. Set up an Amazon CloudWatch alarm to send a notification to Admins when the health check fails** is incorrect. An Application Load Balancer does not support a TCP health check. ALB only supports HTTP and HTTPS target health checks.

The option that says: **Create an Amazon CloudWatch alarm to monitor the Amazon RDS MySQL instance if it has a high-load or in impaired status. Set the alarm action to recover the RDS instance. This will automatically reboot the database to reset the queries** is incorrect. Recovering the database instance results in downtime. If you have the Multi-AZ enabled, the standby database will shoulder all the load causing it to crash too. It is better to scale the database by creating read replicas or adding an ElastiCache cluster in front of it.

  

**References:**

[https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html)

[https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html)

[https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-types.html](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-types.html)

[https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/WhatIs.html](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/WhatIs.html)

  

**Check out these Amazon ElastiCache and Amazon RDS Cheat Sheets:**

[https://tutorialsdojo.com/amazon-elasticache/](https://tutorialsdojo.com/amazon-elasticache/?src=udemy)

[https://tutorialsdojo.com/amazon-relational-database-service-amazon-rds/](https://tutorialsdojo.com/amazon-relational-database-service-amazon-rds/?src=udemy)
