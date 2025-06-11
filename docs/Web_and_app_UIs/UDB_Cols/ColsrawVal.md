---
id: ColsrawVal
tags: [USoft11, USoft10]
---
# Cols.rawVal()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`


:::note

This article is about the **rawVal()** function of the [Cols object](/Web_and_app_UIs/UDB_Cols).

:::

## **Cols.rawVal()**

Returns the unformatted value (no IO formats applied) for the first column.

*Syntax*

```js
*cols*.rawVal()
```

*Example*

```js
var realVal = $.udbMeta('EMP').rows('current').cols('POSTAL_CODE').rawVal();
```

 