---
id: Rdbms
---

# Rdbms




:::note

This article is about the **Rdbms**[Rules Engine property](/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **Rdbms**

The **Rdbms** Rules Engine property returns the name of the database platform that the Rules Engine runs on. Depending on the platform, version information may or may not be included. Examples of return values include:

```
Oracle
Microsoft SQL Server 2016 (SP1) (KB3182545)
```

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'Rdbms' )
```

This entire statement is case-insensitive, including the property name.