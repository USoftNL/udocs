---
id: USCSXSLBlend
---

# USCSXSL.Blend




:::note

This article is about the **Blend** method of the [USCSXSL internal component](/docs/Extensions/USCSXSL_internal_component).

:::

## **USCSXSL.Blend**

Applies the default Batch.1.0.xsl transformation to an XML input document and returns the result.
The input document may contain calls to USCSXSL extension functions (this is an added possibility compared to calling **USXSL.Apply2File**).

Use this method if you want to process a USoft Blend script from within USoft. Alternatively, you can apply the transformation directly from the command line by calling the ublendit.exe executable: this is the typical way of processing a USoft Blend script stored in an external XML file.

*Syntax*

```sql
select uscsxsl.blend( *xml*  [ , *variable-name*, *variable-value* ... ] )

*xml*  ::=  { *xml-filepath* | *xml-document* }
```

All arguments are single-quoted string values.

The required *xml* must be a valid XML document. You can submit *xml* either as a file on the file system that you reference by *xml-filepath* or inline as a literal *xml-document* string.

Optionally, you can pass any number of Blend input parameters as *variable-name=variable-value* pairs.

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
select uscsxsl.apply( *xml*, 'usoft-bindir\xsl\Util\Batch.1.0.xsl' )
```