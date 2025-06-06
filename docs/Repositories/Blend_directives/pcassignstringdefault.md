---
id: pcassignstringdefault
---

# pc:assign-string-default



> [!NOTE]
> This article is about the **pc:assign-string-default**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:assign-string-default**

This directive is the same as [pc:assign-string](/docs/Repositories/Blend_directives/pcassignstring.md) for those variables that have not already been instantiated. For variables that have already been instantiated, their existing variable value is NOT overwritten, but it is still converted to a string.

*Syntax*

```
<pc:assign-string-default
  [  *variable* = "*expr*" ... ] />
```

For each variable, *variable* identifies the variable by name and *expr* is the value you provide for the variable. *Expr* may be submitted either as a literal or as an XPath expression presented as an attribute value template, ie., surrounded by curly braces ( {  } ).

*Example*

```language-xml
<pc:assign-string-default
     username="ADMIN"
     workingdir="{directories:Get()}"
     servername="{path:GetFileName(directories:Get())}" />
```

 