<https://engineering.fb.com/2019/04/25/developer-tools/f14/>

Faceboko has their own implementation of hashtables, called F14 , embbedded inside Folly , their open source C++ library.

It tries to be a good default usage, when considering questions such as

* "How long are the references kept"
* "Do you care more about cpu or memory"
* How big are the ekys
* How big are your tables
* How much do your insert / search / iterate
  
It improves the practice of hashing by using vector instructs, and providing multiple memory layouts.

The problem with hash tables comes from collisions. The possibility of collisions creates unpredictable control flow, requring extra memory accesses, and being hard to branch-predict and cpu-pipeline.

F14 works around this by pointing the kep to a block of slots, instead of to a single slots, then searching withing the chunk in parallel using vector instructions.

Other problem with probing is that they keep looking until they fiund a empty slot: that makes erasing keys tricky: since the same keys must be produced, the algo must leave a tombnstone ( a empty slot that doesn't terminate the probe search ) or slide down the later keys in the problem sequence.
