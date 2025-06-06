# The getSelection placeholder

![](/api/Web%20and%20app%20UIs/Scripting%20with%20data%20sources/assets/c29894ef-9824-498a-9b23-e1cd94c27a76.png)



> [!CAUTION]
> This placeholder is no longer supported in USoft 11.

![](/api/Web%20and%20app%20UIs/Scripting%20with%20data%20sources/assets/22fff438-3acd-485b-90d0-d44868e85f2a.png)



The **getSelection** placeholder creates a WHERE clause of the specified data source from its selected record's primary keys and values. If no record is selected in the specified data source, then a default WHERE clause is generated instead.

The syntax of the getSelection placeholder is very similar to that of the getWhereClause placeholder:

```
  ${getSelection( data-source, data-source-alias, if-null-string ) }
```

The resulting expression can only be used in the context of a WHERE clause (usually the Where Clause property of a data source). It is only useful if both the specified data source and the data source where it is used, are based on the same table. Moreover, both data sources should have the same embedded data sources as well.

The result of the getSelection placeholder can also be achieved by a combination of getValue placeholders for each column to be copied, but in the case of large primary key sets, the use of getSelection is recommended.

> [!NOTE]
> The WHERE clause substituted by the getWhereClause placeholder may also contain other placeholders, which are substituted in turn as well. Be careful with getWhereClause placeholders pointing to each other.