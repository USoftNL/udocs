---
id: Guide_to_Blend_expressions_and_data_types
---

# Guide to Blend expressions and data types

USoft Blend combines operating system file paths, XML fragments, XPath expressions, SQL statements, JSON fragments, and many more to provide a complete and highly expressive tool for installing, delivering and maintaining instances of USoft applications.
This help section helps you understand the most frequently encountered expression types and their data types. It concentrates on their use in a USoft Blend context. Look elsewhere for tutorials on the languages themselves, for example, on XPath.

## Literal expressions

A *literal expression* is an expression made up of Unicode characters and not specific to any technology such as: Windows file system paths, SQL, XML, or XPath/XSLT.

|**Type**|**Explanation**|**Examples**|
|--------|--------|--------|
|*csv-list*|A comma-separated list of *string-literal* values|<pre><code>oracle,sqlserver,jdbc<br/>0,1</code></pre><p> </p>|
|*date-literal*|A string that is susceptible to being interpreted as an indication of a date, or of a date and a time.|<pre><code>12-05-2019<br/>12-MAY-2019 13:00</code></pre><p> </p>|
|*integer-literal*|An integer number|<pre><code>0<br/>1000</code></pre><p> </p>|
|*string-literal*|<p>A simple alphanumeric string that is allowable as an identifier of an object. Subsets *text-literal*.</p>|<pre><code>myalias<br/>MyAlias<br/>MyAlias_4</code></pre><p> </p>|
|*text-literal*|A string of Unicode characters including interpunction characters and whitespace|`Default-8090@C:\USoft\servers\Default\`<p> </p>|



### Date literals

*Date literal* is a data type for string values susceptible of being interpreted as an indication of a date, or of a date and a time, for example:

```
12-05-2019
12-MAY-2019 13:00
```

XPath does not have a special data type for dates or clock times. USoft Blend is able to interpret (XPath and non-XPath) string expressions as indications of date or time by applying the list of format masks that is returned by:

```language-xml
<pc:value-of select="dates:ShowInputFormats" />
```

For example, the following string:

```
12-05-2019
```

is interpreted as an expression of May 12, 2019 if the following date format mask is featured in this list:

```
DD-MM-YYYY
```

### String literals

*String literal* is a USoft Blend data type for simple single-word, name-like strings that serve to identify objects.
In the XML model, string literals occur in a number of different contexts, notably as a text node surrounded by the start tag and end tag of an XML element, and as a simple attribute value. Because of the USoft XML format that USoft Blend often processes, in which data corresponding to database records is placed in attribute values, asimple attribute values tend to be the most relevant context for string literals processed by USoft Blend.
A string literal is a sequence made up of ASCII alphabetic characters (A-Z, a-z), hyphens ( - ), underscores ( _ ) and full stops ( . ) but not whitespace and not colons. Digits (0-9) are also allowed but not as the first character.
Examples of valid string literals include:

```
myalias
MyAlias
MyAlias_4
```

Examples of INVALID string literals include:

```
^variable
(variable)
my variable
4_Alias
pc:if
```

## Path expressions

In contexts where folders or files are expected, the USoft Blend framework processes path expressions. They are the expressions that Microsoft Windows supports for designating (sets of) folders and files on the file system in command line syntax, ie., in the context of a Command Line Prompt (cmd.exe).

|**Data type**|**Explanation**|**Examples**|
|--------|--------|--------|
|*path*  |An expression that points to a file or folder on the file system, or to a set of files or folders|<pre><code>c:\temp\MyFolder<br/><br/>temp\MyFolder\<br/><br/>\\fs\temp\MyExample.xml<br/><br/>..\MyExample.xml<br/><br/>temp\*.xml<br/><br/>c:/temp/MyFolder</code></pre><p> </p>|



Many path expressions are a sequence of steps separated by backslashes that traverse the file system to point at the target file(s) or folder(s):

```
c:\MyFolder\MySubFolder\MyFile.txt
```

In the Windows OS, the backslash ( \\ ) is the most common separator symbol between steps. It is the separator symbol required in DOS command lines. The USoft Blend API accepts the forward slash ( / ) as an alternative. But because of the mix of paths and XPath expressions, best practice in USoft Blend scripting is to reserve the backward slash for path expressions and the forward slash for XPath expressions.
Steps are not allowed to contain spaces, but they may contain underscores ( _ ) and hyphens ( ‑ ).
If a path ends in a backslash, the path matches only a folder, not any file in that folder:

```
c:\temp\
```

If the rightmost step is intended as a file name, one or more asterisks ( * ) in this file name act as wildcards representing any number of characters. The following path pattern points to all the files with extension ".xml" in the "c:\\temp" folder:

```
c:\temp\*.xml
```

### Absolute paths and relative paths

Each path is either an absolute path or a relative path:

|**Data type**|**Explanation**|**Examples**|
|--------|--------|--------|
|*absolute-path*|A path that points at a file or folder, or set of files or folders, independently of the working context.|<pre><code>c:\temp\MyExample.xml<br/><br/>d:\temp\MySubDirectory<br/><br/>\\fs\temp\*.xml<br/><br/>\\fs.mycompany.com\temp$\MyExample.xml</code></pre><p> </p>|
|*relative-path*|A path that points at a file or folder, or set of files or folders by taking the working folder as a starting point.|<pre><code>MyExample.xml<br/><br/>MySubDirectory\*.xml<br/><br/>..\MyExample.xml<br/><br/>.\MyExample.xml</code></pre><p> </p>|



An absolute path is a path that starts with a letter indicating a local drive:

```
c:\temp\MyExample.xml
d:\temp\MyExample.xml
```

or with a double backslash indicating a shared drive:

```
\\fs\temp$\MyExample.xml
\\fs.mycompany.com\temp$\MyExample.xml

