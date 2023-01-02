---
tags:
    - software
    - fact
---

# OnImmutableGarbage

Immutable Objects can be gentler to generational [[GarbageCollection]].

Usually,  when a holder object is updated to reference a different object, the new referent is a young object.

If we update a MutableHolder, we have created a situation where an older object references a younger one.

If an object that lives in the old generation is mutated, all the objects on the card that contain it must be scanned for old-to-young references at the next minor collection.

___

References:

1. [How do Immutable Objects help decrease overhead due to Garbage Collection? - Stack Overflow](https://stackoverflow.com/questions/35384393/how-do-immutable-objects-help-decrease-overhead-due-to-garbage-collection)
