---
tags:
    - software
    - thought
---

# OnCorrectnessByConstruction

I was recently thinking about how to push more safety and behavior checking into the \[\[TypeSystem]].

An example is the writing of content to a file.
Suppose we have a function with such signature:

```python
def writeTo( content : byte[], path : String ) -> None: 
    ...
```

There are many dimensions in which this operation can go awry, but I'll worry about only some:

1. The path argument needs to be a valid OS Path.
2. The software needs to have permission for writing to it.

The first condition is easily pushed to the type system by using \[\[SmartConstructor]]s

```python

def createPath( path : String ) -> Option[ OSPath ]:
    ...

def writeTo( content : byte[], path : OSPath ) -> None:
    ...

```

This pushes the `writeTo` function towards more \[\[FunctionTotality]], as many errors are now pushed outside its boundaries.

The second condition is also encodable via the type system, e.g

```python
def createPath( path : String ) -> Option[ OSPath ]:
    ...

def writablePath( path : OSPath ) -> Option[ Writable[ OSPath] ]:
    ...

def writeTo( content : byte[], path : Writable[ OSPath]  ) -> None:
    ...    
```

This approach, however, falls flat when trying to encode more and more restrictions.

Suppose we also had the requirement that the path must also be executable.
An approach would be to just \[\[Wrapping]] the already given type again.

```python
def writeTo( content : byte[], path : Executable[ Writable[ OSPath] ]  ) -> None:
    ...
```

This is a Problem because `Executable[ Writable [ OSPath] ] != Writable[Executable[ OSPath] ]`

> Unfortunately, this kind of system does not exhibit \[\[Associativity]]

Creating a Concrete (Non-Parametric) sub-type of the Path does work -  `ExecWritablePath extends OSPath` - this requires exponential sub-typing: one for each combination of "qualifiers".

My questions are 2:

- What is the name of this?
- Is there a way to satisfy our requirements?

There is no one answer because there are several usable approaches to encode the requirements into different type-systems. The approach would change the name, e.g \[\[PhantomType]].

The other thing I'd suggest is that \[\[CorrectnessByConstruction]] here isn't the right approach. Simply put, we're trying to apply static guarantees to dynamic parts of a system:

- The user permissions can change at any time
- The drive can be full
- The drive can fail
- cosmic rays . . .

Instead, I'd say `effect handlers` is where the focus should be.

Whether a path is well-formed can be asserted statically, but its validity has a dynamic nature.

So, model the happy path, and for the dynamic aspects, such as permissions, missing files and io-processing totality, handle those separately.

The simple approach is to this stuff in a try - at least from a correctness point of view - think CheckedExceptions, but less suck.
