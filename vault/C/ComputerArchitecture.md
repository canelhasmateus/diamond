---
created_on: 2023/01/02 15:01
kind:
tags:
---

# ComputerArchitecture


___

Digital Design and computer architecture

 When you are working at one level of
abstraction, it is good to know something about the levels of abstraction
immediately above and below where you are working. For example, a
computer scientist cannot fully optimize code without understanding the
architecture for which the program is being written. A device engineer
cannot make wise trade-offs in transistor design without understanding
the circuits in which the transistors will be used. We hope that by the time
you finish reading this book, you can pick the level of abstraction appro-
priate to solving your problem and evaluate the impact of your design
choices on other levels of abstraction

...

Digital circuits use discrete voltages, whereas analog circuits use con-
tinuous voltages. Therefore, digital circuits are a subset of analog circuits
and in some sense must be capable of less than the broader class of analog
circuits. However, digital circuits are much simpler to design

BY limiting ourselves to digital circuits, we can easily combine components into
sophisticated systems that ultimately outperform those built from analog
components in many applications. For example, digital televisions, com-
pact disks (CDs), and cell phones are replacing their analog predecessors.

...

![](vault/public/2022-07-19-22-01-55.png)

...

2Combinational Logic Design
2.1 INTRODUCTION
In digital electronics, a circuit is a network that processes discrete-valued
variables. A circuit can be viewed as a black box, shown in Figure 2.1, with
▶ one or more discrete-valued input terminals
▶ one or more discrete-valued output terminals
▶ a functional specification describing the relationship between inputs
and outputs
▶ a timing specification describing the delay between inputs changing
and outputs responding

...

Sum of product vs Product of Sums Form

* An fframewrok to Produce the necessary function that will output the given truth table.

...

| Number | Axiom | Dual | Name
| ---| ---| --- | ---
| A1  | B = 0 if B ≠ 1| B = 1 if B ≠ 0 | Binary field
| A2 | 0 = 1 | 1 = 0 | NOT
| A3 | 0 • 0 = 0 | 1 + 1 = 1 | AND/OR
| A4 | 1 • 1 = 1 | 0 + 0 = 0 | AND/OR
| A5 | 0 • 1 = 1 • 0 = 0 | 1 + 0 = 0 + 1 = 1 | AND/OR

These theorems have great practical significance, because they teach us how
to simplify logic to produce smaller and less costly circuits.
Axioms and theorems of Boolean algebra obey the principle of duality.
If the symbols 0 and 1 and the operators • (AND) and + (OR) are inter-
changed, the statement will still be correct. We use the prime symbol (′)
to denote the dual of a statement

...


| Number | Theorem | Dual | Name
| --- | --- | --- | --- 
T1 | Β • 1 = Β | Β + 0 = Β |Identity
T2 | Β • 0 = 0 | Β + 1 = 1 | Null Element
T3 | Β • Β = Β | Β + Β = Β | Idempotency
T4 | B' = Β | B  = B' | Involution
T5 | Β • B' = 0 | Β + B' = 1 |Complements
T6 | B • C = C • B T6′ Β + C = C + Β Commutativity
T7 | (Β • C) • D = Β • (C • D) |(B + C) + D = B + (C + D) | Associativity
T8 | (Β • C) + (Β • D) = Β • (C + D) | (B + C) • (B + D) = B + (C • D) | Distributivity
T9 | Β • (Β + C) = Β | B + (B • C) = B | Covering
T10 | (Β • C) + (B • C) = Β | (B + C) • (B + C) = B | Combining
T11 | (Β • C) + (B • D) + (C • D)= B • C + B • D | (B + C) • (B + D) • (C + D) = (B + C) • (B + D) | Consensus
T12 | B0 • B1 • B2... = ðB0 + B1 + B2...Þ | B0 + B1 + B2... = ðB0 • B1 • B2...Þ | De Morgan’s Theorem


