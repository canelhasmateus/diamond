## Code Review

"hey, I appreciate the contribution! I found some things troublesome with it, so I put it on the back burner because I wanted to discuss it with you. Have some time for a chat? I have some ideas for improvement!"

## Debugging

 treating every edge case and bug as a problem to bne solved rather than a piece of information to use in your deisgn

## Dev

<https://www.youtube.com/watch?v=ZQnyApKysg4>

half assed is ok if you only need half of an ass
half assed , but the right size of the ass

tar pit of immediacy

proficiency fatalism

strive to achieve the full range of ass

## Observability

<https://blog.acolyer.org/2016/09/12/on-designing-and-deploying-internet-scale-services/>

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
Though I think "count of issues" is a very poor metric, you're better off with an uptime metric. And "100%" is the only strictly-incorrect number to pick for uptime, because it is literally impossible

my (super-unscientific, don't hold me to this) rule of thumb for business people is "every extra 9 costs you 10x". So do you need 99.9% uptime or 99.99%?

<[Thoughts on OKRs :: joe blubaugh](https://joeblu.com/blog/2022_05_okrs/)>

___

## Coroutines

Separate from  generators

Generators abstract iteration of values
Coroutine abstract consumption of values

Generators pull data through the pipe with iteration
Coroutines push data into the pipeline with send

Coroutines and state machines

Multitasking is implemented by the Operational System.
    Usually by means of Either Interrupts or Traps
    yield is a trap

___

## OOP

<https://robotlolita.me/articles/2011/understanding-javascript-oop/>

"The prototypical OO model brings in some new ways of solivng old problems, in an more dynamic and expressive way. It also presents new and more powerful mode3ls for extensibility and code-reuse - it does not however, give you contracts. There are no static guarantees that an object will alqways have a given set of properties ... "

## Complexity

<https://blog.acolyer.org/2015/03/20/out-of-the-tar-pit/>

Complexity lies aty the root of our problems withy software systems.

Separating the essential complexity from any accidental complexity is a better way of building software

How do we try to understand systems?
    . Can go somewhere by outside-in ( blackbox ) approach, but it has limits
    . Informal Reasoning
        .. case-by0base mentalk simulation of behaviour.
        .. Greatly hampered by state
        .. As the number of states, and hence the number of possible scenarios that must be considered grows,  the effectiveness of informal reasoining buckles.
        .. For every bit of state that we add, we double the total number of possible styates

Stateful procedures contaminate everything it touches.

After state, control logic is the biggest source of complexity.
    . When a programmer is forced, ( through use of a language with implicit control flow ) to specify the congtrol, he or she is being forced to specigfy an aspect of how the system syhould work rather than simply what is desired.
    . Like basic control such as branching, but as oppsosied to sequencing, concurrency is normally specxified explicitly in most langues. the most common moderl is the shared state concurrency, in which specification for explicit synchronization is required. the impacts that this has for informal reasoning asre well knwon , and the dificulty comes from adding further to the number of scenarios that must mentally be considered as the program is read.

Complexity breeds complexity
    . Duplication is a prime example. If ( due to state, control or code volume ) its not clear that the functionality already exists, or it is too complex to understand wherer what exists does exactly what is required, there will be a strong tendendcy to duplicate, particularly true in the presence of time pressures
    . The more that is possible within the language, the harder it is to understand systems constructed in ti.

OOP is inherently stateful , because it relies on state ( and identity ) contained within objects.

Essential complexity is inherent , and the essence of the problem ( as seen by the users )

Accidental complexity is all the rest - complexity with which the development team would not have to deal with in the ieal world
    . performance issues
    . suboptimal language
    . infrastructure

sometimes, accidental satete is required:
    . Performance, for efficiency
    . Ease of expressions - accidental state can be the most natural way to express logic in some casese.

We should create syshtems that are aware of these concepts: They should allow for the accidental but useful complexity, but encapsulate it completely away".

"The system should still function completely correctly if the "accidental but useful" bits are removed, albeit possibly unnaceptably slow. "

![](2022-04-01-14-34-23.png)

___

## Distributed Systems

* Don't forget about the [Fallacies of Distributed systems](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)

push vs pull

push is stateful

client state information in the server doesnt scale

___

<[State drift · Erik Bernhardsson](https://erikbern.com/2016/09/08/state-drift.html)>

How to build self-correction into systems?

`state drift` -> two components that synchronize state ( like a producer and a consumer )-> If care isn't taken, the state in the observer will start to drift away from what it's supposed to be.

Examples:

* Service updates over email
* Webhooks -> rarely redelivery guarantees
  
* If you lose a single delta, and there is no way to self-correct, it's game over.

We can do full state reconciliation
Examples:

* Video compression and key frames

Or we can have strong guarantees of the deltas , such as `Kafka`
