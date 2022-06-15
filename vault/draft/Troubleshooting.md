[[todo]]

Its easy to easy to think about it and realize it post-hoc, after two given possibilities are presented and compared, and one is declared as a winner.
    However, how do we go about finding out these delimitations in a structured manner?
    Sure, Noticing patterns while practing helps. However, this doesn't seen very scientific to me... [[expand]]

___

# Troubleshooting

# Duct Taping

Sometimes a solution must be applied very quickly. Without enough time ( or disposition ) to find a real solution, its sometime necessary to apply a "temporary" fix to the problem.

# Root Cause Analysis

A form of [[PracticeProblemSolving#Question the Premises]]

___

# The debugging mindset

A huge amount of time is spent validating and debugging software

Hyperfocus on elimination of bugs during development is counterproductive, programmers should embrace debugging as an exercise in problem solving

"Bugs occur as a result of 'chains of cognitive breakdown .... formed over the course of programming activity'"

 At a fundamental level, all software describes changes in the state of a system over time. because the number of state and transition can be combinatorial complexity, programmers necessarily rely on approximations of system behavior ( mental models ) during development. The intent of a mental model is to allow programmers to reason accurately about the behavior of a system

    . They're approximations, and sometimes incorrect

    . Neophyte programmers experience this problem to a greater degree: their models of the language and development environment are necessarily incomplete, and even simple syntax errors can be major blocker for someone learning to program. 

The most sinister bugs occur when programmers falsely believe their mental models to be complete.
The most effective at debugging draw from extensive experience, as well as refined problem-solving skill. They also employ generalized strategies for problem solving, instead of treating every individual bug as a new, specific case.

Experience and accurate models are precisely the tools that novice programmers lack. Debugging is not taught as a specific course in universities. Individuals must be cognizant of how to approach problems, and wheter they are perceived as limits of ability or as part of the learning process.

Vm, interpreted and languages with runtime environmen tsencourage users to view the executiron environment as a black box
 The goal here is to make programming easire by reducing the scope of the mental model the progrmmmaer ust maintain. When bugs occur in these execution environments ,you're left with a complete gap in understanding. You might solve this vby understaingg more about the execution environment,,ts but then, what is the point of that abstraction?such runtime environemnts are not a panacea, you still need to understad how they behave

Indiviiduals fall somewhere on a spectrum of self theories.
    . Entity theorist on one end to the incremental theroist on the toher.

Entity theoriest tends to view intelligence as innate and fixed, and fundamnetally believes that not much can be done to increase intelligence.  => Fixed mindset
    . more likely to be motivated by appearance than performance
    . less likely to collaborate
    . hero worship, impostor syndrome, cargo culting

An incremental theorist believes that challenging problems are a core party of the learning process and that intelligence is malleable: it cna be increase through hard workd.  => growth mindset

Individuals can have one theory in reegardxs to a area and another when talking about another area: these do not imply global viesws.

bugs present themselves as problems, and brecause problems tend to be perceived by the entity theorist as fundamental limits on ability, the focus here should be on moving students, peers and co-workers gtorward a more malleable view of intelligence.

Bugs should not be interpreted as failures of individual programmers.
People should instead be praised for their efforts in solving bugs. In all cases, solving bugs is part of the learning process.

How to move people from the fixed to the malleable perspective?
    . It can be done sometime by the framing of information
        .. praising ability promotes formation of an entity theory
        .. praising effort promotes formation of an incremental theory

    "I'm sorry for assigning you a task you couldn't learn much from"

Active Recall
    . Over reliance on reference manuals and documentation
    . Active reacall is a study method in which you first make a guess before looking up the solution => Flash Cards

Segmented study
    . Our brains are not tuned to focus on specific tasks for hours on end
    . Segmented study is the idea of gaving one or two additional and unrelated task to switch to over the course of an acitivity
    . Switching gesrs and taking breaks are effective methods for making progress when you're stuck

A general Approach
    . Develop a general theory of the problem
    . Ask questions leading to a hypothesis
    . Form a hypothesis
    . Gather and test data gainst the hypothesis
    . Repeat

Very little attention is paid to the formation of a hypothesis, resulting in a wasted effort:
    . Testing without any theory pertaining to the cause of the bug.

<https://queue.acm.org/detail.cfm?id=3068754>



___

An important part of solving problems is looking at them the right way.

* The read-list situation becomes easier to manage when looking at it as a stream.
* Thinking of it as a stream lends itself to be handled just like any other stream.
    Thinking of it as an application of data engineering buys us the scheduling, composition and error handling of the processes in the space.
* The same goes for the flowtime situation: Thinking of it as a scheduling problem looks like the right abstraction since Gantt charts fit these visualizations perfectly.
* The same goes for the whole Gnosis mentality. Working with text and locally buys us the simplicity, flexibility and ease of use necessary to embed this as part of our life, instead of being a source of stress and emotional pain that most chores give us.
