
s://blog.acolyer.org/2016/09/12/on-designing-and-deploying-internet-scale-services/

good ops starts in design and development
    . 80% of operation issues originate in design an development
    . When systemss fail, there is a natural tendency to look first to operations isince that is where the porblem actually took plance

Three tenets

    Expect failures
    Keep things simple
        . complexcity breeds problems, simplet things are easier to get right
    Automate everything
        . people make mistages, sleep and forget things
        . Automated processes are testablle, fixable, therefore ultimately much more reliable. 

Very unusual combinations of failures maye be determined sufficiently unlikely that ensureing the system can operate through them is uneconomical. Be cautious when making this judgement. We've been surtprised at how frequently unusual combinations of events take plance when running thousands of servers that produce millions of opportunities for component failures each day.

Recognize that multiple versions willl be live during rollout and production tresting
    . Versions n and n + 1 of all comoponents need to coexist peacefully.

Partition the system in such a way that partitions are infinitely adjustable and fine-gfained and not bnounded by any real worlds entity ( person, collection, customer )
    . If the partition is by company, then a big company will exceed the size of a singler partition.
    . If the partition is by name prefix, then eventaully all the P's, for example, won't fit on a single server.

Designing for automoation may involve significant service-model constraints
    . Automating administration of a service after design and deployment can be very difficult.
    Secussful automation requires simplicity and clear , easy-to-make operational decisions.
    This in turns depends on a careful service design that, when necessary, sacrifices some lastency and trhoughput to ease automation. The trade off is often difficult to make, but the administrative savings can be more than an order of magnitude in high scale services.
    . Example: choosing synchornous replication in order to simplify the decision to failover, avoiding the complications of asynchronous replication.

Keep configuration and code as a unit throughout the lifecycle.

The most appropriate level to handle failures is the service level
    . Its where the full context is available.
    . Build redundancy into the service rather than dependending upon recovery at tge lower software layter.

Careful with depdencies.
    . Depdendecy management in high-scale services often doesn't get the attention the topic deserves. As a general rulew, dependence on small components or services doesn't save enough to justify the complexity of managing thme.

    Dependencies do make sense when: 
        . Components being dependende upon are substantion in size or compolexity, 
        . The service being depended upon gains its value in being a single, central instance

    If introducing dependencies:
        . Expect latency
        . Isolate failures
        . Use proven components
        . Implement inter-service montingn and alerting
        . Decouple components so that operation can continue in degraded mode if a dependency fails 
    Dependent services and produces of dependent components need to be commited to at least the same sla as the dependening service. 

Don't bother trying to create full stagin environments as close as possible to production.
    . Cost goes assyumptoic and rapidly approaches that of prod.
    . Take new service releases through standard unit, functional, and production test lab testing and then into limited production as the final test phase ( canary )

    The production system must have sufficient redundancy to be able to quickly recover from a catastrophic failure

    Data corruption or state-related failures have to be extremely unlikekly

    Errors must be detected and the engieering team must be monitoring system health of the code in test, and 

    it must be possible to quickly roll back all changes and this roll back must be tested before going into production. 

    "A potentially counter-intuitive approach is deployment mid day. 
    At night, there is greater risk of mistakes. If anomalies crop up when deploying in the middle of the night, there are frewer engineers around to deal witht hem. "

Use production data to find problems
    Quality assurance in large-scale system is a data mining and visualization problem, not a testing problem. Everyone needs to focus on getting the most out ofo the volumes of data in a production environment.

Make the development team responsible
    . If the development team is frequently called in the middle of the night, automation is the ikely outcome. If operations is frequently called, the usual reaction is to grow the operations team.

Instrumenteverything , datta is the most valuable asset.
It is vital that each service have a fine grained knob to slowly ramp up usage when coming back online or recovering from a catastrophic failure.

<https://blog.acolyer.org/2016/09/12/on-designing-and-deploying-internet-scale-services/>
<https://gist.github.com/acolyer/95ef23802803cb8b4eb5>

___

<https://www.youtube.com/watch?v=pLRztKYvMLk>

We use the fundamental blocks fo infrastructure all the time, but Some of the fundamentals problems do not go away;

"Uses hash cavity 2 to get a temporary view over the time series "

Cacheing is a 'solved' problem
many solutions
    . Mcached
    . Redis
    . SlimCachce
    . FatCache
. Many Ways to fall below SLA
    . Tail Latencies
    . QPS

. Hotkeys and DDOS
    . Backpressure is not part of the design

. Hard to debug

.  capacity planning surprises
    .. external fragmentation is a bitch
    .. Connections keep a live
    .. Running on containers means that going over the planned resources will kill your job, which is *very* bad for stateful services, like cache.

Cache we want
    . Covers all our use cases
    . Easy and fun to work on
    . Is production ready
        .. What is production-readiness, even?
        .. Eg. Log Rotation -> Can't use their solution without their context

Production Ready
    . Predictable
        .. Tail-Latency and performance
        .. Failure Behaviour and degradation
        .. Resource footprint
    . Observable
        .. Ready to be monitored
        .. Debuggable
        .. Reveals internal flow
        .. Analytics-friendly
    . Flexible
        .. configurable
        .. Composable
        .. Quick to develop features

Structural Integrity first , then code-reuse
    . Careful with over-generalization

Log , Stats, Config
    . Ubiquitous paradigms
    . Make them cheap, configurable
    . Make them composable
        .. Waitless Logging
        .. Lockless Stats
        .. Modular Config

Cuckoo hashing ( ??? )
