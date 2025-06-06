# Embedded data sources

You can insert (or embed) a data source into another data source.

This picture shows an EMP (Employee) data source with an inserted FUNC1 data source with a Function ID and a Short Description:

![](/api/Web%20and%20app%20UIs/Data%20sources/assets/eae08091-7212-4755-a830-e83bed7977f6.jpg)

 

An embedded DataSource can be used as a kind of joined column, for example in a GridControl. This picture shows a GridControl object and a part of the Property Inspector for the GridCellControl with name EMBEDDED_FUNC_DESC.



![](/api/Web%20and%20app%20UIs/Data%20sources/assets/96ca8538-fb79-4d1a-ae89-f6114154a750.jpg)

The value of Data Source Item is **FUNC1/SHORT_DESCRIPTION**. In this string, **SHORT_DESCRIPTION** is the name of the data source item proper, and the prefix **FUNC1/** refers to the embedded data source. The forward slash ( **/** ) may be similarly used in scripting to access a value stored in an embedded data source, for example:

```
$.udb('EMP').rows('current').cols('FUNC1/SHORT_DESCRIPTION').val()
```