---
id: Job_error_handling_Commit_Type_and_Abort_Mode
---

# Job error handling, Commit Type, and Abort Mode

## Error handling in jobs

Jobs run against a Rules Engine. As such, they participate in default Rules Engine error handling. In particular, if a restrictive constraint is violated, the Rules Engine interrupts processing flow. To continue, the user must either manage to **undo** the manipulation that caused the violation, or else she must **rollback**. In the case of undo, remaining manipulations in the transaction can still be committed. In the case of rollback, all the manipulations in the current transaction are lost.

If a constraint is violated during job execution, the user usually does not interact directly with individual records. Often, there are no opportunities for undo, but much depends on context: the interface through which the job call is offered, the overall purpose and the design of the job.

But jobs offer a special form of control, because they are made up of **tasks.** By setting****Commit Type properties, you can determine whether a job commits after each record, or after each task, or only once at the end of the job. By Setting Abort Mode, you can determine what happens if an error is raised during job execution.

Commit Type and Abort Mode are discussed in more detail later in this article.

### Some typical scenarios

To give you a flavour, here are some typical scenarios of organising error handling in jobs. The first is the USoft default.

|**Scenario**|**Error handling**|**Commit Type**|**Abort Mode

(Task level)

**|
|--------|--------|--------|--------|
|Default, general use|<p>Commit after each task in the job</p><p>Stop when error occurs</p><p>Rollback the task that raised the error</p>|<p>Job level: Task</p><p>Task level: Task</p>|Abort Job on Error|
|<p>Large, scheduled batches</p><p>Nightly consolidation</p>|<p>If error occurs, write to log</p><p>Do not abort: continue with next</p>|<p>Job level: Task</p><p>Task level: Record</p>|None    |
|Short job embedded in an interactive GUI|If no error, end without committing|<p>Job level: None</p><p>Task level: None</p>|Abort Job on Error|
|Job is a functional unit of tightly related SQL manipulations|All-or-nothing: everything succeeds or everything fails|<p>Job level: Job</p><p>Task level: None</p>|Abort Job on Error|



## Commit Type settings

Commit Type is a setting at **Job** level and at **Task** level.

At **Job** level, Commit Type has one of the following settings. The default is Task.

|**Setting**|**Means**|
|--------|--------|
|Task    |The commit behavior depends on the Commit Type setting for each individual task.|
|Job     |Only a single commit is performed. This happens at the end of the job. If the job aborts, it is rolled back.|
|None    |No commit is performed.|



The Commit Type setting 'Task' is usually appropriate for jobs.

If you choose None, all the tasks in the job will automatically get Commit Type = None. One use case is a short job that is embedded in an interactive GUI. The user can wait for the job to finish and is present to decide to commit or rollback after the job. Another use case is a job incorporated in a larger structure of embedding jobs that do commit. With Commit Type = None at Job level, if the job was called using runbatch.exe, all manipulations are rolled back at the end of the job. If the job was called from within an application using the ActionStartJob() method or "INVOKE BatchRunner", the transaction stays open. A subsequent commit may or may not follow.

If you want a single commit at the end of the job, set Commit Type = Job at job level. Do not attempt to achieve this effect by choosing 'None' at task level for all but the last task, with the idea that you only want the final task to commit. Using 'None' at task level does not cause the job to be properly rolled back if it aborts.

At **Task** level, Commit Type has one of the following settings. The default is Task.

|**Setting**|**Means**|
|--------|--------|
|Task    |The transaction is committed once at the end of this Task.|
|Record  |The transaction is committed after each individual processed record. This option is only available for Import Tasks and SQL Tasks.|
|None    |No commit is performed.|



## Abort Mode settings

At **Task** level, the Abort Mode setting determines what happens if an error occurs during the task. The default is Abort Job on Error.

|**Setting**|**Means**|
|--------|--------|
|Abort Job on Error|The error is reported. The current task is aborted. Subsequent tasks are not started. If Commit Type = Job at job level, the entire job is rolled back.|
|Abort Task on Error|The error is reported. The current task is aborted. The job continues with subsequent tasks (if any).|
|None    |The error is reported, then the task continues.|



## Fatal and non-fatal errors

Error handling as discussed so far in this article applies only to *non-fatal errors.* For non-fatal errors, error handling depends on Abort On Error settings.

There are also *fatal errors.* If a fatal error occurs, the job is always aborted.

Fatal errors are related to the batch mechanism itself. As an example, consider Import Tasks. They work like this: one row is read from the external file and inserted into the import task set, then all job statements are executed, then the row is deleted from the import task set, and then the process starts over for the next row in the external file.

In this process, a number of batch-specific errors could occur:

- Cannot open or close the import file.
- The import task set table cannot be found in the repository.
- Cannot delete from the import task set.
- Cannot close .suc, .err, .mes, .tim files.
- Cannot write to .mes, .tim, .suc, .err, files.
- The preparation of statements is unsuccessful, for example: input variables cannot be replaced, components cannot be initialized.

## Reading success status from a log file

if you use a log file, the log file report will either end with 'Batch finished normally', or 'Batch stopped with errors'.

This last message applies both to fatal errors (fatal error occurred so job was broken off) and to non-fatal errors (non-fatal error occurred and Abort Mode setting caused the execution to abort).

## Catching success status with -returnstatus

You can catch the success status of a job execution by setting the **-returnstatus** parameter of the Batchrunner call. This way you catch both fatal and non-fatal errors.

If an error occurs and you have set **-returnstatus**, the return value of the call is:

```language-xml
<Result>Error</Result>
```

You can use this if you want to act on the success status of a job execution. For example, you may want to start a following job if the previous job was successful, but do something else if that previous job failed.

*Example*

You can use this statement in a decision SQL. Specify in the Yes Action what must happen if the execution of job J1 was successful. Specify in the No Action what must happen if it failed:

```sql
SELECT   'Success'
WHERE    '<Result>Error</Result>' != 
         BatchRunner.RunJob(
           'J1' as jobname
         , 'true' "-quiet"
         , 'true' "-returnstatus"
         )

```

 