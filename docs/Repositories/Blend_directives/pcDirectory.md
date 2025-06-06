---
id: pcDirectory
---

# pc:Directory



> [!NOTE]
> This article is about the **pc:Directory**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:Directory**

Returns a directory-and-file description of the contents of a directory node in the file system, allowing you to loop over a set of files. This description contains, for each directory and each file:

- The local name of the directory or file.
- The full path leading to the directory or file.
- A timestamp indicating the time and date when the directory or file was last modified.

Returns an XML fragment.

*Syntax*

```
<pc:Directory
     filepath="*file-path*"
     select="*xpath*"
     filter="*path-pattern*"
     subdirlevel="*integer*"
     before="*date*"
     after="*date*"
/>
```

The required **filepath** points to the directory that you want a description of.

The optional **select** attribute is a filter that selects specific nodes from the returned XML document, as shown in Examples 2 and 3. The *xpath* location path is evaluated relative to the root node of this XML document, regardless of whether it is a relative or absolute location path.

The optional **filter** attribute is a file name pattern applied to the result, as shown in Example 3. For an explanation, search "file name patterns" on USoft Community. If the result lists files (at any level of the directory tree), then

```
filter="*.xml"
```

causes the result to list only files that have the "*.xml" extension.

The optional **subdirlevel** is a filter that restricts to a maximum level of subdirectories. Its value must be a positive integer or 0 (zero). If its value is 1, only the contents of the directory itself and its first-level subdirectories are returned. If its value is 0, no information on subdirectories is returned.

The optional **before** and **after** allow you to specify that you only want information on files before, or after, or between, the specified date value(s). See the "Before and after" section below. *Date* must be in a date format that can be interpreted in USoft Blend.

*Example 1*

```language-xml
<pc:Directory filepath="c:\temp" />
```

An example result is:

```language-xml
<Directory dirpath="c:\temp\" dirname="temp" lastwrite="2019/0109100614">
  <Directory dirpath="c:\temp\mydir2" dirname="mydir2" lastwrite="2019/0109100620">
    <File filepath="c:\temp\mydir2\myfile4.txt" filename="myfile4.txt" lastwrite="2019/0109100021" />
  </Directory>
    <File filepath="c:\temp\myfile1.xml" filename="myfile1.xml" lastwrite="2019/0109093257" />
    <File filepath="c:\temp\myfile2.xml" filename="myfile2.xml" lastwrite="2019/0109083456" />
    <File filepath="c:\temp\myfile3.txt" filename="myfile3.txt" lastwrite="2019/0108180520" />
</Directory>
```

*Example 2*

```language-xml
<pc:Directory filepath="c:\temp" select="Directory/File" />
```

An example result is:

```language-xml
<File filepath="c:\temp\myfile1.xml" filename="myfile1.xml" lastwrite="2019/0109093257" />
<File filepath="c:\temp\myfile2.xml" filename="myfile2.xml" lastwrite="2019/0109083456" />
<File filepath="c:\temp\myfile3.txt" filename="myfile3.txt" lastwrite="2019/0108180520" />
```

*Example 3*

```language-xml
<pc:Directory filepath="c:\temp" select="Directory/File" filter="*.xml" />
```

An example result is:

```language-xml
<File filepath="c:\temp\myfile1.xml" filename="myfile1.xml" lastwrite="2019/0109093257" />
<File filepath="c:\temp\myfile2.xml" filename="myfile2.xml" lastwrite="2019/0109083456" />
This is more efficient than the following, because the result is filtered upfront, as opposed to the whole set being retrieved before it is filtered:
<pc:Directory filepath="c:\temp" select="Directory/File[strings:EndsWith(@filename,'.xml')]" />
```

## Before and after

You can optionally specify that you only want to see items that have a timestamp before or after a specified date, or between specified dates.

In the following example, the result only contains XML files that have a timestamp between 1 and 15 of January, 2019:

```language-xml
<pc:Directory
     filepath="c:\temp" filter="*.xml"
     before="01-01-2019"
     after = "15-01-2019"
/>
```

This is true because the following date format is in the list of USoft Blend date formats:

```
DD-MM-YYYY
```

> [!WARNING]
> The use of the before and after attributes yields an uncertain result if applied to a set of files and folders that is not a flat list but, rather, a hierarchical structure in which subfolders or parent folders have a timestamp of their own. In the example, the result is certain, because the filepath and filter attributes together cause the result to be a flat list: all the files with extension .XSL that are in directory "c:\\temp" (but not in subfolders of this directory).

## Looping over a set of files or directories

To loop over a set or files or directories, you can use the following 2 directives. This particular example simply outputs a list of filenames.

```language-xml
<pc:assign-nodeset textfiles="{.}">
   <pc:Directory filepath="c:\temp" select="Directory/File" filter="*.xml"/>
</pc:assign-nodeset>
<pc:each select="$textfiles" assign:result="@filename">
     <pc:value-of select="$result"/><pc:newline/>
</pc:each>
```

 