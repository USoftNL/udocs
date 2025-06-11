---
id: pcRunRulesService
---

# pc:RunRulesService




:::note

This article is about the **pc:RunRulesService**[ Blend directive](/Repositories/Blend_directives).

:::

## **pc:RunRulesService**

Starts a USoft Rules Service for the specified application, using the specified database connection attributes.

This is an anonymous Rules Service. To configure and start a named Rules Service, use pc:ConfigRulesService instead.

There is no return value.

*Syntax*

```
<pc:RunRulesService
         application="*application*"
         user="*user*"
         pwd="*pwd*"
         rdbmstype="{jdbc|oledb|oracle}"
         dbconnectstr="*dbconnectstr*"
         owner="*owner*"

         alias="*alias*"
         ticket="*ticket*"

         messagemode="*messagemode*"
         definitionsfrom="*definitionsfrom*" 
         flatfilelocation="*flatfilelocation*"

         languages="*languages*"
         decisions="*decisions*"
         interval="*interval*"
         idletimeout="*idletimeout*"
         servertimeout="*servertimeout*"

         loglevel="*loglevel*"
         {logdirectory|logdir}="*logdir*"
         logfilenameprefix="*logfilenameprefix*"
         minengines="*minengines*"
         maxengines="*maxengines*"

         waittime="*waittime*"
         assign:*instance*="/*/@id"
         assign:*rsstate*="RulesService/@state"
         assign:*logurl*="RulesService/@logurl"
         assign:*error-hint*="RulesService/@error-hint"

         options=*options*

/>

*ticket*        ::=  { *trusted-token* | false }

*message-mode*        ::=  { developer | enduser }
*definitionsfrom*     ::=  { Auto | DictTable | DictLocated }
*flatfilelocation*    ::=  *path*

*languages*           ::=  { DEFAULT | *language-name* }
*decisions*           ::=  { null | *decision-name* }
*interval*            ::=  { 0   | *integer* }
*idletimeout*         ::=  { 0   | *integer* }
*servertimeout*       ::=  { 600 | *integer* }

*loglevel*            ::=  { No Logging | Error | Information | Debug }
*logdir*              ::=  { *usoft-log-dir*\rules_engine | *absolute-path* }
*logfilenameprefix*   ::=  { *application* | *name-literal* }
*minengines*          ::=  { 1  | *integer* }
*maxengines*          ::=  { 50 | *integer* }

*options*             ::= * command-line-switch*=*value*}
```


:::tip

The list of attributes of pc:RunRulesService corresponds to the list of Rules Service settings that you can set in USoft Binder's Rules Service Property Sheet and in the ure.config wizard. Details are in the "Manual configuration" section of [pc:ConfigRulesService](/Repositories/Blend_directives/pcConfigRulesService.md). For each optional attribute, if you omit the attribute, the indicated default will be applied.

:::

The Rules Service will use a transient port number. For more information, read "Choosing a port number...” in [pc:ConfigRulesService](/Repositories/Blend_directives/pcConfigRulesService.md).

The Rules Service will log on to **application** in the database account specified by **user**, **pwd**, **rdbmstype**, **dbconnectstr**. The required **owner** is the database user who owns the application tables. This is typically the same database user as **user**.

**User**, **pwd**, **owner** are all required, except for logging on to SQL Server via Windows Authentication, in which case they must all be left empty.

The optional **alias** attribute allows you to specify a string that can be used as a handle for referring to the started Rules Service in subsequent calls. If you do not pass **alias**, then the started Rules Service can still be referenced by an internal name traceable by pointing at the **alias** attribute, or its **id** equivalent, of the directive's embedded XML. The alias value is allowed to be any literal string value. Thus:

```xml
<pc:RunRulesService alias="myalias" ... />
...
<pc:StopRulesService alias="myalias"/>
```

is equivalent to :

```xml
<pc:RunRulesService assign:myalias="/*/@alias" ... />
...
<pc:StopRulesService alias="{$myalias}"/>
```

The optional **ticket** attribute is not normally needed except for specialised use. If you omit it, a trusted token is automatically generated. This trusted token is a hashed key string associated with the specific database connection. Blend directives that access the database later in the script and that are connected to the started RulesService instance (via the alias value, which is essential) are automatically trusted on the basis of this token. You can override this behaviour by setting ticket="false" if you have a special reason to test or debug authentication at the time of that later directive. You can also overwrite the generated token value by setting a ticket value manually, for example, a numeric value, but this has no clear advantage over the automatic behaviour.

If you omit **definitionsfrom**, or if you leave it to the default 'Auto', the Rules Service first looks in the \\APP directory of your USoft installation for a file called application.con. If such a file is found, the Rules Service will run from this file. Otherwise, it will run from repository, if repository tables are available.

If you set **definitionsfrom** to 'DictTable', the Rules Service will run from repository. If you set it to 'DictLocated', you must supply a flatfilelocation path, and the Rules Service will run from the application.con file (if any) found in the flatfilelocation path.

If you omit **logdir**, the log directory will be set to the rules_engine subdirectory of the USoft log directory that you chose during Setup.

If you omit **logfilenameprefix**, the Logfile Name Prefix will be set to the value that you pass for the application attribute.

The optional **options** attribute allows you to pass additional [command line switches known to the RulesService.exe command](/USoft_for_administrators/USoft_command_line_syntax/rulesserviceexe.md). This allows you, for example, to specify multiple controlling hosts:

```xml
<pc:RunRulesService  options="-gc=*myhost1* -gc=*127.30.60.123*" ... />
```

*Example*

```xml
<root xmlns:pc="Processing.Command" xmlns:assign="Processing.Command.Assign">

  <pc:assign-string-default
        appname="MYAPP"
        owner="MYNAME" pwd="MYPASSWORD" rdbms="oracle"
        connectstr="(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=MYCOMPUTER.usoft.com)(PORT=1111))(CONNECT_DATA=(SID=XE)))" />

  <pc:RunRulesService waittime="10000"
        user="{$owner}" pwd="{$pwd}" rdbmstype="{$rdbms}" connection="{$connectstr}" application="{$appname}"
        owner="{$owner}"
        alias="x1"
        assign:rsstate="RulesService/@state" assign:logurl="RulesService/@logurl" assign:hint="RulesService/@error-hint" />

  <pc:terminate
      test="normalize-space($instance)=''"
      msg="{concat('application service did not start (state=', $rsstate, ') logurl=', $logurl, 'hint=', $hint)}"
      exitcode="-1"  />

   <!--
        Actions to be performed by the Rules Service
   -->

   <pc:StopRulesService  alias="x1"/>

</root>
```

 