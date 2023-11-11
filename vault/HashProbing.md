---
created_on: 2023/01/05 23:02
kind:
tags:
---

# HashProbing

Also known as \[\[ClosedHashing]] or  \[\[OpenAddressing]]

It deals with \[\[HashCollisions]] by looking for another entry to place the value.

All that is needed is a policy to deterministically generate the same candidates given a seed hash.

Various implementations of such policies can be devised, such as

- LinearProbing
- QuadraticProbing
- DoubleHashing
