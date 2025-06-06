# BatchRunner job methods



> [!NOTE]
> This article is about **job methods** of the [BatchRunner internal component](/docs/Extensions/BatchRunner%20internal%20component).

## **BatchRunner.job**

Runs a specific job.

Returns a record set if the job has an output parameter set. Otherwise, returns the NULL value. If a record set is returned, each record has as many column values are there are elements in the output parameter set.

> [!TIP]
> The job name is the name of the component method. For each job you define, the internal BatchRunner component automatically exposes a method by the name of the job.

*Syntax 1*

```sql
INVOKE   BatchRunner.*job*
WITH
SELECT   *value     parameter*
,        ...
```

Parameters (if any) are passed in the SELECT output list. *Value* is a SQL column expression, and *parameter* is a column alias. A column alias that contains a special symbol such as a space ( ) or a hyphen must be surrounded by double quotes to avoid misinterpretation of the special symbol by the SQL parser. Double-quoting of column aliases is always legal.

Parameters are always passed by name and may appear in any order.

*Syntax  2*

If the job call returns at most one (that is: 0 or 1) records and the job has exactly 1 output parameter, then you can use function call syntax as an alternative for INVOKE. In function call syntax, SELECT replaces INVOKE and the method name is followed by parentheses. Input parameters (if any) are passed inside the parentheses that follow the job name:

```sql
SELECT   BatchRunner.*job* (
*value     parameter*
,        ...
)
```

*Example*

A job called **MyJob** takes a **contract_id** value and returns a record structure defined by a primary key and two other columns. It may return any number of records or none at all. Returned records are inserted into a table T1. The job execution itself may involve any additional number of data manipulations.

```sql
INSERT INTO T1 (
          pk
,         col1
,         col2
)
INVOKE    BatchRunner.MyJob WITH
SELECT    'BZ-23'    "contract_id"
,         'true'     "-quiet"
```

> [!TIP]
> In this example, **-quiet** is a [predefined parameter](/docs/Extensions/BatchRunner%20internal%20component/BatchRunner%20internal%20component.md).