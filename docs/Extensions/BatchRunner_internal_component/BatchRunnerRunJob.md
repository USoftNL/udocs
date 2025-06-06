---
id: BatchRunnerRunJob
---

# BatchRunner.RunJob




:::note

This article is about the **RunJob** method of the [BatchRunner internal component](/docs/Extensions/BatchRunner_internal_component).

:::

## **BatchRunner.RunJob**

Runs a specific job.

Returns a string containing an XML document. The format of this document is the same as the output of the XML.SqlExport method. The contents are all records from the output parameter set table. If the job has an output parameter set, then the output XML contains exactly one output record with one column (just like XML.SqlExport). If the job does not have an output parameter set, the output column is NULL.

*Syntax*

Parameters (if any) are passed in the SELECT output list. The value is a SQL column expression, and the parameter is a column alias. A column alias that contains a special symbol such as a space ( ) or a hyphen must be surrounded by double quotes to avoid misinterpretation of the special symbol by the SQL parser. Double-quoting of column aliases is always legal. 

```sql
INVOKE    BatchRunner.RunJob WITH
SELECT    *job-name*
,         *value    parameter*
```

You can use function call syntax as an alternative for INVOKE. In this syntax, SELECT replaces INVOKE and the method name is followed by parentheses which surround parameters (if any are passed):

```sql
SELECT BatchRunner.RunJob(
*job-name*
,      ...
)
```

The required *job-name* must be the first input parameter. Other parameters (if any) are passed by name. They may be passed in any order.

*Example 1*

```sql
INVOKE    BatchRunner.RunJob 
WITH
SELECT    'MyFirstJob'
```

*Example 2*

```sql
SELECT    BatchRunner.RunJob('MyJob', 'True' "-quiet", contract_id "contract_id")
```


:::tip

In this example, **-quiet** is a [predefined parameter](/docs/Extensions/BatchRunner_internal_component/BatchRunner_internal_component.md).

:::
