---
id: udbgetEmbeddedPageName
tags: [USoft11, USoft10]
---
# $.udb.getEmbeddedPageName()



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

This article is about the **getEmbeddedPageName()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.getEmbeddedPageName()**

Returns, on the basis of a page alias, the name of a page embedded in the page being browsed.
An embedded page is a Page control that has been dragged into another Page control or one of its child objects in the Web Designer.

This function requires that the page alias is already known. If FrameControls are used, then there can be an overlap of embedded page names in the display structure; in such cases, therefore, the frame context needs to be specified.

*Syntax*

```js
.getEmbeddedPageName( *alias*, *context* )
```

The required *alias* is the page alias assigned by Web Designer to the target embedded page. This alias is a code such as P105.

The optional *context *indicates the frame context for which the function is called. If you are displaying pages in a FrameControl that has an id value of "ApplicationFrame", then the context for those pages is "ApplicationFrame".