---
id: ErrorRaise
---

# ErrorRaise()




:::note

This article is about the **ErrorRaise** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **ErrorRaise()**

Raises an error in an eventuality defined by a validation property. Validation properties include Pre-delete, Pre-update Validation, Pre-insert Validation, Pre-close, and the Post-change property of a Column control.

ErrorRaise() does nothing if called from a different place than a validation property.

Use ErrorRaise to force an error. For example, to prevent the user from navigating out of a field if some test is not passed on the value entered in the field, you can call a decision from the Post-change property of the field, write the test in a Decision SQL, and use ErrorRaise() in the No Action script of the decision.

*Syntax*

```
ErrorRaise()
```

If an ErrorRaise() action call has been specified as an element of a action call script, processing is stopped only AFTER all actions in the script have been called. In the following example, BOTH messages are shown:

```
MessageInformation('one')
ErrorRaise()
MessageInformation('two')
```

 