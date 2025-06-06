---
id: pcassignstring
---

# pc:assign-string



> [!NOTE]
> This article is about the **pc:assign-string**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:assign-string**

Evaluates an expression, converts the resulting value to a string using XSLT 1.0 conversion rules, and stores the resulting string in (= assigns the resulting string to) a named variable. The variable is global: from any later script section you can refer to its value by writing **$variable**.

If a variable by the same name is already instantiated, its value is silently overwritten. This is the difference with pc:assign-string-default.

You have the option to assign multiple strings in a single pc:assign-string directive.

*Syntax*

```
<pc:assign-string
  [  *variable* = "*expr*" ... ] />
```

For each variable, *variable* identifies the variable by name and *expr* is the value you provide for the variable. *Expr* may be submitted either as a literal or as an XPath expression presented as an attribute value template, ie., surrounded by curly braces ( {  } ).

*Example*

```language-xml
<pc:assign-string
     username="ADMIN"
     workingdir="{directories:Get()}"
     servername="{path:GetFileName(directories:Get())}" />
```

 