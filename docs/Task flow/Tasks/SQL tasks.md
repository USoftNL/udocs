# SQL tasks

A **SQL task** is an operation defined by a SQL statement, or a sequence of SQL statements, that are executed in the context of a batch job.

You can use SQL Tasks to:

- Have the Rules Engine add, change or drop data in your USoft application. For this, use INSERT, UPDATE or DELETE statements respectively.
- Call components to execute a variety of tasks. For this, use the USoft INVOKE statement. It allows you to perform method calls in a SQL context.

### Defining a SQL Task

To define a SQL task :

1. Double-click the SQL Tasks node in the Batch catalog, or choose Define, Tasks, SQL Tasks from the menu bar.

The SQL Tasks window or tab appears.

2. In the SQL Task Name field, type a unique name for the SQL task. The name can be up to 30 characters long.

3. For each SQL statement you want the SQL Task to execute, click on the first empty line in the SQL Statements tab, type a Sequence Number indicating in which ORDER the SQL statements are executed, type a short Description, then in the SQL Statements editor pane type your SQL statement, for example:

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

In this example, "p_tour" is an input parameter set of the job that embeds the SQL task.

You can alternatively use the SQL Definer tool to compose your SQL statement more visually. Press the SQL Definer button.

4. Save work, then press the Check button to have your SQL Task validated. If validation is successful, all the Correct flags (for each statement and for the task  as a whole) are set to Yes.

### Active, Disable Rules

- In the Active field, you can check or clear the box to activate or deactivate any statements. This enables you to include statements for debugging purposes, and deactivate them later, if required.
- In the Disable Rules field, you can check or clear the box to specify whether rules (constraints, relationships, mandatory columns, allowed values, and more) need to be disabled or not when executing this SQL statement. This enables you to speed up performance when the data comes from a trusted source and is therefore expected not to contain any errors. Refer to "Disabling Rules" for more information.

### SQL Tasks for Export and Import

SQL Tasks have now become the primary means of determining what a USoft batch job does. In addition to their traditional data manipulation purposes, they are replacing Export Tasks and Import Tasks.

This is because a SQL Task can perform import and export operations by calling the internal XML component, using for example the syntax:

```sql
INVOKE xml.export WITH
SELECT ...

```

```sql
INVOKE xml.import WITH
SELECT ...

```

This technique has many advantage over the traditional Export Tasks and Import Tasks. The XML format is easier to read than text-based file formats such as CSV. The WITH SELECT clause offers better integration between data constructs and job calls.

### SQL Tasks for subjobs

You  can run a subjob from a SQL Task by calling the BATCHRUNNER internal component, using the syntax:

```sql
INVOKE   batchrunner.runjob WITH
SELECT   job-name ...

```

In this sense, SQL Tasks are an alternative for Job Tasks. However, an advantage of Job Tasks is that the structure of nested jobs is more easily queried and traced in a large repository.