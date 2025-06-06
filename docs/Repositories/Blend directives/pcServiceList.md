# pc:ServiceList



> [!NOTE]
> This article is about the **pc:ServiceList**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:ServiceList**

Retrieves a list of locally installed Windows services of which the name matches a given pattern.

Returns an XML document. See the "Return value" section below.

When delivering a USoft application on a Production machine:

- Before you deploy the deliverables, use this directive to stop and uninstall all the services in use by USoft.
- After you deploy the deliverables, use this directive to install and start all the services that are part of the new deliverables.

*Syntax*

```
<pc:ServiceList pattern=*pattern* />
```

The required **pattern** is a regular expression. All the locally installed Windows services of which the name matches pattern will be listed in the return value. If pattern has only literal characters (Example 1), all the services of which the name starts with the pattern are listed.

> [!CAUTION]
> The pattern is applied to the service's name, not to the display name that is visible in the Services panel.

*Example 1*

This example gives you all the Windows services of which the name starts with "RulesService".

```language-xml
<example xmlns:pc="Processing.Command" pc:hideme="true">
     <pc:ServiceList pattern="RulesService"/>
</example>
```

*Example 2*

This example gives you all the Windows services installed on the local computer.

```language-xml
<example xmlns:pc="Processing.Command" pc:hideme="true">
     <pc:ServiceList pattern=".*"/>
</example>
```

## Return value

The return value of Example 1 looks like this:

```language-xml
<Services>
   <Service DisplayName="RulesService SALES-7755" name="RulesService SALES-7755" MachineName="L3100100247" ServiceType="Win32OwnProcess" status="Running, can be stopped" path="C:\usd911C\bin64\RulesService.exe -run_as_service" pid="4352" />
   <Service DisplayName="RulesService-7093" name="RulesService-7093" MachineName="L3100100247" ServiceType="Win32OwnProcess" status="STOPPED" path=""c:\usd91\bin64\RulesService.exe" -run_as_service -gc=l3100100247.usoft.com" />
   <Service DisplayName="RulesService-7778" name="RulesService-7778" MachineName="L3100100247" ServiceType="Win32OwnProcess" status="STOPPED" path="C:\usd91\bin64\RulesService.exe -run_as_service" />
</Services>
```

 