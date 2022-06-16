
# Vidoe 4

Autoscaling
 Autoscaling is mainly about capacity management
 Montior applications and provision capacity to maintain a steady, predictable performance at the lowerst cost.

 There are some resources at the associate level

 How does the autoscaling workd?

  Launch COnfiguration
   A tempalte for the instance configurtation that is used by the autoscaling group to launch the instance
   Specify the AMI, Instnace type, key pair . . .

  Autoscaling group
   Collection of ec2 instances that are groupoed together to do the job

  Scalingoptions
   Several ways to scale the groups
   Scheduled scaling,
   Dynamic scaling

   Minimum, Mximum, Desired
   Starting by launching Desired Capacity instances
   Continues to maintain the same number -> If any becomes unhelatly, kills and replaces it
   An autoscaling can launch on demand instance, spot instances or both]

   There is a logic to terminate instances:
  
  Pending -> Inservice, TZerminating, Terminated
  Detach

  Lifecycle Hooks

Elastic Load Balancing

 Automatically distribute traffic between multiple targets, such as ec2 instanes, containers, ip addresses and lambda funcitons

 Supports health check to forwards traffic to only healtyh
 Supports hybrid load balancing ( cloud, on prem)

 Cross-zone load balancing:
  Distributes loadgs between different availability zones

 Two main types:
  Application Load Balancer ( layer 7 )
  Networj Load Balancer ( layer 4 )
  Classic Load Balancer ( Deprecated)

  OSI LAyers:
   ...

 Application Load Balancer:
  There are resources ath the other courses

  Listener, Rules, Target Groups, Healthy checks

  Monitor Healthy checks
   -> Selects healthy

  Follows rules to forwad traffic
  if path contains /Picutres, do A
  else, do B

 Networkd Load balancer

  Configure the logic based on the port

  If the request comes for port 80, do A
  Else do B

___

Network Load Balancer

 What is the network load balancer
  . Works at the layer 4 of the OSI Model.
  . If we want to have a simple TCP load balancer, we can use these.
  . Able to handle millions of request per second
  . Can be enabled to work from different availability zones for added HA
  . Can be asswigned static addresses
  . Each instance on the target group can listen on a different port number.
  . Since it works at the tcp layer, it is faster the the apllication load balancer.

 Implement network load balancer

___

When using an network load balancer, you can keep the source ip address if specifying targets by instance id.

...

...

Load balancer Listener

http
https ( secure Http )
TCP
SSL ( secure tcp )

<https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html>

___

More information on ELB Sticky Sessions:

 The load balancer uses a special cookie to track the  instace fro each request oto each listener. When the load balancer receives a request, it first check to see if this cookie
 is present int the request. If so, the request is sent to the instance specified in the cookie. If there is no cookie, the load balancer chooses an instance based on the exisitng load
 balancer algo. A cookie is inserted into the response for binding subsequent requests from the same user to that instance.

...

elastic load balancer and tcp / proxy

<https://aws.amazon.com/blogs/aws/elastic-load-balancing-adds-support-for-proxy-protocol/>

<https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html>

...

Amazon EC2 AutoScaling

 What is
  Application Deployed -> Many Users ->  Too much load.

  WorkArounds:

   Change Instance Type. -> Vertical Scaling -> Limits

  Best is:

   Scale out the number of EC2 instances.

 Working With

  Define the launch configuration:
   define the types of instances
    Define the Group
    For the scaling group, you can perform a manual scaling.
    We can perform scheduled scaling
    Also can perform scaling based on metrics.

 >> apt-get stress

        . Load Balancer
            .. Distributes network and application traffic
            .. Improves availability and performance
                ... sends traffic accross multiple systems, removing SPOF
            .. Network ( Layer 4 )
                ... Fast! 
                ... By default, sticky
            .. Application ( Layer 7)
                ... Smart!
                ... By default, routes to lowest load.
            .. AutoScales themselves
                ... 
            .. Health Checks

            .. SSL Termination
                .. Removes Encryption load from the application
                ... Stateful
                ... Great for rapid changing patterns
            .. Load Balancer Sandwiches
                ... If you need greater functionality, such as F5, you can go to marketplace. However, not managed.
                ... Can connect a load balancer to another loadbalancer.
