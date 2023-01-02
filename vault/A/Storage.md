---
tags:
    - concept
    - software
---
# Storage

## Properties

In storage, Durability is the guarantee that data can be accessed after a failure. It is not a binary property: it should be defined as the modes of failures you want your data to survive.

* Usually, there is some performance penalty for durability;
* Rarely tested - involves cutting power, which is disruptive and hard to automate.

Volatile Storage:

* Something that goes away when you reboot. Storage that is attached to your instance:
* When your instance is terminated, you lose all of this data.

Non-Volatile:

* Survives a reboot.
* Hard disk.

## Kinds

[[StorageBlock]]

* Breaks data into blocks
* Can save whatever, such as operating systems, frequently changed files.
* Limited in terms of metadata

[[StorageObject]]

* Breaks data into `objects`
    An object has an unique id, and metadata.
    Metadata enables interesting things, such as data lakes and running sql queries.
    integrate into environemnts
* Not too fast, compared to other kinds of storage
* Absolutely Terrible for files that change quickly.
    Everytime you modify a file, we create a new version, which means more space, which means more costs.

[[StorageFile]]

* As opposed to [[StorageBlock]], stores data in an hierarchical architecture.
* In your computer, we have a hard drive. Into it we put files.
* Think 'Drives'
