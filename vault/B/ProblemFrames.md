# ProblemFrames

An important part of solving problems is looking at them the right way.

* The `read-list` situation becomes easier to manage when looking at it as a #stream.
* Thinking of it as a stream lends itself to be handled just like any other stream.
    Thinking of it as an application of [[DataEngineering]] buys us the scheduling, composition and error handling of the processes in the space.
* The same goes for the flowtime situation: Thinking of it as a scheduling problem looks like the right abstraction since [[VizGanttCharts]] fit this application perfectly.
* The same goes for the whole Gnosis mentality. Working locally with text buys us the simplicity, flexibility and ease of use necessary to embed this as part of our life, instead of being a source of stress and emotional pain associated with most chores.

This is a easy post-hoc realization: After two given possibilities are presented, compared and one is declared as a winner - Hindsight is 20/20.

However, how to find out these delimitations in a structured manner? Sure, Noticing patterns and practicing helps. However, this doesn't seen very scientific to me... [[MetaExpand]]

___

## Examples

* [[OnLeet1020]] can also be implemented differently, by constructing a [[AdjacencyMatrix]] for each of the islands, and exponentiating several times, simulating [[RandomWalks]].
    By doing it enough times to reach any border, we can confidently state that any not-reached island is unreachable. Of course, this approach is not algorithmically efficient.

___
