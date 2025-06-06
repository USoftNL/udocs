# USXSL.SetXsl



> [!NOTE]
> This article is about the **SetXsl** method of the [USXSL internal component](/docs/Extensions/USXSL%20internal%20component).

## **USXSL.SetXsl**

Associates an alias with a parsed XSL document that is held in-memory after it is first referred to. In subsequent calls to **USXSL.Apply** and **USXSL.Apply2File**, you can refer to the XML document by using the alias.

The point of using this method is that, if you need the same XSL document more than once, referring to its parsed version by alias may improve performance.

Returns the alias as a string. If the passed XSL document is invalid, an error is returned.

*Syntax*

```sql
SELECT   USXSL.SetXsl(
    *alias,   xsl-document*
)
```

where *alias* and *xsl-document* are required.

The case-sensitive *alias* acts as a handle for identifying the opened file in subsequent calls to USXSL.Apply or USXSL.Apply2File.

*xsl-document* is the input XSL document (stylesheet, transformation). If xsl-document is the empty string, the alias-document mapping is removed from the list.

## Limitations

When running multiple Rules Services, a parsed XSL document mapped to an alias by one Rules Engine cannot automatically be referenced through that alias by a second Rules Engine: each engine needs to perform its own operation. To get around this limitation, use the USXSL.SetGlobalXsl method instead. When a Rules Service runs multiple Rules Engines, you can have the first Rules Engine use [USXSL.SetGlobalXsl()](/docs/Extensions/USXSL%20internal%20component/USXSLSetGlobalXsl.md) to map an alias to an XSL document, and subsequent Rules Engines reference that alias.