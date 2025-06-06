# UniqueKeyCheck



> [!NOTE]
> This article is about the **UniqueKeyCheck**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **UniqueKeyCheck**

The **UniqueKeyCheck** Rules Engine property can be used to override the [UNIQUE_KEY_CHECK](/docs/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/Rules%20Engine%20parameters.md) Rules Engine parameter setting for the current deployment context and for the duration of the current session.
This setting determines whether or not the Rules Engine must perform unique key check in the case of non-manual data entry, for example, when a call to the SqlScript() action is executed.

## Setting this property

You can reset this property by executing:

```sql
SELECT RulesEngine.SetProperty( 'UniqueKeyCheck', '*value*' )

*value*  ::=  { Yes | No }
```

This entire statement is case-insensitive, including the property name and the values of *value*. 'Yes' is the USoft factory default, meaning that the UNIQUE_KEY_CHECK Rules Engine parameter is set to 'True' by default.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'UniqueKeyCheck' )
```

This entire statement is case-insensitive, including the property name.