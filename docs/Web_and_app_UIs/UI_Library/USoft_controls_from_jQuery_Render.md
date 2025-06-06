---
id: USoft_controls_from_jQuery_Render
tags: [USoft11, USoft10]
---
# USoft controls from jQuery: Render()



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

This article covers **Render()** as a way of adding functionality to USoft UI controls. This is part of the [UI Library](/docs/Web_and_app_UIs/UI_Library).
The UI Library is a mixed bag of Javascript extensions for programming UI controls in USoft web pages. Do not confuse with the structured [UDB object model](/docs/Web_and_app_UIs/UDB_udb/UDB_udb_object.md) for data exchange between USoft web pages and a Rules Engine.

:::

 Once the HTML for a control has been created, you can add functionality to the control, such as adding event handlers and  instantiating child controls, etc.

For this purpose, each control exposes a **Render()** function.

*Syntax*

```
*control*.Render(
   *$target*
,  *propsChild*
,  *master*
)
```

*$target* refers to a jQuery container that contains the element that is the parent for the control to create. *propsChild* contains additional property settings that are adduced by the parent control. *master* refers to the control definition of the master.

The Render() function must return a jQuery object containing the newly created control.