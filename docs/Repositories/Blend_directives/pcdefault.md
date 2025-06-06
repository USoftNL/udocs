---
id: pcdefault
---

# pc:default



> [!NOTE]
> This article is about the **pc:default**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:default**

Identifies a script section that is executed only if a variable does not have any of the values tested by a sibling pc:case element.

pc:default is only legal as a child element of pc:switch:

*Syntax*

```
<pc:switch select="*variable-reference*">
   [     <pc:case value="*xpath*"> *content* </pc:case>
         ...   ]
         <pc:default> *content* </pc:default>
</pc:switch>
```

 