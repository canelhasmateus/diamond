---
created_on: 2023/01/05 22:31
kind:
tags:
---

# TCPFlags

___

## `PSH` Flag

The Push flag usually means that data has been sent whilst overriding an in-built [[TCP]] efficiency delay, such as [[NagleAlgorithm]] or Delayed Acknowledgements.

These delays make TCP networking more efficient at the cost of some latency (usually around a few tens of milliseconds).

 [[HTTPCongestionControl]]?

 [[PatternTradeoff]]

A latency-sensitive application does not want to wait around for TCP’s efficiency delays so the application will usually disable them, causing data to be sent as quickly as possible with a Push flag set. [[LatencyOrThroughput]]
