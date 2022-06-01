# Garbage Collection

Garbage Collection is a [[technique]] for [[Memory Management]].

> It sits in contrast with [[Manual]] Memory Management, usually implemented by closer-to-metal languages, such as [[C]].

This is the problem with Memory Management:

* Allocating [[memory]] consumes a finite resource. This [[resource]] must be recycled, or else it depletes, crashing systems.

Garbage Collection provides a way to free or reclaim memory by analyzing which parts are not being used anymore.

> This, of course, is not free and requires [[bookkeeping]].

The garbage collection process is usually done in [[discrete processes]].

* It can be triggered in unwanted situations leading to loss of responsivity
* This makes it unsuitable for applications such as [[GUI]]s, [[HFT]]s and peacemakers.

There are several schemes and [[heuristics]] devised to make garbage collection better and faster.

___

## Generational Garbage Collection

It is empirical knowledge that the lifetime of objects in the system varies. That is, some objects are __never__ deallocated, while some become useless pretty quickly.  

It is also noted that the [[distribution]] of these lifetimes is far from uniform: Most objects fall in the fast-lifetime category. This is called the "[[Generational Hypothesis]]".

We can take advantage of this by devising a garbage collection [[policy]] that takes this behavior into account.  Such systems are called Generational Garbage Collectors.

They work by dividing the memory into different rooms, called generations. Usually, three or four such generations are created. the [[JVM]] defines:

* a "Young" - or Eden - generation
* two "Survivor" - or grey - generations
* an  "Old" - or tenured - generation.

When a new object is created, it's allocated in the young-destined area of memory.

The garbage collection works in two different phases then:
A "Minor" phase scan only these younger areas of memory, freeing unused memory locations.

If the system follows the Generational Hypothesis, we can scan a comparatively small area of the memory, while recovering most of the garbage.

> :bulb: This can be seen as an instance of the [[Pareto Principle]]

Objects that remain uncollected are moved into older areas of memory. These are decreasingly checked, in a so-called "Major" garbage collection.

___

## On immutability

Immutable Objects can be gentler to generational [[garbageCollection]].

Usually,  when a holder object is updated to reference a different object, the new referent is a young object.

If we update a MutableHolder, we have created a situation where an older object references a younger one.

If an object that lives in the old generation is mutated, all the objects on the card that contain it must be scanned for old-to-young references at the next minor collection.

References:

* <https://stackoverflow.com/questions/35384393/how-do-immutable-objects-help-decrease-overhead-due-to-garbage-collection?utm_source=pocket_mylist>
