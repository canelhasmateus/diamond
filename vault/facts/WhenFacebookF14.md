---
tags:
    - software
    - fact
---

# WhenFacebookF14

Facebook has its own implementation of \[\[HashTables]] embedded inside Folly, their open source C++ library:  It is called F14.

It tries to be a good default usage when considering questions such as:

- How long are the references kept
- Do you care more about CPU or memory
- How big are the keys
- How big are your tables
- How much do your insert, search, iterate

It improves the practice of hashing by using vector instructions and providing multiple memory layouts \[\[MechanicalSympathy]]

The problem with hash tables comes from \[\[HashCollisions]]. The possibility of collisions creates unpredictable control flow which requires extra memory accesses and is hard to do \[\[BranchPrediction]] and \[\[CPUPipelining]].

F14 works around this by pointing the key to a *block* of slots - instead of to a single slot. It then searches within the chunk in parallel using vector instructions.

Another problem with the usual method of \[\[LinearProbing]] or \[\[QuadraticProbing]] is that insertion is done by using the same key until an empty slot is found. This means that the previous state affects the placement of this new datum.

This makes deletion tricky - since the same keys must be produced, the algorithm must leave a tombstone ( an empty slot that doesn't terminate the probe search ) or slide down the later keys in the problem sequence.

## References

- [Open-sourcing F14 for memory-efficient hash tables - Engineering at Meta](https://engineering.fb.com/2019/04/25/developer-tools/f14/)