```

A relative path is any other path. A relative path is interpreted relatively to the current directory or working directory, where the leftmost element is a child folder or file relative to the current directory:

```
temp\MyExample.xml
```

At the beginning of a relative path, a double full stop ( .. ) represents the parent directory of the current directory or working directory. Using this syntax, it is possible to point to ancestors at higher levels:

```
..\temp\MyExample.xml
..\..\temp\MyExample.xml
```

At the beginning of a relative path, a single full stop ( . ) represents the current directory or working directory itself. In USoft Blend this is useful in calls like the following, which returns the full path to the current directory:

```
path:GetFullPath('.')
```

### File paths and folder paths

Each path is either a file path or a folder path:

|**Data type**|**Explanation**|**Examples**|
|--------|--------|--------|
|*file-path*|A *path* in which the rightmost step is interpreted as the name of a file, or as an expression pointing to a set of files.|`c:\temp\MyExample.xml`<p> </p>|
|*folder-path*|A *path* in which the rightmost step is interpreted as the name of a folder.|<pre><code>c:\temp\MySubDirectory<br/><br/>c:\temp\MySubDirectory\</code></pre><p> </p>|



In a *file-path*, the rightmost step is interpreted as the name of a file, or as file pattern pointing at a set of files. In a folder path, the rightmost step is interpreted as the name of a folder.
You can enforce that the rightmost step must be interpreted as a folder rather than a file by adding a trailing backslash:

```
c:\temp\MySubDirectory\
```

For a path expression not ending in a backslash, there is no formal way of knowing whether the rightmost step is intended to point at a directory or at a file. The following example is likely to point at all the files in the "c:\\temp" folder that have the ".xml" file extension, but theoretically it is possible that it points at a set of directory names ending in ".xml". File names are allowed to not contain full stops. Folder names are allowed to contain full stops.

```
c:\temp\*.xml
```

This example uses as asterisk as a wildcard, turning the rightmost step into a pattern. See next two sections.

### File name patterns

A *file name pattern* is a file name that contains an asterisk ( * ) in one or more places. The asterisk acts as a wildcard for file names. The following file name pattern represents all files with extension ".xml" in the given context:

```
*.xml
```

A file name pattern may occur as the rightmost step of a file path. The following file path represents all files with extension ".xml" in directory "c:\\temp":

```
c:\temp\*.xml
```

A file name pattern may also occur as an attribute value in selected contexts, for example, as the value of the filter attribute of pc:Directory:

```language-xml
<pc:Directory filepath="c:\temp" filter="*.xml">
```

### Directory name patterns

A *directory name pattern* is a step in a path expression that contains an asterisk ( * ) in one or more places and does not, or not exclusively, point at files.
The asterisk acts as a wildcard for both directory names and file names found in the current directory. Each step acts as a filter for directories and files that further restricts the result:

|**Directory name pattern**|**Matches**|
|--------|--------|
|`*`<p> </p>|The entire content of the current directory, including subdirectories (to any level deep).|
|`*.xml`<p> </p>|All the files in the current directory that have the ".xml" extension.<br/>			All the subdirectories of which the name ends in .xml, including all their file contents and all subdirectories and their contents (to any level deep).|
|`asset*`<p> </p>|All the subdirectories and files of which the name starts with asset, including (in the case of the subdirectories) all file contents and all subdirectories and their contents (to any level deep).|
|`asset*\resource*`<p> </p>|All the subdirectories A of which the name starts with asset and that have a subdirectory B or file B that starts with resource. For each subdirectory A, all the subdirectories B with all their content (to any level deep), and also, all the files B.|



## XML expressions

In contexts where XML is expected, the USoft Blend framework processes literal XML and expressions evaluating to literal XML. This XML must be valid according to the XML 1.0 specification by W3C.
USoft uses XML to describe data that must be exported, imported, compared, delivered, configured outside a USoft repository. The first examples in the table below are in this format.
USoft Blend uses XML to facilitate composite input and output of directives. This is referred to as *embedded XML**:*

|**Data type**|**Explanation**|**Examples**|
|--------|--------|--------|
|*xml-fragment*|An XML structure consisting of one or more XML nodes.|<pre><code class="language-language-xml"><T_AUTH_USER USERNAME="admin"/><br/><T_AUTH_USER USERNAME="admin2"/><br/><br/><Users><br/>   <T_AUTH_USER USERNAME="admin"/><br/>   <T_AUTH_USER USERNAME="admin2"/><br/></Users></code></pre><p> </p>|
|*xml-fragment*|(Also:) An expression evaluating to such a structure.|<pre><code class="language-language-xml"><msg>Logging in: <br/>  <pc:value-of select="$logfile"/>...<br/>  <pc:newline/><br/></msg></code></pre><p> </p>|
|*xml-document*|<p>An XML fragment that is a valid XML document, ie., that has a single top-level node (*document node*).</p><p>An expression evaluating to such a structure.</p><p>Subsets *xml-fragment*.</p>|<pre><code class="language-language-xml"><Users><br/>   <T_AUTH_USER USERNAME="admin"/><br/>   <T_AUTH_USER USERNAME="admin2"/><br/></Users><br/><br/><msg><br/>   Logging in: <pc:value-of select="$logfile"/>...<br/>   <pc:newline/><br/></msg></code></pre><p> </p>|
|*xml-text*|<p>An XML fragment that is a valid XML text node.</p><p>An expression evaluating to a valid XML text node.</p><p>Subsets *xml-fragment*.</p>|<pre><code class="language-language-xml">admin2<br/><br/>Logging in: <pc:value-of select="$logfile"/>...<br/><pc:newline/></code></pre><p> </p>|
|*embedded-xml*|An XML fragment (usually, an XML document) that is allowed to be a child node of a USoft Blend directive, or is returned by a USoft Blend directive, or both.|<pre><code class="language-language-xml"><pc:Dialog><br/>   <Form w="250"><br/>      <Title>USoft Blend dialog</Title><br/>      <Label dx="5" dy="10" w="40" ><br/>        This is a USoft Blend dialog.<br/>      </Label>      <br/>      <Button dy="20" newline="true"><br/>        <Result>OK</Result>OK<br/>      </Button><br/>   </Form><br/></pc:Dialog></code></pre><p> </p>|



### Embedded XML

Some USoft Blend directives are designed to contain and return a subsystem of XML elements referred to as embedded XML.
Embedded XML is a specialised use of XML. It is specific to the USoft Blend framework. In each case, embedded XML has the structure of an XML document: it contains a single top-level node (the document node).
*Example*
This example shows XML embedded in a pc:Dialog element.

```language-xml
<pc:Dialog>
   <Form w="250">
      <Title>USoft Blend dialog</Title>
      <Label dx="5" dy="10" w="40" >This is a USoft Blend dialog.</Label>      
      <Button dy="20" newline="true"><Result>OK</Result>OK</Button>
   </Form>
