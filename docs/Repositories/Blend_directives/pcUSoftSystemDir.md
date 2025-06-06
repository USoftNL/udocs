---
id: pcUSoftSystemDir
---

# pc:USoftSystemDir



> [!NOTE]
> This article is about the **pc:USoftSystemDir**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:USoftSystemDir**

Returns the local USoft installation that runs a specified Rules Service.

The return value does not have a trailing backslash.

*Syntax*

```
<pc:USoftSystemDir alias="*alias*" />
```

The **alias** attribute identifies a connection run by the local USoft installation for which you want to return the USoft temporary directory. This attribute is not required if you execute the Blend command from a USoft context, in which case the connection is the current connection.

The specified alias makes a difference if you have multiple USoft installations on the local machine. The USoft installation in scope is the USoft installation that was used to start or run the Rules Service corresponding to alias. This is the USoft installation from which you started the Blend script that started the Rules Service, for example (in the case of the current script) a temporary Rules Service started with pc:RunRulesService.

*Example*

```language-xml
<pc:USoftSystemDir alias="MYAPP1" />
```

This could return:

```
C:\usd91
```

> [!NOTE]
>  The following query returns the USoft installation directory: