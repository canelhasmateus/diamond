---
created_on: 2023/01/02 15:08
kind:
tags:
---

# Self



Feeling the need to implement a more useeful sistemaatic and automated way o learning and retaining knowledge
there are a lot of tools currently available or under consideration
1. evernote
2. feedly
3. graph-databases
4. brainscape
5. onedrive
6. obsidian
7. neovim

what would a high level view of such a system look like


___

```mermaid



IncomeStream -- 1a > Consume
IncomeStream -> Queue 
Queue -> Consume
Consume -> Archival 
Consume -> Annotation 
Annotation -> Rediscover
Archival -> Rediscover
Rediscover -> Consume



```

1a feedly
1b ahk articles.csv
1c akti, py + js
1d articles.csv
1e is implemented by limni, via foam + git
1f and 1g can be implemented by akti

Improvements

1. 1b - reactive / scheduled updates for the portal
2. 1c, 1e - some kind of system / triggr / discipline to deqeue
3. 1d save htmls? preferebly already rendered
4. 1g very lacking right now, really need a lot of things, such aas

* pull together the raw and digested infos ( from roi and limni )
* better visualization / exploratioin
    multiple pages for akti
    possibly graph-visualizations

5. NLP-summarization

* topics
* keeywords
* redundancy of new information

6. exploration compass

* by relatedness ,
* by freshness
* by 'should rediscover' time.

___

> Better utilization of the evernote web clipper
Can nwe bring something of this sort back? such as markdown clipper, or whatever?

> What about outside chrome? mostly pdf, so a pdf reader with this kind of funtionaly would suffice ; great if this same thing could double as a bookshelf

maybe rediscover with aws wordcos or sumatra pdf?  and bring back to akti

>The consume part does not reliably produce annotations
> The rediscover is inexisting
still a problem

About the archival:

> What should i be archiving?
>
> * bookmarks
> * images
> * pdfvideos

This is still aproblem.

> Clean Onedrie, evernote

Still not 100%. There are still a bit of data scattered through onedrive, evernote, possibly obsidian.

___

Todo:

___

## UltraLearning

Stempunk
MiT challenge
What tô learn and why
Mwtalearning why what and how
What: the expert interview method
What: facts,  concepts,  procedures
Concepts are understood
Facts are memorized
Procedures need tô be practiced
Why: intrisic vs instrumental
How: benchmarking vs emphasize exclude method
Benchmarking
Find how things are usually done and use it as default
Universities are good for benchmarking
Emphasize exclude
Find some benchmark , and start doing modifications when you have knowledge of what is important
Omit or delay things not important
10% rule: use 10% of your expected learning time doing research
Be Aware of the marginal improvements of meta vs actual learning and vice versa, recalibrate often

___
 things to do
better orgmode
neovim stuff
leet code
rust ocaml
ultralearning researchh a project
        stats
        engineering
        maths
cat theory
akti  limni gnosis
residential automation embedded
meditation
yoga
audiobooks
study boks to learn, like a roadmap or something
quantitified self
set up a system to lookup possible / pending tasks to do whenever i feel bored / going to do other things.

___
Ultra learning harvard cs
___

Talk and Move Slower
Talk Less
Sharpen up Physically
Don't always be available