</pc:Dialog>
```

**Embedded XML as input**

In some cases you can pass embedded XML as part of your script. The example of this help topic shows that in pc:Dialog, you can pass embedded XML to specify the visual aspects and the behaviour of the dialog.

**Embedded XML as output**

Some directives return embedded XML as an output value. For example, pc:Directory returns embedded XML that describes the files and folders of a directory:

```language-xml
<Directory dirpath="c:\temp\" dirname="temp" 
        lastwrite="2019/0109100614">
  <Directory dirpath="c:\temp\mydir2" dirname="mydir2" 
        lastwrite="2019/0109100620">
    <File filepath="c:\temp\mydir2\myfile3.txt" filename="myfile3.xml" 
        lastwrite="2019/0109093257" />
    <File filepath="c:\temp\mydir2\myfile4.txt" filename="myfile4.txt" 
        lastwrite="2019/0109100021" />
  </Directory>
    <File filepath="c:\temp\myfile1.xml" filename="myfile1.xml" 
        lastwrite="2019/0109093257" />
</Directory>
```

**Embedded XML as output, changing pc:return**

To *change* the embedded XML that you get as output, use the special pc:return attribute on the directive. Values of **pc:return** take the root node of the embedded XML as the root node (for absolute location path values) and as the context node (for relative location path values), so that the two following location paths return the same result:

```language-xml
<pc:Directory filepath="c:\temp" pc:return="/Directory/File" />
```

```language-xml
<pc:Directory filepath="c:\temp" pc:return="Directory/File" />
```

**Embedded XML as output, referring to: assign:variable**

To *refer*, later in your Blend script, to information in the embedded XML that you get as output, use an **assign:variable** attribute on the directive.
The following example selects the /Directory/File nodes from the embedded XML returned by pc:Directory. You can refer to these nodes later in your script by writing **$myfiles**. Values of **assign:variable** take the root node of the embedded XML as the root node (for absolute location path values) and as the context node (for relative location path values), so that the following 2 location paths return the same result:

```language-xml
<pc:Directory filepath="c:\temp"
    assign:myfiles="/Directory/File" />
