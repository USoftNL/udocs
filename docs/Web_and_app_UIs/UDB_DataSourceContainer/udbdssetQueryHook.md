---
id: udbdssetQueryHook
tags: [USoft11, USoft10]
---
# $.udb(ds).setQueryHook()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **setQueryHook()** function of the [DataSourceContainer object](/Web_and_app_UIs/UDB_DataSourceContainer).

:::

## **$.udb(ds).setQueryHook()**

Specifies a function used for each search column condition that has been set, and the actual search value used as search condition. This can be used, for example, to add wildcards for text field search conditions.

*Syntax*

```js
$.udb( *ds* ).setQueryHook( function( *column-reference*, *search-value* ) )
```

The optional *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

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

 