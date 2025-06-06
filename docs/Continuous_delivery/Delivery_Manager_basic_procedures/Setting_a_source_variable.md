---
id: Setting_a_source_variable
---

# Setting a source variable

First check if the variable you want to create or set already exists as a predefined or user-defined source variable.

To view **predefined** source variables:

1. Choose Define, Source variables, Predefined from the menu.

Each predefined source variable is for an absolute path. Its value contains backslashes but not forward slashes, and does not end in a backslash.

To view **user-defined** source variables:

1. Choose Define, Source variables, User-defined from the menu.

To **create** or **set** a user-defined source variable:

1. Choose Define, Source variables, User-defined from the menu.

2. In the Name column, type the name of your source variable.

The name must start with **${** and end with **}**. The name contained by the curly braces must start with a letter (**a-z, A-Z**), and the rest of that name must be made up of alphanumeric characters. Full stops, hyphens and underscores are also allowed.

Source variable names are case-sensitive. You are not allowed to create 2 source variable names that overlap, or that would overlap if it were not for the lowercase/uppercase distinction.

3. In the Value column, type the value of your source variable, and save work. The value can be any text string:

```
True
MYAPP

```

A source variable may refer to another source variable (recursive substitution): 

```
${release}\scripts\using
c:\${myvariable22}\readme.txt

```

A typical use of source variables is to help represent absolute paths to folders and files. When creating this type of variable, make sure its value starts with a drive letter or a shared drive abbreviation, that it contains backslashes but no forward slashes, and that it does not end in a backslash. For example:

```
c:\temp
\\fs\Releases\custom\data

```