```

```language-xml
<pc:Directory filepath="c:\temp"
    assign:myfiles="Directory/File" />
```

**Embedded XML as output, automatically suppressed**

USoft Blend automatically suppresses the output of embedded XML if you use a **pc:return** or **assign:variable** attribute on the directive. This behaviour is based on the idea that if you have a reason to use **pc:return** or **assign:variable**, then you are unlikely to be interested in seeing the standard return XML as well.
As a result, if you simply want to suppress the return XML altogether, you can write one

**Embedded XML as a variable set: pc:defs**

You can read, configure, and edit embedded XML programmatically. One way is to place embedded XML in a **<pc:defs>** section of your script. You can then mobilise it when you need it, for example, to produce a certain type of dialog with **<pc:Dialog>**. If you work in this way, embedded XML has the role of a variable set.

## SQL expressions

In contexts where SQL is expected, the USoft Blend framework processes full SQL statements. Their data type subsets the *string* data type.

### USoft-supported SQL syntax

This type of SQL runs in a USoft context and is portable across database platforms. See the [SQL syntax](/docs/Modeller_and_Rules_Engine/SQL_syntax) section for details of USoft-supported SQL syntax.

|**Data type**|**Explanation**|**Examples**|
|--------|--------|--------|
|*sql-statement*|A SQL statement with a syntax supported by USoft that starts with one of the keywords SELECT, INVOKE, INSERT, UPDATE, DELETE.|<pre><code class="language-sql">SELECT DESTINATION, TOUR_TYPE FROM TOUR<br/><br/>UPDATE TOUR SET MAX_AGE = 80 <br/>WHERE DESTINATION = 'AUSTRALIA'<br/><br/>INVOKE batchrunner.DELETE_ACCOUNT WITH<br/>SELECT '221' "ACCOUNT_NUMBER"</code></pre><p> </p>|
|*select-statement*|<p>A SQL statement with a syntax supported by USoft that starts with the SELECT keyword.</p><p>Subsets *sql-statement*.</p>|`SELECT DESTINATION, TOUR_TYPE FROM TOUR`<p> </p>|
|*dml-statement*|<p>A SQL statement with a syntax supported by USoft that starts with one of the keywords INSERT, UPDATE, DELETE.</p><p>Subsets *sql-statement*.</p>|<pre><code class="language-sql">UPDATE TOUR SET MAX_AGE = 80 <br/>WHERE DESTINATION = 'AUSTRALIA'</code></pre><p> </p>|



### RDBMS-supported SQL syntax

This type of SQL is dependent on the database platform. See the database vendor's documentation for details of SQL syntax supported by the RDBMS.

|**Data type**|**Explanation**|**Examples**|
|--------|--------|--------|
|*rdbms-ddl-statement*|A SQL statement with a syntax supported by the RDBMS that starts with one of the keywords CREATE, ALTER, DROP.|`ALTER TABLE TOUR ...`<p> </p>|
|*rdbms-ddl-dml-statement*|Either an *rdbms‑ddl‑statement* or an *rdbms‑dml‑statement*.|<pre><code class="language-sql">ALTER TABLE TOUR ...<br/>UPDATE TOUR ...</code></pre><p> </p>|
|*rdbms-dml-statement*|A SQL statement with a syntax supported by the RDBMS that starts with one of the keywords INSERT, UPDATE, DELETE.|`UPDATE TOUR ...`<p> </p>|
|*rdbms-query*|A SQL statement with a syntax supported by the RDBMS that starts with the SELECT keyword.|`SELECT ... FROM TOUR ...`<p> </p>|



## XPath expressions

### Overview

In XPath contexts, the USoft Blend framework processes *XPath expressions*.
XPath is embedded in XSLT 1.0 and in USoft Blend. It is a general expression language with node set expressions as its specialising characteristic. Node set expressions are evaluated relative to a location in an XML document being traversed. They allow you to point from that context to nodes in the XML document in a set-oriented fashion.
All the XPath 1.0 types of expression and their data types apply:

|**Type of XPath expression**|**Returns type**|**Explanation**|**Examples**|
|--------|--------|--------|--------|
|<p>*xpath-expression*</p><p>(for short: *xpath*)</p>|(Any)   |<p>Any XPath expression.</p><p>All the items in this table subset *xpath-expression*.</p>|        |
|*node-set-expression*|Node set|An XPath expression representing a node set.|<pre><code>node()<br/>pc:*<br/>/parent/child[1]</code></pre><p> </p>|
|*absolute-location-path*|Node set|A node set expression that starts with the / character|`/parent/child[1]`<p> </p>|
|relative-location-path|Node set|A node set expression that does NOT start with the / character|<pre><code>node()<br/>pc:*</code></pre><p> </p>|
|*boolean*|Boolean |A value expressing the concept of either "true" or "false".|<pre><code>$is-valid<br/>true()</code></pre><p> </p>|
|*string*|String  |A sequence of Unicode characters.|<pre><code>'ABC110'<br/>"My variable value"</code></pre><p> </p>|
|*number*|Number  |A floating-point number.|<pre><code>98<br/>24.7</code></pre><p> </p>|
|*variable-reference*|(Any)   |A placeholder representing a variable.|`$myvar`<p> </p>|



### Node set expressions

*Node set* is the most important of the (4) primitive data types that an XPath expression can evaluate to. XPath's mission in life is to represent paths leading to node sets in XML documents. These are different from paths leading to files on a file system.

**What is a node set expression?**

A node set expression is a location path that identifies a node set in an XML document. Node set expressions are part of the XSLT 1.0 specification. A node set expression is made up of 1 or more steps that are node tests:

```
node()
Order/text()
Customer
/Customers/Customer/Orders
```

This may involve explicitly stated axes:

```
parent::Customer
```

filters:

```
Order[@orderid >= 1000]
```

unions:

```
order|contract
```

wildcards:

```
/Customers/*/Orders/@*
```

and special abbreviated notations:

```
.
..
/Customers//Orders
```

**Absolute location paths and relative location paths**

- An absolute location path is a node set expression that DOES start with the / character. This character represents the root node, which is an imaginary node that is parent of the top-level document element of your USoft Blend script.
- A relative location path is a node set expression that does NOT start with the / character. A relative location path is relative to the current node. In a Blend script, the current node is the directive currently being processed. If this is a directive with embedded XML, you can use the relative location path to point to nodes inside this embedded XML (Example 3).

**Example 1**

```language-xml
<pc:ReadXmlFile filepath="c:\temp\myxml.xml" assign:myvar="/*/Resources/RESOURCE[@type='SALES']" />
```

Here, the absolute location path **/*/Resources/RESOURCE[@type='SALES']** has the root node of the "c:\\temp\\myxml.xml" document as its root node.
This directive first reads the external file, which is an XML document, and then assigns to the myvar variable the node set returned by applying the absolute location path to the root node of the XML document. Later in the script you can use **$myvar** to refer to this node set.

**Example 2**

```language-xml
<example xmlns:pc="Processing.Command"/>
  <pc:defs>
     <File path="c:\temp\assets.xml" entryname="assets/assets.xml"/>
     <File path="c:\temp\resources.xml" entryname="mypath/resources.xml"/>
  </pc:defs>
  <pc:ZipFileCreate filepath="c:\temp\mynewzip.zip" select="/*/pc:defs/File" />
