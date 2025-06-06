---
id: pcWriteFile
---

# pc:WriteFile



> [!NOTE]
> This article is about the **pc:WriteFile**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:WriteFile**

Writes text to a text file, overwriting any existing file. Use pc:AppendFile if you want to add the text to the existing file instead of overwriting it.

*Syntax 1*

```
<pc:WriteFile filepath="*file-path*" disable-output-escaping="*disable*">

*text-literal*

</pc:WriteFile>

*disable*  ::=  { yes | no }
```

Syntax 2

```
<pc:WriteFile filepath="*file-path*" select="*xpath >> text-literal*" disable-output-escaping="*disable*" />

*disable*  ::=  { yes | no }
```

The required **filepath** points to the location where the file must be written.

The text to be written must be expressed either as *content* (Syntax 1) or in a **select** attribute (Syntax 2).

If you pass disable-output-escaping="yes", special XML characters in the output will not be escaped.

Use this option when you are writing XML that you want to process further (Example 2).

*Example 1*

```language-xml
<pc:assign-string path="c:\temp\output.txt"/>
<pc:WriteFile filepath="{$path}">Hello world</pc:WriteFile>
```

*Example 2*

In this example the TRAVEL.xml inputfile is picked up and converted to flat text, each occurrence (whether in element names, attributes names, or text nodes) of ITALIA is translated to ITALIA and each occurrence of GERMANY to DEUTSCHLAND, and the result is written to the TRAVEL.replaced.xml outputfile.

disable-output-escaping="yes" causes special XML characters in the output to be preserved instead of being converted to entity references such as >.

```language-xml
<?xml version="1.0" encoding="UTF-8"?>
<example xmlns:pc="Processing.Command" >
  <pc:defs><Settings><Setting NAME="ITALY" VALUE="ITALIA"/><Setting NAME="GERMANY" VALUE="DEUTSCHLAND"/></Settings></pc:defs>
  <pc:assign-nodeset inputxml="TRAVEL.xml" />
  <pc:assign-nodeset settings="{//pc:defs/*}"/>
    <pc:WriteFile filepath="TRAVEL.replaced.xml" disable-output-escaping="yes"  >  
      <pc:ReplaceVariables txt="{$inputxml}" select="$settings"/>
    </pc:WriteFile>
</example>
```

 