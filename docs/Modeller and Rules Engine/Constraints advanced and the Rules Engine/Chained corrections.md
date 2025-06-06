# Chained corrections

**Chained corrections** are SQL manipulations that you want to postpone to the next transaction *(chained transaction)* but that are a direct result of manipulations that have occurred in the current transaction. This applies if the postponed manipulations consist of passing data on to third-party software, perhaps a mail server for outgoing e-mails, and you want to make sure this happens only if your entire current transaction including all transaction checks completes successfully.

Chained corrections are performed at commit time, after the current transaction has been committed. This is also expressed by saying that chained corrections occur in the post-commit phase of a commit event.

A productive constraint is evaluated as a chained correction if it is deferred with the setting Deferred = Post Commit.

*Example*

You have the following constraint that puts a request XML message in some technical table accessed by third-party software in a way you do not control. Inserting XML into this table results in messages being sent by that software:

```
INSERT INTO output_queue_schedtour ( xml_message )
INVOKE     xml.export WITH
SELECT     schedtour_id, destination, tour_type, start_date, return_date, max_part
FROM       schedtour
WHERE      guide_request = 'Y'
```

You want to control that:

- Outward messages are not sent unless all the constraints in the application are processed successfully, and

- If for some reason the creating/sending of outward messages fails, all the processing before will still be saved.

Create a second constraint that creates the precondition

```
guide_request = 'Y'

```

and set this second constraint to Deferred = Post Commit:

```
UPDATE    schedtour
SET       guide_request = 'Y'
WHERE     guide_request = 'N'
AND       guide is null
AND       ( 0.2 * max_part ) < 
(
     SELECT    count(*)
     FROM      participant 
     ,         reservation
     RELATE    schedtour "FOR WHICH ARE MADE" reservation
     ,         reservation "IS MADE FOR" participant
)
```

You typically want this constraint to be the *only* way that the precondition can be reached: the column should have Input Allowed = No to prevent user interaction, and other constraints than the 2 shown above should leave the **guide_request** flag alone.

## Effect of chained corrections

If a chained correction is found to have an effect, that is, if your current transaction commits successfully and applying the SQL manipulation to the data after commit affects 1 or more rows, then the SQL manipulation is executed as if it were the first user action in the new transaction.