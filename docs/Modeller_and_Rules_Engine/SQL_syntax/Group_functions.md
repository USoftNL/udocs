---
id: Group_functions
---

# Group functions



> [!NOTE]
> This article is about **group functions** as part of the [SQL syntax](/docs/Modeller_and_Rules_Engine/SQL_syntax) that USoft supports.

## **Group functions**

In SQL, a **group function** is a function that takes a set (or: group) of multiple column values from multiple rows as input, performs an aggregation, and then returns a single value.

This contrasts with inline functions or scalar functions. They operate on single values by modifying the input value and then returning the modified value.

In the following query, perhaps 100 rows satisfy the WHERE clause. This causes a group of 100 amount values to be passed to MAX(). MAX( ) returns a single value.

```sql
SELECT    MAX( amount )
FROM      order
WHERE     month = 'Feb 2020'
```

The result of this query could be:

```
499303900
```

SQL has 7 group functions listed in the table below. The "empty-set result value” is the value that is the result of applying the group function to an empty row set.

|**Group function**|**Returns**|**Empty-set result value**|
|--------|--------|--------|
|AVG( )  |The average of the row values passed.|The NULL value|
|COUNT( )|The number of rows passed (independently of values in those rows).|0 (zero)|
|MAX( )  |The greatest of the values passed.|The NULL value|
|MIN( )  |The least of the values passed.|The NULL value|
|STDDEV( )|The standard deviation for the set of values passed.|The NULL value|
|SUM( )  |The sum of the values passed.|The NULL value|
|VARIANCE( )|The statistical variance for the set of values passed.|The NULL value|



## Group functions and GROUP BY, HAVING

In the SELECT list of a SQL statement, you are allowed to mix expressions governed by a group function with other expressions, but only if those other expressions also appear in a GROUP BY clause at the end of the statement. Otherwise, it's an error. The following is a valid query:

```sql
SELECT    usergroup
,         COUNT( * ) number_of_members
FROM      user
GROUP BY  usergroup
```

Any restrictive tests applied to the input of the group function must be expressed in the WHERE clause. Any restrictive tests applied to the output of the group function must be expressed in a HAVING clause, which is only legal after a GROUP BY clause.

*Example*

This example returns the names and total number of members of those Australian usergroups that have more than 10 members.

```sql
SELECT    usergroup
,         COUNT( * ) number_of_members
FROM      user
WHERE     location = 'Australia'
GROUP BY  usergroup
HAVING    COUNT( * ) > 10
```

## NULL input values

Group functions ignore any NULL values passed to them. They operate only on the remaining (non-NULL) values. This may lead to unwanted results. Some RDBMSs (Oracle) warn restrictively against a query such as the following if a NULL value is passed to it:

```sql
SELECT    department
,         AVG( salary )
GROUP BY  department
```

## NULL output values

As the table in this help topic shows in the rightmost column, group functions, with the exception of COUNT( ), output the NULL value if the set of rows passed to them is empty. In USoft constraint SQL, this is relevant: it may or may not be what you want. In the subquery of an UPDATE... SET ... constraint:

- WITHOUT the group function, the empty row set causes the constraint to be discarded (skipped): there is no effect on data.
- WITH the group function, the empty row set is replaced by the NULL value, which may cause the constraint to erase non-NULL values.