</example>
```

Here, the absolute location path **/*/pc:defs/File** has the root node of the script itself (the parent node of the <example> document node) as its root node. The **pc:ZipFileCreate** directive refers back to the **pc:defs** section to find its input information.

**Example 3**

```language-xml
<pc:ZipFileCreate filepath="c:\temp\mynewzip.zip" pc:return="*[contains(@path,'.xml')]">
     <File path="c:\temp\assets.xml" entryname="assets/assets.xml"/>
     <File path="c:\temp\resources.xml" entryname="mypath/resources.xml"/>
     <File path="c:\temp\resources.txt" entryname="mypath/resources.txt"/>
</pc:ZipFileCreate>
```

Here, the relative location path ***[contains(@path,'.xml')]** has as context node the root node of the return value of pc:ZipFileCreate, which is the same as the embedded node set, ie., the non-visible parent node of the three <File> elements.
This example creates a new ZIP file and returns a list of all those files zipped that have the .XML extension. The first two <File> elements referring to files with an ".xml" extension refer to the content that is zipped. The last <File> element, which refers to a file with extension '.txt', is ignored.

**Example 4**

```
<pc:JsonToXml assign:mydata="." >
    <pc:ReadFile filepath="c:\temp\myfile.json"/>
</pc:JsonToXml>
```

Here, the relative location path . (ie., the full stop character in the first line) has as its context node the root node of the embedded node set, ie., the non-visible parent node of the top-level document element of the JSON file found on the file system.
This example assigns to a variable called mydata the value of the **pc:JsonToXml** element, which is itself the result of converting JSON code found in a file to XML.
The JSON code is first read, then converted to XML, and then stored in the mydata variable, ready to be referred to by **$mydata**.

### Booleans

*Boolean* is one of the (4) primitive data types that an XPath expression can evaluate to. There is no XPath syntax for representing boolean values directly, but Boolean values are returned by the XPath functions of **true()** and **false()**.

**Flag-based string-to-boolean conversion**

USoft Blend applies *implicit data type conversion* rules between the 4 XPath data types (nodeset, string, number, boolean) in the same way as XPath 1.0 and XSLT 1.0. This subject is explored later in this article. In the case of booleans, USoft Blend offers an alternative string-to-boolean conversion mechanism referred to as "flag-based". "Flag-based" interprets the following strings (case-insensitively) as **true()**:

```
true
yes
```

and the following string (case-insensitively) as **false()**:

```
false
no
```

This contrast with XPath's implicit conversion rule that non-empty strings always evaluate to **true()**.
"Flag-based" string-to-boolean conversion is not the default: you must switch it on explicitly. For details, go to [pc:assign-boolean](/docs/Repositories/Blend_directives/pcassignboolean.md).
You can execute "flag-based" string-to-boolean conversion explicitly by calling the “booleanflags:ToBoolean” function.
You can extend the list of string that "flag-based" conversion interprets as **false()**. For details, please look up:

- booleanflags:Show
- pc:define-boolean-flags

### Strings

*String*, in the simplest sense of a string of Unicode characters, is one of the (4) primitive data types that an XPath expression can evaluate to. It is the only string data type that XPath has.

**Explicit string typing**

In contexts where an XPath expression is expected, you can surround an XPath expression by quotes to express that you mean a string and not a node set expression (ie., not a node test). The following yields the string 'xy', as opposed to referring to a child element called 'xy’:

```language-xml
<pc:value-of select="'xy'" />
```

Accordingly, you must quote literal string input parameters that you pass to XPath functions and Blend functions, since these function calls are just another type of XPath expression:

```language-xml
<pc:assign-nodeset mynodeset="{files:XmlFile('config.xml')}" />
```

**Regular XML attribute values**

Do not confuse XPath string expressions with regular XML attribute values that are *string literals*. The latter are XML names. In this example, the 'ADMIN' string is a regular XML attribute value, and therefore is not quoted:

```
<pc:assign-string user="ADMIN" />
```

In this example, the SQL statement is a regular XML attribute, and therefore is not quoted. As a consequence, the quotes inside the SQL do not need to be escaped:

```language-xml
<pc:XmlExport sql="SELECT destination, tour_type FROM tour WHERE destination LIKE 'AUS%'" />
```

In this example, the file path is a regular XML attribute, and therefore is not quoted:

```language-xml
<pc:WriteFile filepath="c:\temp\HelloWorld.txt">Hello world</pc:WriteFile>
```

### Numbers

Number, in the generic sense of a floating-point number such as:

```
24.7
```

is one of the (4) primitive data types that an XPath expression can evaluate to. It is the only numeric data type that XPath has.
USoft Blend treats numbers in the same way as XPath and XSLT. If an XPath expression is expected to be a number but cannot be converted to a number, this yields the special NaN (Not-a-Number) value.

### Function calls

In USoft Blend, in contexts where an XPath expression is legal, you can use parenthesised expressions that call one of the following:

- A USoft Blend function.
- An XPath function.

From a syntax point of view, a call to a USoft Blend function may be recognised by the presence of an explicit namespace prefix as, for example, "dates:" in:

```language-xml
<pc:value-of select="dates:ShowInputFormats" />
```

By contrast, a call to an XPath function may be recognised by the *absence* of an explicit namespace prefix as, for example, in:

```language-xml
<pc:value-of select="concat( 'A', 'B' )" />
```

**USoft Blend functions**

When USoft Blend directives are executed, they call underlying programmed functions that access the source code that implements USoft Blend.
You can see how this is done by inspecting the XSLT stylesheet :

```
*usoft-install-dir*\xsl\Util\Batch.1.0.xsl
```

Click [here](/docs/Repositories/Blend_functions) for a list of USoft Blend functions. Alternatively, you can get a full list of USoft Blend functions by using the "functions" Blend command line option:

```
> *usoft-bindir*\ublendit.exe functions
```

**XPath functions**

In a USoft Blend context, in an XPath expression content, all the 27 XPath 1.0 functions are implicitly available:

|**Node set functions**|**String functions**|**Boolean functions**|**Number functions**|
|--------|--------|--------|--------|
|count() |concat()|boolean()|ceiling()|
|id()    |contains()|false() |floor() |
|last()  |normalize-space()|lang()  |number()|
|local-name()|starts-with()|not()   |round() |
|name()  |string()|true()  |sum()   |
|namespace-uri()|string-length()|        |        |
|position()|substring()|        |        |
|        |substring-after()|        |        |
|        |substring-before()|        |        |
|        |translate()|        |        |



### Variable references

USoft Blend borrows from XPath its

```
$*variable*
```

syntax for referring to variables. Once declared, a USoft Blend variable is global: it may be referred to from any later position in the Blend script.

**Declaring Blend variables**

You have a number of different syntax options for introducing USoft Blend variables. It is also possible to load variables from an external file. Here is just one example of the declaration of a Blend variable:

```language-xml
<pc:assign-string
     mypath="{path:GetFullPath(directories:Get())}" />
