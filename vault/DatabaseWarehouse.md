# DataWarehouse

Large amounts of historical data.
Incredible Amounts of information -> Mine it -> Better decisions

E.G \[\[AwsRedShift]]

___

## SlowlyChangingDimensions

1. Type 0
   Never Changes
2. Type 1
   Only the latest snapshot is recorded, without historical records
3. Type 2
   Entire Change history is recorded, through adding rows
4. Type 3
   Changes are recorded through adding column ( Rare )
5. Type 4
   Current record and history are in separated tables

___

data warehouse - Kimball
loss: tight coupling microservices and bi / ml models

DA impact

Data Modeling
. Less chaos and more 'central' datasets that decouple backend architecture from BA/DS/MLE
Data CLarity
. Source of Truth
. Documentation
Tackling the data gap
. Through DA squads have support to solve their data challenge

___

## References

1. <https://towardsdatascience.com/data-analysts-primer-to-slowly-changing-dimensions-d087c8327e08>
2. <https://www.startdataengineering.com/post/writing-memory-efficient-dps-in-python>
3. <https://www.youtube.com/watch?v=_UiWGP2lj8Y>
