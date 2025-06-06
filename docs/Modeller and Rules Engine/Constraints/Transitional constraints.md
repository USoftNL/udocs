# Transitional constraints

A **transitional constraint** or **transitive constraint** is a constraint that, in its definition, refers to both the old values and the new values of one or more of the columns manipulated.

A transitional constraint contains the OLD() function, or (if a table constraint) has transition properties, or both. Transition properties are: Transition Table, Alias, Fire on Insert, Fire on Delete and Fire on Update.

*Example 1 - Transitional domain constraint*

A Travel Agency business rule is that discount percentages cannot be increased by more than 10 (that is, 10 %) at a time. To check this rule, you need to compare the old and new values for the discount percentage:

```
DOMAIN > OLD(DOMAIN) + 10
```

*Example 2 - Transitional single-record constraint*

A Travel Agency business rule is that you can only cancel an already existing reservation. In other words, the cancel date of a reservation may not be entered when the reservation first appears in the system, only in a subsequent phase. You can only check this by referring to the old state of the reservation record. When a record is first inserted, the old value of all primary key columns is NULL. The user is not allowed to enter a cancel_date if the old RES_ID primary key value is NULL:

```
SELECT    '' violation
FROM      reservation
WHERE     cancel_date IS NOT NULL
AND       OLD( res_id ) IS NULL
```

This is a transitional, restrictive single-record constraint.

*Example 3 - Transitional multi-record constraint*

A Travel Agency calculates a group discount percentage based on the number of participants in the reservation. It has a business rule saying that this percentage is not allowed to change at a later time:

```
UPDATE     reservation r
SET        r.group_discount =
(
     SELECT   d.percentage
     FROM     group_discount d
     WHERE    r.num_part BETWEEN d.min_part AND d.max_part
)
WHERE      OLD( r.res_id ) IS NULL
```

This is a transitional, productive multi-record constraint. It involves 2 tables. The table that has the OLD() function is the *transition table.* A constraint can have at most 1 transition table. The constraint is evaluated only when the transition table is manipulated.

## The OLD() function

The OLD() function is a USoft-specific extension of the SQL language that it is not part of the ANSI-SQL standard. You can use the OLD() function to refer to the previous value of a column. This is the value the column had the previous time the record was stored. In constraint SQL, OLD( *column-name* ) refers to the old value of the column, and *column-name* to the new value.

- When a record is inserted, all old column values are taken to be NULL.
- When a record is deleted, all new column values are taken to be NULL.

As an example, consider the following sequence of statements:

```
INSERT INTO person( person_id, first_name, name)
VALUES      ( 1,'JOHN', 'DOE' )
UPDATE      person
SET         name = 'DOUGH'
WHERE       person_id = 1
DELETE FROM person
WHERE       person_id = 1
```

This table shows old and new values when you execute these 3 statements:

|** **   |**Person ID**|**First Name**|**Name**|** **   |
|--------|--------|--------|--------|--------|
|INSERT  |NULL    |NULL    |NULL    |Old Value|
|        |1       |JOHN    |DOE     |New Value|
|UPDATE  |1       |JOHN    |DOE     |Old Value|
|        |1       |JOHN    |DOUGH   |New Value|
|DELETE  |1       |JOHN    |DOUGH   |Old Value|
|        |NULL    |NULL    |NULL    |New Value|



**Old and new column values In INSERT, UPDATE, and DELETE**

In a constraint, you can refer to the old values of the columns of ONE table only. This is called the "transition table".

*Example 1*

To check that a column value does not increase by more than 10 at a time, you can write a domain constraint. In the Do Not Allow That field of the constraint, enter:

```
DOMAIN > OLD(DOMAIN) + 10
```

*Example 2*

To check that a cancel date is initially (= when a reservation is inserted) left empty, it is recommended you set transition properties. But you can also express the rule simply by writing the following constraint SQL:

```
SELECT    ' ' violated
FROM      reservation
WHERE     cancel_date IS NOT NULL
AND       OLD( res_id ) IS NULL
```

where res_id is the primary key column and, therefore, the last WHERE clause implies that the record is being inserted.

Because the OLD() function appears in your statement, the constraint checker automatically sets transition properties when you have the constraint checked. You are free to set these properties to different values.

## Transition properties

By default, constraints are non-transitional and all transition properties have the empty value.

You can turn a constraint into a transitional constraint by setting transition properties, or by using the OLD() function in the constraint SQL statements, or both.

