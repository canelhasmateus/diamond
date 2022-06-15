# SoftwareMicroservices

The whole of the product is described by the [[interaction]] between multiple *independent* systems.

This means that the systems can evolve and scale independently, accordingly to the needs of the [[product]] and the [[organization]].

This also means that the teams can be more loosely [[coupled]], since the interaction between services happen by very well stablished [[interfaces]].

Unfortunately, having more moving parts means more complexity. By being inherently [[distributed]]:

* Its harder to share centralized resources between teams
  * utilitary codebases
  * [[Continuous Integration]] scripts
* The freedom of independence can also introduce [[Accidental complexity]] , from the heterogeneity of software stacks and development processes.
* Don't forget about the [Fallacies of Distributed systems](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)
  
Another common point of friction for microservices is the challenge of [[ Observability]].

The sensisitivity of the whole system as a whole increases when moving to microservices. This leads to the creation of techniques such as [[Circuit Breakers]] , [[Breakpressure Mechanisms]] and  [[Load Balancing]], that are often related to such architectures.

___

```todo
Using only 1 Availability Zone , its possible to achieve 99.9% Availability. With 2 Availability Zones, 99.99% is achievable, and for more availability, even more are necessary.
Always use at least 2 Availability Zones
```
