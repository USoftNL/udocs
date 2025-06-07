---
id: Event_handling_Example_1_Job_that_processes_queued_input_events
---

# Event handling Example 1: Job that processes queued input events

The following step-by-step instructions are for creating a job that processes queued input events. In the example, these are reservation events for a Travel Agency model.

The event data has already been stored in a queue table as an XML message. To make things easier, the event data in this example is in USoft's XML.Export format as applied to the Travel Agency's RESERVATION table.

The queue table is called INPUT_QUEUE_RESERVATION. To define this queue table, see Example: REST service that receives events asynchronously.

## Creating a job that processes queued events

Processing a queue is a customised activity. It must operate row-by-row. The ID field is used as a handle to identify each queue message to be processed. For debugging purposes, when a processing action fails, it is useful to keep error information in the queue table. This gives you the possibility to see what went wrong with a message and reproduce the problem.  To create a job that processes queued events:

1. Define a SQL Task that starts collecting errors by executing:

```sql
SELECT   RulesEngine.StartCatchingErrors('Yes')

```

Define this SQL Task as a Job Task in a new job called PROCESS_QUEUE_RESERVATION.

2. Define another SQL Task that processes the next item in the queue by executing:

```sql
INVOKE  xml.import WITH
SELECT  fm.xml_message           "xmldocument"
FROM    in_process_message       in_params
,       input_queue_reservation  fm
WHERE   fm.id = in_params.message_id
```

Add this SQL Task as a Job Task to the PROCESS_QUEUE_RESERVATION job.

3. Define another SQL Task that catches any errors encountered when the most recent item was processed.

Do this by first creating an External Set named IN_PROCESS_MESSAGE that will store any caught errors:

|**Element Name**|**Data Type**|
|--------|--------|
|MESSAGE_ID|NUMBER  |
|ERROR_MSG|NCLOB   |



Define this External Set as being the Input Parameter Set of the PROCESS_QUEUE_RESERVATION job. Define a new SQL Task that executes:

```sql
UPDATE    in_process_message
SET       error_msg = RulesEngine.GetLastCaughtErrors()
```

Add this SQL Task as a Job Task to the PROCESS_QUEUE_RESERVATION job.

4. Define a SQL Task that stops collecting errors by executing:

```sql
SELECT   RulesEngine.StopCatchingErrors()

```

Add this SQL Task as a Job Task to the PROCESS_QUEUE_RESERVATION job.

5. Define a SQL Task that gets the message status:

```sql
UPDATE     input_queue_reservation
SET 
(   
     status
,    error_message
) = 
(
      SELECT     DECODE( error_msg, null, 'DONE', 'ERROR' )
      ,          error_msg
      FROM       in_process_message
)
WHERE id = 
(
      SELECT     message_id 
      FROM       in_process_message
)
```

Add this SQL Task as a Job Task to the PROCESS_QUEUE_RESERVATION job.

6. Set **Commit Type** and **Abort Mode** attributes for the individual Job Tasks as follows:

|**Job Task Executes**|**Commit Type**|**Abort Mode**|
|--------|--------|--------|
|SELECT  RulesEngine.StartCatchingErrors('Yes')|Task    |Abort Job On Error|
|INVOKE  xml.import|Task    |Abort Task On Error|
|UPDATE  in_process_message|Task    |Abort Task On Error|
|SELECT  RulesEngine.StopCatchingErrors()|Task    |Abort Job On Error|
|UPDATE  input_queue_reservation|Task    |Abort Job On Error|



7. Validate the job.

## Testing the implementation

1. Start the default client/server application.

2. Add a small number of event messages in the queue table with:

Status: **NONE**

XML Message: (A message in USoft's XML.Export format as applied to the RESERVATION table, for example:)

```xml
<Reservations>
   <RESERVATION SCHEDTOUR_ID="53" MADE_BY="14" DEALT_WITH_BY="1"/>
</Reservations>

```

3. Open SQL Command from the Tools menu and execute:

```sql
INVOKE  BatchRunner.PROCESS_QUEUE_RESERVATION WITH 
SELECT  1     "MESSAGE_ID"
,      'True' "-quiet"
```

making sure that 1 is an ID in the INPUT_QUEUE_RESERVATION table.