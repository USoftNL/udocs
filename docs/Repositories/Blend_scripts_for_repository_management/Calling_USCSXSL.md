---
id: Calling_USCSXSL
---

# Calling USCSXSL

## Calling USCSXSL from a USoft context to apply a named transformation

You can call the USCSXSL internal component to apply a named XSLT transformation from a USoft context. USoft contexts for USCSXSL include the SQL Command tool, SQL Tasks, Decision SQLs, Constraint SQLs, and SQL statements defined in the Service Framework.
Over and above XSLT 1.0 processing, this technique allows you to access extension functions offered by USCSXSL:

- XSLT 2.0-like functions and other convenience functions,
- The ability to store values in variables during XSLT processing,
- The possibility to add interactive behaviour (dialogs).

Choose this option if you want to apply a specific, non-default transformation. If you want to process a USoft Blend script in the default way, that is, apply to it the default Batch.1.0.xsl transformation, call USCSXSL as a Blend script processor instead.

*Syntax 1*

```sql
select uscsxsl.apply( *xml*, *xsl*  [ , *variable-name*, *variable-value* ... ] )

*xml*  :=  { *xml-filepath* | *xml-document* }
*xsl*  :=  ( *xsl-filepath* | *xsl-document* }
```

*Syntax 2*

```sql
select uscsxsl.apply2file( *xml, xsl, xml-resultfilepath  [ , variable-name, variable-value ... ] )xml  :=  { xml-filepath | xml-document }xsl  :=  ( xsl-filepath | xsl-document }*
```

* *All arguments are single-quoted string values. The only difference between Syntax 1 and Syntax 2 is that Syntax 2 writes the result to the file designated by the xml-resultfilepath argument, while Syntax 1 returns the result as standard output.
The required xml must be a valid XML document. This document may contain calls to USCSXSL extension functions, in which case it is called a USoft Blend script. You can submit this XML document either as a file on the file system that you reference by xml-filepath or inline as a literal xml-document string.
The required xsl must be a valid XSLT 1.0 transformation. You can submit this transformation either as a file on the file system that you reference by xsl-filepath or inline as a literal xsl-document string.
Optionally, you can pass any number of Blend input parameters as variable-name=variable-value pairs.

*Example*

```sql
select uscsxsl.apply( '<MyClipboardNow/>', 'c:\temp\PrintClipboard.xsl' )
```

If the file content of the "c:\\temp\\PrintClipboard.xsl" file is:

```xml
<?xml version="1.0" encoding="windows-1252"?>
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:clipboard="USoft:ClipBoard"
>
<xsl:output method="xml" encoding="UTF-8" omit-xml-declaration="yes"/>

<xsl:template match="*|@*|comment()|processing-instruction()|text()">
  <xsl:copy>
    <xsl:apply-templates select="*|@*|text()|comment()|processing-instruction()"/>
  </xsl:copy>
</xsl:template>

<xsl:template match="MyClipboardNow">
  <xsl:copy>
    <xsl:value-of select="clipboard:GetText()"/>
  </xsl:copy>
</xsl:template>

</xsl:stylesheet>
```

and your clipboard currently contains "Hello World", then the result of the transformation is:

```xml
<MyClipboardNow>Hello World</MyClipboardNow>
```

## Calling USCSXSL from a USoft context as a Blend script processor

You can call the USCSXSL internal component as a Blend script processor from a USoft context. USoft contexts for USCSXSL include the SQL Command tool, SQL Tasks, Decision SQLs, Constraint SQLs, and SQL statements defined in the Service Framework.
If you execute a USoft Blend script that executes one or more Rules Engine operations, the internal Rules Engine already available to the USoft context is automatically used. The script itself does not need to make an instance of a Rules Service available.
Calling USCSXSL as a Blend script processor causes an identity transformation to be applied to your input XML.
You can also call USCSXSL as a Blend script processor from the command line.

*Syntax*

```sql
select uscsxsl.blend( *xml*  [ , *variable-name*, *variable-value* ... ] )

*xml*  ::=  { *xml-filepath* | *xml-document* }
```

All arguments are single-quoted string values.
The required xml must be a valid XML document. This document may contain calls to USCSXSL extension functions, in which case it is called a USoft Blend script. You can submit xml either as a file on the file system that you reference by xml-filepath or inline as a literal xml-document string.
Optionally, you can pass any number of Blend input parameters as variable-name=variable-value pairs.

*Example*

```sql
select uscsxsl.blend( 
  '<Example xmlns:pc="Processing.Command">
     <pc:value-of select="clipboard:GetText()"/>
   </Example>' )
```

If your clipboard currently contains "Hello World", the result is:

```xml
<Example>Hello World</Example>
```

