# Table aliases



> [!NOTE]
> This article is about **table aliases** as part of the [SQL syntax](/docs/Modeller%20and%20Rules%20Engine/SQL%20syntax) that USoft supports.

## **Table aliases**

A **table alias** is a name (a string), usually an abbreviation, that represents a table instance in an SQL statement.

*Syntax*

This example shows the most common syntax. Table aliases also appear in various join constructs not shown here.

```sql
FROM           *table  alias*
[,             *table  alias* ...]
```

For each table declared in the FROM clause, you can optionally add an alias separated from the table name by whitespace. A table alias may not contain whitespace. A table alias must be unique within the SQL statement.

Once a table alias exists, it can be optionally used in column expressions as a prefix separated from the column name by a full stop ( . ):

```sql
*table-alias*.*column-name*
```

*Example*

```sql
SELECT         cs.name
,              ci.name
FROM           customer cs
,              city ci
WHERE          ci.id = cs.lives_in
```

## Use cases

The principal use case for table aliases is disambiguation. In the following statement, table aliases are essential, because they are the only way to refer to the correct table instances in the SELECT and WHERE clauses:

```sql
SELECT         e1.name
,              e2.name
FROM           employee e1
,              employee e2
WHERE          e2.id = e1.manager
```

The following statement does not strictly require table aliases for this reason, in spite of the fact that 2 different tables each have a "name" column. This makes prefixing necessary, but here a possible alternative is to prefix the entire table name:

```sql
SELECT         customer.name
,              city.name
FROM           customer
,              city
WHERE          city.id = customer.lives_in
```

Table aliases (and table name prefixes) are legal even if they are not essential to disambiguate column expressions. USoft recommends that you use short (1-letter, 3-letter...) table aliases as a default, at least in all your multi-table statements. This makes statements shorter and easier to read, and it keeps you from worrying constantly whether or not you need table prefixes or table alias prefixes for disambiguation.