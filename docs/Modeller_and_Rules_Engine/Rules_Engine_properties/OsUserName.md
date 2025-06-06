---
id: OsUserName
---

# OsUserName



> [!NOTE]
> This article is about the **OsUserName**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **OsUserName**

The **OsUserName** Rules Engine property returns the name of the user currently logged in on the Windows operating system.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'OsUserName' )
```

This entire statement is case-insensitive, including the property name.