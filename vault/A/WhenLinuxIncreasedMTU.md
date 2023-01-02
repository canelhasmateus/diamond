---
kind: ramble
---

# WhenLinuxIncreasedMTU

<https://www.youtube.com/watch?v=llRX_34X8WY>

[[Linux]] 5.19 Big TCP

[[ProtocolInternet]] has the concept of [[PacketFragmentation]].
It allows packets to be fragmented into smaller pieces and creates some [[PatternTradeoff]]

* Efficiency
    Protocol overheads such as headers become comparatively smaller when using bigger packets.
    Also, some systems have per-packet-processing overheads.
* Speed
    Larger packets occupy a slow link for more time than a smaller packet, causing greater delays to subsequent packets.
* Errors
    If no forward [[ErrorCorrection]] is used, corruption may require that the entire be sent again.

The #packet size is determined by the #MTU and is around 1500 bytes for [[EthernetFrame]]s. The maximum possible MTU is 2^16, the biggest number representable by the IP ``Length`` header.

> # todo Linux was done with this in mind, and Linux 5.19 supports jumbograms.
> WHere is this mtu configured?
