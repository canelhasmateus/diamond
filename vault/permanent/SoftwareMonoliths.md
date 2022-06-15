# SoftwareMonoliths

The whole of your system is served as a single "software application". It might have and encompass the behaviour of multiple modules, but the final product would be a single "[[Artifact]]", such as a [[jar]].

This is great in regards to [[ complexity]]:

* No [[network]] [[partitioning]] means less [[errors]].
* Less moving parts mean less intellectual burden of [[understanding]] the entire [[system]]

However, it also has problems in [[scalability]]:

* In the technical side, it scales worse horizontally. Since [[resources]] are shared etween the modules, scaling one means scaling another, even it this second one does not require it.
* In the human side, it also scales worse since more developers need to compete for [[limited resources]]:

* [[build pipelines]]
* [[deployment slots]]
* [[database]] tables
* source code changes.

> This requires lots of [[coordination]],  which can become a bottleneck, specially in bigger teams.
