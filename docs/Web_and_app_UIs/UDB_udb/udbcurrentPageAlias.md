---
id: udbcurrentPageAlias
tags: [USoft11, USoft10]
---
# $.udb.currentPageAlias()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **currentPageAlias()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

## **$.udb.currentPageAlias()**

Returns the page alias assigned by Web Designer to the embedded page currently being browsed, that is, the embedded page within which the current script is being executed.

An embedded page is a Page control that has been dragged into another Page control or one of its child objects in the Web Designer.

A page alias is a code such as DS62. You can view page aliases on the JSON tab in Web Designer when the page is opened.

If FrameControls are used, then there can be an overlap of embedded page names in the display structure; in such cases, therefore, the frame context needs to be specified.

*Syntax*

```js
$.udb.currentPageAlias( *context* )
```

The optional *context *indicates the frame context for which the function is called. If you are displaying pages in a FrameControl that has an id value of "ApplicationFrame", then the context for those pages is "ApplicationFrame".