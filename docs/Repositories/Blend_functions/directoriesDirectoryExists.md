---
id: directoriesDirectoryExists
---

# directories:DirectoryExists




:::note

This article is about the **directories:DirectoryExists**[ Blend function](/docs/Repositories/Blend_functions).

:::

## **directories:DirectoryExists**

Evaluates whether or not a directory designated by a full folder path exists on the file system.

Returns a boolean.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:directories="USoft:Directories"
```

*Function call*

```
directories:DirectoryExists( *folderpath* )
```

*Example*

```language-xml
<pc:if test="directories:DirectoryExists($webpages_dir)">
  <pc:then>
    <pc:assign-nodeset webpagesdir="{directories:DirectoryContent($webpages_dir, '*.*', '1', '', '')}"/>
      <pc:terminate test="$webpagesdir/Directory/*" msg="{concat('Error: Publication directory "',$webpages_dir,'" is not empty.')}"/>
  </pc:then>
  <pc:else><pc:CreateDirectories><Directory dirpath="{$webpages_dir}"/></pc:CreateDirectories></pc:else>
</pc:if>
```

 