---
id: udblangtranslate
tags: [USoft11, USoft10]
---
# $.udb.lang.translate()



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

This article is about the **lang.translate()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.lang.translate()**

In a string with variable elements or "markers” that need to be translated depending on the website's current language, provides the translations for these variable elements.

Returns a string.

*Syntax*

```
$.udb.lang.translate( *string-with-markers* )
```

Each marker is represented by the following syntax:

```
{{*marker*}}
```

You need to have supplied this translation in the language tables of USoft Definer, either as Application String or as Message. The name of the translation item must be *marker*.

*Example*

```
$.udb.lang.translate('<div class="box">{{Hello World}}</div>')
```

This example could return this string if the current language is English:

```language-html
<div class="box">Hello World</div>
```

This example could return this string if the current language is Dutch:

```language-html
<div class="box">Hallo Wereld</div>
```


:::warning

**translate****()** is intended only as a dynamic extension of the [standard USoft translation mechanism](/docs/Modeller_and_Rules_Engine/Localising_your_application/Localisation_system_languages_translations_and_regional_settings.md). Rely on that standard mechanism unless you need runtime, on-the-fly translations for custom alerts or HTML controls. Use **translate()** only for the latter.

:::

See also

[$.udb.lang.getTranslation()](/docs/Web_and_app_UIs/UDB_udb/udblanggetTranslation.md)