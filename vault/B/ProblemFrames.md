# ProblemFrames

Examples

* [[OnLeet1020]] can also be implemented differently, by constructing a [[AdjacencyMatrix]] for each of the islands, and exponentiating several times, simulating [[RandomWalks]].
    By doing it enough times to reach any border, we can confidently state that any not-reached island is unreachable. Of course, this approach is not algorithmically efficient.


___


An important part of solving problems is looking at them the right way.

* The read-list situation becomes easier to manage when looking at it as a stream.
* Thinking of it as a stream lends itself to be handled just like any other stream.
    Thinking of it as an application of data engineering buys us the scheduling, composition and error handling of the processes in the space.
* The same goes for the flowtime situation: Thinking of it as a scheduling problem looks like the right abstraction since Gantt charts fit these visualizations perfectly.
* The same goes for the whole Gnosis mentality. Working with text and locally buys us the simplicity, flexibility and ease of use necessary to embed this as part of our life, instead of being a source of stress and emotional pain that most chores give us.


Its easy to easy to think about it and realize it post-hoc, after two given possibilities are presented and compared, and one is declared as a winner.
    However, how do we go about finding out these delimitations in a structured manner?
    Sure, Noticing patterns while practing helps. However, this doesn't seen very scientific to me... [[expand]]

___



<https://en.wikipedia.org/wiki/Requirements_analysis>

Requirement ANalaysis

* Documented
* Actionable
* testable
* traceable
* related to identified business needs or opportunities
* defined to a level of detail sufficient for system design

<https://en.wikipedia.org/wiki/Problem_frames_approach>

Problem Analysis is an approach to be used when gathering requirements and creating specifications for computer software

* The best way to approach requirement analysis is through a process of parallel - not hierarchical - decomposition of user requirements.
* User requirements are about relationships in the real word , not about the software or even the interface.
  
Tools for describing specific problems

* phenomena ( of various kinds , including events )
* problem context
* problem domain
* solution domain
* shared phenomena ( ehich exist in domain interfaces )
* domain requirements
* speciffications ( which exist at the problem domain - machine interface )

Tools for describing classes of problems
"A recognized class of problems is called a problem frame."
In a problem frame, domain are given general names and described in terms of their important characterisitscs,.

* Causal ( deterministic )
* Biddabble ( can be asked to respond, but not necessarily predictable - usually people)

Problem Frames

* Required behaviour
* Commanded behaviour
* Information Display
* SImple workpieces
* Transformation

"a software development project aims to change the problem context by creating a software machine and adding it to the problem context, where it will bring about certain desired effects."

A domain is simply a part of the world that we are interested in . It consists of phenomena ( indifviduals, events, states of affairs, relationships and behaviours. )

Domain interfaces are not dataflows or messages. An interface is a place  where domains partially overlap, so that the phenomena in the interface are shared phenomena - they exist in both of the overlapping domains.

In a sense, problem frames are problem patterns.

BookAnalysisPatterns
martin fowler

"If this is the solution, what was the problem?"

<https://people.csail.mit.edu/dnj/teaching/6898/lecture-notes/session8/slides/mj-problem-frames.pdf>
The customer requirement is for some effect ( or property or behaviour in the problem domain )
"the requirement adds a constraint to the domains's intrisic properties or behaviour"

Real world phenomena may be untimely for dispaly - must be remembered summarised, extrapolated

Heuristics for decomposition

* Recognize instaces of problem frames
* More than one tempo

*
