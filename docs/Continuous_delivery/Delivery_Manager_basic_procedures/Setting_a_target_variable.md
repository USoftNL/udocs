---
id: Setting_a_target_variable
---

# Setting a target variable

Target variables enable configuration by computer. For a complete overview of the tasks involved in configuring your application version, go to the Configure help topic.

This help topic assumes that you have already declared the different computers in your DTAP arrangement. If you have no, do this first: choose Release, Computers from the menu, enter the computer names, and save work.

To **create** or **set** values for a target variable:

1. Choose Release, Target variables from the menu.

2. In the "Target variable" field, type the name of your target variable, or query the variable if it already exists.

The name must start with the symbols `${` and end with the symbol `}`. The name contained by the curly brackets must be made up of alphanumeric characters. Full stops, hyphens and underscores are also allowed.

Target variable names are case-sensitive.

3. Press the Populate button.

A list of computers appears.

4. For each computer, declare the value of the target variable. You can express that the value is null by leaving the field empty. Otherwise, the value can be any text string:

```
True
MYAPP
C:\temp\releases\test

```

A target variable value may refer to another target variable:

```
C:\temp\releases\${custom_path}\temp
```

A typical use of target variables is to help represent absolute paths to folders and files. When creating this type of variable, make sure its value starts with a drive letter or a shared drive abbreviation, that it contains backslashes but no forward slashes, and that it does not end in a backslash. For example:

```
c:\temp
\\fs\Releases\custom\data

```

5.  Save work.


:::tip

You can also view and query all target variable settings for all computers in a single grid. To do this, choose Release, Computer settings from the menu.

:::
