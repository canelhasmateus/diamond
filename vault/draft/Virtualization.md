
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


___


docker search

docker image inspect 
docker container pause


Non-Persistent storage is at:
	/var/lib/docker/<storage-driver>
	c/programdata/docker/windowsfilter


~Volumes are independent objects that can be mapped to multiple containers
 

docker image history


A single host can have a number of running containers, talking to each other and external networks.



Network
	Creation of networkds, connectivity and isolation area all handled by drivers
			On linux  	they include birdige, overlay, and macvlan
			On windows 	they include nat, overlay, transparent, l2bridge

		There exists third party network drivers that acts as plugins


	Bridge Mode
		When docker daemon starts, creates a virtua interface called docker0
		Assign Ip Address from the private address range that is currently unused on the docker host
		This subnet is suually /16 and is shared between all containers on the docker host
		Docker0 is a virtual ethernet bridge which is created in software inside the kernel of the docker host

		Every time a container is created, Docker creates two interfaces
			One interface is given to the container and called eth0
			The other interface veth[x] is ggiven to the host and bound to bound0 bridge
			Inside the host kernel, the two interfaces are linked so that packets can travel between them.
			The container's eth0 interfaces are assigned an ipaddress from the private subnmet and a random mac address

		Called Single-host bridge network
			Only exists on a single docker host and can only connect containers that are on the same host
			Every Docker host gets a default single-host bridge network
			On linux its called bridge, and on windows its called nat
			All new containers are automatically registered with the embedded docker dns service
			allows to ping/resolve names of all other containers in the network.


	Overlay mode ( connect across multiple hosts , swarn )
		Allow a single network to span multiple hosts
		containers on different hosts can communicate directly
		Ideal for container-to-contaier communication including container-only applications
		Docker provides a native driver for overlay networks.

		VXLAN:
			Creates a virtual Layer2 Network on top of an existing Layer3 infrastructure

	Host Mode ( Disables network isolation, port mapping )
	MacVLan ( Assigns a mac address to a container and route by mac )
		Called Transparent on windows.
		Requires the host NIC to be in promiscuous mode ( used by packet sniffers )
			Prosmicuous mode allows all frames to go through vs just the ones for the destination.



		??? Linux subinterfaces
		??? Manifest Files
		??? etcd database
		
Swarm
	Close to kubernetes, but simpler.


