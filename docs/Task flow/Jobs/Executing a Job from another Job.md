# Executing a Job from another Job

You can execute a job from another job:

- By calling it from a job task.
- By calling it from a SQL task using **INVOKE BatchRunner**.

## Calling a job from a job task

You can call a job from a job task. Retrieve the calling job in the Jobs window. On the Tasks tab, in the Job column, name the job to be called.

If the called job uses the same Input Parameter Set as the calling job, or if the called job does not have an Input Parameter Set of its own, it shares the Input Parameter Set of its caller.

If the called job has a named Input Parameter Set that is different of its caller's Input Parameter Set, both the Input Parameter Sets are available to the called job.

## Calling a job from a SQL task

You can call a job from a SQL task using the **INVOKE BatchRunner** construct. The SQL statement in the SQL task typically has a SELECT subclause that selects input parameters from the calling job's input parameter set. This applies to the last 2 parameters in this example:

```sql
INVOKE BatchRunner.RENAME_CONCEPT
WITH
SELECT  a.agency       AGENCY
,       p.rename_from  RENAME_FROM
,       p.rename_to    TO RENAME_TO
,       'True'         "-quiet"
FROM   agency a
,       my_parameter_set p
WHERE   a.id = 24

```