---
id: pcelse
---

# pc:else



> [!NOTE]
> This article is about the **pc:else**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:else**

Identifies a script section that is executed only if a condition specified in the test attribute of a pc:if parent object evaluates to false.

**pc:else** is only legal as the first sibling element following a **pc:then** element which, in turn, must be the first child of a **pc:if** element.

*Example*

The element <PrintThat/> is written to standard output in:

```language-xml
<pc:if test="1=2">
  <pc:then> <PrintThis/> </pc:then>
  <pc:else> <PrintThat/> </pc:else>
</pc:if>
```

 