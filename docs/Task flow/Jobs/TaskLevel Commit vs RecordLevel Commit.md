# Task-Level Commit vs. Record-Level Commit

For each import task or SQL task, if you do not set the Commit Type attribute to: None, you can choose between record-level commits and task-level commits, by setting the Commit Type attribute of a task to the appropriate value.

Commit Type and Abort Mode settings

Error Handling and Abort Mode Abort Mode and Commit Type Combinations Fatal Errors in Batch Jobs

The commit type you choose has important consequences when an error occurs. Suppose, for example, that your job manipulates 1,000 records, and that record number 800 produces a violation, and is rejected.

## Task-level commit

In the case of task-level commits:

- Record 1-799 are processed
- Record 800 is rejected.
- If the Abort Mode attribute of the task is set to: None, records 801 to 1000 are processed, and a commit is issued, else these records are not processed at all, and a rollback is issued.

## Record-level commit

In the case of record-level commits:

- Record 1 to 799 are committed.
- Record 800 is rejected (written in the error log).
- If the Abort Mode attribute of the task is set to: None, records 801 to 1000 are committed, else these records are not processed at all.

However, there is an important difference in the way import tasks and SQL tasks are processed when you choose record-level commits, as follows.

## SQL tasks

A SQL task has one or more SQL task statements. Each statement manipulates the records addressed in its WHERE clause. Each manipulated record is committed separately. Then, the following statement is performed, and the addressed records are committed individually again (if they do not produce violations). This continues until all statements have been executed.

![](/api/Task%20flow/Jobs/assets/b7a4e939-6d7a-4f65-b3f6-27748155b0d0.jpg)

 

With a record-level commit, each SQL statement runs in a separate transaction. A violation causes a rollback of all manipulations caused by the SQL statement.

With a task-level commit, all SQL statements run in the same transaction. A violation causes a rollback for the whole transaction.

## Import tasks

In the case of import tasks, ALL the import SQL statements are performed on a single record, which is then committed (assuming no violations occur).

![](/api/Task%20flow/Jobs/assets/f1e3ccd0-fbc2-41d6-9bc3-18d30d7ed3cd.jpg)

With a record-level commit, all SQL statements are executed for each record in the driving set. For each record in the driving set, all manipulations run in the same transaction, and a violation causes a rollback for all manipulations on this record.

With a task-level commit, all SQL statements are executed for each record in the driving set. All manipulations for all driving set records run in the same transaction. A violation causes a rollback for all manipulations for all driving set records.