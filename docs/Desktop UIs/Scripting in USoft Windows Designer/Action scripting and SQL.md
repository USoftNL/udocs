# Action scripting and SQL

Action scripts that programmatically make things happen in the GUI interface, such as raising a tab page or opening a window when a user clicks a button, are one thing.

USoft applications are data-intensive and therefore you can easily mix action statements with SQL using the **SqlScript()** action and **decisions.**

The **SqlScript()** action provides a way to execute SQL in an action script context:

- Using SELECT, this allows you to retrieve values from the database or the screen, and display them in the screen or store them in global variables.
- Using INSERT, UPDATE or DELETE, this also allows you to get values from the screen or from global variables and use them in a data manipulation operation in the database.

The **decision** construct provides a way to execute an SQL query and run an action script (called the "Yes Action") for each of the query results or, if the result returns no records, run an alternative action script (called the "No Action"). The **ActionDecision()** action allows you to call a decision from an action script, during which call you can optionally pass input parameters.

This help topic contains typical examples of tasks that require a mix of action statements and SQL.

### Example 1: Getting a value from a field

This example shows shortcut strategies. To get full functionality around getting values, call decisions, using the technique demonstrated in Example 3.

You can get a value from a field by using object path syntax, optionally spelling out the **value** keyword:

```
query.my_field.value()
query.my_field()

```

For example, you can get a value from "from_field" and put it in "to_field":

```
query.to_field( query.from_field() )  
```

An alternative is to use SELECT in a SqlScript() call, in which you prefix the SQL output expression by a colon (**:**).  If you use SELECT in SqlScript() as a stand-alone action statement, you must express in the *alias* of the output expression what to do with the retrieved value. A variety of object paths and old-style expressions are supported for this syntax.

Using an object path:

```
SqlScript( select :"query.from_field()" TO_FIELD )   
SqlScript( select :"query.from_field.value()" TO_FIELD )

```

Using a column name:

```
SqlScript( select :from_field TO_FIELD )
SqlScript( select :FROM_FIELD TO_FIELD )

```

Using an old-style navigation path:

```
SqlScript( select :"<-*from_field" TO_FIELD )
```

You can also retrieve the value from the database, making sure that the result set contains exactly 1 record:

```
SqlScript( select from_field TO_FIELD from table where ... ) 
```

For an explanation of syntax details, go to the Actions help topic.

### Example 2: Setting a field to a value

This example shows shortcut strategies. To get full functionality around getting values, call decisions, using the technique demonstrated in Example 3.

You can set a field to a value from another field using object path syntax:

```
query.to_field( query.from_field() )  
```

An alternative is to use SELECT in a SqlScript() call, using the target field name as *alias* of the output expression. A variety of object paths and old-style expressions are supported for this syntax.

Using an object path:

```
SqlScript( select :"query.from_field()" TO_FIELD )   
SqlScript( select :"query.from_field.value()" TO_FIELD )

```

Using a column name:

```
SqlScript( select :from_field TO_FIELD )
SqlScript( select :FROM_FIELD TO_FIELD )

```

Using an old-style navigation path:

```
SqlScript( select :"<-*from_field" TO_FIELD )
```

### Example 3: Performing actions based on screen data

An info box for "Persons" contains a tab control. This control has 2 tab pages. Each page has with separate fields to fill out, depending on whether the person is a local resident or not. A decision is called to determine, for the person currently in view, which of the 2 tab pages must be made selected as the active tab page.

In the Pre-Record-Entry event property of the info box, call a decision and pass the RESIDENT Yes/No flag for the person currently in view as an input parameter:

```
ActionDecision( TAB_PAGE_BY_RESIDENT, query.resident() )
```

(You may want to make this same call also from the Post-change property of the Resident field.)

The TAB_PAGE_BY_RESIDENT decision looks like this:

*Decision SQL*

```
:1 = 'Y'
```

*Yes Action*

```
Tab_1.ControlSetActiveTab( 'Page 1' )
```

*No Action*

```
Tab_1.ControlSetActiveTab( 'Page 2' )
```

### Example 4: Performing actions based on retrieved data

An info box for "Persons" contains a tab control. This control has 2 tab pages. Each page has with separate fields to fill out, depending on whether the person is a local resident or not. A decision is called to determine, for the person currently in view, which of the 2 tab pages must be made selected as the active tab page.

In the Pre-Record-Entry event property of the info box, call a decision and pass the primary key PERSON_ID as an input parameter:

```
ActionDecision( TAB_PAGE_BY_RESIDENT, query.person_id() )
```

The TAB_PAGE_BY_RESIDENT decision looks like this:

*Decision SQL*

```
SELECT       ''
FROM         subscriptor
WHERE        person_id = :1
AND          resident = 'Y'

```

*Yes Action*

```
Tab_1.ControlSetActiveTab( 'Page 1' )
```

*No Action*

```
Tab_1.ControlSetActiveTab( 'Page 2' )
```

### Example 5: Export file name based on screen data

A number of different window classes share a common "Report" button. If the button is pressed, a data report is written to a file. The file has a variable name that identifies the object reported on. That name is taken from the current info window.

This decision is called from a "Report" button.  The button has its Action property set to:

```
ActionDecision( MAKE_REPORT )
```

The MAKE_REPORT decision looks like this:

*Decision SQL*

```
SELECT RulesEngine.GetProperty('tempdir') || '\ClipBoard_' || :"CurrentInfoBox" || '.xml'
WHERE NOT :"CurrentInfoBox"  IS NULL

```

*Yes Action*

```
 DataReport( :1 )
```

*No Action*

```
ActionDoNothing()
```

 

 