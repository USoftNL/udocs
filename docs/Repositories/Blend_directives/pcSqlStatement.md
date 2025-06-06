---
id: pcSqlStatement
---

# pc:SqlStatement




:::note

This article is about the **pc:SqlStatement**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:SqlStatement**

Executes one or more SQL DML (ie., INSERT, UPDATE, or DELETE) statements.

If successful, returns an XML fragment reporting on the number of rows affected. See "Return value" below.

*Syntax*

```
<pc:SqlStatement alias="*name-literal*" commit="*commit*" >

     <*element*> *sql-dml-statement* </*element*>
  [  <*element*> *sql-dml-statement* </*element*> ... ]

</pc:SqlStatement>

*commit*  ::=  { commit | rollback }
```

The required **alias** identifies the connection to the Rules Engine that you want to use. For aliases, see pc:RunRulesService.

The optional **commit** determines whether the operation is committed or not. Choose the "rollback" option (the default) for debugging purposes, in particular to find out if the SQL statement(s) would violate any rules if executed. In terms of data change, the net effect of running the operation with "rollback" is null.

The \<pc:SqlStatement> element must contain at least one child element. Each child element must have a text node as its content. This text node must be a valid SQL DML statement. This is a statement that starts with one of the keywords INSERT, UPDATE, DELETE. If you pass multiple child elements, they are processed in document order as in a conventional SQL script. The element names of the child elements are not relevant. 

*Example*

This example inserts 2 records in table T_AUTH_ROLE_USER in USoft Authorizer. Each SQL statement has a variable element, which is an Application User name stored in a Blend variable named username.

```language-xml
<pc:SqlStatement alias="x3" commit="commit" >
     <s>insert into T_AUTH_ROLE_USER(app_name,role_name,username) values('MY_APP','DEVELOPER','<pc:value-of select="$username"/>')</s>
     <s>insert into T_AUTH_ROLE_USER(app_name,role_name,username) values('MY_APP','PLANNER','<pc:value-of select="$username"/>')</s>
</pc:SqlStatement>
```

## Return value

If successful, pc:SqlStatement returns, for each statement executed, an XML fragment reporting on the type of operation (Insert, Update, Delete) and the number of rows affected. The return value of the Example in this article could be:

```language-xml
<Insert rowsaffected="1"/>
<Insert rowsaffected="1"/>
```

 