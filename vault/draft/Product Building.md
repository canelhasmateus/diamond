https://codecraft.co/2013/03/05/are-you-losing-enough-battles/

"Once you have 40 to 70 percent information, go with your gut"

https://eng.lyft.com/awesome-tech-specs-86eea8e45bb9

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
        . Exxamples: https://miro.medium.com/max/1400/1*fwG--JE_oyZQY1B4WPoMKw.png

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
 
 https://eng.lyft.com/awesome-tech-specs-86eea8e45bb9
 ;





#
Why can't this be done sooner
    . "Deeply understand the papraoch tou're taking, question it, find the gaps in your knowledge, and analyze the rists better so that you make an informative decision while moving faster. It doesn't ask yo reduce the orject quality or scope, its purely focused on undestanding the limitations. 
        
    
There exists mulitple ways to split the work and deliver. 
    . Technical design
    . Domain driven design 
        .. Split problem into user joiurneys and business domain requirements instread of technical layers. 

If we're able to answer "Because of the reason X and dependency Y that we have no toher choice", we're acting midfully. 

Thinking in alternatives pushes us to focus on the problem rather than blidly loving the solution. 

https://candost.blog/why-cant-this-be-done-sooner/





# 


# 


Moving fast and breaking things is good, but there are moments wetr risk-averse approach is better. 
Military system, railway signaling, nuclear reactor software .... 
Usually these system have ssafety critical properties, or they are difficult to roll back in failures... 


Bias for action
"Many deicidions and actions are reversible and do not need extensive study"


Use a principles-first approach to think about the architecture and the logic of the code; However, use an applications-first approach while plannin ght edeliveries. 


Many software teams seen to use kanban , scrum or naother iterative process. but often, they fail to align their releases with their iterations. 

Define whose responsability is waht. 
    . WHen there is a sense of ownership, people take evcerything seriously. When there is a loosely defined resopnsibility, it creates confusion and conflicts. Every action should have a directly responsible individual. 

    Bruing just enough clarity to the future. 

Accept, aknowledge mistakes. 
    With bias to action, you will have many mistakes. 

As a leader, transform "thing i like to do" into "things we like to do"

https://candost.blog/bias-towards-action/

Decision making pendulum




___



Getting lost in the decision making process
     Leaders either use:

     A lot of authority,

     Seek consensus
    
More often than not, they stick to one deicision making style for everyhthin => conflicts can haapen and the inflexivility in decision making is at the root fo vairous problems, 


There are different sizes of decisisions; 


Authroity is detrimental to everyone:
    When leaders givce commands in every decision, they include themselsves everywhere while preventings others from growing
    by veing involved in everything, they become blockers. 

Relying in consnesus is a process that takes a long time. 


"Consent decision making"
    . Instead of getting an "I agree", it looks to just not having any objections.

    . Looks more promising, but the more robusdt streategy is having the flexibility to se all of the above together. 

![](2022-04-02-16-18-23.png)


Each person style is different. 
    .. Affected by personality, backgrounds, and previous work environemnts. 
    . When confronted with a decision style that its not accustomed to , the indifvidual feels uncomfortable and gets annoyed by the approach. 
    . When this happens, they m ight say "we're going to fast'
    . This is a leader's mistake. its a communications failure
        .. wrongful focus on speed vs correct action. 
    
How to choose each one?
    . .Experience
    . Empathy, 
    . Reading the air
    . Understanding circumstances.
Explaining the decision making satyle is preffered
    . Discussions never end without understadning the reasoning. 


Bias torwards action while keeping the authority at the minimum. 



___




https://www.youtube.com/watch?v=c6Jl88cImxc



Aligned autonomy is an ongoing struggle
    . "[ I feel free to act and fully engage] to [achieve a greater purpose]"



Air Sandwich
    . "Clear vision and future direction"
    .     ? 
    . "Day to day action"

Hypergrowth
Politics
    . People are not clones, having different perspectives and interests. Its useful to start by being curious rather than assuming bad faith ; this is not equivalent to no politics

Most people assume they've communicated when they transmit, but there are four other states
    . Transmitted
    . Received
    . Understood
    . Agreed
    . Converted to useful action

CatchBall
    . Back and forth [ multiple ]
    . Not one-way
    . Big crowds doesn't generate back and forth.
        . "I'm Sure they know we're depending on them"
        . "We've marked them as a dependency in a spreadsheet that none of us regularly check"

Rhythm
    . Serendipity informality when small ; deliberate explicit when big 
    . "The larger the meeting the longer it takes to get to depth"
    . we add people on the first place to have more perspectives. 

Boundary Objects 
    . Refers to an object ( physical or mental ) that allows groups with different goals to coordinate their actions
    . Facilitates real over fake alignment.
    . Examples
        . Metaphors
        . Flywheels ( ??? )
        . Design Hierarchy of needs ( medium.theuxblog.com/design-hierarchy-of-needs-the-prodct-owners-guide-29ceb28205ae )
        . Process / Journey Map
        . System Context Diagrams ( eg. C4 Model)
        . Cause and effect diagrams ( not great )
    . If its too simple, its misleading; if its too fancy, its confusing. 
    . Balancing act - never done 

Growth
    . Can't assume stable teams
    . Can't rely on cultural osmosis : 
        .. The new-people outnumber the older
        .. Default culture becomes whatever people bring , UNLESS , you're much more deliberate about occupying that space.
        
        .. Presumptive splits don't do good. 
    . Make structure follow strategy 

Organic Org design
    . Wait for seams to appear
    . Nudge things apart
    . Formalize the split

Edgar Schein 3 Levels of culture
    . Artifacts
    . Espoused Belief and values
    . Basic Underlying Assumptions

Richard Rumelt Strategy kernel
    . Diagnosis
    . Guiding Policy
    . Coherent Actions

Systems Leadership ( Ian Macdonald, Catherine Burke and Karl Stewart)
    . Role Modelling
    . Systems ( Processes, tools, etc. )
    . Symbols ( )


If it hurts, do it more often

