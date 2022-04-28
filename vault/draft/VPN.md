VPNS
https://www.youtube.com/watch?v=JIA4ca0afnY


Normally, whern connecting to a site, we first do a dns lookup to find the IP address of the domain.
With the IP address, it stablishes a tcp connection, binded to a specific port in the client and another and the server. 

When sending a request, we translate it into packets, and shove it inside a IP packet. 
An IP Packet has just a source and destination ip. 
IP isn't secure. Anyone in the route to yyour destination, such as your ISP, can know where you're going to. 
We can secure IP ( IPSec ) : A negotiation protocol between hosts. Once they exchange keys, they encrypt the whole IP packet, which means that every other protocol that goes above it gets encrypted for free. 
To get around addressability, we put this encrypted packet inside another ip packet, addressed to the host ( VPN )

IPSec is easily identifiable. 
    does this means isp's could block vpns? [[expand
    ]]


why we can't use mac addresses? because mac addreses are random, that is: there are no routability to them. To send a request to a mac address you'd need to scan the entire internet. 


