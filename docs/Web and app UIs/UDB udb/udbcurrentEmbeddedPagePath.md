# $.udb.currentEmbeddedPagePath()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **currentEmbeddedPagePath()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

## **$.udb.currentEmbeddedPagePath()**

Returns the full path leading to the embedded page currently being browsed, that is, the embedded page within which the current script is being executed.

An embedded page is a Page control that has been dragged into another Page control or one of its child objects in the Web Designer.

If FrameControls are used, then there can be an overlap of embedded page names in the display structure; in such cases, therefore, the frame context needs to be specified.

*Syntax*

```js
$.udb.currentEmbeddedPagePath( *context* )
```

The optional *context *indicates the frame context for which the function is called. If you are displaying pages in a FrameControl that has an id value of "ApplicationFrame", then the context for those pages is "ApplicationFrame".