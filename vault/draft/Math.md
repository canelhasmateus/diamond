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

<https://www.youtube.com/watch?v=Iz7PSlTpjyI>

This seems like a very good video to try and *really* understand what is going on.

___

<https://minimizingregret.wordpress.com/2016/03/02/making-second-order-methods-practical-for-machine-learning/>

usually , second order methods are too costly to be implemented in production.
    . Can be show to converge to the optimium of a quadreatic function in a single iteration , but requires the calculation of the hessian and a matrix inversion, which is naively O( n^3 )
        .. Usually, its better to not invert the matrix, but solve the linear system . <https://scicomp.stackexchange.com/questions/26423/practical-example-of-why-it-is-not-good-to-invert-a-matrix>
        .. Could also take an spectral approximation ( ?? ) approach to speed up inversion .
    . Neumann Series ( ?? )

___

<https://towardsdatascience.com/glcms-a-great-tool-for-your-ml-arsenal-7a59f1e45b65>

Gray level co-occurence matrices

    extract texture features from images
        
    isnt this just convolutions? and the positional operator is your kernel?
    
    whoever, it raises some good points:
        . We can calculate the entropy of a matrix 
            -sum( c[i,j] * log( c[i,j]) )
        . We can calculate the correlation of a matrix
            -sum( 
                ( i-u[i] * ( j - u[j]) * c[i,j]) /
                (theta[i] * theta[j]) 
                 )
                where 
                u[k] = sum( k * c[i, j])
                theta^2[k]  = sum( (c[i , j ]  * u[k] )**2)
        . And also , the homogeneity and contrast

    associated with texture == repetition of visual patterns == repetition ofcombinations fo values with a certain orientations 



    separate rgb AND  hsv channels
        hsv channels are closer to how humans interpret vision 
            => Here we can put a link to that image compression video from irreducible


        assymetrical costs of classification
    
    what i found interesting here is the transformation  from matrices to individual numbers:
        
        R-Matrix
        G-Matrix
        B-Matrix
        
        GrayScaleMatrix ( By Averaging RGB )

        H-Matrix
        S-Matrix
        V-Matrix
        
        \/ Calculate a GLCM of each , and for each glcm, compute its 4 metrics ( homogoneity , contrast, energy , correlation )
            > Which are analogous to mean, std, entropy and correlation . 
        
        7 * 4 = 28 numerical features

___
