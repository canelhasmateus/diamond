<https://candost.blog/microservices-and-their-benefits/>

Microservices benefits
    Tech Heterogeneity -> Pick the right tool for the job
Resilience
    . In case of problems, its possible to isolate and degrade functionality instead of totasl failure

Other decompositional techniques

    Shared LIbraries
    Modules ( ? ... )

<https://candost.blog/the-evolutionary-architect/>

Evolutionary architecture


___


<https://www.youtube.com/watch?v=jwbKSiqG0DI>

testing without mocks

mocks are a way to isolate code from its dependencies
    . Why not use?

    . They're solitary tests - you end up with gaps between the units: they may function alone, but not together.
    . Integration tests are supposed to deal with the gaps, but they are slow and duplicate effort. 

Overlapping Sociable Tests
    .
Nullable Infrastructure
    . Eventually we hit part of the code that we don't want to run.
    . Nullable Infrastructure is real production code that can be disable
    . Tracks state when needed
    . Implemented with embedded stubs


___

Implicits
    . Allows some magic

Uses
    . Implicit Arguments
    . Implicit Conversions
        .. Add Methods to existing types over which we don't have control.


___


Functional languages are actually quite a bit simpler than many conventional languages. Comparing Haskell to Java, for example, Java has a lot of accidental complexity that Haskell avoids. For example, primitive vs. reference types, instance vs. class methods, type erasure in the implementation of generics, implementation inheritance and its interaction with the four different visibilities, the interaction of coercion, casting, and overloading, and so forth. I’ve also found that surprisingly many students have a hard time wrapping their heads around the impact of mutation of shared (aliased) objects. Functional languages have fewer such complications. That’s not to say that functional languages are easier to learn, but once you know them, they are simpler than many conventional languages.

___

Property Based Sets :

    ...

    ...

___
The expression problem
    . Think in terms of expressions, instrad o instructions
    . How to evaluate a expression while maintaning type-sfaty and returning the right value, of the right type

___


<https://codecraft.co/2015/04/08/a-grumble-about-buckets/#more-6049>

"
I'm grumbling about my choice of buckets, but in the end, its not the bucket menu, in and of itself that bugs m. I get why you m ight need to simplifyf, you can't please everyone.

What bugs me is that software with poorly chosen buckets also tends to be software that - either by intent or carelessness - provides no way whatsoever for its creators to find out if they've got the buckets wrong.
"


___



<https://www.youtube.com/watch?v=oSpx2ROVfd0>

stable matching

people about to be medics apply to residency around hospitals .
hospitals compete for the best docs, trying to lock them in years in advance

the stable matching is responsible to satisfy the preferences of both medical and hospitals by receiving a ranked preference from both of them.

input size of ( 2N + 2N**2)
output should be
    . should have the property: "No one should have gone and chose a different match outside of the mechanmism."

A match is perfect if every doctor and every hospital appears exactly once.
    . An instability is a pair of ( H , D ) that were not put together, but both would prefer having being paired with each other than the pair they have been given.

We can solve it with a "Deffered-Acceptance Algo"

"While existis a unmatched doctor D:

    H = top Hospital D hasn't applied to. 

    If H is unmatched: Match ( D , H )

    else, 
        if H prefers the current doctor over the current match,
            . Unmatch ( Dprev , H)
            . Match ( D , H)


___


Laziness lets us separate the description of an expression from the evaluation of
that expression. This gives us a powerful ability — we may choose to describe a
"larger" expression than we need, then evaluate only a portion of it. As an
example, consider foldRight — we can implement this for much like Stream
we did for , but we can implement it lazily: List
def foldRight[B](z: => B)(f: (A, => B) => B): B =
 uncons match {
 case Some((h, t)) => f(h, t.foldRight(z)(f))
 case None => z
 }
This looks very similar to the foldRight we wrote for , but notice how List
our combining function, , is non-strict in its second parameter. If chooses not to f f
evaluate its second parameter, this terminates the traversal early. We can see this
by using foldRight to implement , which checks to see if any value in exists
the matches a given predicate. Stream
def exists(p: A => Boolean): Boolean =
 foldRight(false)((a, b) => p(a) || b)
Since foldRight can terminate the traversal early, we can reuse it to
implement rather than writing an explicit recursive function to handle exists
early termination. This is a simple example where separating the concerns of
describing a computation from the concern of makes our descriptions evaluation
more reusable than when these concerns are intertwined. This kind of separation of
concerns is a central theme in functional programming.

___

EXERCISE 10: We can write a more general stream building function. It takes
an initial state, and a function for producing both the next state and the next value
in the generated stream. It is usually called : unfold
def unfold[A, S](z: S)(f: S => Option[(A, S)]): Stream[A]
Option is used to indicate when the should be terminated, if at all. The Stream
function is the most general -building function. Notice how unfold Stream
closely it mirrors the structure of the data type. Stream
unfold and the functions we can implement with it are examples of what is
sometimes called a function. While a recursive function consumes data corecursive
and eventually terminates, a corecursive function produces data and coterminates.
We say that such a function is , which just means that we can always productive
evaluate more of the result in a finite amount of time (for , we just need to unfold
run the function one more time to generate the next element). Corecursion is also f
sometimes called guarded recursion.

chapter 5 is very good.
chapter 6 is very good.

___

In Part 1, very little design effort went into creating these nicely compositional
libraries. We created our data types and found, perhaps surprisingly, that it was
possible to define a large number of useful operations over these data types, just by
combining existing functions. When you create a library for a new domain, the
design process won't always be this easy. You will need to choose data types and
functions that facilitate this compositional structure, and this is what makes
functional design both challenging and interesting



___


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

Here they are:

This project is considered experimental
May work, or may sacrifice your first-born to Justin Bieber.

This project is considered stable
Should work for most purposes; is reasonably bug-free and documented.

This project is considered finished
Does what it needs to do and there are no known bugs; don’t expect any large changes or feature additions.

This project is archived
The author has stopped working on it, but should still work and may still be useful.

And the Markdown:

[![This project is considered experimental](https://img.shields.io/badge/Status-experimental-red.svg)](https://www.arp242.net/status/experimental)
[![This project is considered stable](https://img.shields.io/badge/Status-stable-green.svg)](https://www.arp242.net/status/stable)
[![This project is considered finished](https://img.shields.io/badge/Status-finished-green.svg)](https://www.arp242.net/status/finished)
[![This project is archived](https://img.shields.io/badge/Status-archived-red.svg)](https://www.arp242.net/status/archived)

