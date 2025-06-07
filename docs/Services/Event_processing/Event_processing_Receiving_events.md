---
id: Event_processing_Receiving_events
---

# Event processing: Receiving events

Receiving events is about processing **input events.** An input event that is in scope for a USoft solution is something that happens in the organisation, is relevant to business conduct, and of which a signal is received by the USoft solution. The signal takes the form of an incoming message.

Input events may come from various sources that use different standards. USoft provides REST and SOAP services as an entry point for receiving input events. It also provides a mechanism of programming Java-based services for receiving input events.

When an input event is received, best practice is to place it in a queue table. With synchronous input processing (where a queue table is not strictly necessary), the input event is processed immediately after. With asynchronous input processing, a separate queue processing service must get a signal that the queue table has new data to be processed.

*Example*

The following step-by-step instructions are for creating a REST service that receives reservation event messages for a Travel Agency model. These messages are handled asynchronously.

To make things easier, the input event data in this example are in USoft's XML.Export format as applied to the Travel Agency's RESERVATION table.

This example assumes that you have defined a custom REST service in Service Definer, with an application and a connection associated with it.

## Creating a queue table

To create a queue table for input events:

1. Open USoft Definer. Define a queue table with the name INPUT_QUEUE_RESERVATION.

2. Add the following columns to this table:

|**Column**|**Domain**|
|--------|--------|
|ID      |Generated sequence number.|
|STATUS  |Allowed values: NONE, DONE, ERROR.Default value: NONE|
|XML_MESSAGE|Character large object type.|
|ERROR_MESSAGE|Character large object type.|



3. Create the table in the database.

## Inserting messages into the queue table

Next, define SQL for the insertion of incoming messages into the queue table:

1. In Services Definer, choose Define, SQL Statements from the menu.

2. Define a SQL Statement with the following values:

|        |        |
|--------|--------|
|Statement name|INSERT_QUEUE_RESERVATION|
|Application name|TRAVEL  |



SQL Statement:

```sql
INSERT INTO input_queue_reservation
(   
      xml_message   
)
VALUES
(  
      :message
)
```

3. Save work. Click the Check button to have your SQL syntax checked. If it is correct, the Correct = Yes flag is set.

## Creating a REST endpoint for receiving events

To create a REST endpoint for receiving events:

1. Open a custom REST Service that is exposed by a Server, or create a new one. For details, read the " Setting up your own REST service " help topic.

2. On the Methods tab of this REST service, define a method with the following values:

|        |        |
|--------|--------|
|Method Name|reservation|
|Relative URI Path|/reservations|
|REST HTTP Verb|POST    |



 

Implementation:



```
 sql(Integer.class, "INSERT_QUEUE_RESERVATION" , new Object[]{ message } );
```

 

3. In the Parameters box of this method, define a parameter with the following values:

|        |        |
|--------|--------|
|Seqno   |1       |
|Name    |message |
|Type    |String  |
|Return Parameter|unchecked|



 

4. On the Sql Statements tab, add the INSERT_QUEUE_RESERVATION statement to the list.



5. On the Connections tab, identify the connection to the Rules Service that you want to use at runtime by adding this connection to the list.

## Sending a signal to the queue processing service

A queue processing service allows you to process data from a table in a first-in-first-out order. At times when there is no remaining data to process, the queue service waits for a signal that new data is available See also Example: Queue service for asynchronous input processing

To send a signal to the queue processing service:

1. In the REST service window, click on the Fields tab.

2. Add a new field with the following values:

|        |        |
|--------|--------|
|Name    |reservation_event|
|Type    |com.usoft.uservice.server.Event|



 

Annotation:



 

```
@com.usoft.uservice.server.EventInject(name="INPUT_QUEUE_RESERVATION")
```

 

The value of the name property in the Annotation must be the name of the queue table.

3. On the Methods tab, in the Implementation field for the method, add following line at the end:

 

```
 reservation_event.signal();
```

 

4. Check the REST service.

## Publishing the solution

To publish the solution:

1. Choose Define, Servers, and retrieve the record of the Server where you expose the service.

2. With input focus on this record, choose Publish, Publish and Restart from the menu.

## Testing the implementation

To test the implementation:

1. Using a REST-specific test tool, send XML POST messages to following URL:

 

```
http://localhost:8090/mycustomservice/reservations
```

 

Messages must follow the restrictions of the XML.Export format on the RESERVATION table

 

```xml
<Reservations>   <RESERVATION SCHEDTOUR_ID="53" MADE_BY="14" DEALT_WITH_BY="1"/></Reservations>

```

 

2. Check in the client/server application that the XML message has been inserted into the INPUT_QUEUE_RESERVATION table.

 