# Data source path syntax

In page stacking situations, you can refer to data sources in underlying pages by using data source path syntax.

Using this syntax, you have read-only access to data sources on previous pages and full read-write access to data sources on the current page.

*Syntax*

|**Syntax element**|**Meaning**|
|--------|--------|
|`name`  |Page or data source|
|`.`     |Current page|
|`..`    |Previous page at the next higher level|
|`/name` |Page or data source on a subpage at the next lower level|
|`//name`|Page or data source on a subpage at any lower level|



Each occurrence of the combination **../** refers back one level deeper into the stack. Each occurrence of **/** (forward slash not preceded by two period characters) refers forward to an embedded page or data source.

The strings represented in this table by *name*:

- are made up of alphanumerical characters.
- are case-sensitive.
- may NOT be surrounded by single or double quotes.
- must appear EXACTLY as they appear in the Web Designer object tree views.

Every data source path ends in a name string. This rightmost name string represents a data source name. Any other name strings in the path represent page names.

Spaces are allowed inside a name string (i.e., surrounded by alphanumeric characters). In this position they are a meaningful part of the name. Spaces are allowed, but meaningless, between delimiters (ie. forward slashes and full stops) on the one hand, and names on the other.

*Examples*

Examples of valid references to data sources in underlying pages are:

|**Data source path**|**Refers to**|
|--------|--------|
|`DataSource1`|DataSource1 on the current page|
|`./DataSource1`|DataSource1 on the current page|
|`../DataSource1`|DataSource1 on the previous page|
|`../Page1/DataSource1`|DataSource1 on the Page1 page that is embedded in the previous page|
|`//DataSource1`|DataSource1 anywhere in the current page, including on embedded pages (if any)|
|`..//DataSource1`|DataSource1 on any subpage at any lower level relative to the previous page or embedding page|



To display in an alert box the value of the column C1 of the current record of data source DS on the previous page, write:

```
alert( $.udb("../DS").rows("current").cols("C1").val() )
```

To get the value of a column C1 in datasource DS on page E embedded in the same page as the current page, write:

```
alert( $.udb("E/DS").rows("current").cols("C1").val() )
```

To copy a PERSON_ID value to a GUIDE columnn in a data source located elsewhere in the data source structure:

```
$.udb("../RelatedScheduledTours1/SCHEDTOUR").rows("current").cols("GUIDE").val(
  $.udb("GUIDE").rows("current").cols("PERSON_ID").val()
);

```