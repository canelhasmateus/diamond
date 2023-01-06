---
created_on: 2023/01/05 23:04
kind:
tags:
---

# OpenHashing

Also known and [[SeparateChaining]]. Given a candidate slot for a key we deal with [[HashCollisions]] by:

Instead of storing the value directly, embed a collection - such as a [[LinkedList]] or a [[BinaryTree]] -  and put the value inside this collection. [[Indirection]]

When fetching, we search exhaustively inside the associated collection. Of course, this has O(n) worst-case [[AlgorithmicComplexity]].
