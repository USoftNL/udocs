---
id: guidnewguid
---

# guid:newguid




:::note

This article is about the **guid:newguid**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **guid:newguid**

Returns a generated unique ID (GUID), for example:

```
8149B1A7-EB8C-437B-979F-6E12ACB0EF3D
```

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:guid="USoft:GUID"
```

*Function call*

```
guid:newguid( )
```

*Example*

```language-xml
<pc:assign-string ticket="{guid:newguid()}"/>
<pc:value-of select="$ticket"/>
```

 