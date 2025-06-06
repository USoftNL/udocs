# XSL editing effects on error logging

Changes in the "userror.xsl" transformation sheet affect all plain text logging as well. When logging is done in XML, changes to "userror.xsl" do not affect the logged messages, since these messages are not transformed.

## Rules Service messages

The Rules Services logs error messages in XML format. When viewing the log file in the configuration window, two different XSL transformations are executed to display all messages in HTML format:

```
*usoft-installation-folder*/templates/ure/ URECombinedLogfile2Html.xsl
```

and

```
*usoft-installation-folder*/templates/ure/ URECombinedLogfileSort.xsl
```

Changes to these "userror.xsl" transformations do not affect error logging in the Rules Service: only the plain text messages returned to the client are affected.

## USoft Batch messages

Batch log files with an .xml extension are logged in XML format. In this case also, changing "userror.xsl" does NOT affect the error messages logged.