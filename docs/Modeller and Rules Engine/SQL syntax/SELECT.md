# SELECT



> [!NOTE]
> This article is about **SELECT** statements as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.

## **SELECT**

Retrieves data from the RDBMS or from a component.

*Syntax*

```sql
SELECT         DISTINCT *column-list*
FROM           { *table-name [table-alias]* | *join-construct* }
*[where-clause][group-by-clause][order-by-clause]*

*column-list*         ::=  *column-expression* [, ... ]

*where-clause*        ::=  WHERE condition
*group-by-clause*     ::=  GROUP BY column-list [ HAVING condition ]
*order-by-clause*     ::=  ORDER BY *column-list*
                           { ASC | ASCENDING | DESC | DESCENDING | }

*condition*           ::= * condition* [ { AND | OR } condition … }
```

The required SELECT clause contains a list of 1 or more comma-separated output expressions. Instead of this list, you can have an asterisk (*) as column wildcard meaning 'all the columns'. For the optional DISTINCT keyword, see GROUP BY below.

A FROM clause is normally present. In USoft, you can omit the FROM clause if you don't need to retrieve stored data from the RDBMS, as when you are only interested in the outcome of a SQL function:

```sql
SELECT    AVG ( 178, 211 )
```

If present, the FROM clause must refer to at least 1 table. For each *table* instance, you can optionally supply an *alias*. If you need to retrieve data from multiple tables or table instances, a *join-construct* of some sort is required. Depending on the case, an alternative for join-construct may be to write a subquery (next section).

Using WHERE conditions, you can restrict your query result. Rows that do not satisfy the WHERE condition(s) are removed from the result.

If you use GROUP BY followed by a single column name or expression, then if the query result has multiple rows for which this column or expression evaluates to the same value, then this value is returned only once. In other words, rows with identical values are grouped. If GROUP BY is followed by multiple column names or expressions, the rows are grouped by unique combinations of those colums. The result of the following query can only contain rows that have a unique combination of destination and tour_type:

```sql
SELECT    destination, tour_type
FROM      tour
GROUP BY  destination, tour_type
```

even though the primary key of this table could be the combination (destination, tour_type, year), which would allow multiple rows with the same (destination, tour_type) combination to be present in the database. Adding DISTINCT after the SELECT keyword is a shortcut notation which has the same effect as adding a GROUP BY clause with the same columns or expressions as in the SELECT list. Except for convenience in ad-hoc querying, when DISTINCT is faster to type, USoft recommends using GROUP BY instead of DISTINCT.

If you add GROUP BY, the SELECT clause is only allowed to contain (a) expressions that also appear in the GROUP BY clause, (b) group functions, (c) literals. This example shows, for each combination of destination and tour_type, how many times this combination occurred over the years:

```sql
SELECT    destination, tour_type, COUNT(*) total
FROM      tour
GROUP BY  destination, tour_type
```

If you add GROUP BY, you can optionally add a HAVING clause. This causes a row grouped as a result of GROUP BY to be removed from the query result if that row does not satisfy the condition(s) following HAVING. The HAVING list is only allows to contain (just like the SELECT list) (a) expressions that also appear in the GROUP BY clause, (b) group functions, (c) literals. This example shows the same as the previous example but only for combinations of destination and tour_type that occurred at least 10 times in the year 2000 or later:

```sql
SELECT    destination, tour_type, COUNT(*) total
FROM      tour
WHERE     year >= 2000
GROUP BY  destination, tour_type
HAVING    COUNT(*) >= 10
```

If you add ORDER BY, the query result is sorted by the column or expression that follows the ORDER BY keyword. If there are multiple columns or expressions, the result is ordered by the combination, sorted first by the first-mentioned column. Sorting is in ascending order by default, and also if you add the optional ASC or ASCENDING keyword. Sorting is in descending order if you add the DESC or DESCENDING keyword. If a GROUP BY clause is present, you may only ORDER BY columns or expressions that also appear in the GROUP BY list.

## Subqueries

A subquery is a parenthesised SELECT statement in a condition. A subquery takes the place of the element appearing after the comparison operator. The SQL statement that contains the condition is the embedding statement. This may be a higher-level SELECT, but also an INSERT, UPDATE or DELETE statement.

*Syntax*

```sql
*embedding-statement*
(
     SELECT ...
)
```

Use subqueries to retrieve additional data needed for the execution of your higher-level statement. You can nest subqueries any level deep.

An *independent subquery* does not reference any element in the higher-level query. When the statement executes, the subquery is first executed independently. In the example, the subquery yields a constant integer. Each of the data groups retrieved by the higher-level query is added to the result set if that integer is lower than the number of items in the group:

```sql
SELECT    c.name
,         COUNT(*)
FROM      customer c
,         asset a
RELATE    c "HAS" a
GROUP BY  c.name
HAVING    COUNT(*) >
(
    SELECT   b.value
    FROM     boundary b
    WHERE    b.name = 'max_no_of_assets'
)
```

A *joined* or *correlated subquery* refers to a table instance in the higher-level SQL statement, joining each record of the subquery to each corresponding record in the higher-level query, much in the same way as joining takes place when you use a join-construct (next section). In the example, the subquery yields a variable integer: a different integer for each customer and his number of assets:

```sql
SELECT    c.name
,         COUNT(*)
FROM      customer c
,         asset a
RELATE    c "HAS" a
GROUP BY  c.name
HAVING    COUNT(*) >
(
    SELECT   b.value
    FROM     boundary b
    WHERE    b.name = 'max_no_of_assets'
    AND      b.country = c.country_of_residence
)
```

## Function call syntax

You can use SELECT to call RDMI components. This uses *function call syntax* and is an alternative to using the INVOKE statement:

```sql
SELECT *component.method*(
*value(s)*
)
```

In function call syntax, *component.method* is an argument of the SELECT keyword. A FROM keyword does not appear.

Function call syntax may also be used in other places than in the SELECT output list, for example:

```sql
SELECT   ...
FROM     ...
WHERE    column = *component.method*( *value(s)* )
```

## CONNECT BY, START WITH

The following construct can be used in USoft Developer in most contexts:

```sql
SELECT      ...
FROM        ...
CONNECT BY  ...
START WITH  …
```

but not:

- In constraints.
- In the SQL statement of a logical view.
- When selecting from component tables.

On Oracle, a START WITH clause can precede the CONNECT BY clause.