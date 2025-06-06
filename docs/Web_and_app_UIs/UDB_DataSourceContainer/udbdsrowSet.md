---
id: udbdsrowSet
---

# $.udb(ds).rowSet()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **rowSet()** function of the [DataSourceContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer).

## **$.udb(ds).rowSet()**

Gets a row set of the data source for a specified parent key.

Returns a [Rowset object](/docs/Web%20and%20app%20UIs/UDB%20Rowset). If parent-key refers to an existing Rowset object in the data source, then the details of this Rowset are returned in a Rowset object. Otherwise, the return value is undefined.

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

The optional *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

The required parent-key must be one of the following:

- The literal string 'current'. This refers to the currently active row set of the data source.
- Any other *key-string* representing the row set's parent key. This must be an exact match to any Rowset object in the data source object in the data layer.
- An object that is a struct specifying one or more parent keys for at least one data source. This object is transformed to the corresponding *key-string* at runtime.

> [!NOTE]
> For more on keys strings, go to the Rowset help topic. See also the Rowset.keysString() function.

*Example*

```js
var rowSet = $.udb('EMP').rowSet('current');
if (rowSet.exists()) {
…
}
```

 