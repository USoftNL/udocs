---
id: Rowsrsc
---

# Rows.rsc()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **rsc()** function of the [Rows object](/docs/Web%20and%20app%20UIs/UDB%20Rows).

## **Rows.rsc()**

Returns the rowset that the first element in the Rows object is connected to.

This allows you to [execute a query specifically for that row set](/docs/Web%20and%20app%20UIs/UDB%20Rowset/RowsetexecuteQuery.md).

*Examples*

```js
$.udb('TEST').rows("current").rsc();

$.udb('TEST').rows("current").rsc().executeQuery();
```

 