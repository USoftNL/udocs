---
id: OsUserTempDir
---

# OsUserTempDir



> [!NOTE]
> This article is about the **OsUserTempDir**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **OsUserTempDir**

The **OsUserTempDir** Rules Engine property returns the filepath to the local temporary directory of the user currently logged on to the Windows operating system.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'OsUserTempDir' )
```

This entire statement is case-insensitive, including the property name.