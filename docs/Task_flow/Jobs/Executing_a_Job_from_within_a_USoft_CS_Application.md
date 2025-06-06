---
id: Executing_a_Job_from_within_a_USoft_CS_Application
---

# Executing a Job from within a USoft C/S Application

To execute a job from within a USoft client/server (Windows) application, call the **ActionStartJob()** action. This action may be called from GUI elements such as menu pages, dialog boxes, buttons, and generally from SQL scripts such as defined in USoft Definer decisions.

*Syntax*

```
ActionStartJob(
       job
,      parameter=value, ...
,      mode
)
mode  :=  { -quiet | }

```

The required *job* is the name of the USoft Batch job to be run.

Each of the *parameter=value* pairs passes a value to a named element in the External Set that is the Input Parameter Set of *job.* 

If -**quiet** is passed as *mode,* the job will execute without displaying any information messages or prompts. Error messages are always displayed: they are not affected by *mode*. If a log file has been specified, all the usual information is logged, irrespective of whether -quiet has been set for *mode*.

 