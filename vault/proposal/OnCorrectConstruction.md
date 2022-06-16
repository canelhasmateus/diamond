thinking about how to push more safety into the type system.

An example is the writing of content to a file. Suppose we have a function with such signature:

```python
def writeTo( content : byte[], path : String ) -> None: 
    ...
```

There are many dimensions in which this operation can go awry, but in this exercise, I'll worry about only some:

1. The path argument needs to be a valid OS Path.
2. The process needs to have permission for writing to it.

The first condition is easily pushed to the type system using smart constructors

```python

def createPath( path : String ) -> Option[ OSPath ]:
    ...

def writeTo( content : byte[], path : OSPath ) -> None:
    ...

```

This pushes the writeTo function towards "more totality", as many errors are now pushed outside its boundaries.

The second condition is also encode-able via the type system - such an example would be

```python
def createPath( path : String ) -> Option[ OSPath ]:
    ...

def writablePath( path : OSPath ) -> Option[ Writable[ OSPath] ]:
    ...

def writeTo( content : byte[], path : Writable[ OSPath]  ) -> None:
    ...    
```

This is all nice and dandy - however - it seems to fall flat when trying to encode more and more restrictions.

Suppose we also had the requirement that the path must also be executable. An approach would be to just Wrap the already given type again.

```python
def writeTo( content : byte[], path : Executable[ Writable[ OSPath] ]  ) -> None:
    ...
```

This is a Problem because `Executable[ Writable [ OSPath] ] != Writable[Executable[ OSPath] ]`

Creating a Non-Generic sub-type of the Path does work - however, it requires exponential sub-typing: one for each combination of "qualifiers".

My questions are 2:

* What is the name of this?
* Is there a way to satisfy our requirements?


___


There are a bunch of approaches that you can use to encode this into various type systems, so no one answer. The approach would change the name, one way would be phantom types.

Aside, I'd say this is a good topic for main.
The other thing I'd suggest is that correct by construction here isn't the right approach for many of the requirements.

Simply put a we're trying to apply static guarantees to non-static parts of a system (permissions could change any time, drive could fail, cosmic rays, ...).
Instead, I'd say effect handling is where the focus should be.
Whether a path is well formed can be asserted statically, but whether it is valid is dynamic in nature.

So do the happy action and for the dynamic aspects handle lack of permissions, missing file, io processing isn't total, and so on. Then handle those bits.
Simple approach is wrap this stuff in a try at least from a correctness point of view, think checked exceptions but less suck.

With structured concurrency approaches one could also tackle some/most of the liveness issues too.
Just my two cents
"
