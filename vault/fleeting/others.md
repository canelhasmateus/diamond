
 #


 Https migration 
    
    Why take so long to migrate everything?

    Unknwons : 
        . The numbers of request would increase; 
            .. https redirections
            .. increased crawl rates by engines 
        . Since they didn't know how much, they done it slowly, while setting up monitoring. 
            .. More 301's 
     Blocking issues: 
        . There were No tests for the transition;~
        . Needed the change to be made at the same time  ; why ?[[expand ]]
        
        . Affected the display of advertisements, which would mean a meaningful impact on revenenue. 
    
Strategies: 
    
    . Started rolling to logged in users first, since it would not affect engine crawling. 
    . Wrote tests to catch mixed content warning or http links on the page. 
    . Migration page by page, behind a toggle that served https pages only to logged in users. 
        .. several users still had stale pages , from cachee, so needed to support http urls for a period after the flip. 


Around 150% increased requests only;
Some distruptionb because of the way the cache headers were setup:
    . http was being cached, and https was not. 

Https Meta Referrer tag??



