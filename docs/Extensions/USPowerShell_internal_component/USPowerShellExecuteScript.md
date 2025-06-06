---
id: USPowerShellExecuteScript
---

# USPowerShell.ExecuteScript



> [!NOTE]
> This article is about the **ExecuteScript** method of the [USPowerShell internal component](/docs/Extensions/USPowerShell_internal_component).

## **USPowerShell.ExecuteScript**

Executes a script written in Windows PowerShell®.

Windows PowerShell® is a task-based command-line shell and scripting language designed especially for system administration. Built on the .NET Framework, Windows PowerShell helps IT professionals and power users control and automate the administration of the Windows operating system and applications that run on Windows. Many examples and tips can be found on the internet.

*Syntax*

```sql
INVOKE USPowerShell.ExecuteScript WITH
SELECT     *powershell-script*
,          *script-parameter,    value*
,          …
```

The required *powershell-script* identifies the script to be executed.

The optional *script-parameter - value* pairs specify parameters passed to the script. These parameters may be referred to within the script code by using the standard PowerShell® dollar-sign syntax. See the examples below.

The USPowerShell internal component is a stateful component, so any value set in a PowerShell® script can be used later in a different call to the ExecuteScript method.

In addition to the PowerShell® variables and other script parameters that are available by default, you can use a USoft-defined object called $USEngine. This object contains an instance of the USoft RulesEngine and has two methods which can be called from a PowerShell® script:

-     $USEngine.ExecuteSQLQuery
-     $USEngine.ExecuteSQLManipulation

Both methods take a SQL statement as the first parameter followed by 0 or more parameters with values that can be used inside the SQL. The values can be accessed using the placeholder notation :1, :2 ... The ExecuteSQLQuery() method returns the data retrieved. The ExecuteSQLManipulation method returns the number of rows manipulated.

The examples below demonstrate in more detail how these methods can be used in a PowerShell® script.

## Example: Simple script execution

Here is an example of the execution of a simple PowerShell script:

```sql
INVOKE    USPowerShell.ExecuteScript
WITH
SELECT    'Write-Output "Hello World"'
```

This results in:

```
Hello World
```

## Example: Script execution with parameters

Here is an example of the execution of a simple PowerShell script with script parameters:

```sql
INVOKE    USPowerShell.ExecuteScript
WITH
SELECT   'Write-Output "The values of the parameters passed are $PARAM1 and ''$PARAM2''"'
,        'PARAM1', 133.57
,        'PARAM2', 'Parameter value 2'
```

This results in:

```
The values of the parameters passed on are 133.57 and 'Parameter value 2'
```

## Example: Stateful test

Here is an example which demonstrates the statefulness of the PowerShell component
 

```sql
INVOKE USPowershell.ExecuteScript
WITH
SELECT '$mymsg = "Hello World, I''m stateful." ';

INVOKE USPowershell.ExecuteScript
WITH
SELECT 'Write-Output $mymsg'
```

This results in:

```
Hello World, I'm stateful.
```

## Example: Dynamically adding C#

Here is an example of how the PowerShell script functionality may be extended by adding C# code:
 

```sql
INVOKE USPowershell.ExecuteScript
WITH
SELECT 'Add-Type -Language CSharpVersion3 -TypeDefinition @"
using System;

public class Class1
{
    public static String MyMethod()
    {
       return "Hello World!";
    }
}
"@';

INVOKE USPowershell.ExecuteScript
WITH
SELECT 'Write-Output([Class1]::MyMethod())'
```

This results in:

```
Hello World!
```

Since USPowershell is a stateful component, once the Class has been added, it remains available for later use.

## Example: Converting MS Word to PDF

Here is an example of a PowerShell script which uses MS Word to convert a Word document to PDF:

```sql
INVOKE USPowershell.ExecuteScript
WITH
SELECT '
$word_app = New-Object -ComObject Word.Application
$document = $word_app.Documents.Open("C:\Temp\MyDocument.docx")
$document.SaveAs([ref] "C:\Temp\MyDocument.pdf", [ref] 17)
$document.Close()
$word_app.Quit()
'
```

This causes a file "C:\\Temp\\MyDocument.pdf" to be generated.

## Example: Query call to the Rules Engine

Here is an example of a PowerShell script which uses the $USEngine object to execute a database query:

```sql
INVOKE USPowershell.ExecuteScript
WITH
SELECT 'Write-Output $USEngine.ExecuteSQLQuery("select table_name from t_table") '
```

This results in a list of tables, such as:

```
TABLE_SEQUENCE_NUMBERS
T_EVENT
T_APP_TIME
```

## Example: Manipulation call to the Rules Engine

Here is an example of a PowerShell script which uses the $USEngine object to perform a manipulation.
The return value is the number of records affected by the manipulation.

```sql
INVOKE USPowershell.ExecuteScript
WITH
SELECT 'Write-Output $USEngine.ExecuteSQLManipulation("update t_table set table_short = ''TEV'' where table_name = ''T_EVENT'' ") '
```

This results in:

```
1
```

## Example: Call to the Rules Engine with variables

Here is an example of a PowerShell script which uses the $USEngine object to execute a database query and passes variables to the SQL statement:

```sql
INVOKE USPowershell.ExecuteScript
WITH
SELECT 'Write-Output $USEngine.ExecuteSQLQuery("select table_name || :1, :2 from t_table ", "_TST", 12345)  '
```

This results in:

```
TABLE_SEQUENCE_NUMBERS_TST    12345
T_APP_TIME_TST    12345
T_EVENT_TST    12345
```

## Example: Query call to the Rules Engine and loop through result

Here is an example of a PowerShell script which uses the $USEngine object to execute a database query and then loops through the returning recordset:

```sql
INVOKE USPowershell.ExecuteScript
WITH
SELECT '$USEngine.ExecuteSQLQuery("select domain_name, f_total_length from t_domain")  | foreach {
     "The first column is of type " + $_[0].GetType() + " and has the value " + $_[0]
     "The second column is of type " + $_[1].GetType() + " and has the value " + $_[1]
}'
```

This results in:

```
The first column is of type string and has the value LONG_TEXT
The second column is of type decimal and has the value 500
The first column is of type string and has the value SHORT_TEXT
The second column is of type decimal and has the value 1
(...)
```

 