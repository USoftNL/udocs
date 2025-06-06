---
id: RowsrowId
tags: [USoft11, USoft10]
---
# Rows.rowId()



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

This article is about the **rowId()** function of the [Rows object](/docs/Web_and_app_UIs/UDB_Rows).

:::

## **Rows.rowId()**

Returns the unique row ID of the first record in the collection. If no record is available, undefined is returned.

*Syntax*

```js
*rows*.rowID()
```

*Example*

```js
var id = $.udb('EMP').rows('current').rowId();
```

 