as shown in Figure 2.15, if one input of an AND gate is 0, we can replace the
AND gate with a wire that is tied LOW (to 0). Likewise, if one input of an OR
gate is 1, we can replace the OR gate with a wire that is tied HIGH (to 1).
Idempotency, T3, says that a variable AND itself is equal to just
itself. Likewise, a variable OR itself is equal to itself. The theorem gets
its name from the Latin roots: idem (same) and potent (power). The
operations return the same thing you put into them. Figure 2.16 shows
that idempotency again permits replacing a gate with a wire.
Involution, T4, is a fancy way of saying that complementing a vari-
able twice results in the original variable. In digital electronics, two
wrongs make a right. Two inverters in series logically cancel each other
out and are logically equivalent to a wire, as shown in Figure 2.17. The
dual of T4 is itself.
The complement theorem, T5 (Figure 2.18), states that a variable
AND its complement is 0 (because one of them has to be 0). And by dua-
lity, a variable OR its complement is 1 (because one of them has to be 1).
2 . 3 . 3 Theorems of Several Variables
Theorems T6 to T12 in Table 2.3 describe how to simplify equations
involving more than one Boolean variable.
Commutativity and associativity, T6 and T7, work the same as in tra-
ditional algebra. By commutativity, the order of inputs for an AND or
OR function does not affect the value of the output. By associativity,
the specific groupings of inputs do not affect the value of the output.
The distributivity theorem, T8, is the same as in traditional algebra,
but its dual, T8′, is not. By T8, AND distributes over OR, and by T8′,
OR distributes over AND. In traditional algebra, multiplication distri-
butes over addition but addition does not distribute over multiplication,
so that (B + C) × (B + D) ≠ B + (C × D).
The covering, combining, and consensus theorems, T9 to T11, permit
us to eliminate redundant variables.

e Morgan’s Theorem, T12, is a particularly powerful tool in digital
design. The theorem explains that the complement of the product of all
the terms is equal to the sum of the complement of each term. Likewise,
the complement of the sum of all the terms is equal to the product of the
complement of each term.
According to De Morgan’s theorem, a NAND gate is equivalent to an
OR gate with inverted inputs. Similarly, a NOR gate is equivalent to an
AND gate with inverted inputs.

...

The curious reader might wonder how to prove that a theorem is true. In Boo-
lean algebra, proofs of theorems with a finite number of variables are easy:
just show that the theorem holds for all possible values of these variables.
This method is called perfect induction and can be done with a truth table.

...

Minimize Equation 2.3: A B C + A B C + ABC

Table 2.4 Equation minimization
Step Equation Justification
A B C + AB C + ABC
1 B CðA + AÞ + ABC T8: Distributivity
2 B Cð1Þ + ABC T5: Complements
3 B C + ABC T1: Identity
Table 2.5 Improved equation minimization
Step Equation Justification
A B C + AB C + ABC
1 A B C + AB C + AB C + ABC T3: Idempotency
2 B CðA + AÞ + ABðC + CÞ T8: Distributivity
3 B Cð1Þ + ABð1Þ T5: Complements
4 B C + AB T1: Identity


Although it is a bit counterintuitive, expanding an implicant (for
example, turning AB into ABC + ABC) is sometimes useful in minimizing
equations. By doing this, you can repeat one of the expanded minterms to
be combined (shared) with another minterm.
You may have noticed that completely simplifying a Boolean equa-
tion with the theorems of Boolean algebra can take some trial and error.
Section 2.7 describes a methodical technique called Karnaugh maps that
makes the process easier.

 Karnaugh maps (K-maps) are a graphical method for simplifying
Boolean equations

...


Combinational logic is characterized by its propagation delay and
contamination delay. The propagation delay tpd is the maximum time
from when an input changes until the output or outputs reach their final
value. The contamination delay tcd is the minimum time from when an
input changes until any output starts to change its value


___
