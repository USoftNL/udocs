---
id: pcassignnumberdefault
---

# pc:assign-number-default



> [!NOTE]
> This article is about the **pc:assign-number-default**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:assign-number-default**

This directive is the same as [pc:assign-number](/docs/Repositories/Blend_directives/pcassignnumber.md) for those variables that have not already been instantiated. For variables that have already been instantiated, their existing variable value is NOT overwritten, but it is still converted to a number.

*Syntax*

```
<pc:assign-number-default
  [  *variable* = "*expr*" ... ] />
```

For each variable, *variable* identifies the variable by name and *expr* is the value you provide for the variable. *Expr* may be submitted either as a literal or as an XPath expression presented as an attribute value template, ie., surrounded by curly braces ( {  } ).

*Example*

This example assigns to variable "total" the attribute value found at the end of the XPath expression, EXCEPT if the "total" variable was already instantiated, typically by the caller of your script passing an input parameter such as

```
total=500
```

```language-xml
<pc:assign-number-default
    total="//booking[@id=$id]/@total" />
```

 