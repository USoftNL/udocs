---
id: RowskeysString
tags: [USoft11, USoft10]
---
# Rows.keysString()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **keysString()** function of the [Rows object](/docs/Web_and_app_UIs/UDB_Rows).

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

 