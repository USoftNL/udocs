---
id: udbisTransactionChecked
---

# $.udb.isTransactionChecked()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **isTransactionChecked()** function of the [udb object](/docs/Web%20and%20app%20UIs/UDB%20udb).

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

 