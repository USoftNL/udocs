---
id: RowsetexecuteQuery
tags: [USoft11, USoft10]
---
# Rowset.executeQuery()



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

This article is about the **executeQuery()** function of the [Rowset](/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md) object.

:::

## **Rowset.executeQuery()**

Executes a query specifically for the rowset. Existing queried data (if any) is cleared before the query is executed.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

*Syntax*

```js
$.*row-set*.executeQuery( *options* )

*options*  ::=  {
     hostvars:  *hostvars*,
     nocheck:  *nocheck*,
     orderBy:  *order-by*,
     before:  *before-function*,
     promise:  *promise*,
     success:  *success-function*,
     error:  *error-function*
}

*hostvars*        ::=  { *name* : *value*, ... }

*nocheck*         ::=  { true | false }

*order-by*        ::=  *order-col*, ...
*order-col*       ::=  { *col-name* | *col-sort-order* }
*col-sort-order*  ::=  { *col-name* : *sort-order* }
*sort-order*      ::=  { ASC | DESC }

*promise*         ::=  { true | false }
```

For an explanation of options, please go to the [$.udb(ds).executeQuery()](/Web_and_app_UIs/UDB_DataSourceContainer/udbdsexecuteQuery.md) article.

*Example*

```js
var rowSet = $.udb(this.dsId).rowSet(pRef);
rowSet.executeQuery().then(function() {
  ...
});
```