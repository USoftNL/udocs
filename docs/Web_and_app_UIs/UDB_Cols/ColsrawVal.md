---
id: ColsrawVal
---

# Cols.rawVal()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **rawVal()** function of the [Cols object](/docs/Web%20and%20app%20UIs/UDB%20Cols).

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

 