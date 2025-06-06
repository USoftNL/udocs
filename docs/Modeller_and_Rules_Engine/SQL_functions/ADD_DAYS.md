---
id: ADD_DAYS
---

# ADD_DAYS



> [!NOTE]
> This article has additional information about the **ADD_DAYS** SQL function.
> For convertibility of this function, go to [SQL functions  A - C](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/SQL%20functions%20AC.md).

## **ADD_DAYS**

Adds a specified number of days to a date.

*Syntax*

```sql
ADD_DAYS( *date*, *number-of-days* )
```

The required *date* must evaluate to a datetime. The required *number-of-days* must be an integer.

*Example 1*

```sql
UPDATE   tab1
SET      next_year = ADD_DAYS( SYSDATE, 365 )
```

*Example 2*

```sql
UPDATE   schedtour
SET      must_end = ADD_DAYS( start_date, 40 )
WHERE    limited = 'Y'
```

## Notes

This is a convertible function resolved by USoft and thus supported on all RDBMS platforms.

On Oracle and SQL Server, in additions and subtractions involving a date value and a numeric value, the numeric value is automatically converted to a date value (1 is interpreted as 1 day). On JDBC/Derby, ADD_DAYS must be used to achieve this conversion.