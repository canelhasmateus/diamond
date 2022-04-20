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

http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html


# 

Writer Monad
Reader Monad
State Monad


http://adit.io/posts/2013-06-10-three-useful-monads.html

# 

https://homepages.inf.ed.ac.uk/wadler/papers/expression/expression.txt


the expression problem a new name for an old problem. 
The goal is to define a datatype by cases, where one can add new cases to the datatype and new functions over the datatype, without recompiling existing code, and while retaining static type safety. 


"Once can think of cases as trows and functions as columns in a table. 
In a functional language, the rows are fixed ( cases in a datatype declaration ), but it is easy to add new columns ( functions ). 
In a object oriented language, the columns are fixed ( methods in a class declaration ) but it is easy to add new rows ( subclasses ). 
We want to make it simple to add either rows or columns. 
"

]~> Do parametric types beats virtual types? 
    . wtf does this even mean. 

Object Algebras to the rescue. 




# 


https://degoes.net/articles/newtypes-suck
https://degoes.net/articles/principled-typeclasses

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



# 



https://lexi-lambda.github.io/blog/2020/11/01/names-are-not-type-safety/


"
In a sense, opaque types are like tokens. The implementing module issue tokens via its smart constructors, an the only way to do anything useful with them is to redeem them to the issuing module functions, to obtain the values contained within. 
"


"taxonomies ( names ) are useful for documenting a domain of interest, but not necessarily helpful for modelling it"




https://lexi-lambda.github.io/blog/2020/08/13/types-as-axioms-or-playing-god-with-static-types/



What is a type?

    . Restriction
        .. Example: Typescript

