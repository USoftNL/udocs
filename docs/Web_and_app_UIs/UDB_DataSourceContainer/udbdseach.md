---
id: udbdseach
tags: [USoft11, USoft10]
---
# $.udb(ds).each()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **each()** function of the [DataSourceContainer object](/docs/Web_and_app_UIs/UDB_DataSourceContainer).

## **$.udb(ds).each()**

Iterates the execution of a function over the matched data sources.

Returns the 'this' object.

*Syntax*

```js
$.udb( *ds* ).each( *function*( *index*, *object* ) )
```

The optional *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Function* is the function that is to be called for each of the matched data sources.

*Index* is the array index of the object for which the function is executed. This index is 0-based.

*Object* is the object itself. Effectively, *object* is the same object as returned by 'this'.

*Example*

```js
$.udb(['EMP','DEPT']).each(function(index, ds){
    ds.executeQuery();
});
```

 