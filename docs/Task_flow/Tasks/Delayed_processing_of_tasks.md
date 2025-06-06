---
id: Delayed_processing_of_tasks
---

# Delayed processing of tasks

When new data are inserted or updated either through online data entry or an import task, you can delay business rules processing such as complicated calculations until a later moment.

This can be achieved by using a status field, or by temporarily deactivating constraints or relationship checks.

Delayed processing means that you separate data entry or data import from business rules processing. Data are processed in two stages.

When you import data, this simplifies error handling and job design. You can concentrate on getting the data into the database and worry about post-processing later.

During online data entry, system workload and concurrency are reduced if you delay operations that are not needed interactively.

## Delayed processing with a status field

To delay processing by using a status field:

1. Define a status field that enables you to make the difference between newly entered or imported data, and existing data.

2. Define an import task that sets the status field to a default value (e.g. I for Imported) for all imported records.

Alternatively, when dealing with online entry, make sure the status field is set to a default for all newly entered data.

3. Define a SQL task that affects only the records with the default value.

There are many possibilities here. You can also define the delayed processing in a productive constraint, perhaps scheduled to a clock time by a join with the T_APP_TIME application timer table.

When dealing with an import task, much depends on whether the delayed processing only concerns batch import data, or whether it also concerns online data entry.

4. Run both the import task and the SQL task one after the other at different times.

## Delayed processing with deactivation

This concerns import tasks or SQL tasks (as opposed to online data entry).

> [!WARNING]
> Constraint and relationship deactivation is contrary to the idea of using a Rules Engine. The basic idea of business rule definition is that business rules apply independently of the information system, and therefore must ALWAYS be checked.

If you deactivate constraints, the system can no longer guarantee that rules are implemented to all data. Therefore only use deactivation exceptionally, as a last resort.

In particular, be careful when deactivating transitional constraints. For non-transitional constraints, you can always look for data corruption later (for instance, by running a BenchMark violation report). For transitional constraints, you cannot, because the OLD column values are not stored.

To delay processing by using constraint or relationship deactivation:

1. Define the import task.

2. At the beginning of the import (or SQL) task, include one or more action tasks that deactivate constraint checks or relationship checks.

3. Run the import (or SQL) task. Deactivated constraints and relationship checks are not fired. They are only deactivated for the duration of the job.

4. Check for data corruption later, and fix manually or by running a SQL task.

##  