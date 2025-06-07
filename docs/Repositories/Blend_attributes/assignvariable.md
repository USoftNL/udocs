---
id: assignvariable
---

# assign:variable




:::note

This article is about the **assign:variable**[ Blend attribute](/docs/Repositories/Blend_attributes).

:::

## **assign:variable**

Evaluates an XPath expression and stores it in (= assigns it to) a named variable. The variable is global: from any later script section, you can refer to its value by writing $variable. If a variable by the same name is already in use, the value it currently holds is silently overwritten.

*Syntax*

```
<pc:*directive*
   assign:*variable* = "*expr*" />
```

The required *variable* identifies the variable by name and the required expr is the value you provide for the variable. Expr may be submitted either as a literal or as an XPath expression presented as an attribute value template, ie., surrounded by curly braces ( {  } ).

*Example*

This example executes a script ( ... ) for each of the "computer" elements found.

In each interation, the "name" attribute of "computer" is assigned to a variable called "result". This variable value may be referred to as **$result**.

```xml
<pc:each
   select="env/computers/computer"
   assign:result="@name"

   ...

/>
```

 