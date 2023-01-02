<https://minimizingregret.wordpress.com/2016/03/02/making-second-order-methods-practical-for-machine-learning/>

usually , second order methods are too costly to be implemented in production.
    . Can be show to converge to the optimium of a quadreatic function in a single iteration , but requires the calculation of the hessian and a matrix inversion, which is naively O( n^3 )
        .. Usually, its better to not invert the matrix, but solve the linear system . <https://scicomp.stackexchange.com/questions/26423/practical-example-of-why-it-is-not-good-to-invert-a-matrix>
        .. Could also take an spectral approximation ( ?? ) approach to speed up inversion .
    . Neumann Series ( ?? )

___


<https://www.youtube.com/watch?v=sDp-tKt3NAw>

Lots of computer progrmas can be solved int erms of constrained optimization.

constrainted optimization
Input

* variables
* objective
* constraints
Output: values for each xi that
* Satisfies all constraints
* Maximizes the objective

Linear Programming

* Constrained Optimization withi
* continuous variables
* constraints and objective are linear functions that is
  * f( x1, ... , xn ) = c1 *x1 + ... + cn* xn

Eg.

* NetworkFlow
* GraphTraversal
* Bipartite Matching
* Factory Production
* Electric Grid Layouts

Idea:

Search through the verrtices of the feasible reagion.

How many are there?

* At N-Dimensions, we have N-Choose-M verticies ( factorial ! )

Simplex Algorithmn:

1. Start at a vertice in the feasible region
2. Follow some constraint, repeatedly move to an uphill neighbor

StandardForm:

* Maximization objective
* <= constraints
* all variables >= 0

Converting to StandardForm:

* Minimization: Multiply F by -1
* >= contraints : Multiply F by -1
* == constraints: split into <= and >=
* LowerBound < 0 : X2 - Lb
* Unbounded: ????
  
___



<https://www.youtube.com/watch?v=z3QEtxYPYb4>

Disjoint Path

* max size = N inNode to the destination

Solve this problem by translating it into an instance of maxflow.

1. Remove Edges into the origin or out of the destination