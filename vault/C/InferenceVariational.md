___

Variational inference

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
