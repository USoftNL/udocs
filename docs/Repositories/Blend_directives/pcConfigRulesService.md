---
id: pcConfigRulesService
---

# pc:ConfigRulesService



> [!NOTE]
> This article is about the **pc:ConfigRulesService**[ Blend directive](/docs/Repositories/Blend%20directives).

- [pc:ConfigRulesService](#pc:ConfigRulesService)
- [Choosing a port number for a Rules Service](#Choosing+a+port+number+for+a+Rules+Service)
- [Configuring a Rules Service on the basis of an existing file](#Configuring+a+Rules+Service+on+the+basis+of+an+existing+file)
- [Manual configuration of a Rules Service](#Manual+configuration+of+a+Rules+Service)

## **pc:ConfigRulesService**

Configures a named Rules Service with an encrypted password and, optionally, installs and starts that Rules Service. Also, optionally, first stops and uninstalls a (differently configured) Rules Service previously running on the same port. To run an anynomous Rules Service, use pc:RunRulesService instead.

If you supply a port number (recommended), the configuration step consists of writing a configuration file in the USoft BIN directory, silently overwriting any existing file with the same name. There is no return value.

If you do not supply a port number, no configuration file is produced. Instead, there is a return value: what would be the configuration file's contents is returned as a text document.

You can base your new configuration file on an existing configuration file.

Calling **pc:ConfigRulesService** may be compared to configuring a Rules Service manually through the ure.config wizard accessible from USoft Binder's Rules Service item.

*Syntax*
 

```
<pc:ConfigRulesService
         port="{ *port-number* | freeport }"
         servicename="*servicename*"
         application="*application*"
         user="*user*"
         owner="*owner*"
         {password|pwd}="*pwd*"
         rdbms="{jdbc|oledb|oracle}"
         dbconnectstr="*dbconnectstr*"

         alias="*name-literal*"
         select="*templatefile*"

         messagemode="*messagemode*"
         tls="*tls*"
         peerlist="*peerlist*"
         autostart="*autostart*"
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

  {    
     <pc:RunRulesService/> |

     <pc:ServiceStop/>
     <pc:ServiceUninstall/>
     <pc:ServiceInstall/>
     <pc:ServiceStart/>
  }

/>

*templatefile*        ::=  *path*

*message-mode*        ::=  { developer | enduser }
*tls*                 ::=  { yes | no }
*autostart*           ::=  { yes | no }
*definitionsfrom*     ::=  { Auto | DictTable | DictLocated }
*flatfilelocation*    ::=  { null | *path* }

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
```

The **port** attribute is not required. If you omit **port**, no configuration file will be generated but instead, what would be its content is returned as a return value.

To specify **port**,****typically you choose a 4‑digit port number (eg., 7777). See the section "Choosing a port number...” later in this article. The port number you choose must not be occupied by any other program on the host computer. If you specify port=freeport, USoft Blend will assign a transient port number to the Rules Engine.

> [!WARNING]
> **port=freeport** is not generally recommended.

The **servicename****attribute is optional. If you provide it, the configuration file generated is:

```
*usoft-bin-dir*\*servicename*.config
```

If you do not provide **servicename***,* the configuration file generated is:

```
*usoft-bin-dir*\RulesService-*port*.config
```

where *port* is the value of the **port** attribute.

In either case, *usoft-bin-dir* is the directory returned by:

```sql
SELECT RulesEngine.GetProperty( 'BinDir' )
```

The required **owner** is the database user who owns the application tables. This is typically the same user as **user**.

The required **password** is the human-readable version of the password that will be stored in encrypted form in the configuration file.

The optional **alias** attribute allows you to specify a string that can be used as a handle for referring to the configured Rules Service in subsequent calls. If you do not pass alias, then the configured Rules Service can still be referenced by an internal name traceable by pointing at the alias attribute of the directive's embedded XML. If you plan to install the Rules Service as a Windows service you can refer to the name of the Windows service, so that in this case you may not need an alias. The alias value is allowed to be any literal string value.

The optional **select** may be used to point at an existing .config file from which you want to copy configuration settings. See "Configuring a Rules Service on the basis of an existing file" later in this article.

In addition to writing a configuration file, you can start a Rules Service with the configuration described. If you want to do this *without* declaring the Rules Service as a Windows service, include the following child directive:

```
<pc:RunRulesService />
```

To start the Rules Service as a Windows service, include one or more of the optional child directives instead, as necessary. (If the Windows service is new, all you need is to install and start it. If it already exists, but with a now obsolete configuration, then you want to stop and then uninstall it first.)

```
<pc:ServiceStop/>
<pc:ServiceUninstall/>
<pc:ServiceInstall/>
<pc:ServiceStart>
```

In this use, the **<pc:RunRulesService>** and the 4 **<pc:Service...>** directives must have empty content and they must be direct child elements of **<pc:ConfigRulesService>**, not grandchildren or descendent elements at a lower level.

When you install a Windows service in this way, the Rules Service is installed as a Windows service by the following name:

```
RulesService-*port*
```

The list of possible attributes of **pc:ConfigRulesService** corresponds to the list of Rules Service settings that you can set in USoft Binder's Rules Service Property Sheet and in the ure.config wizard. Details are in the "Manual configuration..." section below.

For each optional attribute, if you omit the attribute, the indicated default will be applied.

**Flatfilelocation** is only allowed to be other than null if you set definitionsfrom to **DictLocated**.

If you omit **logdir**, the log directory will be set to the rules_engine subdirectory of the USoft log directory that you chose during Setup.

If you omit **logfilenameprefix**, the Logfile Name Prefix will be set to the value that you pass for the application attribute.

## Choosing a port number for a Rules Service

On its host computer, each USoft Rules Service must run on (must be listening at) a port number that is dedicated to it. (The same applies to an SFW server - a server defined in the USoft Services Framework.)

For each Rules Service you need, best practice is to make a clear choice between 2 alternatives. One gives you a temporary Rules Service and the other a permanent Rules Service:

|** **   |**Temporary Rules Service**|**Permanent Rules Service**|
|--------|--------|--------|
|Port number range|10000 - 99999 (5-digit)|1000 - 9999 (4-digit)|
|Create in Blend with|pc:RunRulesService|pc:ConfigRulesService|
|Choose port number yourself|No      |Yes     |
|Register as Windows service|No      |Yes     |
|Stops automatically when script ends|Yes     |No      |
|Use cases|USoft Blend scripts, batch processing|Interactive use of USoft application in Production|



### Finding a dedicated port number

If you run a temporary Rules Service with pc:RunRulesService, USoft Blend will automatically find a so-called transient port number in the 10000-99999 range (5‑digit numbers). This is guaranteed to be a free port number, ie., a port not in use by any other process on the host computer while the Rules Service is running. You do not normally need to access the transient port number, but you can by applying the XPath expression

```
/*/@port 
```

to the embedded XML of **pc:RunRulesService**.

If you create a permanent Rules Service with pc:ConfigRulesService, choose the port number yourself from the 1000-9999 range (4‑digit numbers). This choice is a delicate matter because you must steer clear of ports used by other programs. Port numbers often found to be occupied include 1521 (Oracle), 1433 (SQL Server) and 8080 (Apache). Also, if you are using both Rules Services and SFW servers, these must all use different port numbers.

There is some tradition in the USoft community to use 7777, 7778... for Rules Services and 8090, 8091... for SFW servers.

### Advantages of temporary Rules Services for USoft Blend

In USoft Blend scripts, for any operation that requires access to a Rules Engine, best practice is to use a temporary and not a permanent Rules Service because:

- A free port number is found automatically.
- The Rules Service is automatically cleaned up after use (ie., when your script ends or terminates).

An exception to this are Blend scripts whose purpose it is to test runtime application behaviour, because you want such scripts to simulate end user access to specifically configured, permanent Rules Services.

### Registering your Rules Service as a Windows service

Typically you will register (install) a permanent Rules Service as a *Windows service*. This way, the service will show up in the Services panel, which is a standard Windows administrative tool. You will benefit from manageability and fail-over features visible in this panel.

USoft recommends using the port number as part of the Windows service name, even if this is not common practice for Windows services generally. A consistent naming strategy for Windows services, with port numbers appearing in the names, makes it much easier to manage port numbers occupied by USoft.

Thus, the best Windows service names for USoft Rules Services are RulesService-7777, RulesService-7778 ... The best Windows service names for USoft SFW servers either start with the word "USoft" or with the USoft application name, for example, USoft-TRAVEL-8090, TRAVEL-8090 …

To install a Rules Service as a Windows service in a USoft Blend script, you typically call pc:ConfigRulesService with the \<pc:ServiceInstall/> child element..

To install an SFW server as a Windows service in a USoft Blend script, you typically call pc:ServiceInstall.

## Configuring a Rules Service on the basis of an existing file

If you have an existing Rules Service .config file, you can configure a new Rules Service based on the settings in that file.

In this example, a new Rules Service with port number 7778 is based on configuration settings for an existing Rules Service at port number 7777. This is done by retrieving the parameters from the RulesService-7777.config file in the select attribute of pc:ConfigRulesService:

- Settings not specifically passed in the call to pc:ConfigRulesService are copied from the existing file.
- Settings specifically passed in the call to pc:ConfigRulesService (in the example, the owner setting) overwrite the corresponding setting found in the existing file.

*Example*

```language-xml
<example xmlns:pc="Processing.Command" >
     <pc:assign-nodeset mynodeset="{rulesservice:ReadConfig('c:\usd91\bin64\RulesService-7777.config')/config/param}" />
     <pc:ConfigRulesService
           port="7778"
           select="$mynodeset"
           owner="MYOWNER"
     />
</example>

```

## Manual configuration of a Rules Service

A manual alternative to calling pc:ConfigRulesService is to make settings manually in USoft Binder by adding a Rules Service item:

- Call up the Property Sheet for that item using the right-mouse Properties option.
- From this Property Sheet, you can install and start the Rules Service by pressing buttons.
- You can then configure the Rules Service further by pressing the Configure button. This starts the ure.config wizard, which has help information on each setting that you can do. At the end of the wizard you can start the underlying Rules Engines.

The table shows how the attribute names of pc:ConfigRulesEngine map to the prompt names in the Property Sheet and ure.config wizard screens.

|**pc:ConfigRulesService**|**ure.config**|
|--------|--------|
|messagemode|Messages|
|tls     |Use TLS |
|peerlist|Import Configuration Data - Peer Rules Service|
|autostart|Auto start|
|definitionsfrom|Definitions from|
|flatfilelocation|Flat File Folder|
|languages|Language|
|decisions|Iterated Decision|
|interval|Decision Interval|
|idletimeout|Idle Timeout|
|servertimeout|Connection Timeout|
|loglevel|Log Level|
|logdirectory|Log Directory|
|lognameprefix|Logfile Name Prefix|
|minengines|Minimum no. of Rules Engines|
|maxengines|Maximum no. of Rules Engines|



 