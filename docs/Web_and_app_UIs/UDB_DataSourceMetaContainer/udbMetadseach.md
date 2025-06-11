---
id: udbMetadseach
tags: [USoft11, USoft10]
---
# $.udbMeta(ds).each()



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

This article is about the **each()** function of the [DataSourceMetaContainer object](/Web_and_app_UIs/UDB_DataSourceMetaContainer).

:::

## **$.udbMeta(ds).each()**

Iterates the execution of a function over a set of matched data sources.

Returns the 'this' object.

*Syntax*

```js
$.udbMeta( *ds* ).each( *function*( *index*, *object* ) )
```

The required *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Function* is the function that is to be called for each of the matched data sources.

*Index* is the array index of the object for which the function is executed. This index is 0-based.

*Object* is the object itself. Effectively, object is the same object as returned by 'this'.

*Example*

```js
$.udbMeta(['EMP','DEPT']).cols().each(function(index,colsMeta){});
```

 