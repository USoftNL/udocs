---
id: pcthen
---

# pc:then




:::note

This article is about the **pc:then**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:then**

Identifies a script section that executes only if a condition specified in the test attribute of a \<pc:if> parent object evaluates to true.

*Syntax*

```
<pc:if test="*xpath >> boolean*">>

  <pc:then>

*conditional-content*

  </pc:then>

  <pc:else>

*conditional-content*

  </pc:else>

</pc:if>
```


:::tip

\<pc:then> is only legal as the first child element of a \<pc:if> element.

:::

*Example*

The element \<PrintThis/> is written to standard output in:

```language-xml
<pc:if test="1=1">
  <pc:then> <PrintThis/> </pc:then>
  <pc:else> <PrintThat/> </pc:else>
</pc:if>
```

 