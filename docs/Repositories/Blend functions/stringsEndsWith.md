# strings:EndsWith



> [!NOTE]
> This article is about the **strings:EndsWith**[ Blend function](/docs/Repositories/Blend%20functions).

## **strings:EndsWith**

Evaluates whether or not a string value ends with another string value, heeding case.

Returns a boolean.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:strings="USoft:Strings"
```

*Function call*

```
strings:EndsWith( *value1*, *value2* )
```

Both *value1* and *value2* are required string values. The result evaluates to true() if value1 ends with value2, and otherwise evaluates to false().

*Example*

```sql
select uscsxsl.blend(
  '<Example xmlns:pc="Processing.Command" pc:hideme="true">
     <pc:assign-string-default val = "abcDEF"/>
     <pc:value-of select="strings:StartsWith( $val, ''aBc'')"/>
   </Example>'
)
```

The result value is:

```
false()
```

 