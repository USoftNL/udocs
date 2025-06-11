---
id: udbtitle
tags: [USoft11, USoft10]
---
# $.udb.title()



----

`USoft 11``{.vs_11}`


:::danger

This article describes the USoft 10 product only.
In USoft 11, the web UI API was revised and improved. For full details, go to:
[Revised web UI API in USoft 11](/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

:::

----

`USoft 10``{.vs_10}`

## **$.udb.title()**

Gets or sets the title displayed on the tab of the browser.

Returns a string representing the current (the "old") title.

*Syntax*

```js
.title( *title* )
```

The optional *title* is a new value that the browser tab title is set to.

*Example*

```js
$.udb.title('My app');
```

 