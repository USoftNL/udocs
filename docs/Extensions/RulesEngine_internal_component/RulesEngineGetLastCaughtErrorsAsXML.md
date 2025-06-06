---
id: RulesEngineGetLastCaughtErrorsAsXML
---

# RulesEngine.GetLastCaughtErrorsAsXML



> [!NOTE]
> This article is about the **GetLastCaughtErrorsAsXML** method of the [RulesEngine internal component](/docs/Extensions/RulesEngine%20internal%20component).

## **RulesEngine.GetLastCaughtErrorsAsXML**

Reports all error messages caught in the active error catching session, using XML as a format. To get the result in plain text, use the **GetLastCaughtErrors** method instead.

Returns an XML document.

Call this method just before you call the **StopCatchingErrors** method. If you call it AFTER calling StopCatchingErrors, and there is another (parent) catching session running, you will not get the error messages of your (stopped) session, but of the other session that is still running.

*Syntax*

```sql
SELECT RulesEngine.GetLastCaughtErrorsAsXML()
```

The return XML document looks like this:

```language-xml
<uslng:messages>
  <uslng:message>...</uslng:message>
  <uslng:message>...</uslng:message>
  ...
</uslng:messages>
```

If no errors occurred in the active error catching session, the return value is:

```language-xml
<uslng:messages/>
```

 