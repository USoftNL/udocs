---
id: Messages_in_SQL_tasks_and_Import_tasks
---

# Messages in SQL tasks and Import tasks

Within SQL tasks and import tasks, you can call the MessageLanguage method of the internal RulesEngine component from an INVOKE statement.

If the message type is set to ERROR, and the Abort Mode setting for a task is set to Abort Task on Error, or Abort Job on Error, the task or job stops, and the message is added to the log file. This way, you can add restrictive rules that are specific for one batch job, and that you cannot or do not want to specify in a restrictive constraint. Examples are:

- Check the values of the supplied job input parameters.
- Check the records in an external set.
- Check imported records or values.

If the message type is set to INFORMATION or WARNING, the message is displayed or added to the log file, and the batch job continues.


:::note

To use the messageLanguage method in Batch, you need to create a system messages (.SMG) file first:

:::

From the Definer menu, choose Tools, Language, Create System Messages File to generate a flat file for your system messages. This file must have name:

```
application-name.SMG

```

*Example*

Check the values of the job input parameters supplied by a runtime user.

Suppose, a COUNTRY job input parameter must have value 'NL', 'UK', or 'US'. These values are not stored in an application table. If the supplied job input parameter has another value, you want to provide an error message.

1. In the Definer, define a new message categorie, and do not select the System check box:

```
Category: Batch Error

```

2. In the Definer, define a new system message:

```
Code:        1
Category:    Batch Error
Name:        WRONG_COUNTRY_PARAMETER
Message:     <Country_par> is not an allowed value. Allowed values are 'NL','UK', and 'US'.
Parameter:   Country_par
Seqno:       1

```

3. In the Batch job, add a SQL task with SQL statement:

```sql
INVOKE RulesEngine.MessageLanguage 
WITH
SELECT     'Batch Error'
,          'WRONG_COUNTRY_PARAMETER'
,          'ERROR'
,          country
FROM       job-input-parameter-set
WHERE      country NOT IN ('NL','UK','US')

```