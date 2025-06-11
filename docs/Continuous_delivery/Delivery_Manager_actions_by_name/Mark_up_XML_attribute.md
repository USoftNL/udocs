---
id: Mark_up_XML_attribute
---

# Mark up XML attribute




:::note

This article is about the **Mark up XML attribute**[Delivery Manager action](/Continuous_delivery/Delivery_Manager_actions_by_name).

:::

## **Mark up XML attribute**

Creates, in an XML data file designated by "Replacement file", one or more placeholders for a target variable. An example of such a placeholder is:

```
${Application}
```

The placeholders are created by replacing one or more designated XML attribute values by "Replacement".

The required "Replacement" must be a string that consists of at least one variable placeholder, or contains at least one. The other parameter values must not contain variable placeholders.

"Target element", "Target attribute", "Key name", "Key value", "Key ancestor" and "Key descendant" are strings that together determine the XML attribute(s) where the replacement takes place:

- The required Target element is the name of the XML element(s) where the replacement takes place.
- The required Target attribute is the name of the XML attribute(s) where the replacement takes place.
- Key name and Key value must both be passed, or both be omitted. If you pass these parameters, replacement only takes place in XML elements that have an attribute by the name of Key name that has Key value as its value.
- If the optional Key ancestor value is passed, replacement only takes place in XML elements that have an element by the name of Key ancestor as an ancestor.
- If the optional Key descendant value is passed, replacement only takes place in XML elements that have an element by the name of Key descendant as a descendant.

The primary purpose of calling this action is to make deliverable, released XML data files configurable to specific target computers. See the “[Mark up text file](/Continuous_delivery/Delivery_Manager_actions_by_name/Mark_up_text_file.md)” action for creating variable placeholders in deliverables that are non-XML data files, eg., HTML, JSON, CSS, or flat text.

The [Configuration example 2](/Continuous_delivery/Understanding_USoft_Delivery_Manager/Configuration_example_2.md) article illustrates the use of the "Mark up XML attribute" action. If you need more control over the exact way the replacement is done than is offered by this action, use the "mark-up-xml-custom" custom XSL sample. For details of this technique, see the [Added XSL in UDeliver](/Continuous_delivery/USoft_Delivery_Manager_by_concept/Added_XSL_in_UDeliver.md) article.

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Replacement file|Folder or file|No      |
|Target element|String  |No      |
|Target attribute|String  |No      |
|Replacement|String  |No      |
|Key name|String  |Yes     |
|Key value|String  |Yes     |
|Key ancestor|String  |Yes     |
|Key descendant|String  |Yes     |
|Check target variable|Option flag|Yes     |



### Other uses

You can use this action for string replacements in a wider sense by setting the optional "Check target variable" = No. If you do not pass this flag, it is set to Yes.

With "Check target variable" = No:

- "Target..." and "Key..." parameter values are allowed to contain variable placeholders.
- "Replacement" no longer needs to contain a variable placeholder.