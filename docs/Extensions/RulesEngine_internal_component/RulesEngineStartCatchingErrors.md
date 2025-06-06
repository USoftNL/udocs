---
id: RulesEngineStartCatchingErrors
---

# RulesEngine.StartCatchingErrors



> [!NOTE]
> This article is about the **StartCatchingErrors** method of the [RulesEngine internal component](/docs/Extensions/RulesEngine_internal_component).

## **RulesEngine.StartCatchingErrors**

Instructs the Rules Engine to begin catching error messages and continue until the StopCatchingErrors method is called. This allows you to check if any errors, or even if a specific error has occurred. Reported error messages can be stored in the database or saved to a file if required. The catching of error messages in this manner does not influence program flow in any way.

You can nest multiple calls to this method. This makes it possible to catch error messages without needing to know if the caller is already catching error messages.

Returns a number equal to or higher than 1. This number indicates the nesting depth of the error catching. The first call to the method returns the number 1. A second call, without the first session having been stopped, returns the number 2, and so on.

*Syntax*

```sql
SELECT RulesEngine.StartCatchingErrors(
    *handling-mode*
)

*handling-mode*  :=  { Yes | No }
```

The optional *handling-mode* determines whether any errors are still handled by the original handlers (thereby causing them to be displayed on the screen, written to a log file, etc. as per usual) or not. If *handling-mode* is not passed or it is passed with the 'Yes' value, errors will no longer be handled by the original handlers. If *handling-mode* is passed with the 'No' value, errors will continue to be handled by the original handlers.