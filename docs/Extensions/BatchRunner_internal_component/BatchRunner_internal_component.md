---
id: BatchRunner_internal_component
---

# BatchRunner internal component




:::note

This article contains general information about the **BatchRunner** internal component.
For an alphabetic list of BatchRunner methods, see [BatchRunner internal component](/Extensions/BatchRunner_internal_component).

:::

## Calling the BatchRunner component

The BatchRunner internal component allows you to run a job programmatically. You can call this component by using the job name as the method name:

```
INVOKE    BatchRunner.*job* WITH SELECT ...
```

or:

```
SELECT   BatchRunner.*job*()
```

As an alternative, you can call BatchRunner.RunJob. This method returns an XML document.

The BatchRunner.StartJob method is obsolete.

You can call BatchRunner.GetJobProperty to get a runtime property of a job currently being executed.

## Predefined parameters of BatchRunner calls

You can pass a number of predefined parameters in calls to the BatchRunner internal component. This section describes these parameters in detail.


:::tip

The call syntax is unexpected for a number of reasons:

:::

*Example*

The -quiet parameter is listed as:

|**Parameter**|**Value**|
|--------|--------|
|`-quiet`|``{ true  \| false }``|



This means that if you have a **MyJob** job to which you pass a **customer_id** job-specific parameter, you can add the **-quiet** predefined parameter as follows:

```
INVOKE   BatchRunner.MyJob WITH
SELECT   customer_id     "customer_id"
,        'true'          "-quiet"
FROM     ...
```

or as follows:

```
INVOKE   BatchRunner.RunJob WITH
SELECT   'MyJob'
,        customer_id     "customer_id"
,        'true'          "-quiet"
FROM     ...
```

### -colsep

|**Parameter**|**Value**|
|--------|--------|
|<pre><code>-colsep<br/>-:colsep</code></pre>|`column-separator`|



This parameter is for backward compatibility only. Import and export data formats are being replaced by XML and JSON.

Replaces the default symbol used to separate column values within a record in import and export tasks by column-separator. The default symbol is determined by the File Format attribute of the external set.

If you specify *external-set*, the replacement is only for that set. Otherwise, it is for all the tasks in the job.

When specifying *column-separator* (the replacement character), you can use the backslash ('\\') to mark special characters, as follows:

|        |        |
|--------|--------|
|\\\\    |backslash|
|\\d     |double quote (“)|
|\\n     |newline |
|\\s     |single quote (‘)|
|\\t     |tab     |



*Example*

```
INVOKE BatchRunner.MyJob WITH SELECT ..., '\n' "-colsep" )
```

### -create_err

|**Parameter**|**Value**|
|--------|--------|
| `-create_err  -:create_err`| `{ true \| false }`|



Specifies whether a .ERR file is created when an import task is processed (overwriting any existing .ERR file). A .ERR file contains all contains all records that were rejected during import. If you specify *job-task*, the setting is only for that task. Otherwise, it is for all the tasks in the job.

### -create_mes

|**Parameter**|**Value**|
|--------|--------|
|<pre><code>-create_mes<br/>-:create_mes</code></pre>|`{ true \| false }`|



Specifies whether a .MES file is created when an import task is processed (overwriting any existing .ERR file). A .MES file contains all the failure messages that are produced when records are rejected during an import.
If you specify *job-task*, the setting is only for that task. Otherwise, it is for all the tasks in the job.

### -create_suc

|**Parameter**|**Value**|
|--------|--------|
|`-create_suc`  `-:create_suc`|`{ true \| false }`|



Specifies whether a .SUC file is created when an import task is processed (overwriting any existing .ERR file). A .SUC file contains all successfully imported records.

If you specify *job-task*, the setting is only for that task. Otherwise, it is for all the tasks in the job.

### -data_directory

|**Parameter**|**Value**|
|--------|--------|
|<pre><code>-data_directory<br/>-:data_directory</code></pre>|`data_directory`|



Specifies the directory where .ERR, .SUC and .MES files (if they are created), import files, and export files are created or searched.

If this parameter is not specified, the working directory is used. This is the directory from which the job is called.

If you specify *job-task*, the setting is only for that task. Otherwise, it is for all the tasks in the job.

### -filename

|**Parameter**|**Value**|
|--------|--------|
|<pre><code>-filename::<br/>-:filename::</code></pre>|`new-file-name`|



