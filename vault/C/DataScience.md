
___


DS Google
data integrity
 duplication

sample size , random sampling

Ask -> Prepare
Process -> Analyze
=> Share act

Specific
Measurable
Action-oriented
Relevant
Timebounded

leading questions
close ended
vagueness and context-lack

quantitative -> (the what , how many, how often)
qualitative -> ( why )

dirty:
 inconsistent format
 blank field
 duplicates
 incomplete
 incorrect
 outdated

percentage null

___

## Co-Occurence Matrixes

[GLCMs — a Great Tool for Your ML Arsenal - Towards Data Science](https://towardsdatascience.com/glcms-a-great-tool-for-your-ml-arsenal-7a59f1e45b65)

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

## Decision Trees 
Decision Trees are desirable
    Scale well to larger datasets
    Robust against irrelevant features
    easy to visualize rationaliztion between predictions
    low bias, as there is minimal implicittly defined structure in the model, as opposed to linear regression, for example.

    However, prone to high variance
    will overfit noisy data

Random forests inherit the benefit of a decision tree whils imporving upon the performance by reducing the variance.
    . Train decision trees in subsets of the training data, as well as subsets of the feature space.
    . REandomness reduces variance in the end meodel

Since its non-parametrical, model behaviour varies significatnylu depending on which data was used for training.
[Sampling can help with this](https://www.jeremyjordan.me/content/images/2019/05/tree_ensemble.gif).
    . This is knwon as bootstrap aggregating or bagging for short.

Since each tree sees only a subset of the data during training, we can get away without using a proper validation set. This is called "out of bag estimations"

<https://www.jeremyjordan.me/random-forests/>

___

<https://towardsdatascience.com/drf-a-random-forest-for-almost-everything-625fa5c3bcb8>

<https://github.com/lorismichel/drf>

Distributional Random Forests

MMD, Kernels

"Though the magic of kernel methods, this comparison  between mesn is actuly a comparion of distributions"

MMD allows to compare multivariate distributions
    ( Maximum Mean Discrepance ? )

Can we Make any paralells with th NaturalGradientForets?

<https://github.com/stanfordmlgroup/ngboost>

___

## Kernel Methods

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

___

## Model Deployment
<https://www.youtube.com/watch?v=68kE96zRfSM>

Pain points  around ml observability

Model and Data Drift | Unseen values for a feature
Performance Degradation | False positives increase
Data Quality Issues | Upstream data changes
Model Explainability | Explain denied transaction
Model Readiness

PIllars
    Performance Analysis
    Drift
    Data Qaulity
    Explainability

Models with Fast Actuals
    . We get the ground truth pretty fast -> Measure performance in production very fast.
    . Challenges in PRoduction
        .. Mapping back the actuals with the predictions
        .. Geting the right success metrics fort your model
        .. Surfacing up the right cohorts to analyze predictions

    Going Beyond 1 Performance Metric

        Look at performance of model across various slices or cohorts of predictions

What about the ones where the actuals are not fast?
    ( Delay , Few or No Ground Truth , Biased Actuals )

    . Use Drift as a proxy for performance
        -> Drift in predictions
        -> Drift in the features/inputs
        -> Drift in the actuals
    . How to measure it?
        -> Population Stability Index
        -> Kullback-Leibler divergenge
        -> Wasserstein Distance
        -> Jensen-Shannon Distance
        -> Kolmogorov-Smirnov Test
        -> Chi-Squared Test
    
    Drifte Resolution
        . Alert 
        . Check Prediction Drift => Are the predictions drifting?
        . Check Feature Drift => Are any inputs drifting that may be causing model output drift?
        . How can the data be fixes through the targeted upsampling to improve model performance?

Data Quality
    => Missing ata
    => Invalid Data
    => Noisy Data
    => Duplicated Data
    => Out of Range Violatijons
    => Cardinality Changes
    => Type Mismatch
    => Unexpected Traffic

"Performance Tracing"
    . Arize is patenting it

Mirrored Histograms

 DataSources => Feature Processing => Feature Store ( Tecton / Feast ) -> Build a Model => Model Store ( MLFlow , Weights and Biases ) => Model Serving ( KubeFlow / Algorithmia ) => Online Porudction Logs -> Evaliation / Inference Store ( Arize )

____

<https://www.youtube.com/watch?v=i536yu9_rJg>

pit falls

baselines
calibration
leakage
Fix RNG Seeds
Visualization is good
Simpson's paradox
Interpretability

Deploy
    Covariate Shift ( Feature Drift )
    Technical Debt
    Misuse of predictions
    Interaction with users
    Experimental validation

Design Of Experiments

___

## Modelling

 More generally, consider cases when our environment has a state, and is in some sense “remembering” our past choices. A stateful framework, able to model a wide range of such phenomena, is a dynamical system. A dynamical system can be thought of as a function that determines, given the current state, what the state of the system will be in the next time step. Think of the physical dynamics that determines our pole’s position based on sequential hand movements. Other intuitive examples are the fluctuations of stock prices in the stock market, or the local weather temperatures; these can all be modeled with dynamical systems.

<https://minimizingregret.wordpress.com/2019/07/17/boosting-for-dynamical-systems/>
____

Confidence Based Performance Estimation caqn enable us to reliably predict the expectedf performance ( area under ROC ) of a machine learning model when the ground truth is not available

<https://towardsdatascience.com/predict-your-models-performance-without-waiting-for-the-control-group-3f5c9363a7da>

<https://docs.nannyml.com/latest/deep_dive/performance_estimation.html>



____


<https://towardsdatascience.com/drf-a-random-forest-for-almost-everything-625fa5c3bcb8>

<https://github.com/lorismichel/drf>

Distributional Random Forests

MMD, Kernels

"Though the magic of kernel methods, this comparison  between mesn is actuly a comparion of distributions"

MMD allows to compare multivariate distributions
    ( Maximum Mean Discrepance ? )

Can we Make any paralells with th NaturalGradientForets?

<https://github.com/stanfordmlgroup/ngboost>

___

<http://nadbordrozd.github.io/blog/2020/09/07/embedding-sets-of-vectors-with-emde/>
 "Think of preferences as probability density functions defined on the manifold."
 Paralelos com
  Count Sketch
  Locality-Sensitive Hashing
  Probability Density Function

<http://nadbordrozd.github.io/blog/2017/08/12/looking-for-the-text-top-model/>

Use embeddings as input to a model.
There are better ways to do it than averaging

___

<https://engineering.fb.com/2021/02/09/developer-tools/minesweeper/>

PrefixSpan is an algorithmn which is well known for being highly efficcient at sequential pattern mining.

Facebook uses it in its Root Cause Analysis automation , called Minesweeper.
It finds patterns with good Precision , Recall , F1 between  Bug and Bug-free traces. It also tries to remove redundant Patterns.

___

## Topic Detection

<https://www.youtube.com/watch?v=sDMJr0h5_xw>

"GeoRanging tweets"

* Based on a set of local influencers ( schools, museums, politicians, local celebrities ), discover if an account is used by someone linked to a geo
K-means

LDA

* Assume a topic is a distribution of words
* Assume a document is a distribution of topics
* Update every word assignment according to our terrible model
* Repeat until convergence

The combination gives you a way to model a corpus.

Non-Negative Matrix Factorization

* ?
  
Community Detection

* Louvain ?
  * Modularity
  * How many of the edges reside in the comunities
  * How unique are these communities to this graph
  * -> Very Fast. Allows tuning K on the fly.
"""

* Define word co-occurrence ( two words in the same tweet)
* COnstruct graph where words are nodes and edges are co-occurrence relationship
* Filter out low information words by high frequency and low pairings
* Pick Heaviest edges
* Run Community detection

How to find representative tweets?
"Summarization techniques"

* for each cluster, look for the closest tweets: Cosine similarity between

Future

* Overlapping communities
* Conductance ( Modularity suffers from a tendency to ignore very small clusters )
* Optimization Metrics
* Reducing Word Noise ( co-occurrence distribution )
* Better sentence segmentation
* Bi-Partite Graphs
  * Tweets on the left, words on the right, look for words
* User-Defined sensitivity

___

## SimilaritySearching

Detecting Near-DUplicates
    . Locality Sensitive Hashing
     . Similar Document => Similar hash-code

LSH Error Rate

False Negative Error ( We want a , b to collide, but they don't )

( 1 - p^k)^L

False Positive Error ( Don't want a, b to collide )
 1 - ( 1 - ( Q ^ K ) )^L

SimHash
    . Efficient Variant of LSH
    . Don't Store the Hyperplanes

___

## optimization

<https://minimizingregret.wordpress.com/2016/03/02/making-second-order-methods-practical-for-machine-learning/>

usually , second order methods are too costly to be implemented in production.
    . Can be show to converge to the optimium of a quadreatic function in a single iteration , but requires the calculation of the hessian and a matrix inversion, which is naively O( n^3 )
        .. Usually, its better to not invert the matrix, but solve the linear system . <https://scicomp.stackexchange.com/questions/26423/practical-example-of-why-it-is-not-good-to-invert-a-matrix>
        .. Could also take an spectral approximation ( ?? ) approach to speed up inversion .
    . Neumann Series ( ?? )

___
