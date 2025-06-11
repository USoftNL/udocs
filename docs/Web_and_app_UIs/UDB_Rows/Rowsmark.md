---
id: Rowsmark
tags: [USoft11, USoft10]
---
# Rows.mark()



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

This article is about the **mark()** function of the [Rows object](/Web_and_app_UIs/UDB_Rows).

:::

## **Rows.mark()**

1.Checks if the first record in the Rows object is marked or not.

2.Changes the mark value of one or more records.

Returns the mark value of the first row object in the Rows object if checking (no. 1). Returns the ‘this’ object if marking (no. 2).

*Syntax*

```js
*rows*.mark( *value* )
```

- Omit *value* if you want to check if the first record in the Rows object is marked or not (Example 1).
- Specify *value* if you want to change the mark value of one or more records (Example 2).

If specified, *value* is either a boolean or the string ‘toggle’ and has the following data type and meaning:

|**Value**|**Data type**|**Meaning**|
|--------|--------|--------|
|true    |boolean |Marks all records in scope|
|false   |boolean |Unmarks all records in scope|
|toggle  |string  |Toggles the mark value of all records in scope|



*Example 1*

This example assigns the mark value (true or false) of the current record to the **mark** variable:

```js
var mark = $.udb('EMP').rows('current').mark();
```

*Example 2*

These examples change the mark value of one or more records:

```js
$.udb('EMP').rows().mark(true);      // Mark all queried records

$.udb('EMP').rows(5).mark(false);    // Unmark the 6th record
```

 