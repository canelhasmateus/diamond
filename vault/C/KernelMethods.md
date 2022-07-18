___

Kernel Methods

a class of algorithms for pattern analysis.
    . Find and study general types of relations
    . usually, the raw data is explicitly transformed into a feature vector via a user-specified feature map. Kernel methods require only a user-specified kernel, that is, a similarity function over pair of data points in raw representation.

Kernel functions operate in a high-dimensional , implicit feature space without ever computing that space, but rather, the inner products between the images of all pairs of data in the feature space. This is called the Kernel Trick.
    . Gaussian Proccesses
    . PCA
    . Spectral Clustering
    . Linear Adaptive Filters
    . Kriging
    . Inverse distance weighting
    Usually based on convex optimizatoin and eigenproblems, are statiscially well founded
        . rademacher complexity?
        . Mercer's condition?  > associates a inner product to any positive definite matrix?
        . counting measure?

"Rather than learning some fixed set of parameters corresponding to the features of their inputs, they instead "remwember" the ith training example and learn for it a corresponding weight. predicition, them is treated by the application of a similarity function ( kernel ) between the unlabeled input and each of the trainin inputs
    . Isn't this what K-neighbors does??

Gram Matrix ( sometimes called a kernel matrix ) must be apositive semi-definite ;
    . If the kernel function is also a covariance function as used in gaussian processes, the gram matrix can also be called a covariance matrix.
    Examples
        Fisher Kernels
        Graph Kernels
        Kernel smoother
        polynomial kernel
        raidal basis function kernel
        string kernels
        neural tangent kernel
        neural network gaussian process kernel

Usually, inner products produce a scalar output. What if we make it return a vector ionput?
    . Kernel methods for vector output.
    . Can them compose then.
    Examples
        co-krigin .
    "Multi-label classification can be interpreted as mapping inputs to binary coding vectors with length equal to the number of classes."
    In gaussian processes ,multiple output functions correspond to considering multiple processes

    * Reproducing kernelk hilbert space?? 
    * . ATikhonov regularization?

    . Representer theorem?
        minimizer {\displaystyle f^{*}}f^{*} of a regularized empirical risk functional defined over a reproducing kernel Hilbert space can be represented as a finite linear combination of kernel products evaluated on the input points in the training set data.
        ??

Cover's theorem is a statement in computational learning theory and is one of the primary theoretical motivations for the use of non-linear kernel methods in machine learning applications. The theorem states that given a set of training data that is not linearly separable, one can with high probability transform it into a training set that is linearly separable by projecting it into a higher-dimensional space via some non-linear transformation. The theorem is named after the information theorist Thomas M. Cover who stated it in 1965. Roughly, the theorem may be stated as:

A complex pattern-classification problem, cast in a high-dimensional space nonlinearly, is more likely to be linearly separable than in a low-dimensional space, provided that the space is not densely populated.
