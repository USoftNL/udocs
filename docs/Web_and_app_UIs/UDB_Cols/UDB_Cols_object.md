---
id: UDB_Cols_object
---

# UDB Cols object



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **Cols** object in the UDB object model. This model is for data exchange between USoft web UIs and Rules Engines.
> This model is built around the [udb](/docs/Web%20and%20app%20UIs/UDB%20udb), [DataSourceMetaContainer](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer), [DataSourceContainer](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer), [Rowset](/docs/Web%20and%20app%20UIs/UDB%20Rowset), [Rows](/docs/Web%20and%20app%20UIs/UDB%20Rows), [ColsMeta](/docs/Web%20and%20app%20UIs/UDB%20ColsMeta), and Cols object types. See also [UDB events](/docs/Web%20and%20app%20UIs/UDB%20Events).

A **Cols** object contains a collection of columns.

*Syntax*

```js
$.udb( *ds* ).rows( *rows* ).cols( *cols* )
```

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md). If you omit *ds*, all the data sources in scope are selected.

The optional *rows* is a [row selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer/udbdsrows.md). If you omit *rows,* all the rows in scope are selected.

The optional *cols* is a [column selector](/docs/Web%20and%20app%20UIs/UDB%20ColsMeta/UDB%20ColsMeta%20object.md). If you omit *cols,* all the columns in scope are selected.

*Example*

```js
var v = $.udb('EMP').rows('current').cols('EMPNO');
```

 