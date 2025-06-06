---
id: pcindentchars
---

# pc:indentchars



> [!NOTE]
> This article is about the **pc:indentchars**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:indentchars**

Determines the sequence of characters by which you want to indent lines of XML output.

- This attribute is effective only if it is applied to the document element, i.e., the top-level element of your USoft Blend script.
- This attribute is effective only if pc:ignorewhitespace="yes" and pc:indent="yes" are set for the document element.
- You can determine the content and length of the indentation by setting pc:indentchars.

*Syntax*

```
<*element* pc:ignorewhitespace="yes" pc:indent="yes" pc:indentchars="*string*"

*content*

</element>
```

If you omit pc:indentchars, then pc:indent will use 2 spaces as indentation.

*Example 1*

This example uses a Tab character for indentation.

```language-xml
<example xmlns:pc="Processing.Command" pc:ignorewhitespace="yes" pc:indent="yes" pc:indentchars="&#9;" >
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

*Example 2*

You can specify other indentation characters than spaces.

```language-xml
<example xmlns:pc="Processing.Command" pc:ignorewhitespace="yes" pc:indent="yes" pc:indentchars="--" >
<object>
      <height><unknown/></height>
<width></width>
   </object>
</example>
```

The effect of running this example as a USoft Blend script is:

```language-xml
<example>
--<object>
----<height>
------<unknown/>
----</height>
----<width/>
--</object>
</example>
```

 