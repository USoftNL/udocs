---
id: udbcurrentPageStackDepth
---

# $.udb.currentPageStackDepth()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **currentPageStackDepth()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.currentPageStackDepth()**

Returns the page stack depth. This is the number of pages in the page stack currently being browsed.
If the page stack depth is higher than 1, this usually indicates that a Related Page or a Lookup Page is being browsed.

Use this function, for example, for controls or behavior that are specific to pages that are not the first page in the stack. If the page stack depth is higher than 1, you may have good reason for displaying a 'Back' button, but on page with a page stack equals 1, such a button is not appropriate.

*Syntax*

```js
.currentPageStackDepth( *context* )
```

The optional *context* indicates the frame context for which the function is called. If you are displaying pages in a FrameControl that has an id value of "ApplicationFrame", then the context for those pages is "ApplicationFrame".