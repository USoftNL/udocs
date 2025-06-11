---
id: pcassignboolean
---

# pc:assign-boolean




:::note

This article is about the **pc:assign-boolean**[Blend directive](/Repositories/Blend_directives).

:::

## **pc:assign-boolean**

Evaluates an expression and converts the resulting value to a **boolean** using either XSLT-style string-to-boolean conversion (the default) or "flag-based" string-to-boolean conversion. Stores the resulting boolean in (= assigns the resulting boolean to) a named variable. The variable is global: from any later script section you can refer to its value by writing *$variable*.

If a variable by the same name is already instantiated, its value is silently overwritten. This is the difference with pc:assign-boolean-default.

You have the option to assign multiple booleans in a single pc:assign-boolean directive.

*Syntax*

```
<pc:assign-boolean  pc:booleanflags="*booleanflags*"
*variable = "expr"*
  [  *variable = "expr"* ... ] />

*booleanflags*  ::=  { yes | no }
```

For each variable, *variable* identifies the variable by name and *expr* is the value you provide for the variable. *Expr* may be submitted either as a literal or as an XPath expression presented as an attribute value template, ie., surrounded by curly braces ( {  } ).

If you set *booleanflags* to "yes", then special "flag-based" conversion rules are applied that are specific to USoft Blend. Otherwise, XSLT-style conversion rules are applied.

*Example*

```xml
<example xmlns:pc="Processing.Command">
   <pc:assign-nodeset registry="registry.xml"/>
   <pc:assign-boolean myboolean="{$registry//Computer[@name='COMPUTER_1']/Subtotals/@total}"/>
   <pc:if-then test="$myboolean">The specified "total" attribute exists in the registry.</pc:if-then>
</example>
```

## XSLT-style conversion rules

According to these rules, which are the string-to-boolean conversion rules of XSLT 1.0,

- If the incoming value is a string, it converts to boolean **false()** if the string is empty, to boolean **true()** otherwise.
- If the incoming value is a number, it converts to boolean **false()** if the value is 0 (zero) or **NaN** (not-a-number), to boolean **true()** otherwise.
- If the incoming value is a node set, as in the Example, it converts to boolean **false()** if the node set is empty, to boolean **true()** otherwise.

## "Flag-based" conversion rules

These rules use a mapping between string values and boolean truth values. This allows you to have the string false interpreted as boolean false() even though it is not an empty string.

These rules are the rules applied by the booleanflags:ToBoolean function.