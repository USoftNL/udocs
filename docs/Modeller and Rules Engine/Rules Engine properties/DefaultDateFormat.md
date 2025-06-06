# DefaultDateFormat



> [!NOTE]
> This article is about the **DefaultDateFormat**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **DefaultDateFormat**

The **DefaultDateFormat** Rules Engine property returns a pattern representing the string format that the Rules Engine uses as a default when converting a date value to a string. An example return value is:

```
DD-MON-YY
```

## Setting this property

You cannot set this format by using RulesEngine.SetProperty. To set this format, set the [DEFAULT_DATE_FORMAT](/docs/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/Rules%20Engine%20parameters.md) Rules Engine parameter in USoft Definer by choosing Tools, Rules Engine Parameters.

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'DefaultDateFormat' )
```

This entire statement is case-insensitive, including the property name.