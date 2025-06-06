---
id: pcDeleteFile
---

# pc:DeleteFile



> [!NOTE]
> This article is about the **pc:DeleteFile**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:DeleteFile**

Deletes a file from the file system.

*Syntax*

```
<pc:DeleteFile source=*filepath* />
```

The required **source** is a filepath identifying the file to be deleted.

This call has no effect and raises no error if no file is found at filepath.

*Example*

```language-xml
<pc:DeleteFile source="{path:Combine($mydir, 'old.xml')}" />
```

 