Big data
<https://www.youtube.com/watch?v=VYLWyS8UNm8>

Logging and metrics tools

    . Difficult to feel the system 
    Best Practices
        Operations room 
        dashboards - aggregate information highlighting
    
                                                Metrics / Monitorings : Dashboards alers
    systems > log aggregation & analytics engine =<
                                                Incident response: log serrch, drilldown 

dimensions in tool space
    Logs vs Metrics
        . Logs are events - metrics are aggregates
        . Logs have high dimensionality - metrics have low dimensionality
        . Logs tend to be unstructured - Metrics are structured
        . Logs support drill-down analysis - Metrics Leans towards dashboards and alerts
        . Logs will vary in volume - metrics have a fixed volume rate
        . Logs tend to be high volume - metrics tend to be low volme

    Historic vs real-time
        . Historic is good for incident response and audits ; real time are good for alerts and dashboards
        . Historic allows to uncover unknown issues; real-time are for known issues ;
        . historic requires disk ; real-time requires cpu 
        
    cloud vs on-prem
        cloud may bhave privacyu and security concerns
        cloud can pay as you go - on prem requires dedicated hardware ( operational vs capital expenses )
        cloud doesn't need to manage. .. .
    
    schema vs ad-hoc
        schema-based systems addresses knwon issues to look ou for ; adhoc enables to dig into new unkown issues
        schema <> index, but they often go hand in hand
            . trade offs between effort on write or effort on read. 

Log analytics sweet spot
    record everything
    generate metrics from the logs in real time
    interactive / ad-hoc search on historic data
    _can_ be installed on-premises
    affordable

product team practtices

    Monitors with graphs 
        . Gives a sense of normality
        
    Be the customer 
        => DogFooding

    Safe Environment
        TAkes all kinds of peoples
        . "I'm not a good finisher"

    Be in doubt
        . Discuss trade offs - not do's and don'ts
        . Leave time to wonder
        . No one knows "what's best"
    High BUS factor
        . We depend on people ;
        . Don't try to make them replaceable
        . Everyone is responsible
    
    Take small steps
        . Running a saas with frequent deployments teaches you to take small steps
        . define design goals and dicuss tradeoffs. 
        . avoid long-running side-projects . feature-flag new work. 
    Manage critical dependencies
        . Own all critical components
        . tempting to pull in 200+ apache libraries
    
    Don't waste hardware
        . The most amazing achievement of the computer software industry is its continuin cancellation of the steady and staggering gains made by the computer hardware industry

careful engineering - data processing engine

    Events pass through either two paths 

    State Machine 
        .  "The query gets compiled into a state machine that is then fed the events"


    Event Store 

Aggregates

| Function | State | Step | Merge | Result  |
count | n | n + 1 | n1 + n2 | n
sum | ( n , s) | ( n+1 , s + value ) | ( n1 + n2 , s1 + s2) | s/n
stddev ( n , s , q ) | ( n  + 1 , s + value , q + value^2 ) | ( n1 + n2 , s1 + s2 , q1 + q2) | ( sqrt( n*q - s^2 ) / n )

> ring buffers

Event store : Fast filters
    . "Build minimal index and compress data"
        .. Can hold it in memory

Fast grep for filtering events

Start-time, end-time, metadata
