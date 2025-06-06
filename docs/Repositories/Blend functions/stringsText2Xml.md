# strings:Text2Xml



> [!NOTE]
> This article is about the **strings:Text2Xml**[ Blend function](/docs/Repositories/Blend%20functions).

## **strings:Text2Xml**

Converts a flat sequence of text characters into an XML document that represents punctuation marks and whitespace by special elements and attributes. This is a starting point for parsing the text for some purpose.

*Syntax*

*Namespace declaration*

You need to declare this namespace only if you call the function directly from the USCSXSL component but outside Blend. In a Blend context (ublendit.exe, uscsxsl.blend()) the namespace is already declared in the Blend transformation, which is in xsl\\Util\\Batch.1.0.xsl in your USoft installation folder.

```
xmlns:strings="USoft:Strings"
```

*Function call*

```
strings:Text2Xml( *text*, '*boundary-aliases*' )

*boundary-aliases*  ::=  *page-alias line-alias element-alias*
```

The required *boundary-aliases* is a quoted string of 3 character sequences separated by 2 spaces. For details, see the Example and the "Boundary aliases" section below.

*Example*

```language-xml
<root xmlns:pc="Processing.Command" pc:hideme="true">
  <pc:defs>
    URE..TEXT. Application
      MYAPP
  </pc:defs>
  <pc:evaluate select="strings:Text2Xml(//pc:defs, 'P l elem')"/>
</root>
```

This example returns the following XML document. For comments, see the sections below the XML document.

```language-xml
<P>
  <l>
    <elem ws="">URE</elem>
    <pm ws="">.</pm>
    <pm ws="">.</pm>
    <elem ws="">TEXT</elem>
    <pm ws="s">.</pm>
    <elem ws="ntt">Application</elem>
    <eol/>
  </l>
  <l>
    <elem ws="nt">MYAPP</elem>
    <eol/>
  </l>
  <l>
    <eof/>
  </l>
</P>
```

## Boundary aliases

With the *boundary-aliases* setting you can influence what the root element, each of the line elements, and each of the text elements is called in the result document.

The value of *boundary-aliases* is a string of 3 character sequences separated by 2 spaces, in the example:

```
P l elem
```

The first or *page-alias* sequence is the name of the root element of the return document.

The second or *line-alias* is the element name used for each section in the document that represents a text line.

The third or *element-alias* is the element name used for each text element other than punctuation marks.

## Punctuation marks

Punctuation marks include full stops ( . ), commas ( , ), colons ( : ), and semicolons ( ; ). Each punctuation mark is parsed as an individual symbols. In contrast to non-punctuation text, shown in elements by the name of the page-alias boundary alias, a punctuation mark is shown in a \<pm> element, for example:

```
<pm ws="">.</pm>
```

## Whitespace

Each text element has a ws attribute representing all the whitespace characters (if any exist)  following that text in the original. The value of a ws attribute is made up of one or more of the following placeholders for whitespace characters:

|        |        |
|--------|--------|
|s       |A space character|
|t       |A tab character|
|n       |A newline character (linefeed or carriage return or a combination of the two)|



For example, a text element followed by 1 newline and 2 tabs has the following ws attribute:

```
ws="ntt"
```

A text element that has no whitespace following it has an empty ws attribute:

```
ws=""
```

Notice that whitespace preceding the FIRST text element of the input is lost in the return document, as the example in this help topic shows.

## Special elements

The following special elements are infixed in the result document in the places stated:

|        |        |
|--------|--------|
|<eol/>  |At the end of each line (linefeed or carriage return or a combination of the two)|
|<eof/>  |At the end of the input|



 