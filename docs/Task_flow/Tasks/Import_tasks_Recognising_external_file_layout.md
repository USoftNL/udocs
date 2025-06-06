---
id: Import_tasks_Recognising_external_file_layout
---

# Import tasks: Recognising external file layout

By default, USoft Batch allows you to specify how import records should be read. The external set used for the import task describes how external records are interpreted. This determines how USoft Batch recognizes fields within an import record.

- Because USoft Batch uses Import SQL statements, you can filter out any lines in the external file that are not real records (in particular, header and footer information). Do this by using a WHERE clause that only picks records with the right data structure.
- You can define an external set that can accept various record structures by making sure that all set elements have a string data type.

Import tasks that recognize record structure automatically filter out any unwanted lines in external files, even if these are different because they are produced by different (versions of) external programs.

How to write an import task that recognizes external file layout:

1. Define an external set that can accept all types of expected records. In practice, you will need an external set that only has string elements.

2. If there are non-string (numerical, date) columns in the application table that you import into, use your database vendor's conversion function(s) in the import SQL statement. For instance, on Oracle use TO_DATE() to convert a string to a date value.

3. In the import SQL statement, include a WHERE clause filtering out any file contents that do not have the required import record structure.

*Example:*

Suppose that an external file contains the following lines. The import records can be recognized because they start with the letter C:

```
Athis is a starter record
Bthis is another type of header record
C31121996this is a true import record, containing a date value
C14051997this is another import record
+C...
C...
Dthis is a closing record

```

You can import this correctly by defining an external set that looks like:

```
1        record_type    string(1)
2        day_date    string(8)
3        ...

```

> [!NOTE]
> The date in the C-records is read as a string, not as a date.

The import SQL statement should look something like the following, where the example of the TO_DATE Oracle-specific function is used:

```sql
INSERT INTO   <app_table>
SELECT       [...,] TO_DATE(day_date_string), [...]
FROM         <import task set>
WHERE        recordtype = 'C'

```