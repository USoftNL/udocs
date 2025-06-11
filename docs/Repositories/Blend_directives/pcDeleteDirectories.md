---
id: pcDeleteDirectories
---

# pc:DeleteDirectories




:::note

This article is about the **pc:DeleteDirectories**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:DeleteDirectories**

Deletes one or more specified directories and their contents and (if specified) their subdirectories.

*Syntax*

```
<pc:DeleteDirectories>
     <Directory dirpath="*folderpath*" recursive="*recursive*"/>
     ...
</pc:DeleteDirectories>

*recursive*  :=  { yes | no }
```

The required **folderpath** is a folderpath identifying, in each case, the folder to be deleted.

If recursive="yes" is passed, then files and subdirectories contained by the folder (if any) are automatically deleted along with the folder itself.

*Example*

```xml
<pc:DeleteDirectories>
     <Directory dirpath="{$serverdir}" recursive="yes"/>
     <Directory dirpath="{path:Combine($serverdir, '..', 'help')}" />
</pc:DeleteDirectories>
```

## Errors

1. If folderpath is not found on the file system, the operation fails and returns the error message:

```
Could not find a part of the path folderpath.
```

In this case, if you have other \<Directory> elements for which the folderpath is found, those directories are deleted, and the error message reads:

```
Deleted *n* directories. Could not find a part of the path *folderpath*.
```

To test ahead of time whether a directory exists, you can write:

```xml
...
<pc:assign-nodeset dirfound="{directories:DirectoryContent($mydir, '*', '0', '', '')}" />   
<pc:if-then test="$mydir/Directory">
  <pc:DeleteDirectories>
    <Directory dirpath="{$mydir}" />
  </pc:DeleteDirectories>
</pc:if-then>
…
```

2. If recursive="no" (the default), and the folder contains at least one file or subdirectory, then the operation fails and returns the error message:

```
The directory is not empty.
```

In this case, if you have other \<Directory> elements, the delete operation fails also for those other elements.

 