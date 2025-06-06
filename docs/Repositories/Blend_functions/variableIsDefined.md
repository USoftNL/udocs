---
id: variableIsDefined
---

# variable:IsDefined



> [!NOTE]
> This article is about the **variable:IsDefined**[ Blend function](/docs/Repositories/Blend%20functions).

## **variable:IsDefined**

Evaluates whether a variable by some name has been initialised or not.

Returns a boolean.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:variable="USoft:Variable"
```

*Function call*

```
variable:IsDefined( *xpath >> string* )
```

The return value is true if a variable by the name of string has been initialised, and otherwise false.

## Note

A variable may be initialised and have the empty string ( '' ) as a value. The result of the following is true:

```language-xml
<pc:assign-string-default rdbms="" />
<pc:assign-boolean isdefined="{variable:IsDefined('rdbms')}"/>
<pc:value-of select="$isdefined"/>
```

 