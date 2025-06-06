---
id: Event_handling_Example_2_Queue_service_that_processes_input_events
---

# Event handling Example 2: Queue service that processes input events

The following step-by-step instructions are for creating a queue service that processes incoming reservation events for a Travel Agency model in an asynchronous fashion.

The reservation events have already been stored in a queue table as an XML message.  To make things easier, the event data in this example is in USoft's XML.Export format as applied to the Travel Agency's RESERVATION table.

The queue table is called INPUT_QUEUE_RESERVATION. To define this queue table, see Example: REST service that receives events asynchronously.

## Creating a queue service for processing input events asynchronously

To create a queue service for processing input events asynchronously:

1. In Service Definer, create a SQL statement that executes the processing job. Set the following values:

|        |        |
|--------|--------|
|Statement name|PROCESS_QUEUE_RESERVATION|
|Application Name|TRAVEL  |



Statement:

```sql
INVOKE   BatchRunner.PROCESS_QUEUE_RESERVATION WITH 
SELECT   :id      "MESSAGE_ID"
,        'True'   "-quiet"
```

Save work. Click the Check button to have your SQL syntax checked. If it is correct, the Correct = Yes flag is set.

2. Choose Services, New Queue Service from the menu. In the dialog, set the following values:

|        |        |
|--------|--------|
|Queue Service Name|process_reservation|
|Application Name|TRAVEL  |
|Queue Table Name|INPUT_QUEUE_RESERVATION|
|Selection Connection Name|queue_select|
|Processing Connection Name|queue_process|
|Process Statement Name|PROCESS_QUEUE_RESERVATION|



3. Press OK. Notice that the following are offered in the Catalog on the left-hand side for inspection:

- a Service(Other) named process_reservation.  
- two Connections named queue_select and queue_process. Both connections have a default rules service added, using port 7777. Change this as needed. Both connections may use the same port number or different port numbers.


:::note

You can also used the same connection name for Selection Connection Name and Process Connection Name. For administration reasons it might be easier to use different names, that may in fact use the Rules Service.

:::

## Publishing the solution

To publish the solution:

1. Add the new queue service to your Server.

2. Choose Define, Servers, and retrieve the record of the Server in which you want to expose the service.

3. On the Properties tab, add the following properties:

- process_reservation#USoftPassword. Set the value to a user password known in Authorizer.
- process_reservation#USoftUser. Set the value to a user name known in Authorizer.

4. Choose Publish and Restart from the menu.

## Testing the implementation

To test the implementation:

1. Check that, after starting the Server, messages in the queue table that had not been processed ( Status field is NONE) are now processed successfully, or processed with error.

2. Check that events that are received via a receive-events service (see REST service that receives events asynchronously) are immediately processed, either successfully or with error.