---
id: RdbmsVersion
---

# RdbmsVersion




:::note

This article is about the **RdbmsVersion**[Rules Engine property](/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **RdbmsVersion**

The **RdbmsVersion** Rules Engine property returns the version number of the database platform that the Rules Engine runs on.

An example of a return value on the Oracle platform is:

```
21c
```

An example of a return value on the SQL Server platform is:

```
13.0.4001.0
```

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'RdbmsVersion' )
```

This entire statement is case-insensitive, including the property name.