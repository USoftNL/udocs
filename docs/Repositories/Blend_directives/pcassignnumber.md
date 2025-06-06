---
id: pcassignnumber
---

# pc:assign-number




:::note

This article is about the **pc:assign-number**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:assign-number**

Evaluates an expression, converts the resulting value to a number, and stores the resulting number in (= assigns the resulting string to) a named variable. The variable is global: from any later script section you can refer to its value by writing **$variable**.

If the submitted value does not evaluate to a number, an error is raised (see "Errors" in this topic). This contrasts with XSLT 1.0, where this situation results in a NaN (not-a-number) value.

If a variable by the same name is already instantiated, its value is silently overwritten. This is the difference with pc:assign-number-default.

You have the option to assign multiple strings in a single pc:assign-number directive.

*Syntax*

```
<pc:assign-number
  [  *variable* = "*expr*" ... ] />
```

For each variable, *variable* identifies the variable by name and *expr* is the value you provide for the variable. *Expr* may be submitted either as a literal or as an XPath expression presented as an attribute value template, ie., surrounded by curly braces ( {  } ).

*Example*

```language-xml
<pc:assign-number
    total="//booking[@id=$id]/@total" />
```

## Errors

If the submitted value does not evaluate to a number, the following error is raised.

```
At pc:assign-number, An error occurred during a call to extension function 'SetNumber'.
Invalid number assignment for: "variable" with "MS.Internal.Xml.XPath.XPathArrayIterator"
```

 