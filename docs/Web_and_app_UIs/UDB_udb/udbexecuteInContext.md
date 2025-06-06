---
id: udbexecuteInContext
tags: [USoft11, USoft10]
---
# $.udb.executeInContext()



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

This article is about the **executeInContext()** function of the [udb object](/docs/Web_and_app_UIs/UDB_udb).

:::

## **$.udb.executeInContext()**

Switches the default context of a function call. Use this function if there is a need to cross the boundaries of context, so that you need to explicitly identify the target context. This occurs, for example, when a VariableSet data source on a page in one frame must be accessed by controls on a page in a different frame.

Returns the result of executing the *func* function. This could be a result value, or a Promise object that yields a result value. From USoft 10.0.1I, instead of a Promise object, a [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) object is returned.

*Syntax*

```js
.executeInContext( *context*, *func* )
```

The required *context* refers to the root context if it has the value "" (empty string). A subframe within the root context is referred to by the name of the frame. In context, names of frames contained in frames are separated from the name of the containing frame by a forward slash:

```js
$.udb.executeInContext("MyFrame/SubFrame", function() { … });
```

The required *func* is the function call for which the default context is being switched.

Prior to USoft 10.0.1I, **$.udb.executeInContext()** was necessary if you were using .then() to take a next step if a promise was fulfilled, but in that next step, you wanted to refer back to the context of the previous step, because .then() have up that context by default*:*

```js
$.udb('TOUR').executeQuery().then(function(dsc){
  var searchCols = {};  
  dsc.searchCols().each(function(index,col){
      searchCols[col.name()] = col.val();
  });
  $.udb.executeInContext( dsc.context, function(){
    $.udb.navigateTo("Tours Info 1.2 Results").then(function(){
      $.udb('TOUR').searchCols().each(function(index,col){
        col.val(searchCols[col.name()]);
      });
    });
  });
});
```

From USoft 10.0.1I, with the advent of [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md), this is no longer necessary:

```js
$.udb('TOUR').executeQuery().then(function(dsc){
  var searchCols = {};  
  dsc.searchCols().each(function(index,col){
      searchCols[col.name()] = col.val();
  });
  $.udb.navigateTo("Tours Info 1.2 Results").then(function(){
    $.udb('TOUR').searchCols().each(function(index,col){
      col.val(searchCols[col.name()]);
    });
  });
});
```

 