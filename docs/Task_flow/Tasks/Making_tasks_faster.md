---
id: Making_tasks_faster
---

# Making tasks faster

## Making SQL tasks faster

Poor SQL task performance may be due to excessive rollback segment creation. This happens when large data volumes are processed and the SQL task has a TASK level commit.

Techniques to improve SQL task performance include:

- Deactivating certain constraints and relational checks.
- Under certain conditions, use set oriented manipulations. Refer to the Rules Engine Help topic: "Set Oriented Manipulations".
- Disabling Rules.

## Making export tasks faster

Poor export task performance is often due to the use of child sets.

To improve performance of an export task using a child set, consider replacing the child set by a different strategy.

For instance, it may be acceptable to export the child data in a separate external file, using a separate export task.

## Making import tasks faster

When import task performance is poor, this is usually because routines are repeated over and over for each import record. You may be able to improve import performance by separately executing routines that are not record-bound, and by removing routines that are not absolutely necessary.

These routines include:

- Computing values such as totals, which are re-adjusted for each import record but could also be calculated in one go AFTER import.
- Row-bound processing that can be performed IN the database at a later time.
- Creation of unnecessary status files.
- SQL processing that requires missing indexes.

Furthermore, you can deactivate certain constraints and relational checks.

To improve import task performance:

1. Consider computing values as a separate routine outside the import task, if possible.

Perform the calculation as a separate routine, using a SQL task or productive constraint.

2. Consider delaying part of the import task until later. Perform a straight import, marking records as needing to be post-processed.

Perform post-processing as a separate routine on the marked records, using a SQL task or productive constraint.

3. If you do not require import status files, disable their creation.

4. Do NOT attempt to cut down on database SQL processing as this is usually not where the performance bottleneck is.

- However, DO consider if any of these statements are slow because they require indexes that were not created. If so, create additional indexes, for instance, on much-used foreign key values.
- Consider disabling rules.

## Disabling rules

For each SQL statement executed in an Import Task or SQL Task, you can set Disable Rules = Yes. The result is that:

- In terms of functionality, *USoft rule checks**are bypassed*, ie., they are not performed. USoft rule checks include constraint checks, relationship checks, mandatory column checks, domain checks such as checks for allowed values, and subtype group checks.
- In terms of performance, execution is likely to be faster.

> [!CAUTION]
> By setting Disable Rules = Yes, you risk introducing data that violates rules defined in USoft Definer. Consider setting Disable Rules = Yes ONLY if you have a reason to improve performance and you know that the data has the required quality, for example because it comes from a trusted source and is received using a tried-and-tested method. Remember that you can use USoft Benchmark reports to detect constraint violations, relationship violations, column violations and domain violations after-the-fact.

Technically, with Disable Rules = No (the default), the USoft Rules Engine performs checks that you defined in USoft Definer. This potentially involves sending individual SQL statements to the RDBMS for each individual record that is handled. By contrast, a SQL statement with Disable Rules = Yes is sent directly to the RDBMS to be processed as-is. With Disable Rules = Yes, the RDBMS will process the statement in a set-oriented fashion, which can be very much faster than record-by-record handling.

If the statement is of a USoft-specific type, or contains USoft-specific elements, then it cannot be processed by the RDBMS as-is. For this reason, if you set Disable Rules = Yes for such a statement, this setting is silently ignored. This applies to the following cases:

- The table manipulated by the statement is a temporary table.

- The statement refers to a component table.

- The statement contains the INVOKE keyword, or function call syntax that calls an RDMI component.

- The statement contains the RECORDS keyword.
- The statement contains one of the functions ELAPSEDTRANSACTIONTIME(), ELAPSEDQUERYTRANSACTIONTIME(), RDBMSTYPE(), USERGROUP().

If a statement has Disable Rules = Yes, USoft does not attempt to generate a sequence number. In practice, this means that you never want to set Disable Rules = Yes for INSERT statements that rely on sequence number generation; the effect will be undesirable.

 