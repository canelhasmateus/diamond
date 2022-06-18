Detecting Near-DUplicates
    . Locality Sensitive Hashing
     . Similar Document => Similar hash-code

LSH Error Rate

False Negative Error ( We want a , b to collide, but they don't )

( 1 - p^k)^L

False Positive Error ( Don't want a, b to collide )
 1 - ( 1 - ( Q ^ K ) )^L

SimHash
    . Efficient Variant of LSH
    . Don't Store the Hyperplanes
