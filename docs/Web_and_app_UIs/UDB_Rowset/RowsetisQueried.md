---
id: RowsetisQueried
tags: [USoft11, USoft10]
---
# Rowset.isQueried()



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

This article is about the **isQueried()** function of the [Rowset object](/docs/Web_and_app_UIs/UDB_Rowset/UDB_Rowset_object.md).

:::

## **Rowset.isQueried()**

Checks whether or not the row set has been queried for records. This information can then be used to determine e.g. whether or not to query the row set.

Returns a Boolean.

*Syntax*

```js
*row-set*.isQueried()
```

*Example*

```js
var ds = $.udb("EMP");
if (ds.initialState() === "Query" && ds.rowSet('current').isQueried()) {
    ds.executeQuery();
}
```

 