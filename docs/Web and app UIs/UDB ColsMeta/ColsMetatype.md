# ColsMeta.type()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **type()** function of the [ColsMeta object](/docs/Web%20and%20app%20UIs/UDB%20ColsMeta).

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

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md). The optional *cols* is a [column selector](/docs/Web%20and%20app%20UIs/UDB%20ColsMeta/UDB%20ColsMeta%20object.md).

*Example*

```js
var colType = $.udbMeta('EMP').cols('EMPLOYEE_ID').type();
```