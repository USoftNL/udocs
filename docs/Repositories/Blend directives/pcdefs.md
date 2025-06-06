# pc:defs



> [!NOTE]
> This article is about the **pc:defs**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:defs**

Marks a script section of content that is not executed and does not return output. This section can be referred to from elsewhere in the script.

> [!TIP]
> This goes counter to the general principle that USoft Blend is based on an identity transformation, and that therefore script content is normally executed and returns output.

The content of pc:defs is not executed. The content of pc:void is executed but any result is nullified, ie., it is not returned as output.

*Syntax*

```
<pc:defs>
*xml-content*
</pc:defs>
```

*Example 1*

A literal XML fragment is placed in a \<pc:defs> section so that it may be assigned as a node set to a variable called "mydefs".

```language-xml
<pc:defs><somexml>Hi</somexml></pc:defs>
<pc:assign-nodeset mydefs="{preceding-sibling::pc:defs/*}"/>
```

*Example 2*

Two XSLT templates are placed in a \<pc:defs> section so that they can be applied by a call to xslutil:applyTemplate() but are otherwise ignored.

```language-xml
<authdata xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:pc="Processing.Command">
...
<pc:defs>
  <xsl:template match="T_AUTH_USER[@USERNAME='adminuser']"/>
  <xsl:template match="T_AUTH_OC_PARAMS[@OC_ID='LAN' and @SET_TYPE='URE' and @PARAM_NAME='Allow_Disable_Constraint']"/>
</pc:defs>

<pc:assign-string
    usauth_filepath="{path:Combine($workingdir, 'USAUTH.xml')}"/>
<pc:assign-nodeset
    usauth_data = "{xslutil:applyTemplate($usauth_filepath, /*/pc:defs/xsl:template)}"/>

</authdata>
```

 