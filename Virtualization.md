
Look Ma , no OS

Unikernels and their applications

Possibly the next step in the virtualization, after containers. 

Complexity comes into varities

    Necessary complexity
        Inherent because of the solving of hard problem 
    Unnecessary
        Lack of understanding of the problem
        Organic growth over time


Usual microservices architectures are very hard to debug
    . Very Hard to replicate the environment 1 to 1 
    
https://www.youtube.com/watch?v=W9F4pn9Lngc




Looking at the Application Stack

    Ocaml 
        Application Config
        Application

    Docker
        Language runtime
        Shared Libraries
        Docker RUntime

    Ubuntu
        Os User Processes
        OS Kernel
        Virtual HW Drivers

    HyperV
        Hypervisor
        Hardware Drivers
        Hardware

Largely Redundant
    Isolation provided by the docker runtime, by the user processes and the hypervisor. 
That is all to run a single ap, in a single user in a single server
This is unnecessarily complex

From the developers perspective, there are many black box layers beneath the running application. Layers that the developers are not interacting explicitly: As far as they're concerned , its turtles all the way down.

Overgeneralized systems
    By designed, posix is very generalized

A very large amount of complexity in the kernel regards the necessity to run concurrent users and applications. 
Needless permission checks - a legacy of the timesharing computers of the past.
Efficiency and duplication: Lots of storage and ram for things we're not using, such as floppy disk and tape drives; Unconfigured and unstarted services, and the wasted resources of unnecesary running services. 

This means we have a very large attack surface , in regards to security. 
 
How did we get here? 
    Natural eveolution
    Decades of backwards compatibility
    

Make it work -> Make it RIght -> Make it fast



What is a uni-kernel?
     

Unnecessarily complexity

        Service Metadata
            zookeeper
            consul
            etcd

        Memory Storage
            redis
            memcached
        
        Object storage
            swift stack
            s3
        RDBMS
            Postgres
            MariaDB
        Document DB
            COuchDB
            MongoDB

        COnfiguration Trget
            Ansible
            Puppet
            chef
        
        ORchestration
            Kubernetes
            Mesos
        Traffic Routing
            Nginx HAPROXYUU
