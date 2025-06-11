---
id: transform
tags: [USoft11, USoft10]
---
# transform()



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

This article covers the **transform()** function as part of the [UI Library](/Web_and_app_UIs/UI_Library).
The UI Library is a mixed bag of Javascript extensions for programming UI controls in USoft web pages. Do not confuse with the structured [UDB object model](/Web_and_app_UIs/UDB_udb/UDB_udb_object.md) for data exchange between USoft web pages and a Rules Engine.

:::

The **transform()** function converts a string of handlebar pseudo-code to HTML that can be translated. This can be convenient in client scripts.

*Syntax*

```js
$.udb.ui.transform( *handlebar-pseudo-code* )
```

*Example*

```js
var s = $.udb.ui.transform("<label>{{'Example'}}</label>");
```

A possible output of this example is:

```html
<label>
    <script class="lang-start" type="text/html">Example</script>
        Voorbeeld
    <script class="lang-end" type="text/html"/>
</label>
```

See also [getLanguage()](/Web_and_app_UIs/UI_Library/getLanguage.md) and [setLanguage()](/Web_and_app_UIs/UI_Library/setLanguage.md).