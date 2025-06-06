---
id: pathGetFileName
---

# path:GetFileName




:::note

This article is about the **path:GetFileName**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **path:GetFileName**

Strips the path fragment in a full file path and returns only the file name found at the end.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:path="USoft:Path"
```

*Function call*

```
path:GetFileName( *path* )
```

The required *path* is a path expression identifying the path that you want to extract the file name from.


:::tip

For a full list of Blend functions in the area of path manipulation, use this command line:

:::
**> usoft-install-dir\\bin64\\ublendit.exe functions ns=path**

*Example*

This example reports what is the file name found at the end of the path:

```language-xml
<pc:assign-string fullpath="C:\Users\P3100014\Downloads\Export - 2021-12-23T170520.171.xml"/>
<pc:ConsoleWrite>
  The file name is:
  <pc:value-of select="path:GetFileName($fullpath)"/>
</pc:ConsoleWrite>
```

 