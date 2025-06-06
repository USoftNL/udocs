---
id: pcProgramSystemDir
---

# pc:ProgramSystemDir



> [!NOTE]
> This article is about the **pc:ProgramSystemDir**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:ProgramSystemDir**

If you are running USCSXSL from the command line by calling ublendit.exe, returns the USoft installation directory of the ublendit.exe executable being used.

If you are running USCSXSL from a USoft context, returns the USoft installation directory of the USoft tool being used.

The return value has a trailing backslash.

*Syntax*

```
<pc:ProgramSystemDir/>
```

An example return value is:

```
c:\usd100\
```

> [!TIP]
> To prevent mistakes with trailing backslashes in filepath composition, you can call the path:Combine() function. This function knows that in file path concatenation a single backslash is required for each step.

 