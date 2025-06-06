# files:XmlFile



> [!NOTE]
> This article is about the **files:XmlFile**[ Blend function](/docs/Repositories/Blend%20functions).

## **files:XmlFile**


Returns the contents of the XML file found in the file system at filepath.

Returns a node set.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:files="USoft:Files"
```

*Function call*

```
files:XmlFile( *filepath* )
```

*Example 1*

```language-xml
<pc:evaluate select="variable:Set('envxml', files:XmlFile('env.xml'))"/>
```

*Example 2*

```language-xml
<pc:assign-nodeset mynodeset="{files:XmlFile('config.xml')}" />
<pc:assign myinstalldir="{$mynodeset//computer[@name=environment:MachineName()]/@installdir}"/>
```

 