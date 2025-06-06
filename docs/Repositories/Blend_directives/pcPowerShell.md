---
id: pcPowerShell
---

# pc:PowerShell



> [!NOTE]
> This article is about the **pc:PowerShell**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:PowerShell**

Runs a Powershell command line at the level of the Windows OS. Click here for using this to execute a SQL script stored in a text file.

Returns an XML fragment by way of a report. See the "Return value" section at the end of this help topic.

*Syntax*
 

```
<pc:PowerShell[ *variable*="*value*", ... ] >

*powershell-command*

</pc:PowerShell>

*variable*  ::=  *name-literal*
```

Variables passed as *variable="value"* arguments of pc:PowerShell are global in the sense that you can keep referring to them in multiple calls to pc:PowerShell within the same Blend script.

*Example*

```language-xml
<pc:PowerShell> Write-Output "Hello World" </pc:PowerShell>
```

## Passing string variables

You can pass variables of type string to the PowerShell command like so:

```language-xml
<pc:assign-string somebody="John"/>
<pc:PowerShell arg1="{$somebody}">Write-Output "Hello $arg1's Universe"</pc:PowerShell>
```

The return value of this example is:

```language-xml
<PowerShell><Result> Hello John's Universe </Result></PowerShell>
```

## Passing node set variables

You can pass variables of type node set to the PowerShell command like so:

```language-xml
<pc:assign-nodeset myxml="{$xmldoc1}"/>
<pc:PowerShell arg1="{$myxml}">Write-Output $arg1.InnerXml</pc:PowerShell>
```

## Return value

The return value is an XML fragment that has this syntax:

```language-xml
<PowerShell>
  <Result> result </Result>
</PowerShell>
```

The return value of:

```language-xml
<pc:PowerShell> Write-Output "Hello World" </pc:PowerShell>
```

is:

```language-xml
<PowerShell><Result> Hello World </Result></PowerShell>
```

## Limitations

The optional *variable="value"* arguments can only be used to pass input to pc:PowerShell, not to catch output from the embedded XML that pc:PowerShell returns. As a workaround, you can catch the output in a variable in a separate step, eg., by using pc:evaluate. This allows further processing of the output:

```language-xml
<pc:evaluate assign:output_from_powershell=".">
    <pc:PowerShell> Write-Output "Hello World" </pc:PowerShell>
</pc:evaluate>
<pc:copy-of select="$output_from_powershell/Result/text()"/>
```

 