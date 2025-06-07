---
id: xslutilnodeset
---

# xslutil:nodeset




:::note

This article is about the **xslutil:nodeset**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **xslutil:nodeset**

Evaluates an expression and returns its meaning as a node set.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:xslutil="USoft:XslUtil"
```

*Function call*

```
xslutil:nodeset( *expression* )
```

If *expression* can be construed as an XPath node set, this is what is returned.

If *expression* begins with a **\<** character, an attempt is made to interpret it as a node set.

In remaining cases, as in the example below, expression is interpreted as a path leading to an XML document and if an XML file is found at the endpoint of the path, its content is returned as a node set.

*Example*

This example returns the content of an XML document in a file named "c:\\temp\\root.xml" as a node set.

```xml
<pc:assign rootpath="c:\temp\root.xml"/>
<pc:copy-of select="xslutil:nodeset($rootpath)"/>
```

Contrast with the following, which returns a text node with string-value "c:temp\\root.xml":

```xml
<pc:assign rootpath="c:\temp\root.xml"/>
<pc:copy-of select="$rootpath"/>
```

 