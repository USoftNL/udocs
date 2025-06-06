---
id: pathCombine
---

# path:Combine




:::note

This article is about the **path:Combine**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **path:Combine**

Combines one or more *folderpath* expressions with *path* to form a new folderpath or filepath.

*Syntax*

*Nameaspace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:path="USoft:Path"
```

*Function call*

```
path:Combine( *folderpath* [, ... ], *path* )
```

This function is guaranteed to combine expressions in such a way that the result has exactly 1 backslash character between each step in the folderpath and the next.


:::tip

For a full list of Blend functions in the area of path manipulation, use this command line:
**usoft-install-dir\\bin64\\ublendit.exe functions ns=path**

:::

*Example*

This example assigns to a variable called "destdir" the (existing or virtual) \\app subdirectory of the working directory.

```language-xml
<pc:assign-string-default workingdir="{directories:Get()}"/>
<pc:assign-string
  destdir="{path:Combine( $workingdir, 'app' )}"/>
```

 