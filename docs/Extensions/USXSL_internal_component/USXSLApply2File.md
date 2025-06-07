---
id: USXSLApply2File
---

# USXSL.Apply2File




:::note

This article is about the **Apply2File** method of the [USXSL internal component](/docs/Extensions/USXSL_internal_component).
<!-- TODO: Where is this? -->
<!-- See also the [Data transformation with XSLT]() section. -->

:::

## **USXSL.Apply2File**

Applies an XSLT transformation to an XML document, then writes the result to a file on the file system.

Returns the output file name.

*Syntax*

```sql
SELECT USXSL.Apply2File(
    *xml-document,   xsl-transformation,   output-file-name,   parameter-name,   parameter-value*
,   ...
)

*parameter-name*  :=  { document: | string: } *name-string*
```

where *xml-document*, *xsl-transformation*, and *output-file-name* are required.

This syntax is identical to that of [USXSL.Apply](/docs/Extensions/USXSL_internal_component/USXSLApply.md), except for the added *output-file-name*, which indicates the name and (if a folderpath is used) the location of the output file.