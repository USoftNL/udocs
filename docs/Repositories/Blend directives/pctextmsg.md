# pc:textmsg



> [!NOTE]
> This article is about the **pc:textmsg**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:textmsg**

Returns the information, warning or error message (if any) that was [most recently produced](#Most+recently+produced+message) by the USoft Blend processor. This will often be a message as encountered in USoft Rules Service logs. This takes the form of a text string. The Blend processor sets or overwrites this message each time it encounters a message in the result of a function call.

Returns a text string.

> [!TIP]
> By contrast, [pc:msg](/docs/Repositories/Blend%20directives/pcmsg.md) returns an XML document.

*Syntax*

```language-xml
<pc:textmsg />
```

*Example*

This example is an attempt to import a record with a non-unique primary key:

```language-xml><pc:textmsg
<pc:XmlImport connection="{$myconn}" commit="commit" source="{$myfile}">
<pc:Succeeded>
   <pc:ConsoleWrite>Application data imported.<pc:newline/></pc:ConsoleWrite>
</pc:Succeeded>
<pc:Failed>
   <pc:ConsoleWrite>Error: Failed to import application data.
      <pc:newline/>
      <pc:textmsg/>
   </pc:ConsoleWrite>
</pc:Failed>
</pc:XmlImport>  
```

The return message from the Rules Engine looks like this:

```
Key "Tours.(Destination,Type)" with value "(AUSTRALIA,ISLAND SUNTANNER)" is not unique.
```

The value returned by <pc:textmsg/> looks like this:

```
TOUR DESTINATION = AUSTRALIA, TOUR_TYPE = ISLAND SUNTANNER
Key "Tours.(Destination,Type)" with value "(AUSTRALIA,ISLAND SUNTANNER)" is not unique.
At: /root[(1)]/pc:AppendFile[(1)]/pc:XmlImport[(1)]<pc:XmlImport connection="{$appconn}" commit="commit" source="{$importapppath}" />
```

## Most recently produced message

\<pc:textmsg/> returns the *most recently produced* message. It is typically used in combination with \<pc:Succeeded> and \<pc:Failed> as the Example showed, but you can also used it on its own. This \<pc:textmsg/> produces any message raised by the call to pc:RunRulesService:

```language-xml
<pc:RunRulesService>
  ...
</pc:RunRulesService>
<pc:textmsg/>
```

 