---
id: udbdsrowCreate
tags: [USoft11, USoft10]
---
# $.udb(ds).rowCreate()



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

This article is about the **rowCreate()** function of the [DataSourceContainer object](/docs/Web_and_app_UIs/UDB_DataSourceContainer).

:::

## **$.udb(ds).rowCreate()**

Creates a new record in the data source.

Returns a Promise object or the 'this' object. From USoft 10.0.1I, returns a [udbPromise](/docs/Web_and_app_UIs/JavaScript/Promises_for_asynchronous_Javascript.md) instead of a Promise object.

*Syntax*

```js
$.udb( *ds* ).rowCreate( *options* )

*options*     ::=  {
     hostvars: *hostvars*,
     initialValues:  *initial-values*,
     rows:  *rows*,
     before:  *before*,
     copyValues:  *copy-values*,
     promise:  *promise*,
     success:  *success-function*,
     error:  *error-function*
}

*before*       ::=  { true | false }
*copy-values*  ::=  { true | false }
*promise*      ::= { true | false }
```

The optional *ds* is a [data source selector](/docs/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

*Options* is a struct that can have the following items, all of which are optional.

*Hostvars* is a set of (temporary) name-value pairs that are passed as column values to the record being created. By default, *hostvars* is the empty set.

*Initial-values* is a set of (temporary) name-value pairs that override the default initial values of the newly created record. By default, *initial-values* is the empty set.

*Rows* is an array of predefined rows to be created.

*Before* is a boolean that specifies whether the new record must be created before or after the currently selected record. By default, it is created before.

*Copy-values* is a boolean that specifies whether all field values must be duplicated from the record currently selected, or not. By default, this duplication does not happen.

*Promise* determines the return value of this function. If *promise* has the value of 'true' (the default), a Promise object is returned. If *promise* has the value of 'false', the ‘this’ object is returned instead.

*Success-function* is a function called after a record has been successfully created.


:::tip

If you pass *success-function*, you can use the return value of this function to control whether the record is actually created.

:::

*Error-function* is a function called if an error occurs.

*Example 1*

```js
$.udb('EMP').rowCreate({
  success: function(r){
    r.val('NAME','John');
  }
});
```

A shorter version of this example is:

```js
$.udb('EMP').rowCreate({
  initialValues: { NAME: 'John' }
});
```

*Example 2*

This example creates an array of predefined rows:

```js
$.udb('EMP').rowCreate({
  rows: [
    {
      FIRST_NAME: 'John',
      NAME: 'Smith'
    },
    {
      FIRST_NAME: 'Jane',
      NAME: 'Doe'
    }                              
],
  initialValues: { DEPT: 'Engineering' }
});
```

## Related events

|**Event**|**Applies to**|**Occurs when**|
|--------|--------|--------|
|[rowprecreate](/docs/Web_and_app_UIs/UDB_Events/rowprecreate.md)|Data source objects|Before a record is created.|
|[rowpostcreate](/docs/Web_and_app_UIs/UDB_Events/rowpostcreate.md)|Data source objects|After a record is created.|



 