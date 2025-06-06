# USXSL.Node



> [!NOTE]
> This article is about the **Node** method of the [USXSL internal component](/docs/Extensions/USXSL%20internal%20component).

## **USXSL.Node**

Retrieves a node from an XML document by an XPath expression.

Returns a node-set. If the XPath expression does not evaluate to a node, the result is empty. Otherwise, a copy of the first-matching node is returned.

A 'deep copy' of that node is returned, comparable to what <xsl:copy> returns in XSLT. This contrasts with the node's string-value, returned by USXSL.Value, and comparable to what <xsl:value-of> returns in XSLT.

*Syntax*

```sql
SELECT USXSL.Node(
    *xml-document,   xpath-expression,   namespace-list*
)
```

where *xml-document* and *xpath-expression* are required.

*xml-document* must be one of the following:

- A literal string that is an XML document.
- An alias previously connected to an in-memory XML document by calling the USXSL.SetXml method.
- A filename, or folderpath and filename.
- A URL.

If *xml-document* starts with "<" it is assumed to be a literal string that is an XML document. Otherwise, if it corresponds with a known alias produced by **USXSL.SetXml** it is assumed to be that alias. Otherwise, it is assumed to be a reference to a file containing an XML document.

*xpath-expression* must be a valid XPath 1.0 expression.

The optional *namespace-list* is a list of namespace mappings for prefixes used in the XPath expression, separated by spaces.