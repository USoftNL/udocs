---
id: OsUserHomeDir
---

# OsUserHomeDir




:::note

This article is about the **OsUserHomeDir**[Rules Engine property](/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **OsUserHomeDir**

The **OsUserHomeDir** Rules Engine property returns the filepath to the local home directory of the user currently logged on to the Windows operating system.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'OsUserHomeDir' )
```

This entire statement is case-insensitive, including the property name.