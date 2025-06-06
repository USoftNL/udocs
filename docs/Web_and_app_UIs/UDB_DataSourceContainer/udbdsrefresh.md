---
id: udbdsrefresh
tags: [USoft11, USoft10]
---
# $.udb(ds).refresh()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **refresh()** function of the [DataSourceContainer object](/docs/Web_and_app_UIs/UDB_DataSourceContainer).

## **$.udb(ds).refresh()**

Refreshes the current data set. All other data sets of the data source become invalidated, and will be requeried when viewed again.

Any inserted (but not committed) records will be moved to the current data set. Any gaps left by deleted (but not committed) records will be filled up.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

*Syntax*
 

```js
$.udb( *ds* ).refresh( *options* )

*options*    ::=  {
      current:  *current*,
      condition: *condition*,
      promise:  *promise*,
      success:  *success-function*,
      error:  *error-function*
}

*current*    ::= { true | false }
*promise*    ::= { true | false }
```

The optional *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Options* is a struct that can have the following items, all of which are optional.

*Condition* is a search condition that identifies the subset of rows that you want to be refreshed. See Example 2. The result of this "refresh" action is that the client will have the same records and the same values in these records as the server.

> [!WARNING]
> This is not the same as refreshing a subset of rows already present on the client; use the .refresh() function of the Rows object for that.

If *current* is set to 'true', only the currently shown data set is refreshed. If it is set to 'false' (the default), the entire data source is refreshed.

*Promise *determines the return value of this function. If *promise* has the value of 'true' (the default), a Promise object is returned. If *promise* has the value of 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the data was processed on the client.

*Error-function* is a function called if an error occurs.

*Example 1*

```js
$.udb('EMP').refresh();
```

*Example 2*

```js
$.udb('EMP').refresh( condition: { BIRTHDAY: ">=01-JAN-1980" } );
```

*Example 3*

```js
$.udb('EMP').refresh().then(function() {
    ...
});
```

## Related events

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|[beforerefresh](/docs/Web_and_app_UIs/UDB_Events/beforerefresh.md)|Data source objects|Before a data source is refreshed|



 