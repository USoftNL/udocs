# Job parameters and variables

### Job input parameters

In practice, in most cases, a job needs to be passed one or more input parameters when it is called. For input parameters, define an Input Parameter Set:

1. Define an external set and its external set elements. Define an external set element for each input parameter you want to pass.

2. Define the job . Refer to external set elements as if the external set were a SQL table, and the element a column in that table.

3. Set the job's Input Parameter Set attribute to the name of the external set.

When the job is executed, a table is used to represent the external set. This table is by default a temporary structure held in memory, but you can specify Use User Table for the Input Parameter Set if you want to use a database table instead. Each column of the table corresponds to an element in the input parameter set.

In a finished job intended for calls by end users, you usually want to perform a number of validity checks on values passed as input parameters. If one of the checks fails, the main action of the job must not be executed.

Implement these checks by defining a SQL task at the beginning of the job that issues an error message if a check fails. For details, go to Messages in SQL Tasks and Import Tasks.

### Job local variables

During job execution, you may want to use local variables. This way, you can have one job task store a value in a local variable that is picked up by a later job task.

These variables are 'local' in the sense that they cease to exist when job execution finishes.

To create local variables, add elements to the job's Input Parameter Set. Thus, Input Parameter Sets contain both values that are passed as an input parameter when the job is called, and local variables stored by the job itself during execution. Of course, it is also possible to have the caller pass an initial value as input parameter, and then have the job reset that value during job execution.

In complex jobs, it is good practice to add a comment in the External Set window that specifies which external set elements are immutable input parameters passed by the caller, which are local variables set by the job itself, and which are input parameters that may by modified by the job.

### Job output parameters

Jobs can optionally return output parameters. You define output parameters in an external set:

1. Define an external set and its external set elements.

2. Define the job .

3. Set the job's Output Parameter Set attribute to the name of the external set.

When the job is executed, a table is used to represent the external set. This table is by default a temporary structure held in memory, but you can specify Use User Table for the Output Parameter Set if you want to use a database table instead. Each column of the table corresponds to an element in the output parameter set returned by the job.

When a job is started, this output parameter set is empty. The output set can be used as if it were a database table throughout the job.

The contents of the output parameter set are only returned if the batch job is started by a job method call or a call to RunJob(). If the job is started from a Batch Runner item in USoft Binder or from the ActionStartJob() method, no output is returned.