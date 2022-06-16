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

They call this Functional Relational Programming

"Feeders components converts inputs into relational assignments - cause changes to the essential state.
Observer components generate output in response to changes which they observe."
