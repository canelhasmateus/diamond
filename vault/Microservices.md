---
tags:
  - fact
  - software
---

# SoftwareMicroservices

The whole of the product is described by the interaction between multiple *independent* systems.

This means that the systems can evolve and scale independently, accordingly to the needs of the product and the organization.

This also means that the teams can be more loosely coupled since the interaction between services happens through very well-established interfaces. This gives the ability to pick the right tool for the job.

By the nature of being \[\[SystemsDistributed]], it is possible to isolate and degrade functionality instead of failing totally.
This comes with a cost - more moving parts mean more \[\[Complexity]].

- Its harder to share centralized resources between teams
  - utilitary codebases
  - \[\[ContinuousIntegration]] scripts
- Tech Heterogeneity
  The freedom and independence can also introduce \[\[ComplexityAccidental]], both from the heterogeneity of software stacks and development processes.
- Resilience
  Another common point of friction for microservices is the challenge of \[\[Observability]].

> \#todo This led to the creation of techniques such as \[\[CircuitBreakers]], \[\[Backpressure]] and  \[\[LoadBalancer]] - practices often related to such architectures.

## References

- [The Evolutionary Architect - Building Microservices](https://candost.blog/the-evolutionary-architect/)
- [Microservices and Their Benefits](https://candost.blog/microservices-and-their-benefits/)
