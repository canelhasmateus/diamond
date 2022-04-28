Amazon Cloudfront with S3
	
	The benefits of using cloudfront with s3

		serve static web site
			-> No server-side rendering.
		
		Decrease latency
		Also can make use of Amazon Cognito
			. Login with Facebook or Google
		

	An example

	>> ORIGIN ACCESS IDENTITY




CloudFormation does support OpsWork as a template.
CodePipeline does support OpsWork as a deployment Target ( https://docs.aws.amazon.com/opsworks/latest/userguide/other-services-cp-chef11.html )
	OpsWork should be put into the Deploy Stage of the pipeline.
	The Stacks / Layers should already exist.



About Cloudfront Signed URL

	https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-choosing-signed-urls-cookies.html



____



CloudFront
    . CDN
        .. Improves efficiency and internet performance
        .. Has Edge Locations throughout the world



___



ElastiCache
	
	What is ElastiCache
		.

	Compare different caching engines
		If you are looking for simple object caching, consider memached
		if there is a requirement to run large cache nodes, consider using memcached

		if you need to store complex data types such as lists, hashes, bit arrays, then consider using redis
		If you need to implement sorting and rankings of datasets, consider using redis
		If you need high availability of your cache store with the help of multiple availability zones along with failover, then use redis
		If needs compliance such as pci and encryption, use redis
