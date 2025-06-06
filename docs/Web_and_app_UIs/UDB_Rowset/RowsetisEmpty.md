---
id: RowsetisEmpty
tags: [USoft11, USoft10]
---
# Rowset.isEmpty()



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

This article is about the **isEmpty()** function of the [Rowset object](/docs/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md).

:::

## **Rowset.isEmpty()**

Checks whether or not the row set contains any records. This information can then be used to determine if records must be displayed.

Returns a boolean.

*Syntax*

```js
*row-set*.isEmpty()
```

*Example*

```js
var ds = $.udb("EMP");
var rowCount;
if (ds.rowSet('current').isEmpty())
    ds.executeQuery();

rowCount = ds.rowSet('current').rowCount();
```

 