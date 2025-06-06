---
id: Job_tasks
---

# Job tasks

**Job tasks** are becoming obsolete. They are replaced by SQL tasks calling the Batchrunner component.

A Job Task is a Task defined by naming another Job which, in this capacity, is referred to as a 'subjob'.

### Calling a subjob from a Job Task

You can call a subjob by naming it in the Job column of a Task, thereby creating a Job Task. In this case, parameters passed to the calling job, for example, 'data-directory', are available to the subjob as well. The subjob may or may not, in addition, have its own set of parameters. If it does, both the parameter set of the calling job and the parameter set of the subjob may be accessed. This applies to any level deep of subjobs. It also applies to output parameters (if any) in the same way as to input parameters (if any).

### Calling a subjob from a SQL Task

Alternatively, you can call a subjob by using the following SQL statement in a SQL Task:

```sql
INVOKE  batchrunner.runjob WITH
SELECT  job-name, ...

```

In this case, parameters passed to the calling job are NOT automatically accessible from the subjob. However, you can use a number of techniques tp overcome this limitation. For example, in the subjob you may reference a data-directory parameter known to the calling job by using the BatchRunner.GetJobProperty() method.

When the job being called has the same input and/or output parameter set as the calling job, then the job being called can ONLY access its own input and/or output parameter set. The values of the input and/or output parameter set of the calling job will then remain unaffected.

### Calling a subjob from an Action Task

You can call USoft's script language to execute a job. A number of action calls exist in this area: ActionStartJob(), RunJob()... This technique is occasionally convenient if you need to combine job execution with operations typically scripted in the action language. However, it has limited applicability because it does not offer any way to combine job calls with SQL statements or to reference parameter lists known by calling jobs.

 

 