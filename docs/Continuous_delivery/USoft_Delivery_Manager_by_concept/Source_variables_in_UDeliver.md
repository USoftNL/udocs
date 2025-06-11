---
id: Source_variables_in_UDeliver
---

# Source variables in UDeliver

:::note

This article is about the **source variable** concept in USoft Delivery Manager (“UDeliver”).

:::

**See also**

- [Setting a source variable](/docs/Continuous_delivery/Delivery_Manager_basic_procedures/Setting_a_source_variable.md)

A *variable* is a variable element in a text string that is given a value ( = that is expanded; of which the name is substituted by a value) at a later time than when the text string is declared.

A *source variable* is a text string that is expanded *before* it is handed to other environments than Development (the "source"). Source variables play a role in Development only.

You can use source variables in 4 contexts:

- Values of task step parameters of type "Folder or File".
- Values of task step parameters of type "SQL Command".
- Custom XSL documents.
- Registry XML documents.

The name of a source variable must start with the symbols `${` and end with the symbol `}`.  The name contained by the curly braces must start with a letter (**a-z, A-Z**), and the rest of that name must be made up of alphanumeric characters. Full stops, hyphens and underscores are also allowed.

Names of source variables are case-sensitive. You cannot have overlapping source variable names, nor can you have names that overlap if it were not for the lowercase/uppercase distinction.

The value of a source variable is allowed to be any text string. Source variables support recursive substitution.

After you initialise a release tree, Delivery Manager distinguishes a number of predefined source variables. These identify special folders on the file system:

| Predefined source variables | Description |
|----------------------------|-------------|
| `${previous}`  | The folder where the deliverables of the previous version were released to. |
| `${release}`   | The folder where the deliverables of the current version are released to. |
| `${root}`      | The parent folder where deliverables of current and past releases are found. |
| `${prev_vs}`   | The previous release version number (or name) |
| `${curr_vs}`   | The current release version number (or name) |

:::note

While source variables describe settings used on source machines for release, and [registries](/docs/Continuous_delivery/USoft_Delivery_Manager_by_concept/Registries_in_UDeliver.md) describe target machines for deployment, teams have reported that variable substitution in registry XML is generally useful. For this reason, from USoft 10.0.1C, you can use source variables in registry XML. They are automatically substituted by values when you release the registry. The substitutions can be previewed on the Settings tab in the Registries window.

:::

*Example*

This example shows a source variable in a SQL statement submitted as a task step parameter of type "SQL Command."

```sql
INVOKE XML.EXPORT WITH
SELECT    '${release}\custom\initdata\Catalogue.xml' WriteOutputTo
,         *
FROM      tour

```

The variable is expanded when the task is checked. The result could look like this:

```
INVOKE XML.EXPORT WITH
SELECT    \\fs\myapp$\Releases\2.1.12\custom\initdata\Catalogue.xml' WriteOutputTo
,         *
FROM      tour

```

## Recursive substitution in source variables

Source variables support *recursive substitution*. In the input value of a source variable, you can use a placeholder that references a different source variable. This placeholder is automatically expanded using the value of the referenced variable:

|**Variable**|**Input value**|**Value**|
|--------|--------|--------|
|`${product_version}`|3.5     |3.5     |
|`${product_name}`|XProduct `${product_version}`|XProduct 3.5|