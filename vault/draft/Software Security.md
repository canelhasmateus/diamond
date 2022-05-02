

Security is an important topic when discussing software. 



TLS
MITM


Examples


[[security.hsts]]



#... 
 

Very shady because no need for any kind of authentication. Can run some scripts automatically by using some "preinstall" function


ALG Application layer gateay
nat slipstreaming
arp spoofing attack



___



https://www.youtube.com/watch?v=Yfsmc0b8o78

The compiler serves two masters , and carries some authority from each to perform its duties; it has no way to set them apart. 
    Confused deputy

The browser is a confused deputy. 
    . It  has authorization to call an authenticated request ; but this can me misused by making a xss 

 this can be seem as a way to developing Capability-base security ( ??? )



___




# [[Syn Attack]]

# [[Replay Attack]]

# [[DDOS]]


# [[Connection Hijacking]]

# [[TCP Veto]]


# [[Reset Attack]]





Securing against attacks
	
[[MitM]]
* Configure DNSSec in [[Route53]]
* Use [[SSL]] certificates in application load balancer
			

[[DDOS]]

* Enable AWS Shield Advanced: It provides a AWS DDoS Response Team, as well as a Global Threat Environment of the attacks
* Use Larger Instances and swallow the requests. Use 25 gb network interfaces and enhanced networking.
* Use Load Balancers, Ensuring that only well formed web requests are routed.
* Use CloudFront to distribute content, accepting only  well formed connections and using Edge locations to reduce load

* Use the Web Application Firewall: Integrates with CloudFront and Load Balancers. 

