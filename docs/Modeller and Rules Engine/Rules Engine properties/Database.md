# Database



> [!NOTE]
> This article is about the **Database**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **Database**

The **Database** Rules Engine property returns the connect string used by the Rules Engine to connect to the database.

Examples of return values on the Oracle platform include the following TNS name aliases:

```
PROD_MYSERVER26
XE
```

An example of a return value on the SQL Server platform is:

```
MYCOMPUTER\SQLEXPRESS
```

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'Database' )
```

This entire statement is case-insensitive, including the property name.