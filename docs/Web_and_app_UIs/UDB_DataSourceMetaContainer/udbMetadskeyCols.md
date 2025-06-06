---
id: udbMetadskeyCols
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).keyCols()



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

This article is about the **keyCols()** function of the [DataSourceMetaContainer object](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer).
See also [Rows.cols()](/docs/Web_and_app_UIs/UDB_Rows/Rowscols.md).

:::

## **$.udbMeta(ds).keyCols()**

Gets a list of key columns that have the specified name(s). If no names are specified, all key columns are returned.

Returns a collection of columns.

*Syntax*

```js
$.udbMeta( *ds* ).keyCols( *columns* )
```

The required *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

The optional columns is a string or an array of strings identifying one or more key columns. If columns is not specified, all key columns in scope are returned.

*Examples*

```js
$.udbMeta('EMP').keyCols();
```

```js
$.udbMeta('EMP').keyCols('EMPNO');
```

```js
$.udbMeta('EMP').keyCols(['EMPNO','NAME']);
```

 