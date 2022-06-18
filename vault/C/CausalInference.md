
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
