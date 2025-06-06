---
id: pcAppendFile
---

# pc:AppendFile



> [!NOTE]
> This article is about the **pc:AppendFile**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:AppendFile**

Opens a text file and writes text to it. If the file already exists, the input is appended.

*Syntax 1*

```
<pc:AppendFile filepath="*file-path*" disable-output-escaping="*disable*">

*content*

</pc:AppendFile>

*disable*  ::=  { yes | no }
```

*Syntax 2*

```
<pc:AppendFile filepath="*file-path*" select="*xpath >> text-literal*" disable-output-escaping="*disable*" />

*disable*  ::=  { yes | no }
```

The required *filepath* points to the location where the file must be written.

The text to be written must be expressed either as *content* (Syntax 1) or in a **select** attribute (Syntax 2).

If you set *disable* to "yes", special XML characters in the output will not be escaped. See Example 2 in the pc:WriteFile help topic.

*Example*

Information about a data import operation is written to a logfile.

```language-xml
<root xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign">
<pc:terminate test="not(wrights:HasAdminRole())" msg="{concat('Admin role is required. Available roles:', wrights:Roles())}"/>

  <pc:assign-string workingdir="{directories:Get()}" />
  <pc:assign-string traveldata="{path:Combine($workingdir, 'TRAVEL.xml')}"/>

  <pc:RunRulesService waittime="10000"
      user="USD91_TRAVEL" pwd="USD91_TRAVEL" rdbmstype="oracle" connection="XE" application="TRAVEL"
      owner="USD91_TRAVEL"
      assign:thisconn="/*/@id" assign:rsstate="RulesService/@state" assign:logurl="RulesService/@logurl" assign:hint="RulesService/@error-hint" />
  <pc:terminate
      test="normalize-space($thisconn)=''"
      msg="{concat('rules service did not start (state=', $rsstate, ') logurl=', $logurl, 'hint=', $hint)}"
      exitcode="-1" />
  <pc:AppendFile filepath="c:\temp\testlog.txt">
      <pc:XmlImport connection="{$thisconn}" commit="commit" source="{$traveldata}" />
  </pc:AppendFile>

</root>
```

 