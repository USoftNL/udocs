---
id: RulesEngineExecuteStatement
---

# RulesEngine.ExecuteStatement



> [!NOTE]
> This article is about the **ExecuteStatement** method of the [RulesEngine internal component](/docs/Extensions/RulesEngine_internal_component).

## **RulesEngine.ExecuteStatement**

Executes a SQL statement passed as a string.

> [!WARNING]
> This method can NOT be called from a constraint.

Returns nothing if the statement succeeds. If the statement fails, processing depends on the value of the GenerateError pseudo-column.

*Syntax*

```sql
SELECT RulesEngine.ExecuteStatement(
    *statement*
,   *generate-error*   GenerateError
)

*generate-error* := { No | Yes }
```

The required *statement* is the SQL statement to be executed. Only a single SQL statement may be passed in any one call. It is not possible to use multiple SQL statements separated by semicolons ';'.

- If the optional *generate-error* is not passed or if it it is passed with the value 'No', the method returns a record with a single output column. This column contains the error message. This will NOT stop subsequent records with statements to be executed. Also, other parts of the product will NOT consider this event as an error. For example, in a USoft Batch context, abort-job-on-error will not be triggered by this type of error.
- If *generate-error* is passed with the value 'Yes', the method returns an error message and blocks processing. Other parts of the product will consider this event as an error.

*Example*

```sql
SELECT RulesEngine.ExecuteStatement (
  'insert into tour values(''ITALY'',''TUSCANY'')'
)
```

 