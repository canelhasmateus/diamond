
Sampling methods

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

___

<https://betanalpha.github.io/assets/case_studies/probabilistic_computation.html>

Quadrature methods:
    Just discretize using a grid lol
        . The construction of sophisticated grids to minimize errors is a core topic of the quase-monte carlo literature
        . The interpolation scheme is also configurable.

    Not great because any attempt to exhaustively quantify a space to estimate expectation values is largely limited to one or two-dimensional problems. In order to scale, we need need to be smarter, and identify exactly where in the ambient space we should be focusing that computation.
        . The answer is obfuscated by the counterintuitive behaviors of high-dimensional spaces:

Welford accumulators?

typical sets

___

<https://www.youtube.com/watch?v=a7ZZCdm40Ik>

Marketing <-> Effect studies

. Simple A/B test
    ->
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

____

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
  AIC = ( -2 ) x lppd + 2*k
    |  |    |---> Number of parameters
    |       |
    |  |----------> Log Pointwise predictive density.
    |
    |------------------> Scaling parameter

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

    Any mechanism by which we deduce the probabilities in our model based on data.

    Inference links the observced data with our statiscal assumptions adn allows us to ask questions of our data: predicitions visualizatrion and model selection. 

![](2022-03-31-17-16-36.png)

![](2022-03-31-17-16-56.png)
Inference Methods

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

This is not always possible. P( X ) = Integral ( P(Z,X) * dZ)
    . Integrate over all the configurations of the latent variables, which has excponential cost in regards to the number of variables, becoming intractable very quickly.

Variational Bayesian Methods

Since P( X ) is intractable, we can approximate the true posterior P( Z | X ) by using a variational distribution Q(Z)
    . Also called guide.
    . We use P to denote the true distribution and Q to denote the approximated distribution

Define a Family of distributions Q from with we are going to pick the ideal candidate, that better fits the true distribution P.
We usually use a friendly distribution family, such as gaussians to simplify our life.
Its Parameters are grouped in a vector Theta, so in practice we're looking for a Theta*that minimies the discrepance between Q* and P.
Tehta and Z are often grouped toegher and called unobvserved variables.
How to fide the best Q*?
    . Need a measure of similarity between p and q that we can use as a metric during our search
        .. We Use the Killabck-Leibler Divergence

The KL Div can be used to measure the smimilarity between tw distribitutions.

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

How can we measure the similarity between KL( Q( Z ) , P(Z|X)) if we can't estimate P( Z | X ) in the first plance?

We can rewrite this equation such that
    KL( Q( Z ) , P(Z|X)) = Eq[ log( q(z)) - log*p(x,z)] + log( p ( x ))
which means
    Eq[ log( p(x,z) ) -  log( q(z))  ] = log( p( x )) - KL( Q( Z ) , P(Z|X))

we can then just maximize the tractable quantity on the left.  This means we're maximizing log( p(x)) while minimizing KL( ... ).

Since KL( ... ) is always positive, the quantity we're maximizing is a lower-bound for the log-evidence. We call this the Evidence Lower Bound.

    ELBO( Q ) = Eq[ log( p( x, z)) - log( q(z))] = Eq[     log( p(x,z)  / q(z))   ]

Variational Inference focuses on optimization instead of integration, and can be applied to many probabilistic models. Is numerally stable and fast to converge.

<https://mpatacchiola.github.io/blog/2021/01/25/intro-variational-inference.html>
<https://www.shakirm.com/papers/VITutorial.pdf>

___

## Markov Chains

<https://towardsdatascience.com/understanding-markov-chains-cbc186d30649>

What would be the difference between markov chains and DFAs?

    . DFA's models the change in mode from a input perspective
    . Markov chain puts it in a more statistical perspective

Where does NFA's enter here? need to understand them better.

"Markov Property:
    The future state of the system is based only on the current state of the system"

___

## Survival Analysis

<https://www.youtube.com/watch?v=WZNmlT-arF0>

analise de sobrevivencia

metodologias relacionadas a prever o tempo ate um evento acontecer

    Event  - What you want to predict

    Time - Period taken to see the event

    Censoring - occurs when we don't know the time until the event. 

Survival Function
Hazard Function - The instantaneous potential per unit of time for the event to occur , given that the individual has survived up to time T.

Goals
    Estimate and interpret survivor functions from data
    Compare survivor and or hazard functions
    Assess the relationship of explanatory variables to survival time.

Cox Model
    -> Baseline function  ;
    -> Supposes hazard function has form L( T | X ) = L0*T* exp( phi(x )), where P = x'*B

Concordance Index
    ->  People with higher hazard should take less time until event

Consider using when
    . Tim eis related to the target definition
    . Dealing with censoring
    . Have a small quantity of data
    . Recent data is very important for your problem
