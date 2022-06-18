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
