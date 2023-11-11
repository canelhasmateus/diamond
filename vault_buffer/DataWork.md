___

# That coursera google

DS Google
data integrity
duplication

sample size , random sampling

Ask -> Prepare
Process -> Analyze
\=> Share act

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

```
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
```

___

# Data Viz

<https://www.youtube.com/watch?v=uekdj1MxNAg>

Comparing traditional vs grammar of graphics

___

- As humans, we like to \[\[look at pretty charts]].  Coupled with the fact that \[\[HumanPhenomena| We like to look at pretty charts]], pervasive problems can become masked.

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

```
Going Beyond 1 Performance Metric

    Look at performance of model across various slices or cohorts of predictions
```

What about the ones where the actuals are not fast?
( Delay , Few or No Ground Truth , Biased Actuals )

```
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
```

Data Quality
\=> Missing ata
\=> Invalid Data
\=> Noisy Data
\=> Duplicated Data
\=> Out of Range Violatijons
\=> Cardinality Changes
\=> Type Mismatch
\=> Unexpected Traffic

"Performance Tracing"
. Arize is patenting it

Mirrored Histograms

DataSources => Feature Processing => Feature Store ( Tecton / Feast ) -> Build a Model => Model Store ( MLFlow , Weights and Biases ) => Model Serving ( KubeFlow / Algorithmia ) => Online Porudction Logs -> Evaliation / Inference Store ( Arize )

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

## optimization

<https://minimizingregret.wordpress.com/2016/03/02/making-second-order-methods-practical-for-machine-learning/>

usually , second order methods are too costly to be implemented in production.
. Can be show to converge to the optimium of a quadreatic function in a single iteration , but requires the calculation of the hessian and a matrix inversion, which is naively O( n^3 )
.. Usually, its better to not invert the matrix, but solve the linear system . <https://scicomp.stackexchange.com/questions/26423/practical-example-of-why-it-is-not-good-to-invert-a-matrix>
.. Could also take an spectral approximation ( ?? ) approach to speed up inversion .
. Neumann Series ( ?? )

___

# HiveMetastore

HIve

```
Query Interface to hadoop ( HDFS)
    . Query ENgine
    . Metastore


With time, other technologies dismantled there

HDFS -> Object Storage ( AWS S3)
Map Reduce -> Spark 
Yarn -> Kubernetes
Query Engine -> Presto / Trino
```

When saving new data, we register it into hive metastore
. Maps a set of objects in the objsect store to a table exposed by hive
.. Schema of the table held in the file, with metadata
. Leads to
.. Virtualization
When using sql, not interested in the detail of object stora.

```
    .. Discoverability
    Becomes a catalog of all the collections held in object storage 
    Can also add supplemental: Update frequency, owners
    .. Schema Evolution
    Mutability is a challenge of managing data sets ; 
        Records may change over time with respect to the existing columns describing their attributes 
        The set attributes itself changes, resulting in a change to the schema
    


    .. Performance
        . Parition prunning? 
```

POssible replacements
. Difficult to install and maintain
. Not architected cloud-native, complicating managed service implementations
. Scalability 5restrictions from relational db relianceow
. No direct, but  . .. | specially because the metastore is a general interface supported by all applications.

Open Table Formats
. Iceberg
efficiency in large tables
. Hudi
mutability
. delta lkae
mutability
schema enforcement and evolution

Data Catalogs
Many open source discovery tools
acryl
data portal
amundsen
apache atlas
atlan
azure purview
castordoc
collibra
data galaxy
data world
databricks unity catalog
datahub
facebook nemo
google data catalog
metaphor
netflix metacat
secode
select start
shopify artifact
spotryify lexicon
stemma
uber databook
zeenea
Observability
monitoring the quality of the data pipelines oeprationally, or the data itself
. Databand

```
    . great expectations
    . monte carlo ( https://www.montecarlodata.com/ )
```

___
