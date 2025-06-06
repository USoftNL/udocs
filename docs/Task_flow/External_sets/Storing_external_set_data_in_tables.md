---
id: Storing_external_set_data_in_tables
---

# Storing external set data in tables

When running a job, external set data needs to be stored temporarily. This applies to external data to be imported, input parameter values to be used in a job, and output parameter values that are set in a job.

If you just define a job and its tasks straightforwardly, and do NOT use any user table or table-based external set, then a temporary table is created in memory or in the database when running the job. This table is removed again when it runs out of scope. As long as there is not more than one record in the external set, the corresponding table is stored in memory. The table is created in the database:

- If a second record is inserted.
- If the table is used within an outer join.
- If the table is used in a group function, or in a GROUP BY or HAVING clause.

You can also choose to store the external set data in a table explicitly. There are two main reasons why to consider this:

1. To speed up performance: you can define indexes on a table to make searches and therefore import processes run faster.

In general, if you mainly want to speed up performance, use a user-defined table for import tasks.

2. To benefit from several advantages of the USoft Rules Engine: You can validate whether values are correct by using domains, allowed values, mandatory columns, constraints, and all other Rules Engine checks, when checking the correctness of input and output parameters.

If you mainly want to benefit from the USoft Rules Engine, use a table-based external set for storing external set data temporarily.

You can use user-defined tables for the non-driving sets in an import task, and for input and output parameter sets.

You can use table-based external sets for all sets in an import task, and for input and output parameter sets. Table-based sets are connected to a Definer table, and have fixed elements with a length. An external set used as table always starts empty: If you use a table-based external set, all existing records are deleted at the beginning of the task.

In the case of parameter sets, each column of this table corresponds to one parameter that is passed to or returned by the job.

If a job is run twice at the same time, these two jobs use the same table.

If a table-based set is used as a driving set for an import task then the records from that table are deleted at the beginning of the import task and at the end of the import task.

In the case of non-driving sets (table-based or user table) the records from the table are deleted only at the beginning of the task, not at the end.