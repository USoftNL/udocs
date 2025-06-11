---
id: pcassignnodeset
---

# pc:assign-nodeset




:::note

This article is about the **pc:assign-nodeset**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:assign-nodeset**

Evaluates an expression, converts the resulting value to a node set using XSLT 1.0 conversion rules, and stores the resulting string in (= assigns the resulting string to) a named variable. The variable is global: from any later script section you can refer to its value by writing *$variable*.

If a variable by the same name is already instantiated, its value is silently overwritten. This is the difference with pc:assign-nodeset-default.

You have the option to assign multiple variables in a single pc:assign-nodeset directive.

*Syntax*

```
<pc:assign-nodeset
     [*variable* = "*expr >> node-set*" ...] />
```

For each variable, *variable* identifies the variable by name and *expr* is the value you provide for the variable. *Expr* may be submitted either as a literal or as an XPath expression presented as an attribute value template, ie., surrounded by curly braces ( {  } ), as shown in Example 1, or a path leading to a valid XML document, as shown in Example 2.

*Example 1*

This example assigns to a variable named tables the node set made up of the child elements of the \<Tables> child element of the context node.

```xml
<pc:assign-nodeset   tables="{Tables/*}" />
```

*Example 2*

This example assigns to a variable named registry the contents of an XML document on the file system identified by a path expression.

```xml
<pc:assign-nodeset   registry="..\registry.xml" />
```

*Example 3*

This example assigns to a variable named servers a node set found in the XML document stored in the registry variable.

```xml
<pc:assign-string   registry="{files:XmlFile('..\registry.xml')}">
<pc:assign-nodeset  servers="{$registry/Computers/Computer[@name=$thiscomputer]/Servers/Server}" />
```

 