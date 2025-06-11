---
id: USoft_controls_from_jQuery_udbControl
tags: [USoft11, USoft10]
---
# USoft controls from jQuery: udbControl()



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

This article covers **udbControl()** as a way of getting USoft UI controls from jQuery expressions. This is part of the [UI Library](/Web_and_app_UIs/UI_Library).
The UI Library is a mixed bag of Javascript extensions for programming UI controls in USoft web pages. Do not confuse with the structured [UDB object model](/Web_and_app_UIs/UDB_udb/UDB_udb_object.md) for data exchange between USoft web pages and a Rules Engine.

:::

From a jQuery expression that selects elements, you can get the USoft UI control object associated with the selected HTML element by calling the **udbControl()** function.

Not all objects selectable through a jQuery expression objects have a USoft UI control object associated with it: objects may alternatively be associated with custom or dynamic HTML elements inserted in the page, or they may correspond to HTML elements that are child elements of a USoft UI control object.

To find out if an HTML element has a USoft UI control associated with it, check if it has a class named by the concatenation of the letters "ui" and the name of the control. For a button control this would be “uiButtonControl”, and for a GridControl this would be “uiGridControl”. Once you have this class, you can make a jQuery object from it, and call **.udbControl()**:

```js
var $button = $(".uiButtonControl");
var control = $button.udbControl();
```

The **.udbControl()** function can also take parameters, so that it can return properties from the USoft UI control object and return their values, or so that it can call internal functions of it and return the function result.

The **.udbControl()** function returns the associated USoft UI control object, or its corresponding property values or function results.

*Syntax*

```js
.udbControl( *arguments* )

*arguments[0]*   ::=  *string*
```

*Arguments* is an optional list of values of which the first, if used, must be a string value. If you call the function without arguments, it returns the entire USoft UI control object. If you call the function with one argument, it will look up if a property or function with that name if any exists. If a function is found, the function gets executed, with any further argument you supplied to the **.udbControl()** call passed in, and the function results are returned. If a property is found, the associated value is returned.

The properties and functions available on USoft UI control objects are different for each control. You can inspect which properties and functions are available by calling the **.udbControl()** function on the control object without arguments.

*Examples*

```js
var $dia = $(".uiDialogControl");
var control = $dia.udbControl();
control.close();
var $dia = $(".uiDialogControl");
$dia.udbControl("close");
var $tabs = $(".uiTabsControl");
$tabs.udbControl("disableTab", 3);
```

 