```

For an explanation of the curly braces in this example, go to “Evaluated expressions vs. literals” later in this article.

**Referring to Blend variables**

Here is just one example of how you can refer to the value of a variable called **myvariable**:

```language-xml
<pc:WriteFile filepath="{$myvariable}">Hello world</pc:WriteFile>
```

For an explanation of the curly braces in this example, go to “Evaluated expressions vs. literals” later in this article.

### Implicit XPath data type conversion

When dealing with XPath expressions, USoft Blend applies the XPath 1.0 and XSLT 1.0 rules for implicit conversion between the 4 XPath data types (node set, string, number, boolean).
For convenience, this section summarises these rules.

**Node set is expected**

No other data types are implicitly converted to node sets. As a consequence, if a node set is expected, you must supply an XPath expression that evaluates to a node set. Otherwise, it's an error.

**String is expected**

Whenever a string is expected:

- A node set evaluates to the string-value of the first node in the node set, ie., the node in the node set that is first in document order.
- The number value NaN ("not-a-number") evaluates to the string 'NaN', and other number values convert to the string expression that expresses the number, with any leading zeros and (in decimal numbers) any trailing zeros stripped. Results include the string values:

```
'10'
'10.5'
'-10'
'0'
```

- A boolean **true()** value converts to the string '**true**' (the 4 lowercase characters), and a boolean **false()** value converts to the string '**false**' (the 5 lowercase characters).

**Number is expected**

A number is expected when :

- An XPath expression is passed as an argument to a function that returns a number, eg.,

```
round( expr )
```

- An XPath expression is passed as a argument in a calculation, eg.:

```
*expr + 5*
```

- An XPath expression is involved in a comparison, eg.,:

```
*expr = 10*
```

Whenever a number is expected:

- A node set is first converted to a string, ie., it is converted to the string-value of the node that is the first node in the node set in document order. Then, the resulting string is converted to a number.
- A string converts to a number following the IEEE 754 round-to-the-nearest rule. Any leading zeros and (in decimal numbers) any trailing zeros are first stripped.
- Boolean **true()** converts to **1** and boolean **false()** converts to **0**.

**Boolean is expected**

```language-xml
<pc:assign-string mysubdir="temp2">
<pc:value-of select="path:Combine('c:\temp',$mysubdir)"/>
```

Whenever a boolean is expected:

1.If a *value* of a different XPath data type is supplied:

- A non-empty node set evaluates to boolean **true()**. The empty node set evaluates to boolean **false()**.
- A non-empty string value evaluates to boolean **true()**. The empty string evaluates to boolean **false()**.

> [!TIP]
> As an alternative to this, USoft Blend offers "flag-based" string-to-boolean conversion discussed earlier in this article.

- The number values **0** (zero) and **NaN** (not-a-number) evaluate to boolean **false()**. Other number values evaluate to boolean **true()**.

2.If a *comparison* is supplied,that is to say, an XPath expression that contains one of the comparison operators **=,  !=,  <=,  <,  >,  >=,  <>** :

- If both operands are node sets, the comparison returns **true()** if there is any node in the first node set and any node in the second node set such that the result of comparing the string-value of the two nodes evaluates to **true()**.
- If one operand is a node set and the other a boolean, the comparison returns **true()** if the result of converting the node-set to a boolean, when compared to the other boolean, evaluates to **true()**.
- If one operand is a node set and the other a string or number, the comparison returns **true()** if the result of converting the node-set to a string value, when compared to the other value (string or number), evaluates to **true()**.
- Comparisons between values that are both not a node set (ie., that are both either string, number or boolean) are compared as booleans if at least one of them is boolean; otherwise, as numbers if at least one of them is a number; otherwise, as two strings.

## Evaluated expressions vs. literal expressions

There are times when you want XPath expressions to be evaluated (interpreted, resolved) and there are other times when you want expressions to be taken literally (literal expressions).
To accommodate these two needs, USoft Blend (and XSLT 1.0 generally) automatically evaluates expressions when it is likely that you want this, and in other cases does not. In those other cases, if you want evaluation, you must prompt the processor to evaluate the expression. You do that by embedding the expression in curly braces, turning it into what XSLT calls an Attribute Value Template.

### Automatic evaluation

USoft Blend automatically evaluates XPath expressions in attribute values in the following contexts:

- Values of **select** attributes.
- Values of **pc:return**.
- Values of attributes of the type **assign:variable**.

*Example*
This example outputs the value **c:\\temp\\temp**2. Curly braces are NOT called for.

```language-xml
<pc:assign-string mysubdir="temp2">
<pc:value-of select="path:Combine('c:\temp',$mysubdir)"/>
```

### Attribute Value Templates

If USoft Blend does not automatically evaluate but you want evaluation, you must surround the expression by curly braces ( { } ), which turns it into an Attribute Value Template (AVT). A limitation, in comparison with XSLT, is that USoft Blend only supports AVT braces surrounding the entire expression of the attribute value.
Example
This example deletes directory **c:\\temp\\temp2**. Curly braces ARE called for.

```language-xml
<pc:assign-string mysubdir="temp2">
<pc:DeleteDirectories>
     <Directory dirpath="{path:Combine('c:\temp',$mysubdir)}" />
     ...
</pc:DeleteDirectories>
```

**Preventing automatic evaluation**

USoft Blend automatically interprets a select attribute value, as well as a value of an attribute of the assign:variable type, as an XPath location path representing a node set. For this reason, in these contexts, you must explicitly convert the expression if you mean to express not a node set but, for example, a string or a number.
Contrast the following 2 examples.
*Example 1*
In this example, xy is evaluated as an XPath expression: a relative location path. If the context node has one or more child elements named 'xy' then the string-value of the first 'xy' child element in document order is returned, following the XSLT specification.

```language-xml
<pc:value-of select="xy"> ... </pc:value-of>
```

*Example 2*
This example returns the character string 'xy'.

```language-xml
<pc:value-of select="'xy'" />
```

 