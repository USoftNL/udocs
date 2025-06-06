# Row checks

**Row checks** are checks applied to the record being processed. To do a row check, values from multiple fields within the record may be needed, but no values from *other* records are needed.

Row checks are performed at store-record time, after any update-on-self corrections are applied to the record values, but before the row is actually stored. This is also expressed by saying that row checks occur in the pre-store phase of a store-record event.

The following types of table constraint are evaluated as row checks:

- Restrictive, non-transitional, single-record constraints that are not deferred (= that have the default Deferred = Do Not Defer setting). (Example 1.)
- Restrictive transitional constraints that have the table in which the record is stored as their Transition Table. (Example 2.)

Row checks contrast with transaction checks.

Row checks are listed in BenchMark profiler output with Reason = ROW_CONSTRAINT.

*Example 1*

Members of staff cannot be coaches of themselves. A table constraint with the following Constraint SQL checks this:

```
SELECT    ' ' violation
FROM      staff
WHERE     person_id = coached_by
```

If this constraint is not deferred, this is evaluated as a row check each time a store-record event occurs for table STAFF.

*Example 2*

The business rule: "The number of days between start date and return date of a scheduled tour must equal the number of days set for the tour" is implemented by the following restrictive transitional constraint:

```
SELECT    '' violation
FROM      tour t
,         schedtour st
WHERE     t.destination = st.destination
AND       t.tour_type=st.tour_type
AND       st.return_date - st.start_date + 1 != t.num_days
```

with transition settings:

```
Transition Table:    SCHEDTOUR
```

```
Fire On Insert:      Always
```

```
Fire On Delete:      Never
```

```
Fire On Update:      Used Columns
```

This is evaluated as a row check each time a store-record event occurs for table SCHEDTOUR. For store-record events on the TOUR table, it will not be evaluated.

## Effect of row checks

An evaluated row check is found to have an effect if the column values in the record being checked meet the conditions expressed in the table constraint SQL: if, with these column values, the SELECT statement has a query result of 1 or more rows. In this case, processing is blocked and the constraint message defined for the table constraint is returned. The attempted manipulation of the column value(s) does not take place. If the store-record event was raised by the user interactively attempting to leave a record, then this navigation is blocked and she remains in the record.