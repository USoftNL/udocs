---
id: xslutilUSoftDir
---

# xslutil:USoftDir



> [!NOTE]
> This article is about the **xslutil:USoftDir**[ Blend function](/docs/Repositories/Blend_functions).

## **xslutil:USoftDir**

Returns the USoft installation directory of the ublendit.exe executable being used.

The return value has a trailing backslash.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:xslutil="USoft:XslUtil"
```

*Function call*

```
xslutil:USoftDir()
```

This could return:

```
C:\Program Files\usd100\
```

 