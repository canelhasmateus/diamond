Dynamo DB

Fully managed NoSql database service
Fast Access , SSD, automatically replicated across AZ ( redundant, HA )

[[DatabaseNoSql]] database

Uses:

- Try not to create too many tables.
- Useful when using simple queries ( Less flexible, but inexpensive )
- Understand the size of the data that is going to be store. ( This impacts read and write capacity, and in turns defines costs incurred )
- Ensure attributes used in queries form the partition key.
- Make use of global secondary indexes for performing queries on other attributes
- Make sure that attributes used as the partition key has a good range of values -> evenly distributed data across partition

Global Tables

- This feature allows tables to be available accross multiple regions
- If you want data to be accesses from other regions with the least altency, you can make the data available in the edestionation region with the help of the global talbes
- Dynamo automatically propagate the data to the destination regions
- Helps both with latency and HA, single you using multi AZ / multi region

Backup and Restore

- Backups can be created on demand
- Backups do not consume provisioned throughput
- Backups contain Global Secodary indexes, local secondary indexes and provisioned read and write capacity
- Tables can be restored from the backup

(?... )
Is it possible to trigger the dynamodb export as csv from an api endpoint? it should , right?

dynamodb time series : <https://aws.amazon.com/blogs/database/design-patterns-for-high-volume-time-series-data-in-amazon-dynamodb/>
