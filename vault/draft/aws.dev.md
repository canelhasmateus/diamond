AWS Code Commit
    - VCS Control service
    Primarily used by developers to store and version their code
    Secure, scalable managed service for hosting private git repositoies
    devs can review and comment on other code changes before they ar emerged
    no limit on the size of the repository
    integration with other aws aand other thrid party services

AWS Code Pipeline

    Continous delivery service
    Model and automate the different steps required for the release of a software
    Control every stage of the relase lifecycle of your application
    Also add manual steps in the relase pipeline in case approaves are required at any stage

AWS Code Build
    Fully managed build service
    Automate build procces for your software code
    Choose where the source code comes from
    decide which build environment to suse
    define the diffrent build steps

AWS Code Deploy
    This is a deplyment service that can be used to automate application deployments
    The applications can be deployed asutomatically onto amazon ec2 instances,    on-premise , lambda functions or ecs

CodePipeline

    Source ( CodeCommit )
    Build ( CodeBuild )
    Deploy ( CodeDeploy )

Blue Green Deployments
  
 Deployment approach that is used to provide near zero-downtime when new versions are relased
 allows to quickly roollback changes
 Two identicals environments that are running different verions
 The blue environemtn is used to depict the current application version.
 Green environment has the new version

 cd
 Benefts

  Ensure application is running as it should before the cutover
  Can have a set of users approve the environemnt before the switch over
  Here there is less risk when you want to deploy a newer version of your application
  Can always roll back

 How to Implement:
  Route 53
   Create Record in Route53 using Weighted Routing Policy

about canary and blue green deployments

 <https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/comparison-of-blue-green-deployment-techniques.html>
 <https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/clone-a-stack-in-aws-opsworks-and-update-dns.html>
 <https://docs.aws.amazon.com/whitepapers/latest/blue-green-deployments/when-bluegreen-deployments-are-not-recommended.html>

Rolling Deploymnets

 Elastic Beanstalk

  Suppose : Load Balancer + several ec2 instances

 AWS Lambda

  Within lambda, a new version of the function is created
  The system then automatically routes traffic slowly to the new application version
  The configuration can be done using AWSCodeDeploy and AWS SAM

 CloudFormation
  You can use AutoScalingRollingUpdate Policy to define how rolling updates are handled when aws cludformation is used to deploy an autoscaling group
  Here instruct wheter the updates need to be done in batches or all at once.
