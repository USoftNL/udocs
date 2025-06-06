---
id: getLanguage
---

# getLanguage()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article covers the **getLanguage()** function as part of the [UI Library](/docs/Web%20and%20app%20UIs/UI%20Library).
> The UI Library is a mixed bag of Javascript extensions for programming UI controls in USoft web pages. Do not confuse with the structured [UDB object model](/docs/Web%20and%20app%20UIs/UDB%20udb/UDB%20udb%20object.md) for data exchange between USoft web pages and a Rules Engine.

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

See also [setLanguage()](/docs/Web%20and%20app%20UIs/UI%20Library/setLanguage.md) and [transform()](/docs/Web%20and%20app%20UIs/UI%20Library/transform.md).