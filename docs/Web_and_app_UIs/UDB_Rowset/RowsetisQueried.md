---
id: RowsetisQueried
---

# Rowset.isQueried()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **isQueried()** function of the [Rowset object](/docs/Web%20and%20app%20UIs/UDB%20Rowset/UDB%20Rowset%20object.md).

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

 