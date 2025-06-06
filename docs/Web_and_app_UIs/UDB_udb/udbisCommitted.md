---
id: udbisCommitted
tags: [USoft11, USoft10]
---
# $.udb.isCommitted()



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

This article is about the **isCommitted()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.isCommitted()**

Checks for uncommitted manipulations, i.e. manipulations that have not committed to the database.

Returns a boolean.

*Syntax*

```js
.isCommitted( *context* )
```

The optional *context* indicates the frame context for which the function is called. If you are displaying pages in a FrameControl that has an Id value of "ApplicationFrame", then the context for those pages is "ApplicationFrame".

*Example*

```js
if (!$.udb.isCommitted()) {
 //alert the user for uncommitted manipulations
}
```

 