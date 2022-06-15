
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

# Think in complements

Sometimes, we can think in terms of complemets. Usual applications are [[probability]] theory. This is possible because we know all the enumerable states and their sum ( 1 ).
