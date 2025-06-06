---
id: ColsMetatype
tags: [USoft11, USoft10]
---
# ColsMeta.type()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **type()** function of the [ColsMeta object](/docs/Web_and_app_UIs/UDB_ColsMeta).

:::

## **ColsMeta.type()**

Gets a type indication for this column.

Returns a string or returns undefined, as follows:

|**Value**|**Type of column**|
|--------|--------|
|C       |<p>Column declared in Definer with Type = Database.</p><p>Column of variable data source.</p>|
|E       |Column of embedded data source|
|O       |Column of output expression|
|undefined|Column declared in Definer with Type = Virtual|



*Syntax*

```js
$.udbMeta( *ds* ).cols( *cols* ).type()
```

The optional *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md). The optional *cols* is a [column selector](/docs/Web_and_app_UIs/UDB_ColsMeta/UDB_ColsMeta_object.md).

*Example*

```js
var colType = $.udbMeta('EMP').cols('EMPLOYEE_ID').type();
```