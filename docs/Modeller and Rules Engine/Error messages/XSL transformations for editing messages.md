# XSL transformations for editing messages

Viewing messages in XML format gives you the information that you need for editing messages through XSL transformations. XSL transformations relevant for editing XML messages are located in folder:

```
*usoft-installation-folder*/xsl/ErrorHandling
```

To display the XML of a specific message, make a backup of the "userror.xsl" transformation, and then rename "userror_format_xml.xsl" to "userror.xsl".

Look at the result in the application by executing the user action that leads to the message.

The XSL transformations delivered for editing messages are:

|        |        |
|--------|--------|
|userror.xsl|The default transformation to display messages in regular text.|
|userror_format_xml.xsl|The XML variant of "userror.xsl". To display messages in XML rather than regular text, rename this file to "userror.xsl".|
|userror_enduser.xsl|This file replaces all technical messages with a standard text. In this file, you will find several examples on how to work with the uslng XML format. This transformation replaces all technical messages with the standard message:"internal error (code). Contact your system administrator"|
|uspp.xsl|Do not edit. This transformation is for internal usage.|