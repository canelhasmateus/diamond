https://minimizingregret.wordpress.com/2016/03/02/making-second-order-methods-practical-for-machine-learning/

usually , second order methods are too costly to be implemented in production.
    . Can be show to converge to the optimium of a quadreatic function in a single iteration , but requires the calculation of the hessian and a matrix inversion, which is naively O( n^3 ) 
        .. Usually, its better to not invert the matrix, but solve the linear system . https://scicomp.stackexchange.com/questions/26423/practical-example-of-why-it-is-not-good-to-invert-a-matrix
        .. Could also take an spectral approximation ( ?? ) approach to speed up inversion . 
    . Neumann Series ( ?? )
