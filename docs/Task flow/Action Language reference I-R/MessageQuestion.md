# MessageQuestion()



> [!NOTE]
> This article is about the **MessageQuestion** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **MessageQuestion()**

Opens a question box with the specified message and three buttons: "Yes", "No", and "Cancel". Performs specified actions if the user pressres "Yes" or "No". If the user presses "Cancel" the box is closed without any further action. If you deliver the application in multiple languages, use MessageLanguage() instead.

*Syntax*

```
MessageQuestion( *text*, *yes-action*, *no-action*, *title* )
```

*Text, yes-action* and *no-action* are required. *Text* is the message. *Yes-action* is the action to be performed if the user presses the "Yes" button. *No-aaction* is the action to be performed if the user presses the "No" button.

The optional *title* is displayed in the window title bar of the question box. If you do not specify *title,* the title 'Question' is displayed.

*Example 1*

```
MessageQuestion(
   FORMULA(':1 || :2 || :3',
     'Do you want to generate options for ', query.destination(), '?'
   )
,  batchrunner.GENERATE_OPTIONS()
,  ActionDoNothing()
)
```

*Example 2*

```
MessageQuestion(
   FORMULA(':1 || :2 || :3',
     'Tours to ', query.destination(), ' entail personal insurance costs. Continue?'
   )
,  DataCommit()
,  DataRollback()
,  'Personal insurance'
)
```

To include a single quote (') in the message, type two consecutive single quotes (''). Likewise, to include a percent sign (%), type %%.