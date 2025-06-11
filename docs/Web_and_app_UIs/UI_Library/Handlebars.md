---
id: Handlebars
tags: [USoft11, USoft10]
---
# Handlebars

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

This article covers **handlebars** as a way of getting USoft UI controls from jQuery expressions. This is part of the [UI Library](/docs/Web_and_app_UIs/UI_Library).
The UI Library is a mixed bag of Javascript extensions for programming UI controls in USoft web pages. Do not confuse with the structured [UDB object model](/docs/Web_and_app_UIs/UDB_udb/UDB_udb_object.md) for data exchange between USoft web pages and a Rules Engine.

:::

USoft Web Designer uses **handlebars** to create HTML within its class factories. Documentation on Handlebars can be found on [http://handlebarsjs.com](http://handlebarsjs.com).

A GUI element normally consists of three parts:

- HTML
- CSS
- JavaScript

The HTML of a GUI element is described in a factory using a technology called handlebars. A compiled handlebar definition is stored in the template member of a factory object and is a function that, when called, returns a string that can be converted into HTML:

```html
<div {{attr "*"}} />
```

It is possible to add extra functionality to the handlebar library. This is done by registering new 'helpers':

```js
Handlebars.registerHelper('*name*', function(*items*, *options*) {...});
```

USoft by default delivers the helpers listed in the table below. For escaping handlebars, see the last item in the list.

- [attr helper](#attr-helper)
- [data helper](#data-helper)
- [lang helper](#lang-helper)
- [now helper](#now-helper)
- [preview helper](#preview-helper)
- [rule helper](#rule-helper)
- [Escaping handlebars](#escaping-handlebars)

## attr helper

The **attr** helper can be used to add attributes to an HTML element. It is capable of converting properties that are set in Web Designer to HTML attributes.

*Syntax*

```js
{{ attr "*"  *name*="*value*" *name*="*value*"...  }}
```

Parameters are optional. The first parameter is allowed to be "*". You can pass any number of *name*="*value*" pairs.

*Example*

```html
<div {{attr "*" class="@useJQueryClasses:ui-widget-content"}}/>
```

The “*” as the first parameter extracts all the WebDesigner properties that can be converted to attributes (e.g. uppercase converts to a class="Uppercase" attribute setting).

The second parameter is a conditional settings. If $.udb.settings.get("useJQueryClasses") translates to a boolean true, the attribute setting class="ui-widget-content" is added.

The following sections contain comments and more examples of how attr adds attributes to the HTML element depending on arguments.

### “*” argument

The **"*”** argument iterates all attributes of a JSON control definition and adds them in the correct attribute to the element. Some attributes are attributes of the element, others are added to the class or style attribute.

The target location can be influenced by another member of the factory called templateOptions.

```js
$.udb.ui.registerControl("MenuControl", null, {
    …
    templateOptions: {
        data: {
            attributes: {
                menuOrientation: function(value, options) {
                    return (value ? {attr: "class", value: value} : undefined);
                }
            }
        }
    },
    …
};
```

### attr="literal" argument

The **attr="literal”** argument adds an attribute with the name 'attr' to the element. The value of the attribute is equal to 'literal'.

```js
{{attr class="mark-record"}}
```

### attr="p.prop" argument

The **attr="p.prop"** argument adds an attribute with the name 'attr' to the element. The value of the attribute will be the value of the corresponding member in the JSON page definition.

```js
{{attr "*" rows="props.size"}}
```

### `attr="[c]:t[:f]"` argument

The **`attr="[c]:t[:f]"`** argument adds an attribute with the name 'attr' to the element. The value of the attribute depends on the outcome of condition c. When the outcome evaluates to true or when no c-part is present the t-part is used, otherwise the f-part.

```js
{{attr "*" class=":tree-node props.childNodes:closed:empty"}}
```

When the c-part start with a '@' the value of an application setting is evaluated.

```js
{{attr "*" class="@useJQueryClasses:ui-widget-content"}}
```

### attr="v1 v2" argument

The **attr="v1 v2"** argument adds an attribute with the name 'attr' to the element. The value of the attribute depends on the evaluation of the separate values. The values are each evaluated as `[c]:t[:f]`.

```js
{{attr class=":record :props.alias"}}
```

## data helper

The **data** helper can be used to incorporate datasource data in strings.

*Applies to*

The **data** helper only applies to **Label** and **Column** controls that are part of a **ReplicatedColumnsControl** or **GridControl**.

*Syntax*

```js
{{ data *datasource*-*columnname* }}
```

*Example*

```html
There are {{data "CNT"}} item(s) to fix.
```

can be converted to:

```html
There are 12 item(s) to fix.
```

## lang helper

The **lang** helper can be used to add text translations to an HTML element. It does this by adding extra HTML elements that secure the original string.

*Syntax*
 

```js
{{lang *string**element-name* }}

*element-name*  ::=  "html"
```

*String* is required. The optional *element-name*, if specified, must be "html".

*Example*

```html
<div>{{lang props.label "html"}}</div>
can be converted to:
<div>
  <script class="lang-start" type="text/html">original text</script>
        translated text
    <script class="lang-end" type="text/html"/>
</div>
```

### Short notation

In most cases USoft supports a short notation:

```js
{{'Example'}} or {{"Example"}}
```

is equivalent for:

```js
{{lang 'Example'}} or {{lang "Example"}}
```

This short notation can be useful within the HTML property of an HTMLControl.

## now helper

The **now** helper can be used to add a date to a website.

*Syntax*

```js
{{ now *date-format* }}
```

*Example*

```html
Copyright by USoft B.V. 1995 – {{now "YYYY"}}
```

can be converted to:

```html
Copyright by USoft B.V. 1995 – 2022
```

## preview helper

The **preview** helper can be used to show design data that is only to be made visible in Web Designer.

*Syntax*

```js
{{#preview}} *content* {{/preview}}
```

*Example*

```html
<iframe>{{#preview}}FrameControl example contents{{/preview}}</iframe>
```

can be converted to:

```html
<iframe>FrameControl example contents</iframe>
```

## rule helper

The **rule** helper can be used to add domain attributes to an HTML element. Domain attributes can be used by domain validators.

*Syntax*

```js
{{ rule "*" }}
```

The "*" parameter is required.

*Example*

```html
<input {{rule "*"}}/>
```

can be converted to:

```html
<input udb-mandatory="true" udb-ioformat="DD-MM-YYYY"/>
```

*Explanation*
The added attributes are used for field validation. The construct iterates over all attributes of a JSON control definition and adds rule attributes depending on whether a rule has been defined for that attribute in the factory definition:

```js
$.udb.ui.registerControl("Control", null, {
    …
    templateOptions: {
        data: {
            rules: {
                mandatory: function(value, options) {
                    return (value ? {rule: "udb-mandatory", value: true} : undefined);
                }
            }
        }
    },
    …
};
```

At this time, rule attributes are supported for mandatory, io-format, domain values and numeric values.

## Escaping handlebars

In some cases you need to be able to preserve the handlebar notation in the HTML that is generated.
Such a situation arises, for example, in combination with attributes. Consider a ButtonControl with the following setting for its title attribute (an Extra HTML Attributes property):

```html
title="Submit (Alt+S)"
```

USoft will generate the following HTML:

```html
<button data-lang-title="Submit (Alt+S)" title="Submit (Alt+S)"> </button>
```

An available translation for ‘Submit’ will not be used in this case because the key string is `Submit (Alt+S)`. The mnemonic part of the string is static and does not have to be part of the key string. This can be in the following way (pay attention to the combination of `{` and `[`):

```html
title="{["Submit"]} (Alt+S)"
```

USoft will generate the following HTML:

```html
<button data-lang-title="{{"Submit"}} (Alt+S)" title="Submit (Alt+S)"> </button>
```
