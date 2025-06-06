---
id: filesReadFile
---

# files:ReadFile



> [!NOTE]
> This article is about the **files:ReadFile**[ Blend function](/docs/Repositories/Blend_functions).

## **files:ReadFile**


Returns the contents of a plain text file found in the file system at filepath.

Returns a string.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:files="USoft:Files"
```

*Function call*

```
files:ReadFile( *filepath* )
```

*Example*

```language-xml
<pc:assign-string filecontent="{files:ReadFile($myfile)}"/>
```

 