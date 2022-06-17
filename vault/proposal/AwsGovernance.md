# Governance in [[Aws]]

* [[AWS Config]]
  * Watches the account [[configuration]]
  * Does not impede anything, just notifies.  
* [[AWS Organizations]] Service Control Policies
  * Determine what services and actions can be delegated by administrators to the users and roles in the applied accounts.
  * Blocks every access that is not explicitly allowed or that is explicitly denied

* [[Tags]]
  * Uses
    * Technical Tags: Name, Application Id, Application Role, Cluster, Environment, Version
    * Tags for [[Automation]]: Date/Time, Opt in/Opt out, Security
    * Business Tags: Owner, Cost Center / Bussiness Unit, Customer, Project
    * [[security]] Tags: Confidentiality, Compliance
  * Aws offers a variety of tools to help you implement proactive tag governance by ensuring that tags are consistently applied when resources are created
    * [[Cloudformation]] has the Resource Tags Properties.

* AWS [[Service Catalog]]
  * Deploy approved services
  * Enables [[self-service]] capability for users
  
* [[System Manager Parameter Store]]
  * When we have lots of passwords
  * Completely Managed
  * Use it alongside [[KMS]]
