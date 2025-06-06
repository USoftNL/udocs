---
id: SystemDir
---

# SystemDir



> [!NOTE]
> This article is about the **SystemDir**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **SystemDir**

The **SystemDir** Rules Engine property returns the USoft installation directory of the local USoft installation that is running the instance from which you invoke the RulesEngine component.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'SystemDir' )
```

This entire statement is case-insensitive, including the property name.