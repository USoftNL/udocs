---
id: pctext
---

# pc:text



> [!NOTE]
> This article is about the **pc:text**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:text**

Concatenates all the text nodes found in its contents (including whitespace characters) and returns the result as a string.

*Syntax*

```
<pc:text>
*contents*
</pc:text>
```

> [!WARNING]
> pc:text does not support the disable-output-escaping attribute, unlike pc:value-of (and XSLT's \<xsl:text> and \<xsl:value-of>).

*Example*

```language-xml
<pc:text>
   <d att="text1">text2</d>  <e>text3</e>
   text4
</pc:text>
```

The return value is:

```
text2text3
   text4
```

## Attributes

The pc:text directive supports the pc:if attribute.