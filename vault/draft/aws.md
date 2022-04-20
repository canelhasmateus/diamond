
Disaster Recovery
    
    - Backup and restore (RPO in hours, RTO in 24 hours or less): Back up your data and applications using point-in-time backups into the DR Region. Restore this data when necessary to recover from a disaster.

- Pilot light (RPO in minutes, RTO in hours): Replicate your data from one region to another and provision a copy of your core workload infrastructure. Resources required to support data replication and backup such as databases and object storage are always on. Other elements such as application servers are loaded with application code and configurations, but are switched off and are only used during testing or when Disaster Recovery failover is invoked.

- Warm standby (RPO in seconds, RTO in minutes): Maintain a scaled-down but fully functional version of your workload always running in the DR Region. Business-critical systems are fully duplicated and are always on, but with a scaled down fleet. When the time comes for recovery, the system is scaled up quickly to handle the production load.

- Multi-region (multi-site) active-active (RPO near zero, RTO potentially zero): Your workload is deployed to, and actively serving traffic from, multiple AWS Regions. This strategy requires you to synchronize data across Regions.

    Backup and Restore -> Pilot Light -> Warm StandBy -> Multi-Region

    "The difference between pilot light and warm standby can sometimes be difficult to understand. Both include an environment in your DR region with copies of your primary region assets.  However, the pilot light cannot process requests without additional action taken first, while warm standby can - although sat reduced capacity levels. 


VPC Peering connections allow access to part of the CIDR block, a specific CIDR block or a specific instance within the peer vpc. 


I realize that often, i miss these question because i'm too focused on the "what", and slip on the 'how'. 
    . "Authorizes access to the certificate store only for the cybersecurity team and then adding a configuration to terminate the ssl on the ELB"



S3 
    Accelerate


    ![](2022-04-17-18-16-46.png)
p
