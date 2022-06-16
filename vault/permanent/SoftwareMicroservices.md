# SoftwareMicroservices

The whole of the product is described by the #interaction between multiple *#independent* systems.

This means that the systems can evolve and #scale independently, accordingly to the needs of the #product and the #organization.

This also means that the #teams can be more loosely #coupled since the interaction between services happens through very well-established #interfaces

Unfortunately, having more moving parts means more [[Complexity]]. By the nature of being [[SystemsDistributed]]:

* Its harder to share centralized resources between teams
  * utilitary codebases
  * [[ContinuousIntegration]] scripts
* The freedom of independence can also introduce [[AccidentalComplexity]], both from the heterogeneity of software stacks and development processes.

Another common point of friction for microservices is the challenge of [[SoftwareObservability]].

The sensitivity of the whole system increases when moving to microservices. This led to the creation of techniques such as [[CircuitBreakers]], [[Backpressure]] and  [[LoadBalancing]] - practices often related to such architectures.
