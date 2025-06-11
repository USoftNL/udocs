---
id: udbdsrowSet
tags: [USoft11, USoft10]
---
# $.udb(ds).rowSet()



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

This article is about the **rowSet()** function of the [DataSourceContainer object](/Web_and_app_UIs/UDB_DataSourceContainer).

:::

## **$.udb(ds).rowSet()**

Gets a row set of the data source for a specified parent key.

Returns a [Rowset object](/Web_and_app_UIs/UDB_Rowset). If parent-key refers to an existing Rowset object in the data source, then the details of this Rowset are returned in a Rowset object. Otherwise, the return value is undefined.

*Syntax*

```js
$.udb( *ds* ).rowSet( *parent-key* )

*parent-key*  ::=  { current | *key-string* | *key-object* }

*key-object*  ::=  {
*data-source-id* : {
*key-column* : *value*,
        ...
  },
  ...
}
```

The optional *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

The required parent-key must be one of the following:

- The literal string 'current'. This refers to the currently active row set of the data source.
- Any other *key-string* representing the row set's parent key. This must be an exact match to any Rowset object in the data source object in the data layer.
- An object that is a struct specifying one or more parent keys for at least one data source. This object is transformed to the corresponding *key-string* at runtime.


:::note

For more on keys strings, go to the Rowset help topic. See also the Rowset.keysString() function.

:::

*Example*

```js
var rowSet = $.udb('EMP').rowSet('current');
if (rowSet.exists()) {
…
}
```

 