---
id: pceach
---

# pc:each




:::note

This article is about the **pc:each**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:each**

Iterates over a set of nodes selected by a node set expression.

*Syntax*

```
<pc:each
     select="*xpath >> node-set*"
     assign:*variable*="*xpath*" ...

*content*

/>
```

The required **select** attribute is a node set expression identifying the set of nodes to be iterated over.

You can have 1 or more **assign:variable****attributes. Strictly, these are optional, but there is usually no point iterating over a node set if you do not apply a repetitive action, specified as content, to each of the nodes. You can only do that by assigning one or more variables that you then refer to in content, as shown in Example 1.

The value of each **assign:variable****attribute is a relative location path. It is relative to the current node. **pc:each** iterates over a list of nodes identified by select. The current node is the node in the list that is the node of the current iteration.

For an example of looping over a set of files or directories in the file system, see: Looping over a set of files or directories.

*Example 1*

This example stops multiple server processes that run as Windows services. It loops over a set of computer nodes. Each time, it stops the process represented by the server attribute of the computer element.

```xml
<pc:each
     select="env/computers/computer"
     assign:servicename="@server">
  <pc:ServiceStop servicename="{$server}"/>
/>
```

*Example 2*

This example is similar to Example 1, but the information about computers is found in a separate file.

```xml
<pc:assign-nodeset envxml="{files:XmlFile('env.xml')}"/>
<pc:each
     select="$envxml/env/computers/computer"
     assign:servicename="@server">
  <pc:ServiceStop servicename="{$server}"/>
/>
```

 