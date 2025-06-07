---
id: directoriesGet
---

# directories:Get




:::note

This article is about the **directories:Get**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **directories:Get**

Returns the folderpath pointing to the working directory.

*Syntax*

*Namespace declaration*

```
xmlns:directories="USoft:Directories"
```

*Function call*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
directories:Get( )
```

*Example*

```xml
<pc:assign-string-default workingdir="{directories:Get()}"/>
```

 