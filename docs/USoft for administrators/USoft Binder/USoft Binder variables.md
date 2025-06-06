# USoft Binder variables

In USoft Binder property values, you can use predefined and user-defined variables. For example, you can set the Name property of a User Application item to

```
User Application {user}
```

where '{user}' is the predefined 'user' variable that has the database user (specified on the Database tab of the Project Properties sheet) as its value. If the current database user is SALES_DEV, the item name will be displayed as

```
User Application SALES_DEV
```

in the USoft Binder main window and also as a title bar across the top of the User Application window.

This makes the {user} variable very useful:

- Whenever a user opens an item, it remains visible at all times which database or database account is being accessed.
- You can easily duplicate a USoft Binder file for use with a different database user: the only place where you need to adapt the username is in the Database tab of the Project Properties sheet (File, Project Properties from the menu).

Variables are also useful in the Startup Options property of Free Objects.

You can also use variables in the Database property on the Database Tab of the Project Properties sheet.

### Referring to USoft Binder variables

To refer to a USoft Binder variable, surround the variable name by curly brackets {} as in the example. Type the variable name using either the exact case spelling, or all-uppercase spelling. Any whitespace around the brackets will be ignored. The variable name must be either a predefined variable or a user-defined variable.

### Predefined USoft Binder variables

The following predefined variables can be referred to in all cases. Each corresponds to a project property (settable by choosing File, Project Properties, Project, Variables from the menu), except **systemdir**:

|**Variable**|**Corresponds with project property**|
|--------|--------|
|projectname|Project Name|
|module  |Module  |
|language|Language|
|systemdir|(none; the value is the USoft installation directory)|
|bindir  |(none; the value is the USoft bin directory)|



In addition, there are predefined variables for database properties. They depend on whether or not you have set up a separate user environment.

### Common Properties for Repository and Application

If you have selected "Common Properties for Repository and Application", then you can refer to the following predefined variables for database properties:

|**Variable**|**Corresponds with project property**|
|--------|--------|
|user    |User    |
|dbpassword|Password|
|rdbms   |RDBMS   |
|db      |Database|
|owner   |Owner   |



###  

### Separate Properties for Repository and Application

If you have selected "Common Properties for Repository and Application", then you can refer to the following predefined variables for database properties:

|**Variable**|**Corresponds with

Repository property

**|**Variable**|**Corresponds with

Application property

**|
|--------|--------|--------|--------|
|repuser |User    |user    |User    |
|reppassword|Password|password|Password|
|reprdbms|RDBMS   |rdbms   |RDBMS   |
|repdb   |Database|db      |Database|
|repowner|Owner   |owner   |Owner   |



###  

### User-defined USoft Binder variables

In a USoft Binder project, in addition to predefined variables, you can create variables of your own in the Variables field of the Project tab (choose File, Project Properties to access this tab).

Enter the variable name, followed by an equal sign (=), followed by the value and a semi-colon (:), for example:

```
port=2233; color=blue;
```

Extra white spaces around the name or value will be ignored.

You can add as many variables as you like.

You can refer to a variable in many places in USoft Binder. To do this, place the variable name in curly brackets, using either exact case spelling or all-uppercase spelling:

```
{port}
{PORT}

```

Variable values are case-sensitive, variable names are not.

USoft Binder standard variables are overwritten by a user-declared variable of the same name, but the **dbpassword** and **reppassword** standard variables cannot be overwritten.