The study of measures.
Measures provide an generalization to the intuition of Length, Area, , volume, [[probability]].
These seemingly distinct concepts have many similarities and can often be treated together in a single mathematical context.

[[Kolmogorov]] can be considered the father of modern  probabilty theory .

[[Lebesgue]] can be considered the father of modern measure theory.

As a motivation, consider the banachi-tarksi paradox:
. By assuming only the ZFC axioms, it can prove that , by dividing a sphere in some pieces, it can, after only rigid transformations, assemble two of them
. This leads us to two choices:
.. Reject the [[Axiom of Choice]]  ( why should we not do this?[[expand]])

.. Formalize the ( until now implict ) assumption of what a "[[Measure]]" is, and the way that it can and can't be combined and what can and can't be preserved under operations.

There exists some fundamental concepts in measure theory, for example:

A [[Sigma Algebra]]
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
