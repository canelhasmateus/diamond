'

# Cloud Architectures

Public cloud:
. Everything inside a provider ( GCP , AWS , Azure  , ... )

Private CLoud

- Running Independently
- OpenStack Ansible
  You have the benefits of the cloud inside your own data center
- You gotta manage your own cloud

Hybrid Cloud

- Data Center + cloud
- Ideal for migratoin
- great for performance
- good for Disaster Recovery
  Data Center > AWS Direct Connect > Customer VPC Gateway > Cloud VPC.

Pure Cloud

- Great for startups
- Highly scalable
- Very agile
- Organization > AWS Direct Connect > Customer VPC  > VPC

Why extend private cloud to the public?

- Our data center cannot handle peak loads such as christmas
- Offload some of those things
- Then you have a hybrid cloud.

___

Connectivity

Over the Internet with a VPN: Providing a private network over  a public network

Why

- Internet is not secure.
  You'll get hacked
- Take care of routing
  Internet routing is *very* complex
  Can't take Private ip addresses and connect them via public internet . They are non-routable.
- VPN's depend on the internet.
  Internet is not consistent ( Best Effort Connectivity).

  ```
    Tools
        . Frame Relay
        . GRE Tunnels
        . BGP
        . [[IPSec]]
        Logical
            Data Center > VPN ( IPSEC ) > Cloud
  ```

Pseudo-Wire to the cloud

WHen you set a vpn between your data center and your vpc, its usually a site-to-site vpn.
There also exists a Multi-Site VPN.
Both sites terminate the vpn connection

```
Can use Dynamic or Static routing.
```

___

## CloudStorage

```
   .  Network attached. So your network becomes a bottleneck.
    
    . Can be placed wherever it makes more sense, such as attached directly to an instance. 
```
