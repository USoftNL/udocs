# Transaction checks

**Transaction checks** are checks applied to manipulated records when the transaction commits, that is, at a *later* time than the store-record events for these records. This later evaluation time is necessary because, to do the check, any corrections to *other* records must have taken place first.

The transaction commits only if all transaction checks are passed. This is also expressed by saying that transaction checks occur in the pre-commit phase of a commit event.

The following types of table constraint are evaluated as transaction checks:

- Restrictive, non-transitional, multi-record constraints.
- Restrictive, non-transitional, single-record constraints that are deferred (= that have the Deferred = Until Commit setting).

Transaction checks contrast with row checks.

A transaction check may be optimised by using a transaction checklist compiled during store-record events.

Transaction checks are listed in BenchMark profiler output with Reason = CONSTRAINT_TEST.

*Example*

A business rule "A passenger cannot participate at the same time in 2 different tours that overlap on the calendar." is implemented by a restrictive multi-record constraint:

```
SELECT    ''
FROM      passenger p
,         tour t1
,         tour t2
RELATE    p "PARTICIPATES_IN" t1
,         p "PARTICIPATES_IN" t2
WHERE     t2.start_date > t1.start_date 
AND       t2.start_date < t1.end_date 
```

This constraint is evaluated as a transaction check. This happens each time that a PASSENGER is (re)assigned to a tour, and also each time that the startdate or enddate of a TOUR changes.

## Effect of transaction checks

An evaluated transaction check has an effect if the constraint's SELECT query applied to the application data being committed returns 1 or more rows. The effect is that processing is blocked and the constraint message defined for the table constraint is returned. The transaction is not committed.