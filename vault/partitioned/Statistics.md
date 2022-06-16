
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
