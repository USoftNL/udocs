---
id: BinDir
---

# BinDir



> [!NOTE]
> This article is about the **BinDir**[Rules Engine property](/docs/Modeller_and_Rules_Engine/Rules_Engine_properties).

## **BinDir**

The **BinDir** Rules Engine property returns the \\BIN subdirectory (32-bits installation) or the \\BIN64 (64-bits installation) subdirectory of the local USoft installation that is running the instance from which you invoke the RulesEngine component.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'BinDir' )
```

This entire statement is case-insensitive, including the property name.