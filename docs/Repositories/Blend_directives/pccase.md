---
id: pccase
---

# pc:case




:::note

This article is about the **pc:case**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:case**

Identifies a script section that is executed only if a variable has a specific value.

**pc:case** is only legal as a child element of a pc:switch element:

*Syntax*

```
<pc:switch select="*variable-reference*">
   [     <pc:case value="*xpath-expression*"> *content* </pc:case>
         ...   ]
         <pc:default> *content* </pc:default>
</pc:switch>
```


:::tip

In this syntax, **pc:case** is required and **pc:default** is optional.

:::
