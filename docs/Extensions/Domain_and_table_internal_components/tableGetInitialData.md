---
id: tableGetInitialData
---

# table.GetInitialData




:::note

This article is about the **table.GetInitialData** method of [table internal components](/docs/Extensions/Domain_and_table_internal_components).
**See also**
[Initial Data]()

:::

## **table.GetInitialData**

Returns the [initial data]() defined for table *table*.


:::warning

By default, a table does not have initial data. In practice, most tables do not have initial data.

:::

*Syntax 1*

```
INVOKE *table*.GetInitialData
```

*Syntax 2*

```
SELECT *table*.GetInitialData()
```

*Example*

This gets initial data for a table named EVP_PARAMETER:

```sql
SELECT    evp_parameter.GetInitialData()
```

 