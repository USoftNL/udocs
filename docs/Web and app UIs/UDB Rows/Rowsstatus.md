# Rows.status()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **status()** function of the [Rows object](/docs/Web%20and%20app%20UIs/UDB%20Rows).

## **Rows.status()**

Returns a string representing the status of the record. If the record is newly inserted, then "inserted" is returned. If an update has been done, then "updated" is returned. Otherwise, the empty string is returned.

Syntax

```js
*rows*.status()
```

*Example*

```js
var unchanged = $.udb('EMP').rows('current').status() == '';
```

 