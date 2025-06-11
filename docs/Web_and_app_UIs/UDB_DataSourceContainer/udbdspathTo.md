---
id: udbdspathTo
tags: [USoft11, USoft10]
---
# $.udb(ds).pathTo()



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

This article is about the **pathTo()** function of the [DataSourceContainer object](/Web_and_app_UIs/UDB_DataSourceContainer).

:::

## **$.udb(ds).pathTo()**


:::warning

This method is only needed in advanced situations. This method can be used as a utility and as a means of making paths dynamic.
As a utility, this method is useful for developers who need help in determining, at design-time, a fully explicit path that they can then use as the value of a property such as Synchronisation Data Source in a related page.
As a means of making paths dynamic, this method is useful when the structure and naming of data sources can only be determined at runtime. This applies for example when an end user has multiple optional ways of arriving at the same embedded construct, so that path calculation is necessary to find out by which path a level higher in the stack can be reached.

:::

Calculates a data source path from one data source to another. This other data source may be on the current page, or on a page embedded in the current page, or on a previously visited page.

Returns a fully explicit data source path if a path between the two data sources can be determined. Otherwise, returns the value undefined. A fully explicit data source path is a string that specifies:

- for path steps leading in the direction of embedding pages or previously visited pages (ancestors): a separate ../ operator for each step (Example 1).
- for path steps leading in the direction of embedded pages (descendants): an explicit name for each embedded page (Example 2).

*Syntax*

```js
$.udb( *ds* ).pathTo( *dsc* )

*dsc*  ::=  { *data-source-object* | *data-source-reference* }
```

The optional *ds* is a [data source selector](/Web_and_app_UIs/UDB_DataSourceMetaContainer/UDB_DataSourceMetaContainer_object.md).

The required *dsc* can be a data source object or a reference to a data source object. There are multiple ways of referencing (or selecting) a data source: by data source name, data source ID, by data source alias (a letter-number code of the type DS98, or by an absolute or relative data source path. Data source aliases may be inspected on the JSON tab of the Web Designer tool when the page is opened.


:::note

For details on data source paths, go to the [Data source path syntax](/Web_and_app_UIs/Data_sources/Data_source_path_syntax.md) article.

:::

*Example 1*

In this example, the calculated path leads to an ancestor node. A page with a TOUR data source has an embedded page "MyDiscounts", which in turn has an embedded page "MyDiscounts2" containing a data source named DISCOUNT_2.

In this particular example, each ../ operator leads to an embedding page, but a ../ operator could lead to a previously visited page instead.

In this particular example, each step leads to an ancestor, but there could be further steps leading to descendants from that ancestor.

```js
let orig = $.udb("TOUR");
let target = $.udb("//DISCOUNT_2");

> target.pathTo( orig )

// returns:  '../../TOUR'
```

*Example 2*

In this example, the calculated path leads to a descendant node. This is the reverse of Example 1.

```js
let orig = $.udb("TOUR");
let target = $.udb("//DISCOUNT_2");

> orig.pathTo( target )

// returns:  'MyDiscounts/MyDiscounts2/DISCOUNT_2'
```


 

 