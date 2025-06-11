---
id: pcCopyDirectory
---

# pc:CopyDirectory




:::note

This article is about the **pc:CopyDirectory**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:CopyDirectory**

Copies a folder to a destination (another folder) on the file system. Directory contents and descendent folders are also copied.

*Syntax*
 

```
<pc:CopyDirectory
     source="*folder-path*"
     destination="*folder-path*"
     overwrite="*overwrite*" />

*overwrite*  ::=  { yes | no }
```

The required **source** identifies the folder to be copied. The required **destination** identifies the destination folder.

If overwrite="yes" is passed, then any existing content in the destination folder is silently overwritten.

*Example*

```xml
<pc:CopyDirectory source="{$sourcedir}" destination="{$serverdir}" overwrite="yes">
   <pc:Succeeded>
      <pc:ConsoleWrite>Server deployed to <pc:value-of select="$serverdir"/>.</pc:ConsoleWrite>   
   </pc:Succeeded>   
</pc:CopyDirectory>  
```

 