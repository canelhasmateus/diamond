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
(Sampling can help with this)[https://www.jeremyjordan.me/content/images/2019/05/tree_ensemble.gif]. 
    . This is knwon as bootstrap aggregating or bagging for short. 

Since each tree sees only a subset of the data during training, we can get away without using a proper validation set. This is called "out of bag estimations"

https://www.jeremyjordan.me/random-forests/
