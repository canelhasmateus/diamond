# DebuggingMindset

A huge amount of time is spent #validating and #debugging #software.

Many #teams hyperfocus on the elimination of bugs during development. That mentality is counterproductive and programmers should embrace debugging as an exercise in [[IndexProblemSolving]]

`Bugs occur as a result of chains of cognitive breakdown formed over the course of programming activity`

At a fundamental level, all software describes #changes in the #state of a system over time.

Because the number of states and #transitions can be of #combinatorial complexity, programmers necessarily rely on *approximations* of system behavior - [[PatternMentalModels]] - during development.
A mental model intends to allow programmers to #reason accurately about the #behavior of a system.

* As approximations, they're sometimes incorrect
    > [[PatternMapsAndTerritories]]

* The most sinister bugs occur when programmers falsely believe their mental models to be complete.

    > [[PatternOversimplification]], [[PatternImplicitAssumption]]

* The most effective people in debugging draw from extensive experience and refined problem-solving skills. They also employ generalized strategies for problem-solving, instead of treating every individual bug as a new, specific case.

    > [[ProblemFrames]]

Neophyte programmers experience this #problem to a greater degree. Their models of the language and development environment are necessarily incomplete, and even simple syntax errors can be major blockers for someone learning to program.

> #todo Is this a problem because they're unable to quickly iterate and falsefy their beliefs?

Experience and accurate models are precisely the tools that novice programmers lack.

Debugging is not taught as a specific course in universities. Individuals must be cognizant of how to approach problems, and whether they are perceived as limits of ability or as part of the learning process.

[[VirtualMachine]]s, interpreters and [[ProgrammingLanguage]]s with runtime environments encourage users to view the execution environment as a [[PatternBlackBox]]

The goal here is to make programming easier by reducing the #scope of the mental model the programmer must maintain. When bugs occur in these execution environments, you're left with a complete gap in understanding.

You might solve this by understanding more about the execution environment, but then, what is the point of that [[PatternLeakyAbstraction]]? Such runtime environments are not a panacea, you still need to understand how they behave.