---
id: RowskeysString
---

# Rows.keysString()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **keysString()** function of the [Rows object](/docs/Web%20and%20app%20UIs/UDB%20Rows).

## **Rows.keysString()**

Gets the keys string of the first record in the collection.

Returns a key string. If no record is available, undefined is returned.

*Syntax*

```js
*rows*.keysString()
```

*Example*

```js
var ks = $.udb('EMP').rows('current').keyString();
```

 