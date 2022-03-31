# Browsers and default https

https://www.youtube.com/watch?v=XrlfX0duLKQ&

Usually, when specifying a schemaless origin, ( no http:// or https://), browsers default to using http://, for historical reasons.

To deal with this, service providers usually implement Redirection Chains. 
This is not performatic, since it requires the stablishment of multiple connections, along with multiple round trips. 

It is also not secure, since for at least one request we're not using https. 

This opens a opportunity for Man In the Middle Attacks, since the first request can be intercepted by "bad" parties, and redirected to phishing domains. 

Recently, browsers have decided to default to https.




# Google And Linux Drives

https://www.youtube.com/watch?v=kVYgN1D2FlA


when  shutting [[linux]] down, it takes 5 seconds for each drive to shut down. Considering google has boxes with many drives ( upwards of 16) , it can take a long time to reboot, since the current linux bus api is [[Asynchronicity|synchronous]]. 





# Lucid Charts and Http2


https://www.youtube.com/watch?v=6cncmSaRqzQ

Lucid charts switched to using [[Http#Http 2|Http2]]. They noticed an increased load in the backend servers, which slowed it to a crawl. 

This is a possibility: Since http2 will use a single tcp connection to send multiple requests, it will not longer be limited by the usual 6 connections by the browser, increasing concurrent load. 

Consider the fact that the servers must also buffer the packets, order and rearrange the incoming packet streams, so it takes increase cpu and memory load to even assemble the requests.

A further point to be made, is the interaction between http and [[Load Balancing]]. They upgraded the http only in the public side of the load balancing, while keeping http 1 in the load-balancer -> backend path.
This leads to a problem: Since the  load balancer can only send a single request inside each tcp connection, when the browser sends its many ( unbounded ) concurrent requests , the load balancer is forced to open a new tcp connection to the backend for each of them. 

Lucid charts opted to do [[Software Techniques#Rate Limiting]] , which solves the problem, but is an arguable solution. It would be better to do [[Troubleshooting#Root Cause Analysis]] , and discover why the browser was sending that many requests in the first place, and coalesce the redundant requests, or remove them entirely. 



# Demoing and Expectation Management

Its frequent, in the process of [[Product Building]] and conceptualization to create demos and mvps. 

Visuals are very helpful in converying meaning and context, and is important to the field of [[ Data Science]] , through [ [ DataViz]].  

We often are tempted to make the demo/graph look as good as possible, out of professionalism and zeal, as there is an obvious force in the visually engaging nature of beaautiful imagery.


However, its important to be transparent when doing so: The appearence of the presentation should reflect the level of polish-ness of the results. 

Its very possible that what is shown is simply not possible. Even if it is, its a fact that  when you building up expectations, you look silly when you aren't [[Psychological Expectations|able to meet them]].


Managing these expectations is good for both you and your peers. 
There is an subtle issue that people inconsciusly calibrate their criticism base on their impression of where you are in the development process, even if you repeatedly remind them that the design is just an early sketch.


A highly polished image that may look like a screen shot of an implemented UI, or at least the result of many weeks' will lead to [[Implicit Assumptions|assumptions]] that only small details can be changed at this point. 

Show them something pretty, and you'll get feedback on font sizes - they never suggesting anything so bold as starting over.


The reviewers make incremental tweaks, blinded by  what is in front of them. By showing them something as crude as a napkin sketch, they don't  see what's there, they see what's possible. You need to implicitly tell reviewers about the kind of feedback you do want at this stage. 

Another point worth mentioning is that people may have difficulty criticizing a design if it seems far beyond what they could have created themselves. 


Is it possible to make web UI's look crude, with the napkin  look and feel? 

    https://9elements.github.io/fancy-border-radius/
    https://border-image.com/
    http://thenewcode.com/438/CSS-Border-Image-Explained
    [[expand]]


References:

    https://www.chrisstucchio.com/blog/2014/why_xkcd_style_graphs_are_important.html

    https://headrush.typepad.com/creating_passionate_users/2006/12/dont_make_the_d.html

    https://anvil.works/blog/xkcd-style-apps



# Garbage and Immutability
    
Immutable Objects can be gentler to generational [[Garbage Collection]]. 

Usually,  when a holder object is updated to reference a different object, the new referent is a young object. 
If we update a "MutableHolder" , we have created a situation where an older object references a younger one. 
If a object that lives in the old generation is mutated, all the objects on the card that contain it must be scanned for old-to-young references at the next minor collection.

References:
    https://stackoverflow.com/questions/35384393/how-do-immutable-objects-help-decrease-overhead-due-to-garbage-collection?utm_source=pocket_mylist




# Load Balancer Invisible Buffering


possible problems
        using HAproxy is easy, but it silently introduces a new tcp buffer
            the cache spits out payload as quickly as possible, and the server sends data frames with the highest stream priority first
                The Load Balancer foils this, since, as long as its tcp buffer ius not completely filled, the lb will accept more data from the server : This quickly drains the server buffer, but from there on out, the priorization does not work anymore.

        HOL blocking
            Http2 solves the http head of line problem, it still suffers from tcp hol blocking : 
                tcp buffers are serialized fifos. this means that , once something is in that queue , you need to download it before going to the next one
                    .. Shouldn't multiplex solve this? 
    


    https://calendar.perfplanet.com/2018/http2-hol-waterfall/


