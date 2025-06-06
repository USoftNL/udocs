# SQL Command tool

The SQL Command tool allows you to execute ad-hoc, individual SQL statements or a script composed of such statements.

SQL Command statements are executed in the context of your application. Manipulation statements (INSERT, UPDATE, DELETE, INVOKE) activate the Rules Engine (if any rules exist) in the same way as manipulations issued through an end user GUI element, such as a REST service client, web page, or application window.

SQL Command is also available in the USoft Definer, USoft Authorizer, USoft Service Definer, and USoft Benchmark applications.

## Starting SQL Command

To start SQL Command, click the SQL Command icon on the icon ribbon:

![](/api/Modeller%20and%20Rules%20Engine/Introducing%20USoft%20Modeller%20and%20Rules%20Engine/assets/c9552f4c-de5e-4890-9988-3460a357caeb.png)

If a Tools menu is available, you can also choose Tools, SQL Command from the main menu.

## Executing SQL statements and SQL scripts in SQL Command

 To execute individual SQL statements from SQL Command:

1. Type the statement in the upper box of the SQL Command window, or press the SQL Definer button to use the SQL Definer.
2. Press the Execute button.

Query results and messages (as applicable) appear in the lower box of the window. To view query results in a spreadsheet, press the Create button.

To compose and execute a script of multiple SQL statements in SQL Command:

1.    Type the statements in the upper box of the SQL Command window, or press the SQL Definer button to use the SQL Definer.
2.    Make sure each statement is separated from the next by a separator symbol. This symbol is the semi-colon ( ; ) by default. This symbol is optional after the last statement in the script.

> [!WARNING]
> Consider setting 'quitZeroRows' if you do not want processing to stop when a SELECT statement does not retrieve any records. There are many other similar options. See the "SQL command settings" section in this help topic for details.

3.    Consider saving the script to file. Press the Save button to do this.
4.    Press the Execute button.

Query results and messages (as applicable) appear in the lower box of the window. To view query results in a spreadsheet, press the Create button. 

Alternatively, you can execute an existing script by typing, in the upper box of the SQL Command window, the start keyword followed by the filename where the script is stored:

```
start <filename>
```

 

## Executing actions or methods in SQL Command

Within a script, you can use any action (= method) supported by USoft Developer.
To execute an action, in the upper box of the SQL command window, type the action keyword followed by the action call, for example:

```
action WindowCreate('Info Window', 'Computers')
```

In a script, you can mix actions and SQL statements. Action calls are delimited by newlines. SQL statements are separated from the remainder of a script by a separator symbol which is the semi-colon ( ; ) by default.

## SQL Command settings

 In a SQL Command script, you can include settings to influence the behavior of SQL Command. Each setting is composed of the word SET following by the name of the setting and the value it is set to.
*Syntax*

```
SET <setting> <value>
```

The SET command and \<setting> are case-insensitive. \<value> is case-sensitive.

*Example*

```sql
SET quitZeroRows False
SET quitOnError True

INVOKE RulesEngine.MessageLanguage
WITH
SELECT ...;

SELECT USXsl.Apply(
...);
```

Here is a alphabetic list of possible settings:

|**Setting**|**Value (case-sensitive)**|**Comments**|
|--------|--------|--------|
|`autoCommit`|`{ True \| False }`|If set to True, a commit will be requested after each record manipulation. The default is False.|
|`commentBegin`|`<begin-marker>  :=  { /* `|\<begin-marker> is a non-quoted string that is interpreted as the start of a comment. The default is /* .|
|`commentEnd`|`<end-marker>  :=  { */ \| }`|\<end-marker> is a non-quoted string that is interpreted as the end of a comment. The default is */ .|
|`echoComment`|`{ True \| False }`|If set to True (the default), comments are echoed to the screen.|
|`echoStatement`|`{ True \| False }`|If set to True, statements are echoed to the screen before they are executed. The default is False.|
|`gutter`|`<no-of-spaces> :=  { 2 \| }`|\<no-of-spaces> is an integer that is the number of spaces between output columns. The default is 2.|
|`module`|`<module>`|Module is a non-quoted string. When this property is set, the module context switches to the specified module.|
|`noSqlInMessages`|`{ True \| False }`|<p>If set to True, messages fired as a result of the script do not contain SQL statement text. Additional messages that only contain the erroneous SQL statement are not displayed at all. The default is False.</p><p>You can use the resource setting "*Script*noSqlInMessages: True" to achieve the same effect. Such a resource setting applies to all scripts (unless overruled locally within a script).</p>|
|`outputEncoding`|`<encoding>  :=  { ANSI \| UTF8 }`|<p>If the output goes to a file, encoding specifies the encoding of the output file. Encoding is a non-quoted string. Possible values are ANSI and UTF8.</p><p>Use "SET outputEncoding" before "SET reportFile" in the script.</p>|
|`quitOnError`|`{ True \| False }`|If set to True (the default), processing will stop as soon as an error is encountered.|
|`quitZeroRows`|`{ True \| False }`|If set to True (the default), processing will stop if a SELECT statement does not retrieve any records.|
|`reportFile`|`<filepath>`|If this option is specified, the output is written to a file. Filepath is a non-quoted string specifying the filename, or the filepath and filename, of the output file.<br/>			This option is useful if the output is larger than 32 KB, which is the maximum that the SQL Command window can display.|
|`rollbackOnError`|`{ True \| False }`|If set to True, a rollback is performed when an error occurs. The default is False.|
|`separator`|`<separator-symbol>  :=  { ; \| }`|\<separator-symbol> is the symbol interpreted as a separator between SQL statements in a script. The default is a semi-colon ( ; ).|
|`showErrorMessages`|`{ True \| False }`|If set to True, and showMessages is set to False, then only messages for real errors such as constraint violations are shown. The default is False.|
|`showMessages`|`{ True \| False }`|If set to True, messages generated while executing the script will be displayed on the screen. The default is False.|



 