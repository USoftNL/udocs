---
id: Rowsvalues
tags: [USoft11, USoft10]
---
# Rows.values()



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

This article is about the **values()** function of the [Rows object](/Web_and_app_UIs/UDB_Rows).

:::

## **Rows.values()**

Gets or sets one or more values in one or more rows.


:::tip

To address a specific value in a specific row, use Cols.val() instead.

:::

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

*Syntax*

```js
*rows*.values( *values*, *promise* )

*promise*  ::= { true | false }
```

The required *values* is an object that specifies values for one or multiple columns of the row(s) in scope.

If the optional *promise* has the value of 'true' (the default), a Promise object is returned. The .then() clause for this Promise is executed once all Promises created by the function passed to .each() have been settled. If *promise* has the value of 'false', the ‘this’ object (the row sets collection) is returned instead.

*Example*

```js
$.udb('EMP').rows('current').values({NAME: 'JOHNSON', FIRST_NAME: 'PAUL'})
    .each(function() {
        ...
    });
```

 