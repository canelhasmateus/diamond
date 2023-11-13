---
tags:
    - network
    - metrics
    - concept
---

# CoordinatedOmission

Coordinated Omission is a phenomenon in software.

It occurs frequently in measuring and benchmarking.

```example
def measure( fn ):
    start = time()
        fn
    finish = time()
        return finish - start
```

Notice that any delay outside of the timing window isn't measured at all. See [[ResponseAndServiceTimes]] for disambiguation on Response vs Service time.

Very few tools deal with it correctly. For example, WRK.

> \#todo "vertical rises in the latency tend to indicate omission"
> check HdrHistogram
