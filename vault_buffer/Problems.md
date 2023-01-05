# problem 1829

> #todo

___


## Two Sum 
<https://leetcode.com/problems/two-sum/>

```python
class Solution:
 def twoSum( self, param1, param2 ):
  return solution( param1, param2 )


def solution( nums, target ):
 memo = { }
 for i, el in enumerate( nums ):


  remaining = target - el
  if remaining in memo:
   prev_seen = memo[ remaining ]
   return [ prev_seen, i ]

  memo[ el ] = i

def naive( nums, target):
    for i in range( len( nums )):
        for j in range( i , len(nums)):
            if nums[i] + nums[j] == target:
                return [ i , j]

if __name__ == '__main__':
 import unittest


 class TestSolution( unittest.TestCase ):

  def test1( self ):
   self.assertEquals( solution( [ 2, 7, 11, 15 ], 9 ), [ 0, 1 ] )

  def test1( self ):
   self.assertEquals( solution( [ 3 , 2, 4 ], 6 ), [ 1 , 2  ] )


 unittest.main()

```

classic problem.
the naive solution is just brute forcew, with complexity O( n^2 ).
The better solution has linear complexity , and takes advantage of the complement / duality trick - "If the current number would be part of the answer, we know exactly what the other number would be. So the question becomes: given the current number, where (if any) have we seen the remaining difference?"


___


## Problem Solving 
Bottom-Up Approach

* Solve sub-problems in increasing order
* Fill in a table of sub-problem solutions
* Compare several smaller solutions to determine the best solutions for the current problem

Dynamic Programming

* Divide into sub-problems
* Solve sub-problem recursively
* On each recursive call, Start by checking if it is already solved, finishing by caching into the 
table.

___

## Constrained Optimization
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

# TipTrackingSteps

. [[OnLeet1020]] implement this, by sinking the previously checked island in place: Don't be afraid to [[mutation | mutate]] / destroy things
    if it helps.
