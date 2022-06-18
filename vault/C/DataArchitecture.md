Competing Architectures

 Lambda
  Good for batch , but poses problems for event data
  Hybrid Layers
   Batch
    Large Scale Analytics or Historical Data
   Speed
    Low Latency Processing of newly arrived data
    Can also be seen as approximate results
   Serving
    Provide Query capabilities that unifies the Batch and Speed layers.

 Kappa
  Modified architecture where everything is seen as a stream
  Most popular among these engine are all open-source apache projects:

   Apex
   Beam
   Flink
   Storm
   Spark
