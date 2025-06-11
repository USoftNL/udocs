---
id: pcZipFile
---

# pc:ZipFile




:::note

This article is about the **pc:ZipFile**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:ZipFile**

Produces a description of the files and folders found in a ZIP file.

Returns an XML document.

*Syntax*

```
<pc:ZipFile filepath="*file-path*" />
```

The required filepath is a path leading to the ZIP file you want described.

*Example*

```xml
<pc:ZipFile filepath="c:\temp\mynewzipfile.zip" />
```

The result looks like this:

```xml
<ZipFile name="mynewzip">
      <Entry fullpath="assets\asset1.txt" path="" name="asset1 - Copy.txt" ext=".txt" lastwrite="2019/0122112122" />
      <Entry fullpath="assets\asset2.txt" path="" name="asset1.txt" ext=".txt" lastwrite="2019/0122112122" />
      <Entry fullpath="resources\assets.xml" path="" name="assets.xml" ext=".xml" lastwrite="2019/0122113830" />
      <Entry fullpath="resources\resources.xml" path="" name="resources.xml" ext=".xml" lastwrite="2019/0122112222" />
      <Entry fullpath="resources\more\moreassets.xml" path="" name="moreassets.xml" ext=".xml" lastwrite="2019/0122113902" />
</ZipFile>
```

 