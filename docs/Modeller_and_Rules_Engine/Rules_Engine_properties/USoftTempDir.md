---
id: USoftTempDir
---

# USoftTempDir




:::note

This article is about the **USoftTempDir**[Rules Engine property](/docs/Modeller_and_Rules_Engine/Rules_Engine_properties).

:::

## **USoftTempDir**

The **USoftTempDir** Rules Engine property returns the \\USoft_temp subdirectory of the USoft Log Folder selected during Setup of the local USoft installation that the Rules Engine uses. An example return value is:

```
C:\Users\MYOSUSERNAME\AppData\Local\Temp\USoft_temp\
```

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'USoftTempDir' )
```

This entire statement is case-insensitive, including the property name.