Functors, applicatives and monads

Functors:
    Values wrapped in contexts
    Have an fMap to apply a function to the boxed value
Applicatives
    What if the Function is wrapped in a context?
Monads
    Functors apply a functoin to a wrapped value.
    Applicatives apply a wrapped function to a wrapped value
    Monads apply a function that returns a wrapped value to a wrapped value
    ![](2022-04-01-15-33-42.png)

<http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html>

#

Writer Monad
Reader Monad
State Monad

<http://adit.io/posts/2013-06-10-three-useful-monads.html>

___

The yoneda philosophy []

Things are defined by their relationships with other things.
"An generalization of cayley's theorem "
    Every Group is isomorphic to a permutation group

Each row and column contains all group elements -> Its a Latin Square

"Symmetry as a compression tool"

"Numbers measure size,  groups measure simmetry"

"Hormorphism is a map F from S -> T such that for all x, y \e S,
        F( X )*F( Y ) = F( X* Y )


___

monads
kliesli arrows
Compositional Application Architecture with reasonably priced monads
Data Types a la carte

most Functional patterns are derived from c ategory theroyd

Free of Interpretation  -> Free Monads
    -> No coupling to framework / runtime
Composable Pieces -> CoProducts
Dependency Injection / IOC -> Implicits & Kleisli
Fault Tolerant -> Dependently tyuped checked exception

Free Monad
    . A monad on a custom algebra that can be run through an interpreter

What is an Application?
    . A collection of algebras and the coproduct resulting from their interaction

The first Algebra

```scala

sealed trait Interact[T]

case class Ask(prompt: String ) extends Interact[String]
case class Tell(msg: String ) extends Interact[Unit]

```

The second Algebra

```scala
 
    sealed trait DataOp[T]

    case class AddContact( a : Contact ) extends DataOp[Unit]
    case class GetAllContacts(  ) extends DataOp[List[Contact]]



```

An application is the CoProduct of its algebras
Coyoneda can give functors for free for our algebras
    "Lift the algebra into the coprpoduct space, so that you can use the coproduct like its composing monads "

Monadic function compoisition with Kleisli Arrows

A => M[B]


___

On algebras

In Vectors space
    An algebra over a field is a vector space equipped with a bilinear vector product

In Logic
    An Relational Algebra in which a set of finitary relations that is closed under certain operators
In Measure THeory
    Algebra over a set, a collection of sets closed under finite unions and complementation
In Category Theory
    An F-Algebra generalizes an algebraic structure
        algebraic streuctures consists of
        . a nonempty set A
        . A collection of operations [ of finite arity, tipically binary ] on A
        . A finite set of identities, known as axioms, that these operations must satisfy.

A functor is a mapping between categories. That is    associates each object X in C to an Object F(X) in D,
    Associates each morphism G: X -> Y in C to a morphism F( G ) : F(X) -> F(Y)
        . must preserve identity morphism and composition of morphisms. 

A functor that maps a category to the same category is called a Endofunctor.

A Morphism is a map from one mathematical structure to another one of the same type.

<https://ncatlab.org/nlab/show/category>:

    A category consists of a collection of things and binary relationships (or transitions) between them, such that these relationships can be combined and include the “identity” relationship “is the same as.”


___

In practice it can be helptful to think of a functor as encoding an invariant of some sort.

Category Name | Its Objects | Its morphisms:

Set | sets | functions
Group | groups | group homomorphisms
Top | topological spaces | continuous functions
Vect_k | vector spaces over a field k | linear transformations
Meas | Measurable spaces | measurable functions
Poset | Partially ordered sets | order-preserving functions
Man | smooth manifolds | smooth maps
