# Executing a Job from a Constraint

The only way to execute a job from a constraint is to call its job method.

*Example*

In this example, the SELECT command feeds two values (selected from columns ColumnA and ColumnB) to the job. The job needs to have a matching input parameter set that expects two values, maybe providing default values in case a value is not passed.

```sql
INVOKE        BatchRunner.JobX WITH
SELECT        ColumnA
,             ColumnB
FROM          Table1
WHERE         ColumnB = ColumnC
AND           ColumnD = 'N'

```

The following conditions apply to constraints that execute jobs:

- The job (and any subjobs of the job) cannot include action tasks.
- The job can only be used in an 'invocative' constraint, that is: only if the INVOKE command is at the topmost level of the constraint SQL.

The following special behavior applies when a job is called from a constraint:

- Any (pre)commit fired from the job will NOT be executed.
- Record-level commits for import/SQL tasks will NOT be executed.
- As of USoft 9.x, a batch job triggered from a constraint runs with background authorization.

It is possible to pass a literal as part of the INVOKE ... SELECT ... statement, for example:

```sql
INVOKE        BatchRunner.JobY WITH 
SELECT        'P1' ColumnA
,             'Yes' "-quiet" 
FROM          Table2 
WHERE         Table2.ColumnE = 1

```

 

 