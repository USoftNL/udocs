---
id: udbMetadscols
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).cols()



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

This article is about the **cols()** function of the [DataSourceMetaContainer object](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).cols()**

Gets a list of columns that have the specified name(s). If no names are specified, all columns are returned.

Returns a collection of columns.

*Syntax*

```js
$.udbMeta( *ds* ).cols( *columns* )
```

The required *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

The optional *columns* is a string or an array of strings identifying one or more columns. If *columns* is not specified, all columns in scope are returned.

*Examples*

```js
$.udbMeta('EMP').cols();
```

```js
$.udbMeta('EMP').cols('EMPNO');
```

```js
$.udbMeta('EMP').cols(['EMPNO','NAME']);
```

 