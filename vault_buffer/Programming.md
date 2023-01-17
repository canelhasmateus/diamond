
## Coroutines

Separate from  generators

Generators abstract iteration of values
Coroutine abstract consumption of values

Generators pull data through the pipe with iteration
Coroutines push data into the pipeline with send

Coroutines and state machines

Multitasking is implemented by the Operational System.
    Usually by means of Either Interrupts or Traps
    yield is a trap

## Debugging

 treating every edge case and bug as a problem to bne solved rather than a piece of information to use in your deisgn

## Dev

<https://www.youtube.com/watch?v=ZQnyApKysg4>

half assed is ok if you only need half of an ass
half assed , but the right size of the ass

tar pit of immediacy

proficiency fatalism

strive to achieve the full range of ass

## FP in Scala

Functional languages are actually quite a bit simpler than many conventional languages. Comparing Haskell to Java, for example, Java has a lot of accidental complexity that Haskell avoids. For example, primitive vs. reference types, instance vs. class methods, type erasure in the implementation of generics, implementation inheritance and its interaction with the four different visibilities, the interaction of coercion, casting, and overloading, and so forth. I’ve also found that surprisingly many students have a hard time wrapping their heads around the impact of mutation of shared (aliased) objects. Functional languages have fewer such complications. That’s not to say that functional languages are easier to learn, but once you know them, they are simpler than many conventional languages.

___

Property Based Sets :

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

## Functional Programming

<https://tech.freckle.com/2020/10/26/tagged-is-not-a-newtype/>

"Programming is both the process of automation and the encoding of assumptions. "

___

They call this Functional Relational Programming

"Feeders components converts inputs into relational assignments - cause changes to the essential state.
Observer components generate output in response to changes which they observe."

____

<https://lexi-lambda.github.io/blog/2020/08/13/types-as-axioms-or-playing-god-with-static-types/>

What is a type?

    . Restriction
        .. Example: Typescript

___

<https://www.parsonsmatt.org/2017/10/11/type_safety_back_and_forth.html>

Type safety back and forth:
    Push Responsability forward with Maybe , but we can also push responsability back.
        . This is needed in order to provide totality in our functions

    When some piece of code hands us responsibility, we have two choices:
        Handle that responsaibility
        Pass it to someone else.
    
    Same thing as that "parse, don't validate"

___

## Type Systems

<https://lexi-lambda.github.io/blog/2020/11/01/names-are-not-type-safety/>

"
In a sense, opaque types are like tokens. The implementing module issue tokens via its smart constructors, an the only way to do anything useful with them is to redeem them to the issuing module functions, to obtain the values contained within.
"

"taxonomies ( names ) are useful for documenting a domain of interest, but not necessarily helpful for modelling it"

___

<https://degoes.net/articles/newtypes-suck>
<https://degoes.net/articles/principled-typeclasses>

Type classes ; object oriented interfaces ; ml-style modules
    . How do we abstract over a set of functions and types that might have multiple concrete implementations?

    intance = concrete implementation for a type class. 

    haskell can derive which implementation we're using automatically. 
    Scala: Implicits. 

    good and all 

Unprrincipled type classes
    Most type classes are ad hoc rather than pricipled - cant enforce laws.
        . not ernforced by the compiler.
        Example of unenforced laws:
            Ordered
                . Transitive ( a <= b ; b <= c  |> a <= c)
                . Anti-symmetric ( a <= b ; b<= a |> a = b)
                . total  ( either a <= b or b <= a)

there are usually many possible ways to write an instance for a type that satisfies its laws

    . Integer  
        . Additive Monoid ( + )
        . Mulitiplicative Monoid ( * )

If there are multiple instances for a given type, with completely different behavior, which one the compiler choose?
    . Possibility of orphan instances, that is - the instance depends on what you import.

    . People can work around by creating newtypes , but these are adhoc, and can be seem as a type of abuse, since they define no more requirements than the underlying implementation. 
        .. Programming by name
        .. Better to use smart constructors

