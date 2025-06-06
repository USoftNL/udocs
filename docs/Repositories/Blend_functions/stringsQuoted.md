---
id: stringsQuoted
---

# strings:Quoted



> [!NOTE]
> This article is about the **strings:Quoted**[ Blend function](/docs/Repositories/Blend%20functions).

## **strings:Quoted**

Surrounds a value by double quotes.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:strings="USoft:Strings"
```

*Function call*

```
strings:Quoted( *value* )
```

*Example*

```sql
select uscsxsl.blend(
  '<Example xmlns:pc="Processing.Command" pc:hideme="true">
     <pc:assign-string-default val = "abcDEF"/>
     <pc:value-of select="strings:Quoted($val)"/>
   </Example>'
)
```

The result value is:

```
"abcDEF"
```

 