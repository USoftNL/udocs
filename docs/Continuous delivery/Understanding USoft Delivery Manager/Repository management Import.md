# Repository management: Import

*Import* is the operation of copying data from a flat file to database records in a repository.

Delivery Manager facilitates the import of metadata, application data, authorisation data, that have previously been exported from USoft applications for a variety of purposes.

![](/api/Continuous%20delivery/Understanding%20USoft%20Delivery%20Manager/assets/aa3452c4-f482-4ae1-9e07-279e76dbb6d1.png)

### Expected data format

The default format in which data is expected to be presented for import is a standardised USoft XML format. In this format, XML element names map to table names, XML attribute values map to column names, and XML attribute values map to column values.

This format is used across the entire USoft platform with the exception of USoft Benchmark, which still uses the obsolete TDF format, and conventional Import Tasks in USoft Batch (now part of USoft Definer), which still take CSV (records with comma-separated values) as input.

For convenience and for backward compatibility only, Delivery Manager offers "Clear and import from TDF" as a separate action.

Delivery Manager expects as input the variety of the USoft XML format that supports multi-table data in a single input file, even if the data is from a single table:

```
<multi-table-root>
  <underscored-object-name-plural>
    <table column="value" column="value" ... />
  ...

```

For example:

```
<MultiExport>
  <Accredited_Persons>
    <PERSON ID="177" FAMILY_NAME="Haynes" FIRST_NAME="Deborah"/>
    <PERSON ID="112" FAMILY_NAME="Smith" FIRST_NAME="John"/>
  ...

```

### Processing instruction

Exactly how external data are imported is determined by settings of the **usoft-xml** processing instruction, which looks like this:

```
<?usoft-xml version="1.0" action="multi-tables-import" use-io-formats="no" verify-original-values="no" return-corrected-records ="yes"?>
```

### Overview of Delivery Manager import actions

Delivery Manager offers the following standard procedures for importing data, or *import actions*:

|**Delivery Manager export actions**|**External format**|
|--------|--------|
|Clear and import from TDF|TDF     |
|Import appdata|XML     |
|Import metadata|XML     |



For general purposes of repository management, call the Import appdata action, except for importing USoft Definer data (application = USD), for which you call the Import metadata action.