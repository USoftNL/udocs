---
id: xslutilSleep
---

# xslutil:Sleep



> [!NOTE]
> This article is about the **xslutil:Sleep**[ Blend function](/docs/Repositories/Blend%20functions).

## **xslutil:Sleep**

Halts processing (ie., pauses) for a specified lapse of time, then returns true.

Returns a boolean.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:xslutil="USoft:XslUtil"
```

*Function call*

```
xslutil:Sleep( *time* )
```

The required *time* is a lapse of time expressed in milliseconds.

*Example*

This line of code halts processing for 3 seconds.

```language-xml
<pc:if-then test="xslutil:Sleep(3000)"/>
```

 