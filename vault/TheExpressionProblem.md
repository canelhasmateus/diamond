<https://homepages.inf.ed.ac.uk/wadler/papers/expression/expression.txt>

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

___


The expression problem
    . Think in terms of expressions, instrad o instructions
    . How to evaluate a expression while maintaning type-sfaty and returning the right value, of the right type

___
