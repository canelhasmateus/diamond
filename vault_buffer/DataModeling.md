## Decision Trees

Decision Trees are desirable
Scale well to larger datasets
Robust against irrelevant features
easy to visualize rationaliztion between predictions
low bias, as there is minimal implicittly defined structure in the model, as opposed to linear regression, for example.

```
However, prone to high variance
will overfit noisy data
```

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

```
* Reproducing kernelk hilbert space?? 
* . ATikhonov regularization?

. Representer theorem?
    minimizer {\displaystyle f^{*}}f^{*} of a regularized empirical risk functional defined over a reproducing kernel Hilbert space can be represented as a finite linear combination of kernel products evaluated on the input points in the training set data.
    ??
```

Cover's theorem is a statement in computational learning theory and is one of the primary theoretical motivations for the use of non-linear kernel methods in machine learning applications. The theorem states that given a set of training data that is not linearly separable, one can with high probability transform it into a training set that is linearly separable by projecting it into a higher-dimensional space via some non-linear transformation. The theorem is named after the information theorist Thomas M. Cover who stated it in 1965. Roughly, the theorem may be stated as:

A complex pattern-classification problem, cast in a high-dimensional space nonlinearly, is more likely to be linearly separable than in a low-dimensional space, provided that the space is not densely populated.

___

## Modelling

More generally, consider cases when our environment has a state, and is in some sense “remembering” our past choices. A stateful framework, able to model a wide range of such phenomena, is a dynamical system. A dynamical system can be thought of as a function that determines, given the current state, what the state of the system will be in the next time step. Think of the physical dynamics that determines our pole’s position based on sequential hand movements. Other intuitive examples are the fluctuations of stock prices in the stock market, or the local weather temperatures; these can all be modeled with dynamical systems.

<https://minimizingregret.wordpress.com/2019/07/17/boosting-for-dynamical-systems/>

___

Confidence Based Performance Estimation caqn enable us to reliably predict the expectedf performance ( area under ROC ) of a machine learning model when the ground truth is not available

<https://towardsdatascience.com/predict-your-models-performance-without-waiting-for-the-control-group-3f5c9363a7da>

<https://docs.nannyml.com/latest/deep_dive/performance_estimation.html>

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

- Based on a set of local influencers ( schools, museums, politicians, local celebrities ), discover if an account is used by someone linked to a geo
  K-means

LDA

- Assume a topic is a distribution of words
- Assume a document is a distribution of topics
- Update every word assignment according to our terrible model
- Repeat until convergence

The combination gives you a way to model a corpus.

Non-Negative Matrix Factorization

- ?

Community Detection

