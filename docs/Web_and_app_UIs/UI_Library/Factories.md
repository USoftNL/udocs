---
id: Factories
tags: [USoft11, USoft10]
---
# Factories



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

This article covers **factories** as part of the [UI Library](/Web_and_app_UIs/UI_Library).
The UI Library is a mixed bag of Javascript extensions for programming UI controls in USoft web pages. Do not confuse with the structured [UDB object model](/Web_and_app_UIs/UDB_udb/UDB_udb_object.md) for data exchange between USoft web pages and a Rules Engine.

:::

## Factories

GUI elements are created by **factories**. Every GUI element has its own factory. A factory is a JavaScript object that must at least have some mandatory members. Factories can be derived from other factories. There is one abstract factory that is the superclass of all factories: Control. The Control factory is defined in the file usoft.ui.js. The Control factory provides the foundation for control creation.

The factories for all other GUI elements are defined in the file usoft.ui.controls.js. There is no need but it is also not desired to alter the file usoft.ui.controls.js. Changes or new factory definitions can be written in a new JavaScript file and/or the CustScript.js file.

## registerControl()

To alter an existing factory or to create a new factory, use the registerControl() function.

This function returns nothing.

The call syntax is:

```js
.registerControl( *name*, *super-class-name*, *definition* )
```

*Name* is the name of a factory. Only when *name* is equal to the name of an existing control, the definition of that control is overridden.

*Super-class-name* is a string that identifies an existing superclass factory. *Super-class-name* may be null, in which case the factory is derived from Control.

*Definition* is an object that specifies the changes when compared to the superclass.

*Example*

```js
$.udb.ui.registerControl("MyControl", null, {...});
```

## Creating a new control factory

To create a new control factory and make it known by the application, use the method mentioned above. The name given as the first parameter must be unique, and match the 'XML Tag Name' property for that control in the Web Designer. The factory inherits all the functionality of the factory mentioned in the second parameter. For the third parameter pass an object that overrides those parts that must be altered.

It is possible to call functionality from the superclass. The **this** variable in functions of a factory always refer to the factory object and has a member **super**.

```js
$.udb.ui.registerControl("MyButtonControl", "ButtonControl", {
    render: function($target, propsChild, master) {
        var $el = this.super.render.call(this, $target, propsChild, master);
        …
    }
});
```

To use this button in your application, you must change the 'XML Tag Name' property to the value 'MyButtonControl' in the Web Designer, and it will use this new factory instead of the default 'ButtonControl' factory.

## Changing an existing control factory

To alter an existing factory use the same mechanism as described in the previous paragraph. In this case, however, use the **modifyControl()** method:

```js
To alter an existing factory use the same mechanism as described in the previous paragraph. In this case, however, use the method modifyControl():
$.udb.ui.modifyControl("ButtonControl", {
	render: function($target, propsChild, master) {
		// My implementation
	}
});
```

## Factory members

When creating or changing control factories, the following members are available to you because they are inherited from a superclass:

```js
$.udb.ui.defs["Control"].prototype = {


  /* Contains reference to the DOM after rendering */
  $control: null,


  /* Object that contains settings that are used by the HandleBars functionality */
  templateOptions: {…},


  /* Reference to the page JSON that contains the description of the control */
  definitions: null,


  /* Object that contains the event definitions for the control */
  events: {…},


  /* Function that applies box properties to the control */
  setBoxProperties: function($el, def) {…},


  /* Function that binds events to the control */
  setEvents: function($e, events, options) {…},


  /* Function that applies properties to the control */
  setProperties: function($e, props, options) {…},


  /* Function that is called to render a control */
  render: function($target, propsChild, master) {…},


  /* Function that is called when benchmark is enabled */
  setTestReference: function($e) {…},


  /* Function that is called when benchmark is enabled */
  getBenchmarkProps: function($elem, eventType) {…}


};
```

 