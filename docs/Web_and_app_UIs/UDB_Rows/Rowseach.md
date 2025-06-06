---
id: Rowseach
tags: [USoft11, USoft10]
---
# Rows.each()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **each()** function of the [Rows object](/docs/Web_and_app_UIs/UDB_Rows).

:::

## **Rows.each()**

Iterates the execution of a function for each row contained in the Rows object.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

*Syntax*

```js
*rows*.each( *function* ( *index*, *row* ), *promise* )

```

*promise*    ::= { true \| false }

The required *function* is the function to be executed.

The optional *index* is the index key of the item in the rowset collection for which the function is executed.


:::warning

The index is 0-based: the first item has index 0, not 1.

:::

The optional *row* is the row itself. Effectively, this is the same object as returned by 'this'.

If the optional *promise* has the value of 'true' (the default), a Promise object is returned. The .then() clause for this Promise is executed once all Promises created by the function passed to .each() have been settled. If *promise* has the value of 'false', the ‘this’ object (the row sets collection) is returned instead.

*Example*

```js
$.udb('EMP').rows().each(function(index, r){
    alert(r.cols('EMP_NO').val());
});
```

 