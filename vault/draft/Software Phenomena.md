
# Additive Increase, Multiplicative Decrease

# Cooperative Throttling

# Head of Line

# Head of line blocking

Head of line Blocking is a fundamental limitation of the TCP Protocol.

It happens because of the retransmission mechanism implemented by tcp.

When making a request, it will be translated as a stream of bytes ( few packets ) in the Client - Server Bidrectional TCP connection

For each sent packed, its necessary for the server to achknowledge its receival to the sender, so it can re-send it after some time, in case of lost packets.

Only after every packet is acknowledged, the server assembles then into a request.

When using Http2 Multiplexing, the underlying TCP connection cannot differentiate the bytes from different streams when assembling the requests.
    . Suppose we send 2 requests by means of http2 multiplexing.
    . Suppose also, that all of the second request packet's get acknowledgeded , but a *single* packet from the first requests doesnt.

    . Since the underlying tcp connection can't differentiate between these two packets, the second request gets stalled until the lost packet from the first, unrelated request gets acknowledged. 

# Tail Latencies

# Cascading Failures

# Coordinated Omission

[[todo]]
check HdrHistogram

            . coordinated omission problem
                .. accidental conspiracy
                example:
                    
                    start = time()
                        do
                    finish = time()
                        return finish - start
                the trouble is that long operations onlu get measured once
                delay outside of timing window do not get measured at all
                
                "vertical rises in the latency tend to indicate omission"

                very few tools deal with it correctly.


___

