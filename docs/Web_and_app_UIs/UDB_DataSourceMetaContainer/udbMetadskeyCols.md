---
id: udbMetadskeyCols
---

# $.udbMeta(ds).keyCols()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **keyCols()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).
> See also [Rows.cols()](/docs/Web%20and%20app%20UIs/UDB%20Rows/Rowscols.md).

## **$.udbMeta(ds).keyCols()**

Gets a list of key columns that have the specified name(s). If no names are specified, all key columns are returned.

Returns a collection of columns.

*Syntax*

```js
$.udbMeta( *ds* ).keyCols( *columns* )
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

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

 