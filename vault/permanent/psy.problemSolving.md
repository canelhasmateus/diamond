# Take Advantage of [[structure]]

Examples are both compositionally or de-compositionality

[[problem 0647 ]] implements this, by taking advantage of the [[composition|compositionality]] of palydromes.

[[Dynamic Programming]] makes frequent use of this, by [[reducing]] problems into sub-problems, and working from there.

# Identify maximums and minimums

Is there any maximum value that could be achieved? for example, in [[leet 1829]], we know that the  maximum possible value of an [[xor]] operation is a number with only '1' in its [[representation]], which lets us [[work backwards]] , which avoids looping to compute k.

Is there any maximum number of elements? That is: can we work with a reduced / [[enumerations|enumered]] set of possibilities?

# Track your steps

. [[problem 1020]] implement this, by sinking the previously checked island in place: Don't be afraid to [[mutation | mutate]] / destroy things
    if it helps.

# Try Different Perspectives

. [[problem 1020]] can also be implemented in a different manner, by constructing an [[adjacency matrix]] for each of the islands, and exponentiating it ( to simulate [[random walks]]) enough times to reach any border.

We can then, check how many squares have a 0 in the adjacency [[matrix]] entry that connects it to the borders.

Is there any way to explore the structure of the adjacency matrix to make this better? [[expand.md]]

# Question the Premises

. Sometimes we can and should question the very [[premises]], and re-analyze the thing with fresh new eyes.
. Can be seen as a way of trying different [[perspectives]].

# [[Incremental Improvement]]

. Can we start with a [[baseline]], and improve from there?

# Swap the constraints

. Very common when, given an constraint, we try to maximize a [[utility function]]. If we know that this utility is [[bounded]] by some quantity, we can solve the problem by fixing the utility functions, and reverse calculate the input that would have produced it.

# Think in complements

Sometimes, we can think in terms of complemets. Usual applications are [[probability]] theory. This is possible because we know all the enumerable states and their sum ( 1 ).
