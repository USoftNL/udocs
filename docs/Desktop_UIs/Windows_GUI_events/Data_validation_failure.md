---
id: Data_validation_failure
---

# Data validation failure

Data validation may fail. This can happen when the validation check restrictively prohibits certain data from being entered.

Depending on how the data validation check was implemented, validation failure may lead to all or some of the following:

- Error message
- Navigation block
- Value not displayed in field, or replaced back to old value.
**Error messages**

Error messages are produced as follows:

- If the validation check is performed by a field attribute, USoft produces a set error message such as "Not an allowed character".
- If the validation check is performed by a restrictive constraint, the constraint message defined by the developer is displayed.
- If the validation check is performed by a behavior property (such as Pre-insert Validation), the error must be raised programmatically by calling the ErrorRaise() method. The error message must be provided calling the MessageError() action.
Use the Pre-insert Validation, the Pre-update Validation and the Post-change (column) properties for restrictive data validation. Do NOT use the Post-change (info box) property for this.

You want to raise a validation error under certain conditions only, so you usually want to specify a test. Call the ActionDecision() method to execute a decision, or decision tree. Call ErrorRaise() in either the Yes Action, or the No Action field.

This type of test was previously performed by the SqlScript() routine. This is supported for backward compatibility only.

**Navigation block**

If data validation fails, the navigation action that caused validation to occur is generally blocked. For example:

- If the user attempted to jump to the next field, the input focus remains in the field containing the invalid data.
- If the user attempted to navigate to a new window, that window is not opened.