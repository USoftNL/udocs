---
id: Lock_and_commit_management
---

# Lock and commit management

To minimize potential lock conflicts, the Rules Engine tries to have records locked for a minimum of time. For restrictive checks where locking is necessary, the main strategy is that records are locked no sooner than at commit time, and that commit follows as soon as possible after the lock. The situations in which the Rules Engine locks records are:

- Because of user manipulation:

When the user deletes a record or changes a field value in a record, the record is immediately locked.

- At record validation time:

When cascading or nullifying update or delete rules take place, the child records are locked just after the parent record has been updated or deleted.

When productive multi-record constraints apply, before the constraint manipulates a record, this record will be locked.

- At commit time:

Just before the final foreign key checks and relationship cardinality checks are executed, the parent records are locked. If the record cannot be locked, then the integrity of the foreign key value is no longer guaranteed.

Just before the final constraint tests take place for restrictive multi-record constraints, the driving table records of these constraints are locked. For details, see "Driving Tables".

## Smart locking

Before sending a lock-record request to the database, the Rules Engine checks that the record has not already been locked in the current transaction. If it has, the lock-record request will not be sent to the database.

If a lock has been obtained in the database, the locked record is stored in the local cache and is locally available for subsequent checks.

## Lock Parent on Sequence

If you have unique values generated for a key column that is itself the key, then USoft makes use of RDBMS sequence. This guarantees that each new generated value is unique.
But if values are generated for a column that is part of a key spanning multiple columns, then USoft internally issues a SQL statement with MAX( id ) + 1 to determine each new generated value. This applies notably when you have a child table with a primary key spanning (a) the foreign key referring to the parent, and (b) a generated ID to distinguish the children:

Parent Table: COUNTRY, Primary Key: (COUNTRY)

|**COUNTRY**|
|--------|
|France  |
|Germany |



##  

Child Table: COUNTRY_BRANCH, Primary Key: (COUNTRY, BRANCH_ID)

|**COUNTRY**|**BRANCH_ID**|**LOCATION**|
|--------|--------|--------|
|France  |1       |Paris   |
|Germany |1       |Berlin  |
|Germany |2       |Frankfurt|



 

In this situation, 2 concurrent sessions manipulating the child table can run into problems if the same MAX( id ) + 1 value is generated for each session. This leads to a unique key violation.
You can prevent this by setting the LOCK_PARENT_ON_SEQUENCE Rules Engine Parameter to True. By default, this parameter is set to False.

## Commit management

A given sequence of tasks (queries or data manipulations) can be performed as a single long transaction and then committed, or it can be performed with many commits in between.

Related data manipulations should be in the same transaction so they can be committed or rolled back as a logical whole. As a developer, you determine for each part of the application whether it is the application design or the user that decides what is a logical whole.

The main trade-off when deciding whether to commit often or not is between a few lock conflicts if many commits take place versus the possibility of rollback for longer transactions.

In an application where minimization of lock conflicts is crucial and the difference between Store Record and commit is not, you may want to set the application property Auto-commit to Yes (default No). This causes the application to automatically call DataCommit() immediately after each Store Record.