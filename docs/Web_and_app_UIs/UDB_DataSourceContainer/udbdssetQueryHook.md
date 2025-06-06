---
id: udbdssetQueryHook
---

# $.udb(ds).setQueryHook()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **setQueryHook()** function of the [DataSourceContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer).

## **$.udb(ds).setQueryHook()**

Specifies a function used for each search column condition that has been set, and the actual search value used as search condition. This can be used, for example, to add wildcards for text field search conditions.

*Syntax*

```js
$.udb( *ds* ).setQueryHook( function( *column-reference*, *search-value* ) )
```

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

*Column-reference* is a valid reference to a column, i.e. a name or its alias. *Search-value*­ is the actual value of the search condition.

*Example*

```js
var dsc =  $.udb('EMP');
dsc.setQueryHook(function(colRef, value) {
    if (!dsc.cols(colRef).getLookups().length)
      return '%' + value + '%';
    else
      return value;
});
```

 