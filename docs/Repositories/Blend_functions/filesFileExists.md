---
id: filesFileExists
---

# files:FileExists



> [!NOTE]
> This article is about the **files:FileExists**[ Blend function](/docs/Repositories/Blend%20functions).

## **files:FileExists**

Evaluates whether or not a file designated by a full filepath exists on the file system.

Returns a boolean.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:files="USoft:Files"
```

*Function call*

```
files:FileExists( *filepath* )
```

*Example*

```language-xml
   <pc:if-then test="files:FileExists(path:Combine($appdir, 'USAUTH.con'))">
      <pc:ConsoleWrite>USAUTH.con file found.</pc:ConsoleWrite>
   </pc:if-then>
```

 