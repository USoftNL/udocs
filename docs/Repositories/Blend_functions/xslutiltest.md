---
id: xslutiltest
---

# xslutil:test



> [!NOTE]
> This article is about the **xslutil:test**[ Blend function](/docs/Repositories/Blend%20functions).

## **xslutil:test**

Tests whether an XPath expression or comparison evaluates to true() or to false(), following USoft Blend rules for interpreting expressions as booleans. These rules are the same as the XPath rules except for converting strings to booleans.

Returns a boolean. Because of a Microsoft/C# convention, if USoft Blend outputs (serialises) a boolean value, it is printed capitalised, ie., as True or False, as opposed to XPath true or false.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:xslutil="USoft:XslUtil"
```

*Function call*

```
xslutil:test( { *xpath-expression* | *comparison* } )
```

The required argument is either an XPath expression or a comparison. It is a comparison if it contains one of the comparison operators =,  !=,  <=,  <,  >,  >=,  <>. In a comparison, both the left-hand operand and the right-hand operand are XPath expressions.

> [!WARNING]
> xslutil:test() applies **different** rules from XPath/XSLT when converting XPath expressions to booleans. Applying xslutil:test() to an expression is not the same as applying XPath boolean() to that expression.

 