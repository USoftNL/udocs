---
id: udbMetadscols
---

# $.udbMeta(ds).cols()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **cols()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).

## **$.udbMeta(ds).cols()**

Gets a list of columns that have the specified name(s). If no names are specified, all columns are returned.

Returns a collection of columns.

*Syntax*

```js
$.udbMeta( *ds* ).cols( *columns* )
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

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

 