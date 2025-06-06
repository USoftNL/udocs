---
id: ColsMetalabel
---

# ColsMeta.label()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **label()** function of the [ColsMeta object](/docs/Web%20and%20app%20UIs/UDB%20ColsMeta).

> [!WARNING]
> This function is now obsolete. Prefer [ColsMeta.prompt()](/docs/Web%20and%20app%20UIs/UDB%20ColsMeta/ColsMetaprompt.md).

## **ColsMeta.label()**

Returns this column's prompt. This is determined by the "Prompt" column attribute in USoft Definer.

Returns a string.

*Syntax*

```js
$.udbMeta( *ds* ).cols( *cols* ).label()
```

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md). The optional *cols* is a [column selector](/docs/Web%20and%20app%20UIs/UDB%20ColsMeta/UDB%20ColsMeta%20object.md).

*Example*

```js
var label = $.udbMeta('EMP').cols('EMPNO').label();
```

 