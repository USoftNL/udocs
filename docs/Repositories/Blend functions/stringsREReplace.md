# strings:REReplace



> [!NOTE]
> This article is about the **strings:REReplace**[ Blend function](/docs/Repositories/Blend%20functions).

## **strings:REReplace**

Within a specified string, replaces each occurrence of a substring matching a specified regular expression pattern by a specified alternative.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:strings="USoft:Strings"
```

*Function call*

```
strings:REReplace( *string, regexp-pattern, alternative* )
```

Each of the 3 arguments (*string, regexp-pattern, alternative*) are required.

If there are multiples substrings matching *regexp-pattern,* the replacement takes place each time.

if no substrings match *regexp-pattern,* then *string* is returned unaffected.

*Example*

This example filters special characters and takes advantage of regexp's escape mechanism:

```sql
<root xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign">
	<example>
		<pc:value-of select="strings:REReplace('My\Value\','\\|,|/|\^|~|@|&|\||-|\(|\)|\[|\]|\{|\}|\*|\?|=|\+|\.|,|%','')"/>
	</example>
</root>
```

The result value is the input **My\\Value\\** but without the backslash characters:

```
MyValue
```

> [!TIP]
> If you want to do a simple replacement for which you do not require a regexp pattern, use [strings:Replace()](/docs/Repositories/Blend%20functions/stringsReplace.md) instead.