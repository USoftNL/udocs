# Export tasks: Creating external file layout

Often you want to create external files in a certain format so that they can be easily read or further processed by an external tool.

In addition to choosing between the standard file formats (FIXED, VARIABLE, etc.), you can use concatenation operators (\|\|) and native format and conversion functions in the select list of the Export SQL statement.

You can produce headers and footers by having separate export tasks write dummy statements to the external file.

You do not need to format the external files as a separate routine.

## Lining up columns in an external file

In the SQL statement of the external set, use concatenation operators (\|\|) and native format and conversion functions to line up external file fields.

*Example:*

Suppose column1 is a variable string, column2 a date, and column3 a fixed-length string. You can produce a regular external file format by writing an export SQL statement of the following type.

```sql
SELECT  RPAD(<col1>, 20) || TO_CHAR(<col2>,'DDMMYYYY') || <col3>
FROM    <table>

```

This example uses the Oracle-specific TO_CHAR() and RPAD() functions.

RPAD(\<col1>, 20) results in \<col1> padded out to a 20-position string with blank positions if \<col1> is shorter than 20 positions.

The TO_CHAR function is used here to convert the date value into a fixed-length string.

## Producing header or footer lines in an external file

To produce a header line in an external file:

1. Specify the main export task with output file \<file1>, and embed it in a batch job.

2. Define an E_DUMMY external set with SQL statement:

```sql
SELECT  '<Header message>'
FROM    dual

```

You have to use a single-record dummy table here.

3. Define an ET_DUMMY export task based on the E_DUMMY external set and with output file \<file1>.

4. Add the ET_DUMMY export task to the job, giving it a lower sequence number than the main export task.

To get a footer line, use the same strategy with an export task at the end of the job.