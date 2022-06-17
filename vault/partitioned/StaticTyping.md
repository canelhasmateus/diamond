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
