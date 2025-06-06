# Run SQL command



> [!NOTE]
> This article is about the **Run SQL command**[Delivery Manager action](/docs/Continuous%20delivery/Delivery%20Manager%20actions%20by%20name).

## **Run SQL command**

Logs on to "Application" in "Database account" and executes a SQL statement specified as "SQL command".

> [!NOTE]
> This action has nothing to do with the SQL Command tool as it is available in the various USoft tools. That tool has a much wider applicability. The sole purpose of the "Run SQL command" Delivery Manager action is to execute a data manipulation statement as part of a Delivery Manager task.

If "Metadata" = 'Y', logs on to the USoft Definer, as opposed to the User Application.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Application|Application|No      |
|Database account|Database account|No      |
|SQL Command|SQL Command|No      |
|Metadata Y/N|Option flag|No      |



### Rules

"Application" may not be 'USD' or 'USTESTER'. The "Run SQL command" action is not supported for USoft Definer and USoft Benchmark.

### Running from flat files or repository

The "Run SQL command" action runs automatically from flat files if "Application" is either 'UDELIVER' or 'USERVICE'.

In other cases, ie., if "Application" is either 'USAUTH' or a User Application name, the "Run SQL command" action runs automatically from repository.

### Source variables in the "SQL Command" parameter value

In the "SQL command" parameter value, you can use source variables in the SELECT list of the following INVOKE calls:

- INVOKE XML.EXPORT,
- INVOKE XML.IMPORT,
- INVOKE USXSL.APPLY2FILE,
- INVOKE BATCHRUNNER,

if the SELECT output list contains only one or more of the following:

- Constants,
- Simple column names,
- The asterisk ("*”) wildcard.

In other words, a SELECT output list using a source variable may NOT also contain any SQL functions. Non-quoted and double-quoted aliases are allowed. Constants may be single-quoted (string constants) or non-quoted (numeric constants).

Source variables are resolved when you have the task checked (press the Check button in the Define Tasks window). You can inspect the result in the Value column of the Parameters box.

The following 2 examples of "SQL Command" parameter values show legal use of source variables in "SQL Command" parameter values:

*Example 1*

```sql
INVOKE USXSL.EXPORT WITH
SELECT       '${release}\custom\file1.xml'  WriteOutputTo
,            *
FROM         mytable
```

*Example 2*

```sql
INVOKE BATCHRUNNER.myjob WITH
SELECT       '${install}\temp\file1.xml'     "input_file"
,            column1                         "computed_column"
,            220                             "factor"
,            '${release}\custom\file1.xml'   "output_file"
```

 