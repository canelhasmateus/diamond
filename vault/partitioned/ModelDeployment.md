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
