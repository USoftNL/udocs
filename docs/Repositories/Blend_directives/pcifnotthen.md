---
id: pcifnotthen
---

# pc:if-not-then




:::note

This article is about the **pc:if-not-then**[ Blend directive](/Repositories/Blend_directives).

:::

Subjects a script section to the reverse of a condition. If the condition is NOT met, the section is executed, otherwise it is not.

*Syntax*
 

```
<pc:if-not-then test="*xpath >> boolean*">

*conditional-content*

</pc:if-not-then>
```

The required **test** evaluates to a boolean. Only if it evaluates to false() according to the rules of the xslutil:test() Blend function is conditional-content processed.

*Examples*

The element `<PrintThis/>` is written to standard output in:

```xml
<pc:if-not-then test="1=2">
  <PrintThis/>
</pc:if-not-then>
```

The element `<PrintThis/>` is NOT written to standard output in:

```xml
<pc:if-not-then test="1=1">
 <PrintThis/>
</pc:if-not-then>
```

 