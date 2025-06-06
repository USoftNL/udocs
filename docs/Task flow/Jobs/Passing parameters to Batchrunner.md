# Passing parameters to Batchrunner

You can pass the following predefined parameters in calls to the BatchRunner internal component.

> [!NOTE]
> The call syntax is unexpected for a number of reasons:

- Parameter values must **precede** parameter names in the SELECT output list, because each parameter name is passed as a column alias.
- String values and booleans must be **quoted** under SELECT. Only number values must remain unquoted.
- Parameter names must be **double-quoted** if they contain the special hyphen (-) character to prevent the SQL parser from interpreting the hyphen as a minus operator. Double-quoting aliases is always legal, but it is necessary if the alias contains a character with special status in SQL, such as a hyphen (‑) or a space ( ).

*Example*

The -quiet parameter is listed as:

|**Parameter**|**Value**|
|--------|--------|
|-quiet  |{ true \| false }|



An example call is:

```sql
INVOKE   BatchRunner.MyJob WITH
SELECT   customer_id     "customer_id"
,        'true'          "-quiet"
FROM     ...

```

The same call using **RunJob()** looks like this:

```sql
INVOKE   BatchRunner.RunJob WITH
SELECT   'MyJob'
,        customer_id     "customer_id"
,        'true'          "-quiet"
FROM     ...

```

### -colsep

|**Parameter**|**Value**|
|--------|--------|
|-colsep-*external-set*:colsep|*column-separator*|



This parameter is for backward compatibility only. Import and export data formats are being replaced by XML and JSON.

Replaces the default symbol used to separate column values within a record in import and export tasks by column-separator. The default symbol is determined by the File Format attribute of the external set.

If you specify *external-set*, the replacement is only for that set. Otherwise, it is for all the tasks in the job.

When specifying *column-separator* (the replacement character), you can use the backslash ('\\') to mark special characters as follows:

