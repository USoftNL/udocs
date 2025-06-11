---
id: Rowscols
tags: [USoft11, USoft10]
---
# Rows.cols()



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

This article is about the **cols()** function of the [Rows object](/Web_and_app_UIs/UDB_Rows).

:::

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

 