# pc:assign-boolean-default



> [!NOTE]
> This article is about the **pc:assign-boolean-default**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:assign-boolean-default**

This directive is the same as pc:assign-boolean for those variables that have not already been instantiated. For variables that have already been instantiated, their existing variable value is NOT overwritten, but it is still converted to a boolean.

*Syntax*

```
<pc:assign-boolean-default pc:booleanflags="*booleanflags*"
*variable = "expr*"
  [  *variable = "expr*" ... ] />

*booleanflags*  ::=  { yes | no }
```

For each variable, *variable* identifies the variable by name and *expr* is the value you provide for the variable. *Expr* may be submitted either as a literal or as an XPath expression presented as an attribute value template, ie., surrounded by curly braces ( {  } ).

If you set *booleanflags* to "yes", then special "flag-based" conversion rules are applied that are specific to USoft Blend. Otherwise, XSLT-style conversion rules are applied. The example below is a use case for pc:booleanflags="yes".

*Example*

This example allows users to call your script with optional yes/no flags as input parameters, such as:

```
verbose=true
```

Showing the typical use case in which your script provides a default value if the user does not pass an explicit yes/no flag.

```language-xml
<example xmlns:pc="Processing.Command">
   <pc:assign-boolean-default pc:booleanflags="yes" verbose="no"/>
   ...
   <pc:if-then test="$verbose">
   ...
   </pc:if-then>
</example>
```

> [!CAUTION]
> The pc:booleanflags="yes" switch is necessary to make this work. If you do not use it, then if the user passes the following command line setting:
> this is wrongly converted to boolean true(). For details, see "XSLT-style conversion rules" in the pc:assign-boolean help topic.