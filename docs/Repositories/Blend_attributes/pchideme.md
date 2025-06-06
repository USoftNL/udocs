---
id: pchideme
---

# pc:hideme



> [!NOTE]
> This article is about the **pc:hideme**[](/docs/Repositories/Blend%20directives)[Blend attribute](/docs/Repositories/Blend%20attributes).

## **pc:hideme**

Suppresses the writing, to the standard output, of a copy of the parent element.

This is a top-level attribute. Its purpose is to suppress, from your output, the top-level element of your script.

*Syntax*
 

```
<element pc:hideme="{ yes | no }"

*content*

</element>
```

As the examples show, in practice, this attribute is used for the document node (the top-level node) of the USoft Blend script. In the typical usage of USoft Blend, if you do not pass pc:hideme="true", this document node is the only node that is copied to the output by default.

*Example 1*

```language-xml
<example xmlns:pc="Processing.Command" >
    content
</example>
```

The output of this example is:

```language-xml
<example>
    content
</example>
```

*Example 2*

```language-xml
<example xmlns:pc="Processing.Command" pc:hideme="true">
     content
</example>
```

The output of this example is:

```language-xml
    content
```

*Example 3*

```language-xml
<example xmlns:pc="Processing.Command" pc:hideme="false" >
     content  
</example>
```

The output of this example is:

```language-xml
<example
  xmlns:pc="Processing.Command"
  pc:hideme="false" >
       content
</example>
```

 