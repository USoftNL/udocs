---
id: pcRulesServiceList
---

# pc:RulesServiceList



> [!NOTE]
> This article is about the **pc:RulesServiceList**[ Blend directive](/docs/Repositories/Blend%20directives).

## **pc:RulesServiceList**

Produces a list of all the local Rules Services that match a configuration file in the \\BIN64 subdirectory of the USoft installation directory (if you have a 64-bit installation), or in the \\BIN subdirectory (if you have a 32-bit installation).

Returns an XML document.

*Syntax*

```
<pc:RulesServiceList />
```

## Return document

An example return document is:

```language-xml
<Services>
   <Service DisplayName="RulesService-7778" name="RulesService-7778" MachineName="L3100100247" ServiceType="Win32OwnProcess" status="STOPPED" path="C:\usd91\bin64\RulesService.exe -run_as_service" />
   <Service DisplayName="RulesService-7780" name="RulesService-7780" MachineName="L3100100247" ServiceType="Win32OwnProcess" status="Running, can be stopped" path="C:\usd91\bin64\RulesService.exe -run_as_service" pid="14908" />
</Services>
```

 