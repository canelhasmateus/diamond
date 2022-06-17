<https://erikbern.com/2015/06/05/the-hardest-challenge-about-becoming-a-manager.html>
I think what happens in your brain is you create all these proxies for accomplishments that take years to retrain. I would be incredibly costly if every action was judged in terms of its benefits amortized over your entire life time. Instead, we humans have an ability to invent pretty arbitrary proxies, such as getting high scores on exams, or in my case, write shitloads of code.

Proxies are great because they let you make decisions much quicker.

After a few years of doing something very consciously (programming is good because I can build this cool game and show it to my friends) you build up this great rewards system (kind of like Pavlov's dogs?) that makes you feel good about it in itself (programming is cool because I feel good when I do it).

The problem is when your ultimate goal changes and your old proxies are still in effect.

____
<https://joeblu.com/blog/2022_05_okrs/>

 think a lot of people's introduction to OKRs is John Doerr's book "Measure What Matters". That's where I learned about them.
The book explains how Andy Grove introduced the practice at Intel and it was very effective. The book seems to attribute the success to the practice itself and seems to say "if you adopt OKRs, you will succeed like Intel did".

I suspect that this success is misattributed. I suspect that Andy Grove was probably an excellent manager and I think he could have succeeded with something other than OKRs. I think he understood that what was really important was to get everybody across the organization to focus on essentially one big goal. He needed to make sure that everybody was pulling in the same direction and together, and OKRs provided a tool to do that.

When my organization decided to implement OKRs, my question to my peers was "who is our Andy Grove?"

If the people implementing OKRs focus too much on the practice and not enough on the motivation, I think you just end up with cargo-culting. The setting and tracking of KRs becomes the objective. So people treat it like busywork because OKRs don't really seem to matter - they just gets in the way of the "important" stuff.

As one of my coworkers says, the title of the book is "Measure What Matters", but it's too easy to slide into "What Is Measured Is What Matters".

...

Very true.

However -- note that the process of implementing OKRs has caused the leadership team to write down their expectations, which previously might have been unspoken. This is a first step towards resolving the problem. The next step is for the CTO to push back, hard, on the bits of these that aren't actually realistic, and hopefully get the leadership team aligned on what can actually be done. And so, the process of OKRs potentially has value here in flushing out unrealistic or mismatched expectations between different parts of the org.

This is one of those rare "my way or the high way" moments in leadership; as CTO at this company it's your job to either get the leadership team to realize that they are asking you for more than you can be expected to deliver, or quit. You can't stick around and put your name on a plan that you know is impossible; otherwise you're going to be the one that failed for every quarter to come. And even worse, you can't sign your team up for this BS. It's your job to shield them from this kind of shit.

> Half the Objectives were outside the scope of the engineering team.

Shared OKRs are difficult, but sometimes they are unavoidable. The most difficult business problems usually are cross-functional. At their best, OKRs can help to make these cross-functional dependencies more explicit, and foster communication and collaboration around them.

If they are trying to have engineering take full ownership of a shared OKR, that's a big problem. But if you clearly call out the shared ownership, and consider both parties responsible for implementation, then I think that's OK.

> We were to going to increase our release cadence 10x. We were also going to reduce production issues by 100%. That's right, our objective was 0 production issues whilst massively increasing our release cadence with 0 extra resources.

As a tangential point, increasing release cadence can definitely decrease your long-term rate of issues (see "Continuous Delivery" by Humble[1]) -- this forces you to automate manual processes, and manual processes are one of the main places that errors creep in. Though I think "count of issues" is a very poor metric, you're better off with an uptime metric. And "100%" is the only strictly-incorrect number to pick for uptime, because it is literally impossible; my (super-unscientific, don't hold me to this) rule of thumb for business people is "every extra 9 costs you 10x". So do you need 99.9% uptime or 99.99%?

___