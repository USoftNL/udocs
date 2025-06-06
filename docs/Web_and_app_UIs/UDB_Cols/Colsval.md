---
id: Colsval
tags: [USoft11, USoft10]
---
# Cols.val()



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

This article is about the **val()** function of the [Cols object](/docs/Web_and_app_UIs/UDB_Cols).

:::

## **Cols.val()**

Gets or sets the value of the first column in scope.

Returns a string value representing the current (the "old") value of that column.

*Syntax*

```js
*cols*.val( *value*, *lookup-ref* )

*cols*.val( *value*, *quiet* )

*quiet*   ::=  { true | false }
```

The optional *value* is a new value that the first column in scope is set to.

The optional *lookup-ref* is an object used to specify additional information about the value, in the situation where an autocompletion control is used, and the value refers to a column in its associated data source.

The optional *quiet* is a boolean value used to specify if the new value must also be propagated immediately to all controls that may show it. If *quiet* is false (the default), it is immediately shown after the value is successfully changed.

*Examples*

```js
var v = $.udb('EMP').rows('current').cols('EMPNO').val();
```

```js
$.udb('EMP').rows('current').cols('DEPT').val('INT');
```

 