---
id: Revised_web_UI_API_in_USoft_11
---

# Revised web UI API in USoft 11

`USoft 11``{.vs_11}`

> [!TIP]
> This article describes the USoft 11 web UI API in terms of **change** relative to the API in USoft 10.
Scanning this article from top to bottom will give you an overview of the API and will help you use the USoft 10 API articles in this Knowledge Base if you work in USoft 11.

## New UDB object layer

USoft Web Designer exposes an API of UDB objects that allows a web UI to communicate with the Rules Engine. This code layer has been brought in line with current JavaScript standards. Obsolete technologies (jQuery, jQuery UI, handlebars, older Bootstrap versions) are being phased out and replaced by modern standards (latest Bootstrap, Vue3). This enables reactive pages among other things.

In USoft 11, the entire API has been rewritten and its coding restyled to using modules and classes. The resulting API is easier to maintain and works more like modern libraries, so that past design issues can be addressed upfront instead of being “patched away”.

## General aspects of the revision

### Outputs changed, calls unchanged

Most outputs of API functions have changed considerably, but the way the functions are called is mostly unchanged.

Maximum use is made of classes. Outputs of API functions are now always instances of these classes, instead of some generic JSON object. For example, the

```js
$.udb()
```

function now returns an array of objects instead of strings. Functions called on these arrays, however, still work the same way as before.

Reference objects (context, query details) in arrays (e.g. of data sources, rows, etc) contain actual objects instead of string references, e.g. frame context information now takes the form of context objects instead of their string ids.

### Promises replace callback functions

Promises are used throughout; callback functions are deprecated. Callback functions are still available, albeit with a deprecation message when encountered.

Synchronous calls using the ‘async: false’ option have been dropped. If you need the next statement to be executed when the current statement is finished, use proper Promise behavior using the await keyword, or use proper chaining functions. Correspondingly, ‘promise’ options of functions have been dropped. Instead, every function that had a promise option or callback functions now automatically returns an instance of UdbPromise. UdbPromise replaces the earlier udbPromise class.

The ‘async’ function option has been dropped (many places in the UDB object layer).

The ‘success’ and ‘error’ callback function options are deprecated (many places in the UDB object layer).

### jQuery dropped

jQuery is no longer used as a key technology for the UDB layer.

Events are now handled by native constructions, and certain selectors that were specifically jQuery, and also our own ‘pseudo-selectors’, can no longer be used. Convenient UI functions that were commonly used, eg., .addClass(), .removeClass(), .data(),  .on(), .off(), .trigger(), have been added to the native classes of the HTML DOM objects themselves now.

If you still require jQuery, you can simply add it to the application.html file. Be aware that USoft default controls will not use jQuery calls.

## $.udb functions

|**Function**|**Changes in USoft 11**|
|--------|--------|
|`.acceptLookupValue()`|Option ‘keepOpen’: dropped, because lookup display using DialogControls is no longer available.|
|`.applyCurrentContext()`|New parameter: ‘newPageAlias’.|
|`.context()`|Parameter ‘create’: dropped.|
|`.data.format`|Moved to .ioFormat.|
|`.executeSQLStatement()`|Deprecated, switching to SQLDataSources is encouraged.|
|`.groupRequests()`|Obsolete and no longer functional.|
|`.off()`|No longer uses jQuery to register and handle events.|
|`.on()` |No longer uses jQuery to register and handle events.|
|`.setTimeout()`|New behavior: to get the current values, use $.udb.setTimeout(‘current’) instead of $.udb.setTimeout.current.|
|`.startPage()`|No longer part of public API, so no longer directly callable.|
|`.status.loggedIn()`|Now contains an optional parameter 'fn'.|
|`.status.setLoginStatus()`|Moved to .setLoginStatus().|
|`.trigger()`|No longer uses jQuery to register and handle events.|



## $.udb.ui functions

|**Function**|**Changes in USoft 11**|
|--------|--------|
|`$.udb.dialog`|<p>'benchmark' option dropped.</p><p>'dialogClass' option added with default value null.</p><p>'icon' option default value changed to 'bi-exclamation-triangle-fill'.</p><p>Now always returns a UdbPromise.</p>|
|`$.udb.input`|<p>'benchmark' option dropped.</p><p>'dialogClass' option added with default value null.</p><p>Now always returns a UdbPromise.</p>|
|`$.udb.wait`|<p>Now always returns a UdbPromise.</p><p>New feature: call count. Multiple $.udb.wait(true) calls need to be ended by as many $.udb.wait(false) calls to hide the control.</p><p>To hide the control immediately, use $.udb.wait(‘off’).</p>|
|`$.udb.opacity`|<p>Now always returns a UdbPromise.</p>|
|`$.udb.upload`|<p>Now always returns a UdbPromise.</p>|



