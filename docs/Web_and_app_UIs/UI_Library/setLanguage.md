---
id: setLanguage
tags: [USoft11, USoft10]
---
# setLanguage()



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

This article covers the **setLanguage()** function as part of the [UI Library](/docs/Web_and_app_UIs/UI_Library).
The UI Library is a mixed bag of Javascript extensions for programming UI controls in USoft web pages. Do not confuse with the structured [UDB object model](/docs/Web_and_app_UIs/UDB_udb/UDB_udb_object.md) for data exchange between USoft web pages and a Rules Engine.

:::

The **setLanguage()** function sets the current language. This is the language that is sent to the Rules Service on every request.

Also translates all the possible strings in the DOM for which it has a translation.

*Syntax*

```js
$.udb.ui.setLanguage( { *language* | *language*, *$target* } )
```

You must pass a single parameter which is either *language* by itself or an expression with *$target*.
*Language* is the language code defined in USoft Definer, which is preferably an ISO 639-1 language code such as "en" or "nl".

The optional *$target* has a required first character which is the '$' symbol. It is a jQuery expression referring to the part of the DOM that must be translated into language. *$target* provides the context or the part of the DOM that is to be translated and/or refreshed. If you provide only *$target* and not *language,* this part of the DOM is only refreshed.

Changing the language also translates the website when translations are provided.

*Examples*

```js
$.udb.ui.setLanguage( "en" );

$.udb.ui.setLanguage( "en", $("button, input[type="button"]") );

$.udb.ui.setLanguage( $("button, input[type="button"]") );
```

## JSON files

Translations are stored in USoft Definer in the ´Used application Strings´ table. They are exported to a file named

```
\WebSite\lang\language.json
```

each time you publish in Web Designer.  For each declared language a separate file is created. The same process also downloads a file called

```
\WebSite\lang\language.alt.json
```

This file is not generated but can be edited by the developer manually. When the current language changes, the web client downloads the corresponding JSON files.

## Key is preserved during translation

USoft web client inserts extra HTML to preserve the original string to translate: the key. For node content, this will result in the following construction:

```html
<script class="lang-start" type="text/html">key-text</script>
    translated-text
<script class="lang-end" type="text/html"/>
```

The part between the `<script>` tags, ie., translated-text, is the part that is replaced when the language changes. The `<script>` tags themselves are not visible in the browser.

When the part that needs to be translated is not an HTML-node but an attribute, **a data-lang attribute** is used:

|**Attribute**|**Data-lang attribute**|
|--------|--------|
|alt     |data-lang-alt|
|placeholder|data-lang-placeholder|
|title   |data-lang-title|
|value   |data-lang-value|

When USoft detects any of the above attributes without a corresponding data-lang equivalent, it assumes that the attribute contains the key string. USoft will create the data-lang equivalent with the key string as value.

## Showing and hiding language-specific blocks

It is also possible to show/hide an entire block. When an element has a data-lang attribute (see previous section in this help topic) with a language code as its value, the block is only visible when the value matches the language setting.

```html
<div data-lang="en">English text</div>
<div data-lang="nl">Nederlandse tekst</div>
```

## Markers

The mechanism behind the ability to translate pages is that the factories surround parts of the DOM that can be translated with markers:

```html
<script class="lang-start text" type="text/html">original-content</script>
  translated-content
<script class="lang-end" type="text/html"></script>
```

The part between the `<script>` tags, ie., translated-content, is the part that is replaced when the language changes. The `<script>` elements themselves are not visible in the browser.

This technique is comparable to the mechanism described in the "Key is preserved during translation" section earlier in this help topic. See that section for the use of `data-lang-...` attributes.