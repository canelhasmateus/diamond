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

##

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

AWS Config
    . Watches the account configuration
    . Does not impede anything, just notifies.  

AWS Organization
    SCP
        . Determine what services and actions can be delegated by administrators to the users and roles in the applied accounts.
        . Blocks every access that is not explictly allowed or that is explictly denied

Tags
    . Aws offers a varierty of tools to help you implement proactive tag governance by ensuring that tags are consistently applied when resources are created

    . Cloudformation has the Resource Tags Properties.

    . Aws Service Catalog 

AWS Service Catalog
    . Creates and manage catalogs of services ;
    .. Enables self-service capability for users

# Cost

the billing console data can not be sent to sns.
It can be sent to redshift.

...

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


    . Multi Account Strategies
        .. How to minimize blast radius?
        .. Breaks environment in many smaller accounts
        .. Organizations / Organizational units
            ... Service Control Policies
                :>  

    . Who is responsible for what?
        .. AWS is responsible for the cloud, you're responsible for your vpc.
    . Principle of least security.
    . Service Catalog
        .. Deploy approved services
        .. 
    . System Manager Parameter Store
        .. When we have lots of passwords
        .. Completely Managed
        .. Use it alongside KMS
___
