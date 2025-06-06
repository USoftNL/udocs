---
id: RulesEngineGetLastGeneratedUniqueValue
---

# RulesEngine.GetLastGeneratedUniqueValue



> [!NOTE]
> This article is about the **GetLastGeneratedUniqueValue** method of the [RulesEngine internal component](/docs/Extensions/RulesEngine%20internal%20component).

## **RulesEngine.GetLastGeneratedUniqueValue**

Gets the most recently generated unique value. A unique value is generated for a column C each time a record with column C is inserted, if C is based on a domain that has the "Generate Unique Values = Database" setting.

Returns a column value (a sequence number).

*Syntax*

```sql
SELECT RulesEngine.GetLastGeneratedUniqueValue()
```

*Explanation*

If a table contains a key column for which the domain has the "Generate Unique Values = Database" setting, each time a new row is INSERTed into this table, the Rules Engine automatically generates a new unique value for that key column.

If you are in client/server mode, you can see this new value directly after INSERTing the row. This behaviour is referred to as "update-notify".

But if you are using the Remote Rules Service API or the Rules Service, the underlying protocol (ODBC or JDBC) which allows you to communicate with the Rules Engine does not provide an "update-notify" mechanism, so that you cannot see the newly generated key value. This makes it difficult to retrieve the row that you have just inserted. The RulesEngine.GetLastGeneratedUniqueValue() method provides the solution for this problem.

Only the session's MOST RECENTLY GENERATED value is available. For each table that has generated unique values, you can get the **next** generated value by calling [.GetNextGeneratedUniqueValue()](/docs/Extensions/Domain%20and%20table%20internal%20components/tableGetNextGeneratedUniqueValue.md).