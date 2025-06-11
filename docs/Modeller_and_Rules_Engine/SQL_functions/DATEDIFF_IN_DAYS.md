---
id: DATEDIFF_IN_DAYS
---

# DATEDIFF_IN_DAYS




:::note

This article has additional information about the **DATEDIFF_IN_DAYS** SQL function.
For convertibility of this function, go to [SQL functions  D - H](/Modeller_and_Rules_Engine/SQL_functions/SQL_functions_DH.md).

:::

## **DATEDIFF_IN_DAYS**

Returns the difference between 2 timestaps expressed in number of days.

*Syntax*

```sql
DATEDIFF_IN_DAYS( *date*, *date* )
```

Both date values are required and must evaluate to a datetime. If at least one of the arguments contains time values, the function will deliver float values. To prevent this, use the TIMESTAMP_TO_DATE function to convert the argument(s) to a format that does not contain time information.

*Example*

```sql
SELECT    DATEDIFF_IN_DAYS(
              TIMESTAMP_TO_DATE( SYSDATE )
          ,   TIMESTAMP_TO_DATE( start_date )
          )
FROM      project
```

## Notes

This is a convertible function resolved by USoft and thus supported on all RDBMS platforms.