- Louvain ?
  - Modularity
  - How many of the edges reside in the comunities
  - How unique are these communities to this graph
  - \-> Very Fast. Allows tuning K on the fly.
    """

- Define word co-occurrence ( two words in the same tweet)

- COnstruct graph where words are nodes and edges are co-occurrence relationship

- Filter out low information words by high frequency and low pairings

- Pick Heaviest edges

- Run Community detection

How to find representative tweets?
"Summarization techniques"

- for each cluster, look for the closest tweets: Cosine similarity between

Future

- Overlapping communities
- Conductance ( Modularity suffers from a tendency to ignore very small clusters )
- Optimization Metrics
- Reducing Word Noise ( co-occurrence distribution )
- Better sentence segmentation
- Bi-Partite Graphs
  - Tweets on the left, words on the right, look for words
- User-Defined sensitivity

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

# Sampling methods

```
Why 
    Approximate expectations
        Estimate Statistics 
        posterior inference ( compute probabilities)
    Visualization 


Why expectations?
    Every probability is an expectation
    approximations are needed for sums and integrals
        most sums / integrals can be seem as expectations of some distribution. *

Sampling methods
    Examples
        Monte carlo
        importance sequence
        sequecential importance sequence
    Pros: 
        Very easy to implement , when compared to exact inference        
        Very General Purpose
    Cons:
        Slow ( when compared to analytical methods)
            . Innapropriate for some problems
        Getting "good" samples may be difficult
            . ( What are good samples ? )
        Too Easy - Overused / used innapropriately
            . Not a cure all elixir.
```

___

<https://betanalpha.github.io/assets/case_studies/probabilistic_computation.html>

Quadrature methods:
Just discretize using a grid lol
. The construction of sophisticated grids to minimize errors is a core topic of the quase-monte carlo literature
. The interpolation scheme is also configurable.

```
Not great because any attempt to exhaustively quantify a space to estimate expectation values is largely limited to one or two-dimensional problems. In order to scale, we need need to be smarter, and identify exactly where in the ambient space we should be focusing that computation.
    . The answer is obfuscated by the counterintuitive behaviors of high-dimensional spaces:
```

Welford accumulators?

typical sets

___

<https://www.youtube.com/watch?v=a7ZZCdm40Ik>

Marketing <-> Effect studies

. Simple A/B test
\->
. Uplift Modeling
causalml
pylift
Causal Inference and uplift modeliling: A review of the literature
. Difference in Differences

. CausalImpact
. Dafiti's causalimpact
. Inferring CAusal Impact Using Bayesian Structural Time-Series Models.

___

## Causal Inference

___

The golem has more power than its creator. It can do for them what they cannot do for themselves. But it has no itent of its own, and unless you're extremly precise with your instructions, they can be dangerous.

...

No causes in ; No causes out
...

Causal Inference

More Than association between variables

Prediction of intervention
Imputation of Missing Observations ( unobserved conterfactual outcomes )
...

What Function describes these points?
( Fitting, compression )
What function explains these points?
( Causal Inference )
What would happen if we change a points mass
( Intervention )
What is the next observation from the same proccess?
( prediction )

Importance Sampling
. Improbable points contribute more information
. Tends to be unreliable, has high variance
. Pareto-smoothed importance sampling ( PSIS ) mopre stable
. Useful diagnostics
. Identifies important ( high leverage ) points ( "outliers" )

Akaike information criterion
. Estimate Information-theoretic measure of predictive accuracy ( K-L Distance)

. For flat priors and large samples:
AIC = ( -2 ) x lppd + 2\*k
\|  |    |---> Number of parameters
\|       |
\|  |----------> Log Pointwise predictive density.
|
\|------------------> Scaling parameter

Widely applicable Information criteria
. AIC of historical interest now
. Very similar to PSIS score, but no automatic diagnostics

...

Dropping outliers is bad: Just ignores the problem; predictions are still bad!

It's the model that's wrong, not the data
First, quantify influence of each point
Second, use a mixture model ( robust regression )

"you'd find that their tails are much much ticker than the normal distribution  expects. And thats because the distribution is not homogenous, there a lot of different distributions , with different variances, that we observe as one single distribution " -> Stundent T.

Unobserverd heterogeneity => Mixture of Gaussians

___

## Distributions

Dirichlet distribution

A distribution over probability distributions
kinda like a generalized multinomial distribution?

prior distribution over pmfs

___

## Statistical Inference

```
Any mechanism by which we deduce the probabilities in our model based on data.

Inference links the observced data with our statiscal assumptions adn allows us to ask questions of our data: predicitions visualizatrion and model selection. 
```

![](2022-03-31-17-16-36.png)

![](2022-03-31-17-16-56.png)
Inference Methods

```
Exat Methods
    . COnjugacy
    . Enumeration
Numerical Integration
    . Qudrature
Generalized method of moments

Maximum Likelihood

Maximum a posteriori

Laplace Approximation

Integrated nested laplace approximations

Monte Carlo Methods

Cavity Methods
Variational Methods
```

___

## Variational inference

Latent Varibles are hidden and cannot be observed.
. Intelligence
. Health
However, we can infer latent variables by exploiting the observed variables.
. Raven's Progressive Matrices
. Sat Scores
. Blood Tests
. Pressure

Considering latent variables Z and observed variables X. ]
We suppose that the latent variable causes the observed variable, that is: Z -> X.
. In a bayesian treatment, we would imply that latent variables govern the distribution of the data.
. In particular, we would draw the latent variables from a prior density P(z) and relate them to the observations through the likelihood P( X|Z)

Our goal is to perform inference, that is. Estimate Some hIdden variable given some observation.
Infer Health given medical examinations
Infer Inteligence given tests.
More Formally, we want to infer
P( Z|X) => P( Z , X) / P( X )
. Why is this the case? WHat is the intuition of each of these terms? [[MetaExpand]]
. How is this calculated? Isn't Z unobserved? [[MetaExpand]]

This is not always possible. P( X ) = Integral ( P(Z,X) \* dZ)
. Integrate over all the configurations of the latent variables, which has excponential cost in regards to the number of variables, becoming intractable very quickly.

Variational Bayesian Methods

Since P( X ) is intractable, we can approximate the true posterior P( Z | X ) by using a variational distribution Q(Z)
. Also called guide.
. We use P to denote the true distribution and Q to denote the approximated distribution

Define a Family of distributions Q from with we are going to pick the ideal candidate, that better fits the true distribution P.
We usually use a friendly distribution family, such as gaussians to simplify our life.
Its Parameters are grouped in a vector Theta, so in practice we're looking for a Theta*that minimies the discrepance between Q* and P.
Tehta and Z are often grouped toegher and called unobvserved variables.
How to fide the best Q\*?
. Need a measure of similarity between p and q that we can use as a metric during our search
.. We Use the Killabck-Leibler Divergence

The KL Div can be used to measure the smimilarity between tw distribitutions.

```
. Non Negative
. Not Symetric. 
    .. Doesn't satisfy the triangle inequality
    .. KL( P || Q ) != KL( Q || P )
                        .. |> This one is called the backward
            |> This one is called the forward
        ... Trick: Use the bump of the P. 
. Imagine a bi-modal distribution with two symmetric modes
    KL( P || Q ) is mode averaging
    KL( Q || P ) is mode fitting. 
```

How can we measure the similarity between KL( Q( Z ) , P(Z|X)) if we can't estimate P( Z | X ) in the first plance?

We can rewrite this equation such that
KL( Q( Z ) , P(Z|X)) = Eq\[ log( q(z)) - log\*p(x,z)] + log( p ( x ))
which means
Eq\[ log( p(x,z) ) -  log( q(z))  ] = log( p( x )) - KL( Q( Z ) , P(Z|X))

we can then just maximize the tractable quantity on the left.  This means we're maximizing log( p(x)) while minimizing KL( ... ).

Since KL( ... ) is always positive, the quantity we're maximizing is a lower-bound for the log-evidence. We call this the Evidence Lower Bound.

```
ELBO( Q ) = Eq[ log( p( x, z)) - log( q(z))] = Eq[     log( p(x,z)  / q(z))   ]
```

Variational Inference focuses on optimization instead of integration, and can be applied to many probabilistic models. Is numerally stable and fast to converge.

<https://mpatacchiola.github.io/blog/2021/01/25/intro-variational-inference.html>
<https://www.shakirm.com/papers/VITutorial.pdf>

___

## Markov Chains

<https://towardsdatascience.com/understanding-markov-chains-cbc186d30649>

What would be the difference between markov chains and DFAs?

```
. DFA's models the change in mode from a input perspective
. Markov chain puts it in a more statistical perspective
```

Where does NFA's enter here? need to understand them better.

"Markov Property:
The future state of the system is based only on the current state of the system"

___

## Survival Analysis

<https://www.youtube.com/watch?v=WZNmlT-arF0>

analise de sobrevivencia

metodologias relacionadas a prever o tempo ate um evento acontecer

```
Event  - What you want to predict

Time - Period taken to see the event

Censoring - occurs when we don't know the time until the event. 
```

Survival Function
Hazard Function - The instantaneous potential per unit of time for the event to occur , given that the individual has survived up to time T.

Goals
Estimate and interpret survivor functions from data
Compare survivor and or hazard functions
Assess the relationship of explanatory variables to survival time.

Cox Model
\-> Baseline function  ;
\-> Supposes hazard function has form L( T | X ) = L0*T* exp( phi(x )), where P = x'\*B

Concordance Index
\->  People with higher hazard should take less time until event

Consider using when
. Tim eis related to the target definition
. Dealing with censoring
. Have a small quantity of data
. Recent data is very important for your problem

## Scoring Systems

\_\_

<https://www.anishathalye.com/2015/03/07/designing-a-better-judging-system/>

Most judging methods are themselves flawed
. There are constraints in the numbers of judges, and the amount of time there is for judging to take place; Given the constraints, how we produce the highest quality judging results possible?
.. Isn't this what i'm doing with my read laters?

```
. Instead of juding producing absolute scores, perform pairwise copmarisons. 
```

. Average
Judge A gives X a 7/ 10 ; Judge B gives a 4/10. What does that mean? is x objectively better than y? or is judge b harsher than a?
. Normalizing
Improvement over average by normalizing judges scores ( by mean and std ).
. Judges look at a tiny fraction of the entries.

assigning numerical scores to entries is not a task that people are good at.
. Judging the first entry, judges have no context and nothing to compare it to when assigning a score. After many entries, judges outlook may change - results aren't independent of the order they're judged.

Pairwise comparison, on the otherhand, is something we're good at.
. We won't necessarily have a copmarison data between every pair of entries . We just do not want disjoint sets of entries that are never even indirectly compare to each other.

```
. Luce's choice axiom ???

. How to turn the measurements into judging reults?
```

"Any pair of entries may be compared with each other zero or more times, and jusges may have conflicting opinions about the comparative quality of entries. "
. We can think of the measuresments as a directed graph on nodes , having non-negative integer edge weights derived from the number of times End was judged better than Ej -> Arrows point to better entries.

```
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
```
