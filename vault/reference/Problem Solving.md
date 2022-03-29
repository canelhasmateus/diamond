

# Tips

# Take Advantage of structure
    . Examples are both compositionally or de-compositionality
    . [[problem 0647 ]] implements this, by taking advantage of the compositionality of palydromes. 


# Identify maximums and minimums.
    . Is there any maximum value that could be achieved? for example, in [[problem 1829]], we know that the  maximum possible value of an xor operation is a number with only '1' in its representation, which lets us work backwards , which avoids looping to compute k.


# Track your steps
    . [[problem 1020]] implement this, by sinking the previously checked island in place: Don't be afraid to mutate / destroy things 
    if it helps.
    



# Try Different Perspectives
    . [[problem 1020]] can also be implemented in a different manner, by constructing an adjacency matrix for each of the islands, and exponentiating it ( to simulate walks) enough times to reach any border. We can then, check how many squares have a 0 in the adjacency matrix entry that connects it to the borders. Is there any way to explore the structure of the adjacency matrix to make this better? [[todo.md]] 

# Question the Premises
    . [[expand.md]]
