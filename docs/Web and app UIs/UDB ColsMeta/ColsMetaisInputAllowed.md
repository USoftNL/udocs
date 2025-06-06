# ColsMeta.isInputAllowed()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **isInputAllowed()** function of the [ColsMeta object](/docs/Web%20and%20app%20UIs/UDB%20ColsMeta).

## **ColsMeta.isInputAllowed()**

Finds out if new input may be entered for this column. Use this, for example, for a column in an inserted record.

Returns a boolean.

*Syntax*

```js
$.udbMeta( *ds* ).cols( *cols* ).isInputAllowed()
```

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md). The optional *cols* is a [column selector](/docs/Web%20and%20app%20UIs/UDB%20ColsMeta/UDB%20ColsMeta%20object.md).

Function returns true if new input may be entered for this column, false otherwise.

*Example*

```js
if (!updatable && $.udbMeta(this.dsId).cols(this.column).isInputAllowed() &&
     record.isInserted())
    updatable = true;
```

 