---
id: TempTablesAtOwner
---

# TempTablesAtOwner



> [!NOTE]
> This article is about the **TempTablesAtOwner**[Rules Engine property](/docs/Modeller_and_Rules_Engine/Rules_Engine_properties).

## **TempTablesAtOwner**

The **TempTablesAtOwner** Rules Engine property can be used to override the [TEMP_TABLE_AT_OWNER](/docs/Modeller_and_Rules_Engine/Introducing_USoft_Modeller_and_Rules_Engine/Rules_Engine_parameters.md) Rules Engine parameter setting for the current deployment context and for the duration of the current session.

This setting allows you to specify that temporary tables are to be created in the owner's schema.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'TempTablesAtOwner', '*value*' )

*value*  ::=  { Yes | No }
```

This entire statement is case-insensitive, including the property name and the values of *value*. 'No' is the USoft factory default, meaning that the TEMP_TABLE_AT_OWNER Rules Engine parameter is set to 'False' by default.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'TempTablesAtOwner' )
```

This entire statement is case-insensitive, including the property name.