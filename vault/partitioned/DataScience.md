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

Confidence Based Performance Estimation caqn enable us to reliably predict the expectedf performance ( area under ROC ) of a machine learning model when the ground truth is not available

<https://towardsdatascience.com/predict-your-models-performance-without-waiting-for-the-control-group-3f5c9363a7da>

<https://docs.nannyml.com/latest/deep_dive/performance_estimation.html>

___

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

<http://nadbordrozd.github.io/blog/2017/08/12/looking-for-the-text-top-model/>

Use embeddings as input to a model.
There are better ways to do it than averaging

___

<https://towardsdatascience.com/understanding-markov-chains-cbc186d30649>

What would be the difference between markov chains and DFAs?

    . DFA's models the change in mode from a input perspective
    . Markov chain puts it in a more statistical perspective

Where does NFA's enter here? need to understand them better.

"Markov Property:
    The future state of the system is based only on the current state of the system"

___

 "A kernel is an operator on a hilbert space"

___

<https://homes.cs.washington.edu/~jrl/teaching/cse599swi16/notes/lecture1.pdf>

entropy[

    a probability mass function is P : OMega -> [ 0 , 1] | sum(xeq) * p(x) = 1
]

the entropy is the value

H( p ) = - Sum(  P(x) & log( p( x )))

"The amount of uncertainty in the value of the variable X"

It is readily apparent that given a compact set, the most entropic P is the uniform function.

Relative Entropy

Given Two probability mass functions P, Q, one defines the relative entropy of P with respect to Q ( Also called the Kullback-Leibler divergence ) as

D( P || q ) =sum( p(x) * log( p( x ) / q( x ))

is quantity is often thought of in the following context: q is a prior probability distribution
(representing, say, the assumed state of the world), and p is the posterior distribution (after one has
learned something by interacting with the world). In this case, D(p k q) represents the amount of
information gained. Another operational definition: D(p k q) is the expected number of extra bits
needed to encode a sample from p given a code that was optimized for q

___

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

<http://nadbordrozd.github.io/blog/2020/09/07/embedding-sets-of-vectors-with-emde/>
 "Think of preferences as probability density functions defined on the manifold."
 Paralelos com
  Count Sketch
  Locality-Sensitive Hashing
  Probability Density Function

___

Regressão em cima de uma função Z = ceil(x + y)
This Should vê a diagonal staircase and a rotation Should help decision Forest.

___

<https://engineering.fb.com/2021/02/09/developer-tools/minesweeper/>

PrefixSpan is an algorithmn which is well known for being highly efficcient at sequential pattern mining.

Facebook uses it in its Root Cause Analysis automation , called Minesweeper.
It finds patterns with good Precision , Recall , F1 between  Bug and Bug-free traces. It also tries to remove redundant Patterns.


___

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
