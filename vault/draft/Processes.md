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
