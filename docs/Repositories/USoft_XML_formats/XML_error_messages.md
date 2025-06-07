---
id: XML_error_messages
---

# XML error messages

USoft XML error messages look like this:

```xml
<uslng:messages xmlns:uslng="..." app-interface="..." version="1.0">
    <uslng:message msg-code="..." msg-category="..." msg-type="..." system-msg="..." language="...">
    </uslng:message>
</uslng:messages>
```

USoft XML error messages may have a nested structure. In the following example, a constraint raised a violation (in the \<violation> element) and this message structure is embedded in a parent structure that tells you that the constraint was fired in the context of a batch SQL task:

```xml
<uslng:messages app-interface="batch" ... >
<uslng:message msg-code="424" ... >
    Failed to execute SQL statement in SQL task "
    <uslng:param name="Task">DC-DOM_UPD_MSG-AND-RESTR</uslng:param>
". Statement:
 <uslng:param name="Statement">insert into LNG_T1(pk, col1) values(4,6)</uslng:param>
    Report:
    <uslng:param name="Report">
    <uslng:messages ...
        <uslng:message ...
        <uslng:context>
            <uslng:execution-stack> ... </uslng:execution-stack>
            <uslng:record> ... </uslng:record>
        </uslng:context>
        <uslng:violation>
            <uslng:message -common attributes-
                <!-- constraint message -->
            </uslng:message
        </uslng:violation>
        </uslng:message>
    </uslng:param>
    </uslng:message>
</uslng:messages>
```

## Attributes

USoft XML error messages contain the following attributes:

|**Attribute**|**Mandatory?**|**Type**|**Values**|
|--------|--------|--------|--------|
|app-interface|Yes     |String  |<p>One of the following:</p><p>sql-script, odbc, client-server, batch, http, creapp, usd-core</p>|
|version |Yes     |Number  |The current USoft XML Messages version.|
|msg-code|Yes     |Mixed   |The message code as defined in system messages. Value is 'no code' for constraint messages.|
|msg-category|Yes     |String  |The message category as defined in system mesages. Value is 'built-in' for constraint messages.|
|msg-type|Yes     |String  |<p>One of the following:</p><p>Error, Warning, Information</p>|
|system-msg|No      |String  |Value is 'yes' when the corresponding message category is a system category, ie., has the System checkbox selected.|
|language|Yes     |String  |The current language. Value is 'default' when no language is specified.|



## Parameters

System messages may or may not have parameters. Parameters show up in \<param> elements, for example:

```xml
<uslng:messages ..common-attributes..>
    <uslng:message ..common attributes..>
        <uslg:param name=".."> ... </uslng:param>
    </uslng:message>
</uslng:messages>
```

## Violations

Rule violation messages are raised by constraints (both at table and domain level) and also by attribute settings for table, column, domain, relationship and subtype objects.

Rule violation messages have this general structure:

```xml
<uslng:messages ... - >
  <uslng:message ... source="..." >
    <uslng:context> ... </uslng:context>
    <uslng:violation>
        <uslng:message ...
         <!-- constraint message -->
        </uslng:message>
    </uslng:violation>
  </uslng:message>
</uslng:messages>
```

 Messages for productive rules have \<correction> instead of \<violation>:

```xml
<uslng:messages ... - >
  <uslng:message ... source="..." >
    <uslng:context> ... </uslng:context>
    <uslng:correction>
        <uslng:message ...
         <!-- constraint message -->
        </uslng:message>
    </uslng:correction>
  </uslng:message>
</uslng:messages>
```

The **source** attribute has value ‘constraint’  if the message was raised by a constraint, and ‘rdbms’ otherwise.

## Context

Rule violation messages and RDBMS messages can contain context information about statement execution and records at the time of the error. This context information is in a \<context> child element of the \<message> element and looks like this:

```xml
<uslng:context app-interface="(same as in uslng:messages element)">
    <uslng:execution-stack>
        <uslng:execution-element section=".." type=".." name=".."/>
        <uslng:execution-element section=".." type=".." name=".."/>
    </uslng:execution-stack>
    <uslng:record> ... </uslng:record>
</uslng:context>
```

The execution-stack element contains the stack of in-progress execution elements at the time of the error. Elements on the stack are limited to RDMI calls, batch jobs and tasks, and decisions.

The table below gives details on attributes.

|**Attribute**|**Mandatory?**|**Type**|**Values**|
|--------|--------|--------|--------|
|section |Yes     |String  |<p>One of the following:</p><p>batch, engine, rdmi</p>|
|type    |Yes     |String  |<p>One of the following:</p><p>action-task, decision, export-task, import-task, job, job-task, rdmi-call, sql-task</p>|
|name    |Yes     |String  |Name of the execution element|



## Record

Record information at the time of the error is contained in the "uslng:record" element:

```xml
<uslng:record>
    <uslng:painted-window-name>...</uslng:painted-window-name>
    <uslng:defined-window-name>...</uslng:defined-window-name>
    <uslng:table-name>...</uslng:table-name>
    <uslng:primary-key>
        <*table-name* prompt="...">
            <*column-name* prompt=".." value="..."/>
        </table_name>
    </uslng:primary-key>
</uslng:record>
```


:::tip

Record information is not available in the following cases:
In these cases, the elements hold the values 'unknown window' (painted and defined windows), 'unknown table' (table names) and 'unknown pk' (primary-keys).

:::

## Constraints, attributes

The various rule violation messages can contain specific elements that you can refer to in XSL transformations. Specific attributes for all constraints include:

- uslng:message@source is "constraint"
- uslng:message@msg-code="no code" in the outer message element.

Specific attributes for restrictive constraints include:

- uslng:violation element instead of uslng:correction element.

Specific attributes for productive constraints include:

- uslng:correction element instead of uslng:violation element.

Specific attributes for table constraints and domain constraints include:

- uslng:message@constraint-type="table-constraint" in the outer message element.
- uslng:message@msg-category="built-in" in the outer message element.
- The inner uslng:message element (within the uslng:violation) is not wrapped a USoft system message: it has therefore no msg-category attribute.

Specific attributes for domain constraints include:

- uslng:message@constraint-type="domain-constraint"
- uslng:message@msg-category="built-in" in the outer message element.
- The inner uslng:message element (within the uslng:violation) is wrapped in a USoft system message with code 60200.

Specific attributes for other (built-in) rule violation messages include:

- uslng:message@constraint-type="relation \| domain-check \| column-check \| subtype".
- uslng:message@msg-category="built-in".
- uslng:message@constraint-name="built-in".

## RDBMS messages

RDBMS messages are always wrapped within an uslng:param element in USoft system message 931. The **source** attribute is set to ‘rdbms’.

```xml
<uslng:messages ... ->
<uslng:message msg-code="931" ... source="rdbms">
    <uslng:context> ... </uslng:context>
    RDBMS Error:
    <uslng:param name="ErrorText">
        <rdbms-message>
            <!-- native rdbms message -->
        </rdbms-message>
    </uslng:param>
    Contact your system administrator.
</uslng:message>
</uslng:messages>
```

Specific attributes for RDBMS messages include:

- uslng:message@source="rdbms"

This message is wrapped in the rdbms-message element rather than in \<uslng:violation> or \<uslng:correction>.