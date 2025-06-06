---
id: USXSLSetXml
---

# USXSL.SetXml




:::note

This article is about the **SetXml** method of the [USXSL internal component](/docs/Extensions/USXSL_internal_component).

:::

## **USXSL.SetXml**

Associates an alias with a parsed XML document that is held in-memory after it is first referred to. In subsequent calls to **USXSL.Apply** or **USXSL.Apply2File** you can refer to the XML document by using the alias.

The point of using this method is that, if you need the same XML document more than once, referring to its parsed version by alias may improve performance.

Returns the alias as a string. If the passed XML document is invalid, an error is returned.

*Syntax*

```sql
SELECT   USXSL.SetXml(
    *alias,   xml-document*
)
```

where *alias*****and *xml-document* are required.

The case-sensitive *alias* acts as a handle for identifying the opened file in subsequent calls to USXSL.Apply or USXSL.Apply2File.

*xml-document* is the input XML document. If xml-document is the empty string, the alias-document mapping is removed from the list.

 