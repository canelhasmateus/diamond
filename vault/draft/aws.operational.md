Disaster Recovery

    - Backup and restore (RPO in hours, RTO in 24 hours or less): Back up your data and applications using point-in-time backups into the DR Region. Restore this data when necessary to recover from a disaster.

- Pilot light (RPO in minutes, RTO in hours): Replicate your data from one region to another and provision a copy of your core workload infrastructure. Resources required to support data replication and backup such as databases and object storage are always on. Other elements such as application servers are loaded with application code and configurations, but are switched off and are only used during testing or when Disaster Recovery failover is invoked.

- Warm standby (RPO in seconds, RTO in minutes): Maintain a scaled-down but fully functional version of your workload always running in the DR Region. Business-critical systems are fully duplicated and are always on, but with a scaled down fleet. When the time comes for recovery, the system is scaled up quickly to handle the production load.

- Multi-region (multi-site) active-active (RPO near zero, RTO potentially zero): Your workload is deployed to, and actively serving traffic from, multiple AWS Regions. This strategy requires you to synchronize data across Regions.

    Backup and Restore -> Pilot Light -> Warm StandBy -> Multi-Region

    "The difference between pilot light and warm standby can sometimes be difficult to understand. Both include an environment in your DR region with copies of your primary region assets.  However, the pilot light cannot process requests without additional action taken first, while warm standby can - although sat reduced capacity levels.

_)__

As an architect you need to use the database change ( trasaction ) longs, along with the backups to restore your database to a point in time. .
If you keep taking backups every 15 mins, the database users will face a lot of outages durings the backup ( due to i/o suspension especially in a non-az deployment )

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

...

Well Architected Framework

 Design principles, guidelines and best practices that enable the solution architects to review and improve the existing cloud-based architecture and understand the business impact of the  design related decision

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

...

Availability

  Using Multi AZ
   . Deploy multiple subnets as part of the VPC.
   . Make sure that both subnets are not at the same availability instances

  Using Load Balancer
   .
  Using Elastic Autoscaling
   . Scale based on demand
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
