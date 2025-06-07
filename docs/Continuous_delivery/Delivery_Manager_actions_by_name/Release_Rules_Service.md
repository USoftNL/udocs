---
id: Release_Rules_Service
---

# Release Rules Service




:::note

This article is about the **Release Rules Service**[Delivery Manager action](/docs/Continuous_delivery/Delivery_Manager_actions_by_name).

:::

## **Release Rules Service**

Places in the \\rulesservices directory of the current release folder a copy of a Rules Service .config file that you indicate as the source file, for example:

```
c:\usd100\bin64\RulesService-7777.config
```

### Parameters

|**Name**|**Type**|**Optional?**|
|--------|--------|--------|
|Source file|Folder or file|No      |



### Attachments

When you call this action, if the current release has "Include attachments" = Yes, attachments for the "rulesservices" section (if any are defined) are copied to the specified subfolder of the "rulesservices" section folder. This happens only to attachments that have Blocked = No (the default). If a Custom XSL transformation is defined for the attachment, this transformation is applied to the output.

This way, you can load and use USoft's deploy sample "deploy.xml" for Rules Services. Running this "deploy.xml" script on a target machine will configure-and-deploy target .config files if you add RulesService elements of the following type to the registry that you release.

*Example*

If "registry.xml" has the following elements, running "deploy.xml" on target machine with computername P3100500888 will output to the \\APP subfolder of the USoft installation directory:

```
RulesService-7900.config
RulesService-7901.config
```

These 2 files will contain settings copied from the delivered "RulesService-7777.config" sourcefile, except for service-specific settings indicated in the registry XML. In the example, the config file for port number 7901 will have a Connection Timeout setting of 1000 instead of the default 600 milliseconds:

```xml
<Computer name="P3100500888">
    <RulesServices>
         <RulesService port="7900" sourcefile="RulesService-7777.config" servertimeout="600"/>
         <RulesService port="7901" sourcefile="RulesService-7777.config" servertimeout="1000"/>
    </RulesServices>
</Computer>
```

If you omit the port attribute or the sourcefile attribute from RulesService registry entries, it's an error.

The table below shows how attribute names expected by "deploy.xml" map to the names displayed in the interactive Rules Service Configuration wizard that you can open by choosing Properties for the Rules Service item in USoft Binder, and then Configure. Properties are shown in the order in which they appear in the wizard screens. If you specify an attribute (other than sourcefile) that is not in the list, it's an error.

For full details, eg., on allowed values for each of the settings, see. pc:ConfigRulesService.

|**Rules Service Configuration wizard**|**XML attribute name**|
|--------|--------|
|Port nr.|`port`  |
|Use TLS |`tls`<p> </p>|
|Peer RulesService|`peerlist`|
|User    |`user`  |
|Password|`password`|
|Connection|`dbconnectstr`|
|RDBMS   |`rdbms` |
|Owner   |`owner` |
|Application|`application`|
|Auto start|`autostart`|
|Definitions from|`definitionsfrom`|
|Flat File Folder|`flatfilelocation`|
|Language|`languages`|
|Iterated Decision|`decisions`|
|Decision Interval|`interval`|
|Idle Timeout|`idletimeout`|
|Connection Timeout|`servertimeout`|
|Messsages|`messagemode`|
|Log Level|`loglevel`|
|Log Directory|`logdirectory`|
|Logfile Name Prefix|`lognameprefix`|
|Minimum Number of Rules Engines|`minengines`|
|Maximum Number of Rules Engine|`maxengines`|



 