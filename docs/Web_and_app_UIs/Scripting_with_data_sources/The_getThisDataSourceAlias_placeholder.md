---
id: The_getThisDataSourceAlias_placeholder
---

# The getThisDataSourceAlias placeholder

In a SQL statement, the **getThisDataSourceAlias** placeholder is used to refer to the (USoft-generated) alias of the current data source.

*Syntax*

```
${getThisDataSourceAlias()}
```

This placeholder can be used in SELECT and WHERE clauses, especially in WHERE clauses of embedded data sources, to refer to fields that exist in both the embedded data source, and its enclosing data source. It is not possible to use the getThisDataSourceAlias placeholder in ExecuteSQLStatement actions.

This placeholder is similar to the getDataSourceAlias and getMainDataSourceAlias placeholders. Click [here](https://usoft-nl.insided.com/scripting-with-data-sources-119/the-getmaindatasourcealias-placeholder-698) for an example of the use of this type of placeholder within a SQL statement.