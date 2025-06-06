---
id: pcif
---

# pc:if



> [!NOTE]
> This article is about the **pc:if**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:if**

The \<pc:if> directive introduces script sections that execute only if a given condition applies.

*Syntax*

```
<pc:if test="*xpath >> boolean*">
  <pc:then>
    *conditional-content*
  </pc:then>
  <pc:else>
    *conditional-content*
  </pc:else>
</pc:if>
```

The value of the required **test** attribute evaluates to a boolean. If it evaluates to true() according to the rules of the xslutil:test() Blend function, the content of the required \<pc:then> child element is processed. If it evaluates to false(), the content of the optional \<pc:else> element is processed if it exists.

If you omit the \<pc:else> element, you can write the construct in a more compressed format by using pc:if-then.

*Examples*

The element \<PrintThis/> is written to standard output in:

```language-xml
<pc:if test="1=1">
  <pc:then> <PrintThis/> </pc:then>
  <pc:else> <PrintThat/> </pc:else>
</pc:if>
```

The element \<PrintThat/> is written to standard output in:

```language-xml
<pc:if test="1=2">
  <pc:then> <PrintThis/> </pc:then>
  <pc:else> <PrintThat/> </pc:else>
</pc:if>
```

 