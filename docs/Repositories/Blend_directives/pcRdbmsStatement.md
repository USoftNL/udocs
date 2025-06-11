---
id: pcRdbmsStatement
---

# pc:RdbmsStatement




:::note

This article is about the **pc:RdbmsStatement**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:RdbmsStatement**

Executes and commits one or more SQL statements directly in the RDBMS, bypassing the USoft Rules Engine.

## Oracle

*Syntax*

```
<pc:RdbmsStatement
    rdbms="oracle"
    connectstr="*connectstr*"
    database="*database*"
    user="*user*"
    pwd="*pwd*" >

*statement-item*
    ...

</pc:RdbmsStatement>
```

On Oracle:

- The required **connectstr** is a valid TNS connect string as illustrated in the Example. You can create such a string by calling the oracle:USoftConnectString() function.
- The optional **database** attribute may be used to identify the table owner if the user logging in, specified by **user**, is to manipulate a table in a different database user's schema. *
- The required **user** and **pwd** specify the username/password combination used to access the RDBMS.

* If **database** is omitted, the user logging in is understood to be also the table owner. If **database** is specified and different from user, USoft Blend issues the following statement that allows user to access the tables in database, provided that the necessary RDBMS access rights have been granted:

```
ALTER SESSION SET CURRENT_SCHEMA = database
```

The pc:RdbmsStatement element is allowed to have multiple statement-item child elements. See the "Statement items" section below.

*Example*

```xml
<pc:RdbmsStatement
    rdbms="oracle"
    connectstr="(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=XM310100444.usoft.com)(PORT = 1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=XE)))"
    user="{$user}"
    pwd="{$pwd}" >
      <s seqno="10" status="Waiting">update tour set status=:status where service_msg is not null</s>
      <s seqno="20" status="Processed">update tour set status=:status where service_msg is null</s>
</pc:RdbmsStatement>
```

## SQL Server

*Syntax*

```
<pc:RdbmsStatement
    rdbms="sqlserver"
    connectstr="*connectstr*"
    database="*database*"
    user="*user*"
    pwd="*pwd*" >

*statement-item*
    ...

</pc:RdbmsStatement>
```

On SQL Server:

- The required **connectstr** is a valid database connect string without reference to the database, ie., a connect string that does not contain a colon character.
- The required **database** attribute identifies a database within the instance designated by connectstr.
- The required **user** and **pwd** specify the username/password combination used to access the RDBMS.

The pc:RdbmsStatement element is allowed to have multiple statement-item child elements. See the "Statement items" section below.

*Example*

```xml
<pc:RdbmsStatement
    rdbms="sqlserver"
    connectstr="P4900299383\SQLEXPRESS"
    database="USD91_TRAVEL2"
    user="{$user}"
    pwd="{$pwd}" >
      <s seqno="10" status="Waiting">update tour set status=:status where service_msg is not null</s>
      <s seqno="20" status="Processed">update tour set status=:status where service_msg is null</s>
</pc:RdbmsStatement>
```

## Statement items

*Syntax*

```
*statement-item*  ::=

  <*elem attr="value"* ...> *rdbms-ddl-dml-statement* </*elem*>
```

The pc:RdbmsStatement element is allowed to have multiple *statement-item* child elements for which:

- The *elem* element name is irrelevant and is allowed to be any valid XML name. It is also irrelevant whether multiple elements have the same or different element names.
- The SQL statement may be a DML statement (INSERT, UPDATE, DELETE) or a DDL statement (CREATE, ALTER,DROP).
- One or more optional XML attributes may be used. The values of the attributes may be used as replacement values. The SQL statement may contain placeholders introduced by colons ( : ). Each placeholder is replaced by the value of the attribute of the same name before the statement is sent to the RDBMS.

*Example*

In this example:

```xml
<s10 destination="AUSTRALIA" num-days="12">
  update tour set status = 'Fully booked'
  where destination = :destination and num_days = :num_days
</s10>
```

the following statement is sent to the RDBMS:

```sql
  update tour set status = 'Fully booked'
  where destination = 'AUSTRALIA' and num_days = 12
```

## Processing order

If you have more than 1 statement item, statements are processed in document order. In the following example, the seqno attribute is irrelevant for processing order. The second statement is applied AFTER the first:

```xml
<s seqno="20" status="Waiting">update tour set status=:status where service_msg is not null</s>
<s seqno="10" status="Processed">update tour set status=:status where service_msg is null</s>
```

## Commit behaviour

DML statements submitted within the same pc:RdbmsStatement command are committed as a single transaction. A DML statement is a SQL statement starting with INSERT, UPDATE, or DELETE. In the event of an error, the entire transaction is rolled back.

A commit also occurs immediately before and immediately after any DDL statement. A DDL statement is a SQL statement starting with CREATE, ALTER, or DROP.

## Return value

If the transaction(s) is or are successful, an XML fragment is returned that identifies, for each statement, the number of records (rows) affected. It looks like this:

```xml
<StatementsResults>
   <s0 nrowsaffected="10" />
   <s1 nrowsaffected="15" />
</StatementsResults>
```

If this return value matters to you, giving each statement item a different element name will help identify which statement affected how many rows.