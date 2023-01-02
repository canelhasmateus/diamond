<https://homes.cs.washington.edu/~jrl/teaching/cse599swi16/notes/lecture1.pdf>

entropy[

    a probability mass function is P : OMega -> [ 0 , 1] | sum(xeq) * p(x) = 1
]

the entropy is the value

H( p ) = - Sum(  P(x) & log( p( x )))

"The amount of uncertainty in the value of the variable X"

It is readily apparent that given a compact set, the most entropic P is the uniform function.

Relative Entropy

Given Two probability mass functions P, Q, one defines the relative entropy of P with respect to Q ( Also called the Kullback-Leibler divergence ) as

D( P || q ) =sum( p(x) * log( p( x ) / q( x ))

is quantity is often thought of in the following context: q is a prior probability distribution
(representing, say, the assumed state of the world), and p is the posterior distribution (after one has
learned something by interacting with the world). In this case, D(p k q) represents the amount of
information gained. Another operational definition: D(p k q) is the expected number of extra bits
needed to encode a sample from p given a code that was optimized for q


## Compression

Png have no such problems of loss-y compression

LossLess Compression -> Exploit redundancy
    . Huffman codes -  Use smaller 'Ids' to represent more frequent values.
        .. However, it treat values independently of each other : Images often are spacially correlated.
    . Run-Length encoding
    . Lempel-Zib Schemes / LZSS
        .. Allowing the length to be greater than the offset gives us run-length encoding for free.
        .. Gradient breaks it.

When encountering a hard problem, we can either think of a new solution, or transfrom the problem into one for which we already know the solution.
    . Png chooses to  transform , by defining a filtering step ( Either None, Sub, Up , Avg , Paeth ) before LZSS encoding.
    . Usually, these are done separately in each of the RGB Channels.
    . How to choose? Heuristic -> Mimimum sum of absolute differences

QOI
    . Comparable to png, up to 50x faster

___

<https://www.youtube.com/watch?v=goOa3DGezUA>

lz 77
lempol zivv
compression scheme

kind of a 'dictionary of words' approach, but replacing a word with a 2-byte pointer : < j, l>

j refers to a word back in the text, and the l is the length.
