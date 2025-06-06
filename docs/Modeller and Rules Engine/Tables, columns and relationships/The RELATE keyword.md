# The RELATE keyword

The RELATE keyword is a USoft-specific extension to the SQL language. It is used in SQL statements that query multiple table instances to introduce an optional *RELATE clause.* 

A RELATE clause is a USoft-specific alternative to writing conventional join conditions in the WHERE clause.

### RELATE syntax

A RELATE clause must appear immediately after the FROM clause.

The syntax of the RELATE clause is:

```sql
RELATE *join-condition [, join-condition ... ]*

*join-condition  ::=  parent "role" child*
```

where each *join-condition* is based on exactly 1 underlying Relationship definition, and *parent, role* and *child* are taken from that underlying Relationship definition: *parent* is the Parent Object, *child* is the Child Object, and *role* is the Parent Role.

*Role* is optionally surrounded by double quotes. *Role* may contain spaces, in which case the double quotes are mandatory. *Parent* and *child* must appear in the FROM clause. It is customary to identify *parent* and *child* by using table aliases that also appear in the FROM clause:

```sql
SELECT     e.name
,          c.location
FROM       company c, department d, employee e
RELATE     c HAS d
,          d "EMPLOYS" e
WHERE      e.salary_level = 'A3'
```

### Comparing RELATE and WHERE

It is always possible to replace a RELATE clause by conventional join conditions in the WHERE clause, and get exactly the same query result. The result of:

```sql
SELECT       e.name
,            c2.location
FROM         company c1
,            company c2
,            department d
,            employee e
RELATE       c1 "HAS DAUGHTER" c2
,            c2 HAS d
,            d "EMPLOYS" e
WHERE        e.salary_level = 'A3'
AND          c1.id = 'USOFT'
```

is also the result of:

```sql
SELECT       e.name
,            c2.location
FROM         company c1
,            company c2
,            department d
,            employee e
WHERE        c1.id = c2.daughter_of
AND          c2.id = d.company_id
AND          d.id = e.dept_id
AND          e.salary_level = 'A3'
AND          c1.id = 'USOFT'
```

The advantage of using RELATE is that you can change key columns of the Relationship without having to change the SQL statements themselves. More importantly, with RELATE the SQL Objects feature is able to trace the objects that make use of a given Relationship.

RELATE is also more readable than WHERE, because it signposts which WHERE conditions are join conditions and which are not, because it uses meaningful role names, and because it requires only a single join condition even if the relationship key spans multiple columns.

### RELATE in transitional constraints

When using the RELATE keyword in transitional constraints, and primary key or foreign key values are changed run time, the Rules Engine substitutes both the OLD and NEW values of the changed record in this constraint. In specific cases, this default behavior may lead to performance problems, or may result in unexpected violations.

To make the behavior of RELATE in transitional constraints more explicit, you can specify whether you want to execute the constraint for the old values or the new values only, by explicitly adding OLD or NEW to the RELATE construct. These keywords can be used with the transition table:

- If NEW is specified, the join will be over the new values of the key.
- If OLD is specified, the join will be over the old values of the key.
- If neither NEW nor OLD is specified, the join will be over the old AND new values. This is similar to the default behavior of RELATE.

*Example*

```sql
SELECT    ''
FROM      child c
,         parent p
RELATE    p with NEW c
WHERE     p.col = 'Y'
```

This results in only the new foreign key values of CHILD being joined with PARENT. Contrast this with:

```sql
SELECT    ''
FROM      child c
,         parent p
RELATE    p with OLD c
WHERE     p.col = 'Y'
```

This results in only the old foreign key values of CHILD being joined with PARENT.

## Notes

You can only use OLD and NEW on ONE table, the transition table.

You cannot use OLD and NEW in the SQL Definer.

The OLD keyword has different behavior to the OLD() function.