---
id: pcterminate
---

# pc:terminate




:::note

This article is about the **pc:terminate**[ Blend directive](/docs/Repositories/Blend_directives).

:::

## **pc:terminate**

Terminates the script.

*Syntax*

```
<pc:terminate
     test="*xpath >> boolean*"
     { msg | message } = "*text-literal*"
     exitcode = "*exitcode*"
/>
```

The attributes are all optional. If **test** is specified, the script is terminated only if **test** evaluates to Boolean true(). If **msg** or **message** is specified, message is returned to the calling interface on termination.

If **exitcode** is specified, *exitcode* is returned as an error code to the calling shell on termination, as demonstrated by:

```xml
<root xmlns:pc="Processing.Command">
    <pc:assign-string-default exitcode="-1"/>
    <pc:ConsoleWrite>Use echo %ERRORLEVEL% to inspect the exit code is <pc:value-of select="$exitcode"/> after this script has terminated.</pc:ConsoleWrite>
    <pc:terminate exitcode="$exitcode"/>
</root>
```

*Example 1*

This example terminates a script if it is not run as Administrator.

```xml
<pc:terminate test="not(wrights:HasAdminRole())" msg="{concat('Admin role is required. Available roles:', wrights:Roles())}"/>
```

*Example 2*

This example terminates a script if starting a Rules Service was unsuccessful:

```xml
<pc:RunRulesService waittime="10000"
    user="MYNAME" pwd="MYPWD" rdbmstype="oracle" connection="XE" application="MYAPP"
    owner="MYNAME"
    assign:appconn="/*/@id" assign:rsstate="RulesService/@state" assign:logurl="RulesService/@logurl" assign:hint="RulesService/@error-hint" />
<pc:terminate
    test="normalize-space($appconn)=''"
    msg="{concat('application service did not start (state=', $rsstate, ') logurl=', $logurl, 'hint=', $hint)}"
    exitcode="-1"
/>
```

 