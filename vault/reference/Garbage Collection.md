Garbage Collection is a [[technique]] for [[Memory Management]]. 

It sits in contrast with [[Manual Memory Management]], usually implemented by closer-to-metal languages, such as [[C]].


The problem with Memory Management is that: Allocating [[memory]] consumes a finite resource. This [[resource]] must be recycled, else it depletes, crashing systems. 

Thus, we need a way to free or reclaim already used memory. Garbage Collection does this by analyzing which parts of the memory are not being used anymore, and automatically free it. This, of course, is not free and requires [[bookkeeping]]. 


The garbage collection process is usually done in [[discrete processes]]. This means that i can be triggered in unwanted situations, leading to loss of responsivity, making it unsuitable for some applications. 


There are several schemes and [[heuristics]] devised to make garbage collection better and faster. 


Generational Garbage Collection

It is empirical knowledge that the lifetime of objects in the system varies. That is , there are some objects that are *never* deallocated, while some become useless pretty quickly.  

It is also noted that the [[distribution]] of these lifetimes is far from uniform: Most objects fall in the fast-lifetime category. This is called the "[[Generational Hypothesis]]". 

We can take advantage of this by devising an garbage collection policy that takes this behaviour into account.  Such systems are called Generational Garbage Collectors. 

They work by dividing the memory into different rooms, called generations. Usually, three or four such generations are created: the [[jvm]] defines an "Young" - or eden - generation, two "Survivor" - or grey - generation, and a  "Old" - or tenured - generation. 


When a new object is created, its allocated in the young-destined area of memory. 

The garbage collection works in two different phases then:
A "Minor" phase scan only these younger areas of memory, freing unused memory locations. 

If the system follows the Generational Hypothesis, this mean we can scan a comparatively small area of the memory , while recovering most of the garbage. 
    . This can be seen as a instance of the [[Pareto Principle]]


Objects that reamin not-collected are moved into older areas of memory, that are increasingly-seldomly checked, in a so-called "Major" garbage collection.

