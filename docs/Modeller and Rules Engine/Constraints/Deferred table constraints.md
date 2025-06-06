# Deferred table constraints

By default, a USoft Rules Engine determines internally when a constraint is activated. As a developer, you can concentrate on defining the constraint in terms of functionality. The Rules Engine guarantees that all the constraints you define will be activated at runtime in an optimal way, so that application data meet the quality standards defined by your constraints. This includes the *order in time* in which your constraints will be considered.

For details on how the Rules Engine processes constraints, go to Constraint evaluation order.

By way of exception, you can *defer* the action of a table constraint to the time just before or just after the transaction's commit. Do this by setting the Deferred constraint attribute:

|**Deferred, options**|**Description**|
|--------|--------|
|Do Not Defer (the default)|The constraint action is active at the time of data manipulation.|
|Until Commit|The constraint action is deferred until just *before* the transaction is committed.|
|Post Commit|The constraint action is deferred until just *after* the transaction is committed, ie., it executes as the first step of the following transaction.|



## Deferring constraints is an advanced feature

Deferring constraints is an advanced feature. As a developer, you should not normally be concerned about constraint deferral. Keep the default Deferred = "Do Not Defer" unless you have special reasons.

## Which constraints may be deferred?

You can defer **productive, non-transitional** table constraints to either **Until Commit** or **Post Commit**. This includes INVOKE constraints: for example, you can invoke a constraint that executes a call to the XML.IMPORT method.

You can defer **restrictive, non-transitional, single-record** table constraints to **Until Commit**. You cannot defer restrictive constraints to Post Commit.

You cannot defer any transitional constraints.

## Why defer?

You may want to defer a **productive** constraint for **performance reasons.** If your constraint (re)calculates a total and you only need this total to be available at the *end* of a transaction, deferring the constraint Until Commit will cause it to execute only once instead of being recalculated multiple times as a knock-on effect of each individual change in subtotals.

You may want to defer a **restrictive** constraint for **functional reasons.** If you want to check that data satisfies some restrictive check AFTER all cascade-to-other corrections have been executed, but the check itself involves only looking at data in the record being processed, then by default USoft will evaluate the check as a row check (ie., at record-store time). What you want is evaluation as a transaction check (ie., at commit-time). You can force USoft to evaluate at commit-time by setting Deferred = Until Commit.

A reason to set Deferred = Post Commit is to achieve *transaction chaining.* For a discussion, go to the Chained corrections help topic.

 