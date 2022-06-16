# ProblemFrames

. [[problem 1020]] can also be implemented in a different manner, by constructing an [[adjacency matrix]] for each of the islands, and exponentiating it ( to simulate [[random walks]]) enough times to reach any border.

We can then, check how many squares have a 0 in the adjacency [[matrix]] entry that connects it to the borders.

Is there any way to explore the structure of the adjacency matrix to make this better? [[expand.md]]
