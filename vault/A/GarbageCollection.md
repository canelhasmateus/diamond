# GarbageCollection

Garbage Collection is a technique for [[MemoryManagement]].

> It sits in contrast with [[MemoryManualManagement]], usually implemented by closer-to-metal languages, such as [[LanguageC]].

This is the problem with Memory Management:

* Allocating memory consumes a finite resource. This resource must be recycled, or else it depletes, crashing systems.

Garbage Collection provides a way to free or reclaim memory by analyzing which parts are not being used anymore.

> This, of course, is not free and requires bookkeeping.

The garbage collection process is usually done in discrete processes.

* It can be triggered in unwanted situations leading to loss of responsivity
* This makes it unsuitable for applications such as [[GUI]]s, [[HFT]]s and peacemakers.

There are several schemes and heuristics devised to make garbage collection better and faster.

___

## Generational

It is empirical knowledge that the lifetime of objects in the system varies. That is, some objects are __never__ deallocated, while some become useless pretty quickly.  

It is also noted that the distribution of these lifetimes is far from uniform: Most objects fall in the fast-lifetime category. This is called the [[GenerationalHypothesis]].

We can take advantage of this by devising a garbage collection policy that takes this behavior into account.  Such systems are called [[GenerationalGarbageCollector]]s.

They work by dividing the memory into different rooms, called generations. Usually, three or four such generations are created. the [[JavaVirtualMachine]] defines:

* a "Young" - or Eden - generation
* two "Survivor" - or grey - generations
* an  "Old" - or tenured - generation.

When a new object is created, it's allocated in the young-destined area of memory.

The garbage collection works in two different phases then:
A "Minor" phase scan only these younger areas of memory, freeing unused memory locations.

If the system follows the [[GenerationalHypothesis]], we can scan a comparatively small area of the memory, while recovering most of the garbage.

> This can be seen as an instance of the [[PatternParetoPrinciple]]

Objects that remain uncollected are moved into older areas of memory. These are checked with decreased frequency, in a so-called "Major" garbage collection.
