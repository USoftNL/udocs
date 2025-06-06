---
id: stringsReplace
---

# strings:Replace



> [!NOTE]
> This article is about the **strings:Replace**[ Blend function](/docs/Repositories/Blend%20functions).

## **strings:Replace**

Within a specified string, replaces each occurrence of a specified substring by a specified alternative.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:strings="USoft:Strings"
```

*Function call*

```
strings:Replace( *string, substring, alternative* )
```

Each of the 3 arguments (*string, substring, alternative*) are required. Each argument is a character string of any size.

If *substring* appears in *string* multiple times, the replacement takes place each time.

If *substring* does not appear in *string,* then *string* is returned unaffected.

*Example*

```language-xml
<root xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign">
	<example>
		<pc:value-of select="strings:Replace('IS_FOLLOWED_BY', '_', '')"/>
	</example>
</root>
```

The result value is:

```
IS FOLLOWED BY
```

> [!TIP]
> To make a replacement in each substring that matches a specified regular expression pattern, use [strings:REReplace()](/docs/Repositories/Blend%20functions/stringsREReplace.md) instead.