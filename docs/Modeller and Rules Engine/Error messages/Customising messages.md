# Customising messages

Many examples of altering and filtering messages can be found in the userror_enduser.xsl transformation sheet. The basic procedure to follow is:

1. Make a backup file of your original userror_enduser.xsl or userror.xsl.

2. To find the attributes to locate a specific message, view the XML Error Message Reference section for information. Additionally, use the userror_format_xml.xsl style sheet to display the message in XML format.

The "userror.xsl" transformation is a developer version for providing messages. It is guaranteed that this version does not filter any messages.

The "userror_enduser.xsl" transformation is the end user version. This transformation sheet replaces all technical messages with the standard message:

```
Internal error (code). Contact your system administrator.
```

A subset of about 100 messages in the "Frequent End Users Msg" category has been selected to be suitable for end users. All other messages are considered 'technical'. The "userror_enduser.xsl" transformation replaces these messages with the standard message above. Some messages are also completely filtered in this xsl transformation. This is to avoid multiple internal error messages presented to the end user. In this case, no message box is displayed.