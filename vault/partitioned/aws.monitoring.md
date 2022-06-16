Cloudwatch

How to create metrics on logs

Repository of all aws metrics
 lambda, rds
No only metrics, also logs
create alarms based on metrics and logs
can also wait for  events sent from various resources

Cloudwartch - ec2
 CPu, NetworkIn and Out
 Rds:
  Database connection
  Read IOPS

Create alarms based on metrics
 Email Notification
 AutoScaling

Can also direct metrics and logs from on-prem

create lambda function
 esnure logs are nr ty cloudwatch
 create a metric fitler to reach for word 'error' in logs
 create an alarm based on that

CloudWatch
    . Monitoring , Metrics, Logging
    . Inbuilt: CPU, Disk I/O , network utilization
    . if want more: Custom Metric.
    . Kinda low granularity ( 5 min ). Can pay more for detailed monitoring.
    . Events
        .. Alerting System
        .. Rules triggers actions
        ..

___

CloudTrail only logs tokens when assumeRole is used. TO Fully Identify a person, the logs from the assuming account are also needed.

___

CloudTrail
    . Auditing

Config
    . Also auditing
    . Track Changes
        .. Check if it agrees with the organiaztion policies.
