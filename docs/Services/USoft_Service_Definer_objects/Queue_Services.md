---
id: Queue_Services
---

# Queue Services

A queue service in Service Definer is a Service (Other) that allows you to read and/or process rows from a queue table defined in Definer a first-in-first-out order.

A queue table is a normal table defined in Definer that complies with the following rules:

- has a ID primary key column based on a generated sequence number
- has a STATUS column based on a domain with at least one allowed value: 'NONE'

## Defining a queue service

To define a queue service:

1. Choose Service, New Queue Service from the menu.

2. Set the following values:

|        |        |
|--------|--------|
|Queue Service Name|(the name of the queue service)|
|Application Name|the name of the USoft application where the queue table is defined)|
|Queue Table Name|(the name of the queue table as defined in Definer)|
|Selection Connection Name|(the name of the Service Definer connection that will be used to execute the selection on the queue table).|



The default implementation of a queue service uses following select statement:

```sql
SELECT   RECORDS(1, 50) id
FROM     queue-table
WHERE    status = 'NONE' AND
(
         :msgid is null 
   OR    id > :msgid
)
ORDER BY id ASC

```

where **:msgid** is the message id of the last selected row.

```
Processing Connection Name = (the name of the Service Definer connection that will be used to execute processing statement, that is Process Statement Name).
```

Process Statement Name = (the name of the statement used for processing a row in the queue table).

3. A  connection is added with the name specified by Selection Connection Name field, if it does not exists.

The connection has a rule service with following properties:

|        |        |
|--------|--------|
|Host name|localhost|
|Port number|7777    |



Change these settings as required.

4. A  connection is added for the value specified by Processing Connection Name field, if it does not exists.

The connection has a rule service with following properties:

|        |        |
|--------|--------|
|Host name|localhost|
|Port number|7777    |



Change these settings as required.


:::note

You can also used the same connection name for Selection Connection Name and Process Connection Name. For administration reasons it might be easier to use different names, that may in fact use the Rules Service.

:::

5. A statement is added with the name specified by Process Statement Name field if it does not exists, having following SQL Statement:

```sql
INVOKE BatchRunner.PROCESS_QUEUE WITH SELECT :msgid "ID", 'True' "-quiet"

```

Change the default SQL Statement, or just the job name in the SQL Statement with the job in Definer that does the processing.

6. Two properties are added to the global properties:

|        |        |
|--------|--------|
|\<queue service name>#USoftUser|USoft user name used to connect to the rule service defined in selection and processing connections|
|\<queue service name>#USoftPassword|USoft password used to connect to the rule service defined in selection and processing connections|



## Queue service properties

Queue service is configured by properties. The properties are classified as:

- Define time properties: properties that cannot be changed after the server is published
- Runtime properties: properties that can be changed after the server is published.

After publication, runtime properties are available in the config.xml file of the server. They may be changed by a automatic release and configure procedure, or directly on the target machine where the server is running (acceptance, testing or production environment).

## Queue service define-time properties

Define-time properties for a queue service are defined as properties in the @QueueTask annotation.

*Example*

```
@QueueTask(name="message_queue", selectConnection="selectMQ", processConnection="processMQ", defaultGrouping="EXTERNAL_KEY")
```

Define-time properties are:

|**Property Name**|**Description**|
|--------|--------|
|name    |The name of the queue table in Definer|
|selectConnection|<p>The name of the Service Definer connection that will be used to execute the selection on the queue table. The default implementation of a queue service uses following select statement:</p><pre><code class="language-sql">SELECT   RECORDS(1, 50) id<br/>FROM     \<queue table> <br/>WHERE    status = 'NONE' <br/>AND(<br/>             :msgid is null <br/>      OR     id > :msgid<br/>)<br/>ORDER BY id ASC</code></pre><p>where **:msgid** is the message id of the last selected row.</p>|
|processConnection|the name of the Service Definer connection that will be used to execute processing statement, that is the statement used in the Implementation of the onMessage method.|
|defaultGrouping|A queue service may execute processing statements in parallel, using multiple rules engines.Rows in a queue table may be grouped using a field in the queue table, and it is useful if you want all rows from the queue table in a specific group to be processed serially. This property contains the name of the column in the queue table used for grouping. Messages are not grouped if defaultGrouping property is not declared.|



## Queue service runtime properties

Runtime properties for a queue service are defined as properties on the Properties tab of the server where a queue service is published. The property names follow the syntax:

```
<queue-service-name>.<property-name>

```


:::warning

The following syntax is now obsolete:

:::

 

*Example*

```
process_reservation.USoftUser

```

Runtime properties are:

|**Property Name**|**Description**|
|--------|--------|
|USoftUser|A user name defined in Authorizer; the user name part of the credentials used by the selection connection to select data from the queue table and for the processing connection to process data using the process statement.|
|USoftPassword|The password part of the credentials used by the selection connection to select data from the queue table and for the processing connection to process data using the process statement.|
|ParallelTasks|<p>The number of processing tasks that are allowed to execute in parallel. These tasks will be equally distributed over the number of Rules Services defined in the processing connection. The default is 1, meaning that serial processing is the default: tasks are not executed in parallel.</p><p>*Examples*</p><p>- The processing connection has 1 Rules Service and there are 4 parallel tasks to be executed. 4 Rules Engines will start on the Rules Service.<br/>- The processing connection has 2 Rules Services and there are 4 parallel tasks to be executed. Each Rules Service will have 2 Rules Engines active.<br/></p>|
|RetryInterval|If an error happens at processing time, this property sets the period in milliseconds that the queue service waits before the queue table row is offered again for processing. The default is 1000 (milliseconds).|
|RetryCount|If an error happens at processing time, this property sets the number of times that the queue service submits the queue table row for processing. The default is 3 (times).|



 