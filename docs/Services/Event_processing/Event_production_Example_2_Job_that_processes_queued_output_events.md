---
id: Event_production_Example_2_Job_that_processes_queued_output_events
---

# Event production Example 2: Job that processes queued output events

The following step-by-step instructions are for creating a job that processes output events.

The events have been stored in a queue table as an XML message. The queue table is called OUTPUT_QUEUE_SCHEDTOUR.  

## Creating a job that processes output events

Processing a queue must operate row-by-row. The ID field is used as a handle to identify each queue message to be processed. For debugging purposes, if a processing action fails, it is useful to keep error information in the queue table. This gives you the possibility to see what went wrong with a message and reproduce the problem.

To create a job processing output events:

1. Define a SQL Task that starts collecting errors:

```sql
SELECT    RulesEngine.StartCatchingErrors('Yes')

```

Define this SQL Task as a Job Task in a new job called PROCESS_QUEUE_SCHEDTOUR.

2. Define another SQL Task that processes the next item in the queue:

```sql
INVOKE    http.send WITH
SELECT    'http://travel.com/guideScheduler'
,         queue.xml_message
FROM      output_queue_schedtour queue
WHERE     ID = ( select message_id from IN_PROCESS_MESSAGE )
```

Add this SQL Task as a Job Task to the PROCESS_QUEUE_SCHEDTOUR job.

'http://travel.com/guideScheduler' is the URL where the output event must be sent. Use your own address here.

3. Define another SQL Task that catches any errors encountered during processing the most recent item.

First, define an External Set named IN_PROCESS_MESSAGE that will store any caught errors:

|**Element Name**|**Data Type**|
|--------|--------|
|MESSAGE_ID|NUMBER  |
|ERROR_MSG|NCLOB   |



Define this External Set as being the Input Parameter Set of the PROCESS_QUEUE_SCHEDTOUR job.

Define a SQL Task:

```sql
UPDATE    in_process_message
SET       error_msg = RulesEngine.GetLastCaughtErrors()
```

Add this SQL Task as a Job Task to the PROCESS_QUEUE_SCHEDTOUR job.

4. Define a SQL Task that stops collecting errors:

```sql
SELECT    RulesEngine.StopCatchingErrors()

```

Add this SQL Task as a Job Task to the PROCESS_QUEUE_SCHEDTOUR job.

5. Define a SQL Task that gets the message status:

```sql
UPDATE    output_queue_schedtour
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
    SELECT       message_id 
    FROM         in_process_message
)
```

Add this SQL Task as a Job Task to the PROCESS_QUEUE_SCHEDTOUR job.

6. Set **Commit Type** and **Abort Mode** attributes for the individual Job Tasks as follows:

|**Job Task Executes**|**Commit Type**|**Abort Mode**|
|--------|--------|--------|
|SELECT  RulesEngine.StartCatchingErrors('Yes')|Task    |Abort Job On Error|
|INVOKE  http.send|Task    |Abort Task On Error|
|UPDATE  in_process_message|Task    |Abort Task On Error|
|SELECT  RulesEngine.StopCatchingErrors()|Task    |Abort Job On Error|
|UPDATE  input_queue_reservation|Task    |Abort Job On Error|



7. Validate the job.

## Testing the implementation

1. Start the default client/server application.

2. Add some event messages in the queue table with:

Status: **NONE**

XML Message: (A message in USoft's XML.Export format as applied to the SCHEDTOUR table, for example:)

```language-xml
<Scheduled_Tours documentName="Scheduled Tours">
  <SCHEDTOUR 
     SCHEDTOUR_ID="57" 
     DESTINATION="HOLLAND" 
     TOUR_TYPE="GOLDEN AGE" 
     START_DATE="2018-12-13T12:08:21" 
     RETURN_DATE="2018-12-24T12:08:21" 
     MAX_PART="15"/>
</Scheduled_Tours>

```

3. Open SQL Command from the Tools menu and execute:

```sql
INVOKE     BatchRunner.PROCESS_QUEUE_SCHEDTOUR WITH 
SELECT     1      "MESSAGE_ID"
,         'True'  "-quiet"
```

making sure that 1 is an ID in the OUTPUT_QUEUE_SCHEDTOUR table.