Overwrites a filename defined as part of import and export task definitions (*old-file-name*) by another filename (*new-file-name*) introduced specifically for the call.

If you specify *job-task*, the filename replacement is only for that task. Otherwise, it is for all the tasks in the job.

*New-file-name* may be a placeholder referring to an environment variable that contains the physical file name, using the %...% syntax, eg.,  

```
%USEFILE%
```

### -logfile

|**Parameter**|**Value**|
|--------|--------|
|`-logfile`|`log-file`|



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
|<pre><code>-nvl<br/>-:nvl</code></pre>|`null-value`|



Replaces the default symbol used to represent NULL values within a record in import and export tasks by *null-value*.

The default symbol used to represent NULL values is the explicit 'NULL' string if the external set has File Format = VARIABLE. Otherwise, it is a space.

If you *specify external-set*, the replacement is only for that external set. Otherwise, it is for all the external sets in the job. 

### -quiet

|**Parameter**|**Value**|
|--------|--------|
|`-quiet`|``{ true  \| false }``|



If this parameter is set to true (the default is false), all **information** and **warning** messages produced as a result of executing the job are suppressed. **Error** messages are displayed regardless.

-quiet has no effect if -logfile is specified. 

### -returnstatus

|**Parameter**|**Value**|
|--------|--------|
|`-returnstatus`|``{ true  \| false }``|



If this parameter is set to true, the job call does not fail in the event of an error. Instead, data is returned if an output set is defined and a correct result value exists. Nothing is returned if an output set is not defined but a correct result value exists. The XML string

```xml
<Result>Error</Result>
```

is returned otherwise. The default is false.

 

### -string_delimiter

|**Parameter**|**Value**|
|--------|--------|
|<pre><code>-string_delimiter<br/>:string_delimiter</code></pre>|`string-delimiter`|



This parameter is for backward compatibility. Import and export data formats are being replaced by XML and JSON.

Replaces the default symbol used to delimit (= mark the first and last character of) string values within a record in import and export tasks by string-delimiter. The default symbol for delimiting strings is the single quote (') if the external set's File Format is VARIABLE, and the double quote (") if it is CSV.

If you specify *external-set*, the replacement is only for that external set. Otherwise, it is for all the external sets in the job.

When specifying the value (the replacement character), you can use the backslash ('\\') to mark special characters as follows: 

|        |        |
|--------|--------|
|\\\\    |backslash|
|\\d     |double quote (“)|
|\\n     |newline |
|\\s     |single quote(')|
|\\t     |tab     |



*Example*

```sql
INVOKE BatchRunner.MyJob WITH SELECT ..., '\n' "-string_delimiter" )
```

### -user_table

|**Parameter**|**Value**|
|--------|--------|
|<pre><code>-user_table::<br/>:user_table::</code></pre>|`runtime-table`|



Ensures that each of multiple simultaneously running jobs uses its own set of user-defined tables by replacing the table name as declared at definition time (*declared-table*) by a differently named table (*runtime-table*).

If you specify *job-task*, the filename replacement is only for that task. Otherwise, it is for all the tasks in the job.

*Example*

Suppose that the external sets of an import task are defined as follows: 

|**External set**|**Driving set**|**Use user table**|**User table**|
|--------|--------|--------|--------|
|SET_ST  |Y       |N       |        |
|SET_RESERVATION|N       |Y       |RESERVATION|
|SET_PARTICIPANT|N       |Y       |PARTICIPANT|



If only one job uses RESERVATION and PARTICIPANT tables at any one time during runtime, create the two tables and call the job.

Otherwise, create tables RESERVATION1, PARTICIPANT1, RESERVATION2, PARTICIPANT2 and call jobs as follows (for example):

```sql
INVOKE BatchRunner.MY_JOB WITH SELECT
    'RESERVATION1' "MY_TASK1:user_table::RESERVATION"
,    'PARTICIPANT1' "MY_TASK2:user_table::PARTICIPANT";

INVOKE BatchRunner.MY_JOB WITH SELECT
    'RESERVATION2' "MY_TASK1:user_table::RESERVATION"
,    'PARTICIPANT2' "MY_TASK2:user_table::PARTICIPANT";
```

### -wlogfile

|**Parameter**|**Value**|
|--------|--------|
|`-wlogfile`|`{ true  \| false }`|

If this parameter is set to true, log information overwrites any existing information in the log file. If it is set to false (the default), log information is appended.
