---
id: stringsjoin
---

# strings:join




:::note

This article is about the **strings:join**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **strings:join**

Concatenates, in document order, the string values found in a node set identified by an XPath expression.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:strings="USoft:Strings"
```

*Function call*

```
strings:join( *xpath-expression* )
```

*Example*

```sql
select uscsxsl.blend(
'<root xmlns:pc="Processing.Command" pc:hideme="true">
     <pc:defs><a>We</a><b>say</b><c h="Hello" w="World"/></pc:defs>
     <pc:value-of select="strings:join(/root/pc:defs/*|/root/pc:defs/*/@*)"/>
 </root>')
```

The result value is:

```
WesayHelloWorld
```

 