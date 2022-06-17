PSH Flag in TCP
The Push flag usually means that data has been sent whilst overriding an in-built TCP efficiency delay, such as Nagle’s Algorithm or Delayed Acknowledgements.

These delays make TCP networking more efficient at the cost of some latency (usually around a few tens of milliseconds). A latency-sensitive application does not want to wait around for TCP’s efficiency delays so the application will usually disable them, causing data to be sent as quickly as possible with a Push flag set.

tcp buffers?
