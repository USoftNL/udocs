---
id: Locating_USoft_application_flatfiles
---

# Locating USoft application flatfiles

When a USoft development team creates or deploys an application, a set of *application flatfiles* is generated that contains the core functionality of the application:

```
*application*.con
*application*.esi
*application*.smg
*application*.umg
```

where *application* is the name of the USoft application.

When a USoft application is run from flatfiles, USoft looks for these application flatfiles on the server's file system using the following steps. Each next step applies only if the previous step was unsuccessful.

**Step 1: \\APP subfolder**

USoft attempts to find application flatfiles in the \\APP subfolder of the USoft installation directory. The USoft installation directory is indicated by the value of the **Destination Path** [registry key for the installed USoft version](/docs/USoft_for_administrators/Understanding_USoft/USoft_registry_keys_on_Windows.md).

**Step 2: FileSearchPath**

USoft attempts to find application flatfiles by looking at the value or values of the **FileSearchPath** [registry key for the installed USoft version](/docs/USoft_for_administrators/Understanding_USoft/USoft_registry_keys_on_Windows.md).

**FileSearchPath** is allowed to have multiple values separated by colons. USoft attempts to find the application flatfiles first in the location of the first-mentioned value, then in the second, and so on; if there is a match for a required file, further values are ignored. Each value of **FileSearchPath** must represent either an absolute or a relative **file path** (not: folder path) on the file system, with backslashes separating parent directory and child directory. Relative paths represent paths from the USoft home directory indicated by the **HomeDir** registry entry which is, by default, the Windows current directory or “working directory”. Relative file paths include stand-alone file names. The following substitution variables are allowed in these paths:

|**Substitution variable**|**Meaning**|
|--------|--------|
|**.**   |(full stop) Windows current directory or "working directory”: where you were when you started USoft|
|**%i**  |(percentage and lowercase ‘i’) USoft home directory *|
|**%I**  |(percentage and uppercase ‘I’) USoft installation directory|
|**%N**  |Application name = file name without extension|
|**%S**  |File extension|
|**%T**  |\\APP subdirectory of USoft installation directory|



* The USoft home directory is indicated by the value of the **HomeDir** registry entry.

The default value of the **FileSearchPath** registry entry is:

```
%N%S;%i\%N%S
```

meaning that USoft looks by default, for all applications and file extensions, in the current directory (working directory), given that the default value for the **HomeDir** registry entry is **.**, i.e. the current directory.

> [!NOTE]
> This **FileSearchPath** default value is somewhat confusing because the second value (following the colon) has the same meaning as the first (preceding the colon), and also because both values are actually redundant in the default situation, because of Step 3 (below).

> [!TIP]
> Some teams prefer to have application flatfiles not in the USoft installation directory but in a different location. They modify the value of the **FileSearchPath** registry key to indicate this different location.

**Step 3: USoft home directory**

USoft attempts to find application flatfiles in the directory indicated by the **HomeDir** registry entry, which is by default the Windows current directory or "working directory” where you were when you started USoft.