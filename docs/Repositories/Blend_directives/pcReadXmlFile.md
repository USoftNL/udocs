---
id: pcReadXmlFile
---

# pc:ReadXmlFile



> [!NOTE]
> This article is about the **pc:ReadXmlFile**[ Blend directive](/docs/Repositories/Blend_directives).

## **pc:ReadXmlFile**

Attempts to parse the contents of a specified file as XML. If successful, returns that XML content as a node set, except if a variable is assigned as part of the directive, as in Example 2.

Returns an XML fragment.

If not successful, returns an error. See the "Errors" section.

*Syntax*

```
<pc:ReadXmlFile filepath="*file-path*" />
```

The required **filepath** points to the file to be read. If **filepath** is a relative filepath, the path is relative to the current working directory.

*Example 1*

```language-xml
<pc:assign path="c:\temp\definerData.xml"/>
<pc:ReadXmlFile filepath="{$path}"/>
```

*Example 2*

```language-xml
<pc:assign path="c:\temp\definerData.xml"/>
<pc:ReadXmlFile filepath="{$path}" assign:rulemsg="rules/rule[2]"/>
<pc:value-of select="$rulemsg"/>
```

If the file's content is :

```language-xml
<rules>
  <rule>This is rule 1.</rule>
  <rule>This is rule 2.</rule>
</rules>
```

then Example 2 returns:

```
This is rule 2.
```

*Example 3*

This example reads a dialog description from a file and passes it to pc:Dialog which displays the dialog on the screen.

```language-xml
<pc:Dialog>   
       <pc:ReadXmlFile filepath="c:\temp\mydialog.xml"/>
</pc:Dialog>
```

## Errors

If the file does not contain valid XML, an \<Error> element is returned such as the following:
\<Error>The '\<this>' start tag on line 2 position 4 does not match the end tag of 'that'.\</Error>


 