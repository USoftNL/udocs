# DataRollback()



> [!NOTE]
> This article is about the **DataRollback** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **DataRollback()**

Rolls back all data manipulation (if any) in the current transaction, i.e., data manipulation that has occurrend since login or since the most recent commit or rollback.

*Syntax*

```
DataRollback( *mode* )

*mode*  :=  { QUIET | }
```

If the optional *mode* is not passed, an information message is displayed if the rollback is successful. If QUIET is passed as the value for *mode*, this message is suppressed.

*Example*

```
DataRollback( QUIET )
```

 