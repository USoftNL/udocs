# Default date format

The DEFAULT_DATE_FORMAT Rules Engine parameter specifies the default IO format to be used when converting a date into a string. The default value is DD-MON-YY.

This Rules Engine parameter is effective in two different situations:

 

- When the SQL functions TO_CHAR and TO_DATE are used without an IO format string. This only happens if the statement is evaluated locally, and only applies to Oracle.
- When an implicit conversion takes place from a date to a string or vice versa. This only happens if the statement is evaluated locally, and applies to several databases. However, most databases do not support implicit conversions, so if such a statement is executed on the RDBMS it will fail.

## Setting up the DEFAULT_DATE_FORMAT Rules Engine parameter


To set up the DEFAULT_DATE_FORMAT Rules Engine Parameter:

1.    Open the Definer.
2.    From the menu, select Tools, Rules Engine Parameters.
3.    Query for the Parameter Setting with the name DEFAULT_DATE_FORMAT
4.    Change the Setting to the date format you want to use.

## SQL functions TO_CHAR and TO_DATE (Oracle)

*Example 1*

If the DEFAULT_DATE_FORMAT parameter is:

DD MM YYYY

the SQL statement

```sql
SELECT TO_CHAR(TRANSACTION_DATE())
```

results in:

15 11 2000

*Example 2*

The SQL statement:

```sql
SELECT TO_DATE('15-NOV-00')
```

results in an error message, because the date string does not correspond with the default date format.

*Example 3*

The SQL statement

```sql
SELECT TO_DATE('15 11 2000')
```

results in:

2000/111500000

## Implicit conversion

*Example 4*

If the DEFAULT_DATE_FORMAT parameter is:

DD MM YYYY

the SQL statement:

```sql
SELECT TO_CHAR( TRANSACTION_DATE(),'DD MON YY' )
```

results in:

15 NOV 00

*Example 5*

The SQL statement:

```sql
SELECT TO_CHAR( TO_DATE('15-NOV-00','DD-MON-YY' ))
```

results in:

15 11 2000

> [!NOTE]
> Selecting a date in the SQL Command dialog results in a date represented in the conceptual date format YYYY/MMDDHH24MISS. This is the USoft representation of a date. For example,
> results in:
> 2000/0302133505

> [!TIP]
> The default date format setting only applies for statements that are evaluated locally. If you want to select the current date you can use:

To have a statement evaluated on the RDBMS, you can:

- Use a SELECT... FROM ... statement and select data from a database table.
- Use a function that is not implemented in the local evaluator, for example the SIN() function.
- Set the DEFAULT_DATE_FORMAT Rules Engine Parameter.