|**Transition Property**|**Value**|**Meaning**|
|--------|--------|--------|
|Transition Table|        |Table for which the constraint is evaluated.|
|Alias   |        |Alias identifying the table occurrence in the SQL statement for which the constraint is evaluated (if the table name is mentioned more than one time in the statement). For Example:Transition Table: TOUR, Alias: T2|
|Fire on Insert|Always  |Constraint is evaluated for each record being inserted into the transition table.|
|        |Never   |Constraint is not evaluated when records are inserted into the transition table.|
|Fire on Delete|Always  |Constraint is evaluated for each record being deleted from the transition table.|
|        |Never   |Constraint is not evaluated when records are deleted from the transition table.|
|Fire on Update|Always  |Constraint is evaluated whenever UPDATE manipulations occur on any of the columns of the transition table.Always: Constraint is evaluated whenever UPDATE manipulations occur on any of the columns of the transition table.|
|        |UsedColumns|Constraint is evaluated whenever UPDATE manipulations occur on one or more of the columns of the transition table appearing in the constraint.|
|        |Never   |Constraint is not evaluated when records are updated in the transition table.|



## Default transition properties

The constraint checker automatically sets transition properties to the following default values if you use the OLD() function in the constraint SQL statement.

You can change these defaults.

**Default Transition Properties**

|**Transition Property**|**Default Value**|
|--------|--------|
|Transition Table|Table of the column(s) contained in the OLD() function|
|Alias   |Alias of this table in your SQL statement (if any)|
|Fire on Insert|Always  |
|Fire on Delete|Always  |
|Fire on Update|UsedColumns|



## Changing default transition properties

After constraint checking, you may want to change default transition properties to improve performance by making sure the constraint is evaluated only when you know this is necessary. For example only on UPDATE and not on INSERT or DELETE.

*Example*

For each day of a scheduled tour, that is, each day between the start_date and return_date in table SCHEDTOUR, there is a record in table DAY containing program details about the tour day. If the SCHEDTOUR dates are changed, you want the DAY dates to change along with them. Your constraint SQL statement is:

```
UPDATE    day d
SET       d.day_date =
(
    SELECT    d.day_date + (st.start_date - OLD( st.start_date ))
    FROM      schedtour st
    WHERE     st.schedtour_id = day.schedtour_id
)
```

The constraint checker produces the default transition properties:

```
Transition Table =    SCHEDTOUR
```

```
Alias =               ST
```

```
Fire On Insert =      Always
```

```
Fire On Delete =      Always
```

```
Fire On Update =      UsedColumns
```

You know that in fact the constraint need not be evaluated on INSERT or DELETE. On INSERT, the outcome of the subquery is NULL so the constraint either has no effect or, if DAY_DATE is a mandatory column, will raise an error. On DELETE, presumably DAY records are deleted by cascading delete from SCHEDTOUR.

Change these 2 transition properties:

```
Fire On Insert =      Never
```

```
Fire On Delete =      Never
```

## Transitional constraints without OLD()

Even if you do not use the OLD() function in constraint SQL, you can still set transition properties. There are two reasons why you might want to do this:

- You have written the constraint in such a way that it must only be evaluated when a particular table is manipulated, or else you get unwanted results. Set the transition table property to restrict constraint evaluation to this table. This only applies to multi-record constraints.
- You know the constraint need not be evaluated on an INSERT, UPDATE or DELETE on the transition table. By reducing the number of times a constraint is evaluated you improve application performance.

> [!NOTE]
> You can also limit constraint handling to INSERTs by using the OLD() function. However, using transition property settings will result in better performance because the Rules Engine is able to discard the constraint (if it need not be evaluated) before it attempts to parse the SQL statement.

*Example*

The following constraint is used to calculate the return date of scheduled tours (table SCHEDTOUR):

```
UPDATE    schedtour st
SET       st.return_date =
(
    SELECT    st.start_date + t.num_days - 1
    FROM      tour t
    WHERE     t.destination = st.destination
    AND       t.tour_type = st.tour_type
)
```

Because the OLD() function has not been used, all transition properties are NULL. You know that in the Travel Agency, the number of days in table TOUR is always set before any start dates are entered into the system, because there is a restrictive constraint that blocks updates to the number of days when corresponding scheduled tours exist.

Restrict constraint evaluation to certain manipulations on SCHEDTOUR only:

```
Transition Table:    SCHEDTOUR
```

```
Alias:               ST
```

```
Fire On Insert:      Always
```

```
Fire On Delete:      Never
```

```
Fire On Update:      UsedColumns
```

## Differences between transitional and non-transitional constraints

Transitional constraints and non-transitional constraints are different in several ways:

- Only transitional constraints can refer to OLD column values.
- Only transitional constraints can be restricted to be evaluated only on INSERT, UPDATE, or DELETE manipulations.
- Transitional multi-record constraints are only evaluated when the transition table is manipulated, not when other tables mentioned in the constraint SQL statements are manipulated.
- Transitional table constraints are always handled as soon as the record is stored (record validation). Handling cannot be delayed until commit, because the Rules Engine only remembers old column values for the current row event. For this reason, transitional constraints can NOT be set to Deferred.
- Existing data cannot be checked against transitional constraints by generating BenchMark constraint violation reports. These only report on non-transitional constraints.

##  