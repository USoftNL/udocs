---
id: stringsStartsWithIgnoreCase
---

# strings:StartsWithIgnoreCase



> [!NOTE]
> This article is about the **strings:StartsWithIgnoreCase**[ Blend function](/docs/Repositories/Blend%20functions).

## **strings:StartsWithIgnoreCase**

Evaluates whether or not a string value starts with another string value, regardless of case.

Returns a boolean.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:strings="USoft:Strings"
```

*Function call*

```
strings:StartsWithIgnoreCase( *value1*, *value2* )
```

Both *value1* and *value2* are required string values. The result evaluates to true() if *value1* starts with *value2* (regardless of case), and otherwise evaluates to false().

*Example*

```sql
select uscsxsl.blend(
  '<Example xmlns:pc="Processing.Command" pc:hideme="true">
     <pc:assign-string-default val = "abcDEF"/>
     <pc:value-of select="strings:StartsWithIgnoreCase( $val, ''aBc'')"/>
   </Example>'
)
```

The result value is:

```
true()
```

 