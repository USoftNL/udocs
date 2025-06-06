---
id: RulesEngineMustExistExecuteStatement
---

# RulesEngine.MustExistExecuteStatement



> [!NOTE]
> This article is about the **MustExistExecuteStatement** method of the [RulesEngine internal component](/docs/Extensions/RulesEngine_internal_component).

## **RulesEngine.MustExistExecuteStatement**

Executes a SQL statement passed as a string and checks that the record(s) to be retrieved or manipulated are present.

> [!WARNING]
> This method may not be called from a constraint.

Returns error message "Record changed by another user" if the record(s) to be retrieved or manipulated are not present. Otherwise, returns a single row with a single column containing a number equal to 1 or greater than 1. This is the number of rows retrieved or manipulated.

The **RulesEngine.ExecuteStatement** method is very similar. The only difference is that it does not check that the record(s) are present.

*Syntax*

```sql
SELECT RulesEngine.MustExistExecuteStatement(
    *statement*
)
```

The required *statement* is the SQL statement to be executed. Only a single SQL statement may be passed in any one call. It is not possible to use multiple SQL statements separated by semicolons ';'.

*Example*

```sql
SELECT RulesEngine.MustExistExecuteStatement (
  'insert into tour values(''ITALY'',''TUSCANY'')'
)
```

 