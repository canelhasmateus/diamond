
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
