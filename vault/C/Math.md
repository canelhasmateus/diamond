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
