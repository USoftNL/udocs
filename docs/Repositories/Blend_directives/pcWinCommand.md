---
id: pcWinCommand
---

# pc:WinCommand



> [!NOTE]
> This article is about the **pc:WinCommand**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:WinCommand**

Runs a command line at OS level and passes it a command line with options/arguments/switches (if any).

Returns an XML fragment by way of a report. See the "Return value" section at the end of this help topic.

*Syntax*

```
<pc:WinCommand
     cmd="*file-path*"
     args="*command-with-arguments*"
     waittime="*waittime*" />
```

The required **cmd** is an absolute or relative file path leading to the executable that you want to pass the command line to. If a relative path (including a simple filename, as in the Example) is used, then whether or not the executable can be found depends on path environment variables. You can set environment variables from Blend by calling pc:SetEnvVarDefault or pc:SetEnvVarOverwrite.

The required **args** is the command line you want to pass to the executable.

The optional **waittime** specifies in milliseconds how long you want to wait for the command to respond. If the command does not complete within time, you get a return value (see the "Return value" section at the end of this help topic) without output. If you omit this attribute, the default waittime of 1000 milliseconds applies.

*Example 1*

This example lists folders and files contained by the working directory. This is a USoft Blend script processed by ublendit.exe from the command line.

```language-xml
<example xmlns:pc="Processing.Command" >
  <pc:value-of mycmd="cmd.exe /C dir"/>
  <pc:WinCommand cmd="cmd.exe" args="{$mycmd}"/>
</example>
```

*Example 2*

This example does the same as Example 1. This is a USoft Blend script processed from a USoft context.

```sql
select uscsxsl.blend
(
    '<example xmlns:pc="Processing.Command">
       <pc:WinCommand cmd="cmd.exe" args="{$mycmd}"/>
     </example>'
,    'mycmd'
,    'cmd.exe /C dir'
)
```

*Example 3*

```language-xml
<application xmlns:pc="Processing.Command">
  <pc:assign-string-default
    usoftexe = "\\FS.USOFT.COM\prorep\usd911A\bin64\usd.exe"
    repargs= '-app "REPORTER"  -title "Reporter 91" -oracle -owner OPS$REPORTER -ddfile -database'
    repconnection = '"(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=NLBRNNT21.USOFT.COM)(PORT=1521))(CONNECT_DATA=(SID=P)))"'
    repuser = "-u REPORTERFUNNEL"
    repfunnelpwd = '-pw "*20*3e*3c*3e*295S*26Y*3bS*23*3a*23FG*2aMJ*3b8ER3*28*273*24O"'
  />
  <pc:assign repargs="{concat($repargs, ' ', $repconnection, ' ', $repuser, ' ', $repfunnelpwd)}" />
  <pc:WinCommand cmd="{$usoftexe}" args="{$repargs}"/>
</application>
```

## Return value

The return value is an XML fragment that has this syntax:

```
<CommandResult
     cmd="*path-to-executable*"
     args="*command-with-arguments*"
     wd="*working-directory*"
     waittime="*waittime*"
     Busy="*busy*">
  <Output> *output* </Output>
</CommandResult>

*busy*  ::=  { true | false }
```

**Waittime** (in milliseconds) is the waittime passed as an argument of \<pc:WinCommand>, or else the default waittime of 1000 milliseconds. The **Busy** attribute only appears if the command did not complete within the waittime. Busy="true" means that the process was running at the end of the waittime. For example:

```language-xml
<CommandResult cmd="cmd.exe" wd="C:\Users\P3100014\AppData\Local\Temp" args="cmd.exe /C dir" waittime="1000">
  <Output>
    Volume in drive C has no label.
    Volume serial number is 3C05-F345
    Directory of C:\Users\P3100014\AppData\Local\Temp
23-06-2019   18:22    <DIR>    TCDCC97.tmp
23-06-2019   18:22    <DIR>    TCDCC98.tmp
24-06-2019   10:54        98.725     URL70B0.tmp
24-06-2019   10:53             0     tmp5544.tmp
24-06-2019   10:53        27.222     tmp5544.tmp_keyschema.xsl
              3 File(s)          125.947 bytes
              2 Dir(s)   91.130.769.408 bytes free
  </Output>
</CommandResult>
```

 