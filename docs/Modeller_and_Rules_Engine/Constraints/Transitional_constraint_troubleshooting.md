---
id: Transitional_constraint_troubleshooting
---

# Transitional constraint troubleshooting

### OLD() value during constraint processing

Each row event has its own OLD and NEW values for each of the columns in the record.

When column values are changed by constraints, the NEW value is obviously changed but the OLD value remains the same until the record is stored. This is true even if several productive rules change NEW values within the record.

You therefore need to consider whether a constraint is handled before or after the record is stored. In general, the following constraint types are evaluated before the record is stored, as part of the current row event:

- Row Checks:

Restrictive constraints that only involve values within the current row, like for example restrictive single-record constraints.

- Update on Self constraints:

Productive constraints that UPDATE values of the current row (other than subtype indicators), if the constraint is not Deferred.

*Example 1*

Consider the following three constraints:

Constraint 1, non-transitional:

```
UPDATE   table
SET      column = 2
WHERE    column = 1
```

Constraint 2, non-transitional:

```
UPDATE   table
SET      column = 3
WHERE    column = 2
```

Constraint 3, transitional:

```
UPDATE   table
SET      column = 10
WHERE    OLD( column ) = 2
```

The following table shows what happens if the user changes the column value from 0 to 1. Only Constraint 1 and Constraint 2 are evaluated. The result, the column value **3,** is stored. Constraint 3 will never be evaluated because the outcode of **OLD(column)** never evaluates to **2** at any stage in the process.

|** **   |***column***|** **   |
|--------|--------|--------|
|User change|0       |Old Value|
|        |1       |New Value|
|Constraint 1|0       |Old Value|
|        |2       |New Value|
|Constraint 2|0       |Old Value|
|        |3       |New Value|



*Example 2*

Consider the following constraint:

```
UPDATE    table
SET       column = column + 1
```

```
Transition Table:  <table>
```

```
Fire On Insert:    Always
```

```
Fire On Delete:    Never
```

```
Fire On Update:    Never
```

Because this is a transitional constraint, the Rules Engine translates this constraint into:

```
UPDATE    table
SET       column = column + 1
WHERE     primary-key-column IS NOT NULL
AND       OLD( primary-key-column ) IS NULL
```

If the user inserts a record and enters column value 1, the OLD primary key column value is NULL. This causes evaluation of the constraint and changes the column value to 2.

After the column value has changed to 2, the OLD column value is still NULL and the manipulation is still considered as an INSERT. Therefore the constraint is evaluated again, despite the Fire On Update setting.

The constraint will be evaluated as many times as the Max Constraint Depth deployment configuration setting in the Authorizer (default 50) allows and will then result in an error message.

To prevent this problem:

- If you WANT to make the constraint recursive, add a stop condition like:

```
WHERE <column> < 10
```

- If you want to set the column to a default value when the user inserts a record, simply define a default value.

As soon as the record is stored, further productive rules lead to new row events with their own series of OLD values. Such row events can be in different tables, but also in the same table as the initial row event. They may even involve records that were also manipulated as part of the initial row event. In this case, the OLD column values for the cascading row event may be different from the OLD values for the initial row event.

Changing the value of a subtype indicator leads to the creation of a new row event.

### Current row counting

Transitional constraints are bound to the current record when they are handled:

In the constraint SQL statements of transitional constraints, for all occurrences of the transition table, only the current row event is considered.

Do not make a constraint transitional if a group function such as COUNT() is used in the SQL statement of the constraint. In that case, only the current row event would be counted.

*Example*

In the Travel Agency application, suppose you wanted to add an amount column to the TOUR table, in which is stored the current total number of scheduled tours for that tour. The correct amount must be calculated by a productive constraint whenever a scheduled tour is added or removed. The constraint reads:

```
UPDATE    tour t
SET       t.amount =
(
          SELECT    COUNT (st.schedtour_id )
          FROM      schedtour st
          WHERE     st.destination = t.destination
          AND       st.tour_type=t.tour_type
)
```

Suppose this constraint is made transitional by setting transition properties:

