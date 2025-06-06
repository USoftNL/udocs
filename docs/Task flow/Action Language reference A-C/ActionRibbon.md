# ActionRibbon()



> [!NOTE]
> This article is about the **ActionRibbon** action in the [USoft Action Language](/docs/Task%20flow/Action%20Language%20reference/USoft%20Action%20Language.md).

## **ActionRibbon()**

Associates an action with a button in the icon ribbon (sometimes referred to as 'icon toolbar').

*Syntax*

```
ActionRibbon( *button*, *action*, *parameters* )
```

The required *button* is the name of the button with which the action is to be associated.

The required *action* is the action to be performed when the button is pressed. This must be one of the following constructs. Set-values() is only supported in the ActionRibbon() context for the 'bitmap' resource:

```
set-values( *button*, *resource*, *value* )

set-sensitive( *button* )

set-non-sensitive( *button* )

remove-widget( *button* )

destroy-widget( *button* )
```

Remove-widget() and destroy-widget() are 2 alternative ways to remove the button.

*Examples*

The following is scripted on the Pre-field-entry property of a field:

```
ActionRibbon( 'Save All', set-non-sensitive, 'Save All' )
```

The following is scripted on the Post-leave property of the same field:

```
ActionRibbon( 'Save All', set-sensitive, 'Save All' )
```

 