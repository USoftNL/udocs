---
id: Driving_table
---

# Driving table

When constraints are evaluated, the SQL that is sent to the database in most cases is not the literal constraint SQL Statement. The Rules Engine attempts to add WHERE conditions to the SQL statements in which column values for only one record are substituted. This is called *row binding*.

For each constraint, there is only one table for which row binding is attempted. This is called the driving table of the constraint.

You cannot influence what the driving table is. The Rules Engine determines a constraint's driving table when the constraint is parsed, ie., when the developer presses the Check button for the constraint. The driving table is the table "from which" the constraint is evaluated.

In the Constraints window, the Driving Table field shows the driving table.

Some RDBMS vendors or commentators use the term 'driving table' with a different meaning.

## How the driving table is determined

The driving table never depends on what the user does (the initial store-record event). It only depends on how the constraint SQL statement is formulated. For each constraint, the Rules Engine determines the driving table using the following rules:

- If the constraint is an UPDATE constraint, the driving table is the updated table.
- If the constraint is a DELETE constraint, the driving table is the table deleted from.
- If the constraint is an INSERT INTO... VALUES() constraint, the driving table is the table inserted into.
- If the constraint is an INSERT INTO... SELECT ... constraint, the driving table is identified as if only the SELECT clause was executed (see below).
- The following rules apply to restrictive constraints, and are ordered according to their priority:

1. If the constraint is transitional, the driving table is the transition table.

2. If the FROM clause contains a table for which all primary key columns appear in the statement, the driving table is the first-mentioned table in the FROM clause for which all primary key columns appear in the statement.

Usually this is the highest parent table that occurs within the constraint.

3. If no table occurs with all primary key columns mentioned, but the constraint does contain a GROUP BY clause, the driving table is the table that belongs to the first column in the GROUP BY clause.

4. In all other cases, the driving table is the first-mentioned table in the FROM clause.

If the statement contains a RELATE clause, consider this as an equivalent of one or more standard WHERE clauses expressing the same relationship. In other words, the driving table is determined as if the joined primary and foreign key column names appeared explicitly in the statement.

*Example*

A business rule: "The time between the start date and return date of a scheduled tour must equal the preset number of days for the tour." is implemented by a restrictive constraint:

```
SELECT     '' violation
FROM       schedtour st
,          tour t
WHERE      t.destination = st.destination
AND        t.tour_type = st.tour_type
AND        t.num_days <> st.return_date - st.start_date + 1
```

The driving table of this constraint is TOUR, because only the TOUR table has all of its primary key columns mentioned in the statement.

Therefore, in the transaction check statement issued at commit time, row binding is applied to the TOUR table, independently of whether the original manipulation was on TOUR or on SCHEDTOUR:

```
SELECT     ''
FROM       OPS$CP1.SCHEDTOUR t1
WHERE   
(
           :1 = t1.DESTINATION
   AND     :2 = t1.TOUR_TYPE
   AND     TO_NUMBER(:3) <> t1.RETURN_DATE - t1.START_DATE + 1
)
(EUROPE,GRAND TOUR,28)
```

In the SQL statement for the transaction check:

- The TOUR table is not mentioned anymore. This is the consequence of applying row binding to the driving table.

In other words: only one record in the TOUR table matters, so values of this record can be substituted instead of mentioning the whole table.

- The number of days for the tour, 28 days, is also substituted in the constraint test. This value has been retrieved just before this constraint test was issued, when the driving table record was locked.