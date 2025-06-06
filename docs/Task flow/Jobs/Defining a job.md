# Defining a job

A **job** in USoft is essentially a procedure: a series of operations that form a functional whole and that are performed in a predefined sequence each time the job is called.

Callers of a job can be made to pass *input parameters*, much in the same way that other programming environments perform remote procedure calls (RPCs).

A job can pass output parameters back to the caller, but more typically, the output of a job is simply that it manipulates application data on the server. A job manipulates data automatically against the Rules Engine, not directly against the database. In this sense, you can say that jobs *implement business rules*.

Jobs raise errors and produce error messages as is customary in comparable RPC environments. Asynchronous job execution is customarily logged to file in the conventional way.

Once you have defined a job, you must have it *validated.* USoft validates a job essentially by checking that the SQL statements in the job are syntactically correct and refer to existing tables and columns.

### Viewing jobs

You can view jobs that already exist in your repository. Click on the Batch tab of the catalog on the left-hand side of the USoft Definer window.

### Planning a job

First, plan the job you want to create:

- Determine what is the (sequence of) operation(s) that you want the job to perform.
- Think of a good name for the job.
- Think about the information that the job needs to do its work: the input parameters you need to pass when you run the job.
- Finally, think about HOW the job should do what it needs to do.

### Defining input parameters (if you need them)

These step-by-step instructions are just a simple scenario of declaring input parameters of a job. There are many more possibilities, for example, computing parameters on the basis of a SQL statement. For details go to the section on External Sets.

Follow these steps as a simple scenario for declaring input parameters of a job:

1. Choose Define, Sets, External Sets. The External Sets window appears.

2. In the Set Name field, type a meaningful name for the parameter set.

3. To define the first parameter, click in the first row in the Elements tab and enter 1 in the Sequence Number field.

4. In the Element Name field, enter a meaningful name for the parameter (this is the name that will be used in all SQL statements).

5. Click the Data Type lookup button, and choose a data type from the list that appears.

6. In the Data Length field, enter the appropriate length.

7. Repeat Steps 3-6 for each additional parameter, then save work.

### Defining job action

Let's assume that the things you want the job to do can be expressed in SQL statements (using either INSERT, UPDATE, DELETE, or INVOKE). Follow these steps:

1. Double-click the SQL Tasks node in the Batch catalog, or choose Define, Tasks, SQL Tasks from the USoft Definer menu.

The SQL Tasks window or tab opens.

2. Type a name for the SQL Task. Then in the SQL Statements tab, for each SQL statement, make up a Sequence number (indicating in what ORDER the Job will execute the SQLs), write a short Description, then type the SQL statement in the editor pane on the right.

If operations performed by the job are all in the same area, and may be aborted and rolled back as a unit, the easiest way is to put all the SQL in a single SQL Task. If you want to control commit behavior by bundle of SQL statements, create multiple SQL Tasks.

3. If your SQL needs to refer to information from input parameters, define an Input Parameter Set to list parameters and their datatype, then use that parameter list in your SQL as if it were a database table with a single record. To give just one example of how this could look, here is a SQL statement that marks expired Tours in a Travel Agency as Ready For Archiving. It only affects Tours to a destination passed as in input parameter:

```sql
UPDATE    tour t
SET       ready_for_archive = 'Y'
WHERE     destination =
(
          SELECT    p.destination
          FROM      p_tour p
)
AND       t.status = 'Expired'

```

In this example, 'p_tour' is the name of an External Set used as Input Parameter Set.

4. Save work. Click the Check button to have your work validated. Correct SQL statements will get the Correct = Yes flag.

###  

### Setting up a callable job

In these steps you are exposing your SQL to callers in the outside world by placing the SQL in a named job and (if necessary) defining input parameters.

1. Double-click the Jobs node in the Batch catalog, or choose Define, Jobs from the USoft Definer menu.

The Jobs window or tab opens.

2. Type the Job Name and (if used) the Input Parameter Set name.

3. In the Tasks tab, for each Task, type a Task Name, make up a Sequence number (indicating the ORDER in which the Job will execute its Tasks), then type the name of the SQL Task in the SQL column (or use one of the other columns for task types, as appropriate).

The names you have to declare in Steps 2 and 3 are the minimally required names. As long as you have no reason to split or organise the material otherwise, you could have the same name for the Job, the Task, and the SQL Task.

4. The Tasks tab in the Jobs window is also the place where you can determine how the various parts of the job are committed, rolled back and aborted. If necessary, make settings in columns Commit Type and Abort Mode for the individual tasks.

5. Save work. Click the Validate button to have the entire job validated. Correct Jobs will get the Correct = Yes flag.

Your job is now ready to be executed, that is, called by runtime agents.

You can validate jobs for syntactical correctness before running them, if required.

### Validating the job

To validate a job:

- Click the Validate button in the Jobs window, or select the job in the Jobs window, and choose Special, Validate from the menu bar.

All the tasks used in the job are checked, and those tasks that are correct will have their Correct flags set to correct. If all tasks, and the job itself are completely correct, the Correct flag for the job will also be set to correct.

If the SQL statement for a task is not correct, the Correct flag for that task is NOT set to incorrect. The job itself will be set to incorrect. The reason for this is that the task may be incorrect in the context of this particular job, but if it is used in other jobs, the task may be correct in the context of those jobs.

### Delivering the job

When jobs are executed, their definition is read either directly from the repository (the database) or from the .CON file.

- In the case of web applications, users simply connect to a web server. The Rules Service that executes the jobs on behalf of the users reads the job either from a .CON file or directly from repository.

- In the case of C/S application, a .CON file must be generated and distributed to the appropriate end user machines.

Typically, as an application developer you create and test jobs using the repository, but your end users execute jobs read from a .CON file.

Make sure your users have appropriate foreground rights on the tables and columns that the job manipulates. For information about foreground rights, go to the USoft Authorizer help.