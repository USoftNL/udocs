---
id: udbmainPageName
tags: [USoft11, USoft10]
---
# $.udb.mainPageName()



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

This article is about the **mainPageName()** function of the [udb object](/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.mainPageName()**

Returns a string that is the name of the first page in the page stack currently being browsed:

- If you are on the first page of the stack, this name is identical to the value returned by .currentPageName().
- If you are on a different page than the first page of the stack, this name is different from the value returned by .currentPageName().

If the page currently being browsed is the login page, the name of the default page is returned. This is the value of the StartPage property of the Publication Configuration against which the page was published if you are in a top-level frame context, or else the default page name of the FrameControl.

*Syntax*

```js
.mainPageName( *context* )
```

The optional *context* indicates the frame context for which the function is called. If you are displaying pages in a FrameControl that has an ID value of "ApplicationFrame", then the context for those pages is "ApplicationFrame".

 