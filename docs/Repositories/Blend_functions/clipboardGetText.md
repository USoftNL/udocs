---
id: clipboardGetText
---

# clipboard:GetText




:::note

This article is about the **clipboard:GetText**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **clipboard:GetText**

Returns the current contents of the clipboard.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:clipboard="USoft:ClipBoard"
```

*Function call*

```
clipboard:GetText( )
```

*Example*

```language-xml
<ClipBoard xmlns:pc="Processing.Command" pc:hideme="true">
   <pc:value-of select="clipboard:GetText()"/>
</ClipBoard>
```

 