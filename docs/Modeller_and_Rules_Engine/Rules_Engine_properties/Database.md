---
id: Database
---

# Database




:::note

This article is about the **Database**[Rules Engine property](/docs/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

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