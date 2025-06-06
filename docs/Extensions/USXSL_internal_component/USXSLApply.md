---
id: USXSLApply
---

# USXSL.Apply



> [!NOTE]
> This article is about the **Apply** method of the [USXSL internal component](/docs/Extensions/USXSL_internal_component).
> See also the [Data transformation with XSLT]() section.

## **USXSL.Apply**

Applies an XSLT transformation to an XML document.

Returns the document that is the result of applying the transformation, or results in an error message.

> [!TIP]
> To write the result to a file, use USXSL.Apply2File instead.

XML and XSL documents are removed from memory at the end of processing. The second time the same documents are used, they will be parsed again. For performance reasons, however, if your application re-uses the result of an USXSL.Apply call, it is better to parse the documents only once. Use the USXSL.SetXML and USXSL.SetXSL methods for this technique.

A productive constraint may use USXSL.Apply to set a value in a database column to the result value.

*Syntax*

```sql
SELECT USXSL.Apply(
    *xml-document,   xsl-transformation**,   parameter-name   ,   parameter-value*
,   ...
)
*parameter-name*  :=  { document: | string: } *name-string*

```

where *xml-document* and *xsl-document* are required and must each be one of the following:

- A literal string that is an XML document or an XSLT stylesheet document.
- A filename, or folderpath and filename.
- A URL.
- An alias previously connected to an in-memory XML document by calling the USXSL.SetXML or USXSL.SetXSL method.

Each optional *parameter-name, parameter-value* argument pair is used to pass an XSLT parameter value to the transformation.

In each case, *parameter-value* must be either a literal string or a document. In the latter case, it must equal an XML string, URL, filename, or an alias previously connected to an XML document by calling the USXSL.SetXML or USXSL.SetXSL method.

Use the optional 'document:' or 'string:' prefix in the *parameter-name* to make an explicit distinction between these two data types as in the following examples. The 'document:' prefix only works on a Windows platform. If *parameter-name* does not use a prefix, and *parameter-value* starts with '<?xml' or 'file:', then *parameter-value* is treated as a document. Otherwise, it is treated as a string.

*Example 1*

```sql
SELECT USXSL.Apply(
    'C:\Myxml.xml'
,   'C:\Myxsl.xsl'
,   'string:MyId'
,   '1'
)
```

*Example 2*

```sql
SELECT  USXSL.Apply(
    'C:\Myxml.xml'
,   'C:\Myxsl.xsl'
,   'document:MyId'
,   'http://mycom.com/myxmldocument'
)
```

*Example 3*

```sql
SELECT    USXSL.Apply(
    'C:\Myxml.xml'
,   'C:\Myxsl.xsl'
,   'document:MyId'
,   MyAlias
)
```