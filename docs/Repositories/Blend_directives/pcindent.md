---
id: pcindent
---

# pc:indent



> [!NOTE]
> This article is about the **pc:indent**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:indent**

Produces "tidy XML": applies indentation to your output XML document so that the structure of nested elements is clearly visible, and replaces a sequence of opening and closing tags for an element by a single empty-element tag if the element has no content.

- This attribute is effective only if it is applied to the document element, i.e., the top-level element of your USoft Blend script.
- This attribute is effective only if pc:ignorewhitespace="yes" is set for the document element.
- You can determine the content and length of the indentation by setting pc:indentchars.

*Syntax*

```
<*element* pc:ignorewhitespace="yes" pc:indent="yes"

*content*

</*element*>
```

*Example*

```language-xml
<example xmlns:pc="Processing.Command" pc:ignorewhitespace="yes" pc:indent="yes" >
<object>
      <height><unknown/></height>
<width></width>
   </object>
</example>
```

The effect of running this example as a USoft Blend script is:

```language-xml
<example>
  <object>
    <height>
      <unknown/>
    </height>
    <width/>
  </object>
</example>
```

 