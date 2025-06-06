# $.udb.currentPageName()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **currentPageName()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.currentPageName()**

Returns the name of the page currently being browsed. Of interest, for example, if you use the same controls in multiple places but not quite in the same way, so that behavior is part dependent on which page you are in.

If the page currently being browsed is the login page, the value of the default page is returned. This is the value of the StartPage property of the Publication Configuration against which the page was published if you are in a top-level frame context, or else the default page name of the FrameControl.

*Syntax*

```js
.currentPageName( *context* )
```

The optional *context* parameter indicates the frame context for which the function is called. If you are displaying pages in a FrameControl that has an id value of "ApplicationFrame", then the context for those pages is "ApplicationFrame".