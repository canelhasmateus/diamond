# Game Theory

The study of #mathematical #models of strategic #interactions between rational agents.

There are fundamental concepts regarding game theory:

A #game is consists of

* A #set of actions for each #player
  * Can be finite or infinite
  * not necessarily symmetrical
* A #utility function for each possible choice of actions
  * The result is usually called utility.
  * In some games, the utility that one player wins is the exact utility lost by other players. We call these [[ZeroSumGame]]s

* A #Strategy
  * An #algorithmn that receives the #data of the current game ( no history ) and outputs an action.

  * When the best course is to choose the same action no matter what your opponent does, we call it a *[[DominatingStrategy]]*.

  * Conversely, when the optimal strategy requires a player to act randomly, according to distributions, we call these *[[MixedStrategies]]*.

> When there are finite choices, we can analyze then as a payoff #matrix.
> Finite games, as well as well-behaved continuous ones can be solved by [[LinearProgramming]]



___

Examples of Games:

1. Silent Duels: <https://jeremykun.com/2018/12/31/silent-duels-and-an-old-paper-of-restrepo/>
