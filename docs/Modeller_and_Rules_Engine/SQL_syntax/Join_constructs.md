---
id: Join_constructs
---

# Join constructs



> [!NOTE]
> This article is about **Join constructs** as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.

## **Join constructs**

USoft supports a variety of join constructs to express SQL SELECT statements that refer to more than 1 table instance.

In all code examples in this article, *table* represents a required **table name** for which you can optionally supply an **alias**. Aliases are recommended - all the examples use aliases. Each occurrence of table represents not a table as such, but a **table instance**: within a single join statement, you can have multiple table occurrences for the same table, resulting in multiple table instances of that table. **Table name** in USoft may refer to a database table, a Logical View, or a component table.

## Inner join: standard syntax

*Syntax*

```sql
*SELECT-clause*
FROM           *table  alias,              table  alias*
[,              *table  alias* ...]
[ *join-condition* ... ]

*join-condition*   ::=  { 
    RELATE *  parent-table parent-role child-table* | 
    WHERE *   column* = *column*
}
```

An inner join is a SQL statement that has more than 1 table instance in the FROM clause. Table instances are separated by commas. You can join any number of table instances.

If one table has m rows and the other n rows, joining them WITHOUT any join-condition results in m * n rows in the query result (Cartesian product). Typically, such a query result is reduced in size by adding one or more join-conditions that restrict the query result to combinations of related data.

To express join conditions, you can alternatively use RELATE or WHERE. USoft recommends RELATE:

- RELATE clauses connect the tables via a USoft relationship declared in USoft Definer. The join is made by comparing values of the columns declared for the relationship. The relationship as a whole is identified by the combination of parent, role and child: parent is the Parent Object, role is the Parent Role, child is the Child Object of the relationship. RELATE is a USoft-specific extension to the SQL language. RELATE is equivalent to a WHERE condition with an equality operator.
- WHERE clauses that typically test the equality of foreign key values in the child table to primary key values in the parent table. Other comparison operators ( >, <, >=, <=, <>, !=) are also supported.

*Example 1: RELATE*

The role identifier is conventionally surrounded by double quotes. These double quotes are required only when role contains a space.

```sql
SELECT         c.name
,              o.order_date
,              sum( i.amount ) total
FROM           customer c
,              order o
,              orderitem i
RELATE         c "PLACES" o
,              o "INCLUDES" i
GROUP BY       c.name
,              o.order_date
```

*Example 2: WHERE*

```sql
SELECT         c.name
,              o.order_date
,              sum( i.amount ) total
FROM           customer c
,              order o
,              orderitem i
WHERE          o.customer_name = c.name
AND            i.order_id = o.id
GROUP BY       c.name
,              o.order_date
```

## Inner join: [INNER] JOIN syntax

*Syntax*

```
SELECT          *output-list*
FROM            *join-clause*

*join-clause*     ::=  *operand*  [INNER] JOIN *operand* [ON *join-condition*]

*operand*         ::=  { *table* [*alias*] | ( *join-clause* ) }

*join-condition*  ::=  *column comparison-operator column* [*logical-operator join-condition* ...]

```

In this syntax, the JOIN keyword is required and the INNER keyword is optional.

The required top‑level *join-clause* links 2 data sets (the *operands* of the join), where a data set is either a *table*, with an optional *alias*, or the outcome of a sub‑level *join‑clause*. A sub‑level *join‑clause* is allowed to be any join construct that uses the JOIN keyword - it could be another inner join, but also an outer join. Sub‑level join‑clauses are surrounded by parentheses in much the same way as subqueries.

It is customary that an ON sub-clause restricts the query result to combinations of related data.

If present, the ON keyword introduces a *join-condition* that typically uses the **=** comparison operator to test the equality of foreign key values in the child table to primary key values in the parent table. Other comparison operators ( >, <, >=, <=, \<>, !=) are also supported. Within the ON clause, multiple conditions may be combined by using logical operators, eg., ON ... AND ... . .

The ON sub-clause is optional. If you omit the ON sub-clause, if one data set has **m** rows and the other **n** rows, the query result has **m * n** rows (Cartesian product).

*Example*

```sql
SELECT         c.name
,              o.order_date
,              sum( i.amount ) total
FROM           
( customer c JOIN order o ON o.customer_name = c.name ) JOIN orderitem i ON i.order_id = o.id
GROUP BY       c.name
,              o.order_date
```

## Outer join: LEFT/RIGHT [OUTER] JOIN syntax

*Syntax*

```
SELECT          *output-list*
FROM            *join-clause*

*join-clause*     ::=  *operand* { LEFT | RIGHT } [OUTER] JOIN *operand* ON *join-condition*

*operand*         ::=  { *table* [*alias*] | ( *join-clause* ) }

*join-condition*  ::=  *column comparison-operator column* [*logical-operator join-condition* ...]

```

In this syntax, either LEFT JOIN or RIGHT JOIN is required. The word OUTER can optionally precede JOIN. The ON clause is required.

The required top-level *join‑clause* links 2 data-sets (the *operands* of the join), where a data set is either a *table*, with an optional *alias*, or the outcome of a sub‑level *join‑clause*. A sub‑level *join‑clause* is allowed to be any join construct that uses the JOIN keyword - it could be another inner join, but also an outer join. Sub‑level join‑clauses are surrounded by parentheses in much the same way as subqueries.

The effect of outer join is that, in addition to returning all record combinations of the first data set and the second data set that satisfy the ON clause, **the query result will contain a extra record for one of the data sets:**

- With **LEFT** [OUTER] JOIN, a result record is "added" for each element of the data set mentioned **before** the JOIN keyword for which there is no join with an element from the other data set.
- With **RIGHT** [OUTER] JOIN, a result record is "added" for each element of the data set mentioned **after** the JOIN keyword for which there is no join with an element from the other data set.

