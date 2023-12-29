<https://www.youtube.com/watch?v=BTD5I1BMx2Q>
Is your application IO-bound or CPU-bound?

CPU metrics on top:

- u.s: User process. A percentage of all the cores in the machine of how much
  cpu usage *user* processes have used.
- s.y: How much time the cpu has spent on *system* operations. ( Kernel mode,
  Syscalls )
- ni : Tag processes with specific priorities. Everything that is > 0 increases
  this.
- id : Idle.
- wa : Waiting. ( IO operation. specific from disk )
- hi: Hardware Interrupts
- si: Software Interrupt
- st: Steal - On virtualized environments, with multiple os on the same
  machine, some cpu can be stolen by other processes.

Even with 100% cpu usage, this does not mean that other processes are being
starved. In order to reach that conclusion, we need PSI It stands for Pressure
Stall Information.

___

<https://www.youtube.com/watch?v=GsF8R6DBxSg>
Nice Values

- default is 0
- greater means less low-priority.
- `u.s` does not count nice processes, while `ni` does in top.

You can use `nice` to start a process with a certain nice value, and `renice`
to change it mid run.

- You can decrease your priority, but not increase it ( w/o admin rights )

___

___

___

<https://www.youtube.com/watch?v=OAOQ7U0XAi0>

- Think of the UUID as a number.
- Indexes are ordered. not ideal to insert random numbers;
  - When the page is full, but it is necessary to insert a element there, a `page split` needs to happen.
  - Pages are doubly linked, so there is a lot of updating around.
  - Depending on the implementation, also page fragmentation
  - Since we're touching around a lot of memory, we'll have some cache effects.

___

<https://www.snoyman.com/blog/type-safety-doesnt-matter/>
Type safety does not matter.

What I mean is that, on its own, type safety is not important. It's only useful
because of what it accomplishes: moving errors from runtime to compile time.
Even that isn't a goal on its own. The real goal is reducing runtime errors.
Type safety is one of the best methods of achieving these cascading goals, but
it's far from the only one.

> Proxy metrics

___

<https://surfingcomplexity.blog/2023/08/20/why-lfi-is-a-tough-sell/>

`RCA` ( root cause analysis )
`LFI` (Learning from incidents) <https://www.learningfromincidents.io/>

`miscalibration` to describe incorrect mental modesl,
and `structural secrecy` , a mechanism that leads to incorrect mental models.

<https://press.uchicago.edu/ucp/books/book/chicago/C/bo22781921.html>

" ... But incorrect mental models  are not something we talk much about
explicitly in the software world. The RCA approach implictily assumes there's
only a single thing that we didn't know: the root cause of the incident."

"... on the one hand, organizations recognize that experise leads to better
decision making: it's why they are willing to hire senior engineers even though
junior engieneers are cheaper.  On the other hand, hirign seems to be the only
context where this is explicitly recognized. This activity will advance the
expertise of our staff, and hece will lead to better future outcomes, so it's
worth investing in. That is the kind of mentailty required to justify LFI

"" \_\_\_

___

I've worked in many analytics projects across a number of companies as a consultant. I'm a big believer in "decision support systems". Find out what decisions your customers need to make, repeatedly, to their job. Quantify the heuristics and visualize that information (and that information only) in an easy to consume manner. More often than not that's an email or PDF. Another advantage is that by supporting the business users they feel less threatened by the changes or technology.
I think "self-serve" analytics is silly, the idea that you put all of the data in front of people and they'll derive "insights". That's not how normal people or data work. We just had a discussion on HN the other day about Facebook's Prophet, and its pitfalls. Meanwhile we expect Joe in sales to be able to identify useful trends on a chart he made. Every company needs to forecast, regardless of their sophistication. That stuff needs to be defined by the right people and given to the users

.<https://news.ycombinator.com/item?id=3768779>

___

> Take, for example, a requirement that every entry point to your web app (i.e. a page or HTTP API), apart from a few exceptions like login and reset password, should require authentication.
> The “test harder” religion interprets this as:
> For every entry point
> Write a test that
> Ensures non-authenticated requests return 403
> That's a lot of tests, and even worse is that you have to remember to write them.
> “Test smarter” says:
> Write a test that
> For every entry point
> Ensures non-authenticated requests return 403
> That's one test. “Write a test” is executed in developer time, so in the first example the loop ("For every entry point") is also executed in developer time. Push the loop inside the test, and it gets executed in computer time instead.

___

<https://www.youtube.com/watch?v=xq6olzNU6iM>
TestCube , K6
