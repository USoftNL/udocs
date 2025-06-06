# booleanflags:ToBoolean



> [!NOTE]
> This article is about the **booleanflags:ToBoolean**[ Blend function](/docs/Repositories/Blend%20functions).

## **booleanflags:ToBoolean**

Attempts to convert a string to boolean true() or boolean false() by applying a special "flag-based string-to-boolean conversion" principle. This principle consists of using an internal list that is a mapping between string values and truth values.

You can view this internal list by calling the booleanflags:Show() function. You can add to this list by calling the pc:define-boolean-flags directive.

The "flag-based string-to-boolean conversion" principle contrasts with the XSLT 1.0 rules for string-to-boolean conversion, which state that any non-empty string converts to true() and only the empty string converts to false() .

The flag-based conversion is performed case-insensitively. If yes is associated to boolean true(), then so are Yes and YES.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:booleanflags="USoft:BooleanFlags"
```

*Function call*

```
booleanflags:ToBoolean( *string* )
```

The required *string* is the string value that you want to convert using "flag-based string-to-boolean conversion".

*Example*

This example returns the text "Executed verbosely" if the runtime user passes one of the following on the command line:

```
verbose=true
verbose=yes
```

but not if he passes one of the following, or nothing at all:

```
verbose=false
verbose=no
```

The booleanflags:ToBoolean() function is necessary to get this behaviour. If it were omitted, the text "Executed verbosely" would always appear because the test would be whether or not the verbose variable had a non-empty string as a value. This is always the case because of the pc:assign-string-default line.

```language-xml
<example xmlns:pc="Processing.Command">
  <pc:assign-string-default verbose="no"/>
  <pc:if-then test="booleanflags:ToBoolean($verbose)">
      Executed verbosely
  </pc:if-then>
</example>
```

 