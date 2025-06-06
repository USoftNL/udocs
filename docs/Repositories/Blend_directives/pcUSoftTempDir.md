---
id: pcUSoftTempDir
---

# pc:USoftTempDir



> [!NOTE]
> This article is about the **pc:USoftTempDir**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:USoftTempDir**

Returns the "USoft temporary folder" allocated to the local USoft installation that runs a specified Rules Service.

This is a subdirectory called \\USoft_temp of the USoft Log Folder

The return value has a trailing backslash.

*Syntax*

```
<pc:USoftTempDir alias="*name-literal*" />
```

The **alias** attribute identifies a connection run by the local USoft installation for which you want to return the USoft temporary directory. This attribute is not required if you execute the Blend command from a USoft context, in which case the connection is the current connection.

*Example*

```language-xml
<pc:USoftTempDir alias="MYAPP1" />
```

This could return:

```
C:\USoft\Logs\USoft_temp\
```

## The "USoft temp dir"

USoft writes to the "USoft temp dir" for technical purposes with a general character, that is, a non-user-specific character.

> [!WARNING]
> Do not confuse with the "[user temp dir](/docs/Repositories/Blend_directives/pcUserTempDir.md)".

The files USoft writes to this folder are intended as temporary, auxiliary files. They may or may not be automatically cleared by USoft after use.

The "USoft temp dir" is allocated by the person running USoft Setup when asked by the Setup wizard to specify the USoft Log Folder. In USoft 9.1, the "USoft temp dir" is a subdirectory called \\USoft_temp of the USoft Log Folder. Log information is written to another subdirectory of the USoft Log folder called \\USoft_logs, a sibling of the "USoft temp dir".

The specified alias makes a difference if you have multiple USoft installations on the local machine. The USoft installation in scope is the USoft installation that was used to start or run the Rules Service corresponding to alias. This is the USoft installation from which you started the Blend script that started the Rules Service, for example (in the case of the current script) a temporary Rules Service started with pc:RunRulesService.

> [!NOTE]
>  The following query returns the USoft temp dir: