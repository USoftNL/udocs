# $.udbMeta(ds).orphanDataSource()



----

`USoft 11`{.vs_11}

> [!CAUTION]
> This article describes the USoft 10 product only.
> In USoft 11, the web UI API was revised and improved. For full details, go to:
> [Revised web UI API in USoft 11](/docs/Web%20and%20app%20UIs/UDB%20udb/Revised%20web%20UI%20API%20in%20USoft%2011.md)

----

`USoft 10`{.vs_10}

> [!NOTE]
> This article is about the **orphanDataSource()** function of the [DataSourceMetaContainer object](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer).

## **$.udbMeta(ds).orphanDataSource()**

Gets the value of the 'Orphan Source' property of the first data source in the container.

*Syntax*

```js
$.udbMeta( *ds* ).orphanDataSource()
```

The required *ds* is a [data source selector](/docs/Web%20and%20app%20UIs/UDB%20DataSourceMetaContainer/UDB%20DataSourceMetaContainer%20object.md).

The 'Orphan Source' property is applicable to lookup data sources. Its value is the data source name for which values of the lookup data source must be displayed that do not occur in the lookup data source itself. This property is used to properly display old (obsolete) values that are no longer valid for the lookup data source, but do not have a proper display value because they still appear in the table data. By referring to a data source with a less strict condition, the original display values can still be shown, but no longer selected.

*Example*

```js
$.udbMeta('EMP').orphanDataSource();
```

 