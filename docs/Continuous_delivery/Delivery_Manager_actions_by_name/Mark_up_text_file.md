---
id: Mark_up_text_file
---

# Mark up text file




:::note

This article is about the **Mark up text file**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

:::


:::warning

**Mark up text file** is intended for use with [target variables](/docs/Continuous_delivery/USoft_Delivery_Manager_by_concept/Target_variables_in_UDeliver.md) and not with [source variables](/docs/Continuous_delivery/USoft_Delivery_Manager_by_concept/Source_variables_in_UDeliver.md).

:::

## **Mark up text file**

Creates, in a text file that has a non-XML format, such as HTML, JSON, CSS, or flat text, one or more placeholders for a **target variable**. An example of such a placeholder is:

```
${Application}
```

The required "Replacement file" identifies the text file to be marked up.

The placeholders are created by replacing all occurrences of "String" in "Replacement file" by "Replacement".

The required "String" must not contain variable placeholders.

The required "Replacement" must be a string that consists of at least one variable placeholder, or contains at least one.

The primary purpose of calling this action is to make released deliverable files configurable to specific target computers. See the "[Mark up XML attribute](/docs/Continuous_delivery/Delivery_Manager_actions_by_name/Mark_up_XML_attribute.md)” action for creating variable placeholders in deliverables that are XML data files rather than text files.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Replacement file|Folder or file|No      |
|String  |String  |No      |
|Replacement|String  |No      |
|Check target variable|Option flag|Yes     |



### Other uses

You can use this action for string replacements in a wider sense by setting the optional "Check target variable" = No. If you do not pass this flag, it is set to Yes.
With "Check target variable" = No:

- "String" is allowed to contain variable placeholders.
- "Replacement" no longer needs to contain a variable placeholder.