Depedent-types
    . can force verification of behaviour.
    . Not all, can't verify effects ( such as IO )

Newtypes are isomorphic to the single value they hold.
    . "Programming by name"
    .. Can still go wrong
    .. Worksaround  : Smart Constructors
        -> Paatch around the fact that our data model is underconstrained.

Precision may be tedious due to limitations of the language we work in
    . Even more tedious is debugging broken code.

___

## Performance

<http://danluu.com/3c-conflict/>

<https://easyperf.net/blog/2022/05/28/Performance-analysis-and-tuning-contest-6>

<https://lemire.me/blog/2022/06/06/data-structure-size-and-cache-line-accesses/>

Recently I've worked on a fast wordcount program for a programming contest[0]. I ran into the typical issues where some data structures should be padded to be a small power of 2 size so that accesses to array elements do not cross cache lines[1]. Later, when sort of playing around with the program, I noticed that I could make it ~3% slower by changing my bump allocator to align all allocations to 4k boundaries or make it ~5% faster by changing my bump allocator to add a small number of cache lines (1 works pretty well but 5 and 11 seem to work better) of padding to each allocation. Since I had sort of paid attention in computer architecture class I expected that this was due to set associativity in the cache. Still, I was surprised to see effects this large from this sort of change in a program that calls the bump allocator fewer than 300 times, doesn't really have any obvious "process the same indices of a bunch of arrays" access patterns, and cannot run into this issue by processing the same field of each element of an array of very large structs because it does not contain any very large structs.
One person I mentioned this to pointed me to TFA, which the best writeup of these issues I've seen, so I submitted it.

It seems like the full picture of "how not to ruin your day by allocating and sizing stuff" is something like this: Structs should be power of 2 sized, up to the cache line size, which is probably 64 bytes for the device you're reading this on unless it's an M1 mac and then it's 128. As the article points out, the next bunch of bits (6-9 of them in the article, but maybe more today) after the bottom 6 or 7 determine the set the cache line belongs to, so you want to put different values into those, which means that if you have some struct larger than your cache line size, and you want to have an array of those things and maybe traverse that array and access the same member of each element of the array, then you would do well to make sure that the size of that thing is an odd multiple of the cache line size, or at least not a large power of 2 multiple of the cache line size. In addition, if you would like to allocate a bunch of buffers, and you commonly access the fronts of your buffers more than the middles or the backs, then you would do well to make sure that the fronts of your buffers end up in many different sets. As far as I know, no off-the-shelf allocator will do this for you (i.e. if you repeatedly ask your allocator for 4MB buffers, they will all be at least 4k-aligned, and this is very bad for you), so you'll have to do it yourself. I'd love to have someone point out an off-the-shelf allocator that will go out of its way to avoid returning only 4k-aligned buffers though.

___
<https://www.causal.app/blog/scaling>

If we multiply two variables of 1B cells of 64 bit floating points each (~8 GiB memory) into a third variable, then we have to traverse at least ~24 GiB of memory. If we naively assume this is sequential access (which hashmap access isn’t) and we have SIMD and multi-threading, we can process that memory at a rate of 30ms / 1 GiB, or ~700ms total (and half that time if we were willing to drop to 32-bit floating points and forgo some precision!).

___

## Testing

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

The whole idea of automated tests is to make changes hard. That's logical: you don't want to add errors to your application. Unfortunately, most tests freeze the implementation instead of the behavior.

<https://www.beyondjava.net/playwright>

___

<https://blog.thecodewhisperer.com/permalink/when-is-it-safe-to-introduce-test-doubles>

> Never mock values, sometimes mock entities, but mock services freely.

___

## OOP

<https://robotlolita.me/articles/2011/understanding-javascript-oop/>

"The prototypical OO model brings in some new ways of solivng old problems, in an more dynamic and expressive way. It also presents new and more powerful mode3ls for extensibility and code-reuse - it does not however, give you contracts. There are no static guarantees that an object will alqways have a given set of properties ... "
