---
id: The_getSearchValue_placeholder
---

# The getSearchValue placeholder

![](./assets/c29894ef-9824-498a-9b23-e1cd94c27a76.png)




:::danger

This placeholder is no longer supported in USoft 11.

:::

![](./assets/22fff438-3acd-485b-90d0-d44868e85f2a.png)



The **getSearchValue** placeholder is used to retrieve values from query conditions.

This placeholder retrieves the last search condition specified, if any. This can be a column value of the selected record. It refers to the underlying data source item of a data source.

*Syntax*

```
${getSearchValue( data-source, data-source-item )}
```

The getSearchValue placeholder must not refer to variable data sources.

When using the getSearchValue placeholder in a SQL statement, by default single quotation marks (' ') are added automatically around the retrieved value, according to the type of the DataSource item: A numeric type gets a single quote, and other types do not.

You can change this default behavior by adding a third, optional argument (True or False) to the placeholder to enforce or skip the addition of single quotes:

```
${getSearchValue( data-source, data-source-item, { True | False } ) }
```