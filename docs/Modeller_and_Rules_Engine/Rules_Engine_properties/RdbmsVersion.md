---
id: RdbmsVersion
---

# RdbmsVersion



> [!NOTE]
> This article is about the **RdbmsVersion**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

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