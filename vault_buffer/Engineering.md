## Problem Solving

Bottom-Up Approach

- Solve sub-problems in increasing order
- Fill in a table of sub-problem solutions
- Compare several smaller solutions to determine the best solutions for the current problem

Dynamic Programming

- Divide into sub-problems
- Solve sub-problem recursively
- On each recursive call, Start by checking if it is already solved, finishing by caching into the
table.

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

___

# Control Theory

Control Schemes

    Proportional Control

Poles

Zeros

S Plane

Root Locus

Control Theory

    Sketch a root locus

    Proportional COntroll is the simplest control
        .Not necessarily solves all porbolems
        .sometimes you can move root to the left half plane or have a negative real part
        . interesting to understand how poles and zeros affect the root locus. 
         
         in transfer functions, the numerator controls the system behave different due to force inputs. 
    
        when nPoles <> nZeroes :
            if nPoles > nZeroes, the extra poles goes to infinity
            if nPoles < nZeroes, the extra zeros comes from infinity

<https://www.youtube.com/watch?v=eTVddYCeiKI>

###

Control system
    Root Locus Method

    System
        Known Parameters
        Unknown Parameter K
            Changing this affects poles
                Poles are the values of s that make the G(s) to blow up to infinity
    
    There are two questions here
        
        Design
            what value of K should we choose to meet my system performance requirements?

        Effect of variation
            What are the effect of a variation?
            How sensible is your system to slight deviations to k

        
    The S -plane is drawn in a x-y plane, with the real part in the x axis and the imaginary part in the Y axis. 
    Each location in the s plane correspond to a waveform in the time domain, characterized by e^st
        The left part of the plane cahacterizes exponential decay ; 
        the right part of the plane characterizes exponential growth;
        the vertical part characterizes the oscilation of the signal. 

    A system is characterized by both its zeroes and poles, but only the poles dictate the behaviour to unforced responses

<https://www.youtube.com/watch?v=CRvVDoQJjYI>

## Constrained Optimization

<https://www.youtube.com/watch?v=sDp-tKt3NAw>

Lots of computer progrmas can be solved int erms of constrained optimization.

constrainted optimization
Input

- variables
- objective
- constraints
Output: values for each xi that
- Satisfies all constraints
- Maximizes the objective

Linear Programming

- Constrained Optimization withi
- continuous variables
- constraints and objective are linear functions that is
  - f( x1, ... , xn ) = c1 *x1 + ... + cn* xn

Eg.

- NetworkFlow
- GraphTraversal
- Bipartite Matching
- Factory Production
- Electric Grid Layouts

Idea:

Search through the verrtices of the feasible reagion.

How many are there?

- At N-Dimensions, we have N-Choose-M verticies ( factorial ! )

Simplex Algorithmn:

1. Start at a vertice in the feasible region
2. Follow some constraint, repeatedly move to an uphill neighbor

StandardForm:

- Maximization objective
- <= constraints
- all variables >= 0

Converting to StandardForm:

- Minimization: Multiply F by -1
- >= contraints : Multiply F by -1
- == constraints: split into <= and >=
- LowerBound < 0 : X2 - Lb
- Unbounded: ????
  