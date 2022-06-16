
<https://www.youtube.com/watch?v=a4L9GhldTHo>

On technical documentation

Problems:

* Rots quickly
* Nobody can find it

Tools:

* Jira
* Confluence
* BookStack ( Self-Hosted )

What is good documentation?

You should strive to have the bare minimum - it is a cost, and it loses value very quickly.


___

<https://eng.lyft.com/awesome-tech-specs-86eea8e45bb9>

How to write awesome tech specs

"After digging into the problem, you discover that your feature relies on a service that another team recently deprecated"

A document, usually written by an engineer, that descrivbes how a feature, project, or servicer will work from a technical perspective
    . Isn't this contrary to the the idea of moving fast and breaking things?

    . Has benefits

Almost-Bug-Free Releases

    A thorough tech spec expose broad ideas, and often low-level implementation detail like endpoint names and error codes to a wide audience, maximizing the change that a bug or regression will be caught soonerrather than later. 

Documentation

    During implementation, it specifies exactly what work needs to be done. After launch, it helps uninformed engineers get up to speed on the inner workings of a feature and the tradeoffs involved. 
    
        . How does the c4 model works with this??
    
        . Lyft organizes then under a mailing list. 
            ... Highly visible, and transparent]
    
    Why certain implmenetations decisions were made
    what the project scope is
    how jit integrates with other platforms and services. 

Pareeto Pricniple: Som euses of time are more efficient than others, and applies to the tech spec.
    - The spec has a purpose - Imporving intra-team communicatoin, or anticipating and addressing stakeholder concerns. A tech spec without a purpose is a waste of tiem.
    - What do i hope to achieve though this tech spec.
        - . Stream lines the writing process
        . Exxamples: <https://miro.medium.com/max/1400/1*fwG--JE_oyZQY1B4WPoMKw.png>

Loose tempalte
    Summary
        . "Spot the bot is a twitter bot that tweets pictures of dogs at predefine chronological intervals. The dog images are retrieved via a get call to dog api"

    Background => Why bui.d? what is the motiviation? What user problems are you attempting to solve? wehat previouys efforts , if any have been made to solve this problem?

        . "We are looking to exapnd our brand impint within the millenial setgment. Spott the bot will target the millenial audience by provoidng instant access to high-quality, curated dfog pictures. will differentiate ourself from the competition by delivering higher-quality pictures. "
    
    Goals > Highlight all the outcames that you predict will result from your work, both purposeful and inadvertent. This sectnion, along with the measurable impact are the yardstick by which you'll evaluate the success of your project : Did we achieve our inteded goals and impact?

        .  Disruptive monotous twitter feeds with fun, unexpected and "on-brand" images ( subjective )

        . Introduce millenial users to out brand with relevant and engagin content ( subjective )

        . Integrate with twitter ( to automate tweeting ) and dog api ( objective )
    
    Non goals: "A non-goal is something you are intentionally not doing or solving, even if it could be related. Defining non-goals helps limit the cope of your project and prevents feature creep.

        . Disseminate dog pictures via another platform 
        . Creating an in-house dog photo database ( will take a dependency on dog api )
        . Configurable post times. In v1 dog photos will be posted at hardcoded chronological intervals. 

    Plan: 
        . The longest part of your tech spec. Derscrive the engineering approach. If not degined, list the approaches you're considering. This enables reviewers help you choose. 


    Measuring impact 
        . This section defines specific metrics that you expect your porject will impact. 
        . In lift, engineers collaborate with data scientists and product managers to define hese metrics. 
        . Can hel panswer difficult questions around prioritization (Given our finite engieneering resources which feature is more important to build?), and later, become the mena sof gauging the project success and identifying areas for improvement. 
        . "Reach 2k twittewr followers within 2 months of launch via cross-account and cross-platform promotion"
        . "At least 50% followers are non-bots; at least 20% are age 18-35"
    
    Security, Privacy, Risks 
        ]
        . List the ways malicious users could exploit your change

    Other considerations
        . Discuss app´roaches you considered but ultimately decided against. THis serves as a form of docjumentation and can help preempt suggestions 
        . "Emails instead of tweets. Decided not to implement because t doesn't scale well, and user demand is low"
    
    Milestones
        . Helps lkeep project on tracka, diviide all work into key accomplishments and assign estimated dates. 
        . "Dog api by october 14 ; Post interval configurable october 17 ; qa complete october 21"

Getting feedback
    . Ask teamasters for initial review before distributing your tech spec widely. Then send them to progressively wider audiencies, refining it along the way.

    . When an issue is resolved, note its redsolution explicitly in the comments : Engage with your readers and reviewers. 

A tech spec is a living document, so its important to be in sync with major changes.

 <https://eng.lyft.com/awesome-tech-specs-86eea8e45bb9>
 ;
