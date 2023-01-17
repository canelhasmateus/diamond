---
created_on: 2023/01/16 11:42
kind:
tags:
---

# LeakyAbstractions

<https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/>

[[TCP]] attempts to provide a complete abstraction of an underlying unreliable network, but sometimes, the network leaks through the abstraction and you feel the things that the abstraction can’t quite protect you from. 

This is but one example of what I’ve dubbed the Law of Leaky Abstractions:

> All non-trivial abstractions, to some degree, are leaky.

like all abstractions, leak, and the only way to deal with the leaks competently is to learn about how the abstractions work and what they are abstracting. So the abstractions save us time working, but they don’t save us time learning.
