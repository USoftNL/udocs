---
id: pathGetFullPath
---

# path:GetFullPath




:::note

This article is about the **path:GetFullPath**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **path:GetFullPath**

Returns the absolute path leading to a directory specified by a relative path.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:path="USoft:Path"
```

*Function call*

```
path:GetFullPath( path )
```

The required path is a path expression identifying the directory that you want the full path of.


:::tip

For a full list of Blend functions in the area of path manipulation, use this command line:

:::
**> usoft-install-dir\\bin64\\ublendit.exe functions ns=path**

*Example*

This example writes to the console the full path leading to the current directory.

```xml
<pc:assign-string fullpath="{path:GetFullPath('.')}"/>
<pc:ConsoleWrite>
  The full path to the current directory is:
  <pc:value-of select="$fullpath"></pc:value-of>
</pc:ConsoleWrite>
```

 