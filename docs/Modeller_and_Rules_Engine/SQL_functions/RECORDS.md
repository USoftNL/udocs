---
id: RECORDS
---

# RECORDS




:::note

This article has additional information about the **RECORDS** SQL function.
For convertibility of this function, go to [SQL functions  N - R](/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_NR.md).

:::

## **RECORDS**

Limits the number of records returned in the result set.

*Syntax*

```sql
RECORDS( *lower-boundary*, *upper-boundary* ) *select-output-list*
```

*Lower-boundary* and *upper-boundary* are both required and must both evaluate to a positive integer. *Upper-boundary* must be higher than *lower-boundary*.

If RECORDS is combined with ORDER BY, first the entire result set is built as specified by ORDER BY. Then, a subset of that ordered list is returned as specified by RECORDS.

*Example 1*

This example returns a set of 20 records from the employee table.

```sql
SELECT     RECORDS( 1, 20 ) *
FROM       employee
```

*Example 2a*

This example returns records 3, 4 and 5 from the person table after records have been sorted by family name:

```sql
SELECT     RECORDS( 3, 5 ) *
FROM       person
ORDER BY   family_name
```

*Example 2b*

This example shows that arguments of RECORDS may alternatively be passed as host variables:

```sql
action ResourceFileUpdate( *min: 3 )
action ResourceFileUpdate( *max: 5 )

SELECT     RECORDS( :min, :max ) *
FROM       person
ORDER BY   family_name
```

## Notes

RECORDS is a convertible function resolved by USoft and thus supported on all RDBMS platforms.

On SQL Server, you can alternatively use the TOP operator to obtain a specified number of records from the beginning of the result set, for example, the first 4 records: 

```sql
SELECT     TOP 4 *
FROM       person
```

You can alternatively pass the argument to TOP as a host variable:

```
action ResourceFileUpdate( *top: 4 )

SELECT     TOP :top *
FROM       person
```


:::warning

The TOP operator is not converted by USoft on platforms other than SQL Server.

:::
