---
id: stringsTitleCase
---

# strings:TitleCase



> [!NOTE]
> This article is about the **strings:TitleCase**[ Blend function](/docs/Repositories/Blend%20functions).

## **strings:TitleCase**

Converts a value to its all-lowercase equivalent but with a capitalised first letter.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:strings="USoft:Strings"
```

*Function calll*

```
strings:TitleCase( *value* )
```

Example

```language-xml
select uscsxsl.blend(
  '<example xmlns:pc="Processing.Command" pc:hideme="true">
     <pc:assign-string-default val = "abcDEF"/>
     <pc:value-of select="strings:TitleCase($val)"/>
   </example>'
)
```

The result value is:

```
Abcdef
```

 