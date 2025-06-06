---
id: ActionStartJob
---

# ActionStartJob()




:::note

This article is about the **ActionStartJob** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **ActionStartJob()**

Executes a USoft Batch job.

*Syntax*
 

```
ActionStartJob(
*job*
,      *parameter*=*value*
,      ...
,      *predefined-parameter*=*value*
,      ...
,      *mode*
)

*mode*  :=  { -quiet | }
```

The required *job* is the name of the USoft Batch job to be run.

Each of the *parameter=value* pairs passes a value to a named element in the External Set that is the Input Parameter Set of *job.* Each *parameter=value* pairs represents a user-defined variable.

Each of the optional *predefined-parameter=value* pairs passes a value as a USoft-defined parameter that configures the job run in some way. Predefined parameters are the same as predefined for Batchrunner calls. For example, a call using predefined 'create_suc' parameter could look like this:

```
ActionStartJob( MY_JOB, create_suc=false, MY_TASK:create_suc=true )
```

Note the syntax differences with Batchrunner calls. The effect of the following INVOKE statement is identical:

```sql
INVOKE BatchRunner.MY_JOB WITH
SELECT     ...
,          'false'    "create_suc"
,          'true'     "MY_TASK:create_suc"
```

If -quiet****is passed as *mode,* the job will execute without displaying any information messages or prompts. Error messages are always displayed: they are not affected by *mode*. If a log file has been specified, all the usual information is logged, irrespective of whether -quiet has been set for *mode*.

*Example*

```
ActionStartJob( MY_JOB, CUSTOMER_ID=23, NAME=JOHNSON, filename=c:\temp\MY_JOB.xml, -quiet ) 
```

 