---
id: General_SQL_tuning_tips
---

# General SQL tuning tips

## Minimise the number of subqueries in SQL statements

*Example*

Rewrite an SQL statement like the following:

```
SELECT    ...
FROM      Table1
WHERE     ColA =
(
          SELECT   T2.ColA     
          FROM     Table2 T2
          WHERE ...
)
AND       ColB =
(
          SELECT   T2.ColB 
          FROM     Table2 T2
          WHERE ...
)
```

to:

```
SELECT    ...
FROM      Table1
WHERE     (ColA, ColB) =
(
          SELECT    T2.ColA
          ,         T2.ColB
          FROM      Table2 T2
          WHERE ...
)
```

## Compare join constructs and EXISTS constructs

At RDBMS level, joins are often faster than EXISTS constructs because, if there are no records in the joined table that satisfy the query, with joins this is detected at an early stage. However, EXISTS submitted to the Rules Engine supplies a number of optimization strategies.

If a subquery can be executed separately of the main query (that is, the main table(s) queried are not referenced in the subquery) then use EXISTS rather than a join, because the Rules Engine will then be able to perform the subquery separately and be able to optimize.

If a subquery cannot be executed separately to the main query (that is, the main table(s) queried are referenced in the subquery), then write a join if the tables are not too small and if the statement is processed on the server. Databases can almost always handle join statements faster than subqueries if the number of records is rather large.

## Avoid HAVING if you can use WHERE

If you can, avoid HAVING clauses. With HAVING, all records are fetched and sorted before a selection is made of the records that are really required.

*Example*

Rewrite an SQL statement like the following:

For all persons who have made reservations except the person with id 1, select the total price the person has paid.

```
SELECT    made_by
,         SUM( price )
FROM      reservation r
GROUP BY  made_by
HAVING    made_by != 1
```

to:

```
SELECT    made_by
,         SUM( price )
FROM      reservation r
WHERE     made_by != 1
GROUP BY  made_by
```

## Avoid IN if you can use EXISTS

Use (NOT) EXISTS instead of (NOT) IN whenever you can.

Analyze cases where you only want a Yes/No answer (do records meet a particular condition or not?).

If you can use it, (NOT) EXISTS is always faster than (NOT) IN, because searching stops as soon as a record is (not) found.

(NOT) IN causes records to be fetched and stored temporarily before the main query can be evaluated.

*Example*

Consider the business rule: "A reservation must have a participant with an insurance". Rewrite an SQL statement like the following:

```
SELECT    '' violation
FROM      reservation r
WHERE     r.res_id NOT IN
(
          SELECT    pt.res_id
          FROM      participant pt
          WHERE     pt.res_id = r.res_id
          AND       pt.insurance = 'Y'
)
```

to:

```
SELECT    '' violation
FROM      reservation r
WHERE NOT EXISTS
(
          SELECT    ' '
          FROM      participant pt
          WHERE     pt.res_id = r.res_id
          AND       pt.insurance = 'Y'
)
```

## Avoid grouping (DISTINCT / GROUP BY)

If you do not need group information such as SUM, then avoid grouping.

In a way comparable to GROUP BY... HAVING, the DISTINCT keyword generally causes large sets of records to be cached for subsequent sorting. Avoid DISTINCT where possible. In the example, the RDBMS can move to the next set of records of the schedtour table as soon as the subquery has been satisfied once.

*Example*

Rewrite an SQL statement like the following:

```
SELECT    DISTINCT st.schedtour_id
FROM      schedtour st
,         reservation r
WHERE     s.schedtour_id = r.schedtour_id
```

to:

```
SELECT    st.schedtour_id
FROM      schedtour st
WHERE EXISTS
(
          SELECT    ''
          FROM      reservation r
          WHERE     s.schedtour_id = r.schedtour_id
)
```

The first statement with DISTINCT retrieves all IDs of scheduled tours for which at least one corresponding reservation exists. It does this by first performing a join, and then grouping by the primary key value.

Instead of the DISTINCT keyword, the same query could be formulated as:

```
GROUP BY st.schedtour_id
```

Both the DISTINCT and the GROUP BY version are slow, because grouping must be executed before the result can be delivered.

With the EXISTS construct, the RDBMS only needs to scan the SCHEDTOUR table once. For each scheduled tour record, it can decide to add it to the result list as soon as a corresponding child record is found, and then move to the next scheduled tour record. Scheduled tour records do not need to be buffered, since no grouping needs to take place.

## Group by parent columns

Where possible, use GROUP BY with columns of a parent table instead of a child table.

In the example, you cannot avoid using HAVING. The RDBMS needs to join the tables before it can decide which scheduled tours have a total price to be paid of more than 1000. The result is the same whether you group by the primary key of the parent table or the foreign key of the child table. As a rule, always group by the primary key of the parent table. This is faster both at Rules Engine and RDBMS levels. Of course, this also holds for statements with subqueries.

*Example*

In general, use SQL statements like the following:

For each scheduled tour, if the total price to be paid is more than 1000, select the total price to be paid for all reservations.

```
SELECT      st.schedtour_id
,           SUM(r.price)
FROM        schedtour st
,           reservation r
WHERE       st.schedtour_id=r.schedtour_id
GROUP BY    st.schedtour_id
HAVING      SUM( r.price ) >= 1000
```

## Use table aliases

Whenever SQL statements involve more than one table, use table aliases, and prefix all columns by them. This way the statement is parsed faster.

*Example*

In general, use SQL statements like the following:

```
SELECT    T1.column
FROM      Table1 T1
,         Table2 T2
WHERE     T1.column = T2.column
```

## Write SQL that uses indexes

If possible, write SQL statements in a way that indexes can be used.

When an index has been defined on one or more columns, there are a couple of situations where the index will not be used. For example, an index will not be used when:

- A column value is contained in a function call.
- A column value is contained in a calculation.
- Column values are concatenated.
- Column values are excluded (NOT, \<> , != ).
- Column values are not the first within an index.

If an index has been defined on more than one column, values are indexed as concatenations of the values in the individual columns. Concatenation is in the order in which the columns are mentioned in the CREATE INDEX command.

This means that any WHERE clause that implies a search for the entire indexed string, or for the first column(s) of the index ("front-end searches"), will make the index available.

Any WHERE clause that implies a search for the last part of the indexed string but not the front part, will NOT make the index available.

Incidentally, this is also why LIKE 'A%' constructs make an index available whereas LIKE '%A' constructs ("back-end search") do not.

*Examples*

Rewrite a WHERE clause like:

```
WHERE    SUBSTR(name,1,3) = 'AUS'
```

to:

```
WHERE    name LIKE 'AUS%'
```

Rewrite a WHERE clause like:

```
WHERE    price * 2.21026 < 1000
```

to:

```
WHERE    price < 1000/2.21026
```

Rewrite a WHERE clause like:

```
WHERE    ColA || ColB = 'ABC'
```

to:

```
WHERE  ColA='A'  AND  ColB='BC'
```

Rewrite a WHERE clause like:

```
WHERE    amount != 0
```

to:

```
WHERE    amount > 0
```