---
id: USCSXSL_internal_component
---

# USCSXSL internal component




:::note

This article contains general information about the **USCSXSL** internal component.
For an alphabetic list of USCSXSL methods, click [here](/Extensions/USCSXSL_internal_component).

:::

## What is it?

The USCSXSL internal component is an XSLT 1.0 processor with rich extensions also found in XSLT 2.0 or 3.0. It is a USoft-proprietary C# implementation.

The USCSXSL internal component gives you the same basic XSLT functionality as the [USXSL component](/Extensions/USXSL_internal_component/USXSL_internal_component.md). This is to say that it provides a standard XSLT 1.0 processor and, in addition, the capability to mix in USoft application data.
<!-- TODO: [mix in USoft application data]() -->

But in addition to the USXSL component, USCSXSL also allows you to call [extension functions](/Repositories/Blend_functions). You can discover these functions by calling ublendit.exe:

```
> *usoft-bindir*\ublendit.exe functions

> *usoft-bindir*\ublendit.exe functions ns=strings

> *usoft-bindir*\ublendit.exe functions p=title
```


:::note

To find out all about extension functions but also other Blend-related resources, go to [Learning USoft Blend for repository management](/Repositories/Blend_scripts_for_repository_management/Learning_USoft_Blend_for_repository_management.md).

:::

## Intended use

Use this component in any way that you would normally use XSLT 1.0:

- Apply an XSL transformation to an XML document.
- Retrieve a value from an XML document.
- Retrieve a complete node from an XML document.

Use it also to:

<!-- TODO: fix link - [Mix USoft application data]() into an XSLT transformation. -->
- Mix USoft application datainto an XSLT transformation.

Finally, use it also for its extension functions. You can call these functions from [Blend scripts](/Repositories/Blend_scripts_for_repository_management/Introducing_Blend_scripts.md), a special way of using USCSXSL, but you can also call these functions directly when you apply USCSXSL to transform an XML document, for example:

```xml
<xsl:variable name="rdmlx" select="xslutil:xmlfragment(strings:Text2Xml(files:ReadFile($filepath, .)), .)"/>
```


:::tip

Some functions, if called directly from an XSL transformation and not from a Blend script, expect a context. In the example above, the context for the call to the files:ReadFile() function is provided by the second argument passed to it: the dot xpath (**.**) for current node.

:::

## Encoding

A different encoding is produced depending on whether the output is internal or external.

The USCSXSL component produces UTF-16 output encoding internally, ie., as long as the output is not written to a file on the file system or passed to a third party by way of a webservice call. This is because with UTF-16 we can easily exchange Unicode characters with controls and other Windows-related interfaces. UTF-16 is also the encoding recommended by Microsoft.

Correspondingly, in this case, the USCSXSL component produces the attribute encoding="UTF-16" in the XML declaration at the top of the output document. You cannot change this behaviour. It applies regardless of what is the value of the encoding attribute of the \<xsl:output> instruction in the XSL stylesheet (if such an attribute is present).

By default, the USCSXSL component produces UTF-8 output encoding externally, ie., when the result is written to a file on the file system, as is the case when you call **USCSXSL.Apply2File**, or is passed to a third party by way of a webservice call. This is because UTF-8 is a common default in these cases. You can obtain a different external output encoding by specifying it as the encoding attribute of the \<xsl:output> instruction in the XSL stylesheet, for example:

```xml
<xsl:output encoding="UTF-16"/>
```

or

```xml
<xsl:output encoding="ISO-8859-1"/>
```

 