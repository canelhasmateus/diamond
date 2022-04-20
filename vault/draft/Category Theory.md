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
