---
id: pcmsg
---

# pc:msg




:::note

This article is about the **pc:msg**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:msg**

Returns the information, warning or error message (if any) that was [most recently produced](#most-recently-produced-message) by the USoft Blend processor. This will often be a message as encountered in USoft Rules Service logs. This takes the form of an XML document. The Blend processor sets or overwrites this message each time it encounters a message in the result of a function call.

Returns an XML document.


:::tip

By contrast, [pc:textmsg](/Repositories/Blend_directives/pctextmsg.md) returns a text string.

:::

*Syntax*

```xml
<pc:msg />
```

*Example*

This example is an attempt to import a record with a non-unique primary key:

```xml
<pc:XmlImport connection="{$myconn}" commit="commit" source="{$myfile}">
   <pc:Succeeded>
      <pc:ConsoleWrite>Application data imported.<pc:newline/></pc:ConsoleWrite>
   </pc:Succeeded>
   <pc:Failed>
      <pc:ConsoleWrite>Error: Failed to import application data.
          <pc:newline/>
          <pc:msg/>
      </pc:ConsoleWrite>
   </pc:Failed>
</pc:XmlImport> 
```

The return message from the Rules Engine looks like this:

```
Key "Tours.(Destination,Type)" with value "(AUSTRALIA,ISLAND SUNTANNER)" is not unique.
```

The value returned by <pc:msg/> looks like this:

```xml
<Error location="/root[(1)]/pc:AppendFile[(1)]/pc:XmlImport[(1)]<pc:XmlImport connection="{$appconn}" commit="commit" source="{$importapppath}" />">
  <uslng:messages version="1.0" statement="select to_clob((invoke xml.import with select 'c:\labs\blend\TRAVEL.xml'))" xmlns:uslng="http://www.usoft.com/Product/Messages">
    <uslng:message msg-code="no code" msg-category="built-in" msg-type="Error" source="constraint" constraint-name="built-in" constraint-type="column-check" language="default" _escape-xml-content_="yes">
      <uslng:context>
        <uslng:execution-stack>
          <uslng:execution-element section="rdmi" type="internal-component" name="XML.IMPORT(XMLIMPORTFETCH)" />
        </uslng:execution-stack>
        <uslng:record>
          <uslng:table-name>TOUR</uslng:table-name>
          <uslng:defined-window-name>Tours</uslng:defined-window-name>
          <uslng:primary-key>
            <TOUR prompt="Tours">
              <DESTINATION prompt="Destination" value="AUSTRALIA" />
              <TOUR_TYPE prompt="Type" value="ISLAND SUNTANNER" />
            </TOUR>
          </uslng:primary-key>
        </uslng:record>
      </uslng:context>
      <uslng:violation>
        <uslng:message
            msg-code="60446"
            msg-category="Frequent End User Msg"
            msg-type="Error"
            system-msg="yes"
            language="default" _
            escape-xml-content_="yes">
               Key "<uslng:param name="ObjectName">Tours</uslng:param>.<uslng:param name="Key">(Destination,Type)</uslng:param>
               " with value "<uslng:param name="Val">(AUSTRALIA,ISLAND SUNTANNER)</uslng:param>" is not unique.</uslng:message>
      </uslng:violation>
    </uslng:message>
  </uslng:messages>
</Error>
```

## Most recently produced message

\<pc:msg/> returns the *most recently produced* message. It is typically used in combination with \<pc:Succeeded> and \<pc:Failed> as the Example showed, but you can also used it on its own. This \<pc:msg/> produces any message raised by the call to pc:RunRulesService:

```xml
<pc:RunRulesService>
  ...
</pc:RunRulesService>
<pc:msg/>
```