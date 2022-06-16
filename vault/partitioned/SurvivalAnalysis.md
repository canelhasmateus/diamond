
<https://www.youtube.com/watch?v=WZNmlT-arF0>

analise de sobrevivencia

metodologias relacionadas a prever o tempo ate um evento acontecer

    Event  - What you want to predict

    Time - Period taken to see the event

    Censoring - occurs when we don't know the time until the event. 

Survival Function
Hazard Function - The instantaneous potential per unit of time for the event to occur , given that the individual has survived up to time T.

Goals
    Estimate and interpret survivor functions from data
    Compare survivor and or hazard functions
    Assess the relationship of explanatory variables to survival time.

Cox Model
    -> Baseline function  ;
    -> Supposes hazard function has form L( T | X ) = L0*T* exp( phi(x )), where P = x'*B

Concordance Index
    ->  People with higher hazard should take less time until event

Consider using when
    . Tim eis related to the target definition
    . Dealing with censoring
    . Have a small quantity of data
    . Recent data is very important for your problem
