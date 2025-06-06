# CONCAT



> [!NOTE]
> This article has additional information about the **CONCAT** SQL function.
> For convertibility of this function, go to [SQL functions  A - C](/docs/Modeller%20and%20Rules%20Engine/SQL%20functions/SQL%20functions%20AC.md).

## **CONCAT**

The CONCAT() SQL function is convertible to all platforms. This function takes 2 string arguments:

```sql
CONCAT( *string, string* )
```

## Double pipe ( \|\| ) operator: convertible

Concatenation is alternatively represented by the double pipe operator ( \|\| ).

This operator is native on Oracle. USoft converts the double pipe operator when running on other RDBMS platforms. The operator is placed between the arguments and may be repeated any number of times:

*(2 arguments)*

```sql
*string* || *string*
```

*(Multiple arguments)*

```sql
*string* || *string* || *string* ...
```

## Plus ( + ) operator: NOT convertible

On MS SQL Server, concatenation is alternatively represented by the plus operator ( + ).

USoft does NOT convert the plus operator when running on other RDBMS platforms.

The operator is placed between the arguments and may be repeated any number of times:

*(2 arguments)*

```sql
*string* + *string*
```

*(Multiple arguments)*

```sql
*string* + *string* + *string* ...
```

 