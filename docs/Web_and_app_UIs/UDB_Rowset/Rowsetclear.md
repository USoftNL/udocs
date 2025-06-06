---
id: Rowsetclear
tags: [USoft11, USoft10]
---
# Rowset.clear()



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

This article is about the **clear()** function of the [Rowset object](/docs/Web_and_app_UIs/UDB_Rowset).

:::

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

 