---
id: Pseudocolumns
---

# Pseudo-columns




:::note

This article is about **pseudo-columns** as part of the [SQL syntax](/Modeller_and_Rules_Engine/SQL_syntax) that USoft supports.

:::

## **Pseudo-columns**

A *pseudo-column* is an expression that you can use in the SELECT list of a SQL statement as if it were a column name, but that does not refer to a physical column in a table.

You can use pseudo-columns in SELECT output lists but also as the value of certain attributes in USoft Definer, in particular, in the Default Value attribute of Columns and Domains.

|**Pseudo-column**|**Description**|
|--------|--------|
|ROWNUM  |The sequence number of a given record in a query result set.|
|SYSDATE |<p>The current server date.</p><p>SYSDATE is Oracle-only.</p><p>For portability to other platforms, use $$CURRENTDATE$$ or the CURRENT_DATE SQL function instead.</p>|
|$$CURRENTDATE$$|The current server date.|
|$$CURRENTDATETIME$$|The current server date and time.|
|$$GUID$$|A generated GUID, same result as the GUID() SQL function.|
|$$TRANSACTIONDATE$$|The server date of the first time this function is processed within the transaction.|
|$$TRANSACTIONDATETIME$$|The server date and time of the first time this function is processed within the transaction.|
|USER    |The name of the USoft application user currently logged in.|
|$$RDBMSUSER$$|The name of the user used to access the RDBMS resources.|
|$$RDBMSOWNER$$|The name of the user who owns the RDBMS objects being accessed.|
|$$USER$$|The name of the USoft application user currently logged in.|



## Notes

Pseudo-columns are similar to SQL functions that take no arguments, such as TRANSACTION_DATE(). They differ from such functions in that the call syntax does not use empty parentheses ():

```sql
SELECT USER
```

```sql
SELECT $$USER$$
```

```sql
SELECT TRANSACTION_DATE()
```

Another difference is that you can use a pseudo-column, but not a SQL function, as the Default Value attribute of a Column or Domain.