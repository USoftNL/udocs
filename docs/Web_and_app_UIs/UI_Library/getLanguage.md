---
id: getLanguage
tags: [USoft11, USoft10]
---
# getLanguage()



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

This article covers the **getLanguage()** function as part of the [UI Library](/Web_and_app_UIs/UI_Library).
The UI Library is a mixed bag of Javascript extensions for programming UI controls in USoft web pages. Do not confuse with the structured [UDB object model](/Web_and_app_UIs/UDB_udb/UDB_udb_object.md) for data exchange between USoft web pages and a Rules Engine.

:::

The **getLanguage()** function returns the current language. This is the language that is sent to the Rules Service on every request.

*Syntax*

```js
$.udb.ui.getLanguage()
```

*Example*

```js
var l = $.udb.ui.getLanguage();
```

A possible output of this example is:

```
"en"
```

See also [setLanguage()](/Web_and_app_UIs/UI_Library/setLanguage.md) and [transform()](/Web_and_app_UIs/UI_Library/transform.md).