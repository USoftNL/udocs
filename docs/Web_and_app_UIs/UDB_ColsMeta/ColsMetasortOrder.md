---
id: ColsMetasortOrder
tags: [USoft11, USoft10]
---
# ColsMeta.sortOrder()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web_and_app_UIs/UDB_udb/Revised_web_UI_API_in_USoft_11.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **sortOrder()** function of the [ColsMeta object](/docs/Web_and_app_UIs/UDB_ColsMeta).

## **ColsMeta.sortOrder()**

Gets, sets or removes a sort definition for this column. A sort definition is a column or a list of columns by which data is sorted. A sort definition also contains (in the case of a list of columns) the hierarchy of these sort columns, i.e., the answer to the question by which column the data is sorted first, second…

Returns a struct with two values, index and order. Index is the (1-based) index number of the sort precedence of this column. If data is first sorted by DEPT_NO and then by NAME, the sort precedence of DEPT_NO is 1 and the sort precedence of NAME is 2. Order is a string that is either ASC or DESC. ASC indicates that data is sorted with the lowest value first, DESC indicates that data is sorted with the highest value first.

Returns undefined if no column is selected.

*Syntax*
 

```js
$.udbMeta( *ds* ).cols( *cols* ).sortOrder( *options* | *order* | *sort-function* | *order* )

*options*   ::=  {
     fn:  *sort-function*,
     order: *order*,
     reset: *reset*
}

*order*  ::=  { ASC | DESC | TOGGLE | '' }

*reset*  ::=  { true | false }
```

*Options* is a struct that can have the following items, all of which are optional. You can pass *sort-function* and *order* as a direct parameter of **.sortOrder()**, as opposed to passing it as part of an options struct. Examples 2 and 3 at the end of this help topic illustrate this possibility.

*Sort-function* is a function that overrides the default sorting functionality. The sorting will be executed on the client. If set to NULL, the function will be removed.

*Order* is a string that specifies the sort order (ascending or descending). The following values are allowed. Setting *order* explicitly to the empty string yields has a different meaning than not setting order at all:

|**Value**|**Description**|
|--------|--------|
|ASC     |Data are sorted with lowest value first.|
|DESC    |Data are sorted with highest value first.|
|TOGGLE  |The sort order on the column is toggled to the opposite ASC/DESC value from the existing sort order. If no sort order exists, evaluates to ASC.|
|(empty string)|The existing sort order is removed.|



*Reset* is a boolean specifying whether the setting must replace the current sorting. The default is false.

*Example 1*

```js
var so = $.udbMeta('EMP').cols('NAME').sortOrder();

$.udbMeta('EMP').cols('NAME').sortOrder({
   order: 'ASC',
   reset: true
});

$.udb('EMP').executeQuery();
```

*Example 2*

In this example, sort-function is passed as a direct parameter and not as part of an options struct.

```js
$.udbMeta('EMP').cols('NAME').sortOrder(
   function(r1, r2){
      return parseInt(r1.cols('DEPNO').val()) –
         parseInt(r2.cols('DEPNO').val());
   }
);
$.udb('EMP').executeQuery();
```

*Example 3*

In this example, order is passed as a direct parameter and not as part of an options struct.

```js
$.udbMeta('EMP').cols('NAME').sortOrder('ASC');
$.udb('EMP').executeQuery();
```

 