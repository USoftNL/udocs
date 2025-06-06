---
id: pcvalueof
---

# pc:value-of



> [!NOTE]
> This article is about the **pc:value-of**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:value-of**

Returns the string value that is the outcome of evaluating an XPath expression in the context of the \<pc:value-of> directive itself (Examples 1, 2), or that is the return value of a Blend directive (Example 3).

*Syntax*

```
<pc:value-of  
     select="*xpath >> string*"
     disable-output-escaping="{ yes | no }"

*xml-content*

/>
```

Either the **select** attribute, or the *xml-content* child element(s), or both must be present.

If the **select** attribute is present, its value identifies the XPath expression to be evaluated. This XPath expression may involve, or consist of, a call to a Blend function.

For disable-output-escaping, see the section at the end of this help topic.

*Example 1*

The result value of the following statement is xyz:

```sql
select uscsxsl.blend(
'<root xmlns:pc="Processing.Command" pc:hideme="true">
    <pc:value-of select="xy">
      <xy>xyz</xy>
      <xy>abc</xy>
    </pc:value-of>
</root>')
```

*Example 2*

The result value of the following statement is **xy**:

```sql
select uscsxsl.blend(
'<root xmlns:pc="Processing.Command" pc:hideme="true">
    <pc:value-of select="''xy''">
      <xy>xyz</xy>
      <xy>abc</xy>
    </pc:value-of>
</root>')
```

*Example 3*

The result value of running the following Blend script is the name **TRAVEL**:

```language-xml
<t xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign">

  <pc:RunRulesService waittime="10000"
     user="{user}" pwd="{password}" rdbmstype="oracle" connection="XE" application="TRAVEL"
     owner="{owner}"
     assign:thisconn="/*/@id" assign:rsstate="RulesService/@state" assign:logurl="RulesService/@logurl" assign:hint="RulesService/@error-hint" />

  <pc:value-of>
      <pc:GetRulesEngineProperty connection="{$thisconn}" name="Application"/>
  </pc:value-of>

</t>
```

## Disabling output escaping

Because pc:value-of is based on XSLT 1.0's \<xsl:value-of> instruction, you can pass the attribute setting:

```
disable-output-escaping="yes"
```

with the same effect. This setting disables the normal output escaping of markup characters when the output is serialised text. Consider carefully if this is what you want. As the XSLT 1.0 specification puts it:

> [!NOTE]
> "Since disabling output escaping ... can result in XML that is not well-formed, it should be used only if there is not alternative."

If the content of the file "mydata.xml" is:

```
<mydata>contents</mydata>
```

then the following:

```language-xml
<pc:ReadFile filepath="mydata.xml" assign:fileContent="."/>
<pc:value-of select="$fileContent" />
```

will yield:

```
<mydata>contents</mydata>
```

but the following:

```language-xml
<pc:ReadFile filepath="mydata.xml" assign:fileContent="."/>
<pc:value-of select="$fileContent" disable-output-escaping="yes" />
```

will yield:

```
<mydata>contents</mydata>
```

 