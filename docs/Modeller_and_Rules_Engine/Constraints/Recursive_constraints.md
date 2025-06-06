---
id: Recursive_constraints
---

# Recursive constraints

**Recursive constraints** are productive constraints that cause themselves to be evaluated again, thereby creating a "loop". Recursive constraints are sometimes, but not always, an indication of poor conceptual definition.

For example, the following constraint will call itself as many times as the Max Constraint Depth deployment configuration setting in the Authorizer (default 50) allows and will then result in an error message:

```
UPDATE    TableA
SET       ColumnA = ColumnA + 1
WHERE     ColumnB = 'ABC'
```

A successful recursive constraint must therefore contain some WHERE clause acting as a "stop condition". This stop condition restricts further recursion of the constraint:

```
UPDATE    TableA
SET       ColumnA = ColumnA + 1
WHERE     ColumnB = 'ABC'
AND       Column A <= 80
```

Of course, if this rule has no further consequences it is much better to write:

```
UPDATE    TableA
SET       ColumnA = 80
WHERE     ColumnB = 'ABC'
```

Constraint recursivity not only occurs when a single constraint causes the evaluation of itself, but also when two or more constraints cause the evaluation of each other.

## Example

One way to control a recursive constraint is to use transition properties.

In the Travel Agency, suppose that whenever a tour is scheduled, a record should be inserted in the DAY table for each of the dates within the scheduled tour.

The DAY table is a child table of the scheduled tour table and allows you to record program details of each day (agenda, activities, etc.) for the scheduled tour.

When the user inserts a new scheduled tour record, a non-recursive constraint inserts the first day record for that scheduled tour in the DAY table:

```
INSERT INTO day(
            schedtour_id
,           day
)
SELECT      s.schedtour_id
,           s.start_date
FROM        schedtour s

Transition Table:    SCHEDTOUR
Fire On Insert:      Always
Fire On Delete:      Never
Fire on Update:      Never
```

This is a productive constraint resulting in a manipulation (another INSERT) on the DAY table. The constraint is made transitional and performs a correction only once on an insert in the SCHEDTOUR table.

There is a second, recursive constraint on the DAY table, which inserts the next day within the same scheduled tour, and loops until the return date of the scheduled tour. The last line is the stop condition:

```
INSERT INTO   day(
              schedtour_id
,             day
)
SELECT        d1.schedtour_id
,             d1.day + 1
FROM          schedtour s
,             day d1
WHERE         s.schedtour_id = d1.schedtour_id
AND           d1.day < s.return_date
```

This second, recursive constraint is set in motion by the first, non-recursive constraint.

Here is an example of a typical event:

1. The user INSERTs a new scheduled tour with start date: 1-MAY-2000, and return date: 4-MAY-2000.

2. The first, transitional constraint INSERTs a record (1-MAY-2000) in the DAY table.

3. Because of this manipulation, the recursive constraint is evaluated and INSERTs a second record (2-MAY-2000) in the DAY table.

4. Because of this manipulation, the recursive constraint is evaluated again and INSERTs a third record (3-MAY-2000) in the DAY table.

5. This latest inserted day (3-MAY-2000) is still before the return date, so the recursive constraint is evaluated still one more time, and INSERTs a fourth record (4-MAY-2000) in the DAY table.

6. The stop condition now restricts further recursion of the constraint.

The advantage of this mechanism is that you can control recursivity by making it independent of unpredictable user actions. In the example, you can control the effect of the second constraint by making sure that only the first constraint can cause the evaluation of the second constraint. For instance, suppose user groups have SELECT and UPDATE but no foreground INSERT rights on the DAY table. Then the only way the system can create new DAY records is through the two constraints in the example.