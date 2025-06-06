---
id: SQL_operators
---

# SQL operators




:::note

This article is about **SQL operators** as part of the [SQL syntax](/docs/Modeller_and_Rules_Engine/SQL_syntax) that USoft supports.

:::

## **SQL operators**

6 comparison operators are specific to the SQL language: LIKE, IN, EXISTS, BETWEEN, IS NULL, and IS NOT NULL.

## LIKE

The LIKE operator is used to compare a column expression with a string literal pattern in which two symbols can play the role of a wildcard:

|        |        |        |
|--------|--------|--------|
|`%`     |percentage|Any string of characters|
|`_`     |underscore|Any single character|



An optional ESCAPE clause, placed after the condition, makes it possible to match occurrrences of percentage symbols and underscores. See Example 3.

*Example 1*

This example returns all customers whose name starts with a letter 'A':

```sql
SELECT     name
FROM       customer
WHERE      name LIKE 'A%'
```

*Example 2*

This example returns all samples whose code does NOT have an 'A' in first position and a 'C' in third position:

```sql
SELECT     code
FROM       sample
WHERE      code NOT LIKE 'A_C%'
```

*Example 3*

This example returns all samples whose code starts with an 'A', followed by a literal '_' (that is, an underscore character) in second position:

```sql
SELECT     code
FROM       sample
WHERE      code LIKE 'A#_%' ESCAPE '#'
```

## IN

The IN operator is used in 2 ways.

First, it is used to compare a column expression to a set of enumerated literals. The literals are surrounded by parentheses and separated by commas. The comparison evaluates to True if the column value matches any one of the enumerated values:

```sql
SELECT        t.tour_id, t.destination, t.tour_type
FROM          tour t
WHERE         t.destination IN ( 'FRANCE', 'SERBIA', 'ITALY' )
```

Second, it is used to compare a column expression to the outcome of an independent subquery. The comparison evaluates to True if the column value matches one of the values returned by the subquery:

```sql
SELECT        t.tour_id, t.destination, t.tour_type
FROM          tour t
WHERE         t.destination NOT IN
(
       SELECT    p.destination
       FROM      tour_programme p
       WHERE     p.tour_type = 'CITY TRIP'
)
```

## EXISTS

The EXISTS operator evaluates a subquery to a boolean value. The outcome is True if the subquery returns at least 1 row, and False if it returns 0 rows. The outcome is used to evaluate the embedding statement.

The subquery is allowed to be an independent subquery but is more typically a joined subquery, as in this example, which returns tours with a destination qualified as a CITY_TRIP:

```sql
SELECT        t.tour_id, t.destination, t.tour_type
FROM          tour t
WHERE EXISTS
(
       SELECT    ''
       FROM      destination d
       RELATE    d "DESTINATION_OF" t
       WHERE     d.dest_type = 'CITY TRIP'
)
```

Good practice is to have the empty string as the SELECT list of the subquery (as shown), since the outcome of EXISTS is unrelated to anything selected by the subquery.

When applying NOT to EXISTS, it is customary to omit parentheses between NOT and EXISTS. This example returns tours that do NOT have a destination qualified as a CITY_TRIP:

```sql
SELECT        t.tour_id, t.destination, t.tour_type
FROM          tour t
WHERE NOT EXISTS
(
       SELECT    ''
       FROM      destination d
       RELATE    d "DESTINATION_OF" t
       WHERE     d.dest_type = 'CITY TRIP'
)
```

## BETWEEN … AND

The BETWEEN operator is used to select data that are in a range between a lower and an upper boundary:

```sql
SELECT        code, sample_id
FROM          sample
WHERE         code BETWEEN 6000 AND 7000
```

This is a shorthand for:

```sql
SELECT        code, sample_id
FROM          sample
WHERE         code >= 6000
AND           code <= 7000
```

## IS NULL, IS NOT NULL

The IS NULL operator is used to detect whether a column value is the NULL value.

This example retrieves all tours for which a guide has not been specified:

```sql
SELECT        tour_id, destination, tour_type
FROM          tour
WHERE         guide IS NULL
```

If the GUIDE column has Mandatory = Yes, this query will select an empty set of records.

When applying NOT to IS NULL, NOT is placed between IS and NULL. This example returns tours for which a guide HAS been specified:

```sql
SELECT        tour_id, destination, tour_type
FROM          tour
WHERE         guide IS NOT NULL
```

 

 