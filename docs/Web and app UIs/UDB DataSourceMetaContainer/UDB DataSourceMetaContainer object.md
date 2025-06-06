# UDB DataSourceMetaContainer object



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **DataSourceMetaContainer** object in the UDB object model. This model is for data exchange between USoft web UIs and Rules Engines.
> This model is built around the [udb](/docs/Web%20and%20app%20UIs/UDB%20udb), DataSourceMetaContainer, [DataSourceContainer](/docs/Web%20and%20app%20UIs/UDB%20DataSourceContainer), [Rowset](/docs/Web%20and%20app%20UIs/UDB%20Rowset), [Rows](/docs/Web%20and%20app%20UIs/UDB%20Rows), [ColsMeta](/docs/Web%20and%20app%20UIs/UDB%20ColsMeta), and [Cols](/docs/Web%20and%20app%20UIs/UDB%20Cols) object types. See also [UDB events](/docs/Web%20and%20app%20UIs/UDB%20Events).

A **DataSourceMetaContainer** object has knowledge of metadata that describe a data source or set of data sources.

> [!TIP]
> **Data source selectors**
> In the syntax block below, the required *ds* is a **data source selector**:****an expression whereby you identify a single data source or multiple data source. Data source selectors play a role in calls to the DataSourceMetaContainer object, but also in calls to the DataSourceContainer object:
> You can identify a single data source by a simple *data-source* name string. You can identify a set of multiple data sources by an array of simple string values.
> If the data source is on the current page, you can identify it simply either by its *data-source-name* or by its *data-source-id.* if it is on a different page, you can identify it by prefixing *page-id* followed by a period. It is also possible to refer to a data source in a specific frame control. Prefix with *frame-id* followed by a double colon, or to identify the top-level frame, write the double colon but not the *frame-id* prefix.
> You can also identify a data source using [data source path syntax](/docs/Web%20and%20app%20UIs/Data%20sources/Data%20source%20path%20syntax.md).
> Finally, you can select types of data source by using *meta-selector* values. This selection technique cannot be combined with the other options. The ‘:table’ meta-selector selects all table data sources in scope. The ':variable’ meta-selector selects all variable data sources in scope. The ':virtual’ meta-selector selects all virtual data sources in scope.
> *Examples*

*Syntax*

```js
$.udbMeta( *ds* )

*ds*                 ::= { *data-source* | *data-source-array* )

*data-source-array*  ::= [ *data-source*, *data-source* ... ]

*data-source*  ::=
    {
      [*page-id*.][[*frame-id*]::]{*data-source-name*|*data-source-id*} |
*data-source-path*  |
*meta-selector*
    }

*meta-selector* ::=   
    {
      :table    |
      :variable |
      :virtual
    }
```

> [!WARNING]
> In this syntax block, square brackets are ambiguous. They are used as literal array brackets when explaining *data-source-array* in the second line. In the other cases, they surround optional, as opposed to required, syntax elements.

The required *ds* is a **data source selector** as explained at the top of this article.
 

> [!NOTE]
> All functions listed for the **udbMeta** are equally exposed by the **udb** object.