
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

<https://tech.freckle.com/2020/10/26/tagged-is-not-a-newtype/>

"Programming is both the process of automation and the encoding of assumptions. "


___

They call this Functional Relational Programming

"Feeders components converts inputs into relational assignments - cause changes to the essential state.
Observer components generate output in response to changes which they observe."