Extra output records that are added tot the result in this way will have NULL values for any output columns of the other data set.

The required ON clause typically uses the equality operator, as in the Example below. Other comparison operators ( >, <, >=, <=, \<>, !=) are also supported. Within the ON clause, multiple conditions may be combined by using logical operators, eg., ON ... AND ... . .

*Example 1*

In this example, the effect of the LEFT keyword is that the query result will contain not only each combination of customer and order, but also a record for each customer who has NOT placed an order. The extra records (if any) have the NULL value in the o.id output column.

```sql
SELECT         c.name
,              o.id
FROM           customer c
LEFT JOIN      order o    ON o.customer_name = c.name
```

*Example 2*

In this example, the effect of the RIGHT keyword is that the query result will contain not only each combination of customer and order, but also a record for each order that is NOT associated with a customer. The extra records (if any) have the NULL value in the c.name output column.

```sql
SELECT         c.name
,              o.id
FROM           customer c
RIGHT JOIN     order o    ON o.customer_name = c.name
```

## Outer join: (+) syntax

*Syntax*

To simplify, this syntax summary concentrates on the outer join itself. In practice, an outer join may be combined with other joins.

```sql
*SELECT-clause*
FROM           *table-1  [alias]*
,              *table-2  [alias]*
WHERE          {  
                  table-1.column(+)  operator  table-2.column
               |  table-1.column     operator  table-2.column(+)
               }
```

The only difference with the standard join syntax with WHERE clauses, shown at the beginning of this help topic, is that one of the column names in the WHERE clause now has an added

```
(+)
```

modifier following it. This (+) modifier may be placed, alternatively, at the first-mentioned column or at the second-mentioned column. The connecting operator is typically the equality operator ( = ). Other comparison operators ( >, <, >=, <=, \<>, != ) are also supported.

The effect of adding the (+) modifier to table‑1.column is that, in addition to record combinations of table-1 and table-2 that satisfy the WHERE clause, a dummy NULL record is added to the table‑1 data set.

Elements from the table‑2 data set that do not satisfy the WHERE condition are deemed to match this added dummy record. The net effect is that the query result will contain a record for each record in table‑2 that does NOT satisfy the WHERE condition.

If you have multiple join conditions, which is typically necessary if you have a primary key spanning multiple columns, then the (+) operator must be placed "on the same side" in each of the conditions. Otherwise, it's an error ("A circular outer join has been detected").

*Example*

In this example, the effect of the added (+) modifier is that the query result will contain not only each combination of customer and order, but also a record for each customer who has NOT placed any order. In such a record, the order ID is NULL.

```sql
SELECT         c.name
,              o.id
FROM           customer c
,              order o
WHERE          c.name = o.customer_name(+)
```

## Outer join: *= syntax

> [!CAUTION]
> This syntax is **deprecated** and supported for backward compatibility only. This syntax is associated with SQL for ODBC.

*Syntax*

To simplify, this syntax summary concentrates on the outer join itself. In practice, an outer join may be combined with other joins.

```sql
*SELECT-clause*
FROM           *table-1  [alias]*
,              *table-2  [alias]*
WHERE          {  
*table-1.column*  *=  *table-2.column*
               |  *table-1.column*  =*  *table-2.column*
               }
```

This is an outer join because of the **asterisk (*)** added either before or after the equality symbol in the join condition(s).

> [!WARNING]
>  The following special ODBC join operator for "full outer outer join" is not supported by USoft:
 

The effect of adding an asterisk in this way is that, in addition to record combinations of table-1 and table-2 that satisfy the equality operator, in either table‑1 or table‑2, the query result will contain an extra item for each record that does NOT satisfy the equality operator. The effect is as follows:

|        |        |
|--------|--------|
|***=**  |The extra items (if any) are "added" to the table instance mentioned before the asterisk (here, to *table-1*).|



In this case, The query result for the join will have, for the extra items, the NULL value in any output columns selected from *table-2*.

|        |        |
|--------|--------|
|**=***  |The extra items (if any) are "added" to the table instance mentioned after the asterisk (here, to *table-2*).|



In this case, The query result for the join will have, for the extra items, the NULL value in any output columns selected from *table-1*.

If you have multiple join conditions, which is typically necessary if you have a primary key spanning multiple columns, then the asterisk must be placed "on the same side" in each of the conditions. Otherwise, it's an error ("A circular outer join has been detected").

*Example*

In this example, the effect of the added asterisk is that the query result will contain not only each combination of customer and order, but also a record for each customer who has NOT placed any order. In such a record, the order ID is NULL.

```sql
SELECT         c.name
,              o.id
FROM           customer c
,              order o
WHERE          c.name *= o.customer_name
```

## Cross join

A cross join is the effect of joining 2 tables without imposing a join condition. The result is a Cartesian product: each record of the first table is combined with each record of the second table. The number of result records is the product of the number of records in the first table and the number of records in the second table.

When developing a USoft application you do not normally need to express cross joins.

*Syntax 1: Standard syntax*

To simplify, this syntax concentrates on the cross join itself. In practice, a cross join may be combined with other joins, as shown earlier in this help topic for inner joins.
What makes this syntax a cross join is the fact that the FROM clause contains 2 tables, in combination with the fact that no join condition is present.

```sql
*SELECT-clause*
FROM           *table*
,              *table*
```

*Syntax 2: CROSS JOIN syntax*

To simplify, this syntax concentrates on the cross join itself. In practice, a cross join may be combined with other joins, as shown earlier in this help topic for inner joins.
In this syntax, the JOIN keyword is required and the CROSS keyword is optional. This construct has a JOIN clause but not an ON clause.

```sql
*SELECT-clause*
FROM           
*table*  CROSS JOIN  *table*
```