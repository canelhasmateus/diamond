Dirichlet distribution 


A distribution over probability distributions
    kinda like a generalized multinomial distribution?

prior distribution over pmfs

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

__


https://www.anishathalye.com/2015/03/07/designing-a-better-judging-system/


Most judging methods are themselves flawed
    . There are constraints in the numbers of judges, and the amount of time there is for judging to take place; Given the constraints, how we produce the highest quality judging results possible?
        .. Isn't this what i'm doing with my read laters?
    
    . Instead of juding producing absolute scores, perform pairwise copmarisons. 
     
. Average 
    Judge A gives X a 7/ 10 ; Judge B gives a 4/10. What does that mean? is x objectively better than y? or is judge b harsher than a?
. Normalizing
    Improvement over average by normalizing judges scores ( by mean and std ).
        . Judges look at a tiny fraction of the entries. 

assigning numerical scores to entries is not a task that people are good at.
    . Judging the first entry, judges have no context and nothing to compare it to when assigning a score. After many entries, judges outlook may change - results aren't independent of the order they're judged. 

Pairwise comparison, on the otherhand, is something we're good at. 
    . We won't necessarily have a copmarison data between every pair of entries . We just do not want disjoint sets of entries that are never even indirectly compare to each other. 

    . Luce's choice axiom ???

    . How to turn the measurements into judging reults?


"Any pair of entries may be compared with each other zero or more times, and jusges may have conflicting opinions about the comparative quality of entries. " 
    . We can think of the measuresments as a directed graph on nodes , having non-negative integer edge weights derived from the number of times End was judged better than Ej -> Arrows point to better entries. 

    . Can also think of representation of the data that follows from the graph representation. 

    . Them, it is natural to thing about finding a topological sort of the comparisonn graph.
        .. However, The graph can be cyclic, so a topological sort might not even exist. 
        .. ANother approach is to define a permutation of the nodes ; define backward edges as a cuntion of th permutation, and define the cost of a given permutation as the sum of the weights of the backward edges, take the best permutation . Informally it represents finding  a ranking that the least number of judging decisions disagree with.  ( ?? didn't *really * what those mean)
    
    another choice is to loog elsewhere ( Phychology research ) to find good models for reasonng about paired comparison data .  > Probabilistic choice models > thurstone statitical model of judgements ; 
        . allows to  derive interval scale measurements from which we can extract rankings
        . Assumes that th equality of every choice is a gaussian random variable , and when a person judges the relative quality of two options, they sample from each of the corresponding quality and choose the one with higher measured quality. 
        . The true qiality is the corresponding gaussian; If we can figure out the means of the gaussians, we will have relative scores for every option, so we'l be able to determine a global ranking; 

        . If X ~ Nx and Y ~ Ny , then
            .. X - y ~ Nxy with uxy = ux - uy ; sxy = sx + sy
        . How to determine the best parameters for the model, then?
            . ~~~~

            "We can simplify our model such that ..  we have sxy = 1. " Isn't this an example of reverse pinning?
    
    http://people.stern.nyu.edu/xchen3/images/crowd_pairwise.pdf
        . "Instead of dispatching judges randomly, it assigns judges in such a way that maxizes expected information gain ; also updates rankinns efficiently in an online manner, taking o(1) to process single votes and O(n) to tell a judge where to go next 
        https://www.anishathalye.com/2015/11/09/implementing-a-scalable-judging-system/"





