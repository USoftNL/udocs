---
id: udbMetadsisDistinct
---

# $.udbMeta(ds).isDistinct()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **isDistinct()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).

## **$.udbMeta(ds).isDistinct()**

Detects whether the SELECT output list of the first data source in the container contains the DISTINCT operator, or not.

Returns a boolean.

*Syntax*

```js
$.udbMeta( *ds* ).isDistinct()
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

*Example*

```js
var distinct = $.udbMeta('EMP').isDistinct();
```

 