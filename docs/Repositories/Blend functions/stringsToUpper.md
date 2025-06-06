# strings:ToUpper



> [!NOTE]
> This article is about the **strings:ToUpper**[ Blend function](/docs/Repositories/Blend%20functions).

## **strings:ToUpper**

Converts a value to its all-uppercase equivalent.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:strings="USoft:Strings"
```

*Function call*

```
strings:ToUpper( *value* )
```

*Example*

```sql
select uscsxsl.blend(
  '<example xmlns:pc="Processing.Command" pc:hideme="true">
     <pc:assign-string-default val = "abcDEF"/>
     <pc:value-of select="strings:ToUpper($val)"/>
   </example>'
)
```

The result value is:

```
ABCDEF
```

 