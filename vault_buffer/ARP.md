ARP

Maps Ip addreses to mac addresses

Why?

```
    we need mac to send frames ( layer 2 )

    Most of the time, we know the ip address , but not the mac. 
    
    this process is expensive, so its cached locally, in an ARP table 
```

Network Frames

```
encapsules the ip packet

![](2022-04-03-12-13-24.png)

what if the target ip address does not fall inside the local network?

in this case , the application sends an arp request looking for a default gateway. then, it builds the network frame and sends it. 
```
