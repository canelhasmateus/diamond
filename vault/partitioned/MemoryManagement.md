# Memory Management

#

<https://blog.heroku.com/tidying-ruby-object-allocations>

    We can gain speed by focusing on object allocatins
        
        . Take all allocations and put them in a pile where you can see them
            .. Memory Profiling
            .. ( Derailed benchmarks)
        . COnsider each one: Does it spark joy? Keep only those.
            .. Useful
            .. Keeps your code clean
            .. does not cause performance problems
        
        . Why?
            "Malloc is slow"
        

    Can we replace allocation while maintaning correctness?


    Important to talk abou tstatistics and their impacts when talking about benchmarks. 
        . every time we measure a value, it could be because of randomness. 
        . check for statistical significance
            .. t 0test vs kolmogorov?

    

    https://www.schneems.com/2019/11/07/why-does-my-apps-memory-usage-grow-asymptotically-over-time/
        
    

    There is a range of topics you need for the full picture: object slots, slot versus heap allocation, generational GC, incremental GC, compacting memory, fragmentation due to malloc implementation, etc. But for now, this simplification is good enough.

<https://www.sitepoint.com/ruby-uses-memory/>
    Minimize object allocation.
