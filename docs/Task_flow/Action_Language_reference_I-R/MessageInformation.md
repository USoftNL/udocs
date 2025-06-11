---
id: MessageInformation
---

# MessageInformation()




:::note

This article is about the **MessageInformation** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **MessageInformation()**

Opens an information box, displays the specified information message in it, then waits for the end user to click the OK button. If you deliver the application in multiple languages, use MessageLanguage() instead.

*Syntax*

```
MessageInformation( *text* )
```

The required *text* is a string that is the information message to be displayed.

*Example*

```
MessageInformation(FORMULA(':1 || :2 || :3', 'Tours to ', query.destination(), ' are still available.'))
```

This could produce the message:

```
Tours to Africa are still available.
```

To include a single quote (') in the message, type two consecutive single quotes (''). Likewise, to include a percent sign (%), type %%.