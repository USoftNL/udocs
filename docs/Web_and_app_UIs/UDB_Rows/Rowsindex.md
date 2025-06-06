---
id: Rowsindex
tags: [USoft11, USoft10]
---
# Rows.index()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **index()** function of the [Rows object](/docs/Web_and_app_UIs/UDB_Rows).

## **Rows.index()**

Gets the the index value of the first row in the Rows object. If no record is available, -1 is returned.

Returns an index number.

> [!WARNING]
> The index is 0-based: the first item has index 0, not 1.

*Syntax*

```js
*rows*.index()
```

*Example*

```js
var ri = $.udb('EMP').rows('current').index();
```

 