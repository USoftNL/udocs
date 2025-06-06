---
id: directoriesDirectoryContent
---

# directories:DirectoryContent



> [!NOTE]
> This article is about the **directories:DirectoryContent**[ Blend function](/docs/Repositories/Blend_functions).

## **directories:DirectoryContent**

Returns a node set enumerating files and folders found in the filesystem at the location of filepath.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:directories="USoft:Directories"
```

*Function call*

```
directories:DirectoryContent(
*filepath*
,  *filter*
,  *level*
,  *after*
,  *before*
)
```

*Filepath*, *filter* and *level* are required. *After* and *before* are optional.

The result is filtered using *filter* and *level*, and, optionally, *after* and *before*:

- *Filter* is a DOS filter for folder- and filenames in which '*' (asterisk) is a name wildcard.
- *Level* is the number of directory levels taken into account from filepath, with '0' representing the directory at filepath itself and any files in this directory.
- *After* (if passed) specifies a date value. Files stamped before this date are filtered from the result set.
- *Before* (if passed) specifies a date value. Files stamped after this date are filtered from the result set.

*Example 1*

```language-xml
<pc:assign-nodeset mycontentslist="{directories:DirectoryContent($workingdir, '*.*', '1', '', '')}" />
<pc:copy-of select="$mycontentslist"/>
```

This example could return:

```language-xml
<Directory dirpath="c:\usoft\1.0\flatfiles\using" dirname="using" lastwrite="2018/0103123145">
  <File filepath="c:\usoft\1.0\flatfiles\using\config.xsl" filename="config.xsl" lastwrite="2018/0103125957" />
  <File filepath="c:\usoft\1.0\flatfiles\using\sample.xsl" filename="sample.xsl" lastwrite="2018/0103123145" />
</Directory>

<File filepath="c:\usoft\1.0\flatfiles\config.xml" filename="config.xml" lastwrite="2018/0103132731" />
<File filepath="c:\usoft\1.0\flatfiles\TRAVEL.con" filename="TRAVEL.con" lastwrite="2018/0103122019" />
<File filepath="c:\usoft\1.0\flatfiles\TRAVEL.con" filename="TRAVEL.job" lastwrite="2018/0103122020" />
<File filepath="c:\usoft\1.0\flatfiles\TRAVEL.esi" filename="TRAVEL.esi" lastwrite="2018/0103122021" />
```

*Example 2*

```language-xml
<pc:each
  using="directories:DirectoryContent($workingdir, '*.*', '1', '', '')"
  select="Directory/File[not(@filename='deploy.xml')]
  assign:result="@filename">

  <pc:CopyFileOverwrite
    source="{path:Combine($sourcedir,$result)}"
    destination="{path:Combine($destdir,$result)}"/>

</pc:each>
```

 