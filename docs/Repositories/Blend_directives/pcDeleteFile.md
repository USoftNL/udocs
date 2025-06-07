---
id: pcDeleteFile
---

# pc:DeleteFile




:::note

This article is about the **pc:DeleteFile**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:DeleteFile**

Deletes a file from the file system.

*Syntax*

```
<pc:DeleteFile source=*filepath* />
```

The required **source** is a filepath identifying the file to be deleted.

This call has no effect and raises no error if no file is found at filepath.

*Example*

```xml
<pc:DeleteFile source="{path:Combine($mydir, 'old.xml')}" />
```

 