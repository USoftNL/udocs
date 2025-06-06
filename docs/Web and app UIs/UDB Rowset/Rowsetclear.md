# Rowset.clear()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **clear()** function of the [Rowset object](/docs/Web%20and%20app%20UIs/UDB%20Rowset).

## **Rowset.clear()**

Clears all rows from the row set.

Returns the 'this' object.

*Syntax*

```js
*row-set*.clear()

```

*Example*

```js
$.udb().each(
    function(index, ds) {
        $.udb(ds).rowSet('current').clear();
    }
);

```

 