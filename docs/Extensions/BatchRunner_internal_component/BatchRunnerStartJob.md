---
id: BatchRunnerStartJob
---

# BatchRunner.StartJob




:::note

This article is about the **StartJob** method of the [BatchRunner internal component](/docs/Extensions/BatchRunner_internal_component).

:::

## **BatchRunner.StartJob**


:::danger

The StartJob method cannot be called from a constraint.

:::

Runs a specific job. Allows you to pass not only input parameter values, but also input parameter **names** at the time of the call.

Returns 0 if successful and 1 if unsuccessful.

*Syntax*

```sql
INVOKE BatchRunner.StartJob WITH
SELECT 
       '*job-name*'   JobName
,      '*name=value*' JobParameter
,      ...

```

The required *job-name* names the job to be run. You can have multiple optional JobParameter items. In each of these items, *name* names a job input parameter**and *value* passes it an input value*.*

*Example*

To start the EXPORT_TOURS batch job with job input parameters DESTINATION and YEAR, execute the following statement: 

```sql
INVOKE BatchRunner.StartJob WITH
SELECT 
       'EXPORT_TOURS'          JobName
,      'DESTINATION=AUSTRALIA' JobParameter
,      'YEAR=2003'             JobParameter
```

You can pass:

```sql
      '-quiet'             JobParameter
```

to run the job without displaying any information messages or prompts. Error messages are still displayed. If a log file has been specified, all the usual information is logged, irrespective of whether or not -quiet has been specified.