---
id: udbMetadshasChild
---

# $.udbMeta(ds).hasChild()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **hasChild()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).

## **$.udbMeta(ds).hasChild()**

Detects whether a given data source is a direct child data source in the current scope, or whether it is a descendent data source.

Returns a boolean.

*Syntax*

```js
$.udbMeta( *ds* ).hasChild( *data-source*, *recursive* )

*recursive*  ::=  { true | false }
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

The required *data-source* identifies the data source to search for. Use [data source path syntax](/docs/Web%20and%20app%20UIs/Data%20sources/Data%20source%20path%20syntax.md) to refer to data sources.

If the optional *recursive* is set to false (the default), the search is for direct children only. If *recursive* is true, the search is for children at any descendent level, for example, grandchildren.

*Example*

```js
var isRelated = $.udb('COMP').hasChild('DEPT');
```

 