```
Transition Table:  SCHEDTOUR
```

```
Fire on Insert:    Always
```

```
Fire on Delete:    Always
```

```
Fire on Update:    Never
```

In this case, the result would be the same as if the constraint read:

```
UPDATE    tour t
SET       t.amount =
(
          SELECT    COUNT( st.schedtour_id )
          FROM      schedtour st
          WHERE     st.destination = t.destination
          AND       st.tour_type = t.tour_type)
          AND      
          ( 
                    OLD( st.schedtour_id ) IS NULL
              OR    st.schedtour_id IS NULL
          )
)
```

Now, only the scheduled tour records within the current row event are counted, which will always lead to a value for amount of 0 or 1.

To prevent this problem, simply do not make the constraint transitional.

If, for whatever reason, you still want to write a transitional constraint, you may change the constraint into:

```
UPDATE    tour t
SET       t.amount =
(
          SELECT      COUNT( st.schedtour_id )
          FROM        schedtour st
          WHERE       st.destination = t.destination
          AND         st.tour_type = t.tour_type
)
WHERE EXISTS
(
          SELECT     'added or removed scheduled tour'
          FROM       schedtour st2
          WHERE      /* added scheduled tour */
          (
                     st2.destination = t.destination
              AND    st2.tour_type = t.tour_type
          )
          OR         /* removed scheduled tour */
          (
                     OLD( st2.destination ) = t.destination
              AND    OLD(st2.tour_type) = t.tour_type
          )
)
```

Set the transition properties to:

```
Transition Table: SCHEDTOUR
```

```
Alias:            st2
```

```
Fire On Insert:   Always
```

```
Fire On Delete:   Always
```

```
Fire On Update:   Never
```


:::note

In the Alias value here,you only want the constraint to be evaluated if the SCHEDTOUR table with alias st2 is manipulated.

:::


:::tip

If you change the Fire On Update attribute to Used Columns, this constraint is also evaluated when the foreign key of a scheduled tour is changed from one tour to another.

:::

### Unwanted new-value substitution

Within transitional constraints, all SQL occurrences of transition table columns are substituted by the current OLD and NEW column values of the current row event.

This is important whenever there are multiple occurrences of the transition table in a constraint SQL statement.

*Example*

Suppose you want to delete a parent record if the last child record is deleted. The constraint you have written reads:

```
DELETE FROM    parent p
WHERE NOT EXISTS
(
       SELECT    'child record'
       FROM      child c
       WHERE     c.foreignkey = p.primarykey
)
AND EXISTS
(
       SELECT    'old child record'
       FROM      child c
       WHERE     OLD( c.foreignkey ) = p.primarykey
)
```

and has transition properties:

```
Transition Table:  CHILD
```

```
Alias:             C
```

```
Fire on Insert:    Never
```

```
Fire on Delete:    Always
```

```
Fire on Update:    Never
```

This is a productive, transitional constraint on a child table. If the last record of the child table is deleted, this constraint should make sure the parent record is automatically deleted as well. Because of the OLD() function in the last clause, the child table is automatically the Transition Table. The constraint is only evaluated when a child record is deleted, because of the transition properties.

Whenever a child record is deleted, the c.foreignkey column name becomes NULL, because that is the NEW value in a Delete. This makes the outcome of this subquery uncertain and dependent on your database conventions regarding treatment of NULL values. This is not what you want.

The only place where you want to bind a current value to the statement is in the second mention of the transition table (the OLD(c.foreignkey) value).

The solution is to use different table aliases so you can specify this:

```
DELETE FROM    parent p
WHERE NOT EXISTS
(
        SELECT    'child record'
        FROM      child c1
        WHERE     c1.foreignkey = p.primarykey
)
AND EXISTS
(
        SELECT   'old child record'
        FROM     child c2
        WHERE    OLD( c2.foreignkey ) = p.primarykey
)
```

and set transition properties:

```
Transition Table:  CHILD
```

```
Alias:             C2
```

```
Fire on Insert:    Never
```

```
Fire on Delete:    Always
```

```
Fire on Update:    Never
```

###  