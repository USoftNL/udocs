---
id: SqlScript
---

# SqlScript()




:::note

This article is about the **SqlScript** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **SqlScript()**

Passes a script of one or more SQL statements for execution by the Rules Engine.

*Syntax*

```
SqlScript( { *sql-command-setting* | *sql-statement*; } 

           ... )

*sql-command-setting*  :=  SET *setting-name setting-value*
```

A script is a sequence of commands made up of :

- Optional *sql-command-settings,* which are**not followed by a separator symbol,
- One or more *sql-statements,* each**followed by a semicolon (;), or whatever other separator symbol has been set (see the 'separator' setting later in this article). If there is a single *sql-statement,* the separator symbol is optional.

Each *sql**-statement* is an INSERT, UPDATE, DELETE, INVOKE, or SELECT statement.

*Example*

```sql
SqlScript(

  SET quitZeroRows False
  SET quitOnError True

  INVOKE RulesEngine.MessageLanguage
  WITH
  SELECT ...;

  SELECT Usxsl.Apply2File(
  ...);

)
```

## Messages in SqlScript()

By default, if a script is executed by SqlScript() messages are NOT passed to the caller. This is a notable difference between SqlScript() and executing the script directly in the SQL Command window. You can get SqlScript() to pass messages by including the setting:

```
SET showErrorMessages True
```

If you want ALL messages to be passed, include:

```
SET showMessages True
```

## Passing application variables to a SQL script

In SqlScript() calls, if you surround the SQL script by **back ticks** ( **`** ), you can use numbered placeholders between these back ticks. This syntax is similar to string templates (or string interpolation) in JavaScript/ES6.

In this example, the value held by query.name.value() is substituted at the position of the **:1** placeholder is, and the value held by Variables.Text_Box_1() is substituted at the position of the :**2** placeholder:

```
SqlScript(
`update  tour_programme 
 set     max_age = :2 
 where   destination = :1 
 and     tour_type = 'ISLAND SUNTANNER'`
 ,		   query.name.value()
 ,		   Variables.Text_Box_1()
)
```

If the first value is the string ‘AUSTRALIA’ and the second value is the integer 35, this is equivalent to:

```
SqlScript(
`update  tour_programme 
 set     max_age = :2 
 where   destination = :1 
 and     tour_type = 'ISLAND SUNTANNER'`
 ,       'AUSTRALIA'
 ,       35
)
```

This, in turn, is equivalent to:

```sql
update  tour_programme 
set     max_age = 35 
where   destination = 'AUSTRALIA' 
and     tour_type = 'ISLAND SUNTANNER'
```

## Querying a value for later use in a script

Within a script, you can create a variable and then refer to it in one or more subsequent steps. Use a SELECT statement to retrieve the value and a column alias to name the variable:

```
SqlScript(
    SELECT FLOOR( num_years / 365 ) "**myDaysVar1**"
    FROM   ...;

    INSERT INTO ( ... )
    SELECT    'yes'
    WHERE     **:myDaysVar1** > 14
    AND       ...;
)
```


:::danger

With this technique, you are effectively creating *global* variables that are available in the entire application session. This is always dangerous because it is hard to know exactly when they are next referred to. Make sure you call each given variable only in 1 place: the 1 Decision Yes Action.

:::

## Using a value retrieved by Decision SQL in a SqlScript() call

To catch a value retrieved by Decision SQL and then use it in a SqlScript() call from the decision’s Yes Action, surround the SQL script by back ticks (`) and use numbered placeholders:

(Decision SQL:)

```sql
SELECT  :1
,       :2
,       typename
FROM    t_e_type
WHERE   application_id = :2 
AND     is_class ='Y'
AND     typename IN
(
   SELECT page_name 
   FROM   t_page_in_page_set pps
   ,      t_e_type tt
   WHERE  pps.page_set_name = :1
   AND    tt.id = :2
   AND    pps.application =  tt.typename
)
```

(Yes Action:)

The first argument is a back-ticked SQL script in which **:1** is a placeholder for the second argument. The second argument, **:3**, refers to the third output column of the Decision SQL:

```

SqlScript(
`
  INSERT INTO windows_in_set( name ) 
  SELECT :windowToList 
  FROM   dual
  WHERE NOT EXISTS(
    SELECT '' 
    FROM   windows_in_set 
    WHERE  name = :1
  )
`
, :3
)
```

## Catching errors in SqlScript()

Use the StartCatchingErrors(), StopCatchingErrors() and GetLastCaughtErrors() actions of the RulesEngine internal component if you want to check if any errors, or a specific error, have occurred during execution of the SQL script. Reported error messages can be stored in the database or saved to a file if required.

*Example*

