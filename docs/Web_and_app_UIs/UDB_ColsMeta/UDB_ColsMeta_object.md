---
id: UDB_ColsMeta_object
tags: [USoft11, USoft10]
---
# UDB ColsMeta object



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **ColsMeta** object in the UDB object model. This model is for data exchange between USoft web UIs and Rules Engines.
This model is built around the [udb](/Web_and_app_UIs/UDB_udb), [DataSourceMetaContainer](/Web_and_app_UIs/UDB_DataSourceMetaContainer), [DataSourceContainer](/Web_and_app_UIs/UDB_DataSourceContainer), [Rowset](/Web_and_app_UIs/UDB_Rowset), [Rows](/Web_and_app_UIs/UDB_Rows), ColsMeta, and [Cols](/Web_and_app_UIs/UDB_Cols) object types. See also [UDB events](/Web_and_app_UIs/UDB_Events).

:::

A **ColsMeta** object contains a collection of columns and can be used the extract the meta data of a column.


:::tip

**Column selectors**
In the syntax block below, *col* is a **column selector**: an expression whereby you identify a single column or multiple columns in a data source. Column selectors play a role in calls to the ColsMeta object, but also in calls to the Cols object:
You can identify a single column by a name string:
or by a column ID, which is a combination of a '$' symbol and a generated integer:
If the column is in an embedded data source, name that embedded data source, follow by a forward slash (/), then follow by a column name or column ID:
You can also select one or more columns by type, using one of the meta selectors listed here. You cannot combine these meta selectors with other ways of selecting columns:

:::

*Syntax*

```js
$.udbMeta( *ds* ).cols( *col* )
```

The optional *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

The optional *col* is a column selector as explained at the top of this article.


:::note

All the functions listed for the **ColsMeta** object are equally exposed by the **Cols** object.

:::
