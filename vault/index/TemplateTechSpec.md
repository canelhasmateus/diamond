---
tags: 
    - template
    - software
---
# TemplateTechSpec

## Summary

```text
Spot the bot is a twitter bot that tweets pictures of dogs at predefined chronological intervals. 

The dog images are retrieved via a get call to dog api.
```

## Background

* Why buid?
* What is the motiviation?
* What user problems are you attempting to solve?
* What previouys efforts - if any - have been made to solve this problem?

```text
We are looking to exapnd our brand impint within the millenial setgment. 

Spot the bot will target the millenial audience by providing instant access to high-quality, curated dog pictures. 

We'll differentiate ourself from the competition by delivering higher-quality pictures.
```

## Goals

Highlight all the outcames that you predict will result from your work, both purposeful and inadvertent.

Alongside the measurable impact, this is the yardstick by which you'll evaluate the success of your project.

* Did we achieve our inteded goals and impact?

```text
Disrupt monotous twitter feeds with fun, unexpected and "on-brand" images ( subjective )

Introduce millenial users to out brand with relevant and engaging content ( subjective )

Integrate with twitter ( to automate tweeting ) and dog api ( objective )
```

## Non-goals

A non-goal is something you are intentionally not doing or solving, even if it could be related.

Defining non-goals helps limit the scope of your project and prevents feature creep.

```text
Disseminate dog pictures via another platform 

Creating an in-house dog photo database ( will take a dependency on dog api )

Configurable post times: In v1 dog photos will be posted at hardcoded chronological intervals. 
```

## Plan

 The longest part of your tech spec.

* Describe the engineering approach or list the approaches you're considering.
* This enables reviewers help you choose.

## Measuring impact

This section defines specific metrics that you expect your porject will impact.

* At lyft, engineers collaborate with data scientists and product managers to define these metrics.

Can help answer difficult questions around prioritization and later, become the means of gauging the project success and identifying areas for improvement.

* "Given our finite engieneering resources which feature is more important to build?"

```text
"Reach 2k twittewr followers within 2 months of launch via cross-account and cross-platform promotion"

At least 50% followers are non-bots; at least 20% are age 18-35"
```

## Security, Privacy, Risks

List the ways malicious users could exploit your change

## Other considerations

Discuss approaches you considered but ultimately decided against. this serves as a form of documentation and can help preempt suggestions

```text
Emails instead of tweets: Decided against implementing because itt doesn't scale well, and user demand is low.
```

## Milestones

Helps keep project on track, divide all work into key accomplishments and assign estimated dates.

```text
. october 14 - Dog api
. october 17 - Post interval configurable
. october 21 - QA complete 
```

## Getting feedback

Ask team mates for initial review before distributing your tech spec widely.

Then send them to progressively wider audiencies, refining it along the way.

* When an issue is resolved, note its redsolution explicitly in the comments : Engage with your readers and reviewers.
