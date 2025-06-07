---
id: pccopyof
---

# pc:copy-of




:::note

This article is about the **pc:copy-of**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:copy-of**

Evaluates an XPath expression and (if the result is a node set) returns a deep copy of all the nodes in the resulting node set. The result can be serialised as output XML or passed to a different directive (Example 3).

*Syntax*

```
<pc:copy-of
     select="*xpath >> (any)*" />
```

The required **select** attribute is the XPath expression to be evaluated.

The intended use is that the result is a node set. A "deep copy" of this resulting node set is returned. Such a "deep copy" includes all the nodes in the node set and all of these nodes' descendent nodes, attribute nodes and namespace nodes.

If *xpath* evaluates to a string then this string is returned. If it evaluates to a number or boolean, this value is converted to a string and then returned. In this respect, pc:copy-of behaves in the same way as pc:value‑of.

If *xpath* evaluates to an XML document, then this entire document is copied to the result tree:

```xml
<pc:assign-nodeset envxml="{files:XmlFile('env.xml')}"/>
<pc:copy-of select="$envxml"/>
```

*Example 1*

```xml
<pc:copy-of select="$myvariable"/>
```

*Example 2*

```xml
<pc:copy-of select="strings:ReplaceVariables($infile, $replacements, 'name', 'value', '')"/>
```

*Example 3*

```xml
<pc:assign-nodeset mydialog="{.}">
   <Form w="200" h="50" >
      <Title>An empty dialog</Title>
   </Form>
</pc:assign-nodeset>      
<pc:Dialog><pc:copy-of select="$mydialog"/></pc:Dialog>
```

## Attributes

The pc:copy-of directive supports the **pc:if** attribute.