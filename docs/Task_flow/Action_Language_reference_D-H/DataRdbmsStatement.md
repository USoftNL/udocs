---
id: DataRdbmsStatement
---

# DataRdbmsStatement()




:::note

This article is about the **DataRdbmsStatement** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **DataRdbmsStatement()**

Instructs the RDBMS to execute a SQL statement in Data Definition Language (CREATE, ALTER, DROP... ) or a stored procedure.

Data manipulation SQL statements (INSERT, UPDATE, DELETE) are not allowed. Use [SqlScript()](/docs/Task_flow/Action_Language_Reference_S-Z/SqlScript.md) to execute these statements.

*Syntax*

```
DataRdbmsStatement( { *statement* | *stored-procedure-block* } )
```

Either *statement* or *stored-procedure-block* is required. *Statement* is a statement in Data Definition Language (DDL). This is a CREATE, ALTER or DROP statement. The required syntax depends on the RDBMS. If the RDBMS is Oracle, *stored-procedure-block* is a block of code in Oracle PL/SQL language contained within the BEGIN and END keywords. If the RDBMS is SQL Server, *stored-procedure-block* is a code block called by the EXEC keyword.


:::warning

Manipulations triggered by a statement that is executed with this action (for example a stored procedure) will NOT be checked for conceptual violations or for authorization. The USoft Rules Engine is not responsible for any data integrity loss when this action is used. It is recommended that you restrict the use of DataRdbmsStatement() to tables other than the application tables of the USoft application, for example, metadata or technical tables.

:::

*Examples*

```
DataRdbmsStatement( CREATE TABLE ... )
```

(Oracle RDBMS:)

```
DataRdbmsStatement( BEGIN *package-name*.*procedure-name*; ...; END; )
```

(SQL Server RDBMS:)

```
DataRdbmsStatement( EXEC *procedure-name* ... )
```

 