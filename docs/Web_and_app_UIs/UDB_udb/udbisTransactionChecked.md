---
id: udbisTransactionChecked
tags: [USoft11, USoft10]
---
# $.udb.isTransactionChecked()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **isTransactionChecked()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

## **$.udb.isTransactionChecked()**

Checks for unchecked manipulations, i.e. manipulations that have not been processed by the server by a .checkData() function call.

Returns a boolean.

*Syntax*

```js
.isTransactionChecked( *context* )
```

The optional *context* indicates the frame context for which the function is called. If you are displaying pages in a FrameControl that has an id value of "ApplicationFrame", then the context for those pages is "ApplicationFrame".

Example

```js
if ($.udb.isTransactionChecked()) {
    //alert the user for unchecked manipulations
}
```

 