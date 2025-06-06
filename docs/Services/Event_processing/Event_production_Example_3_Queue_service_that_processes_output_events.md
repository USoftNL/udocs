---
id: Event_production_Example_3_Queue_service_that_processes_output_events
---

# Event production Example 3: Queue service that processes output events

The following step-by-step instructions are for sending an output event from a Travel Agency model. The example is of an asynchronous output processing pattern.

The output events have previously been stored as XML messages in a queue table named OUTPUT_QUEUE_SCHEDTOUR. See Example: Model and rules for creating output events.

## Creating a queue service for processing messages in a queue table

To create a queue service for processing messages in a queue table:

1. In Service Definer, create a SQL statement that selects the xml from the output queue table. Set the following values:

|        |        |
|--------|--------|
|Statement name|PROCESS_QUEUE_SCHEDTOUR|
|Application Name|TRAVEL  |



Statement:

```sql
INVOKE   BatchRunner.PROCESS_QUEUE_SCHEDTOUR WITH 
SELECT   :id      "MESSAGE_ID"
,        'True'   "-quiet"
```

Save work. Click the Check button to have your SQL syntax checked. If it is correct, the Correct = Yes flag is set.

2. Choose Services, New Queue Service from the menu. In the dialog, set the following values:

|        |        |
|--------|--------|
|Queue Service Name|send_schedtour|
|Application Name|TRAVEL  |
|Queue Table Name|OUTPUT_QUEUE_SCHEDTOUR|
|Selection Connection Name|output_queue_select|
|Processing Connection Name|output_queue_process|
|Process Statement Name|PROCESS_QUEUE_SCHEDTOUR|



Press OK. Notice that the following are offered in the Catalog on the left-hand side for inspection:

- A Service(Other) named **send_schedtour**.  
- Two Connections named **output_queue_select** and **output_queue_process**.

- Both connections have a default rules service added, using port 7777. Change the port number as needed. Both connections may use the same port but they also may use different ports.

You can also used the same connection name for Selection Connection Name and Process Connection Name. For administration reasons it might be easier to use different names, that may in fact use the Rules Service.

## Creating a REST service that picks up output events

In Service Definer, create a REST service that will receive a signal from the Rules Engine when a new output event is added to the queue table:

1. In Service Definer, open a custom REST Service that is exposed by a Server, or create a new REST Service. For details, read the "Setting up your own REST service" help topic.

2. Click on the Fields tab. Add a new field with the following values:

|        |        |
|--------|--------|
|Name    |schedtour_event|
|Type    |com.usoft.uservice.server.Event|
|Annotation|@com.usoft.uservice.server.EventInject(name="OUTPUT_QUEUE_SCHEDTOUR")|



The value of the **name** property in the Annotation must be the name of the queue table used for output events.

3. On the Methods tab of this REST service, define a method with the following values:

|        |        |
|--------|--------|
|Method Name|schedtour_event|
|Relative URI Path|/schedtour_event|
|REST HTTP Verb|POST    |



Implementation:

```
schedtour_event.signal();
```

4. Check the REST service.

## Creating a constraint that sends a message

The next step is to define a constraint that sends a message in response to a signal from the queue service.

1. In Definer, create a constraint with the following SQL Statement:

```sql
INVOKE   http.send WITH 
SELECT   'http://localhost:8090/travel/schedtour_event'
,        id
FROM     output_queue_schedtour

```

where http.send****is an RDMI method that sends an HTTP POST request to the REST service that picks up output events. This is the service that exposes the schedtour_event method.

2. Check the constraint.

## Publishing the solution

To publish the queue service:

1. Choose Define, Servers, and retrieve the record of the Server in which you want to expose the queue service, or create a new Server.

2. Associate the new queue service with this Server.

3. On the Server Properties tab, add the following properties:

- send_schedtour#USoftPassword. Set the value to a user password known in Authorizer.
- send_schedtour#USoftUser. Set the value to a user name known in Authorizer.

4. With input focus on the Server record, choose Publish and Restart from the menu.

To publish the service that picks up the output events:

1. Choose Define, Servers, and retrieve the record of the Server for output events, or create a new Server.

2. Associate with this Server the REST Service that picks up the output events. This is the service that contains the schedtour_event method.

3. With input focus on the Server record, choose Publish, Publish and Restart from the menu.

## Testing the implementation

To test the implementation:

1. Check that, after starting the Server, messages in the queue table that had not been processed (Status field is NONE) are now processed successfully, or processed with error.

2. Via the client/server GUI, add a new record to the OUTPUT_QUEUE_SCHEDTOUR queue table. Check that the record is processed automatically.