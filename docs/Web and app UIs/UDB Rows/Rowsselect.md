# Rows.select()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **select()** function of the [Rows object](/docs/Web%20and%20app%20UIs/UDB%20Rows).

## **Rows.select()**

Changes the selection state of one or more of the rows.

Returns a Promise object or the 'this' object, except when you pass the “multiple” argument **without** a *value* argument (the first syntax option shown below), in which case the *multiple selection value* of the first row object is returned. This value indicates whether the row is in the set of rows currently selected. If this is the case, the row is not necessarily the current row. From USoft 10.0.1I, returns a [udbPromise](/docs/Web%20and%20app%20UIs/JavaScript/Promises%20for%20asynchronous%20Javascript.md) instead of a Promise object.

```js
*rows*.select( "multiple" )
*rows*.select( "multiple", *value* )
*rows*.select( *options* )

*value*   ::=  { *boolean-value* | *string-value* }

*boolean-value*  ::=  { true | false }
*string-value*  ::=   { extend | replace | toggle }

*options*     ::=  {
     promise:  *promise*,
     success:  *success-function*,
     error:  *error-function*
}

*promise*     ::=  { true | false }
```

- If you pass the “multiple” literal **without** a *value*, the selection state of the *current row* is changed.
- If you pass the “multiple” literal **with** a *value*, the selection state of *all the rows in the set* is changed to *value*.
- If you pass *options*, the *first record* in the set is selected, thereby potentially changing the selection state of other rows in the set.

The optional *value* can be passed as a boolean or a string. Boolean values of *value* can be:

|**Value**|**Description**|
|--------|--------|
|true    |Sets the selection state of all records in scope.|
|false   |Unsets the selection state of all records in scope.|



String values of *value* can be:

|**Value**|**Description**|
|--------|--------|
|extend  |Sets the selection state of all records in scope.|
|replace |Unsets the selection state of all records in scope.|
|toggle  |Toggles the selection state of all records in scope.|



*Options* is a struct that can have the following items, all of which are optional.

If *promise* has the value 'true' (the default), a Promise object is returned. If *promise* has the value 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after the records are successfully removed.

*Error-function* is a function called if an error occurs.

> [!TIP]
> Before the .select operation is performed, the 'rowpreselect' event is triggered. if the event handler sets the 'success' member of the result object parameter to false, then the action is aborted and the current row will not change. Otherwise, the action is performed and following it, the 'rowpostselect' event is triggered as a final step.

*Examples*

This example changes the selection state of the current row:

```js
$.udb('EMP').rows().select('multiple');
```

This example unsets the selection state of all selected rows:

```js
$.udb('EMP').rows('selected').select('multiple', false);
```

This example sets the selection state of all rows in scope:

```js
$.udb('EMP').rows([5,6,7,8]).select('multiple', 'extend');
```

Each of these examples selects the first record in the row set, thereby potentially changing the selection state of rows in the set.

```js
$.udb('EMP').rows().select();
$.udb('EMP').rows(0).select();
```

## Related events

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|[rowpostselect](/docs/Web%20and%20app%20UIs/UDB%20Events/rowpostselect.md)|Data source objects|After a record is selected|
|[rowpreselect](/docs/Web%20and%20app%20UIs/UDB%20Events/rowpreselect.md)|Data source objects|Before a record is selected|
|[rowquery](/docs/Web%20and%20app%20UIs/UDB%20Events/rowquery.md)|Data source objects|Before row selection changes to a different row|



 