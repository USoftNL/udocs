# pc:Compare



> [!NOTE]
> This article is about the **pc:Compare**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:Compare**

Compares 2 XML data sets presented as files of the USoft data format.

Returns an XML document that describes the differences between the data sets with the help of \<Insert>, \<Update> and \<Delete> instruction tags. This return XML is not just a human-readable description. It may be executed in a USoft context to upgrade the source data set to the target data set automatically. This is done by calling the XML.IMPORT internal method or one of its variants, as described in detail in the USoft Definer Help.

*Syntax 1*

```
<pc:Compare
     alias="*name-literal*"
     leftfile="*path*"
     rightfile="*path*"
     outputfile="*path*"
 />
```

The required **alias** identifies a connection to a Rules Service that you want to use to retrieve primary key information. The operation needs this information to understand on what basis data records must be compared, as explained in the "Key schema" section below. For more information on aliases, go to the pc:RunRulesService help topic. If you are already in a USoft context where this information is available, pass the empty string: alias="". There is an alternative syntax for reading primary key information from a file instead of from a connection. See the "Key schema file" section below.

The required **leftfile** and **rightfile** identify the files to be compared. The required **outputfile** identifies the name and location of the file where the outcome of the comparison must be written to.

> [!CAUTION]
> Do not confuse **leftfile** and **rightfile**. The first is the target data set and the second is the source data set. The return document may be used to upgrade the source data set to the target data set but not the other way around.

*Example*

```language-xml
<root xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign">
  <pc:RunRulesService waittime="10000"
        user="MYNAME" pwd="MYPWD" rdbmstype="oracle" connection="XE" application="USAUTH"
        owner="MYNAME"
        alias="x1" />   
  <pc:Compare
        alias="x1"      
        leftfile="C:\temp\USAUTH.prev.xml"
        rightfile="C:\temp\USAUTH.xml"
        outputfile="C:\temp\USAUTH.diff.xml" />
</root>
```

## Input data format

The input files must have one of the USoft standard data formats described in detail in USoft Definer Help and output by the EXPORT method of USoft's "XML" internal component and its variants, including the pc:XmlExport Blend directive.

## Key schema

In Syntax 1, the comparison is made on the basis of primary key information available at the required connection. This information is referred to as the "key schema". This information is essential when comparing different versions of a set of application data, since each database record is identified only by the primary key value(s) it holds.

Key schemas are a USoft proprietary concept. A key schema is an internal or external XML document that describes, for each table definition in scope, what column or what set of columns constitutes that table's primary key. Each time you call \<pc:Compare> with Syntax 1, a key schema file of a name similar to:

```
tmpAF3D.tmp_keyschema.xsl
```

is output to the USoft Temporary Folder. You can also produce a key schema file yourself by calling the pc:GenerateKeySchema directive. You can then make a comparison on the basis of an external key schema file that you identify explicitly. Use Syntax 2 instead of Syntax 1.

*Syntax 2*

```
<pc:Compare
     schemafile="*path*"
     leftfile="*path*"
     rightfile="*path*"
     outputfile="*path*"
 />
```

In this syntax, the required **schemafile** attribute takes the place of the required alias attribute in Syntax 1. For the other attributes, see Syntax 1. **Schemafile** must point to a valid key schema file for the application.