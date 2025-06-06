# Version



> [!NOTE]
> This article is about the **Version**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **Version**

The **Version** Rules Engine property returns the patch version number of the USoft product used to run the Rules Service. The value returned starts with the word "version" followed by a space, for example:

```
version 9.1.1G
```

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'Version' )
```

This entire statement is case-insensitive, including the property name.