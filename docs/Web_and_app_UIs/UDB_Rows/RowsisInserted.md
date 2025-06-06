---
id: RowsisInserted
---

# Rows.isInserted()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **isInserted()** function of the [Rows object](/docs/Web%20and%20app%20UIs/UDB%20Rows).

## **Rows.isInserted()**

Checks if the first record in the Rows object is inserted or not.

Returns a boolean.

*Syntax*

```js
rows.isInserted()
```

*Example*

```js
if ($.udb('EMP').rows('current').isInserted()) {
    …
}
```

 