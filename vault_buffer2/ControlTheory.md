<https://www.youtube.com/watch?v=lBC1nEq0_nk>

An important question to answer when designing an autonomous system is how to
get the system to do what you want.
Control Systems -> Mathematical framework

u ( control inputs, Controlled ) -> System
d ( disturbances, Not Controlled ) -> System
System -> x ( States )

1. Can an algorithmn control the inputs without constantly having to know the current state of the system?
   - OpenLoopController / FeedForward Controller.
   - Generates the control signal by taking in the inputs by the reference, and never checks the state of the system.
     It is possible for the reference to require an specific state, but for that
     to work, we need to know the system. This can be derived from first
     principles, or fitted from data ( system identification )
   - Given an system model F(x), the feedforward controller can invert the
     function, and generate the required inputs from the reference. However,
     this needs a very detailed model of the system , and a very inert environment.
   - Errors build over time.
   - This is where feedback controllers ( closed loop ) come in.
     Feedback control is powerful but dangerous. Feedforward changes how we operate a system. Feedback changes the dynamics of a system
     `x' = f(x)`
   - A lot of control theory is focused on designing and analyzing feedback controllers, e.g : \[ Linear ( PID )  On-Off, Sliding mode, gain scheduling. ]
     - Not useful to categorize between linear and not linear.
     - Robust: Mu sysntehis,s Active Disturbance rejection control -> Focus on Meeting requirements
     - Adaptive: Extremum seeking, model reference adaptive -> Adapt to change to system over time
     - Optiomal: LQR -> Focus on balancing performance and effort by minimizng the total cost.
     - Predictive: Model predictive Control
     - Intelligent: Fuzzy control, Reinforcement learning
     - Other control methods. The choice depends on which system we're controlling and what we want it to do:
       What is the state we want our system to be in?
       What is the reference we want it to follow?
       The control system can't follow a reference if one does not exist. Planning is required and there are many methods e.g. Rapidly Expanding Random Trees and A\*
   - We need to know the state of a system, and doing that with a sensor
     introduces noise. In a feedback control system, the noise in the
     measurement actually affects the true state!
   - Observability: How to observe the states that are fedback? No need to measure it directly, just observe it ( e.g. no need for accelerometer as acceleration can be derived from speed )
   - State Estimation: Kalman Filter, Particle Filter, Running Averages. The choice of algorithmn depends on how much noise, and the type of noises that are present in those measurements.
   - Simulation, Analysis, Test: Make sure we satisfy the requirements: Bode Diagram, Nichols Chart, Nyquist Diagram.

```d2
planning.reference -> controller.r
controller.u -> system.u : "control inputs"
d -> system.d: "disturbances"
system.x -> sensor : "states"
d2 -> sensor: "noise"
sensor -> state-estimation.y
state-estimation.x -> controller.x
```

```comment
II've got a PhD in control theory, which is all about getting solution bounds
of algebraic Lyapunov and Riccati matrix equations. Said equations play an
important role in various control and engineering problems, especially
stability analysis and linear quadratic optimal control of LTI systems.'ve got
a PhD in control theory, which is all about getting solution bounds of
algebraic Lyapunov and Riccati matrix equations. Said equations play an
important role in various control and engineering problems, especially
stability analysis and linear quadratic optimal control of LTI systems.
```

___
