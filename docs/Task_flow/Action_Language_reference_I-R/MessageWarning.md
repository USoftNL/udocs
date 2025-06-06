---
id: MessageWarning
---

# MessageWarning()



> [!NOTE]
> This article is about the **MessageWarning** action in the [USoft Action Language](/docs/Task_flow/Action_Language_reference/USoft_Action_Language.md).

## **MessageWarning()**

Opens a warning box, displays the specified warning message in it, then waits for the end user to click the OK button. If you deliver the application in multiple languages, use MessageLanguage() instead.

*Syntax*

```
MessageWarning( *text* )
```

The required *text* is a string that is the warning message to be displayed.

*Example*

```
MessageInformation(FORMULA(':1 || :2 || :3',
  'For tours to ', query.destination(), ', personal insurance is obligatory.'))
```

This could produce the message:

```
For tours to Africa, personal insurance is obligatory.
```

To include a single quote (') in the message, type two consecutive single quotes (''). Likewise, to include a percent sign (%), type %%.