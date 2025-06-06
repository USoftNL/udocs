---
id: MessageError
---

# MessageError()




:::note

This article is about the **MessageError** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **MessageError()**

Opens an error box, displays the specified error message in it, then waits for the end user to click the OK button. If you deliver the application in multiple languages, use MessageLanguage() instead.

A call to MessageError() triggered (directly or indirectly) from a validation event is executed only if an error has been explicitly raised by ErrorRaise(). Otherwise, calls to MessageError() will have no effect.

*Syntax*

```
MessageError( *text* )
```

The required *text* is a string that is the error message to be displayed.

*Example*

```
MessageError(FORMULA(':1 || :2 || :3', 'All tours to ', query.destination(), ' are fully booked.'))
```

This could produce the message:

```
All tours to Africa are fully booked.
```

To include a single quote (') in the message, type two consecutive single quotes (''). Likewise, to include a percent sign (%), type %%.