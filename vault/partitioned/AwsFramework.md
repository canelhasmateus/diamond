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

