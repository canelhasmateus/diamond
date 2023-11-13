# ApacheBeam

Windowing Model

Splits dataset into smaller groups for processing
Unbounded Data:
Windowind is required for some operations like aggreation , outer joins, and time-bounded operations
Bounded Data:
Optional

Windowing is time based over a logical time domain
Elements have
Aligned or unaligned:
???

Kinds:

Fixed Windows:
Static window size ( hourly, daily )
Also called Tumbling Windows
Sliding Windows
Defined by a window size and slide period ( hourly windows stating every minute )
Sessions:
Windows that capture some period of acitvity over a subset of the data, in this case per key

Triggering Model
Incremental Model
Stateful Model
Scalable
Portable

Event Time vs Processing Time

Triggers
Mechanism for stimulating the production of resultsi n respoinse to internal or external signals
Provide a way to control how multiple panes for the same window relate to each other, bua three modes:
Discarding
Window contents are discarded, and later results bear no results to previous results
Accumulating
Windows contets are left intact in persistent state, and later results become a refined of previous results
Accumulating and Rectracting
In adiction to acumulating, a copy of the emitted value is also stored in persistent state

Complementary to the windowing model
Windowing determines where in event time data are grouped together for processing
Triggering determines when in processing time the ersults of groupings are emitted as panes.

Stateful Model

Operations like transform are stateful
THe staete is partitioned by key and per window

PipeLine Questions
What results are being computed
Where in event time they are being computed
When in processing time they are materialized
How earlier results relate to later refinements

Runners

The beam pipeline runners translate the data processing pipeline
Need to specify an appropriate runner for the back-end where you want to execture your pipeline

Individual capabilities are grouped by their corresponding what / where when how question

Capability Matrix

Runner Matrix

What

ParDo
GroupBYKey
Flatten
Combine
Composite Transforms
Side Inputs
Source API
Splittable DoFn ( SDF )
Metrics
Stateful Processing

Where ( in event time )

Global  Windowsw
Fixed Windows
Slideing WIndows
Session WIndows
Custom WIndows
Custom mergin windows
Timestamp control

When ( in processing time )

Configurable triggering
Event-time triggers
processing time triggers
count triggers
\[Meta]data drive triggers
composite triggers
allowed lateness
Timers

How ( do definements fo result relate )

Discarding
Accumulating
Accumulating & Retracting

Steps

Design
Plan the pipeline strucyture
choose transform to apply
Determine input and output methods
Create
Use the classes in the Beam SDK
Test
Test to minimize debugging a pipeline remote execution
Deploy
Use one of the supported Runners

Why beam

Unified batch and streaming
Layered Abstraction
Runner portability
Stateful Processing
GCP integration

Programming Model

PCollections
Transforms
Pipeline I/O
Data Encoding
Windowing
Triggers
Metrics

___
