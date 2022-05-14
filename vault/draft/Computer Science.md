# ...

Array
 -> Two most primitive array operations are writing elemenbts into them, and reading elements from them
 -> All other array operations are built on top of these two primitives.
 
 -> There is a difference between the array capacity and its length.
  -> Capacity is the number of objects the array COULD hold, it it was full.
  -> Length is the number of objects currently in the array.
  
___

<https://www.youtube.com/watch?v=D7JBJ72R_I4>

Intro to theory of computation

What is Computation? What are things that computers can do?
    .
why we care
    .

____

<http://raganwald.com/2016/11/30/anamorphisms-in-javascript.html>

Anamorphisms are functions that map from some object to a more complex structure containing the type of the object. For example, mapping from an integer to a list of integers.

Linear recursion is a special case of divide-and-conquer
    .. Recursion Types

Writing traversals separates the concern of how to iterate over a data structure from the concern of what to do with the elements of the data structure.

____

<https://www.youtube.com/watch?v=BxnaZscU6zk>

Coroutines

Separate from  generators

Generators abstract iteration of values
Coroutine abstract consumption of values

Generators pull data through the pipe with iteration
Coroutines push data into the pipeline with send

Coroutines and state machines

Multitasking is implemented by the Operational System.
    Usually by means of Either Interrupts or Traps
    yield is a trap

___

___

How exactly does the whole 'core, process, variable, registers , slots and stacks' work?

    Process Control Block
        Process State 
        Process Number
        Process Counter
        Registers
        Memory Limits
        List of open files
        Signal Mask 
        CPU Scheduling info
    
    Since a process is entirely described by a pcb, whenever we wanna fork a process, essentially al we have to do is copy a parent control lblock to a child process control blcok. 

___

# Memory Management

# ...

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
