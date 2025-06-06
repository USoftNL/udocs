# transform()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article covers the **transform()** function as part of the [UI Library](/docs/Web%20and%20app%20UIs/UI%20Library).
> The UI Library is a mixed bag of Javascript extensions for programming UI controls in USoft web pages. Do not confuse with the structured [UDB object model](/docs/Web%20and%20app%20UIs/UDB%20udb/UDB%20udb%20object.md) for data exchange between USoft web pages and a Rules Engine.

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

```language-html
<label>
    <script class="lang-start" type="text/html">Example</script>
        Voorbeeld
    <script class="lang-end" type="text/html"/>
</label>
```

See also [getLanguage()](/docs/Web%20and%20app%20UIs/UI%20Library/getLanguage.md) and [setLanguage()](/docs/Web%20and%20app%20UIs/UI%20Library/setLanguage.md).