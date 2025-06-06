---
id: Rowskeys
tags: [USoft11, USoft10]
---
# Rows.keys()



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

This article is about the **keys()** function of the [Rows object](/docs/Web_and_app_UIs/UDB_Rows).

:::

## **Rows.keys()**

Gets the key-value mapping of the record.

Returns a key-value string mapping.

*Syntax*

```js
*rows*.keys()
```

*Example*

```js
var ks = $.udb('EMP').rows('current').keys();
for (var k in ks) alert(k+='='+ks[k]);
```

 