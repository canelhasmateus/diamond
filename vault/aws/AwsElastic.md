
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


___


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


