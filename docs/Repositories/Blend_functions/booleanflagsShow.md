---
id: booleanflagsShow
---

# booleanflags:Show



> [!NOTE]
> This article is about the **booleanflags:Show**[ Blend function](/docs/Repositories/Blend_functions).

## **booleanflags:Show**

Shows the set of pairs of string values that are interpreted by flag-based string-to-boolean conversion as boolean true() and boolean false(). You can add items to this set by calling pc:define-boolean-flags.

Returns a node set.

Blend string-to-boolean conversion is performed by calling the function

booleanflags:ToBoolean

This conversion is also performed when you call the following directives IF they are executed with the pc:booleanflags="yes" switch:

pc:assign-boolean
pc:assign-boolean-default

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:booleanflags="USoft:BooleanFlags"
```

*Function call*

```
booleanflags:Show( )
```

*Example*

```language-xml
<example xmlns:pc="Processing.Command">
   <pc:assign-nodeset mylist="{booleanflags:Show()}"/>
   <pc:copy-of select="$mylist"/>
</example>
```

If this Example returns the following:

```language-xml
<Flags>
  <Flag true="true" false="false" index="0" />
  <Flag true="yes"  false="no"    index="1" />
</Flags>
```

then USoft Blend's flag-based string-to-boolean conversion will (case-insensitively) interpret the strings true and yes as boolean true(), and the strings false and no as boolean false().