---
id: Export_tasks
---

# Export tasks

**Export tasks** are useful if:

- you are using CSV as an external data format, or
- you require a high level of performance because of large data volumes, or
- you are working on legacy USoft applications that use export tasks.

In other cases, consider using [XML/JSON import](/docs/Repositories/Data_flow_control_with_XML_or_JSON/Data_flow_control_with_XML_or_JSON.md) instead. This gives you better control over the data in testing in and debugging.

### Export tasks, purpose

You can use Export Tasks to:

- **Export data for use in external applications** such as spreadsheets, word processors (mail merge), and so on. For example, the Travel Agency might wish to export details of Scheduled Tours for which no reservations have been made, so that this information can be used by management in an external application.
- **Export data for use in other USoft applications**. For example, suppose that there are other branches of the Travel Agency using the same application, but on their own local data, and that the main office has a USoft application for consolidating information for statistical purposes. In this case, each branch could export the data required for use by the main office.
- **Create backup data files.** For example, it is quite likely that the Travel Agency will want to make regular backups of its data, for use in disaster recovery situations. This could easily be done using an export task.

### Defining an export task

To define an export task:

1. Choose Define, Tasks, Export Tasks.

The Export Tasks window appears.

2. In the Export Name field, type a unique name for the export task. The name may be up to 30 characters long.

3. In the External Set field, click the lookup button and select a previously defined external set.

4. In the Filename field, type the name of the file into which the data is to be exported. By default, the file will be created in the working directory, but you can override this if required, by typing a full pathname before the file name.

5. In the Write Mode field, specify whether an existing export file must be appended or overwritten with new exported data.

If you specify 'Overwrite', the existing export file is cleared at the beginning of the export task, even if the export task does not retrieve data, or results in an error.

6. (7.1 only) In the Encoding field, specify whether the encoding of the output file is to be ANSI or UTF-8 (Unicode).

If you attempt to export Unicode characters to an ANSI file, you will obtain unpredictable results.

### Export task, example

Suppose that the Travel Agency wishes to export details of Scheduled Tours for which no reservations have been made, so that this information can be used by management in an external application.

The SQL statement for this would be as follows:

```sql
SELECT     s.schedtour_id
,          s.destination
,          s.tour_type
,          s.start_date
,          s.return_date
,          s.price
,          s.max_part
,          s.guide
FROM       schedtour s
WHERE NOT EXISTS 
(
     SELECT       ''
     FROM         reservation r
     WHERE        r.schedtour_id = s.schedtour_id
)

```

If the file format chosen was FIXED, the resulting output file, if opened with WordPad, might look something like this.

|        |        |        |        |        |
|--------|--------|--------|--------|--------|
|105     |EUROPE  |GRAND TOUR|13-06-2007|10-07-2007|
|104     |EUROPE  |GRAND TOUR|23-04-2006|20-05-2006|
|103     |PARAGUAY|LATIN SPECIAL|14-01-2006|23-01-2006|
|102     |INDONESIA|BALI BRUNCH|13-03-2007|24-03-2007|
|101     |INDONESIA|BALI BRUNCH|16-12-2006|27-12-2006|



### Export files, location

By default, export files are output by export tasks in the USoft working directory. To have these files in a different location, do one of the following:

- Specify the Directory attribute for a Batch Runner item in USoft Binder.
- In Batchrunner calls, use the -data_directory predefined parameter.
- Add a data_directory parameter to the Batch Runner command line, for example:

```
-exe "job( EXP_PERSON,INS_AFTER=01-APR-2001,data_directory=C:\Data\ )"

```

You may want to set a hard-coded Filename attribute within the Export Task definition.


:::note

The data_directory parameter takes precedence over hard-coded paths or %% variables in Import or Export Task definitions. If data_directory is set, partial paths (subfolder/filename) are concatenated with data_directory. File location is determined in the following order of precedence:

:::

- data_directory parameter
- Hard-coded path with system variables substituted
- No path: current (working) directory