# Rows.values()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **values()** function of the [Rows object](/docs/Web%20and%20app%20UIs/UDB%20Rows).

## **Rows.values()**

Gets or sets one or more values in one or more rows.

> [!TIP]
> To address a specific value in a specific row, use Cols.val() instead.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

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

 