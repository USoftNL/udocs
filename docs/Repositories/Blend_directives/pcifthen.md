---
id: pcifthen
---

# pc:if-then




:::note

This article is about the **pc:if-then**[Blend directive](/Repositories/Blend_directives).

:::

## **pc:if-then**

Subjects a script section to a condition. If the condition is met, the section is executed, otherwise it is not.

*Syntax*
 

```
<pc:if-then test="*xpath >> boolean*">

*conditional-content*

</pc:if-then>
```

The required **test** evaluates to a boolean. Only if it evaluates to true() according to the rules of the xslutil:test() Blend function is conditional-content processed.

If you want to specify not only a **then** clause but also an **else** clause, use **pc:if** instead.

*Examples*

The element `<PrintThis/>` is written to standard output in:

```xml
<pc:if-then test="1=1">
   <PrintThis/>
</pc:if-then>
```

The element `<PrintThis/>` is NOT written to standard output in:

```xml
<pc:if-then test="1=2">
   <PrintThis/>
</pc:if-then>
```

 