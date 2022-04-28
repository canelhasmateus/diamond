

Amazon Workspaces
	
	Virtual Microsoft Windows or Amazon Linux Desktops for users

	Eliminates the need of having hardware required for deploying the desktop machines


Amazon AppStream
	

	Fully managed application streaming service.

	Provide users with access to desktop based application from anywhere

	existying desktop applications can be added using this service and then streamed to users
	user AppStream 2.0 client or HTML5 capable browser for application
	No upfront investment or maintaning of the underlying structure.

...



Ops Works
    Stack
    . A set of instances that you want to manage collectivelly, because they have a common purpose. 
    . Handles tasks that apply to the group of instances as a whole, such as manging applications and cookbooks. 
    Layer
        . A component of a stack. 
        . Each layer in a stack must have at least one instance
        . Each instance in a stack must be a member of at least one layer. 
    Recipe
        . ????
    


OpsWork
	
	
	Configuration Management Service

	Configure and operate applications by using configuration management tools such as chef and puuppet 
	Using the service, you define a stack
	In a stack you can have multiple layers





Ec2 Image Builder
	Users can choose to install Amazon managed components such as the  cloudwatch agent and the codedeploy agent.
	AMIS can be automatically distributed to multiple aws regions or shared with other aws accounts
	Os versions can be customized.
	AMI cannot be automatically deployed on ec3 instances. Th einmage pipeline provide an automation framework for building secure ami and ocontainer images on aws
	EC2 Image builder utilizes image reciped, and packer templates cannot be used by ec2 image builder.




___



https://www.whizlabs.com/learn/course/aws-solutions-architect-professional/168/quiz/13603/report/5715966
question 53 is ?????


AWS Nitro Enclaves exist.




AppStream supports federated sign-in using SAML 2.0
