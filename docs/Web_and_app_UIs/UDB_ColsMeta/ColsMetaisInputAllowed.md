---
id: ColsMetaisInputAllowed
tags: [USoft11, USoft10]
---
# ColsMeta.isInputAllowed()



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

This article is about the **isInputAllowed()** function of the [ColsMeta object](/Web_and_app_UIs/UDB_ColsMeta).

:::

## **ColsMeta.isInputAllowed()**

Finds out if new input may be entered for this column. Use this, for example, for a column in an inserted record.

Returns a boolean.

*Syntax*

```js
$.udbMeta( *ds* ).cols( *cols* ).isInputAllowed()
```

The optional *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md). The optional *cols* is a [column selector](/Web_and_app_UIs/UDB_ColsMeta/UDB_ColsMeta_object.md).

Function returns true if new input may be entered for this column, false otherwise.

*Example*

```js
if (!updatable && $.udbMeta(this.dsId).cols(this.column).isInputAllowed() &&
     record.isInserted())
    updatable = true;
```

 