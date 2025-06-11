---
id: WindowCreateLookupDialog
---

# WindowCreateLookupDialog()




:::note

This article is about the **WindowCreateLookupDialog** action in the [USoft Action Language](/Task_flow/Action_Language_reference/USoft_Action_Language.md).

:::

## **WindowCreateLookupDialog()**

Opens a lookup dialog for the current field. When you specify this action, a lookup button appears.

To open a specific lookup window, you can also use the Create() action.

*Syntax*

```
WindowCreateLookupDialog( *dialog* )
```

The optional *dialog* identifies name of the lookup dialog you want to open. If no name is specified, WindowCreateLookupDialog() opens a default lookup dialog based on the value of the Related Column property.

If the Related Column property is set to TOUR.DESTINATION for example, a default Lookup: TOUR lookup dialog is opened.

*Exposed by*

- Inserted controls with a Related Column property