---
id: udbcurrentPageNavigationSource
---

# $.udb.currentPageNavigationSource()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **currentPageNavigationSource()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.currentPageNavigationSource()**

Returns a string that is the navigation action name that caused the current page to be displayed (for example: closePage, navigateTo).

*Syntax*

```js
.currentPageNavigationSource( *context* )
```

The optional *context* parameter indicates the frame context for which the function is called. If you are displaying pages in a FrameControl that has an id value of "ApplicationFrame", then the context for those pages is "ApplicationFrame".