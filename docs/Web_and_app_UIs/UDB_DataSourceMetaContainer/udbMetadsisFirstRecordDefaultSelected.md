---
id: udbMetadsisFirstRecordDefaultSelected
---

# $.udbMeta(ds).isFirstRecordDefaultSelected()



----

`USoft 11``{.vs_11}`

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10``{.vs_10}`

> [!NOTE]
> This article is about the **isFirstRecordDefaultSelected()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).

## **$.udbMeta(ds).isFirstRecordDefaultSelected()**

Gets the value of the 'Set First Record as Default Selected Record' value of the first data source in the container. If this value is true (the default), the record first queried is by default the selected or current record. Related data sources can only synchronize with the data source if it has a current record.

Returns a boolean.

*Syntax*

```js
$.udbMeta( *ds* ).isFirstRecordDefaultSelected()
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

*Example*

```js
$.udbMeta('EMP').isFirstRecordDefaultSelected();
```

 