# 2022-06-21

## Hiring

<https://www.youtube.com/watch?v=0Z9RW_hhUT4>

they have no time to filter / get to really know people

the hiring proccess is very expensive

- price( 500k up to 1m,
- process time from 6 to 12month
- interview time - at max 6h

two pillars:

- meaningful evaluation takes too long - needs to rely on proxies - and these proxies should be hard to imitate : these just take people out
- For system designers , the best way to know about these qualities, is to hear stoires

there are thus, 3 levels:

1. coding
2. system design - set of software components that work togethet to achieve an outocme that takes the coordintation of many people to design implement, test and maintain
   on the surface, look like sityuational, but are veily behavioral problems. Coding problems are situational.
3. Leadership : senior and principal engineers are responsible

eg.

1. boc

___

<[Interviewing is a noisy prediction problem · Erik Bernhardsson](https://erikbern.com/2018/05/02/interviewing-is-a-noisy-prediction-problem.html)>

Interviewing is a noisy prediction problem.

- Should be thought of as information gathering
- Consciously design the process to be the most predictive of future job performance.
- High Sinal-to-noise ration, and low-correlation with each other.

We end up with a matrix :

ApplicantId | Algorithmns | System Design | Gradles | Portifolio | Actual performance

How to measure job performance though? -> No way, find a proxy.

- avoid unstructured interviews
- avoid problems that rely on a single (insight | trick ) to solve.
- candidate should talk as much as possible -> However, interviewewr keeps driving ( Opportunity Costs).
- Certains signals can be good, but have a ton of false negatives -> Their presence is good, but their absence isn't a big deal.
- Having *many* short interview questions that rely on knowing particular things.
- Reading code ( java, unix, regex, sql ... ) can be valuable -> cover lots of ground, spending little time on each problem

On modelling such:
Regressing on the matrix is super noisy - noisy nature of the measuring devices , survivorship biases, low number of observations

Separate trick for judgement:

- What would i have to see in order for me to change my mind about this candidate? Both for positive and negative impressions.

Going backwards is also possible:

- Look at the current top perforamers at your company, and ask yourself: what type of interview would have selected these people?

___

<https://erikbern.com/2014/06/08/how-to-build-up-a-data-team-everything-i-ever-learned-about-recruiting.html>

"Recruiting is a problem ... with this observation bias where you only see how well the people you hire are doing."

___

what recruiters really look for in a backend engineer

the hype trains usually die very quickly , around a year or two
, learning it just to get hired means you're not passionate about that specific topic

```
proxy / reverse proxy / load balancers
    . Layer 3 load balancers??

    pick a taste of different technologies, and see what goes down. 

x
go deep down in a stack
find your passion
talk about fundamentals the most you can 

haproxy
    active - active?
    keep-alive?
```

___

## Downleveling

on downl-leveling

<https://www.youtube.com/watch?v=hU6BVxtGd5g>

a way for companies to hedge risk.

![](2022-06-21-20-16-25.png)

start is too focused on what happened rather than developing the character - you

the point is to determine good match - proper history makes the interviewer invested in you.

"Man - in - a - hole"
start anchoring the story by *anchoring* your story in the status and responsibilities ( use terms from the job descriptoin)

- after this is established, layer in conflict. Thick.
- Don't overthink it

use start as a linter on your story - after you already crafted it - as a linter, to make sure it has substance

1. levels are relative to each company
2. ppor behavioral responses lead to down leveling
3. use u-story shape
4. imperfect success
5. no villains
6. use star to check
7. don't lie

___

## Leadership

<https://www.youtube.com/watch?v=4i5iFlP01mQ>

leadership isn't management

1. leaders set direction and rally to destinations ; managers are more concerned with executions
2. leaders can be manager, but managers aren't leaders by default

traits | pitfall

1. technically deep and delivers | overindexes on delivery and tech depthg
2. rejects hyperbolic discounting | conflates leadership with management
3. expert time manager | unsustainable time management
4. by growing others nearby

hyperbolic discounting

___

## Teamwork

[Never attribute to stupidity that which is adequately explained by opportunity cost · Erik Bernhardsson](https://erikbern.com/2020/03/10/never-attribute-to-stupidity-that-which-is-adequately-explained-by-opportunity-cost.html)

Ideas will be generated much faster than there's bandwidth to execute on them, so you're doing something right if your backlog is growing indefinitely. A negative person on a mediocre team will complain that there's never time to work on their favorite pet project X. I've often heard things like “our backlog of features keeps growing so fast, how are we ever going to have time to invest in paying down tech debt?".

To me this reflects a misunderstanding of how product development should work. Backlogs should be growing indefinitely

___

Think about access
\- Not only credentials, but also *social access*

___

<https://www.youtube.com/watch?v=tgWx81_NGcg>

don't just accept the requirement, go to the root; push back

___

<https://codecraft.co/2012/10/22/unencapsulate-yourself/>

"Organizations that encapsulate people into layers r silos map nicely onto this through experiment. If you want to build a new feature,you ping-pong around to various specialists. Communications by document is the norm. Use cases are written in terms of a horizontal layer; Nobody seems to remember tgat the top of the stack is the entire universe as far as the user is concerned"

"Give me a proactive first class generalist in a siloed org and i will give you a high-leverage change-maker that's a linchpin for company success. They will be invited to every meeting, cut through ambivalence, see the big picture and make smart tradeoff. they'll lubricate the cogs of the machine in a way that an equally smart, but siloed, technical pro cannot."

___

The atomic unit of developer productivity ought then to be one iteration of the inner loop. The appropriate unit is not code quantity, but iteration frequency. We might call this unit of quantity developer hertz.

___

People learn differently.
Some of these learn by taking responsability - regardless of their learning method.
When this group of people are misguided, this behaviour goes out of its way.  - Their specialty turns into absorbing all the responsibility around them while leaving none for others , which results in self blaming in case of failures - While in the learning cone, they enter the blame spiral.

At the beggining of that spiral, their behaviours look good from the outside, and they get positive feedback for their responsible and accountable behaviour - This becomes a positive reinforcer for the blame spiral to grow. However, as it grows unmanagedly , they start to impact others. The blame absorber's spiral touches other people's learning cones and blocks them.

Moving back is possible - But one needs to be aware of the behaviour.
Developing midfullness is a difficult journey :: Marshal B. Rosenberfg's say to take responsibility for our feelings, not for every task.

"What other do may be the stimulus of our egelings but not the cause. When receiving a negative message we can

- We can blame ourservles ( blame absorbing )
- We can blame others
- We can sense our own feelings and needs
- We can sense others lfeelings and needs

The more we are able to connect our feelings to our own needs, the easier it is for others to respond compassionately.
The framework rosen berg uses is connecting the feeling with the need by using a sentence:
"
I feel .... because i Need ... "

This enables the self blame to turn into an action item and fulfill the need of a blame absorber without getting them into the blame spiral.

___

Moving fast and breaking things is good, but there are moments wetr risk-averse approach is better.
Military system, railway signaling, nuclear reactor software ....
Usually these system have ssafety critical properties, or they are difficult to roll back in failures...

Bias for action
"Many deicidions and actions are reversible and do not need extensive study"

Use a principles-first approach to think about the architecture and the logic of the code; However, use an applications-first approach while plannin ght edeliveries.

Many software teams seen to use kanban , scrum or naother iterative process. but often, they fail to align their releases with their iterations.

Define whose responsability is waht.
. WHen there is a sense of ownership, people take evcerything seriously. When there is a loosely defined resopnsibility, it creates confusion and conflicts. Every action should have a directly responsible individual.

```
Bruing just enough clarity to the future. 
```

Accept, aknowledge mistakes.
With bias to action, you will have many mistakes.

As a leader, transform "thing i like to do" into "things we like to do"

<https://candost.blog/bias-towards-action/>

Decision making pendulum

___

Why can't this be done sooner
. "Deeply understand the papraoch tou're taking, question it, find the gaps in your knowledge, and analyze the rists better so that you make an informative decision while moving faster. It doesn't ask yo reduce the orject quality or scope, its purely focused on undestanding the limitations.

There exists mulitple ways to split the work and deliver.
. Technical design
. Domain driven design
.. Split problem into user joiurneys and business domain requirements instread of technical layers.

If we're able to answer "Because of the reason X and dependency Y that we have no toher choice", we're acting midfully.

Thinking in alternatives pushes us to focus on the problem rather than blidly loving the solution.

<https://candost.blog/why-cant-this-be-done-sooner/>

#

___

Getting lost in the decision making process
Leaders either use:

```
 A lot of authority,

 Seek consensus
```

More often than not, they stick to one deicision making style for everyhthin => conflicts can haapen and the inflexivility in decision making is at the root fo vairous problems,

There are different sizes of decisisions;

Authroity is detrimental to everyone:
When leaders givce commands in every decision, they include themselsves everywhere while preventings others from growing
by veing involved in everything, they become blockers.

Relying in consnesus is a process that takes a long time.

"Consent decision making"
. Instead of getting an "I agree", it looks to just not having any objections.

```
. Looks more promising, but the more robusdt streategy is having the flexibility to se all of the above together. 
```

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

<https://www.youtube.com/watch?v=c6Jl88cImxc>

Aligned autonomy is an ongoing struggle
. "\[ I feel free to act and fully engage] to \[achieve a greater purpose]"

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
. Back and forth \[ multiple ]
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

```
    .. Presumptive splits don't do good. 
. Make structure follow strategy 
```

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

___

## Product Building

<[Optimizing for iteration speed · Erik Bernhardsson](https://erikbern.com/2017/07/06/optimizing-for-iteration-speed.html)>

"Mean time to recovery is more important than mean time between failures"
"When optimizing for a tight feedback loop, cross-functional teams make more sense then skill-splits"

## Management

<[The mathematical principles of management · Erik Bernhardsson](https://erikbern.com/2017/04/09/the-mathematical-principles-of-management.html)>

Topics that would be nice:

1. Decision making with perfect information
   - Most basic case
   - What is the breakeven time if we upgrade our widget making machine for $x so that it can make y more widgets per day
   - Concepts:
     - ROI
     - Diminishing returns
     - Marginal ROI vs average
     - Price sensitivity
     - Time allocation -> Lagrande multipliers and the principle of optimizing striving for equal marginal ROI
     - Opportunity Cost
     - Pipeline / Constraint thinking
2. Decision making given uncertainty
   - Concepts:
     - Prior beliefes and bayes rules
     - Explore vs exploid ( + Thompson sampling )
     - Rapid iteration vs long term planning ( hardware vs software development )
     - Proxy metrics
     - A/B testing
     - Known unknowns vs unknown unknowns
3. People management
   - Concepts :
     - Marxism and the theory that history is a struggle beetween employers and employees
     - Taylorism and the first wave of scientific management
     - How performance bonuses incentivizes risk taking?
     - Why it is so hard for companies to change?
   - Information assymetry:
     - Efficient meeting culture ( Think about it as a 1,000 person company where each person is a modem that can do like 30 baud. How do you organize to propagate information the fastest from top to bottom (and then back up?) )
   - Bounded rationality
4. Operating in a market
   - Concepts:
     - Completitive advantage
     - Market of people ( recruiting )
     - Moats: network effects ( Metcalfe's law) , scale advantages, proprietary technology, regulatory capture
     - Collusion and defection
     - Branding
     - Suppliers and wholesale transfer pricing
     - Induced Demand
     - First mover advantage
     - Case studies

<[Why organizations fail · Erik Bernhardsson](https://erikbern.com/2016/04/18/why-organizations-fail.html)>

"There is no intrinsic value of beautiful code and no intrinsic value of tech debt"
Why can't everyone just come in in the bmorning and ask themselves 'what is the highest ROI thing i can do today?' and then just do it?

1. Incentive problems
2. Bounded rationality

This makes management break down recursive:

1. Make sure people interests are aligned with the company
2. Make sure everyone in the team has the necessary information they need.

___

[σ-driven project management: when is the optimal time to give up? · Erik Bernhardsson](https://erikbern.com/2022/04/05/sigma-driven-project-management-when-is-the-optimal-time-to-give-up.html)

Define the blowup factor to be the ratio of actual vs estimated.
Blowup factors will follow a standard log-normal distribution, parametrized by σ.

Its CDF It always passes the point ( 1, 0.5 ), but depending on σ , the distribution is very different:
The thesis is that σ is an inherent property of the type of risk you have in your project Portifolio, and that different values for σ warrant very different types of project management

[Why software projects take longer than you think: a statistical model · Erik Bernhardsson](https://erikbern.com/2019/04/15/why-software-projects-take-longer-than-you-think-a-statistical-model.html) very related