While this example illustrates how you execute a Blend script from a USoft context, it is untypical in that the script does nothing except returning a result value. More typically, you run a Blend script because in the course of processing the XML, it performs interesting additional actions, such as starting Rules Services, processing data, generating USoft application flatfiles, or managing files on a file system.

### uscsxsl.blend() and uscsxsl.apply() compared

The equivalent of:

```sql
select uscsxsl.blend( *xml* )
```

is:

```sql
select uscsxsl.apply( *xml*, '*usoft-bindir*\xsl\Util\Batch.1.0.xsl' )
```

## Calling USCSXSL from the command line as a Blend script processor

You can call the USCSXSL internal component as a Blend script processor from a USoft context. You do this by running the ublendit.exe executable found in the \\BIN subdirectory of the USoft installation directory.
If you execute a USoft Blend script that executes one or more Rules Engine operations, the script itself must make an instance of a Rules Service available. This is because, when running from the command line, you do not have a USoft context that already has access to a Rules Service.
Calling USCSXSL as a Blend script processor causes an identity transformation to be applied to your input XML.
You can also call USCSXSL as a Blend script processor from a USoft context.

*Syntax 1*

```
> *usoft-bindir*\ublendit.exe *xml-filepath* [ *variable-name=variable-value* ... ]
```

*Syntax 2*

```
> *usoft-bindir*\ublendit.exe *xml-filepath xsl-filepath* [ *variable-name=variable-value* ... ]
```


:::warning

*Usoft-bindir* is the \\BIN or \\BIN64 subfolder of your USoft installation directory. You can find the value of usoft-bindir by executing in SQL Command:


:::

*Xml-filepath* is the filepath leading to the XML input file that you want USCSXSL to process. This file must be a valid XML document. It may contain calls to USCSXSL extension functions, in which case it is called a “USoft Blend script”.
Syntax 1 applies the following XSLT transformation to the Blend script:

```
*usoft-install-dir*\xsl\Util\Batch.1.0.xsl
```

Use Syntax 2 only if, for some reason, you want to specify (as *xsl-filepath*) a different XSL transformation. The following Syntax 1:

```
> *usoft-bindir*\ublendit.exe *xml-filepath*
```

is equivalent to the following Syntax 2:

```
> *usoft-bindir*\ublendit.exe *xml-filepath usoft-install-dir*\xsl\Util\Batch.1.0.xsl
```

Optionally, you can pass any number of Blend input parameters as variable-name=variable-value pairs.

*Example*

```
C:\USoft91\bin64\ublendit.exe MyBlendScript.xml
```

If your clipboard currently contains "Hello World", and **MyBlendScript.xml** has the following contents:

```xml
<Example xmlns:pc="Processing.Command">
  <pc:value-of select="clipboard:GetText()"/>
</Example>
```

then the result value is:

```xml
<Example>Hello World</Example>
```

While this example illustrates how you call a Blend script from the command line, it is untypical in that the script does nothing except returning a result value. More typically, you run a Blend script because in the course of processing the XML, it performs interesting additional actions, such as starting Rules Services, processing data, generating USoft application flatfiles, or managing files on a file system.

## Blend input parameters

When calling USCSXSL for processing Blend scripts, you can pass any number of optional name-value pairs as Blend input parameters.
When calling from the command line, *variable-name* and *variable-value* are connected by an equal sign ( = ). If you have multiple variable-name=variable-value pairs, they are separated by spaces. You cannot have spaces as part of *variable-name* or *variable-value*:

```
*variable-name=variable-value ...* 
```

When calling from a USoft context, *variable-name* and *variable-value* are regular string parameters. They are strings surrounded by single quotes and separated by commas. If you have multiple *variable-name, variable-value* pairs, they are separated by commas. You can have spaces as part of *variable-value* but not as part of *variable-name*:

```
, *variable-name*, *variable-value* ... 
```

Inside the Blend script, refer to *variable-value* by the placeholder:

```
$*variable-name*
```


:::tip

You can provide a default value for a parameter in case it is not passed when your script is called. Use one of these directives:
*Example*
If you call by the following command line:
the following "deletetwofiles.xml" Blend script:
then this script will delete from the current directory the following files:


:::

### Contexts for Blend input parameters

The following are legal contexts for Blend input parameters:
From the command line:

```
> *usoft-bindir*\ublendit.exe *xml-filepath* [ *variable-name=variable-value* ... ]

> *usoft-bindir*\ublendit.exe *xml-filepath xsl-filepath* [ *variable-name=variable-value* ... ]
```

From a USoft context:

```sql
select uscsxsl.blend( *xml*
    [ , *variable-name, variable-value* ... ] 
)

select uscsxsl.apply( *xml*, *xsl*
    [ , variable-name, variable-value ... ] 
)

select uscsxsl.apply2file( *xml*, *xsl*, *xml-resultfilepath*
    [ , *variable-name, variable-value* ... ] 
)
```

 