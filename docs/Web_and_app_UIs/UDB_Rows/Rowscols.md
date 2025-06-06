---
id: Rowscols
---

# Rows.cols()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **cols()** function of the [Rows object](/docs/Web%20and%20app%20UIs/UDB%20Rows).

## **Rows.cols()**

Returns a collection of columns.

*Syntax*

```js
*rows*.cols( *columns* )
```

The optional *columns* is a string or an array identifying one or more columns. If *columns* is not passed, all the columns are returned.

*Example*

```js
var v = $.udb('EMP').rows('current').cols('EMP_NO');
```

The most common purpose of calling this function is to access a specific column value, like so:

```js
var v = $.udb('EMP').rows('current').cols('EMP_NO').val();
```

 