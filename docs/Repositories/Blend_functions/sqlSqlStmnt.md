---
id: sqlSqlStmnt
---

# sql:SqlStmnt



> [!NOTE]
> This article is about the **sql:SqlStmnt**[ Blend function](/docs/Repositories/Blend_functions).

## **sql:SqlStmnt**

Returns the result of executing sql-statement against connection.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:sql="USoft:Sql"
```

*Function call*

```
sql:SqlStmnt( *connection*, *sql-statement*, *parameter* )
```

*Connection* may be empty if there is a current connection, which is the case if the script is called from within a USoft instance with a call to SELECT USCSXSL.BLEND. In this case, the return value is the result of executing sql-statement against the current connection. This case is illustrated by the example below.

*Example*

```sql
select uscsxsl.blend(
'<root 
    xmlns:pc="Processing.Command"
    pc:hideme="true">
  <pc:assign sql="SELECT to_clob((INVOKE usmeta.tables with select ''.*'', ''False'', ''True'', ''False'', ''False''))" />
   <pc:assign xml = "{sql:SqlStmnt('''', $sql)}" />
   <pc:comment-of><pc:copy-of select="$xml"/></pc:comment-of>  
</root>'
)
```

This example returns, in the form of an XML comment, the output of the INVOKE USMETA.TABLES call, which (if called from a USoft Application instance, as opposed to a USoft Definer instance) is an XML-formatted listing of metadata describing Logical Views.

 