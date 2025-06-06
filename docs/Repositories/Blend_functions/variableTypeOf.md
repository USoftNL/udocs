---
id: variableTypeOf
---

# variable:TypeOf



> [!NOTE]
> This article is about the **variable:TypeOf**[ Blend function](/docs/Repositories/Blend_functions).

## **variable:TypeOf**

Returns the name of the XSLT 1.0 data type that a given variable is currently cast to.

The return value is one of the string values nodeset, string, number, boolean.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:variable="USoft:Variable"
```

*Function call*

```
variable:TypeOf( *xpath >> string* )
```

The required *xpath* must evaluate to a string that is the name of an instantiated variable. If there is no instantiated variable by that name, the return value is **nodeset**.

*Example 1*

The result of the following is **boolean**:

```language-xml
<pc:assign-boolean defined="{true()}" />
<pc:assign-string mytype="{variable:TypeOf($defined)}"/>
<pc:value-of select="$mytype"/>
```

*Example 2*

A variable may be initialised and have the empty string ( '' ) as a value. The result of the following is **string**:

```language-xml
<pc:assign-string defined="" />
<pc:assign-string mytype="{variable:TypeOf($defined)}"/>
<pc:value-of select="$mytype"/>
```

*Example 3*

If no variable by the name of "defined" is instantiated, the result of the following is **nodeset**:

```language-xml
<pc:assign-string mytype="{variable:TypeOf($defined)}"/>
<pc:value-of select="$mytype"/>
```

 