---
id: stringsToLower
---

# strings:ToLower




:::note

This article is about the **strings:ToLower**[ Blend function](/Repositories/Blend_functions).

:::

## **strings:ToLower**

Converts a value to its all-lowercase equivalent.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:strings="USoft:Strings"
```

*Function call*

```
strings:ToLower( *value* )
```

*Example*

```sql
select uscsxsl.blend(
  '<example xmlns:pc="Processing.Command" pc:hideme="true">
     <pc:assign-string-default val = "abcDEF"/>
     <pc:value-of select="strings:ToLower($val)"/>
   </example>'
)
```

The result value is:

```
abcdef
```

 