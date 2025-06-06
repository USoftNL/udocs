# ConceptualFile



> [!NOTE]
> This article is about the **ConceptualFile**[Rules Engine property](/docs/Modeller%20and%20Rules%20Engine/Rules%20Engine%20properties).

## **ConceptualFile**

The **ConceptualFile** Rules Engine property returns a filepath leading to the  "application.CON" file used by the Rules Engine if it is running from flat file. An example return value is:

```
C:\usd91\app\MYAPP.con
```

If the Rules Engine is running from database, the return value is empty (NULL).

## Getting this property

You can get the current value of this property by executing:

```sql
SELECT RulesEngine.GetProperty( 'ConceptualFile' )
```

This entire statement is case-insensitive, including the property name.

 