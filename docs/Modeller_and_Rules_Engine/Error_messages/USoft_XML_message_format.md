---
id: USoft_XML_message_format
---

# USoft XML message format

In USoft applications, all messages are initially formatted in XML. XSL transformations are used to change messages in end user applications. This way, you can for example:

- Change the format in which all messages are displayed.
- Replace specific messages with standard messages.
- Filter out specific messages or groups of messages completely. No message box will be displayed.

An example of the XML format of a simple message without parameters is:

```language-xml
<messages>
    <message>
      Rollback Performed
    </message>
</messages>
```

An example of the XML format of a simple message with one parameter containing run-time data is:

```language-xml
<messages>
    <message>
      (<param>12</param>) Records committed
    </message>
</messages>
```

Normally there is one message within the messages element. However, through the Rules Service, or USoft Batch or script interface, more messages can be included here. The Rules Service logs these XML messages wrapped in an \<ure:entry> element.

XML messages include normal messages, rule violation messages, RDBMS messages, and customer messages. There is no separate category for messages that are related to RDMI or web services. Rule violation messages include:

- Table constraints.
- Domain constraints.
- Subtype Definitions: totality and exclusivity.
- Relationship checks: Min/Max No. of Children, Foreign Key Mandatory.
- Domain checks: Allowed values, Min/Max Values, Uppercase.
- Column checks: Mandatory, Unique Key.


:::note

The IO Format of a domain is not considered a rule violation.

:::
