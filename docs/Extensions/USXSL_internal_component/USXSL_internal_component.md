---
id: USXSL_internal_component
---

# USXSL internal component



> [!NOTE]
> This article contains general information about the **USXSL** internal component.
> For an alphabetic list of USXSL methods, click [here](/docs/Extensions/USXSL_internal_component).

## What is it?

The USXSL internal component is an XSLT 1.0 processor that is a 3rd party C++ implementation (Xalan/Xerces) to which USoft has added the capability to [mix in USoft application data]() on condition that you provide this data in a valid XML format.

## Intended use

The USXSL internal component provides a standard XSLT 1.0 processor in a USoft SQL context. This makes it easy to embed XSLT transformations in your USoft application.

Use this component in any way that you would normally use XSLT 1.0:

- Apply an XSL transformation to an XML document.
- Retrieve a value from an XML document.
- Retrieve a complete node from an XML document.
- Temporarily store an XML or XSL document in memory.

Use it also to:

- [Mix USoft application data]() into an XSLT transformation.

> [!TIP]
> Consider switching to the [USCSXSL component]() which offers the same as USXSL but also extension functions.

## Encoding

A different encoding is produced depending on whether the output is internal or external.

The USXSL component produces UTF-16 output encoding internally, ie., as long as the output is not written to a file on the file system or passed to a third party by way of a webservice call. This is because with UTF-16 we can easily exchange Unicode characters with controls and other Windows-related interfaces. UTF-16 is also the encoding recommended by Microsoft.

Correspondingly, in this case, the USXSL component produces the attribute encoding="UTF-16" in the XML declaration at the top of the output document. You cannot change this behaviour. It applies regardless of what is the value of the encoding attribute of the \<xsl:output> instruction in the XSL stylesheet (if such an attribute is present).

By default, the USXSL component produces UTF-8 output encoding externally, ie., when the result is written to a file on the file system, as is the case when you call **USXSL.Apply2File**, or is passed to a third party by way of a webservice call. This is because UTF-8 is a common default in these cases. You can obtain a different external output encoding by specifying it as the encoding attribute of the \<xsl:output> instruction in the XSL stylesheet, for example:

```language-xml
<xsl:output encoding="UTF-16"/>
```

or

```language-xml
<xsl:output encoding="ISO-8859-1"/>
```

 