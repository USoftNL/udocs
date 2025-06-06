---
id: udbdsembeddedKeyCols
---

# $.udb(ds).embeddedKeyCols()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **embeddedKeyCols()** function of the [DataSourceContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer).

## **$.udb(ds).embeddedKeyCols()**

Gets a list of key columns that are used in the relation of an embedded data source.

Returns a collection of columns.

*Syntax*

```js
$.udb( *ds* ).embeddedKeyCols( *embedded-data-source-name* )
```

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

The optional *embedded-data-source-name* is a string that identifies a data source embedded within the data source. For embedded data sources at a deeper level, use one or more forward slash symbols (‘/’) to descend to the deeper level. If *embedded-data-source-name* is not specified, all embedded key columns in scope are returned.

*Examples*

```js
$.udbMeta('EMP').embeddedKeyCols();
```

```js
$.udbMeta('EMP').embeddedKeyCols('Embedded DEPARTMENT');
```

```js
$.udbMeta('EMP').embeddedKeyCols('Embedded DEPARTMENT/Embedded COMPANY');
```

 