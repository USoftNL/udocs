---
id: Event_production_Example_1_Model_and_rules_for_creating_output_events
---

# Event production Example 1: Model and rules for creating output events

The following step-by-step instructions are for creating a data model and rules that will store output events for a Travel Agency model. The example is part of an asynchronous output processing pattern.

In this example, the Travel Agency has a policy that a guide is added to a scheduled tour only if the number of participants is at least 20% of the maximum number of participants for a scheduled tour. Travel Agency also works with partners for guide resources, so scheduling a guide is an external system. An event must be sent when a guide is needed for a scheduled tour.

To make things easier, the output event data in this example are in USoft's XML.Export format as applied to the SCHEDTOUR table.

## Creating a queue table for storing output events

To create a queue table in USoft Definer:

1. Open USoft Definer. Define a queue table with the name OUTPUT_QUEUE_SCHEDTOUR.

2. Add the following columns to this table:

|**Column**|**Domain**|
|--------|--------|
|ID      |Generated sequence number.|
|STATUS  |Allowed values: NONE, DONE, ERROR.Default value: NONE|
|XML_MESSAGE|Character large object type.|
|ERROR_MESSAGE|Character large object type.|



3. Create the table in the database.

> [!NOTE]
> You can also use copy on another queue table and paste to create a new queue table.

## Defining constraints for creating output events

Define data structure and constraints that will create appropriate output events.

1. To the SCHEDTOUR table, add a GUIDE_REQUEST column with Y and N as possible values and with N as default value.

2. Create a constraint that will update the GUIDE_REQUEST column:

```sql
UPDATE    schedtour
SET       guide_request = 'Y'
WHERE     guide_request = 'N'
AND       guide is null
AND       ( 0.2 * max_part ) < 
(
     SELECT    count(*)
     FROM      participant 
     ,         reservation
     RELATE    schedtour "FOR WHICH ARE MADE" reservation
     ,         reservation "IS MADE FOR" participant
)
```

3. For the new constraint, set Deferred = Post Commit. This has the advantage that if creating/sending an output event fails, the processing before will still be saved.

4. Create a constraint that will add a record to the output queue:

```sql
INSERT INTO output_queue_schedtour ( xml_message )
INVOKE     xml.export WITH
SELECT     schedtour_id, destination, tour_type, start_date, return_date, max_part
FROM       schedtour
WHERE      guide_request = 'Y'
```