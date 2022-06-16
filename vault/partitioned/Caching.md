
<https://www.youtube.com/watch?v=pLRztKYvMLk>

We use the fundamental blocks fo infrastructure all the time, but Some of the fundamentals problems do not go away;

"Uses hash cavity 2 to get a temporary view over the time series "

Cacheing is a 'solved' problem
many solutions
    . Mcached
    . Redis
    . SlimCachce
    . FatCache
. Many Ways to fall below SLA
    . Tail Latencies
    . QPS

. Hotkeys and DDOS
    . Backpressure is not part of the design

. Hard to debug

.  capacity planning surprises
    .. external fragmentation is a bitch
    .. Connections keep a live
    .. Running on containers means that going over the planned resources will kill your job, which is *very* bad for stateful services, like cache.

Cache we want
    . Covers all our use cases
    . Easy and fun to work on
    . Is production ready
        .. What is production-readiness, even?
        .. Eg. Log Rotation -> Can't use their solution without their context

Production Ready
    . Predictable
        .. Tail-Latency and performance
        .. Failure Behaviour and degradation
        .. Resource footprint
    . Observable
        .. Ready to be monitored
        .. Debuggable
        .. Reveals internal flow
        .. Analytics-friendly
    . Flexible
        .. configurable
        .. Composable
        .. Quick to develop features

Structural Integrity first , then code-reuse
    . Careful with over-generalization

Log , Stats, Config
    . Ubiquitous paradigms
    . Make them cheap, configurable
    . Make them composable
        .. Waitless Logging
        .. Lockless Stats
        .. Modular Config

Cuckoo hashing ( ??? )
