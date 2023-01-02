---
tags:
    - general 
    - fact 
---
# PatternDuality

This is a common situation: given a constraint, maximize some utility.

If we know that this utility is bounded by some quantity, we can solve the problem:

1. Fix the utility functions
2. Reverse calculate the input that would have produced it.

Example

In [[OnLeet1829]], we leverage the knowledge that the maximum possible value of an xor operation is a number with only '1' in its binary representation.

This allows us to *work backward*, avoiding loops to compute k.

Other examples of boundaries are enumerations: can we work with a reduced or enumerated set of possibilities?

___

Sometimes, we can think in terms of complements. Usual applications are [[probability]] theory. This is possible because we know all the enumerable states and their sum ( 1 ). This can also be seen in the domain of [[Optimization]] and [[duality]] problems
