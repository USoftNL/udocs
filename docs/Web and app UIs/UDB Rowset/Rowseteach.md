# Rowset.each()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **each()** function of the [Rowset object](/docs/Web%20and%20app%20UIs/UDB%20Rowset/UDB%20Rowset%20object.md).

## **Rowset.each()**

Iterates the execution of a function for each row set contained in the Rowset object.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

*Syntax*
 

```js
*row-set*.each( function ( *index*, *row-set* ), *promise* )

*promise*    ::= { true | false }
```

The required *function* is the function to be executed.

The optional *index* is the index key of the item in the rowset collection for which the function is executed. The index is 0-based: the first item has index 0, not 1.

The optional *row-set* is the row set itself. Effectively, this is the same object as returned by 'this'.

If the optional *promise* has the value of 'true' (the default), a Promise object is returned. The .then() clause for this Promise is executed once all Promises created by the function passed to .each() have been settled. If promise has the value of 'false', the ‘this’ object is returned instead.

*Example*

This example shows the use of 'this' rather than the use of the index and rs parameters. For each of the specified rowsets, two actions are executed, of which the second is applied recursively to each record:

```js
$.udb(["DEPT","EMP"]).rowSet('queried').each(
    function() {
        console.log(this.keysString());
        this.rows().each(function() {
            console.log(this.cols('NAME').val() );
            }
        }
);
```

 