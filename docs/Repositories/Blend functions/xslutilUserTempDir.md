# xslutil:UserTempDir



> [!NOTE]
> This article is about the **xslutil:UserTempDir**[ Blend function](/docs/Repositories/Blend%20functions).

## **xslutil:UserTempDir**

Returns the full folder path leading to the "user temp dir". The "user temp dir" is allocated by the Windows OS and is normally the folder:

```
C:\Users\*Windows-login-name*\AppData\Local\Temp
```

The return value does not have a trailing backslash.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:xslutil="USoft:XslUtil"
```

*Function call*

```
xslutil:UserTempDir()
```