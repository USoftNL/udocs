---
id: Application
---

# Application



> [!NOTE]
> This article is about the **Application**[Rules Engine property](/docs/Modeller_and_Rules_Engine/Rules_Engine_properties).

## **Application**

The **Application** Rules Engine property returns the name of the USoft application (as known to Authorizer) that the Rules Engine is associated with.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'Application' )
```

This entire statement is case-insensitive, including the property name.

 