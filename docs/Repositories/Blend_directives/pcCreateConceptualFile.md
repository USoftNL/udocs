---
id: pcCreateConceptualFile
---

# pc:CreateConceptualFile




:::note

This article is about the **pc:CreateConceptualFile**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:CreateConceptualFile**

Generates a USoft .CON flat file from a USoft Definer repository for an application.

*Syntax*

```
<pc:CreateConceptualFile
    rdbms="oracle"
    connectstr="*connectstr*"
    user="*user*"
    pwd="*pwd*"
    owner="*owner*"
    application="*application*"
    filepath="*file-path*"
    crypted="{ yes | no }"
    silent ="{ yes | no }" >
</pc:CreateConceptualFile>
```

*Example*

```language-xml
<example xmlns:pc="Processing.Command" pc:hideme="true">
  <pc:CreateConceptualFile
    rdbms="oracle"
    connectstr="XE"
    user="USD91_TRAVEL"
    pwd="USD91_TRAVEL"
    application="TRAVEL"
    filepath="c:\temp\TRAVEL.xml"
    crypted="no"
    silent ="yes" >
  </pc:CreateConceptualFile>
</example>
```

 