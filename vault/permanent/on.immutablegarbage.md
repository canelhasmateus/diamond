    
Immutable Objects can be gentler to generational [[define.garbagecollection]]. 

Usually,  when a holder object is updated to reference a different object, the new referent is a young object. 
If we update a "MutableHolder" , we have created a situation where an older object references a younger one. 
If a object that lives in the old generation is mutated, all the objects on the card that contain it must be scanned for old-to-young references at the next minor collection.

References:
    https://stackoverflow.com/questions/35384393/how-do-immutable-objects-help-decrease-overhead-due-to-garbage-collection?utm_source=pocket_mylist