|        |        |
|--------|--------|
|\\\\    |backslash|
|\\d     |double quote (")|
|\\n     |newline |
|\\s     |single quote (')|
|\\t     |tab     |



*Example*

```
INVOKE BatchRunner.MyJob WITH SELECT ..., '\n' "-colsep" )

```

### -create_err

|**Parameter**|**Value**|
|--------|--------|
|-create_err-*job-task*:create_err|{ true \| false }|



Specifies whether a .ERR file is created when an import task is processed (overwriting any existing .ERR file). A .ERR file contains all contains all records that were rejected during import.

If you specify *job-task*, the setting is only for that task. Otherwise, it is for all the tasks in the job.

### -create_mes

|**Parameter**|**Value**|
|--------|--------|
|-create_mes-*job-task*:create_mes|{ true \| false }|



Specifies whether a .MES file is created when an import task is processed (overwriting any existing .ERR file). A .MES file contains all the failure messages that are produced when records are rejected during an import.

If you specify *job-task*, the setting is only for that task. Otherwise, it is for all the tasks in the job.

### -create_suc

|**Parameter**|**Value**|
|--------|--------|
|-create_suc-*job-task*:create_suc|{ true \| false }|



Specifies whether a .SUC file is created when an import task is processed (overwriting any existing .ERR file). A .SUC file contains all successfully imported records.

If you specify *job-task*, the setting is only for that task. Otherwise, it is for all the tasks in the job.

### -data_directory

|**Parameter**|**Value**|
|--------|--------|
|-data_directory-*job-task*:data_directory|*data-directory*|



Specifies the directory where .ERR, .SUC and .MES files (if they are created), import files, and export files are created or searched.

If this parameter is not specified, the working directory is used. This is the directory from which the job is called.

If you specify *job-task*, the setting is only for that task. Otherwise, it is for all the tasks in the job.

### -filename

|**Parameter**|**Value**|
|--------|--------|
|-filename::*old-file-name*-*job-task*:filename::*old-file-name*|*new-file-name*|



Overwrites a filename defined as part of import and export task definitions (*old-file-name*) by another filename (*new-file-name*) introduced specifically for the call.

If you specify *job-task*, the filename replacement is only for that task. Otherwise, it is for all the tasks in the job.

*New-file-name* may be a placeholder referring to an environment variable that contains the physical file name, using the %...% syntax, eg.,

```
%USEFILE%

```

### -logfile

|**Parameter**|**Value**|
|--------|--------|
|-logfile|*log-file*|



Specifies the log file where information about the job execution is logged.

If the file already exists, the logged information is appended to its contents. To overwrite instead of append, use -wlogfile.

For *log‑file*, you can specify a full filepath, a file name, or a folder name.

If you specify a folder name, log-file must end with a backslash ('\\') character on Windows systems and a forward slash ('/') on Unix systems. The log file in this case is called:

```
job-name.current-date.log

```

If you do not specify a folder, the log file is created in the logging folder that you specified during USoft setup.

If jobs are invoked from within other jobs, and they are invoked using the same log file name in their calls, the output of all these jobs is written to the same file. If the names are different, and no path is specified, the log file is created in the same folder as the previous file that was created.

See also the -wlogfile parameter.

### -nvl

|**Parameter**|**Value**|
|--------|--------|
|-nvl-*external-set*:nvl|*null-value*|



Replaces the default symbol used to represent NULL values within a record in import and export tasks by null-value.

The default symbol used to represent NULL values is the explicit 'NULL' string if the output file format is VARIABLE. Otherwise, it is a space.

If you specify *external-set*, the replacement is only for that external set. Otherwise, it is for all the external sets in the job.

### -quiet

|**Parameter**|**Value**|
|--------|--------|
|-quiet  |{ true \| false }|



If this parameter is set to true, all messages produced as a result of executing the job are suppressed. The default is false.

-quiet has no effect if -logfile is specified.

### -returnstatus

|**Parameter**|**Value**|
|--------|--------|
|-returnstatus|{ true \| false }|



If this parameter is set to true, the job call does not fail in the event of an error. Instead, data is returned if an output set is defined and a correct result value exists. Nothing is returned if an output set is not defined but a correct result value exists. The XML string

```
<Result>Error</Result>

```

is returned otherwise. The default is false.

### -string_delimiter

|**Parameter**|**Value**|
|--------|--------|
|-string_delimiter-*external-set*:string_delimiter|*string-delimiter*|



This parameter is for backward compatibility. Import and export data formats are being replaced by XML and JSON.

Replaces the default symbol used to delimit (= mark the first and last character of) string values within a record in import and export tasks by string-delimiter. The default symbol for delimiting strings is the single quote (') if the external set's File Format is VARIABLE, and the double quote (") if it is CSV.

If you specify *external-set*, the replacement is only for that external set. Otherwise, it is for all the external sets in the job.

When specifying value (the replacement character), you can use the backslash ('\\') to mark special characters as follows:

|        |        |
|--------|--------|
|\\\\    |backslash|
|\\d     |double quote (")|
|\\n     |newline |
|\\s     |single quote (')|
|\\t     |tab     |



*Example*

```
INVOKE BatchRunner.MyJob WITH SELECT ..., '\n' "-string_delimiter" )

```

### -user_table

|**Parameter**|**Value**|
|--------|--------|
|-user_table::*declared-table*-*job-task*:user_table::*declared-table*|*runtime-table*|



Ensures that each of multiple simultaneously running jobs uses its own set of user-defined tables by replacing the table name as declared at definition time (declared-table) by a differently named table (the runtime-table).

If you specify *job-task*, the filename replacement is only for that task. Otherwise, it is for all the tasks in the job.

*Example*

Suppose that the external sets of an import task are defined as follows:

|**External Set**|**DrivingSet**|**Use User Table**|**User Table**|
|--------|--------|--------|--------|
|SET_ST  |Y       |N       |        |
|SET_RESERVATION|N       |Y       |RESERVATION|
|SET_PARTICIPANT|N       |Y       |PARTICIPANT|



If only one job uses RESERVATION and PARTICIPANT tables at any one time during runtime, create the two tables and call the job.

Otherwise, create tables RESERVATION1, PARTICIPANT1, RESERVATION2, PARTICIPANT2 and call jobs as follows (for example):

```sql
INVOKE BatchRunner.MY_JOB WITH SELECT
	'RESERVATION1' "MY_TASK1:user_table::RESERVATION"
,	'PARTICIPANT1' "MY_TASK2:user_table::PARTICIPANT"
```

```sql
INVOKE BatchRunner.MY_JOB WITH SELECT
	'RESERVATION2' "MY_TASK1:user_table::RESERVATION"
,	'PARTICIPANT2' "MY_TASK2:user_table::PARTICIPANT"
```

### -wlogfile

|**Parameter**|**Value**|
|--------|--------|
|-wlogfile|{ true \| false }|



If this parameter is set to true, log information overwrites any existing information in the log file. If it is set to false (the default), log information is appended.