## $.udb( *dsRef* ) functions

$.udb(<dsRef>) and $.udbMeta(<dsRef>) have been merged to a single structure, ie., $.udb(<dsRef>).

Output changed to UdbDsc array of UdbDataSource instances instead of array of strings.

|**Function**|**Changes in USoft 11**|
|--------|--------|
|`.busy()`|New function.|
|`.cols()`|Returns an UdbCols array of objects containing UdbColumn instances.|
|`.containsGetValue()`|Dropped.|
|`.context()`|New function.|
|`.data()`|Instead of a generic JSON object, now returns an instance of the UdbDataSource class, of its specific type (ie., UdbTableDataSource for a data source of type 'Table').|
|`.dataInfo()`|Replaced by .meta().|
|`.extraKeys()`|New function.|
|`.hasChild()`|New function.|
|`.hasLookups()`|New function.|
|`.isJoined()`|Deprecated, because joined tables using the 'Joined' property are no longer supported.|
|`.isOnCurrentPage()`|New function, previously only a data layer function.|
|`.isQueried()`|New function.|
|`.joins()`|Deprecated, because joined tables using the 'Joined' property are no longer supported.|
|`.keyCols()`|Renamed to .keys().|
|`.mainDataSource()`|New function.|
|`.meta()`|Returns the same array; previously used to transform $.udb() to $.udbMeta().|
|`.realDataSource()`|Output changed; now returns the actual data source object instead of its id value.|
|`.searchCols()`|Returns an UdbCols array of objects containing UdbColumn instances.|
|`.setBusy()`|New function.|



## $.udb( *dsRef* ).rowSet( *rowSetRef* ) functions

This section lists changes to $.udb(<dsRef>).rowSet(<rowSetRef>) functions.

Output changed to UdbRowSets array of UdbRowSet instances instead of array of JSON objects.

|**Function**|**Changes in USoft 11**|
|--------|--------|
|`.context()`|New function.|
|`.data()`|Dropped.|
|`.rows()`|Returns an UdbRows array of UdbRecord instances.|



## $.udb( *dsRef* ).rowSet( *rowSetRef* ).rows( *ref1*, *ref2* ) functions

This section lists changes to $.udb(<dsRef>).rowSet(<rowSetRef>).rows(<ref1>,<ref2>) functions.

Output changed to UdbRows array of UdbRecord instances instead of array of JSON objects.

|**Function**|**Changes in USoft 11**|
|--------|--------|
|`.cols()`|Returns an UdbCols array of objects containing UdbColumn and UdbRecord instances.|
|`.context()`|New function.|
|`.data()`|Dropped.|
|`.joinedVal()`|Deprecated because joined tables using the 'Joined' property are no longer supported.|
|`.keysString()`|'full' parameter is dropped, because the full keys string is now always returned.|
|`.keysXML()`|Obsolete, no longer supported.|



## $.udb( *dsRef* ).rowSet( *rowSetRef* ).rows( *ref1*, *ref2* ).cols( *colRef* ) functions

This section lists changes to $.udb(<dsRef>).rowSet(<rowSetRef>).rows(<ref1>,<ref2>).cols(<colRef>) functions.

Output changed to UdbCols array of UdbColumn instances instead of array of JSON objects.

|**Function**|**Changes in USoft 11**|
|--------|--------|
|`.cols()`|The .cols() and .colsMeta() functions have been merged into a single UdbCols structure.|
|`.colsMeta()`|The .cols() and .colsMeta() functions have been merged into a single UdbCols structure.|
|`.context()`|New function.|
|`.isKey()`|Dropped.|
|`.label()`|Dropped (was deprecated earlier by .prompt() in 10.1).|
|`.meta()`|Dropped.|



## Object extension functions

USoft 10.1 offered extra functionality added to various kind of objects, eg., .forEachValue() and .forEachKey(), .map(), but these could cause name clashes with third-party libraries. These functions (including some added as of USoft 11) have been moved to a .usoft extension. Use a ‘.usoft’ prefix to access the USoft functions on the prototypes, eg.,

```js
object.usoft.map()
```

for

```js
object.map()
```

 