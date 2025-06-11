---
id: pcUserTempDir
---

# pc:UserTempDir




:::note

This article is about the **pc:UserTempDir**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:UserTempDir**

Returns the full folder path leading to the folder that the Windows operating system keeps reserved for operations of the current Windows user.

The return value does not have a trailing backslash.

*Syntax*

```
<pc:UserTempDir />
```

This could return:

```
C:\Users\MYNAME\AppData\Local\Temp
```

## The "user temp dir"

USoft writes to the "user temp dir" for technical purposes with a user-specific character.


:::warning

Do not confuse with the "[USoft temp dir](/Repositories/Blend_directives/pcUSoftTempDir.md)".

:::

For example, when a user retrieves data in an info window, these data are written to a temporary file in the "user temp dir" so that large query results do not overload memory.

The files USoft writes to this folder are intended as temporary, auxiliary files. They may or may not be automatically cleared by USoft after use.

The "user temp dir" is allocated by the Windows OS and is normally the folder:

```
C:\Users\*Windows-login-name*\AppData\Local\Temp
```

where *Windows-login-name* is the Windows login name of the user of the current session with the Windows OS.

 