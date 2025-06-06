# sql:DataTableSetExport



> [!NOTE]
> This article is about the **sql:DataTableSetExport**[ Blend function](/docs/Repositories/Blend%20functions).

## **sql:DataTableSetExport**

Returns the contents of a set of zero or more tables in a USoft XML format that is re-importable by passing it to the XML.IMPORT method of the USoft XML internal component. This format may also be passed as an input format to \<pc:Compare> for data comparisons.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:sql="USoft:Sql"
```

*Function call*

```
sql:DataTableSetExport(
*connection*
,           *tableregexp*
,           *outputfile*
,           *conditions*
)
```

Connection and *tableregexp* are required. *Outputfile* and *conditions* are optional.

*Connection* defines an application location by a combination of a database connection and a USoft application name, as used to define and run a Rules Service instance against this application location, and as exemplified below.

*Tableregexp* is a regular expression acting on table names. It can be used to restrict the output to a subset of tables matching the regular expression. If tableregexp is the empty string, the keyschema of all the tables is reported.

If *outputfile* is specified, the return value is written to the specified folder and file on the file system.

*Example*

```language-xml
<root 
  xmlns:pc="Processing.Command" 
  xmlns:assign="Processing.Command.Assign">

   <pc:RunRulesService waittime="10000"
        user="MYNAME" pwd="MYPWD" rdbmstype="oracle" connection="XE" application="MYAPP"
        owner="MYNAME"
        assign:instance="/*/@id" />   

  <pc:evaluate select="sql:DataTableSetExport($instance, '.*', 'c:\temp\myoutputfile.xml', '')" />

</root>
```

## Return format

The returned XML format looks like this:

```language-xml
<?usoft-xml version="1.0" action="multi-tables-import" use-io-formats="no" verify-original-values="no" return-corrected-records ="yes"?>
<MultiExport>
  <object-name-plural-no-space documentName="object-name-plural">
    <table-name column-name="column-value"> ... />

   ...
  </object-name-plural-no-space>

 ...
</MultiExport>
```

For example:

```language-xml
<?usoft-xml version="1.0" action="multi-tables-import" use-io-formats="no" verify-original-values="no" return-corrected-records ="yes"?>
<MultiExport>
  <Hired_Employees documentName="Hired Employees">
    <H_EMPLOYEE NAME="JONES" FIRST_NAME="Bill" ... />
    <H_EMPLOYEE NAME="SMITH" FIRST_NAME="Ann" ... />
  </Hired_Employees>
  <Departments documentName="Departments">
    <DEPARTMENT DEPTNAME="Finance" >
    <DEPARTMENT DEPTNAME="Sales" >
  ...
</MultiExport>
```

## Behaviour with subtypes

To minimise potential problems with the re-importability of the result of sql:DataTableSetExport, when you export a supertype table, only those supertype records for which all subtype indicators are set to N are exported.

At first sight, this behaviour seems to cause supertype data to be skipped. On the contrary, supertype data that have Y for at least 1 subtype are still included in the export (and thus also in a potential re-import) if you include the corresponding subtype table, since they are an integral part of the subtype data. Another way of saying this is that, if you export only a supertype table, supertype data of subtypes is not considered in-scope.

Complex subtype constellations may not be automatically re-importable.