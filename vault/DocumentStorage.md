---
kind:
tags:
---

# DocumentStorage


* Breaks data into `objects`
    An object has an unique id, and metadata.
    Metadata enables interesting things, such as data lakes and running sql queries.
    integrate into environemnts
* Not too fast, compared to other kinds of storage
* Absolutely Terrible for files that change quickly.
    Everytime you modify a file, we create a new version, which means more space, which means more costs.
