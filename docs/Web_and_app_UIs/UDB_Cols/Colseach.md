---
id: Colseach
---

# Cols.each()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **each()** function of the [Cols object](/docs/Web%20and%20app%20UIs/UDB%20Cols).

## **Cols.each()**

Iterates the execution of a function over the matched columns.

Returns the 'this' object.

*Syntax*

```js
*cols*.each( *function*( *index*, *column* ) )
```

*Function* is the function that is to be called for each of the matched columns.

*Index* is the array index of the column for which the function is executed. The index is 0-based: the first item has index 0, not 1.

*Column* is the column itself. Effectively, *column* is the same object as returned by 'this'.

*Example*

```js
$.udb('EMP').rows('current').cols().each(function(c){
    alert(c.name());
});
```

 