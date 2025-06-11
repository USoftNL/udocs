---
id: setEvents
tags: [USoft11, USoft10]
---
# setEvents()



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

This article covers the **setEvents()** function as part of the [UI Library](/Web_and_app_UIs/UI_Library).
The UI Library is a mixed bag of Javascript extensions for programming UI controls in USoft web pages. Do not confuse with the structured [UDB object model](/Web_and_app_UIs/UDB_udb/UDB_udb_object.md) for data exchange between USoft web pages and a Rules Engine.

:::

 To make sure events on a control are triggered in the right order, an abstraction layer has been build. In some situations this layer essential for the proper behavior of the application. For example, if a button is added to each row of a grid, it is essential that clicking the button first changes the current row before firing the actual click event of the button.

In addition, the layer takes care of the following issues:

- Making sure that the right context is used (see Web Architecture document).
- Redirecting certain events to the udb layer
- Serving as entry point for benchmark to be able to record tests

To access this layer, call the **.setEvents()** function. This function returns nothing.

*Syntax*
 

```js
.setEvents( *event-object*, *events*, *options* )

*options*  :=  {
     match:  *match*,
     exclude:  *exclude*,
     dsId:  *alternative-data-source*,
     selector:  *selector*,
     benchmark:  *benchmark*
}
```

The required event-object is a JQuery object (the value of event-object starts with a '$' symbol) that references the event object. The required *events* is an object that contains a list of events and their handlers.

The optional *options* is a struct that can have the following items, all of which are optional.

*Match* is a regular expression that specifies the subset of events to bind. The default is /.*/

*Exclude* is a regular expression that specifies the events to be excluded from binding. The default is

```
/^$/
```

*dsId* is a string indicating an alternative data source ID.

*Selector* is a string pointing to a descendant of $e binding it as an delegate.

*Benchmark* is a boolean indicating whether the events are relevant for benchmarking. The default is true.

*Example*

```js
this.setEvents($el, this.events, {match: /change/});
```

 