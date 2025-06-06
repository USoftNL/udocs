# RecordRefresh()



> [!NOTE]
> This article is about the **RecordRefresh** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **RecordRefresh()**

Shows the current record as it is stored internally. This is the state it had at the time of the last commit or record store.

Values in secondary windows (such as subtype windows) are also refreshed.

*Syntax*

```
RecordRefresh( *mode* )

*mode*  :=  { CASCADING | }
```

If the value CASCADING is passed for *mode*, corresponding child records in related windows are also refreshed.