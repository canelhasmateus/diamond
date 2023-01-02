# 2022-04-02

<https://www.youtube.com/watch?v=O85OWBJ2ayo>

Raising e to the power of a matrix

useful to solve a class of differential equations
    . The world  is written in terms of diff equations
    . Very common in quantum phycics

What is the operation of e ^ M?
    . Not a way to multiply e itself multiple times
    . We take advantage of the power expansion of e < Taylor Series >:
        e^x = Sum( 1/n! * x^n )
    . We can use this to exponentiate a lot of objects, such as imaginary numbers and matrix, that do not seem immediatelly sensical as exponents
    . Discovery vs Invention

As we add more and more terms, we eventually reach a "constant" value.

What is this trying to do?

Textbnook progression:
    Definition -> Theorem -> Proof  -> Examples
Disovery progression
    Specific Problem -> General problems -> Helpful constructs -> Definitions

Two problems to matrix exponents.
    . Juliet and Romeo examples ( Loves me, Loves me not )
        .. dx / dt = - y( t )
        .. the general goal of edos is to find explicit forms of y(t), that satisfy the inteded behaviour, alongside its initial properties
        .. Makes sense to package these values as a point in cartesian space.
        .. The dx/dt here would be a"speed" vector that thugs this point to another location in space.
Matrices as linear transformations

"Rotation Matrices"
    . | Cos(T) - sin( T ) |
    . | sin(t) + cos( t ) |

___

___

Regressão em cima de uma função Z = ceil(x + y)
This Should vê a diagonal staircase and a rotation Should help decision Forest.

___

 "A kernel is an operator on a hilbert space"

___

Langlands

    Number Theory -Functoriality> Harmonic Analysis
    Elliptic Curves



    Equations that don't have rational solutions may have modular solutions


    "Every elliptic curve is intimately related with a modular form"

    Algebraic Geometry
    Representation Theory

___

    <https://www.youtube.com/watch?v=nnx825ezoI8>

visible points in an integer lattice

numbers m, n are coprime if gcd( m , n ) == 1

euler product -> Zetta( 2 )

___

Prime factorization

* Achieve gret speed ups through wheel factorization
  " To produce numbers that are not multiples of two, we beging at three and keep adding two
  to avoid multiples of boh two and three, we begin at five and alternatively add two and four
  "

* how tto generalize this behaviour ? For the 2,3,5 wheel:
* find all values between 7 and 37 [ starting point, circunference + starting point ] that are not divisible by 2,3,5
* In this case, 7, 11, 13, 17, 19, 32, 31, 37
* their consecutive differences are 4,2,4,2,4,6,2,6 : this is the cycle taken to skip over non-primes

___

## Measure Theory
The study of measures.
Measures provide an generalization to the intuition of Length, Area, , volume, [[probability]].
These seemingly distinct concepts have many similarities and can often be treated together in a single mathematical context.

[[Kolmogorov]] can be considered the father of modern  probabilty theory .

[[Lebesgue]] can be considered the father of modern measure theory.

As a motivation, consider the banachi-tarksi paradox:
. By assuming only the ZFC axioms, it can prove that , by dividing a sphere in some pieces, it can, after only rigid transformations, assemble two of them
. This leads us to two choices:
.. Reject the [[AxiomOfChoice]]  ( why should we not do this?[[MetaExpand]])

.. Formalize the ( until now implict ) assumption of what a "[[Measure]]" is, and the way that it can and can't be combined and what can and can't be preserved under operations.

There exists some fundamental concepts in measure theory, for example:

A [[SigmaAlgebra]]
    . A sigma algebra on a set X is a collection of subsets of X, such that:
    . Closed under complements : if E in A => E^c is in A
    . Closed under countable unions: E1 , E2, ... in A => Union< E1, E2, ... En> in A.
    . Closed under intersections:  E1, E2 , ... in A => Intersection< E1 , E2 , ... En> in A.

    Note: A Sigma Algebra is a Subset of the set Algebra, since it implies stronger conditions ( closed under finitely many unions and intersections)

    Note: A sigma algebra always exists, since the powerset of X is a sigma algebra.

A Measure M ( On Omega )
    . A function  that takes the sets of the Sigma-Algebra of ( A ) to numbers [ 0 , inf], such that ( Kolmogorov axions)
        .. M( empty ) = 0;
        .. Countable Additivity: M( Union<S1, S2, S3, ... Sn>) = M(S1) + M(S2) + M( S3 ) , ... + M( Sn) , As long as the sets are pairwise disjointed

    . Some properties:
    
        .. P( Union< A , B >) = P( A ) + P( B ) - P( Intersection<A,B>)
        .. P( E ) = 1 - P( E^c)
        .. P( E ) <= P( F ) | if E in F and F in A.
        

    Note: A probability measure is a measure, but it also has another condition:
    . P( Omega ) = 1

A measure space
    . The combination of an Omega and its Sigma-Algebra, along any measure.

    . Some Properties:
        .. Monotonicity: If A in B, then M( A ) <= M(B)
        .. SubAdditivity: M( Union< S1, S2, ... , Sn>) <= M( S1) + M(S2) + ... + M(Sn); 

An CDF is an function such that F : R -> R

    . X <= y , then F( X ) <= F( Y )
    ...

There exists an relation between an cdf and a borel probability measures:
    F( x ) = P( (-inf , x] )

Examples of measures:
    Jordan Measure
    lebesgue measure
        . Just the length
    probability measure
    complex measure
    haar measure
    borel measure
    count measure

> #todo Integration with respect to a measure??


___

# MinimaxTheorem

The Minimax Theorem is a result in [[GameTheory]]. It states that every two-player zero-sum game has an optimal (possibly randomized) strategy for each player.

* It may not necessarily be the best if your opponent is being dumb, but it maximizes your values without special knowledge or space to store information about past play.

When Both players play a minimax strategy, the expected utility for player 1 is called the value of the game

* It is a unique number

> #todo
    . So what?

___

## Queue Theory

# Little's Law

    N = XR 

    Average # of concurrent requests = Average Transaction Rate * Average response time

    ![# of people on the ride = throughput  * how long the ride last](../../others/assets/2022-03-26-18-59-09.png)

# Capacity Planning

___

___

Response time and service time

. the gap between the two grows with load.
. if we go past the 'limit' ( saturation ), the service time stay the same, and response time goes through the roof.
. Response time grows linearly past the saturation limit.

throughput != capacity

            TCP congestion avoidance control 
                . Additive Increase
                . Multiplicative decrease

## References

1. ["Stop Rate Limiting! Capacity Management Done Right" by Jon Moore](https://www.youtube.com/watch?v=m64SWl9bfvk)
Implements Rate limits by means of Little's Law. It shows that Limiting concurrent requests acts the same as limiting requests per period when the load is reasonable, but introduces backpressure when the service is overwhelming.
Since this limit is  dynamically calculated based on load, we can provide better utilization of services.
Uses the same principles of [[TCP]], of [[Patterns#Additive Increase, Multiplicative Decrease]]
