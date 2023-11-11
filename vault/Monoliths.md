---
tags:
    - fact
    - software
---

# SoftwareMonoliths

The whole of your \[\[Software]] is served as a single "software application". It might have and encompass the behavior of multiple modules, but the final product would be a single \[\[SoftwareArtifact]], such as a jar

This is great in regards to \[\[Complexity]]:

- No network partitioning means less errors.
- Having fewer moving parts lessens the intellectual burden of *understanding* the entire system

However, it also has problems in scalability.

- On the technical side, it scales worse horizontally. Since resources are shared between the modules, scaling one means scaling another, even if this second one does not require it.

- On the human side, it also scales worse since more developers need to compete for **limited resources**:

- build pipelines

- \[\[Deploys]] slots

- \[\[Databases]] tables

- source code changes.

> This requires lots of communication and coordination,  which can become a bottleneck, specially in bigger teams.

## References

# todo
