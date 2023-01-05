# Pattern

___

## CongestionControl

 The most common way of doing congestion control is : start sending small amount of data ( 14kb ) . If it gets through, double the packet size, until we hit a packet loss. THen, we back down a bit.

> [[PatternExponentialBackoff]]

In http 1.1, each of the 6 connections stablished by the browser will follow this process independently. That means that packet loss in one connection will NOT make another connection have a smaller packet size.

In http 2, since all these connections are now multiplexed into a single one, their congestion control become coupled.

One example where http 11. 1can lose is on enetworks with limited available bandwitdht: the 6 connections each grow their send rate individually, causing them to overload the network quite quickly, after which they all have to back down and find their co-exitent bandwidth limit through trial and error

___

# PatternIdempotency

idempotency :

- delete-write pattern

___

## Problem Frames

<https://en.wikipedia.org/wiki/Requirements_analysis>

Requirement ANalaysis

- Documented
- Actionable
- testable
- traceable
- related to identified business needs or opportunities
- defined to a level of detail sufficient for system design

<https://en.wikipedia.org/wiki/Problem_frames_approach>

Problem Analysis is an approach to be used when gathering requirements and creating specifications for computer software

- The best way to approach requirement analysis is through a process of parallel - not hierarchical - decomposition of user requirements.
- User requirements are about relationships in the real word , not about the software or even the interface.
  
Tools for describing specific problems

- phenomena ( of various kinds , including events )
- problem context
- problem domain
- solution domain
- shared phenomena ( ehich exist in domain interfaces )
- domain requirements
- speciffications ( which exist at the problem domain - machine interface )

Tools for describing classes of problems
"A recognized class of problems is called a problem frame."
In a problem frame, domain are given general names and described in terms of their important characterisitscs,.

- Causal ( deterministic )
- Biddabble ( can be asked to respond, but not necessarily predictable - usually people)

Problem Frames

- Required behaviour
- Commanded behaviour
- Information Display
- SImple workpieces
- Transformation

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

- Recognize instaces of problem frames
- More than one tempo

*
