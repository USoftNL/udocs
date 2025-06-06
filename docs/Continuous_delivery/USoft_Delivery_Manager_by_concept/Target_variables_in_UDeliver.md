---
id: Target_variables_in_UDeliver
---

# Target variables in UDeliver

> [!NOTE]
> This article is about the **target variable** concept in USoft Delivery Manager ("UDeliver”).

**See also**

- [Setting a target variable](/docs/Continuous%20delivery/Delivery%20Manager%20basic%20procedures/Setting%20a%20target%20variable.md)

A  *variable* is a variable element in a text string that is given a value ( = that is expanded; of which the name is substituted by a value) at a later time than when the text string is declared.

A  *target variable* is a text string that is expanded *after* it is handed to other environments than Development (the "targets"). The sole purpose of target variables is [configuration](/docs/Continuous%20delivery/Understanding%20USoft%20Delivery%20Manager/Release%20management%20Configure%20phase.md). They provide an optional way to tailor (configure) released deliverables to a specific target machine or target environment.

Target variables may occur :

- As values of Rules Service settings.
- In SQL statements contained in an upgrade script.

An occurrence of a target variable is expanded by running a deploy script away from the Delivery Manager client/server application.

The name of a target variable must start with **${** and end with **}**. The name contained by the curly braces must be made up of alphanumeric characters. Full stops, hyphens and underscores are also allowed.

Names of source variables are case-sensitive. You cannot have overlapping target variable names, nor can you have names that would overlap if it were not for the lowercase/uppercase distinction.

Names of target variables are in a different namespace than names of source variables.

The value of a target variable is allowed to be any text string, including the empty string.

*Example*

This example shows a target value used to set the location where you release:

```sql
INVOKE XML.EXPORT WITH
SELECT    '${release}\custom\initdata\Catalogue.xml' WriteOutputTo
,         *
FROM      tour

```

The variable is expanded when the task is checked. The result could look like this:

```sql
INVOKE XML.EXPORT WITH
SELECT    \\fs\myapp$\Releases\2.1.12\custom\initdata\Catalogue.xml' WriteOutputTo
,         *
FROM      tour

```