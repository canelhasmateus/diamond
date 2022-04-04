An [[software]] architecture refers to the [[topology ]]and disposition of its software elements, by means of which the software deliver its [[behaviour]].


# [[Monoliths]]

The whole of your system is served as a single "software application". It might have and encompass the behaviour of multiple modules, but the final product would be a single "[[Artifact]]", such as a jar.

This is great in regards to [[complexity]]:
    No [[network]] [[partitioning]] means less [[errors]].
    Less moving parts mean less intellectual burden of [[understanding]] the entire system

However, it also has problems in [[scalability]]:
In the technical side, it scales worse horizontally. Since [[resources]] are shared etween the modules, scaling one means scaling another, even it this second one does not require it.

In the human side, it also scales worse, since more developers need to compete for [[limited resources]], such as [[build pipelines]], [[deployment slots]], [[database]] tables, and source code changes.
    
This requires lots of [[coordination]],  which can become a [[bottleneck]], specially in bigger teams.

# [[Microservices]]
    
The whole of the product is described by the [[interaction]] between multiple *independent* systems.

This means that the systems can evolve and scale [[independently]], accordingly to the needs of the [[product]] and the organization. 

This also means that the teams can be more loosely [[coupled]], since the interaction between services happen by very well [[stablished interfaces]].


Unfortunately, having more moving parts means more complexity. By being inherently [[distributed]], its also harder to share centralized resources ( such as utilitary codebases, [[CI]] scripts ) between teams. 

Also, don't forget about the challenges and perils of [[network]] communication. 

The freedom of [[independence]] can also introduce [Accidental complexity ]] , from the  heterogeneity of software stacks and development processes. 

Another common point of friction for microservices is the challenge of [[ Observability ]].


The sensisitivity of the whole system as a whole increases when moving to microservices. This leads to the creation of techniques such as [[Circuit Breakers]] , [[Breakpressure Mechanisms]] and  [[Load Balancing]], that are often related to such architectures. 

