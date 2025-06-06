# Checking if a job should run at all

Often, a job should only run if a certain test is passed. For example, an import task is to run subject to a condition, such as:

- The user must provide a suitable filename
- The file must not already have been imported
- A stock amount recorded in the database must be down to a certain maximum.

You can include such a test at the beginning of the batch job using various means, for instance:

- By using a table-base external set as input parameter set, and then defining constraints on this table that check the input parameter values.
- By calling the job from a decision.

If you insert a separate test at the beginning of the batch job, you get better performance if the job fails, and you avoid unnecessary messages in status files.

## Using a decision to check if a job should run

To make job execution dependent on the user entering an (appropriate) filename in a dialog field F1, using a decision.

1. Define a new decision D1.

2. Define the following SQL statement for D1:

```sql
SELECT   'JOBNAME, datafile='||:F1
WHERE    :fname IS NOT NULL

```

3. Define Yes Action:

```
job(:1)

```

4. Define No Action:

```
message-error(You must enter a valid filename.)

```

5. Allow the end user to call the decision, for instance, by setting the Action property of a dialog button to:

```
action-decision(D1)

```