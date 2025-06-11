---
id: USXSLValue
---

# USXSL.Value

:::note

This article is about the **Value** method of the [USXSL internal component](/Extensions/USXSL_internal_component).

:::

## **USXSL.Value**

Retrieves a value from an XML document by evaluating an XPath expression.

Returns the string-value of the first-matching node. If the XPath expression does not evaluate to a node, the result is empty.

The return value is comparable to a string-value returned by `<xsl:value-of>` in XSLT. This contrasts with a 'deep copy' of the node, returned by USXSL.Node, and comparable to what `<xsl:copy>` returns in XSLT.

*Syntax*

```sql
SELECT   USXSL.Value(
    *xml-document,   xpath-expression,   namespace-list*
```

where *xml-document* and *xpath-expression* are required.

*xml-document* must be one of the following:

- A literal string that is an XML document.
- An alias previously connected to an in-memory XML document by calling the USXSL.SetXml method.
- A filename, or folderpath and filename.
- A URL.

If *xml-document* starts with `<` it is assumed to be a literal string that is an XML document. Otherwise, if it corresponds with a known alias produced by USXSL.SetXml, it is assumed to be that alias. Otherwise, it is assumed to be a reference to a file containing an XML document.

*xpath-expression* must be a valid XPath 1.0 expression.

The optional *namespace-list* is a list of namespace mappings for prefixes used in the XPath expression, separated by spaces.
