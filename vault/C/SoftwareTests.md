
___

<https://www.youtube.com/watch?v=jwbKSiqG0DI>

testing without mocks

mocks are a way to isolate code from its dependencies
    . Why not use?

    . They're solitary tests - you end up with gaps between the units: they may function alone, but not together.
    . Integration tests are supposed to deal with the gaps, but they are slow and duplicate effort. 

Overlapping Sociable Tests
    .
Nullable Infrastructure
    . Eventually we hit part of the code that we don't want to run.
    . Nullable Infrastructure is real production code that can be disable
    . Tracks state when needed
    . Implemented with embedded stubs


___

The whole idea of automated tests is to make changes hard. That's logical: you don't want to add errors to your application. Unfortunately, most tests freeze the implementation instead of the behavior.

<https://www.beyondjava.net/playwright>
