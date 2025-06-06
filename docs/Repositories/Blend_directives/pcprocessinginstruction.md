---
id: pcprocessinginstruction
---

# pc:processing-instruction




:::note

This article is about the **pc:processing-instruction**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:processing-instruction**

Adds to the result tree a processing instruction node that contains zero or more name-value pairs.

*Syntax*

```
<pc:processing-instruction name="*target*"
     attribute="*value*"
     ...
/>
```

The required *target* is a string that is the target of the resulting processing instruction.

Any number of attribute-value pairs may be specified. Each leads to a name-value pair that is part of the content of the resulting processing instruction.

*Example*

```language-xml
<pc:processing-instruction name="usoft-xml"
     attr1="setting1"
     attr2="setting2"
/>
```

This results in the following processing instruction being added to the result tree:

```language-xml
<? usoft-xml attr1="setting1" attr2="setting2" ?>
```

 