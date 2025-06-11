---
id: udblanggetTranslation
tags: [USoft11, USoft10]
---
# $.udb.lang.getTranslation()



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

This article is about the **lang.getTranslation()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.lang.getTranslation()**

Dynamically gets the translation of a string for the website's current language.

Returns a string.

*Syntax*

```javascript
$.udb.lang.getTranslation( *string*, *parameter-list*... )
```

The required *string* is the string to be translated.

The optional *parameter-list* is an array of variable, non-translated string values that are placed in the translated string at positions indicated by the syntax

```javascript
{{*n*}}
```

using a 1-based index.

*Example*

```javascript
$.udb.lang.getTranslation( "{{1}} records committed", [ "2" ] );
```

This example could return this string if the current language is English:

```
2 records committed.
```

This example could return this string if the current language is Dutch:

```
2 rijen opgeslagen.
```

You need to have supplied this translation in the language tables of USoft Definer, either as Application String or as Message. In the name of the translation item, you can use the `{{n}}` syntax featured above.

If the translation is not found, the input *string* is returned.


:::warning

**getTranslation()** is intended only as a dynamic extension of the [standard USoft translation mechanism](/docs/Modeller_and_Rules_Engine/Localising_your_application/Localisation_system_languages_translations_and_regional_settings.md). Rely on that standard mechanism unless you need runtime, on-the-fly translations for custom alerts or HTML controls. Use **getTranslation()** only for the latter.

:::

See also

[$.udb.lang.translate()](/docs/Web_and_app_UIs/UDB_udb/udblangtranslate.md)