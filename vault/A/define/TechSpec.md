# TechSpec

A document, usually written by an engineer, that describes how a feature, project, or service will work from a technical perspective.

[[PatternPareto]]: Some uses of time are more efficient than others. Tech spec are not exceptions. You should strive to have the bare minimum - it is a cost, and it loses value very quickly.

___

## Purpose

The spec has a purpose. A tech spec without a purpose is a waste of time.

* E.g <https://miro.medium.com/max/1400/1*fwG--JE_oyZQY1B4WPoMKw.png>

> [[PatternFirstPrinciples]]

During implementation, it specifies exactly what work needs to be done. Exposes broad ideas and often low-level implementation details to a wide audience, maximizing the chance that a bug or regression will be caught sooner rather than later.

* Endpoint names
* Error codes

After launch, it helps uninformed engineers get up to speed on the inner workings of a feature and the tradeoffs involved.

* Improving intra-team communication
* Anticipating and addressing stakeholder concerns.
* Why certain implmenetations decisions were made
* What the project scope is
* How it integrates with other platforms and services.

A tech spec is a living document, so its important to be in sync with major changes.

>> #todo How does the c4 model works with this??

___

Problems:

* Rots quickly
* Nobody can find it

Tools:

* Jira
* Confluence
* BookStack ( Self-Hosted )
* Lyft organizes then under a mailing list. Highly visible, and transparent

___

## References

1. <https://www.youtube.com/watch?v=a4L9GhldTHo>
2. <https://eng.lyft.com/awesome-tech-specs-86eea8e45bb9>
3. [[TemplateTechSpec]]
