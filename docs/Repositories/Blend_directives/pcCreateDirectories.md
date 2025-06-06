---
id: pcCreateDirectories
---

# pc:CreateDirectories



> [!NOTE]
> This article is about the **pc:CreateDirectories**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:CreateDirectories**

Creates one or more specified directories if they do not exist.

*Syntax*

```
<pc:CreateDirectories>
     <Directory dirpath="*folder-path*" />
     ...
</pc:CreateDirectories>
```

The required **dirpath** identifies, in each case, the folder to be created.

*Example*

```language-xml
<pc:CreateDirectories>
     <Directory dirpath="{$serverdir}" />
</pc:CreateDirectories>
```

 