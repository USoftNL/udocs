---
id: DataCommit
---

# DataCommit()




:::note

This article is about the **DataCommit** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **DataCommit()**

Commits the current transaction in the database. If the transaction fails, an error message is displayed.

*Syntax*

```
DataCommit( *mode* )

*mode*  ::=  { QUIET | }
```

If the optional *mode* is not passed, an information message is displayed that contains the number of committed records. If QUIET is passed as the value for *mode*, this message is suppressed if the commit succeeds.

*Example*

```
DataCommit( QUIET )
```

 