<https://www.youtube.com/watch?v=oSpx2ROVfd0>

stable matching

people about to be medics apply to residency around hospitals .
hospitals compete for the best docs, trying to lock them in years in advance

the stable matching is responsible to satisfy the preferences of both medical and hospitals by receiving a ranked preference from both of them.

input size of ( 2N + 2N**2)
output should be
    . should have the property: "No one should have gone and chose a different match outside of the mechanmism."

A match is perfect if every doctor and every hospital appears exactly once.
    . An instability is a pair of ( H , D ) that were not put together, but both would prefer having being paired with each other than the pair they have been given.

We can solve it with a "Deffered-Acceptance Algo"

"While existis a unmatched doctor D:

    H = top Hospital D hasn't applied to. 

    If H is unmatched: Match ( D , H )

    else, 
        if H prefers the current doctor over the current match,
            . Unmatch ( Dprev , H)
            . Match ( D , H)
