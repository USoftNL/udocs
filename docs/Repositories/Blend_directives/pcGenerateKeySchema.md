---
id: pcGenerateKeySchema
---

# pc:GenerateKeySchema




:::note

This article is about the **pc:GenerateKeySchema**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:GenerateKeySchema**

Makes explicit the [key schema XML](/docs/Repositories/Blend_directives/pcCompare.md) that is used in a comparison.

This XML is either returned as the return value or written to file.

*Syntax*

```
<pc:GenerateKeySchema
     alias="*name-literal*"
     filepath="*file-path*"
/>
```

The value of the **alias** attribute identifies the Rules Service connection used to get the result. This attribute is required if you are calling this directive outside USoft, eg. on the command line. For more information on aliases, go to the pc:RunRulesService help topic.

If you specify the optional **filepath**, the key schema XML is written to the specified file on the file system. Otherwise, the key schema XML is returned as the return value.

*Example 1*

This example is called from the command line. It writes the key schema to file.

```language-xml
<pc:assign-string-default
     keyschemafile="{concat('c:\temp\KeySchema_', $application, '.xml')"
/>
<pc:ConfigRulesService
     port="freeport"
     application="{$application}"
     user = "{$user}"
     owner= "{$owner}"
     pwd="{$pwd}"
     connectstr = "{$connectstr}"
     rdbms = "{$rdbms}"
     alias="{$alias}"
>
     <pc:RunRulesService />
</pc:ConfigRulesService>

<pc:GenerateKeySchema connection="{$alias}" filepath="{$keyschemafile}"/>
```

*Example 2*

This example is called from a USoft context, for example, a SQL Command window. It returns the key schema as the return value.

```sql
select uscsxsl.blend
(
       '<root xmlns:pc="Processing.Command">
            <pc:GenerateKeySchema assign:result="." />
      </root>'
)
```

In this example, the optional **assign:result="."** makes it possible to refer to the key schema later in the script by writing **$result**.