```
SqlScript(SELECT RulesEngine.StartCatchingErrors('No'))

compute-set(:ext_set_name, :2,  :3)

ActionDecision(TB_COMPUTE_ELEMENTS_STORE_REC, :4)

SqlScript(

  SET quitzeroRows False
  SET showMessages True

  SELECT RulesEngine.StopCatchingErrors();

  UPDATE  t_ext_set
  SET     correct = DECODE(RulesEngine.GetLastCaughtErrors() , NULL, 'Y', 'N')
  WHERE   set_name = :ext_set_name;

)
```

## Setting a field to a value retrieved by a query

Using SqlScript() you can set a field in a USoft C/S interface to a value retrieved by a query. Use a column alias in the SELECT list that names the column control (the field). The following statement sets a field based on a PARTICIPANT data source item to a retrieved PERSON_NAME column value:

```
SqlScript(
  SELECT   p.person_name   "PARTICIPANT"
  FROM     passenger p
  WHERE    p.person_id = ...
)
```

The column alias refers to the field *by name.* It addresses a "PARTICIPANT" field in the main column box - the column box corresponding to the window's default data source.

To address a field in a more specific location, for example, a "PARTICIPANT" field on a tab page, supply a more specific path:

```
Tab_1.Page_1.SqlScript(
  SELECT   p.person_name   "PARTICIPANT"
  FROM     passenger p
  WHERE    p.person_id = ...
)
```


:::tip

Use the tree view in the Object Activator tool to compose such a path.

:::

## SqlScript() settings

In a SqlScript() call, you can make settings that influence the behaviour of your script. These same settings may also be used in the SQL Command tool.

*Syntax*

```
SET  *setting  value*
```

The SET command and *setting* are case-insensitive. *Value* is case-sensitive.

*Example*

```
SET quitZeroRows False
```

### autoCommit

*Values*

```
{ True | False }
```

If set to True, a commit will be requested after each record manipulation. The default is False.

 

### commentBegin

*Values*

```
*begin-marker*  :=  { /* | *non-quoted-string* }
```

*Begin-marker* is a non-quoted string that is interpreted as the start of a comment. The default is /* .

 

### commentEnd

*Values*

```
*end-marker*  :=  { */ | *non-quoted-string* }
```

*End-marker* is a non-quoted string that is interpreted as the end of a comment. The default is */ .

 

### echoComment

*Values*

```
{ True | False }
```

If set to True (the default), comments are echoed to the screen.

 

### echoStatement

*Values*

```
{ True | False }
```

If set to True, statements are echoed to the screen before they are executed. The default is False.

 

### gutter

*Values*

```
*no-of-spaces* :=  { 2 | *integer* }
```

*No-of-spaces* is an integer that is the number of spaces between output columns. The default is 2.

 

### module

*Values*

```
*module*
```

*Module* is a non-quoted string. When this property is set, the module context switches to the specified *module*.

 

### noSqlInMessages

*Values*

```
{ True | False }
```

If set to True, messages fired as a result of the script do not contain SQL statement text. Additional messages that only contain the erroneous SQL statement are not displayed at all. The default is False.

You can use the resource setting "*Script*noSqlInMessages: True" to achieve the same effect. Such a resource setting applies to all scripts (unless overruled locally within a script).

 

### outputEncoding

*Values*

```
*encoding*  :=  { ANSI | UTF8 }
```

If the output goes to a file, *encoding* specifies the encoding of the output file. *Encoding* is a non-quoted string. Possible values are ANSI and UTF8.


:::warning

Use "SET outputEncoding" **before** "SET reportFile" in the script.

:::

 

### quitOnError

*Values*

```
{ True | False }
```

If set to True (the default), processing will stop as soon as an error is encountered.

 

### quitZeroRows

*Values*

```
{ True | False }
```

If set to True (the default), processing will stop if a SELECT statement does not retrieve any records.

 

### reportFile

*Values*

```
*file-path*
```

If this option is specified, the output is written to a file. *Filepath* is a non-quoted string specifying the filename, or the filepath and filename, of the output file.

This option is useful if the output is larger than 32 KB, which is the maximum that the SQL Command window can display.

 

### rollbackOnError

*Values*

```
{ True | False }
```

If set to True, a rollback is performed when an error occurs. The default is False.

 

### separator

*Values*

```
*separator-symbol*  :=  { ; | *character* }
```

*Separator-symbol* is the character interpreted as a separator between SQL statements in a script. The default is a semi-colon ( ; ).

 

### showErrorMessages

*Values*

```
{ True | False }
```

If set to True, and showMessages is set to False, then only messages for real errors such as constraint violations are shown. The default is False.

 

### showMessages

*Values*

```
{ True | False }
```

If set to True, messages generated while executing the script will be displayed on the screen. The default is False.

 