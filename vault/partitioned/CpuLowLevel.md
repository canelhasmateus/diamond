
<https://www.youtube.com/watch?v=UCK-0fCchmY>
<https://www.youtube.com/watch?v=tde8lhFdczI>

set associative caches

current arch caches are set-associative
    . Broken into sets, and each set contains a specified number of elemnets , the so called associativity
    . Each element is called a cache line or a cache block
    . the cpu always communicates with ram and its caches in cache lines.
    . currently, 64bytes
    . Start of cache lines: 0x00 0x40 0x80 0xc0

The CPU uses a "Tagged Pointer" approach to find the cache and the offset.
    . For example, in a 64 bits address, use the first 8 to encode the set, the next 8 to encode the tag.

When evicting, each cpu executes its Policy Eviction, which varies but is usually LRU.

 s


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
