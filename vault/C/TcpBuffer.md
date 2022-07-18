4

What your describing is called TCP Windowing.

There's a nice explanation here

Excerpt:

When discussing TCP Windows, we are most often referring to the TCP Receive Window. Simply put, a TCP Receive Window is a buffer on each side of the TCP connection that temporarily holds incoming data. The data in this buffer is sent to the application, clearing more room for incoming data. If this buffer fills up, the receiver of the data will alert the sender that no more data can be received until the buffer is cleared. There are several more details involved, that that is the basic function. A device advertises the current size of its TCP Window in the TCP Header information.

It is possible to throttle the stream by closing the window, although you can just as easily stop reading from the buffer and let the protocol do its job.

Some of the messaging products manage this by using a secondary buffer's to minimize the impact of getting overrun by data. Most of these products are mainly UDP broadcast/multicast though. At some level though, if your client can't keep up, your going to have issues.
___


References

1. <https://stackoverflow.com/questions/42857662/understanding-buffering-in-tcp>
2. <https://www.haproxy.org/oldstuff.html>
3. 

